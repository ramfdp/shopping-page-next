"use client";

import React from "react";
import Image from "next/image";
import { FaTimes, FaTrash, FaMinus, FaPlus, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import Link from "next/link";

const CartModal = () => {
  const { isCartOpen, toggleCart, items, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={toggleCart}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 animate-slide-in-right">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
           <h2 className="text-xl font-bold text-[#1d1d1f] flex items-center gap-2">
             <FaShoppingBag className="text-[#0071e3]"/> Your Cart
           </h2>
           <button 
             onClick={toggleCart}
             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
           >
             <FaTimes size={16} />
           </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
           {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                  <FaShoppingBag size={48} className="mb-4 opacity-20"/>
                  <p className="text-lg font-medium">Your cart is empty.</p>
                  <p className="text-sm">Start adding some tasty items!</p>
              </div>
           ) : (
             items.map((item) => (
                <div key={item.id} className="flex gap-4">
                   <div className="relative w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                   </div>
                   <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                         <h3 className="font-semibold text-[#1d1d1f] line-clamp-2 text-sm leading-tight pr-2">{item.name}</h3>
                         <button 
                           onClick={() => removeItem(item.id)}
                           className="text-gray-300 hover:text-red-500 transition-colors"
                         >
                            <FaTrash size={12}/>
                         </button>
                      </div>
                      <div className="flex justify-between items-end">
                         <div className="flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1 border border-gray-100">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-gray-500 shadow-sm text-[10px]"
                            >
                               <FaMinus />
                            </button>
                            <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-5 h-5 flex items-center justify-center rounded-full bg-black text-white shadow-sm text-[10px]"
                            >
                               <FaPlus />
                            </button>
                         </div>
                         <span className="font-bold text-[#1d1d1f] text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                   </div>
                </div>
             ))
           )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50/50">
             <div className="flex justify-between items-center mb-4 text-lg font-bold text-[#1d1d1f]">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
             </div>
             <button 
               onClick={() => {
                   alert("Proceeding to checkout!");
                   toggleCart();
               }}
               className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-4 rounded-full font-semibold shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
             >
                Checkout Now
             </button>
             <Link href="/orders" onClick={toggleCart} className="block text-center text-[#0071e3] mt-4 text-sm font-medium hover:underline">
                View Full Cart
             </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
