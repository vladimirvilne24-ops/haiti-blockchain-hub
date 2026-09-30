// app/fasilb/CredentialModal.tsx
"use client";

import React, { useState } from "react";

interface CredentialModalProps {
  isOpen: boolean;
  moduleTitle: string;
  badge: string;
  onClose: () => void;
}

export default function CredentialModal({
  isOpen,
  moduleTitle,
  badge,
  onClose,
}: CredentialModalProps) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  // Generate LinkedIn sharing URL
  const linkedInShareUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(
    `🚀 I have successfully completed the ${moduleTitle} mastery curriculum on FasilB and earned the "${badge}" credential! Certified secure and ready to build. #Web3 #Blockchain #FasilB #Developer`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white text-center">
          <span className="text-4xl mb-2 inline-block">🎓</span>
          <h2 className="text-2xl font-bold">Félicitations !</h2>
          <p className="text-indigo-100 text-sm mt-1">
            Vous avez complété toutes les leçons de : <br />
            <strong className="text-white">{moduleTitle}</strong>
          </p>
        </div>

        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Entrez votre nom complet pour le certificat :
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Vladimir Vilne"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-800 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition duration-200"
              >
                Générer mon certificat officiel ✨
              </button>
            </form>
          ) : (
            <div className="space-y-6 text-center">
              
              {/* Credential Card Preview */}
              <div id="credential-card" className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl shadow-inner border border-indigo-500/30 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-bold">
                  {badge.slice(0, 2)}
                </div>
                <div className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-1">
                  Certificat d'Accomplissement FasilB
                </div>
                <div className="text-2xl font-black mb-2 text-white">
                  {name}
                </div>
                <p className="text-xs text-slate-300 mb-4">
                  A validé avec succès l'ensemble du parcours technique et validé les compétences sur le protocole :
                </p>
                <div className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-lg text-indigo-300 font-semibold text-sm">
                  {badge}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
                  <span>ID Vérifié : FASILB-{Math.floor(100000 + Math.random() * 900000)}</span>
                  <span>FasilB Learning Platform</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={linkedInShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-[#0a66c2] hover:bg-[#084e96] text-white font-semibold rounded-xl shadow-md flex items-center justify-center gap-2 transition duration-200 text-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  Partager sur LinkedIn
                </a>
                <button
                  onClick={onClose}
                  className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition duration-200 text-sm"
                >
                  Fermer
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}