import { NextRequest, NextResponse } from "next/server";

const MEDUSA_BACKEND_URL = process.env.MEDUSA_BACKEND_URL || process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "";
const MEDUSA_PUBLISHABLE_KEY = process.env.MEDUSA_PUBLISHABLE_API_KEY || process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY || "";

export async function POST(request: NextRequest) {
    if (!MEDUSA_BACKEND_URL) {
        return NextResponse.json(
            { error: "Medusa backend URL is not configured. Set MEDUSA_BACKEND_URL or NEXT_PUBLIC_MEDUSA_BACKEND_URL." },
            { status: 500 }
        );
    }

    let body: { fullName?: string; email?: string; phone?: string; company?: string; country?: string; password?: string };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    const { fullName = "", email = "", password = "", phone = "", company = "" } = body;
    if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const base = MEDUSA_BACKEND_URL.replace(/\/$/, "");
    const authRegisterUrl = `${base}/auth/customer/emailpass/register`;
    const authLoginUrl = `${base}/auth/customer/emailpass`;
    const storeCustomersUrl = `${base}/store/customers`;

    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };
    if (MEDUSA_PUBLISHABLE_KEY) {
        headers["x-publishable-api-key"] = MEDUSA_PUBLISHABLE_KEY;
    }

    let token: string | null = null;

    // Step 1: Get registration token (or login token if identity already exists)
    const registerRes = await fetch(authRegisterUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({ email, password }),
    });

    if (registerRes.ok) {
        const data = await registerRes.json();
        token = data.token ?? data.access_token ?? null;
    } else {
        const errText = await registerRes.text();
        let errJson: { message?: string } = {};
        try {
            errJson = JSON.parse(errText);
        } catch {
            errJson = { message: errText };
        }
        const message = (errJson.message || errText || "").toLowerCase();
        const isExistingIdentity =
            registerRes.status === 401 ||
            message.includes("identity with email already exists") ||
            message.includes("already exists");

        if (isExistingIdentity) {
            const loginRes = await fetch(authLoginUrl, {
                method: "POST",
                headers,
                body: JSON.stringify({ email, password }),
            });
            if (loginRes.ok) {
                const loginData = await loginRes.json();
                token = loginData.token ?? loginData.access_token ?? null;
            } else {
                const loginErr = await loginRes.json().catch(() => ({}));
                return NextResponse.json(
                    { error: (loginErr as { message?: string }).message || "An account with this email already exists. Please sign in." },
                    { status: loginRes.status }
                );
            }
        } else {
            return NextResponse.json(
                { error: (errJson.message as string) || "Registration failed." },
                { status: registerRes.status }
            );
        }
    }

    if (!token) {
        return NextResponse.json(
            { error: "Could not obtain authentication token." },
            { status: 500 }
        );
    }

    // Step 2: Create customer in Medusa store
    const nameParts = (fullName || "").trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const customerRes = await fetch(storeCustomersUrl, {
        method: "POST",
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            email,
            first_name: firstName,
            last_name: lastName,
            ...(phone && { phone }),
            ...(company && { company_name: company }),
        }),
    });

    if (!customerRes.ok) {
        const errText = await customerRes.text();
        let errJson: { message?: string } = {};
        try {
            errJson = JSON.parse(errText);
        } catch {
            errJson = { message: errText };
        }
        return NextResponse.json(
            { error: (errJson.message as string) || "Failed to create customer profile." },
            { status: customerRes.status }
        );
    }

    const customer = await customerRes.json();
    return NextResponse.json({ success: true, customer });
}
