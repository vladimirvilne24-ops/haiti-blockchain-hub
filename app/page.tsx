// app/page.tsx
'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import ResearchSection from './ResearchSection';
import SponsorsSection from './SponsorsSection';
import AdminSection from './AdminSection';
import SummitSchedule from './SummitSchedule';
import HackathonSection from './HackathonSection';
import CheckoutSection from './CheckoutSection';
import Footer from './Footer';
import { useLanguage } from './LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-bgPrimary text-textMain selection:bg-accentCyan selection:text-bgPrimary">
      <Navbar />

      {/* Global Style for Faster Dancing Medallion */}
      <style jsx global>{`
        @keyframes fastDance {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1);
          }
          25% {
            transform: translateY(-8px) rotateX(12deg) rotateY(20deg) scale(1.03);
          }
          50% {
            transform: translateY(0px) rotateX(0deg) rotateY(360deg) scale(1);
          }
          75% {
            transform: translateY(-8px) rotateX(-12deg) rotateY(-20deg) scale(1.03);
          }
        }

        .animate-medal-dance-fast {
          animation: fastDance 2s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Hero Section with Fast Center Dancing 3D Medallion */}
      <section className="relative px-8 py-20 md:py-32 max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accentBlue/20 via-bgPrimary to-bgPrimary blur-3xl"></div>
        
        {/* Center Faster Dancing 3D Iridescent Medallion Asset */}
        <div className="relative w-36 h-36 md:w-48 md:h-48 mb-8 animate-medal-dance-fast">
          <Image
            src="/hbil-logo.png"
            alt="Haiti Blockchain Innovation Lab Medallion"
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            priority
          />
        </div>
        
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-accentCyan/30 bg-accentCyan/5 text-accentCyan text-xs tracking-widest uppercase font-semibold">
          {t.ecosystemBadge}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          {t.mainTitle} <br />
          <span className="bg-gradient-to-r from-accentCyan via-accentBlue to-accentGold bg-clip-text text-transparent">
            {t.subTitle}
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
          {t.heroDesc}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#summit"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold tracking-wider uppercase bg-accentCyan text-bgPrimary rounded-md shadow-[0_0_20px_rgba(0,242,254,0.5)] hover:bg-white transition-all"
          >
            {t.exploreSummit}
          </a>
          <a
            href="#research"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold tracking-wider uppercase border border-accentCyan/40 text-accentCyan rounded-md hover:bg-accentCyan/10 transition-all"
          >
            {t.viewResearch}
          </a>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="px-8 py-20 max-w-6xl mx-auto border-t border-bgSecondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-bgSecondary p-8 rounded-xl border border-accentCyan/20 hover:border-accentCyan transition-all group">
            <div className="w-10 h-10 rounded-lg bg-accentCyan/10 flex items-center justify-center text-accentCyan font-bold mb-4 group-hover:scale-110 transition-transform">
              01
            </div>
            <h3 className="text-xl font-bold mb-2 text-textMain">{t.feat1Title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.feat1Desc}
            </p>
          </div>

          <div className="bg-bgSecondary p-8 rounded-xl border border-accentBlue/40 hover:border-accentBlue transition-all group">
            <div className="w-10 h-10 rounded-lg bg-accentBlue/20 flex items-center justify-center text-accentCyan font-bold mb-4 group-hover:scale-110 transition-transform">
              02
            </div>
            <h3 className="text-xl font-bold mb-2 text-textMain">{t.feat2Title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.feat2Desc}
            </p>
          </div>

          <div className="bg-bgSecondary p-8 rounded-xl border border-accentGold/30 hover:border-accentGold transition-all group">
            <div className="w-10 h-10 rounded-lg bg-accentGold/10 flex items-center justify-center text-accentGold font-bold mb-4 group-hover:scale-110 transition-transform">
              03
            </div>
            <h3 className="text-xl font-bold mb-2 text-textMain">{t.feat3Title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.feat3Desc}
            </p>
          </div>
        </div>
      </section>

      <ResearchSection />
      <SponsorsSection />
      <AdminSection />
      <SummitSchedule />
      <HackathonSection />
      <CheckoutSection />
      <Footer />
    </main>
  );
}