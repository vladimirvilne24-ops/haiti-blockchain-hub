// app/HBILLogo.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export function HBILLogo() {
  return (
    <>
      <style jsx global>{`
        @keyframes floatAndRotate {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: translateY(-5px) rotateX(6deg) rotateY(12deg);
          }
        }

        .animate-medal-dance {
          animation: floatAndRotate 4.5s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      `}</style>

      <Link href="/" className="flex items-center space-x-3 group">
        {/* 3D Floating / Dancing Medallion Container */}
        <div className="relative w-12 h-12 flex items-center justify-center animate-medal-dance group-hover:scale-110 transition-transform duration-300">
          <Image
            src="/hbil-logo.png"
            alt="Haiti Blockchain Innovation Lab Logo"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
            priority
          />
        </div>
        
        {/* Brand Text Stack */}
        <div className="flex flex-col">
          <span className="font-extrabold text-lg tracking-tight text-textMain leading-tight">
            HBIL
          </span>
          <span className="text-[11px] font-medium text-accentCyan tracking-wider uppercase mt-0.5">
            Blockchain Lab
          </span>
        </div>
      </Link>
    </>
  );
}