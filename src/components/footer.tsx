"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = {
  shop: {
    title: "Belanja dan Belajar",
    links: ["Menu Favorit", "Dessert Series", "Fresh Drinks", "Paket Hemat", "Exclusive Member", "Special Event"]
  },
  account: {
    title: "Akun",
    links: ["Kelola ID", "Akun Saya", "Pesanan Saya", "Voucher Saya"]
  },
  store: {
    title: "Toko",
    links: ["Cari Toko", "Genius Bar", "Today at Apple", "Apple Camp", "Aplikasi Apple Store", "Pembiayaan", "Program Daur Ulang"]
  },
  business: {
    title: "Untuk Bisnis",
    links: ["Apple dan Bisnis", "Belanja untuk Bisnis"]
  },
  values: {
    title: "Nilai-nilai Apple",
    links: ["Aksesibilitas", "Pendidikan", "Lingkungan", "Privasi", "Inklusi dan Keberagaman"]
  },
  about: {
    title: "Tentang Apple",
    links: ["Newsroom", "Kepemimpinan Apple", "Peluang Karier", "Investor", "Etika & Kepatuhan", "Acara", "Hubungi Apple"]
  }
};

const Footer = () => {
  const pathname = usePathname();

  // Hide footer on login page
  if (pathname === '/login') {
    return null;
  }

  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] text-[12px] pt-10 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumbs / Top Text */}
        <div className="mb-4 pb-4 border-b border-gray-200 text-gray-500">
          <p className="mb-2">1. Harga spesial berlaku untuk pembelian paket tertentu. Syarat dan ketentuan berlaku.</p>
          <p>2. Menu dapat berubah sewaktu-waktu tergantung ketersediaan bahan.</p>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 mb-8">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{footerLinks.shop.title}</h3>
              <ul className="flex flex-col gap-2 text-gray-600">
                {footerLinks.shop.links.map((link) => (
                  <li key={link}><Link href="#" className="hover:underline">{link}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{footerLinks.account.title}</h3>
              <ul className="flex flex-col gap-2 text-gray-600">
                 {footerLinks.account.links.map((link) => (
                  <li key={link}><Link href="#" className="hover:underline">{link}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
             <div>
              <h3 className="font-semibold text-gray-900 mb-2">{footerLinks.store.title}</h3>
              <ul className="flex flex-col gap-2 text-gray-600">
                 {footerLinks.store.links.map((link) => (
                  <li key={link}><Link href="#" className="hover:underline">{link}</Link></li>
                ))}
              </ul>
            </div>
          </div>

           <div className="flex flex-col gap-6">
             <div>
              <h3 className="font-semibold text-gray-900 mb-2">{footerLinks.business.title}</h3>
              <ul className="flex flex-col gap-2 text-gray-600">
                 {footerLinks.business.links.map((link) => (
                  <li key={link}><Link href="#" className="hover:underline">{link}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
             <div>
              <h3 className="font-semibold text-gray-900 mb-2">{footerLinks.values.title}</h3>
              <ul className="flex flex-col gap-2 text-gray-600">
                 {footerLinks.values.links.map((link) => (
                  <li key={link}><Link href="#" className="hover:underline">{link}</Link></li>
                ))}
              </ul>
            </div>
          </div>

           <div className="flex flex-col gap-6">
             <div>
              <h3 className="font-semibold text-gray-900 mb-2">{footerLinks.about.title}</h3>
              <ul className="flex flex-col gap-2 text-gray-600">
                 {footerLinks.about.links.map((link) => (
                  <li key={link}><Link href="#" className="hover:underline">{link}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 border-t border-gray-200">
           <div className="mb-2 text-gray-500">
             Lebih banyak cara untuk berbelanja: <Link href="#" className="text-[#0066cc] hover:underline">Cari Apple Store</Link> atau <Link href="#" className="text-[#0066cc] hover:underline">penjual lain</Link> di dekat Anda. Atau hubungi 001-803-069-2098.
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6">
             <div className="text-gray-500">
               Copyright © {new Date().getFullYear()} Apple Inc. Seluruh hak cipta dilindungi undang-undang.
             </div>
             <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600">
               <Link href="#" className="hover:underline dark:hover:text-black">Kebijakan Privasi</Link>
               <span className="text-gray-300">|</span>
               <Link href="#" className="hover:underline dark:hover:text-black">Ketentuan Penggunaan</Link>
               <span className="text-gray-300">|</span>
               <Link href="#" className="hover:underline dark:hover:text-black">Penjualan dan Pengembalian Dana</Link>
               <span className="text-gray-300">|</span>
               <Link href="#" className="hover:underline dark:hover:text-black">Hukum</Link>
               <span className="text-gray-300">|</span>
               <Link href="#" className="hover:underline dark:hover:text-black">Peta Situs</Link>
             </div>
             <div className="text-gray-600 font-medium">
               Indonesia
             </div>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;