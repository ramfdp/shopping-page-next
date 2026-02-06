"use client";

import Slider from "@/src/components/slider";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#f5f5f7] min-h-screen">
      
      {/* Hero Section - Super Clean & High Impact */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-[#fbfbfd] overflow-hidden pt-20 pb-10">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-orange-100/40 rounded-full blur-[80px] animate-float pointer-events-none" />

        <div className="z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
          <span className="text-[#86868b] font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 animate-fade-in bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-gray-200/50">
            New Culinary Experience
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-[#1d1d1f] tracking-tighter mb-6 leading-[1.1] drop-shadow-sm">
            Savory. Sweet. <br className="hidden md:block"/> Simply Perfect.
          </h1>
          <p className="text-xl md:text-2xl font-normal max-w-2xl mb-10 leading-relaxed text-gray-600">
             Rasakan kenikmatan kuliner level baru dengan bahan premium dan rasa otentik yang menggugah selera.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-10 py-4 text-[17px] font-medium transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25 ring-offset-2 hover:ring-2 ring-blue-500/50">
              Pesan Sekarang
            </button>
            <button className="flex items-center justify-center gap-2 text-[#0071e3] hover:text-[#0077ed] px-10 py-4 text-[17px] font-medium transition-colors group bg-white hover:bg-gray-50 rounded-full shadow-md border border-gray-100">
              Lihat Menu <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
            </button>
          </div>
        </div>

        {/* Hero Image - Floating Effect */}
        <div className="relative w-full max-w-[1000px] aspect-16/10 md:aspect-21/9 mt-4 animate-float z-10">
           <Image 
             src="/slide2.png"
             alt="Featured Dish"
             fill
             className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
             priority
           />
           
           {/* Reflection/Ground shadow */}
           <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-black/10 blur-xl rounded-[100%]"></div>
        </div>
      </section>

      {/* Bento Grid Section - "The Collection" */}
      <section className="max-w-[1400px] mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight">
            The Collection.
           </h2>
           <Link href="/menu" className="text-[#0071e3] hover:underline text-lg font-medium mt-4 md:mt-0 flex items-center gap-2">
             Lihat Semua <FaArrowRight size={14}/>
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[1100px]">
          
          {/* Large Card (Left) - Family Bundle */}
          <div className="md:col-span-2 md:row-span-2 relative group bg-black rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500 cursor-pointer">
             <div className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity duration-500">
               <Image src="/slide3.jpg" alt="Family Bundle" fill className="object-cover" />
             </div>
             <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90" />
             
             <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Best Seller</span>
                  <div className="flex text-orange-400 gap-1"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                </div>
                <h3 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-none tracking-tight">Family Bundle.</h3>
                <p className="text-gray-300 text-lg md:text-2xl mb-10 font-medium leading-relaxed">
                  Kebahagiaan yang dibagikan adalah kebahagiaan yang berlipat ganda. Porsi jumbo untuk semua orang.
                </p>
                <div className="flex gap-4">
                   <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg">
                     Order Bundle
                   </button>
                   <button className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm">
                     Lihat Isi Paket
                   </button>
                </div>
             </div>
          </div>

          {/* Top Right Card - Sweet Series */}
          <div className="relative group bg-[#fbfbfd] rounded-[2.5rem] overflow-hidden shadow-xl transition-transform hover:scale-[1.02] duration-500 cursor-pointer h-[500px] md:h-auto flex flex-col items-center pt-12 text-center border border-white">
             <div className="z-10 px-8">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-3 tracking-tight">Sweet Series</h3>
                <p className="text-gray-500 font-medium text-lg">Manis, lembut, tak terlupakan.</p>
             </div>
             <div className="relative w-full h-full mt-8">
                <Image src="/slide1.png" alt="Sweet" fill className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out" />
             </div>
             <div className="absolute bottom-10 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button className="bg-[#1d1d1f] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-lg">Beli Sekarang</button>
             </div>
          </div>

          {/* Bottom Right Card - Fresh Drinks */}
          <div className="relative group bg-white rounded-[2.5rem] overflow-hidden shadow-xl transition-transform hover:scale-[1.02] duration-500 cursor-pointer h-[500px] md:h-auto flex flex-col items-center justify-center border border-gray-100">
             
             {/* Background decoration */}
             <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

             <div className="z-10 text-center mb-8 relative">
                 <h3 className="text-3xl md:text-4xl font-semibold text-[#0071e3] tracking-tight">Fresh Drinks</h3>
                 <p className="text-gray-500 text-lg mt-2">Segar alami dari buah pilihan.</p>
             </div>

             <div className="relative w-64 h-64 md:w-72 md:h-72 z-10">
                <Image src="/offerProduct.png" alt="Drinks" fill className="object-contain drop-shadow-2xl group-hover:rotate-6 transition-transform duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)" />
             </div>

             <div className="z-10 mt-10">
                 <button className="text-[#0071e3] hover:underline flex items-center gap-2 font-medium text-lg group-hover:gap-3 transition-all">
                   Lihat Pilihan <FaArrowRight size={14} />
                 </button>
             </div>
          </div>

        </div>
      </section>

      {/* Full Width Banner - "Exclusive" */}
      <section className="w-full bg-[#161617] py-32 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="text-center md:text-left md:max-w-2xl">
               <span className="text-purple-400 font-bold tracking-widest text-sm uppercase mb-4 block">Membership</span>
               <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">Eksklusif.</h2>
               <p className="text-gray-400 text-xl md:text-2xl leading-relaxed mb-10 font-light">
                  Bergabunglah menjadi member Exclusive kami. Nikmati akses ke menu rahasia, promo prioritas, dan kejutan ulang tahun spesial.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      Gabung Member
                  </button>
                  <button className="text-[#2997ff] px-8 py-4 text-lg font-medium hover:underline">
                      Pelajari Benefit &gt;
                  </button>
               </div>
            </div>
            <div className="relative w-full max-w-[600px] aspect-square">
               <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full" />
               <Image src="/cart.png" alt="Exclusive" fill className="object-contain invert opacity-90 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
            </div>
         </div>
      </section>

      {/* Carousel Section */}
      <Slider />

    </main>
  );
}
