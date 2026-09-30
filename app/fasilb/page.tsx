"use client";

import React, { useState } from "react";

// --- INTERFACES & TYPES ---
export interface Lesson {
  step: number;
  type: "story" | "text" | "video" | "link" | "code" | "quiz" | "certificate";
  title: string;
  content?: string;
  videoEmbedId?: string;
  linkText?: string;
  linkUrl?: string;
  codeSnippet?: string;
  codeTask?: string;
  question?: string;
  options?: string[];
  correct?: number;
  certBadgeTitle?: string;
}

export interface FasilbModule {
  id: number;
  title: string;
  description: string;
  xp: number;
  badge: string;
  officialDocsUrl: string;
  logoSvg: React.JSX.Element;
  lessons: Lesson[];
}

// --- FONCTION DE GÉNÉRATION DES 12 LEÇONS (POUR LES MODULES 3 À 12) ---
function generateLessonsTemplate(name: string, symbol: string): Lesson[] {
  return [
    { step: 1, type: "story", title: `Étape 1 : Origines de ${name}`, content: `Découvrez la genèse de ${name} (${symbol}) et sa vision pour l'écosystème technologique mondial.` },
    { step: 2, type: "text", title: "Étape 2 : Architecture & Protocole", content: `Analyse détaillée des spécificités techniques et du consensus de ${name}.` },
    { step: 3, type: "video", title: "Étape 3 : Vidéo Pédagogique", content: `Présentation vidéo officielle de l'écosystème ${name}.`, videoEmbedId: "default-video" },
    { step: 4, type: "link", title: "Étape 4 : Documentation Officielle", content: `Accédez aux ressources officielles pour développeurs ${name}.`, linkText: `📄 Docs ${name}`, linkUrl: "https://example.com" },
    { step: 5, type: "text", title: "Étape 5 : Fonctionnement Pratique", content: `Mécanismes d'exécution et de validation des transactions sur ${name}.` },
    { step: 6, type: "code", title: "Étape 6 : Atelier de Code", codeSnippet: `// Connexion ${name}\nconsole.log('Initialisation du nœud ${name}...');`, codeTask: `Exécutez le script d'initialisation pour ${name}.`, content: `Premier script de connexion au réseau ${name}.` },
    { step: 7, type: "quiz", title: "Étape 7 : Quiz Fondamental", question: `Quel est l'intérêt principal de la technologie ${name} ?`, options: ["Décentralisation, rapidité et sécurité", "Centralisation des données bancaires", "Stockage hors ligne de fichiers lourds"], correct: 0 },
    { step: 8, type: "text", title: "Étape 8 : Sécurité & Bonnes Pratiques", content: `Prévention des risques et sécurité des smart contracts sur ${name}.` },
    { step: 9, type: "link", title: "Étape 9 : Outils Écosystème", content: `Explorateurs de blocs et outils pour ${name}.`, linkText: `🔍 Outils ${name}`, linkUrl: "https://example.com" },
    { step: 10, type: "quiz", title: "Étape 10 : Quiz Technique", question: `Comment sont sécurisées les données sur ${name} ?`, options: ["Par cryptographie et validation distribuée", "Par mot de passe administrateur unique", "Par effacement automatique"], correct: 0 },
    { step: 11, type: "text", title: "Étape 11 : Cas d'Usage Réels", content: `Applications concrètes de ${name} dans l'industrie.` },
    { step: 12, type: "certificate", title: `Étape 12 : Certificat ${name}`, content: `Félicitations pour la réussite du cursus ${name}.`, certBadgeTitle: `Certificat : ${name} Certified Expert` }
  ];
}

// --- DONNÉES COMPLÈTES DES 12 PLATEFORMES ---
const fasilbModules: FasilbModule[] = [
  {
    id: 1,
    title: "1. XRP Ledger",
    description: "Parcours 12 étapes : Consensus RPCA, tokens natifs et micro-paiements rapides.",
    xp: 1200,
    badge: "🌐 Maître XRPL",
    officialDocsUrl: "https://xrpl.org/docs",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-cyan-400 fill-current" }, React.createElement("path", { d: "M12 2L2 19.5h20L12 2zm0 5.5l6.5 11.2H5.5L12 7.5z" })),
    lessons: [
      { step: 1, type: "story", title: "Étape 1 : Origines de XRPL", content: "Créé en 2012 par David Schwartz, Jed McCaleb et Arthur Britto, XRP Ledger a été conçu dès l'origine comme une alternative rapide et économe en énergie au Bitcoin." },
      { step: 2, type: "text", title: "Étape 2 : Le Consensus RPCA", content: "Le XRP Ledger n'utilise ni Proof-of-Work ni Proof-of-Stake, mais le XRP Ledger Consensus Protocol (RPCA)." },
      { step: 3, type: "video", title: "Étape 3 : Architecture et Ledger State", content: "Comprendre la structure des objets du registre (AccountRoot, RippleState, Offer)." },
      { step: 4, type: "link", title: "Étape 4 : Documentation XRPL", content: "Consultez le guide officiel du développeur XRP Ledger.", linkText: "📄 XRPL Dev Center", linkUrl: "https://xrpl.org/docs" },
      { step: 5, type: "text", title: "Étape 5 : Émission de Tokens et DEX Natif", content: "XRPL intègre un échange décentralisé (DEX) directement au niveau du protocole." },
      { step: 6, type: "code", title: "Étape 6 : Connexion Client JS/TS", codeSnippet: "import { Client } from 'xrpl';\nasync function main() {\n  const client = new Client('wss://s.altnet.rippletest.net:51233');\n  await client.connect();\n  console.log('Connecté à XRPL Testnet !');\n}", codeTask: "Initialisez le client WebSocket pour le Testnet XRPL.", content: "Écrivez une connexion basique avec la bibliothèque xrpl.js." },
      { step: 7, type: "quiz", title: "Étape 7 : Quiz Consensus", question: "Quel mécanisme de consensus utilise le XRP Ledger ?", options: ["RPCA (Ripple Protocol Consensus Algorithm)", "Proof-of-Work (PoW)", "Delegated Proof-of-Stake (DPoS)"], correct: 0 },
      { step: 8, type: "text", title: "Étape 8 : Hooks et Nouveautés", content: "L'évolution du réseau intègre des fonctionnalités avancées de contrats légers via les Hooks." },
      { step: 9, type: "link", title: "Étape 9 : Explorateur de Blocs", content: "Analysez les transactions en direct sur l'explorateur.", linkText: "🔍 XRPL Explorer", linkUrl: "https://livenet.xrpl.org" },
      { step: 10, type: "quiz", title: "Étape 10 : Quiz DEX", question: "Où se trouve le carnet d'ordres (DEX) sur XRPL ?", options: ["Intégré directement au protocole natif", "Sur une application tierce obligatoirement", "Uniquement sur Ethereum bridge"], correct: 0 },
      { step: 11, type: "text", title: "Étape 11 : Cas d'usage institutionnels", content: "Paiements transfrontaliers et tokenisation d'actifs du monde réel (RWA)." },
      { step: 12, type: "certificate", title: "Étape 12 : Certification XRPL", content: "Vous maîtrisez les bases fondamentales du XRP Ledger.", certBadgeTitle: "Certificat : XRP Ledger Specialist" }
    ]
  },
  {
    id: 2,
    title: "2. Stellar",
    description: "Parcours 12 étapes : SCP, inclusion financière et actifs mondiaux.",
    xp: 1200,
    badge: "🌟 Expert Stellar",
    officialDocsUrl: "https://developers.stellar.org",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-indigo-400 fill-current" }, React.createElement("path", { d: "M12 2l2.4 7.4H22l-6.2 4.5 2.3 7.1L12 16.5l-6.1 4.5 2.3-7.1L2 9.4h7.6z" })),
    lessons: [
      { step: 1, type: "story", title: "Étape 1 : Naissance de Stellar", content: "Fondé par Jed McCaleb et Joyce Kim en 2014 pour connecter l'infrastructure financière mondiale." },
      { step: 2, type: "text", title: "Étape 2 : Stellar Consensus Protocol (SCP)", content: "Basé sur l'accord fédéré de Byzantine (FBA)." },
      { step: 3, type: "video", title: "Étape 3 : Fonctionnement du réseau", content: "Comprendre les Anchors et l'émission d'actifs fiduciaires." },
      { step: 4, type: "link", title: "Étape 4 : Stellar Developers", content: "Accédez à la documentation officielle Stellar.", linkText: "📄 Stellar Docs", linkUrl: "https://developers.stellar.org" },
      { step: 5, type: "text", title: "Étape 5 : Trustlines", content: "Établissement d'une ligne de confiance avant de détenir un actif." },
      { step: 6, type: "code", title: "Étape 6 : Horizon API & JS SDK", codeSnippet: "import { Horizon } from 'stellar-sdk';\nconst server = new Horizon.Server('https://horizon-testnet.stellar.org');", codeTask: "Interrogez l'API Horizon.", content: "Utilisez le SDK JavaScript Stellar." },
      { step: 7, type: "quiz", title: "Étape 7 : Quiz SCP", question: "Quel type de consensus Stellar utilise-t-il ?", options: ["Federated Byzantine Agreement (SCP)", "Proof-of-Authority", "Proof-of-Space"], correct: 0 },
      { step: 8, type: "text", title: "Étape 8 : Soroban", content: "Plateforme de contrats intelligents propulsée par Rust et Wasm." },
      { step: 9, type: "link", title: "Étape 9 : Stellar Laboratory", content: "Testez des requêtes en ligne.", linkText: "🧪 Stellar Lab", linkUrl: "https://laboratory.stellar.org" },
      { step: 10, type: "quiz", title: "Étape 10 : Quiz Actifs", question: "Comment nomme-t-on les institutions connectant les monnaies fiat ?", options: ["Les Anchors (Ancres)", "Les Miners", "Les Validators simples"], correct: 0 },
      { step: 11, type: "text", title: "Étape 11 : Paiements transfrontaliers", content: "Réduction des coûts et des délais." },
      { step: 12, type: "certificate", title: "Étape 12 : Certification Stellar", content: "Parcours validé.", certBadgeTitle: "Certificat : Stellar & Soroban Expert" }
    ]
  },
  {
    id: 3,
    title: "3. Solana",
    description: "Parcours 12 étapes : Proof-of-History, Sealevel et Rust.",
    xp: 1200,
    badge: "⚡ Expert Solana",
    officialDocsUrl: "https://solana.com/docs",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-purple-400 fill-current" }, React.createElement("path", { d: "M4 6h14.5a2 2 0 011.4 3.4l-3 3a2 2 0 01-1.4.6H4a2 2 0 01-1.4-3.4l3-3A2 2 0 017 6z" })),
    lessons: generateLessonsTemplate("Solana", "SOL")
  },
  {
    id: 4,
    title: "4. Algorand",
    description: "Parcours 12 étapes : Pure Proof-of-Stake (PPoS) et ASA.",
    xp: 1200,
    badge: "🌿 Architecte Algorand",
    officialDocsUrl: "https://developer.algorand.org",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-emerald-400 fill-current" }, React.createElement("path", { d: "M12 2l10 20H2L12 2z" })),
    lessons: generateLessonsTemplate("Algorand", "ALGO")
  },
  {
    id: 5,
    title: "5. Flare",
    description: "Parcours 12 étapes : State Connector, FTSO et interopérabilité des données.",
    xp: 1200,
    badge: "🔥 Spécialiste Flare",
    officialDocsUrl: "https://docs.flare.network",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-rose-500 fill-current" }, React.createElement("path", { d: "M12 2l4 8h6l-5 5 2 7-7-4-7 4 2-7-5-5h6l4-8z" })),
    lessons: generateLessonsTemplate("Flare", "FLR")
  },
  {
    id: 6,
    title: "6. Polkadot",
    description: "Parcours 12 étapes : Parachains, Substrate et interopérabilité multi-chaînes.",
    xp: 1200,
    badge: "🟣 Ingénieur Polkadot",
    officialDocsUrl: "https://wiki.polkadot.network",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-pink-400 fill-current" }, React.createElement("path", { d: "M12 2a10 10 0 1010 10A10 10 0 0012 2z" })),
    lessons: generateLessonsTemplate("Polkadot", "DOT")
  },
  {
    id: 7,
    title: "7. Sui",
    description: "Parcours 12 étapes : Langage Move, objets orientés et exécution parallèle.",
    xp: 1200,
    badge: "💧 Développeur Sui Move",
    officialDocsUrl: "https://docs.sui.io",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-blue-400 fill-current" }, React.createElement("circle", { cx: "12", cy: "12", r: "10" })),
    lessons: generateLessonsTemplate("Sui", "SUI")
  },
  {
    id: 8,
    title: "8. Aptos",
    description: "Parcours 12 étapes : Moteur Block-STM et Move VM.",
    xp: 1200,
    badge: "🚀 Spécialiste Aptos",
    officialDocsUrl: "https://aptos.dev",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-teal-400 fill-current" }, React.createElement("path", { d: "M12 2L2 22h20L12 2z" })),
    lessons: generateLessonsTemplate("Aptos", "APT")
  },
  {
    id: 9,
    title: "9. Stacks",
    description: "Parcours 12 étapes : Proof of Transfer (PoX) et smart contracts Clarity sur Bitcoin.",
    xp: 1200,
    badge: "🟧 Expert Stacks & Bitcoin",
    officialDocsUrl: "https://docs.stacks.co",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-orange-400 fill-current" }, React.createElement("rect", { x: "4", y: "4", width: "16", height: "16", rx: "3" })),
    lessons: generateLessonsTemplate("Stacks", "STX")
  },
  {
    id: 10,
    title: "10. Scroll",
    description: "Parcours 12 étapes : zkEVM Layer 2, rollups et cryptographie ZK-SNARKs.",
    xp: 1200,
    badge: "📜 Maître Scroll ZK",
    officialDocsUrl: "https://docs.scroll.io",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-amber-300 fill-current" }, React.createElement("path", { d: "M6 2h12v20H6z" })),
    lessons: generateLessonsTemplate("Scroll", "SCR")
  },
  {
    id: 11,
    title: "11. Immutable X",
    description: "Parcours 12 étapes : ZK-Rollups pour le Gaming et les NFTs sans frais de gas.",
    xp: 1200,
    badge: "🎮 Expert Immutable X",
    officialDocsUrl: "https://docs.immutable.com",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-cyan-200 fill-current" }, React.createElement("polygon", { points: "12,2 22,22 2,22" })),
    lessons: generateLessonsTemplate("Immutable X", "IMX")
  },
  {
    id: 12,
    title: "12. Flutter",
    description: "Parcours 12 étapes : Développement multiplateforme mobile et Web3 d'applications.",
    xp: 1200,
    badge: "📱 Développeur Flutter Pro",
    officialDocsUrl: "https://docs.flutter.dev",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-sky-400 fill-current" }, React.createElement("path", { d: "M14.5 2H3l8 8-8 8h11.5L22 10z" })),
    lessons: [
      { step: 1, type: "story", title: "Étape 1 : Introduction à Flutter", content: "Créé par Google, Flutter permet de créer des applications multiplateformes natives." },
      { step: 2, type: "text", title: "Étape 2 : Le système de Widgets", content: "Tout est widget dans Flutter (Stateless et Stateful widgets)." },
      { step: 3, type: "video", title: "Étape 3 : Architecture et State Management", content: "Gestion de l'état avec Provider, Riverpod ou Bloc." },
      { step: 4, type: "link", title: "Étape 4 : Documentation officielle", content: "Consultez le guide officiel de Flutter.", linkText: "📄 Flutter Docs", linkUrl: "https://docs.flutter.dev" },
      { step: 5, type: "text", title: "Étape 5 : Intégration Web3 & Wallets", content: "Comment connecter une application Flutter aux blockchains." },
      { step: 6, type: "code", title: "Étape 6 : Premier Widget", codeSnippet: "import 'package:flutter/material.dart';\nvoid main() => runApp(MyApp());", codeTask: "Exécutez le widget racine.", content: "Créez votre premier composant visuel en Dart." },
      { step: 7, type: "quiz", title: "Étape 7 : Quiz Langage", question: "Quel langage de programmation utilise-t-on avec Flutter ?", options: ["Dart", "JavaScript", "Python"], correct: 0 },
      { step: 8, type: "text", title: "Étape 8 : Navigation", content: "Gestion de la navigation entre les écrans." },
      { step: 9, type: "link", title: "Étape 9 : Pub.dev", content: "Découvrez les bibliothèques tierces.", linkText: "📦 Pub.dev", linkUrl: "https://pub.dev" },
      { step: 10, type: "quiz", title: "Étape 10 : Quiz Widgets", question: "Qu'est-ce qu'un StatefulWidget ?", options: ["Un widget dont l'état peut changer", "Un widget purement statique", "Un serveur"], correct: 0 },
      { step: 11, type: "text", title: "Étape 11 : Compilation", content: "Compilation vers iOS, Android et Web." },
      { step: 12, type: "certificate", title: "Étape 12 : Certification Flutter", content: "Parcours validé.", certBadgeTitle: "Certificat : Flutter Mobile & Web3 Developer" }
    ]
  }
];

// --- COMPOSANT PRINCIPAL ---
export default function FasilbHub() {
  const [selectedModule, setSelectedModule] = useState<FasilbModule | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [userXp, setUserXp] = useState(1250);

  const handleSelectModule = (mod: FasilbModule) => {
    setSelectedModule(mod);
    setCurrentLessonIndex(0);
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    setCompletedSteps([]);
  };

  const currentLesson: Lesson | undefined = selectedModule?.lessons[currentLessonIndex];

  const handleCheckQuiz = (correctIndex: number) => {
    if (selectedOption === null) return;
    const correct = selectedOption === correctIndex;
    setIsAnswerCorrect(correct);
    if (correct && !completedSteps.includes(currentLessonIndex)) {
      setCompletedSteps([...completedSteps, currentLessonIndex]);
      setUserXp((prev) => prev + 50);
    }
  };

  const handleNextStep = () => {
    if (selectedModule && currentLessonIndex < selectedModule.lessons.length - 1) {
      if (!completedSteps.includes(currentLessonIndex)) {
        setCompletedSteps([...completedSteps, currentLessonIndex]);
      }
      setCurrentLessonIndex(currentLessonIndex + 1);
      setSelectedOption(null);
      setIsAnswerCorrect(null);
    }
  };

  const handlePrevStep = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      setSelectedOption(null);
      setIsAnswerCorrect(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 font-sans">
      {/* En-tête global */}
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8 border-b border-slate-800 pb-6 gap-4">
        <div>
          <h1 
            onClick={() => setSelectedModule(null)}
            className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer"
          >
            FasilB Académie (12 Plateformes Web3 & Mobile)
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Parcours certifiant en 12 étapes : Histoires, Vidéos, Whitepapers, Codes et Quizzes.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {selectedModule && (
            <select
              value={selectedModule.id}
              onChange={(e) => {
                const found = fasilbModules.find((m) => m.id === Number(e.target.value));
                if (found) handleSelectModule(found);
              }}
              className="bg-slate-900 border border-slate-800 text-cyan-300 text-sm font-semibold rounded-xl px-4 py-2.5 outline-none cursor-pointer"
            >
              {fasilbModules.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.title}
                </option>
              ))}
            </select>
          )}
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-5 py-2.5 rounded-xl">
            <span className="text-amber-400 font-bold text-lg">⭐ {userXp} XP</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {!selectedModule ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-200">Choisissez votre Cursus (12 Modules)</h2>
              <span className="text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg font-semibold">
                144 Leçons Interactives
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fasilbModules.map((mod) => (
                <div
                  key={mod.id}
                  onClick={() => handleSelectModule(mod)}
                  className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all rounded-2xl p-6 cursor-pointer flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center shadow-inner">
                        {mod.logoSvg}
                      </div>
                      <span className="text-xs font-medium bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full">
                        +{mod.xp} XP
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 line-clamp-2">{mod.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
                    <span className="text-xs text-amber-400 font-semibold">12 étapes requises</span>
                    <span className="text-sm font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                      Commencer &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
            {/* Barre de navigation interne */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
              <button
                onClick={() => setSelectedModule(null)}
                className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2"
              >
                &larr; Retour à toutes les plateformes
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center">
                  {selectedModule.logoSvg}
                </div>
                <div className="text-xs font-bold bg-slate-800 text-cyan-300 px-3 py-1.5 rounded-lg">
                  Étape {currentLessonIndex + 1} / {selectedModule.lessons.length}
                </div>
              </div>
            </div>

            {/* Barre de progression visuelle */}
            <div className="w-full bg-slate-950 h-2 rounded-full mb-6 overflow-hidden flex">
              {selectedModule.lessons.map((_, idx) => (
                <div
                  key={idx}
                  className={`flex-1 border-r border-slate-900 transition-colors ${
                    idx <= currentLessonIndex ? "bg-cyan-500" : "bg-slate-800"
                  }`}
                />
              ))}
            </div>

            <div className="mb-6 flex items-center gap-3">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{selectedModule.title}</span>
                <h2 className="text-2xl font-bold text-white mt-1">{currentLesson?.title}</h2>
              </div>
            </div>

            {/* Contenu de la leçon active */}
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-6 min-h-[260px] flex flex-col justify-center mb-6">
              {currentLesson?.type === "story" && (
                <div className="border-l-4 border-cyan-400 pl-4 py-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 block">📖 Histoire & Origine</span>
                  <p className="text-slate-200 text-base leading-relaxed italic">{currentLesson.content}</p>
                </div>
              )}

              {currentLesson?.type === "text" && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 block">💡 Cours Théorique</span>
                  <p className="text-slate-300 text-base leading-relaxed">{currentLesson.content}</p>
                </div>
              )}

              {currentLesson?.type === "video" && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 block">🎥 Support Vidéo</span>
                  <p className="text-slate-300 text-sm mb-4">{currentLesson.content}</p>
                  <div className="w-full bg-slate-900 border border-slate-800 rounded-xl aspect-video flex items-center justify-center text-slate-500">
                    <span className="text-sm font-medium">Lecteur Vidéo Intégré (YouTube / Streaming)</span>
                  </div>
                </div>
              )}

              {currentLesson?.type === "link" && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">📄 Documentation & Whitepaper</span>
                  <p className="text-slate-300 text-sm mb-4">{currentLesson.content}</p>
                  {currentLesson.linkUrl && (
                    <a
                      href={currentLesson.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 px-4 py-3 rounded-lg border border-cyan-500/20 transition-all"
                    >
                      {currentLesson.linkText} &rarr;
                    </a>
                  )}
                </div>
              )}

              {currentLesson?.type === "code" && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 block">💻 Atelier Pratique de Code</span>
                  <p className="text-slate-300 text-sm mb-3">{currentLesson.content}</p>
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 font-mono text-xs text-emerald-400 overflow-x-auto mb-3">
                    <pre>{currentLesson.codeSnippet}</pre>
                  </div>
                  <p className="text-xs text-slate-400 font-semibold italic">Mission : {currentLesson.codeTask}</p>
                </div>
              )}

              {currentLesson?.type === "quiz" && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 block">❓ Quiz de Validation</span>
                  <p className="text-slate-200 font-medium mb-4">{currentLesson.question}</p>
                  <div className="space-y-3">
                    {currentLesson.options?.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedOption(idx)}
                        className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                          selectedOption === idx
                            ? "bg-cyan-500/20 border-cyan-500 text-white font-medium"
                            : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {selectedOption !== null && isAnswerCorrect === null && (
                    <button
                      onClick={() => handleCheckQuiz(currentLesson.correct ?? 0)}
                      className="mt-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-lg text-sm transition-colors"
                    >
                      Valider ma réponse
                    </button>
                  )}
                  {isAnswerCorrect === true && (
                    <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm rounded-lg font-medium">
                      Correct ! +50 XP ajoutés. Vous pouvez passer à l'étape suivante.
                    </div>
                  )}
                  {isAnswerCorrect === false && (
                    <div className="mt-4 p-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm rounded-lg font-medium">
                      Incorrect, essayez une autre option.
                    </div>
                  )}
                </div>
              )}

              {currentLesson?.type === "certificate" && (
                <div className="text-center py-6">
                  <div className="inline-block p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl mb-4">
                    <span className="text-4xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-amber-400">{currentLesson.certBadgeTitle}</h3>
                  <p className="text-slate-300 text-sm mt-2 max-w-lg mx-auto">{currentLesson.content}</p>
                  <div className="mt-6">
                    <span className="inline-block bg-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow-lg">
                      Certificat Officiel Enregistré et Validé
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Boutons de navigation Précédent / Suivant */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
              <button
                onClick={handlePrevStep}
                disabled={currentLessonIndex === 0}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  currentLessonIndex === 0
                    ? "bg-slate-900 text-slate-600 cursor-not-allowed"
                    : "bg-slate-800 hover:bg-slate-700 text-white"
                }`}
              >
                &larr; Étape précédente
              </button>

              <span className="text-xs text-slate-500 hidden sm:inline">FasilB Académie - Navigation Sécurisée</span>

              {currentLessonIndex < selectedModule.lessons.length - 1 && (
                <button
                  onClick={handleNextStep}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
                >
                  Étape suivante &rarr;
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}