// app/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import WalletButton from './WalletButton';

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-bgPrimary/85 backdrop-blur-md border-b border-accentCyan/20">
      <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10">
            <Image
              src="/hbil-logo.png"
              alt="HBIL Logo"
              fill
              className="object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-accentCyan to-accentBlue bg-clip-text text-transparent">
            HBIL
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          <a href="/#summit" className="text-gray-300 hover:text-accentCyan transition-colors">
            Summit
          </a>
          <a href="/#research" className="text-gray-300 hover:text-accentCyan transition-colors">
            Research
          </a>
          <a href="/#hackathon" className="text-gray-300 hover:text-accentCyan transition-colors">
            Hackathon
          </a>
          <Link href="/fasilb" className="text-accentGold hover:opacity-80 transition-opacity">
            FasilB
          </Link>
          <a href="/#admin" className="text-gray-300 hover:text-accentCyan transition-colors">
            HBIL Gov
          </a>
          <a href="/#checkout" className="text-gray-300 hover:text-accentCyan transition-colors">
            Support
          </a>
        </div>

        {/* Right Side: Language Switcher & Wallet */}
        <div className="flex items-center space-x-4">
          {isMounted ? (
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as any)}
              suppressHydrationWarning
              className="bg-bgSecondary text-accentCyan text-xs font-mono uppercase px-2.5 py-1.5 rounded border border-accentCyan/35 focus:outline-none cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ht">KREÒL</option>
            </select>
          ) : (
            <div className="w-16 h-8 bg-bgSecondary/50 rounded border border-accentCyan/20 animate-pulse" />
          )}

          <WalletButton />
        </div>
      </nav>
    </header>
  );
}