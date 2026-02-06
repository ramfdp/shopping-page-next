"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTrash, FaMinus, FaPlus, FaArrowRight, FaShoppingBag } from "react-icons/fa";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function OrdersPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      name: "onion ring",
      price: 18.50,
      quantity: 1,
      image: "/menu/onion ring.jpg",
    },
    {
      name: "Melt Burger",
      price: 6.50,
      quantity: 2,
      image: "/menu/melt burger.jpg",
    },
    {
      name: "Zilla Burger",
      price: 8.00,
      quantity: 1,
      image: "/menu/zilla burger.jpg",
    }
  ]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const updateQuantity = (name: string, delta: number) => {
    setCartItems(items => items.map(item => {
      if (item.name === name) {
        const newQuantity = Math.max(0, item.quantity + delta);
        if (newQuantity === 0) return item; // Don't remove on 0, wait for trash click or explicit 0 handling logic if desired
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (name: string) => {
    setCartItems(items => items.filter(item => item.name !== name));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.11; // 11% Tax
  const total = subtotal + tax;

  const handleCheckout = () => {
    alert(`Order placed successfully!\nTotal: $${total.toFixed(2)}`);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#f5f5f7] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
           <div className="h-4 w-32 bg-gray-300 rounded mb-4"></div>
           <div className="h-8 w-48 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Your Orders.</h1>
          <p className="text-gray-500 text-lg">Review your selections and prepare for a feast.</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100 text-center px-4">
             <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300">
                <FaShoppingBag size={32} />
             </div>
             <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
             <p className="text-gray-500 mb-8 max-w-sm">Looks like you haven't made your choice yet. Explore our menu to find something delicious.</p>
             <Link 
               href="/menu" 
               className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40"
             >
               Browse Menu
             </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Cart Items List */}
            <div className="flex-1 space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.name} 
                  className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6 group transition-colors hover:border-gray-200"
                >
                  {/* Image */}
                  <div className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 w-full text-center sm:text-left">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-xl font-semibold text-[#1d1d1f]">{item.name}</h3>
                      </div>
                      <button 
                        onClick={() => removeItem(item.name)} 
                        className="text-gray-300 hover:text-red-500 transition-colors p-2 hidden sm:block"
                        aria-label="Remove item"
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>
                    
                    <p className="text-gray-500 text-sm mb-4">Delicious and fresh.</p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                       <div className="flex items-center gap-4 bg-gray-50 rounded-full px-4 py-2 border border-gray-100">
                          <button 
                            onClick={() => {
                                if (item.quantity === 1) removeItem(item.name); 
                                else updateQuantity(item.name, -1);
                            }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:scale-110 active:scale-95 transition-all text-xs"
                          >
                             {item.quantity === 1 ? <FaTrash size={10} className="text-red-400"/> : <FaMinus />}
                          </button>
                          <span className="text-lg font-medium w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.name, 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1d1d1f] text-white shadow-md hover:scale-110 active:scale-95 transition-all text-xs"
                          >
                             <FaPlus />
                          </button>
                       </div>
                       <p className="text-xl font-bold text-[#1d1d1f]">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  
                  {/* Mobile Trash Button */}
                  <button 
                    onClick={() => removeItem(item.name)} 
                    className="text-gray-300 hover:text-red-500 transition-colors sm:hidden w-full py-2 border-t border-gray-100 mt-2"
                  >
                    Remove Item
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[400px] h-fit">
              <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 sticky top-24">
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Tax (11%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-gray-200 my-4"></div>
                  <div className="flex justify-between text-xl font-bold text-[#1d1d1f]">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group"
                >
                  Checkout Now <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  Secure checkout provided using industry standard encryption.
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}