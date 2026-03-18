'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import {
    LayoutGrid,
    Package,
    ShoppingBag,
    BarChart2,
    Headset,
    Settings,
    LogOut
} from 'lucide-react';

// --- 1. CONFIGURATION ---
const MAIN_NAV = [
    { icon: LayoutGrid, path: '/dashboard', label: 'Dashboard' },
    // { icon: Package, path: '/products', label: 'Products' },
    { icon: ShoppingBag, path: '/orders', label: 'Orders' }, // This is the active one in your image
    // { icon: BarChart2, path: '/analytics', label: 'Analytics' },
];

const BOTTOM_NAV = [
    { icon: Headset, path: '/support', label: 'Support' },
    { icon: Settings, path: '/settings', label: 'Settings' },
];



export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        router.push("/signin");
    };


    // Helper for rendering a Nav Item
    const NavItem = ({ item, isBottom = false }: { item: any, isBottom?: boolean }) => {
        // Check if active (Logic: exact match or starts with path)
        const isActive = pathname === item.path || pathname?.startsWith(item.path);

        return (
            <Link
                href={item.path}
                className="relative group flex items-center justify-center w-full"
                title={item.label}
            >
                <div
                    className={`
            w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-300
            ${isActive
                            ? 'bg-[#053F31] text-white shadow-lg shadow-[#053F31]/30 ' // Active State
                            : 'text-[#053F31] hover:bg-[#DAE6DC]/50' // Inactive State
                        }
          `}
                >
                    {/* Render the Icon */}
                    <item.icon
                        size={isActive ? 24 : 26}
                        strokeWidth={isActive ? 2.5 : 2} // Make active icon slightly bolder
                        className="transition-transform duration-300"
                    />
                </div>

                {/* Tooltip (Optional, appears on hover) */}
                <span className="absolute left-[70px] bg-[#053F31] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                    {item.label}
                </span>
            </Link>
        );
    };

    return (
        <>
            {/* --- DESKTOP SIDEBAR (Hidden on Mobile) --- */}
            <aside className="hidden md:flex absolute mt-[60px] ms-53 top-[139px] mb-350 z-20 flex-col w-[60px] bg-[#F7FAF8] rounded-tl-[20px] rounded-bl-[20px] shadow-xl border border-[#053F31]/5 gap-6 py-8 justify-between">

                {/* --- TOP SECTION --- */}
                <div className="flex flex-col gap-6 w-full items-center">
                    {/* Logo or Brand Icon (Optional, top spacing) */}
                    <div className="mb-2"></div>

                    {MAIN_NAV.map((item) => (
                        <NavItem key={item.path} item={item} />
                    ))}
                </div>

                {/* --- BOTTOM SECTION --- */}
                <div className="flex flex-col gap-6 w-full items-center mt-auto">

                    {/* Support & Settings */}
                    {/* {BOTTOM_NAV.map((item) => (
                    <NavItem key={item.path} item={item} isBottom />
                ))} */}

                    {/* Logout Button (Special Case) */}
                    <button
                        onClick={handleLogout}
                        className="w-[50px] h-[50px] flex items-center justify-center text-[#053F31] hover:bg-red-50 hover:text-red-600 rounded-full transition-all"
                        title="Logout"
                    >
                        <LogOut size={26} strokeWidth={2} />
                    </button>

                    {/* User Avatar */}
                    <Link href="/profile" className="mt-2 relative group cursor-pointer" title="Profile">
                        <div className="w-[50px] h-[50px] rounded-full p-[2px] border-2 border-[#053F31]/20 group-hover:border-[#053F31] transition-colors overflow-hidden">
                            <img
                                src="https://i.pravatar.cc/150?img=11" // Replace with your user image
                                alt="User"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        {/* Online Status Dot */}
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                    </Link>

                </div>
            </aside>

            {/* --- MOBILE CAPSULE NAVIGATION (Hidden on Desktop) --- */}
            <nav className="flex md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full shadow-2xl border border-gray-100 p-1 items-center gap-1">
                {MAIN_NAV.map((item) => {
                    const isActive = pathname === item.path || pathname?.startsWith(item.path);
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`
                                flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
                                ${isActive
                                    ? 'bg-[#053F31] text-white shadow-md'
                                    : 'text-gray-500 hover:bg-gray-50'
                                }
                            `}
                        >
                            <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            <span className={`text-sm font-medium ${isActive ? 'block' : 'hidden'}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}