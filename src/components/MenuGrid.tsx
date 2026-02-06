"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

interface MenuItem {
  name: string;
  image: string;
  price: number;
}

interface MenuGridProps {
  items: MenuItem[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  const { addItem } = useCart();

  const handleBuyNow = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation(); // Prevent triggering any parent click events if present
    addItem({
      id: item.name, // Using name as ID for simplicity since unique filenames
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100 flex flex-col h-full"
        >
          <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
            
            {/* Price Tag */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                <span className="font-bold text-[#1d1d1f]">${item.price.toFixed(2)}</span>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1 justify-between bg-white z-10 relative">
            <div>
                 <h3 className="text-xl font-semibold capitalize mb-1 text-[#1d1d1f]">
                {item.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    Delicious freshly prepared {item.name.toLowerCase()} made with premium ingredients.
                </p>
            </div>
           
            <button
                onClick={(e) => handleBuyNow(e, item)}
                className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3 rounded-full font-medium transition-all transform active:scale-95 shadow-lg shadow-blue-500/20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-2 lg:group-hover:translate-y-0 duration-300"
            >
                Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
