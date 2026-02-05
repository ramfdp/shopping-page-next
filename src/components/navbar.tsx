"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger glass effect when scrolled down content
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href:"/"},
    { name: "Menu", href: "/menu" },
    { name: "Orders", href: "/orders" },
    { name: "Products", href: "/menu" },
    { name: "Categories", href: "/menu" },
    { name: "Login", href: "/login" },
  ];

  return (
    <>
      <div className="h-11 w-full" /> {/* Spacer to prevent content overlap */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#1d1d1f]/80 backdrop-blur-md border-white/10"
            : "bg-[#1d1d1f] border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-11 flex items-center justify-between text-[#cecece] text-[12px] font-light tracking-wide">
          <Link href="/" className="cursor-pointer hover:text-white transition-opacity opacity-80 hover:opacity-100">
            <FaApple className="text-base" />
          </Link>

          <ul className="flex-1 justify-center items-center space-x-8 hidden md:flex">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer hover:text-white transition-colors"
                style={{ fontFamily: 'inherit' }}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
            
          {/* Mobile view placeholder (hidden on desktop) */}
          <div className="md:hidden flex-1 flex justify-center text-[10px]">
             Menu
          </div>

          <div className="cursor-pointer hover:text-white transition-opacity opacity-80 hover:opacity-100">
             <IoSearchOutline className="text-base" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;