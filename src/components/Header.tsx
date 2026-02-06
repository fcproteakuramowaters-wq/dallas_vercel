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
    <header className="w-full fixed top-0 left-0 z-50 bg-gray-800 bg-opacity-95 shadow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Dallas Grand Beach Hotel logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-white font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

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
