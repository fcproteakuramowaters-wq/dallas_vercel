'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact & Support', href: '/contact' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-98 shadow-xl">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:opacity-80 transition-opacity" aria-label="Dallas Grand Beach Hotel home">
            <Image
              src="/logo.png"
              alt="Dallas Grand Beach Hotel logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <span className="hidden sm:inline text-white font-bold text-lg">Dallas Grand Beach</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link 
          href="/book" 
          className="hidden md:inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
        >
          Book Now
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-btn"
            aria-label="open menu"
            className="text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 shadow-lg">
          <ul className="flex flex-col items-start gap-0 px-6 py-4 text-white font-medium">
            {menuItems.map((item, index) => (
              <li
                key={item.name}
                className={`w-full py-2 ${
                  index !== menuItems.length - 1 ? 'border-b border-gray-700' : ''
                }`}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-colors block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
