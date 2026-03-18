"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/* ─── Reusable Input with green accent line ─── */
const InputItem = ({
    label,
    id,
    type = "text",
    placeholder,
    required,
    value,
    onChange,
}: {
    label: string;
    id: string;
    type?: string;
    placeholder: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
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
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-300 font-light text-[18px] text-gray-900 placeholder:text-gray-500"
            />
            {/* Green accent line */}
            <div className="absolute bottom-0 left-[30px] h-[3px] w-[60px] bg-[#053F31] z-10"></div>
        </div>
    </div>
);

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

const IconLock = () => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M19.5 7.5H16.5V5.25C16.5 4.05653 16.0259 2.91193 15.182 2.06802C14.3381 1.22411 13.1935 0.75 12 0.75C10.8065 0.75 9.66193 1.22411 8.81802 2.06802C7.97411 2.91193 7.5 4.05653 7.5 5.25V7.5H4.5C4.10218 7.5 3.72064 7.65804 3.43934 7.93934C3.15804 8.22064 3 8.60218 3 9V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V9C21 8.60218 20.842 8.22064 20.5607 7.93934C20.2794 7.65804 19.8978 7.5 19.5 7.5ZM9 5.25C9 4.45435 9.31607 3.69129 9.87868 3.12868C10.4413 2.56607 11.2044 2.25 12 2.25C12.7956 2.25 13.5587 2.56607 14.1213 3.12868C14.6839 3.69129 15 4.45435 15 5.25V7.5H9V5.25ZM19.5 19.5H4.5V9H19.5V19.5ZM13.125 14.25C13.125 14.4725 13.059 14.69 12.9354 14.875C12.8118 15.06 12.6361 15.2042 12.4305 15.2894C12.225 15.3745 11.9988 15.3968 11.7805 15.3534C11.5623 15.31 11.3618 15.2028 11.2045 15.0455C11.0472 14.8882 10.94 14.6877 10.8966 14.4695C10.8532 14.2512 10.8755 14.025 10.9606 13.8195C11.0458 13.6139 11.19 13.4382 11.375 13.3146C11.56 13.191 11.7775 13.125 12 13.125C12.2984 13.125 12.5845 13.2435 12.7955 13.4545C13.0065 13.6655 13.125 13.9516 13.125 14.25Z"
            fill="white"
            opacity="0.9"
        />
    </svg>
);

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("idle");
        setMessage("");

        if (!email) {
            setStatus("error");
            setMessage("Please enter your email address.");
            return;
        }

        // Check against mock users
        const storedUsers = localStorage.getItem("mock_users");
        const users = storedUsers ? JSON.parse(storedUsers) : [];
        interface User {
            email: string;
        }
        const userExists = users.some((u: User) => u.email === email);

        if (userExists) {
            setStatus("success");
            setMessage("If an account exists for this email, we have sent a password reset link.");
            // In a real app, trigger email sending here
            setTimeout(() => {
                router.push("/login");
            }, 3000);
        } else {
            // For security reasons, usually you shouldn't tell if an email doesn't exist, 
            // but for this mock implementation, we'll simulate the same success message behavior 
            // or explicit error if desired. Let's keep it consistent with "If account exists..."
            setStatus("success");
            setMessage("If an account exists for this email, we have sent a password reset link.");
            setTimeout(() => {
                router.push("/login");
            }, 3000);
        }
    };

    return (
        <section className="mx-[20px] md:mx-[40px] font-outfit selection:bg-[#053F31] selection:text-white">
            {/* ── Hero Header ── */}
            <div className="bg-biomket-gradient relative overflow-hidden rounded-b-[30px]">
                <div className="max-w-[800px] mx-auto text-center py-[60px] md:py-[80px] px-[20px]">
                    <div className="flex justify-center mb-[20px]">
                        <div className="w-[80px] h-[80px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <IconLock />
                        </div>
                    </div>
                    <h2 className="font-lexend text-white font-extralight mb-[15px] leading-tight">
                        Reset Your <span className="font-medium">Password</span>
                    </h2>
                    <p className="font-outfit font-light text-[#DAE6DC] tracking-wide">
                        Enter your email to receive instructions on how to reset your password
                    </p>
                </div>
            </div>

            {/* ── Form Card ── */}
            <div className="mx-[20px] md:mx-[40px] -mt-[30px] relative z-10 mb-[80px]">
                <div className="max-w-[520px] mx-auto bg-[#F7FAF8] border border-gray-200 rounded-2xl p-[25px] sm:p-[40px] shadow-sm">
                    <h3 className="text-[20px] sm:text-[22px] font-semibold text-emerald-900 mb-[20px] pb-[15px] border-b-2">
                        Forgot Password
                    </h3>

                    {message && (
                        <div className={`mb-6 p-4 border rounded-lg text-sm ${status === "success"
                            ? "bg-green-50 border-green-200 text-green-700"
                            : "bg-red-50 border-red-200 text-red-700"
                            }`}>
                            {message}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className="mb-[21px]">
                            <InputItem
                                id="forgot-email"
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* ── Submit Button ── */}
                        <div className="pt-[20px]">
                            <button
                                type="submit"
                                className="w-full bg-[#1B4D3E] text-white font-semibold py-[14px] rounded-full hover:bg-emerald-800 transition flex items-center justify-center gap-[10px]"
                            >
                                Send Reset Link
                                <IconArrowRight />
                            </button>
                        </div>

                        {/* ── Sign In Link ── */}
                        <p className="text-center text-[18px] text-gray-600 font-light pt-[10px]">
                            Remember your password?{" "}
                            <Link
                                href="/login"
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
