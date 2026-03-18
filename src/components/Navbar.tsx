"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";

// (Keep any import statements you have here for your IconSignIn, IconRegister, etc.)
// const IconCompanyLogo = () => {
//     return (
//         <svg width="157" height="36" viewBox="0 0 157 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//             <rect width="157" height="36" fill="url(#pattern0_1150_7842)" />
//             <defs>
//                 <pattern id="pattern0_1150_7842" patternContentUnits="objectBoundingBox" width="1" height="1">
//                     <use href="#image0_1150_7842" transform="matrix(0.000244141 0 0 0.00106534 0 -0.000451963)" />
//                 </pattern>

//             </defs>
//         </svg>


//     )
// }

const IconSignIn = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 7.5H16.5V5.25C16.5 4.05653 16.0259 2.91193 15.182 2.06802C14.3381 1.22411 13.1935 0.75 12 0.75C10.8065 0.75 9.66193 1.22411 8.81802 2.06802C7.97411 2.91193 7.5 4.05653 7.5 5.25V7.5H4.5C4.10218 7.5 3.72064 7.65804 3.43934 7.93934C3.15804 8.22064 3 8.60218 3 9V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V9C21 8.60218 20.842 8.22064 20.5607 7.93934C20.2794 7.65804 19.8978 7.5 19.5 7.5ZM9 5.25C9 4.45435 9.31607 3.69129 9.87868 3.12868C10.4413 2.56607 11.2044 2.25 12 2.25C12.7956 2.25 13.5587 2.56607 14.1213 3.12868C14.6839 3.69129 15 4.45435 15 5.25V7.5H9V5.25ZM19.5 19.5H4.5V9H19.5V19.5ZM13.125 14.25C13.125 14.4725 13.059 14.69 12.9354 14.875C12.8118 15.06 12.6361 15.2042 12.4305 15.2894C12.225 15.3745 11.9988 15.3968 11.7805 15.3534C11.5623 15.31 11.3618 15.2028 11.2045 15.0455C11.0472 14.8882 10.94 14.6877 10.8966 14.4695C10.8532 14.2512 10.8755 14.025 10.9606 13.8195C11.0458 13.6139 11.19 13.4382 11.375 13.3146C11.56 13.191 11.7775 13.125 12 13.125C12.2984 13.125 12.5845 13.2435 12.7955 13.4545C13.0065 13.6655 13.125 13.9516 13.125 14.25Z" fill="#053F31" />
        </svg>

    );
}
const IconRegister = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM6.945 18.5156C7.48757 17.6671 8.23501 16.9688 9.11843 16.4851C10.0019 16.0013 10.9928 15.7478 12 15.7478C13.0072 15.7478 13.9982 16.0013 14.8816 16.4851C15.765 16.9688 16.5124 17.6671 17.055 18.5156C15.6097 19.6397 13.831 20.2499 12 20.2499C10.169 20.2499 8.39032 19.6397 6.945 18.5156ZM9 11.25C9 10.6567 9.17595 10.0766 9.5056 9.58329C9.83524 9.08994 10.3038 8.70542 10.852 8.47836C11.4001 8.2513 12.0033 8.19189 12.5853 8.30764C13.1672 8.4234 13.7018 8.70912 14.1213 9.12868C14.5409 9.54824 14.8266 10.0828 14.9424 10.6647C15.0581 11.2467 14.9987 11.8499 14.7716 12.3981C14.5446 12.9462 14.1601 13.4148 13.6667 13.7444C13.1734 14.0741 12.5933 14.25 12 14.25C11.2044 14.25 10.4413 13.9339 9.87868 13.3713C9.31607 12.8087 9 12.0456 9 11.25ZM18.165 17.4759C17.3285 16.2638 16.1524 15.3261 14.7844 14.7806C15.5192 14.2019 16.0554 13.4085 16.3184 12.5108C16.5815 11.6132 16.5582 10.6559 16.252 9.77207C15.9457 8.88825 15.3716 8.12183 14.6096 7.5794C13.8475 7.03696 12.9354 6.74548 12 6.74548C11.0646 6.74548 10.1525 7.03696 9.39044 7.5794C8.62839 8.12183 8.05432 8.88825 7.74805 9.77207C7.44179 10.6559 7.41855 11.6132 7.68157 12.5108C7.94459 13.4085 8.4808 14.2019 9.21563 14.7806C7.84765 15.3261 6.67147 16.2638 5.835 17.4759C4.77804 16.2873 4.0872 14.8185 3.84567 13.2464C3.60415 11.6743 3.82224 10.0658 4.47368 8.61478C5.12512 7.16372 6.18213 5.93192 7.51745 5.06769C8.85276 4.20346 10.4094 3.74367 12 3.74367C13.5906 3.74367 15.1473 4.20346 16.4826 5.06769C17.8179 5.93192 18.8749 7.16372 19.5263 8.61478C20.1778 10.0658 20.3959 11.6743 20.1543 13.2464C19.9128 14.8185 19.222 16.2873 18.165 17.4759Z" fill="#053F31" />
        </svg>


    );
}
const IconHamburger = () => {
    return (
        <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.5" y1="-1.5" x2="20.5" y2="-1.5" transform="matrix(1 0 0 -1 5 0)" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <line x1="6.5" y1="19.5" x2="25.5" y2="19.5" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <line x1="1.5" y1="10.5" x2="25.5" y2="10.5" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>

    );
}
const IconClose = () => {
    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.728489 22.2696C0.801464 22.3426 0.888123 22.4006 0.983511 22.4401C1.0789 22.4796 1.18115 22.5 1.28441 22.5C1.38766 22.5 1.48991 22.4796 1.5853 22.4401C1.68069 22.4006 1.76735 22.3426 1.84032 22.2696L11.4971 12.6136L21.1579 22.2696C21.3053 22.417 21.5053 22.4998 21.7138 22.4998C21.9223 22.4998 22.1223 22.417 22.2697 22.2696C22.4172 22.1221 22.5 21.9222 22.5 21.7137C22.5 21.5052 22.4172 21.3053 22.2697 21.1578L12.609 11.5019L22.2658 1.84198C22.4132 1.69455 22.4961 1.4946 22.4961 1.28611C22.4961 1.07762 22.4132 0.877672 22.2658 0.730247C22.1184 0.582822 21.9184 0.5 21.7099 0.5C21.5014 0.5 21.3014 0.582822 21.154 0.730247L11.4971 10.3901L1.83639 0.734176C1.68608 0.605461 1.49272 0.538202 1.29497 0.54584C1.09722 0.553478 0.909628 0.635449 0.769691 0.775374C0.629754 0.915299 0.547775 1.10287 0.540137 1.30061C0.532499 1.49834 0.599763 1.69168 0.728489 1.84198L10.3853 11.5019L0.728489 21.1618C0.582143 21.309 0.5 21.5081 0.5 21.7157C0.5 21.9232 0.582143 22.1224 0.728489 22.2696Z" fill="black" stroke="black" />
        </svg>

    );
}

const IconProfileMenu = () => {
    return (
        <svg width="5" height="21" viewBox="0 0 5 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#282828" />
            <circle cx="2.5" cy="10.5" r="2.5" fill="#282828" />
            <circle cx="2.5" cy="18.5" r="2.5" fill="#282828" />
        </svg>

    );
}

const IconProfile = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 0C10.4288 0 7.91543 0.762437 5.77759 2.19089C3.63975 3.61935 1.97351 5.64967 0.989572 8.02511C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5994 25.9944 17.9749 25.0104C20.3503 24.0265 22.3806 22.3602 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.9964 9.5533 24.6256 6.24881 22.1884 3.81163C19.7512 1.37445 16.4467 0.00363977 13 0ZM6.26 21.6875C6.98342 20.5561 7.98001 19.625 9.15791 18.9801C10.3358 18.3351 11.6571 17.9971 13 17.9971C14.3429 17.9971 15.6642 18.3351 16.8421 18.9801C18.02 19.625 19.0166 20.5561 19.74 21.6875C17.8129 23.1862 15.4413 23.9999 13 23.9999C10.5587 23.9999 8.18708 23.1862 6.26 21.6875ZM9 12C9 11.2089 9.2346 10.4355 9.67413 9.77772C10.1137 9.11992 10.7384 8.60723 11.4693 8.30448C12.2002 8.00173 13.0044 7.92252 13.7804 8.07686C14.5563 8.2312 15.269 8.61216 15.8284 9.17157C16.3878 9.73098 16.7688 10.4437 16.9231 11.2196C17.0775 11.9956 16.9983 12.7998 16.6955 13.5307C16.3928 14.2616 15.8801 14.8863 15.2223 15.3259C14.5645 15.7654 13.7911 16 13 16C11.9391 16 10.9217 15.5786 10.1716 14.8284C9.42143 14.0783 9 13.0609 9 12ZM21.22 20.3012C20.1047 18.6851 18.5365 17.4348 16.7125 16.7075C17.6923 15.9358 18.4072 14.878 18.7579 13.6811C19.1086 12.4843 19.0776 11.2079 18.6693 10.0294C18.2609 8.851 17.4955 7.8291 16.4794 7.10586C15.4634 6.38262 14.2472 5.99397 13 5.99397C11.7528 5.99397 10.5366 6.38262 9.52058 7.10586C8.50452 7.8291 7.73909 8.851 7.33074 10.0294C6.92238 11.2079 6.8914 12.4843 7.24209 13.6811C7.59279 14.878 8.30773 15.9358 9.2875 16.7075C7.46353 17.4348 5.89529 18.6851 4.78 20.3012C3.37072 18.7165 2.44959 16.7581 2.12756 14.6619C1.80553 12.5657 2.09631 10.4211 2.9649 8.48637C3.83349 6.55163 5.24285 4.90922 7.02326 3.75692C8.80367 2.60462 10.8792 1.99156 13 1.99156C15.1208 1.99156 17.1963 2.60462 18.9767 3.75692C20.7572 4.90922 22.1665 6.55163 23.0351 8.48637C23.9037 10.4211 24.1945 12.5657 23.8724 14.6619C23.5504 16.7581 22.6293 18.7165 21.22 20.3012Z" fill="#053F31" />
    </svg>
);

const IconLogout = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
        <path d="M17.3143 15.0991C16.8697 15.0991 16.5092 15.4628 16.5092 15.9115V19.0828C16.5092 19.6953 16.0155 20.1936 15.4085 20.1936H11.1869V7.50236C11.1869 6.49862 10.6929 5.63517 9.83148 5.13325L3.80962 1.62483H15.4085C16.0155 1.62483 16.5092 2.1231 16.5092 2.73561V6.35294C16.5092 6.80165 16.8697 7.16536 17.3143 7.16536C17.7589 7.16536 18.1194 6.80165 18.1194 6.35294V2.73561C18.1194 1.22721 16.9033 0 15.4085 0H2.71089C1.21612 0 0 1.22721 0 2.73561V19.8957C0 20.8995 0.494015 21.7629 1.35545 22.2648L7.12059 25.6236C7.55136 25.8745 8.01367 26.0001 8.47604 26C8.93835 26 9.40082 25.8745 9.83143 25.6236C10.6929 25.1218 11.1869 24.2583 11.1869 23.2545V21.8184H15.4084C16.9033 21.8184 18.1193 20.5912 18.1193 19.0828V15.9115C18.1194 15.4628 17.759 15.0991 17.3143 15.0991ZM9.57678 23.2545C9.57678 23.6681 9.38135 24.0097 9.02641 24.2164C8.67152 24.4232 8.28061 24.4232 7.92572 24.2164L2.16052 20.8577C1.80558 20.6509 1.61015 20.3092 1.61015 19.8957V2.73561C1.61015 2.57211 1.64532 2.41673 1.70847 2.27685L9.02641 6.54041C9.38135 6.74717 9.57678 7.08884 9.57678 7.50236V23.2545ZM22.7642 11.4837L20.1481 14.1236C19.9909 14.2823 19.7848 14.3616 19.5788 14.3616C19.3728 14.3616 19.1668 14.2823 19.0096 14.1236C18.6952 13.8064 18.6952 13.292 19.0096 12.9747L20.2514 11.7216H12.8547C12.4101 11.7216 12.0497 11.3579 12.0497 10.9092C12.0497 10.4605 12.4101 10.0968 12.8547 10.0968H20.2513L19.0096 8.84371C18.6952 8.52646 18.6952 8.01205 19.0096 7.6948C19.324 7.3775 19.8337 7.3775 20.1481 7.6948L22.7642 10.3347C23.0786 10.652 23.0786 11.1665 22.7642 11.4837Z" fill="#053F31" />
    </svg>
);

const IconCart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
        <path d="M7.5 22.5C6.67 22.5 6 21.83 6 21c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM21 21c0 .83-.67 1.5-1.5 1.5S18 21.83 18 21s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM22.5 5.25H5.25L4.05 1.8C3.9 1.32 3.45 1 2.94 1H.75v1.5h1.65l2.7 11.25c.15.48.6.8 1.11.8h12.3c.51 0 .96-.32 1.11-.8l2.4-8.7c.12-.45-.18-.9-.66-.9zm-3.6 7.5H6.6l-1.5-6h14.1l-2.1 6z" fill="#053F31" />
    </svg>
);

const MobileBgImage = () => {
    return (
        <img src="/nevigation_menu_bg_design.png" alt="bg_image" className="h-full w-full object-contain object-bottom" />
    );
}

const navigation = [
    { name: "Marketplace", href: "/marketplace", current: false },
    { name: "Services", href: "/services", current: false },
    // { name: "How it Works", href: "/how-it-works", current: false },
    { name: "About Us", href: "/about", current: false },
    { name: "Contact Us", href: "/contact", current: false },
];

function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
}

type User = { name?: string; fullName?: string; avatar?: string } | null;

function getStoredUser(): User | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = localStorage.getItem("currentUser");
        return raw ? (JSON.parse(raw) as User) : null;
    } catch {
        return null;
    }
}

function getDisplayName(user: User): string {
    if (!user) return "User";
    return (user.fullName || user.name || "User").trim() || "User";
}

export default function Navbar() {
    const [user, setUser] = useState<User>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        setUser(getStoredUser());
    }, [pathname]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [dropdownOpen]);

    const isLoggedIn = !!(user && (user.fullName || user.name));

    const handleLogout = () => {
        try {
            if (typeof window !== "undefined") {
                localStorage.removeItem("currentUser");
                localStorage.removeItem("biomket_user");
                window.dispatchEvent(new Event("auth-change"));
            }
            setUser(null);
            setDropdownOpen(false);
        } catch { }
    };
    return (

        <div className="w-full bg-white">
            <div className="max-w-[1920px] mx-auto px-[20px] md:px-[40px]">
                <Disclosure
                    as="nav"
                    className="relative bg-white py-[20px] border-b border-[#DDDDDD] font-outfit"
                >
                    {({ open }) => (
                        <>
                            <div className="w-full">
                                <div className="relative flex h-10 items-center justify-between">
                                    <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                                        {/* Mobile menu button */}
                                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md text-gray-400 p-2">
                                            <span className="sr-only">Open main menu</span>

                                            {/* Hamburger icon - shown when menu is closed */}
                                            {!open && (
                                                <IconHamburger />
                                            )}

                                            {/* Close icon - shown when menu is open */}
                                            {open && (
                                                <IconClose />
                                            )}

                                        </DisclosureButton>
                                    </div>

                                    <div className="flex h-16 items-center justify-between w-full">
                                        {/* LEFT: Logo */}
                                        <div className="flex items-center shrink-0">
                                            <Link href="/">

                                                <img src="/logobiom.png" alt="biomket_logo" className="h-[45px]" />
                                                {/* <IconCompanyLogo /> */}

                                            </Link>
                                        </div>

                                        {/* CENTER: Navigation */}
                                        <div className="hidden lg:flex space-x-[30px]">
                                            {navigation.map((item) => {
                                                const isActive = item.href === "/" ? pathname === "/" : (pathname === item.href || pathname.startsWith(item.href + "/"));
                                                return (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        aria-current={isActive ? "page" : undefined}
                                                        className={classNames(
                                                            "text-[#000000] font-outfit text-[18px] leading-[150%] hover:font-medium",
                                                            isActive ? "!font-medium" : "font-extralight",
                                                        )}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>

                                        {/* RIGHT: Auth */}
                                        {/* RIGHT: Auth or Profile Dropdown */}
                                        <div className="hidden lg:flex items-center text-emerald-700 font-outfit gap-[15px]">
                                            {isLoggedIn ? (
                                                <>
                                                    <Link href="/cart" className="relative p-1 rounded-md hover:opacity-90 transition-opacity" aria-label="Cart">
                                                        <IconCart />
                                                        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#053F31] text-[10px] font-semibold text-white">
                                                            1
                                                        </span>
                                                    </Link>
                                                    <div className="relative" ref={dropdownRef}>
                                                        <button
                                                            type="button"
                                                            onClick={() => setDropdownOpen((o) => !o)}
                                                            className="flex items-center gap-[10px] cursor-pointer rounded-md hover:opacity-90 transition-opacity"
                                                        >
                                                            {user?.avatar ? (
                                                                <img src={user.avatar} alt="Avatar" className="h-9 w-9 rounded-full object-cover bg-[#DAE6DC]" />
                                                            ) : (
                                                                <span className="h-9 w-9 shrink-0 rounded-full bg-[#DAE6DC] flex items-center justify-center text-[#053F31] font-semibold text-sm">
                                                                    {getDisplayName(user).charAt(0).toUpperCase()}
                                                                </span>
                                                            )}
                                                            <p className="font-outfit font-semibold text-[#053F31]">{getDisplayName(user)}</p>
                                                            <span className="text-[#053F31] font-bold pb-1"> <IconProfileMenu /> </span>
                                                        </button>

                                                        {/* Dropdown Menu */}
                                                        {dropdownOpen && (
                                                            <div className="absolute right-0 top-full z-50 pt-[10px]">
                                                                <div className="rounded-xl border border-[#DAE6DC] bg-[#DAE6DC] p-[20px] min-w-[180px] shadow-md flex flex-col gap-4">
                                                                    <Link href="/profile" onClick={() => setDropdownOpen(false)} className="flex items-center gap-[10px] font-semibold text-[#000000] hover:text-[#053F31] transition-colors">
                                                                        <IconProfile /> Profile
                                                                    </Link>
                                                                    <button onClick={handleLogout} className="flex w-full items-center gap-[10px] cursor-pointer font-semibold text-[#000000] hover:text-[#053F31] transition-colors text-left">
                                                                        <IconLogout /> Logout
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <Link href="/login" className="hover:text-emerald-900 text-[#053F31] inline-flex items-center gap-[15px] pr-3">
                                                        <IconSignIn />
                                                        Sign In
                                                    </Link>
                                                    <span className="px-1 text-gray-300">|</span>
                                                    <Link href="/register" className="hover:text-emerald-900 text-[#053F31] inline-flex items-center gap-[15px] ps-3">
                                                        <IconRegister />
                                                        Register
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DisclosurePanel - Full Screen Mobile Menu */}
                            <DisclosurePanel className="lg:hidden fixed inset-0 z-50 bg-white ">
                                <div className="relative flex h-full flex-col">
                                    {/* 1. BACKGROUND IMAGE */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1/2 z-0 pointer-events-none">
                                        <MobileBgImage />
                                    </div>

                                    {/* 2. HEADER */}
                                    <div className="relative flex h-20 items-center justify-between px-5 py-5 border-b border-[#DDDDDD] z-[60] bg-white">

                                        <img src="/Logo.png" alt="biomket_logo" />
                                        {/* <IconCompanyLogo /> */}

                                        <DisclosureButton
                                            aria-label="Close menu"
                                        >
                                            {/* close svg */}
                                            <IconClose />
                                        </DisclosureButton>
                                    </div>

                                    {/* 3. NAVIGATION & AUTH LINKS */}
                                    <div className="relative flex flex-1 flex-col items-center justify-center px-5 z-50 -mt-20">
                                        {/* Navigation Links */}
                                        <div className="space-y-[30px] text-center">
                                            {navigation.map((item) => {
                                                const isActive = item.href === "/" ? pathname === "/" : (pathname === item.href || pathname.startsWith(item.href + "/"));
                                                return (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as={Link}
                                                        href={item.href}
                                                        className={classNames(
                                                            "block font-outfit text-[18px] leading-[150%] text-[#000000] hover:font-medium",
                                                            isActive ? "!font-medium" : "font-extralight",
                                                        )}
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                );
                                            })}
                                        </div>

                                        {/* Sign In / Register or Profile */}
                                        <div className="mt-5 border-t border-[#DDDDDD] pt-5 flex items-center justify-center gap-[15px] text-emerald-800 font-outfit">
                                            {isLoggedIn ? (
                                                <div className="flex flex-col gap-4 w-full text-center items-center">
                                                    <div className="flex items-center gap-2 font-bold text-[#053F31]">
                                                        <span className="h-9 w-9 shrink-0 rounded-full bg-[#DAE6DC] flex items-center justify-center text-[#053F31] font-semibold text-sm">
                                                            {getDisplayName(user).charAt(0).toUpperCase()}
                                                        </span>
                                                        <span>{getDisplayName(user)}</span>
                                                    </div>
                                                    <DisclosureButton as={Link} href="/profile" className="font-bold hover:text-black">
                                                        Profile
                                                    </DisclosureButton>
                                                    <DisclosureButton as="button" onClick={handleLogout} className="font-bold hover:text-black">
                                                        Logout
                                                    </DisclosureButton>
                                                </div>
                                            ) : (
                                                <>
                                                    <DisclosureButton as={Link} href="/login" className="flex items-center gap-2 text-[#053F31] font-light hover:text-emerald-900">
                                                        <IconSignIn /> Sign In
                                                    </DisclosureButton>
                                                    <span className="text-[#053F31] opacity-30">|</span>
                                                    <DisclosureButton as={Link} href="/register" className="flex items-center gap-2 text-[#053F31] font-light hover:text-emerald-900">
                                                        <IconRegister /> Register
                                                    </DisclosureButton>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            </div> </div>
    );
}
