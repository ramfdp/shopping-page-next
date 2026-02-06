"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaApple, FaShoppingBag } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleCart, totalItems } = useCart();

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
    { name: "Login", href: "/login" },
  ];

  return (
    <>
      <div className="h-11 w-full" /> {/* Spacer to prevent content overlap */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-[90] transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#1d1d1f]/80 backdrop-blur-md border-white/10"
            : "bg-[#1d1d1f] border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-11 flex items-center justify-between text-[#cecece] text-[12px] font-light tracking-wide">
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

          <div className="flex items-center gap-4">
             <div className="cursor-pointer hover:text-white transition-opacity opacity-80 hover:opacity-100">
               <IoSearchOutline className="text-base" />
             </div>
             
             {/* Cart Icon */}
             <button 
               onClick={toggleCart}
               className="relative cursor-pointer hover:text-white transition-opacity opacity-80 hover:opacity-100"
             >
               <FaShoppingBag className="text-sm" />
               {totalItems > 0 && (
                 <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[9px] font-bold px-1 rounded-full min-w-[14px] h-[14px] flex items-center justify-center">
                   {totalItems}
                 </span>
               )}
             </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;