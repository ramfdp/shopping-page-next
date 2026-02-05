"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGoogle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";


const LoginPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-2.75rem)] w-full bg-white">
      {/* Left Side - Image Background */}
      <div className="hidden lg:flex w-1/2 relative bg-black items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10" />
        
        <Image
          src="/slide3.jpg" // Using the family bundle/rich image
          alt="Login Background"
          fill
          className="object-cover animate-scale-slow"
          priority
        />
        
        <div className="relative z-20 p-16 text-white max-w-2xl">
           <div className="mb-6">
             <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1 rounded-full text-xs font-medium tracking-widest uppercase">
               Foodlivery Exclusive
             </span>
           </div>
           <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
             Nikmati Rasa <br/> Terbaik Hari Ini.
           </h2>
           <p className="text-xl font-light opacity-90 leading-relaxed">
             Masuk untuk memesan menu favoritmu, dapatkan promo eksklusif, dan nikmati pengiriman prioritas.
           </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 bg-white relative py-12">
         
         <div className="w-full max-w-[420px] flex flex-col gap-8">
            <div className="text-center md:text-left space-y-2">
              <h1 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">Login</h1>
              <p className="text-gray-500 text-lg">Selamat datang kembali! Silakan masuk.</p>
            </div>

            <form className="flex flex-col gap-5">
               <div className="space-y-2">
                 <label className="text-sm font-semibold text-[#1d1d1f]">Email</label>
                 <input 
                   type="email" 
                   className="w-full p-4 rounded-xl border border-gray-300 focus:border-[#0071e3] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400 bg-gray-50/50 focus:bg-white"
                   placeholder="nama@email.com"
                 />
               </div>
               
               <div className="space-y-2">
                 <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-[#1d1d1f]">Password</label>
                 </div>
                 <input 
                   type="password" 
                   className="w-full p-4 rounded-xl border border-gray-300 focus:border-[#0071e3] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400 bg-gray-50/50 focus:bg-white"
                   placeholder="••••••••"
                 />
               </div>

               <div className="flex justify-between items-center text-sm mt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-gray-600 select-none">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0071e3] focus:ring-[#0071e3] accent-[#0071e3]" />
                    Ingat saya
                  </label>
                  <Link href="#" className="text-[#0071e3] hover:underline font-medium hover:text-[#0077ed]">
                    Lupa Password?
                  </Link>
               </div>

               <button className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold py-4 rounded-full transition-all mt-4 shadow-xl shadow-blue-500/20 active:scale-[0.98]">
                 Masuk
               </button>
            </form>

            <div className="relative flex items-center justify-center my-2">
               <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
               <span className="relative bg-white px-4 text-gray-500 text-sm font-medium">atau masuk dengan</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 border border-gray-300 p-3.5 rounded-xl hover:bg-gray-50 transition-colors font-medium text-[#1d1d1f]">
                <FaGoogle size={18} className="text-red-500" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 p-3.5 rounded-xl hover:bg-gray-50 transition-colors font-medium text-[#1d1d1f]">
                <FaApple size={20} /> Apple
              </button>
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              Belum punya akun? <Link href="/register" className="text-[#0071e3] font-semibold hover:underline">Daftar Sekarang</Link>
            </p>
         </div>
      </div>
    </div>
  );
};

export default LoginPage;