"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaTwitter, FaTiktok, FaFacebookF } from 'react-icons/fa';

const footerLinks = {
  explore: {
    title: "Explore",
    links: [
      { name: "Menu", href: "/menu" },
      { name: "Our Story", href: "#" },
      { name: "Locations", href: "#" },
      { name: "Reservations", href: "#" },
    ]
  },
  support: {
    title: "Support",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Catering", href: "#" },
      { name: "Careers", href: "#" },
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ]
  }
};

const Footer = () => {
  const pathname = usePathname();

  // Hide footer on login page
  if (pathname === '/login') {
    return null;
  }

  return (
    <footer className="bg-[#1d1d1f] text-gray-400 py-16 font-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Logo & Newsletter (Optional) or just visual balance */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 border-b border-gray-800 pb-12">
           <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Savory & Sweet.</h2>
              <p className="max-w-xs text-sm leading-relaxed">
                 Experiencing the art of culinary excellence. Premium ingredients, unforgettable flavors.
              </p>
           </div>
           
           <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                 <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                 <FaTiktok size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                 <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                 <FaFacebookF size={18} />
              </a>
           </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-medium mb-4">{footerLinks.explore.title}</h3>
            <ul className="space-y-3 text-sm">
               {footerLinks.explore.links.map((link) => (
                 <li key={link.name}>
                   <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                 </li>
               ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-medium mb-4">{footerLinks.support.title}</h3>
            <ul className="space-y-3 text-sm">
               {footerLinks.support.links.map((link) => (
                 <li key={link.name}>
                   <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                 </li>
               ))}
            </ul>
          </div>

           {/* Column 3 */}
           <div>
            <h3 className="text-white font-medium mb-4">{footerLinks.legal.title}</h3>
            <ul className="space-y-3 text-sm">
               {footerLinks.legal.links.map((link) => (
                 <li key={link.name}>
                   <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                 </li>
               ))}
            </ul>
          </div>

          {/* Column 4: Address/Info */}
          <div>
             <h3 className="text-white font-medium mb-4">Visit Us</h3>
             <address className="not-italic text-sm space-y-3">
               <p>123 Culinary Avenue</p>
               <p>Foodie City, FL 12345</p>
               <p className="mt-4">
                 <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
               </p>
               <p>
                 <a href="mailto:hello@savorysweet.com" className="hover:text-white transition-colors">hello@savorysweet.com</a>
               </p>
             </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 pt-8 border-t border-gray-800">
           <p>&copy; {new Date().getFullYear()} Savory & Sweet by Untirta. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;