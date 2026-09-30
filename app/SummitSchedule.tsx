'use client';
import { useState, useEffect } from 'react';

export default function SummitSchedule() {
  // Countdown timer target date (e.g., Haiti Blockchain Week kickoff)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-10-15T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const agenda = [
    { time: '09:00 AM - 10:00 AM', title: 'Keynote: Decentralized Architecture & Sovereign Protocols', speaker: 'HBIL Lead Researchers' },
    { time: '10:15 AM - 11:30 AM', title: 'Panel: Anti-Corruption Smart Contracts on Polygon', speaker: 'Ecosystem Builders & Contributors' },
    { time: '01:00 PM - 02:30 PM', title: 'Workshop: Deploying Secure DApps & IPFS Evidence Logs', speaker: 'Cybersecurity Fellows' },
    { time: '03:00 PM - 04:30 PM', title: 'Institutional Investor & Donor Roundtable', speaker: 'Global Web3 Partners' },
  ];

  return (
    <section id="summit" className="px-8 py-24 max-w-6xl mx-auto border-t border-bgSecondary">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 px-3 py-1 rounded border border-accentBlue/40 bg-accentBlue/10 text-accentCyan text-xs tracking-widest uppercase font-semibold">
          Flagship Annual Summit
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-textMain tracking-tight mb-4">
          Haiti Blockchain Week Agenda & Countdown
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Join international donors, developers, and regional leaders as we unveil next-generation decentralized solutions.
        </p>
      </div>

      {/* Live Countdown Timer Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-20">
        <div className="bg-bgSecondary p-6 rounded-xl border border-accentCyan/30 text-center shadow-[0_0_15px_rgba(0,242,254,0.1)]">
          <div className="text-3xl md:text-4xl font-extrabold text-accentCyan font-mono">{timeLeft.days}</div>
          <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Days</div>
        </div>
        <div className="bg-bgSecondary p-6 rounded-xl border border-accentBlue/30 text-center shadow-[0_0_15px_rgba(0,118,255,0.1)]">
          <div className="text-3xl md:text-4xl font-extrabold text-textMain font-mono">{timeLeft.hours}</div>
          <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Hours</div>
        </div>
        <div className="bg-bgSecondary p-6 rounded-xl border border-accentCyan/30 text-center shadow-[0_0_15px_rgba(0,242,254,0.1)]">
          <div className="text-3xl md:text-4xl font-extrabold text-accentCyan font-mono">{timeLeft.minutes}</div>
          <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Minutes</div>
        </div>
        <div className="bg-bgSecondary p-6 rounded-xl border border-accentGold/30 text-center shadow-[0_0_15px_rgba(255,215,0,0.1)]">
          <div className="text-3xl md:text-4xl font-extrabold text-accentGold font-mono">{timeLeft.seconds}</div>
          <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Seconds</div>
        </div>
      </div>

      {/* Session Agenda List */}
      <div className="bg-bgSecondary rounded-xl border border-accentCyan/20 overflow-hidden max-w-4xl mx-auto">
        <div className="p-6 border-b border-bgPrimary flex justify-between items-center">
          <h3 className="font-bold text-lg text-textMain">Featured Event Sessions</h3>
          <span className="text-xs text-accentCyan font-mono">Day 1 Schedule</span>
        </div>
        <div className="divide-y divide-bgPrimary">
          {agenda.map((slot, index) => (
            <div key={index} className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-bgPrimary/40 transition-colors">
              <div>
                <span className="inline-block px-3 py-1 rounded bg-accentCyan/10 text-accentCyan text-xs font-mono font-bold mb-2">
                  {slot.time}
                </span>
                <h4 className="font-bold text-textMain text-base md:text-lg">{slot.title}</h4>
                <p className="text-xs text-gray-400 mt-1">Presented by: <span className="text-accentGold">{slot.speaker}</span></p>
              </div>
              <a
                href="#summit"
                className="px-4 py-2 border border-accentCyan/40 text-accentCyan hover:bg-accentCyan/10 rounded text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap"
              >
                Save Seat
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}