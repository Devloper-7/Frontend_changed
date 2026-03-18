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

    let body: { email?: string; password?: string };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    const { email = "", password = "" } = body;
    if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const base = MEDUSA_BACKEND_URL.replace(/\/$/, "");
    const authLoginUrl = `${base}/auth/customer/emailpass`;

    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };
    if (MEDUSA_PUBLISHABLE_KEY) {
        headers["x-publishable-api-key"] = MEDUSA_PUBLISHABLE_KEY;
    }

    const loginRes = await fetch(authLoginUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({ email, password }),
    });

    if (!loginRes.ok) {
        const errText = await loginRes.text();
        let errJson: { message?: string } = {};
        try {
            errJson = JSON.parse(errText);
        } catch {
            errJson = { message: errText };
        }
        return NextResponse.json(
            { error: (errJson.message as string) || "Invalid email or password." },
            { status: loginRes.status }
        );
    }

    const data = await loginRes.json();
    const token = data.token ?? data.access_token ?? null;
    if (!token) {
        return NextResponse.json(
            { error: "Could not obtain authentication token." },
            { status: 500 }
        );
    }

    return NextResponse.json({ success: true, token, email });
}
