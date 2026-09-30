import React from "react";

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

// --- FONCTION DE GÉNÉRATION DES 12 LEÇONS ENRICHIES (POUR LES MODULES 3 À 12) ---
function generateRichLessons(name: string, symbol: string, docsUrl: string, whitepaperUrl: string, videoId: string): Lesson[] {
  return [
    { 
      step: 1, 
      type: "story", 
      title: `Étape 1 : Origines et Vision de ${name}`, 
      content: `L'histoire de ${name} (${symbol}) s'inscrit dans une quête d'innovation profonde au sein de l'écosystème numérique mondial. Conçu pour répondre aux limites structurelles des architectures de première génération, ce projet ambitionne de redéfinir la vitesse, la scalabilité et l'accessibilité des services décentralisés. Dès sa conception, l'équipe fondatrice a cherché à bâtir un pont solide entre les cas d'usage industriels de grande envergure et l'expérience utilisateur quotidienne, posant ainsi les bases d'une adoption de masse durable.` 
    },
    { 
      step: 2, 
      type: "text", 
      title: "Étape 2 : Architecture Technique & Modèle de Consensus", 
      content: `L'architecture de ${name} repose sur un mécanisme de consensus hautement optimisé qui garantit l'immutabilité des registres tout en minimisant la consommation énergétique et les délais de latence. Contrairement aux blockchains traditionnelles souffrant de congestions, ce réseau utilise des structures de données sophistiquées permettant le traitement parallèle des transactions. Les validateurs ou nœuds du réseau coopèrent à travers un protocole cryptographique rigoureux pour éliminer tout risque de double dépense, assurant un débit par seconde (TPS) exceptionnel.` 
    },
    { 
      step: 3, 
      type: "video", 
      title: "Étape 3 : Conférence et Démonstration Vidéo", 
      content: `Cette session visuelle décrypte le fonctionnement interne du réseau et expose les retours d'expérience des ingénieurs principaux. Observez la topologie du réseau en action et comprenez comment interagir efficacement avec les validateurs de ${name}.`, 
      videoEmbedId: videoId 
    },
    { 
      step: 4, 
      type: "link", 
      title: "Étape 4 : Documentation & Whitepaper Officiel", 
      content: `Pour tout architecte ou développeur souhaitant maîtriser ${name}, la lecture du whitepaper original et de la documentation technique est impérative. Accédez ci-dessous aux spécifications de bas niveau du protocole.`, 
      linkText: `📄 Whitepaper & Docs ${name}`, 
      linkUrl: docsUrl 
    },
    { 
      step: 5, 
      type: "text", 
      title: "Étape 5 : Mécanismes d'Exécution et State Management", 
      content: `La gestion de l'état (State Management) sur ${name} se distingue par sa modularité. Chaque compte ou objet intelligent possède un cycle de vie précis géré par la machine virtuelle ou le moteur d'exécution natif. Les développeurs doivent intégrer la notion de frais de transaction (gas fees) dynamiques ou de structures de comptes orientées objets pour concevoir des applications robustes, capables de résister aux pics de charge du réseau principal.` 
    },
    { 
      step: 6, 
      type: "code", 
      title: "Étape 6 : Atelier Pratique d'Intégration", 
      codeSnippet: `// Initialisation et connexion au client ${name}\nasync function connect${symbol}() {\n  console.log('Connexion au réseau ${name} en cours...');\n  const status = await fetch('https://api.${name.toLowerCase()}.network/health');\n  console.log('Statut du nœud :', await status.json());\n}\nconnect${symbol}();`, 
      codeTask: `Exécutez ce script de diagnostic pour vérifier l'état de santé du nœud distant ${name}.`, 
      content: `Ce premier script d'atelier illustre comment initialiser une connexion programmatique avec l'infrastructure réseau de ${name} via ses SDKs officiels.` 
    },
    { 
      step: 7, 
      type: "quiz", 
      title: "Étape 7 : Quiz de Validation Fondamentale", 
      question: `Quel est l'avantage architectural majeur mis en avant par le protocole ${name} ?`, 
      options: [
        "Un débit transactionnel élevé allié à une faible latence",
        "Une centralisation stricte des données pour les banques centrales",
        "L'absence totale de cryptographie pour accélérer les calculs"
      ], 
      correct: 0 
    },
    { 
      step: 8, 
      type: "text", 
      title: "Étape 8 : Sécurité, Audit et Bonnes Pratiques", 
      content: `La sécurité des applications déployées sur ${name} nécessite une attention méticuleuse face aux vulnérabilités logiques et aux attaques par réentrance ou dépassement de capacité. L'adoption d'un cadre de test rigoureux, combiné à l'utilisation d'outils d'analyse statique du code source, permet de garantir l'intégrité des fonds et des contrats intelligents avant leur mise en production sur le réseau principal (Mainnet).` 
    },
    { 
      step: 9, 
      type: "link", 
      title: "Étape 9 : Outils et Explorateurs de Blocs", 
      content: `L'exploration des blocs et le suivi analytique des flux de données s'effectuent via des interfaces d'exploration dédiées. Ces outils de télémétrie permettent d'auditer en temps réel l'activité des contrats et des comptes.`, 
      linkText: `🔍 Explorateur ${name}`, 
      linkUrl: whitepaperUrl 
    },
    { 
      step: 10, 
      type: "quiz", 
      title: "Étape 10 : Quiz Technique Avancé", 
      question: `Comment les transactions sont-elles authentifiées et sécurisées sur ${name} ?`, 
      options: [
        "Par des signatures cryptographiques à clés publiques et privées",
        "Par un simple mot de passe partagé sur le canal public",
        "Par validation manuelle par les créateurs du projet"
      ], 
      correct: 0 
    },
    { 
      step: 11, 
      type: "text", 
      title: "Étape 11 : Cas d'Usage Industriels et Tokenisation", 
      content: `Au-delà de la finance décentralisée (DeFi), ${name} trouve des applications concrètes dans la tokenisation d'actifs du monde réel (RWA), la traçabilité logistique à grande échelle et les systèmes de paiements transfrontaliers sécurisés. Les entreprises adoptent progressivement ces infrastructures pour réduire leurs coûts opérationnels et automatiser l'exécution de contrats complexes grâce à la programmabilité avancée.` 
    },
    { 
      step: 12, 
      type: "certificate", 
      title: `Étape 12 : Certification Finale ${name}`, 
      content: `Vous avez complété avec succès les 12 étapes fondamentales du cursus ${name}. Votre engagement académique et technique valide votre aptitude à concevoir et interagir au sein de cet écosystème d'avant-garde.`, 
      certBadgeTitle: `Certificat : ${name} Certified Expert` 
    }
  ];
}

// --- DONNÉES COMPLÈTES DES 12 PLATEFORMES ---
export const fasilbModules: FasilbModule[] = [
  {
    id: 1,
    title: "1. XRP Ledger",
    description: "Parcours 12 étapes : Consensus RPCA, tokens natifs et micro-paiements rapides.",
    xp: 1200,
    badge: "🌐 Maître XRPL",
    officialDocsUrl: "https://xrpl.org/docs",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-cyan-400 fill-current" }, React.createElement("path", { d: "M12 2L2 19.5h20L12 2zm0 5.5l6.5 11.2H5.5L12 7.5z" })),
    lessons: [
      { 
        step: 1, 
        type: "story", 
        title: "Étape 1 : Origines et Genèse de XRPL", 
        content: "Créé en 2012 par David Schwartz, Jed McCaleb et Arthur Britto, le XRP Ledger (XRPL) a été imaginé dès l'origine comme une alternative écologique, ultra-rapide et décentralisée au protocole Bitcoin. Les fondateurs souhaitaient éliminer la lourdeur du Proof-of-Work tout en offrant une infrastructure capable de régler des paiements mondiaux en quelques secondes, ouvrant ainsi la voie à l'Internet de la Valeur." 
      },
      { 
        step: 2, 
        type: "text", 
        title: "Étape 2 : Le Protocole de Consensus RPCA", 
        content: "Le XRPL s'affranchit du Minage classique en utilisant le Ripple Protocol Consensus Algorithm (RPCA). Toutes les quelques secondes, des serveurs indépendants répartis à travers le globe parviennent à un accord unanime sur l'ordre et le contenu des transactions sans qu'aucun jeton ne doive être staké ou brûlé pour sécuriser le réseau. Cette architecture garantit une finalité instantanée et des frais de transaction quasi nuls." 
      },
      { 
        step: 3, 
        type: "video", 
        title: "Étape 3 : Conférence Vidéo - Architecture XRPL", 
        content: "Visionnez cette présentation officielle détaillant la structure interne des objets du registre (AccountRoot, RippleState, Offer) et l'optimisation des flux de données par les serveurs de validation.", 
        videoEmbedId: "xrpl-architecture-video" 
      },
      { 
        step: 4, 
        type: "link", 
        title: "Étape 4 : Documentation & Centre Développeur XRPL", 
        content: "Le centre de documentation officiel du XRP Ledger est la ressource incontournable pour appréhender les API JSON-RPC, les bibliothèques client et les propositions de standards (XLS).", 
        linkText: "📄 XRPL Dev Center & Whitepapers", 
        linkUrl: "https://xrpl.org/docs" 
      },
      { 
        step: 5, 
        type: "text", 
        title: "Étape 5 : Le DEX Natif et l'Émission d'Actifs", 
        content: "Contrairement aux blockchains nécessitant des smart contracts complexes pour échanger des tokens, le XRP Ledger intègre un échange décentralisé (DEX) directement au niveau de son protocole de base. N'importe quel utilisateur peut émettre des actifs personnalisés, configurer des lignes de confiance (Trustlines) et placer des ordres d'achat ou de vente directement dans le carnet d'ordres central du registre." 
      },
      { 
        step: 6, 
        type: "code", 
        title: "Étape 6 : Atelier de Code - Client WebSocket JS", 
        codeSnippet: "import { Client } from 'xrpl';\n\nasync function runXRPLClient() {\n  const client = new Client('wss://s.altnet.rippletest.net:51233');\n  await client.connect();\n  console.log('Connexion WebSocket établie avec succès sur le Testnet XRPL !');\n  const serverInfo = await client.request({ command: 'server_info' });\n  console.log('Version du serveur :', serverInfo.result.info.build_version);\n  await client.disconnect();\n}\nrunXRPLClient();", 
        codeTask: "Exécutez ce script pour vous connecter au Testnet public et récupérer la version du nœud distant.", 
        content: "Apprenez à manipuler la bibliothèque officielle xrpl.js pour communiquer par WebSocket avec les serveurs de test du réseau." 
      },
      { 
        step: 7, 
        type: "quiz", 
        title: "Étape 7 : Quiz de Validation - Consensus XRPL", 
        question: "Quel mécanisme de consensus garantit la validation des transactions sur le XRP Ledger ?", 
        options: [
          "Le RPCA (Ripple Protocol Consensus Algorithm)", 
          "Le Proof-of-Work (PoW)", 
          "Le Delegated Proof-of-Stake (DPoS)"
        ], 
        correct: 0 
      },
      { 
        step: 8, 
        type: "text", 
        title: "Étape 8 : Évolution et Fonctionnalités Avancées (Hooks)", 
        content: "L'écosystème XRPL évolue constamment pour intégrer des fonctionnalités de contrats intelligents légers et ultra-rapides grâce aux Hooks. Ces petits bouts de code exécutés à chaque transaction permettent d'automatiser des règles de conformité, des transferts conditionnels ou des pare-feux de sécurité directement au niveau du protocole, sans sacrifier les performances légendaires du registre." 
      },
      { 
        step: 9, 
        type: "link", 
        title: "Étape 9 : Explorateur de Blocs et Télémétrie", 
        content: "Analysez le trafic du réseau principal en temps réel, suivez la création des grands livres (Ledger Indexes) et inspectez l'historique des comptes à l'aide de l'explorateur de référence.", 
        linkText: "🔍 XRPL Ledger Livenet Explorer", 
        linkUrl: "https://livenet.xrpl.org" 
      },
      { 
        step: 10, 
        type: "quiz", 
        title: "Étape 10 : Quiz Technique - Le DEX", 
        question: "Où se situe le carnet d'ordres (DEX) sur le XRP Ledger ?", 
        options: [
          "Intégré nativement au cœur du protocole de la blockchain", 
          "Sur une application décentralisée tierce externe obligatoire", 
          "Uniquement stocké sur les serveurs de la fondation Ripple"
        ], 
        correct: 0 
      },
      { 
        step: 11, 
        type: "text", 
        title: "Étape 11 : Cas d'Usage Institutionnels et RWA", 
        content: "Aujourd'hui, le XRP Ledger est plébiscité par les grandes institutions financières et les banques pour optimiser les règlements bruts en temps réel (RTGS) et les paiements transfrontaliers. De plus, la tokenisation d'actifs du monde réel (RWA) tels que l'immobilier, les obligations et les matières premières s'y développe massivement grâce à la rapidité et à la sécurité juridique du cadre réglementaire de l'actif." 
      },
      { 
        step: 12, 
        type: "certificate", 
        title: "Étape 12 : Certification Officielle XRPL", 
        content: "Félicitations ! Vous avez validé avec brio les 12 modules d'apprentissage du XRP Ledger et maîtrisez les bases fondamentales de son architecture.", 
        certBadgeTitle: "Certificat : XRP Ledger Specialist" 
      }
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
      { 
        step: 1, 
        type: "story", 
        title: "Étape 1 : Naissance et Mission de Stellar", 
        content: "Fondé en 2014 par Jed McCaleb et Joyce Kim, Stellar a été conçu pour résoudre un problème critique : connecter l'infrastructure financière mondiale et offrir l'inclusion bancaire aux populations non-bancarisées. En permettant à n'importe quelle monnaie fiduciaire ou cryptographique d'être représentée et échangée instantanément à travers un réseau décentralisé, Stellar s'est positionné comme le réseau de référence pour les paiements internationaux à faible coût." 
      },
      { 
        step: 2, 
        type: "text", 
        title: "Étape 2 : Le Stellar Consensus Protocol (SCP)", 
        content: "Le réseau Stellar repose sur le Stellar Consensus Protocol (SCP), une implémentation originale de l'Accord Fédéré Byzantin (FBA). Contrairement au Proof-of-Work ou au Proof-of-Stake traditionnel, le SCP permet à chaque nœud de choisir ses propres tranches de confiance (Quorum Slices). Cela garantit une décentralisation ouverte, une résistance infaillible aux pannes et une finalité des transactions atteinte en moins de 5 secondes." 
      },
      { 
        step: 3, 
        type: "video", 
        title: "Étape 3 : Conférence Vidéo - Fonctionnement des Ancres", 
        content: "Cette vidéo pédagogique explique le rôle crucial des Ancres (Anchors) sur Stellar, qui agissent en tant qu'intermédiaires de confiance pour connecter les systèmes bancaires traditionnels aux registres décentralisés.", 
        videoEmbedId: "stellar-anchors-video" 
      },
      { 
        step: 4, 
        type: "link", 
        title: "Étape 4 : Documentation Officielle Stellar Developers", 
        content: "Explorez les guides complets pour concevoir des applications, émettre des actifs et déployer des contrats intelligents sur le réseau.", 
        linkText: "📄 Stellar Developer Docs & Whitepapers", 
        linkUrl: "https://developers.stellar.org" 
      },
      { 
        step: 5, 
        type: "text", 
        title: "Étape 5 : Le Système des Lignes de Confiance (Trustlines)", 
        con: "Sur Stellar, pour qu'un compte puisse détenir ou recevoir un actif émis par une tierce partie (comme un stablecoin ou un jeton fiduciaire), il doit obligatoirement établir une 'Trustline' (ligne de confiance). Ce mécanisme protège les utilisateurs contre l'envoi non sollicité d'actifs indésirables ou frauduleux, garantissant un contrôle absolu sur les expositions financières de chaque portefeuille." 
      },
      { 
        step: 6, 
        type: "code", 
        title: "Étape 6 : Atelier de Code - SDK JavaScript Stellar", 
        codeSnippet: "import { Horizon } from 'stellar-sdk';\n\nasync function checkStellarAccount() {\n  const server = new Horizon.Server('https://horizon-testnet.stellar.org');\n  const accountId = 'GBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';\n  try {\n    const account = await server.loadAccount(accountId);\n    console.l('Solde du compte récupéré avec succès !');\n  } catch (e) {\n    console.log('Erreur de chargement du compte :', e.message);\n  }\n}\ncheckStellarAccount();", 
        codeTask: "Utilisez le SDK JavaScript Horizon pour interroger et inspecter un compte sur le Testnet Stellar.", 
        content: "Apprenez à utiliser l'API Horizon et les bibliothèques officielles pour interagir programmatiquement avec le registre Stellar." 
      },
      { 
        step: 7, 
        type: "quiz", 
        title: "Étape 7 : Quiz de Validation - Le Consensus SCP", 
        question: "Quel modèle de consensus unique le réseau Stellar utilise-t-il ?", 
        options: [
          "Le Federated Byzantine Agreement via le SCP", 
          "Le Proof-of-Authority centralisé", 
          "Le Proof-of-Space and Time"
        ], 
        correct: 0 
      },
      { 
        step: 8, 
        type: "text", 
        title: "Étape 8 : L'Ère des Contrats Intelligents avec Soroban", 
        content: "Soroban est la plateforme de contrats intelligents de pointe propulsée par l'écosystème Stellar. Écrite en Rust et exécutée via WebAssembly (Wasm), elle associe la rapidité et la fiabilité légendaires du réseau de base à une programmabilité avancée, permettant de développer des protocoles DeFi complexes et des applications décentralisées hautement sécurisées." 
      },
      { 
        step: 9, 
        type: "link", 
        title: "Étape 9 : Stellar Laboratory (Outil de Test)", 
        content: "Testez directement vos requêtes, construisez des transactions complexes et interagissez avec les réseaux de test à l'aide de l'outil interactif officiel.", 
        linkText: "🧪 Stellar Laboratory Online", 
        linkUrl: "https://laboratory.stellar.org" 
      },
      { 
        step: 10, 
        type: "quiz", 
        title: "Étape 10 : Quiz Technique - Les Ancres", 
        question: "Quel terme désigne les entités financières de confiance qui permettent de relier les monnaies fiat au réseau Stellar ?", 
        options: [
          "Les Anchors (Ancres)", 
          "Les Mineurs de blocs", 
          "Les Relais de hachage"
        ], 
        correct: 0 
      },
      { 
        step: 11, 
        type: "text", 
        title: "Étape 11 : Impact sur les Paiements Mondiaux", 
        content: "Grâce à son architecture axée sur l'interopérabilité, Stellar permet aux institutions financières de régler des transactions transfrontalières en quelques secondes et pour des fractions de centime. De nombreux programmes d'aide humanitaire et de transferts de fonds internationaux s'appuient aujourd'hui sur cette technologie pour éliminer les intermédiaires bancaires traditionnels." 
      },
      { 
        step: 12, 
        type: "certificate", 
        title: "Étape 12 : Certification Officielle Stellar", 
        content: "Félicitations pour avoir mené à bien ce parcours complet. Vous êtes désormais certifié sur l'écosystème Stellar et Soroban.", 
        certBadgeTitle: "Certificat : Stellar & Soroban Expert" 
      }
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
    lessons: generateRichLessons(
      "Solana", 
      "SOL", 
      "https://solana.com/docs", 
      "https://solana.com/solana-whitepaper.pdf", 
      "solana-intro-video"
    )
  },
  {
    id: 4,
    title: "4. Algorand",
    description: "Parcours 12 étapes : Pure Proof-of-Stake (PPoS) et ASA.",
    xp: 1200,
    badge: "🌿 Architecte Algorand",
    officialDocsUrl: "https://developer.algorand.org",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-emerald-400 fill-current" }, React.createElement("path", { d: "M12 2l10 20H2L12 2z" })),
    lessons: generateRichLessons(
      "Algorand", 
      "ALGO", 
      "https://developer.algorand.org/docs", 
      "https://www.algorand.com/technology/whitepapers", 
      "algorand-intro-video"
    )
  },
  {
    id: 5,
    title: "5. Flare",
    description: "Parcours 12 étapes : State Connector, FTSO et interopérabilité des données.",
    xp: 1200,
    badge: "🔥 Spécialiste Flare",
    officialDocsUrl: "https://docs.flare.network",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-rose-500 fill-current" }, React.createElement("path", { d: "M12 2l4 8h6l-5 5 2 7-7-4-7 4 2-7-5-5h6l4-8z" })),
    lessons: generateRichLessons(
      "Flare", 
      "FLR", 
      "https://docs.flare.network", 
      "https://flare.network/whitepaper/", 
      "flare-intro-video"
    )
  },
  {
    id: 6,
    title: "6. Polkadot",
    description: "Parcours 12 étapes : Parachains, Substrate et interopérabilité multi-chaînes.",
    xp: 1200,
    badge: "🟣 Ingénieur Polkadot",
    officialDocsUrl: "https://wiki.polkadot.network",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-pink-400 fill-current" }, React.createElement("path", { d: "M12 2a10 10 0 1010 10A10 10 0 0012 2z" })),
    lessons: generateRichLessons(
      "Polkadot", 
      "DOT", 
      "https://wiki.polkadot.network", 
      "https://polkadot.network/Polkadot-whitepaper.pdf", 
      "polkadot-intro-video"
    )
  },
  {
    id: 7,
    title: "7. Sui",
    description: "Parcours 12 étapes : Langage Move, objets orientés et exécution parallèle.",
    xp: 1200,
    badge: "💧 Développeur Sui Move",
    officialDocsUrl: "https://docs.sui.io",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-blue-400 fill-current" }, React.createElement("circle", { cx: "12", cy: "12", r: "10" })),
    lessons: generateRichLessons(
      "Sui", 
      "SUI", 
      "https://docs.sui.io", 
      "https://github.com/MystenLabs/sui/blob/main/doc/paper/sui.pdf", 
      "sui-intro-video"
    )
  },
  {
    id: 8,
    title: "8. Aptos",
    description: "Parcours 12 étapes : Moteur Block-STM et Move VM.",
    xp: 1200,
    badge: "🚀 Spécialiste Aptos",
    officialDocsUrl: "https://aptos.dev",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-teal-400 fill-current" }, React.createElement("path", { d: "M12 2L2 22h20L12 2z" })),
    lessons: generateRichLessons(
      "Aptos", 
      "APT", 
      "https://aptos.dev", 
      "https://aptosfoundation.org/whitepaper", 
      "aptos-intro-video"
    )
  },
  {
    id: 9,
    title: "9. Stacks",
    description: "Parcours 12 étapes : Proof of Transfer (PoX) et smart contracts Clarity sur Bitcoin.",
    xp: 1200,
    badge: "🟧 Expert Stacks & Bitcoin",
    officialDocsUrl: "https://docs.stacks.co",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-orange-400 fill-current" }, React.createElement("rect", { x: "4", y: "4", width: "16", height: "16", rx: "3" })),
    lessons: generateRichLessons(
      "Stacks", 
      "STX", 
      "https://docs.stacks.co", 
      "https://stacks.org/stacks-whitepaper", 
      "stacks-intro-video"
    )
  },
  {
    id: 10,
    title: "10. Scroll",
    description: "Parcours 12 étapes : zkEVM Layer 2, rollups et cryptographie ZK-SNARKs.",
    xp: 1200,
    badge: "📜 Maître Scroll ZK",
    officialDocsUrl: "https://docs.scroll.io",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-amber-300 fill-current" }, React.createElement("path", { d: "M6 2h12v20H6z" })),
    lessons: generateRichLessons(
      "Scroll", 
      "SCR", 
      "https://docs.scroll.io", 
      "https://scroll.io/zkEVM.pdf", 
      "scroll-intro-video"
    )
  },
  {
    id: 11,
    title: "11. Immutable X",
    description: "Parcours 12 étapes : ZK-Rollups pour le Gaming et les NFTs sans frais de gas.",
    xp: 1200,
    badge: "🎮 Expert Immutable X",
    officialDocsUrl: "https://docs.immutable.com",
    logoSvg: React.createElement("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-cyan-200 fill-current" }, React.createElement("polygon", { points: "12,2 22,22 2,22" })),
    lessons: generateRichLessons(
      "Immutable X", 
      "IMX", 
      "https://docs.immutable.com", 
      "https://www.immutable.com/whitepaper", 
      "immutable-intro-video"
    )
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
      { 
        step: 1, 
        type: "story", 
        title: "Étape 1 : Origines et Architecture de Flutter", 
        content: "Développé et maintenu par Google, Flutter s'est imposé comme le framework de référence pour concevoir des applications multiplateformes hautement performantes à partir d'une base de code unique en langage Dart. En s'appuyant sur son propre moteur graphique Skia/Impeller, Flutter contourne les contraintes des interfaces natives traditionnelles pour offrir un rendu fluide à 60/120 images par seconde sur iOS, Android, Web et Desktop." 
      },
      { 
        step: 2, 
        type: "text", 
        title: "Étape 2 : Le Modèle Conceptuel des Widgets", 
        content: "Dans Flutter, tout est widget. L'architecture repose sur la composition hiérarchique de composants visuels et structurels divisés principalement en deux catégories : les StatelessWidget (immuables) et les StatefulWidget (gérant un état interne dynamique). Comprendre le cycle de vie des widgets, la gestion des arbres de rendu (RenderTree) et l'optimisation des re-constructions est indispensable pour structurer une application professionnelle." 
      },
      { 
        step: 3, 
        type: "video", 
        title: "Étape 3 : Conférence Vidéo - State Management", 
        content: "Cette masterclass vidéo décortique les différentes approches de gestion d'état dans Flutter, allant de Provider et Riverpod jusqu'aux architectures plus complexes basées sur le pattern Bloc.", 
        videoEmbedId: "flutter-state-video" 
      },
      { 
        step: 4, 
        type: "link", 
        title: "Étape 4 : Documentation Officielle & Ressources", 
        content: "Accédez au portail de référence de Google pour découvrir les guides de migration, les packages officiels et les bonnes pratiques de développement multiplateforme.", 
        linkText: "📄 Flutter Official Docs", 
        linkUrl: "https://docs.flutter.dev" 
      },
      { 
        step: 5, 
        type: "text", 
        title: "Étape 5 : Intégration Web3 & Connexion aux Wallets", 
        content: "Pour connecter une application mobile ou Web Flutter à des écosystèmes blockchain, les développeurs intègrent des bibliothèques de signature cryptographique en Dart et des protocoles de communication décentralisés. Cela permet aux utilisateurs de signer des transactions, d'interagir avec des contrats intelligents et de gérer leurs jetons directement depuis leur interface mobile." 
      },
      { 
        step: 6, 
        type: "code", 
        title: "Étape 6 : Atelier de Code - Widget Racine en Dart", 
        codeSnippet: "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const FasilbApp());\n\nclass FasilbApp extends StatelessWidget {\n  const FasilbApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'FasilB Flutter Module',\n      theme: ThemeData.dark(),\n      home: Scaffold(\n        appBar: AppBar(title: const Text('Académie FasilB')),\n        body: const Center(child: Text('Bienvenue dans le développement Flutter !')),\n      ),\n    );\n  }\n}", 
        codeTask: "Analysez et testez ce widget racine pour initialiser une application Flutter aux normes Material Design.", 
        content: "Ce script présente la structure minimale requise pour lancer une application mobile fonctionnelle avec le framework Flutter." 
      },
      { 
        step: 7, 
        type: "quiz", 
        title: "Étape 7 : Quiz de Validation - Langage Dart", 
        question: "Quel langage de programmation est exclusivement utilisé pour développer avec le framework Flutter ?", 
        options: [
          "Dart", 
          "JavaScript", 
          "Swift natif"
        ], 
        correct: 0 
      },
      { 
        step: 8, 
        type: "text", 
        title: "Étape 8 : Navigation, Routage et Architecture Modulaire", 
        content: "La structuration des flux de navigation entre les différents écrans d'une application mobile requiert une gestion rigoureuse des routes et des paramètres. L'utilisation de navigateurs déclaratifs et de structures modulaires garantit une maintenabilité à long terme et une excellente fluidité lors des transitions d'une vue à une autre." 
      },
      { 
        step: 9, 
        type: "link", 
        title: "Étape 9 : Pub.dev (Le Référentiel de Packages)", 
        content: "Découvrez le dépôt officiel des packages tiers pour Flutter et Dart afin d'accélérer le développement de vos applications mobiles et Web3.", 
        linkText: "📦 Pub.dev Package Repository", 
        linkUrl: "https://pub.dev" 
      },
      { 
        step: 10, 
        type: "quiz", 
        title: "Étape 10 : Quiz Technique - Les Widgets", 
        question: "Qu'est-ce qu'un 'StatefulWidget' dans l'architecture Flutter ?", 
        options: [
          "Un composant dont l'état visuel et interne peut évoluer au cours du temps", 
          "Un composant totalement statique qui ne change jamais", 
          "Un serveur de base de données distant"
        ], 
        correct: 0 
      },
      { 
        step: 11, 
        type: "text", 
        title: "Étape 11 : Compilation, Build et Déploiement Natif", 
        content: "L'un des plus grands avantages de Flutter réside dans sa capacité à compiler le code source Dart directement en code machine natif pour les architectures ARM et x86 (iOS et Android), ainsi qu'en WebAssembly/JavaScript pour les navigateurs web. Cela garantit des performances quasi-identiques au code natif pur, sans surcoût d'exécution majeur." 
      },
      { 
        step: 12, 
        type: "certificate", 
        title: "Étape 12 : Certification Finale Flutter", 
        content: "Félicitations ! Vous avez achevé avec succès l'ensemble du cursus Flutter et validé vos compétences d'ingénieur en développement multiplateforme.", 
        certBadgeTitle: "Certificat : Flutter Mobile & Web3 Developer" 
      }
    ]
  }
];