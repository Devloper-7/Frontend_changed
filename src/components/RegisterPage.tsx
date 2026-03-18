"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Check, X } from "lucide-react";

/* ─── Reusable Input with green accent line & optional toggle ─── */
const InputItem = ({
    label,
    id,
    type = "text",
    placeholder,
    required,
    value,
    onChange,
    isPassword = false,
}: {
    label: string;
    id: string;
    type?: string;
    placeholder: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isPassword?: boolean;
}) => {
    const [show, setShow] = useState(false);
    const inputType = isPassword ? (show ? "text" : "password") : type;

    return (
        <div>
            <label
                htmlFor={id}
                className="block text-[20px] font-medium text-[#000000] mb-[9px]"
            >
                {label} {required && <span className="text-[#FF0000]">*</span>}
            </label>
            <div className="relative">
                <input
                    id={id}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-300 font-light text-[18px] text-gray-900 placeholder:text-gray-500 pr-12"
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none z-20"
                    >
                        {show ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                )}

                {/* Green accent line */}
                <div className="absolute bottom-0 left-[30px] h-[3px] w-[60px] bg-[#053F31] z-10"></div>
            </div>
        </div>
    );
};

/* ─── SVG Icons ─── */
const IconArrowRight = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
    >
        <path
            d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
            fill="#F7FAF8"
        />
        <path
            d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5"
            stroke="#053F31"
            strokeWidth="2"
        />
    </svg>
);

const IconCheck = () => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const IconUser = () => (
    <svg
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM6.945 18.5156C7.48757 17.6671 8.23501 16.9688 9.11843 16.4851C10.0019 16.0013 10.9928 15.7478 12 15.7478C13.0072 15.7478 13.9982 16.0013 14.8816 16.4851C15.765 16.9688 16.5124 17.6671 17.055 18.5156C15.6097 19.6397 13.831 20.2499 12 20.2499C10.169 20.2499 8.39032 19.6397 6.945 18.5156ZM9 11.25C9 10.6567 9.17595 10.0766 9.5056 9.58329C9.83524 9.08994 10.3038 8.70542 10.852 8.47836C11.4001 8.2513 12.0033 8.19189 12.5853 8.30764C13.1672 8.4234 13.7018 8.70912 14.1213 9.12868C14.5409 9.54824 14.8266 10.0828 14.9424 10.6647C15.0581 11.2467 14.9987 11.8499 14.7716 12.3981C14.5446 12.9462 14.1601 13.4148 13.6667 13.7444C13.1734 14.0741 12.5933 14.25 12 14.25C11.2044 14.25 10.4413 13.9339 9.87868 13.3713C9.31607 12.8087 9 12.0456 9 11.25ZM18.165 17.4759C17.3285 16.2638 16.1524 15.3261 14.7844 14.7806C15.5192 14.2019 16.0554 13.4085 16.3184 12.5108C16.5815 11.6132 16.5582 10.6559 16.252 9.77207C15.9457 8.88825 15.3716 8.12183 14.6096 7.5794C13.8475 7.03696 12.9354 6.74548 12 6.74548C11.0646 6.74548 10.1525 7.03696 9.39044 7.5794C8.62839 8.12183 8.05432 8.88825 7.74805 9.77207C7.44179 10.6559 7.41855 11.6132 7.68157 12.5108C7.94459 13.4085 8.4808 14.2019 9.21563 14.7806C7.84765 15.3261 6.67147 16.2638 5.835 17.4759C4.77804 16.2873 4.0872 14.8185 3.84567 13.2464C3.60415 11.6743 3.82224 10.0658 4.47368 8.61478C5.12512 7.16372 6.18213 5.93192 7.51745 5.06769C8.85276 4.20346 10.4094 3.74367 12 3.74367C13.5906 3.74367 15.1473 4.20346 16.4826 5.06769C17.8179 5.93192 18.8749 7.16372 19.5263 8.61478C20.1778 10.0658 20.3959 11.6743 20.1543 13.2464C19.9128 14.8185 19.222 16.2873 18.165 17.4759Z"
            fill="white"
            opacity="0.9"
        />
    </svg>
);

const IconDropDown = () => (
    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6641 0.748047L7.42406 6.74805L0.664063 0.748046" stroke="#053F31" strokeWidth="2" />
    </svg>

);

/* ─── Country select with accent line ─── */
const CountrySelect = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => (
    <div>
        <label
            htmlFor="country"
            className="block text-[20px] font-medium text-gray-900 mb-[9px]"
        >
            Country <span className="text-[#FF0000]">*</span>
        </label>
        <div className="relative">
            <select
                id="country"
                value={value}
                onChange={onChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-gray-300 font-light text-[18px] text-gray-500"
            >
                <option value="">Select your country</option>
                <option className="text-[#053F31] rounded-[20px] " value="ES">Spain</option>
                <option className="text-[#053F31] rounded-[20px] " value="ZA">South Africa</option>
                <option className="text-[#053F31] rounded-[20px] " value="DE">Germany</option>
                <option className="text-[#053F31] rounded-[20px] " value="FR">France</option>
                <option className="text-[#053F31] rounded-[20px] " value="GB">United Kingdom</option>
                <option className="text-[#053F31] rounded-[20px] " value="NL">Netherlands</option>
                <option className="text-[#053F31] rounded-[20px] " value="IT">Italy</option>
                <option className="text-[#053F31] rounded-[20px] " value="PT">Portugal</option>
                <option className="text-[#053F31] rounded-[20px] " value="IN">India</option>
                <option className="text-[#053F31] rounded-[20px] " value="OTHER">Other</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <IconDropDown />
            </div>
            {/* Green accent line */}
            <div className="absolute bottom-0 left-[30px] h-[3px] w-[60px] bg-[#053F31] z-10"></div>
        </div>
    </div>
);

// console.log(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/register`);
export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        full_name: "",
        email: "",
        phone: "",
        company_name: "",
        country: "",
        password: "",
        confirm_password: "",
        privacy_policy_accepted: false,
    });
    // const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState("");

    // Regex patterns
    const passwordRegex = {
        minLength: 8,
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        number: /[0-9]/,
        specialChar: /[!@#$%^&*(),.?":{}|<>]/,
    };

    const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
        setError(""); // Clear error on change
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Basic validation
        if (!form.full_name || !form.email || !form.phone || !form.country || !form.password || !form.confirm_password) {
            setError("Please fill in all required fields.");
            return;
        }

        if (form.password !== form.confirm_password) {
            setError("Passwords do not match.");
            return;
        }

        // Password Strength Validation
        if (form.password.length < passwordRegex.minLength) {
            setError("Password must be at least 8 characters long.");
            return;
        }
        if (!passwordRegex.uppercase.test(form.password)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!passwordRegex.lowercase.test(form.password)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }
        if (!passwordRegex.number.test(form.password)) {
            setError("Password must contain at least one number.");
            return;
        }
        if (!passwordRegex.specialChar.test(form.password)) {
            setError("Password must contain at least one special character (!@#$%^&*...)");
            return;
        }

        if (!form.privacy_policy_accepted) {
            setError("You must agree to the Privacy Policy and Terms.");
            return;
        }
        // console.log(`${process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY}`, JSON.stringify({
        //     full_name: form.full_name,
        //     email: form.email,
        //     phone: form.phone,
        //     company_name: form.company_name,
        //     country: form.country,
        //     password: form.password,
        //     confirm_password: form.confirm_password,
        //     privacy_policy_accepted: form.privacy_policy_accepted,
        // }));
        // Register through Medusa (POST /api/register)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY as string },
                body: JSON.stringify({
                    full_name: form.full_name,
                    email: form.email,
                    phone: form.phone,
                    company_name: form.company_name,
                    country: form.country,
                    password: form.password,
                    confirm_password: form.confirm_password,
                    privacy_policy_accepted: form.privacy_policy_accepted,
                }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setError((data.error as string) || "Registration failed.");
                return;
            }
        } catch (err) {
            setError("Unable to reach registration service. Please try again.");
            return;
        }

        // API stores the data; redirect to signin
        router.push("/signin");
    };

    return (
        <section className="mx-[20px] md:mx-[40px] font-outfit selection:bg-[#053F31] selection:text-white">
            {/* ── Hero Header ── */}
            <div className="bg-biomket-gradient relative overflow-hidden rounded-b-[30px]">
                <div className="max-w-[800px] mx-auto text-center py-[60px] md:py-[80px] px-[20px]">
                    <div className="flex justify-center mb-[20px]">
                        <div className="w-[80px] h-[80px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <IconUser />
                        </div>
                    </div>
                    <h2 className="font-lexend text-white font-extralight mb-[15px] leading-tight">
                        Create Your <span className="font-medium">Account</span>
                    </h2>
                    <p className="font-outfit font-light text-[#DAE6DC] tracking-wide">
                        Join Europe&apos;s leading B2B marketplace for organic waste valorization
                    </p>
                </div>
            </div>

            {/* ── Form Card ── */}
            <div className="mx-[20px] md:mx-[40px] -mt-[30px] relative z-10 mb-[80px]">
                <div className="max-w-[780px] mx-auto bg-[#F7FAF8] border border-gray-200 rounded-2xl p-[25px] sm:p-[40px] shadow-sm">
                    <h3 className="text-[20px] sm:text-[22px] font-semibold text-emerald-900 mb-[20px] pb-[15px] border-b-2">
                        Registration Form
                    </h3>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-[16px]">
                            {error}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Row 1: Full Name & Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 mb-[21px] gap-[21px]">
                            <InputItem
                                id="full_name"
                                label="Full Name"
                                placeholder="Enter your full name"
                                required
                                value={form.full_name}
                                onChange={update("full_name")}
                            />
                            <InputItem
                                id="email"
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={form.email}
                                onChange={update("email")}
                            />
                        </div>

                        {/* Row 2: Phone & Company */}
                        <div className="grid grid-cols-1 md:grid-cols-2 mb-[21px] gap-[21px]">
                            <InputItem
                                id="phone"
                                label="Phone"
                                placeholder="Enter your phone number"
                                required
                                value={form.phone}
                                onChange={update("phone")}
                            />
                            <InputItem
                                id="company"
                                label="Company Name"
                                placeholder="Enter your company"
                                value={form.company_name}
                                onChange={update("company")}
                            />
                        </div>

                        {/* Row 3: Country */}
                        <div className="mb-[21px]">
                            <CountrySelect value={form.country} onChange={update("country")} />
                        </div>

                        {/* Row 4: Password & Confirm with Real-time Validation */}
                        <div className="grid grid-cols-1 md:grid-cols-2 mb-[21px] gap-[21px] items-start">
                            <div className="flex flex-col gap-2">
                                <InputItem
                                    id="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Create a password"
                                    required
                                    value={form.password}
                                    onChange={update("password")}
                                    isPassword={true}
                                />

                                {/* Real-time Password Strength Checklist */}
                                {form.password.length > 0 && (
                                    <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm mt-2 text-sm space-y-1">
                                        <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Password Requirements</p>

                                        <div className={`flex items-center gap-2 ${form.password.length >= passwordRegex.minLength ? 'text-green-600' : 'text-gray-400'}`}>
                                            {form.password.length >= passwordRegex.minLength ? <Check size={14} /> : <div className="w-3.5 h-3.5 rounded-full border border-gray-300"></div>}
                                            <span>Min 8 chars</span>
                                        </div>

                                        <div className={`flex items-center gap-2 ${passwordRegex.uppercase.test(form.password) ? 'text-green-600' : 'text-gray-400'}`}>
                                            {passwordRegex.uppercase.test(form.password) ? <Check size={14} /> : <div className="w-3.5 h-3.5 rounded-full border border-gray-300"></div>}
                                            <span>Uppercase letter</span>
                                        </div>

                                        <div className={`flex items-center gap-2 ${passwordRegex.lowercase.test(form.password) ? 'text-green-600' : 'text-gray-400'}`}>
                                            {passwordRegex.lowercase.test(form.password) ? <Check size={14} /> : <div className="w-3.5 h-3.5 rounded-full border border-gray-300"></div>}
                                            <span>Lowercase letter</span>
                                        </div>

                                        <div className={`flex items-center gap-2 ${passwordRegex.number.test(form.password) ? 'text-green-600' : 'text-gray-400'}`}>
                                            {passwordRegex.number.test(form.password) ? <Check size={14} /> : <div className="w-3.5 h-3.5 rounded-full border border-gray-300"></div>}
                                            <span>Number</span>
                                        </div>

                                        <div className={`flex items-center gap-2 ${passwordRegex.specialChar.test(form.password) ? 'text-green-600' : 'text-gray-400'}`}>
                                            {passwordRegex.specialChar.test(form.password) ? <Check size={14} /> : <div className="w-3.5 h-3.5 rounded-full border border-gray-300"></div>}
                                            <span>Special char (!@#...)</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <InputItem
                                id="confirm_password"
                                label="Confirm Password"
                                type="password"
                                placeholder="Re-enter your password"
                                required
                                value={form.confirm_password}
                                onChange={update("confirm_password")}
                                isPassword={true}
                            />
                        </div>

                        {/* ── Privacy Checkbox ── */}
                        <label className="flex items-start gap-3 cursor-pointer group pt-[10px]">
                            <div className="relative mt-1">
                                <input
                                    type="checkbox"
                                    checked={form.privacy_policy_accepted}
                                    onChange={() => setForm((prev) => ({ ...prev, privacy_policy_accepted: !prev.privacy_policy_accepted }))}
                                    className="peer sr-only"
                                />
                                <div className="w-5 h-5 border border-gray-300 rounded bg-transparent peer-checked:bg-[#053F31] peer-checked:border-[#053F31] transition-all"></div>
                                <div className="absolute top-1 left-1 text-white hidden peer-checked:block pointer-events-none">
                                    <IconCheck />
                                </div>
                            </div>
                            <span className="text-[18px] text-gray-900 font-light select-none leading-relaxed">
                                I accept the{" "}
                                <Link
                                    href="/privacy-policy"
                                    className="underline text-[#053F31] hover:text-emerald-800 transition-colors"
                                >
                                    Privacy Policy
                                </Link>{" "}
                                and{" "}
                                <Link
                                    href="/terms"
                                    className="underline text-[#053F31] hover:text-emerald-800 transition-colors"
                                >
                                    Terms of Service
                                </Link>{" "}
                                <span className="text-[#FF0000]">*</span>
                            </span>
                        </label>

                        {/* ── Submit Button ── */}
                        <div className="pt-[15px]">
                            <button
                                type="submit"
                                className="bg-[#1B4D3E] cursor-pointer text-white font-semibold py-[7px] ps-[15px] pe-[7px] rounded-full hover:bg-emerald-800 transition flex items-center gap-[10px]"
                            >
                                Create Account
                                <IconArrowRight />
                            </button>
                        </div>

                        {/* ── Sign In Link ── */}
                        <p className="text-center text-[18px] text-gray-600 font-light pt-[10px]">
                            Already have an account?{" "}
                            <Link
                                href="/signin"
                                className="text-[#053F31] font-medium hover:underline transition-colors"
                            >
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
