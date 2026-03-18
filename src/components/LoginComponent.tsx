"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
      className="block text-[20px] leading-[150%] font-outfit font-medium text-[#000000] mb-[9px]"
    >
      {label} {required && <span className="text-[#FF0000] text-[20px] leading-[150%] font-outfit font-medium">*</span>}
    </label>
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-[#053F31]/20 rounded-[5px] px-[30px] py-3 focus:outline-none focus:border-gray-300 text-[18px] leading-[150%] font-outfit font-light text-[18px] text-[#999999] placeholder:text-[#999999]"
      />
      {/* Green accent line - below input so it's visible */}
      <div className="absolute bottom-0 left-[30px] h-[2px] w-[60px] bg-[#053F31] z-10"></div>
    </div>
  </div>
);

/** White arrow in solid green circle (as in image) */
const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M0 18C0 8.05887 8.05887 0 18 0V0C27.9411 0 36 8.05887 36 18V18C36 27.9411 27.9411 36 18 36V36C8.05887 36 0 27.9411 0 18V18Z" fill="#F7FAF8" />
    <path d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" stroke="#053F31" strokeWidth="2" />
  </svg>
);

export default function LoginComponent() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);


  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email.trim()) {
      setError("Please enter your email.");
      return;
    } else if (!form.password) {
      setError("Please enter your password.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      // Static data instead of API call
      const staticToken = "static_token_placeholder";
      const userEmail = form.email;
      const displayName = userEmail ? userEmail.split("@")[0] : userEmail;
      localStorage.setItem("currentUser", JSON.stringify({ email: userEmail, token: staticToken, name: displayName || userEmail }));
      router.push("/dashboard");
    } catch (err) {
      setError("Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center font-outfit">
      {/* OLD DESKTOP CODE (COMMENTED): previous desktop two-card layout kept for reference.
          Note: This is intentionally commented and not rendered.
      <div className="hidden xl:flex w-full max-w-[1240px] h-[543px] mb-[130px] flex-row gap-[30px] rounded-[20px] overflow-hidden">
        ...previous desktop two-card layout...
      </div> */}

      {/* NEW DESKTOP CODE (ACTIVE): applies to 1440p + 1920p */}
      <div className="hidden xl:block w-full 2xl:max-w-[1270px] xl:max-w-[925px] mb-[130px]">
        <div className="rounded-[20px] border border-[#053F31]/15 bg-[#F7FAF8]/80 p-[30px]">
          <h3 className="font-semibold text-[#053F31] mb-[14px]">Sign in</h3>
          {error && (
            <div className="mb-4 p-3 rounded-[5px] bg-red-50 border border-red-200 text-red-700 text-[14px] font-outfit">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-[10px]">
            <div>
              <InputItem
                id="signin-email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                required
                value={form.email}
                onChange={update("email")}
              />
            </div>

            <div>
              <InputItem
                id="signin-password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                required
                value={form.password}
                onChange={update("password")}
              />
            </div>

            <div className="flex items-center justify-between pt-[10px]">
              <div className="h-[58px] w-[300px] rounded-[4px] border border-[#D9D9D9] bg-[#F1F1F1] flex items-center px-[10px] text-[12px] text-[#424242]">
                <div className="h-[18px] w-[18px] rounded-[2px] border border-[#BDBDBD] bg-white mr-[10px]" />
                I&apos;m not a robot
              </div>
              <Link
                href="/forgot-password"
                className="text-[16px] leading-[150%] font-outfit text-[#053F31] font-semibold hover:underline transition-colors"
              >
                Forgot your password?
              </Link>
            </div>

            <div className="pt-[8px]">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-[10px] w-full max-w-[130px] bg-[#053F31] font-outfit text-[18px] leading-[150%] text-white font-semibold p-[7px_7px_7px_15px] cursor-pointer rounded-full border-2 hover:border-[#0F3F32] hover:bg-[#ffffff] hover:text-[#0F3F32] transition"
              >
                Sign In
                <IconArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* MOBILE/TABLET CODE (ACTIVE): unchanged mobile behavior */}
      <div className="w-full max-w-[1240px] mb-[70px] md:mb-[130px] flex flex-col lg:flex-row gap-[30px] rounded-[20px] xl:hidden">
        {/* Left: Sign in form - white card */}
        {/* <div className="flex-1 bg-[#F7FAF8] border border-[#053F31]/20 rounded-[20px] p-6 sm:p-8 md:p-10">
          <h2 className="text-[#053F31] text-2xl font-bold mb-6">
            Sign in
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="login-email" className="block text-black font-bold text-sm mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="Enter Your Mail"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className="w-full px-4 py-3 bg-white border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#053F31] placeholder:text-[#B0B0B0] text-gray-900"
              />
              <div className="h-0.5 w-14 bg-[#053F31] mt-1 rounded" aria-hidden />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-black font-bold text-sm mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="login-password"
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                className="w-full px-4 py-3 bg-white border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#053F31] placeholder:text-[#B0B0B0] text-gray-900"
              />
              <div className="h-0.5 w-14 bg-[#053F31] mt-1 rounded" aria-hidden />
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={captchaChecked}
                  onChange={(e) => setCaptchaChecked(e.target.checked)}
                  className="w-4 h-4 rounded border-[#E0E0E0] text-[#053F31] focus:ring-[#053F31]"
                />
                <span className="text-gray-700 text-sm">I&apos;m not a robot</span>
              </label>
              <span className="text-gray-500 text-xs">reCAPTCHA Privacy - Terms</span>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Link
              href="/forgot-password"
              className="block text-[#053F31] text-sm font-medium hover:underline"
            >
              Forgot your password?
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-[#053F31] text-white font-bold py-3.5 px-5 rounded-full hover:bg-[#042a24] transition disabled:opacity-70"
            >
              Sign In
              <IconArrowRight />
            </button>
          </form>
        </div> */}
        <div className="w-full max-w-[605px] mx-auto bg-[#F7FAF8] border border-[#053F31]/20 rounded-[20px] p-[20px] sm:p-[30px]">
          <h3 className="font-semibold text-[#053F31] mb-[20px] pb-[15px] border-b-2 border-[#000000]/10">
            Sign In
          </h3>

          {error && (
            <div className="mb-4 p-3 rounded-[5px] bg-red-50 border border-red-200 text-red-700 text-[14px] font-outfit">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-[21px]">
              <InputItem
                id="signin-email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                required
                value={form.email}
                onChange={update("email")}
              />
            </div>

            {/* Password */}
            <div className="mb-[21px]">
              <InputItem
                id="signin-password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                required
                value={form.password}
                onChange={update("password")}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            {/* <div className="flex flex-wrap items-center justify-between pt-[5px]"> */}
            {/* Remember me checkbox */}
            {/* <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 border border-gray-300 rounded bg-transparent peer-checked:bg-[#053F31] peer-checked:border-[#053F31] transition-all"></div>
                  <div className="absolute top-1 left-1 text-white hidden peer-checked:block pointer-events-none">
                    <IconCheck />
                  </div>
                </div>
                <span className="text-[18px] text-gray-900 font-light select-none">
                  Remember me
                </span>
              </label> */}

            {/* Forgot password */}
            <Link
              href="/forgot-password"
              className="text-[18px] leading-[150%] font-outfit mt-2 md:mt-0 text-[#053F31] font-semibold hover:underline transition-colors"
            >
              Forgot password?
            </Link>

            {/* Mobile/Tablet recaptcha visual block */}
            <div className="h-[58px] w-[247px] rounded-[4px] border border-[#D9D9D9] bg-[#F1F1F1] flex items-center px-[10px] text-[12px] text-[#424242]">
              <div className="h-[18px] w-[18px] rounded-[2px] border border-[#BDBDBD] bg-white mr-[10px]" />
              I&apos;m not a robot
            </div>
            {/* </div> */}

            {/* ── Submit Button ── */}
            <div className="pt-[30px]">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-[10px] w-full max-w-[109px] bg-[#053F31] font-outfit text-[18px] leading-[150%] text-white font-semibold p-[7px_7px_7px_15px] cursor-pointer rounded-full border-2 hover:border-[#0F3F32] hover:bg-[#ffffff] hover:text-[#0F3F32] transition"
              >
                Sign In
                <span className="inline-flex shrink-0 [&_path:first-of-type]:fill-white [&_path:last-of-type]:stroke-white transition-[fill,stroke] duration-200 group-hover:[&_path:first-of-type]:fill-[#F7FAF8] group-hover:[&_path:last-of-type]:stroke-[#053F31]">
                  <IconArrowRight />
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Right: Sign up prompt - light mint green card */}
        <div className="bg-[#DAE6DC]/70 border border-[#053F31]/20 rounded-[20px] p-[20px] sm:p-[30px] flex flex-col justify-between">
          <div>
            <h3 className="font-outfit text-[#053F31] font-semibold mb-[20px] pb-[15px] border-b-2 border-[#000000]/10">
              Don&apos;t have an account yet?
            </h3>
            <p className="text-extralight mb-6 md:mb-8">
              Sign up and access the marketplace for organic waste and by-products.
            </p>
          </div>
          <Link
            href="/register"
            className="w-full max-w-[129px] bg-[#053F31] font-outfit text-[18px] leading-[150%] text-white font-semibold p-[7px_7px_7px_15px] cursor-pointer rounded-full hover:bg-emerald-800 transition flex items-center justify-center gap-[10px]"
          >
            Sign up
            <IconArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
