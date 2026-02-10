"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Heart, Instagram, Linkedin, ListCheck, LogOut, Menu, Search, ShoppingCartIcon, User, User2, X, Youtube } from "lucide-react";
import { getCartData, getLoginCookie, getWishlistCount, isLoggedIn, removeLoginCookie } from "@/lib/auth";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function CommonHeader() {
    // Define route
    const router = useRouter();

    // Define state
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [openCommonPlanTrip, setOpenCommonPlanTrip] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openProfileMenu, setOpenProfileMenu] = useState(false);

    // Get user data
    const loginUserData = isLoggedIn() ? getLoginCookie() : null;

    // Define ref
    const menuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Define count
    const wishlistCount = getWishlistCount();
    const cartCount = getCartData() ? 1 : 0;

    useEffect(() => {
        document.body.style.overflow = openMobileMenu ? "hidden" : "auto";
    }, [openMobileMenu]);

    useEffect(() => {
        setOpenProfileMenu(false);
    }, [pathname]);

    // Mega Menu Hide on scroll
    useEffect(() => {
        if (!showMegaMenu) return;

        const handleScroll = () => {
            setShowMegaMenu(false);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showMegaMenu]);

    // Click outside handler
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenProfileMenu(false);
            }
        }

        if (openProfileMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openProfileMenu]);

    // Handle Logout
    const logout = async () => {
        removeLoginCookie();
        setOpenProfileMenu(false);
        router.refresh();
    };

    // Mega Menu Show and Hide
    const openMegaMenu = () => setShowMegaMenu(true);
    const closeMegaMenu = () => setShowMegaMenu(false);

    return (
        <>
            <header className="top-0 z-50 bg-white border-b border-[#d9cec1]">
                <div className="px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/common/logo.webp"
                            alt="Logo"
                            width={160}
                            height={100}
                            className="cursor-pointer w-32 md:w-40"
                            draggable="false"
                        />
                    </Link>

                    {/* DESKTOP NAV (UNCHANGED) */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-900">
                        <Link className="hover:underline underline-offset-5 cursor-pointer" onMouseEnter={closeMegaMenu} href="/">Home</Link>
                        <Link className="hover:underline underline-offset-5 cursor-pointer" onMouseEnter={closeMegaMenu} href="/tour">Tours</Link>
                    </nav>
                </div>
            </header>

            {/* ================= MOBILE MENU ================= */}
            {openMobileMenu && (
                <div className="fixed inset-0 z-[999] bg-white">
                    <div className="h-16 flex justify-between items-center px-4 border-b">
                        <span className="text-xl font-bold">Menu</span>
                        <button onClick={() => setOpenMobileMenu(false)}>
                            <X />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-6 p-6 text-lg font-medium">
                        <Link href="/">Home</Link>
                        <Link href="/tour">Tours</Link>
                    </nav>
                </div>
            )}
        </>
    );
}
