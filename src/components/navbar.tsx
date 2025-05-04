"use client"
import { useCartStore } from '@/store/cart-store';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 border-b border-gray-200">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" title="Home" className="flex">
              <Image
                src="/shoppe.png"
                alt="Logo"
                width={0} // Set width to 0 for automatic sizing
                height={0} // Set height to 0 for automatic sizing
                className="w-auto h-16 lg:h-18"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8 ml-8">
            <Link href="/" className="text-base font-medium text-black hover:text-gray-700">Home</Link>
            <Link href="/products" className="text-base font-medium text-black hover:text-gray-700">Products</Link>
            <Link href="/checkout" className="text-base font-medium text-black hover:text-gray-700">Checkout</Link>
          </div>

          {/* Right Section - Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Link
                href="/checkout"
                className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
                title="Add to Cart"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
              {/* Cart Count Badge */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-black rounded-md hover:bg-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-white border-t border-gray-200">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="py-2 text-base font-medium text-black hover:text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="py-2 text-base font-medium text-black hover:text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/checkout"
                className="py-2 text-base font-medium text-black hover:text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;