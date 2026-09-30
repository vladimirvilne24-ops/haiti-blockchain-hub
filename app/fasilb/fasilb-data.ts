// Types and Interfaces for the FasilB Multi-Chain Academy

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'interactive' | 'quiz';
  completed: boolean;
  content?: string;
  videoUrl?: string;
  codeSnippet?: string;
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export interface FasilbModule {
  id: string;
  title: string;
  description: string;
  category: 'Blockchain' | 'Mobile & Frontend';
  icon: string;
  lessonsCount: number;
  duration: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  completed: boolean;
  lessons: Lesson[];
}

// Helper to generate a standardized rich curriculum of 12 lessons per module
const generateRichLessons = (modulePrefix: string, moduleName: string): Lesson[] => {
  return [
    {
      id: `${modulePrefix}-1`,
      title: `Introduction à ${moduleName} et Écosystème`,
      duration: '15 min',
      type: 'reading',
      completed: false,
      content: `Bienvenue dans ce module consacré à ${moduleName}. Nous allons explorer les fondations, la vision et l'architecture générale de cet écosystème.`
    },
    {
      id: `${modulePrefix}-2`,
      title: 'Architecture technique et Consensus',
      duration: '25 min',
      type: 'video',
      completed: false,
      videoUrl: `https://example.com/videos/${modulePrefix}-consensus.mp4`,
      content: `Comprenez en détail le mécanisme de consensus et la validation des transactions sur ${moduleName}.`
    },
    {
      id: `${modulePrefix}-3`,
      title: 'Configuration de l’environnement de développement',
      duration: '20 min',
      type: 'interactive',
      completed: false,
      codeSnippet: `// Configuration de base pour ${moduleName}\nconst client = initializeClient({ network: 'testnet' });\nconsole.log('Connecté à ${moduleName} !');`
    },
    {
      id: `${modulePrefix}-4`,
      title: 'Création et gestion des comptes / clés',
      duration: '30 min',
      type: 'reading',
      completed: false,
      content: `Apprenez à générer des paires de clés sécurisées, à gérer les portefeuilles et à comprendre le système d'adresses.`
    },
    {
      id: `${modulePrefix}-5`,
      title: 'Création de transactions et transferts natifs',
      duration: '35 min',
      type: 'interactive',
      completed: false,
      codeSnippet: `// Exemple de transaction native sur ${moduleName}\nconst tx = await buildTransfer({ to: 'destination_address', amount: '100' });\nconst result = await signAndSubmit(tx);`
    },
    {
      id: `${modulePrefix}-6`,
      title: 'Gestion des actifs et Tokens personnalisés',
      duration: '30 min',
      type: 'reading',
      completed: false,
      content: `Découvrez comment émettre, échanger et gérer des tokens ou des actifs numériques sur ${moduleName}.`
    },
    {
      id: `${modulePrefix}-7`,
      title: 'Smart Contracts : Logique et Déploiement',
      duration: '45 min',
      type: 'video',
      completed: false,
      videoUrl: `https://example.com/videos/${modulePrefix}-smart-contracts.mp4`,
      content: `Écriture, test et déploiement de contrats intelligents adaptés à ${moduleName}.`
    },
    {
      id: `${modulePrefix}-8`,
      title: 'Sécurité, Audit et Bonnes Pratiques',
      duration: '25 min',
      type: 'reading',
      completed: false,
      content: `Évitez les pièges courants, sécurisez vos clés privées et apprenez à auditer le code basique.`
    },
    {
      id: `${modulePrefix}-9`,
      title: 'Intégration d’une interface utilisateur (Frontend)',
      duration: '40 min',
      type: 'interactive',
      completed: false,
      codeSnippet: `// Intégration React / UI\nfunction ConnectWallet() {\n  return <button>Connecter à ${moduleName}</button>;\n}`
    },
    {
      id: `${modulePrefix}-10`,
      title: 'Cas d’usage avancés et Oracles',
      duration: '30 min',
      type: 'reading',
      completed: false,
      content: `Exploration des cas d'usage réels (DeFi, paiements transfrontaliers, traçabilité) et connexion aux données externes.`
    },
    {
      id: `${modulePrefix}-11`,
      title: 'Quiz de validation des compétences',
      duration: '15 min',
      type: 'quiz',
      completed: false,
      quiz: [
        {
          question: `Quel est l'objectif principal de ${moduleName} ?`,
          options: ['Stockage de fichiers', 'Sécurité et rapidité des transactions', 'Réseau social décentralisé', 'Aucun de ces choix'],
          correctAnswer: 1
        }
      ]
    },
    {
      id: `${modulePrefix}-12`,
      title: 'Projet Final et Certification',
      duration: '60 min',
      type: 'interactive',
      completed: false,
      content: `Réalisez un projet de bout en bout pour obtenir votre certificat officiel sur le module ${moduleName}.`
    }
  ];
};

// Complete FasilB Modules List
export const fasilbModules: FasilbModule[] = [
  {
    id: 'xrpl',
    title: 'XRP Ledger (XRPL)',
    description: 'Maîtrisez le développement sur le XRP Ledger, le DEX intégré, les tokens émis et les paiements ultra-rapides.',
    category: 'Blockchain',
    icon: 'Zap',
    lessonsCount: 12,
    duration: '6h 30m',
    level: 'Débutant',
    completed: false,
    lessons: [
      {
        id: 'xrpl-1',
        title: 'Introduction au XRP Ledger',
        duration: '20 min',
        type: 'reading',
        completed: false,
        content: 'Découverte du consensus Federated Consensus du XRPL et de son histoire.'
      },
      {
        id: 'xrpl-2',
        title: 'Connexion et requêtes avec xrpl.js',
        duration: '30 min',
        type: 'interactive',
        completed: false,
        codeSnippet: `import { Client } from 'xrpl';\nconst client = new Client('wss://s.altnet.rippletest.net:51233');\nawait client.connect();`
      },
      {
        id: 'xrpl-3',
        title: 'Création et approvisionnement d’un Wallet Testnet',
        duration: '15 min',
        type: 'interactive',
        completed: false,
        codeSnippet: `const wallet = (await client.fundWallet()).wallet;\nconsole.log('Adresse :', wallet.classicAddress);`
      },
      {
        id: 'xrpl-4',
        title: 'Envoyer des XRP et décoder les transactions',
        duration: '25 min',
        type: 'reading',
        completed: false,
        content: 'Analyse de la structure d’une transaction de paiement sur le XRPL.'
      },
      {
        id: 'xrpl-5',
        title: 'Émission de tokens personnalisés (Issued Currencies)',
        duration: '35 min',
        type: 'interactive',
        completed: false,
        codeSnippet: `// Configuration de la ligne de confiance (Trustline)\nconst trustSetTx = { TransactionType: 'TrustSet', LimitAmount: { currency: 'USD', issuer: 'rIssuer...', value: '1000000' } };`
      },
      {
        id: 'xrpl-6',
        title: 'Utilisation du DEX natif du XRPL',
        duration: '30 min',
        type: 'reading',
        completed: false,
        content: 'Fonctionnement du carnet d’ordres décentralisé intégré au protocole.'
      },
      {
        id: 'xrpl-7',
        title: 'Les Escrows (Paiements conditionnels)',
        duration: '40 min',
        type: 'video',
        completed: false,
        videoUrl: 'https://example.com/videos/xrpl-escrows.mp4',
        content: 'Mise en place de séquestres temporels ou conditionnels.'
      },
      {
        id: 'xrpl-8',
        title: 'Hooks et logique programmable sur XRPL',
        duration: '45 min',
        type: 'reading',
        completed: false,
        content: 'Introduction aux Hooks (smart contracts légers sur XRPL).'
      },
      {
        id: 'xrpl-9',
        title: 'Construire une application d’envoi de pourboires',
        duration: '50 min',
        type: 'interactive',
        completed: false,
        codeSnippet: `// Fonction de pourboire\nasync function sendTip(wallet, receiver, amount) { /* ... */ }`
      },
      {
        id: 'xrpl-10',
        title: 'Sécurité et gestion des clés secrètes',
        duration: '20 min',
        type: 'reading',
        completed: false,
        content: 'Bonnes pratiques pour stocker et manipuler les clés privées en toute sécurité.'
      },
      {
        id: 'xrpl-11',
        title: 'Quiz final XRPL',
        duration: '15 min',
        type: 'quiz',
        completed: false,
        quiz: [{ question: 'Quel algorithme de consensus utilise le XRPL ?', options: ['Proof of Work', 'Proof of Stake', 'Federated Consensus', 'Proof of Authority'], correctAnswer: 2 }]
      },
      {
        id: 'xrpl-12',
        title: 'Projet Capstone XRPL',
        duration: '60 min',
        type: 'interactive',
        completed: false,
        content: 'Développement d’un mini-wallet web complet interagissant avec le testnet.'
      }
    ]
  },
  {
    id: 'stellar',
    title: 'Stellar & Soroban',
    description: 'Explorez le réseau Stellar pour les paiements rapides et Soroban, la plateforme de contrats intelligents.',
    category: 'Blockchain',
    icon: 'Star',
    lessonsCount: 12,
    duration: '7h 00m',
    level: 'Intermédiaire',
    completed: false,
    lessons: generateRichLessons('stellar', 'Stellar & Soroban')
  },
  {
    id: 'solana',
    title: 'Solana',
    description: 'Développez des programmes ultra-rapides en Rust et interagissez avec le réseau haut débit Solana.',
    category: 'Blockchain',
    icon: 'Sun',
    lessonsCount: 12,
    duration: '8h 00m',
    level: 'Avancé',
    completed: false,
    lessons: generateRichLessons('solana', 'Solana')
  },
  {
    id: 'algorand',
    title: 'Algorand',
    description: 'Découvrez Pure Proof-of-Stake, la création d’actifs ASA et les smart contracts PyTeal / AVM.',
    category: 'Blockchain',
    icon: 'Cpu',
    lessonsCount: 12,
    duration: '6h 00m',
    level: 'Débutant',
    completed: false,
    lessons: generateRichLessons('algorand', 'Algorand')
  },
  {
    id: 'flare',
    title: 'Flare Network',
    description: 'Apprenez à utiliser les oracles natifs FTSV et State Connector pour connecter les données inter-chaînes.',
    category: 'Blockchain',
    icon: 'Flame',
    lessonsCount: 12,
    duration: '6h 30m',
    level: 'Intermédiaire',
    completed: false,
    lessons: generateRichLessons('flare', 'Flare Network')
  },
  {
    id: 'polkadot',
    title: 'Polkadot',
    description: 'Comprenez l’architecture multi-chaînes, les parachains et le développement Substrate.',
    category: 'Blockchain',
    icon: 'CircleDot',
    lessonsCount: 12,
    duration: '7h 30m',
    level: 'Avancé',
    completed: false,
    lessons: generateRichLessons('polkadot', 'Polkadot')
  },
  {
    id: 'sui',
    title: 'Sui Network',
    description: 'Plongez dans le modèle orienté objet de Sui et le langage de programmation Move.',
    category: 'Blockchain',
    icon: 'Droplet',
    lessonsCount: 12,
    duration: '7h 00m',
    level: 'Intermédiaire',
    completed: false,
    lessons: generateRichLessons('sui', 'Sui Network')
  },
  {
    id: 'aptos',
    title: 'Aptos',
    description: 'Concevez des applications sécurisées et scalables grâce au langage Move sur Aptos.',
    category: 'Blockchain',
    icon: 'Layers',
    lessonsCount: 12,
    duration: '7h 00m',
    level: 'Intermédiaire',
    completed: false,
    lessons: generateRichLessons('aptos', 'Aptos')
  },
  {
    id: 'stacks',
    title: 'Stacks (Bitcoin L2)',
    description: 'Apprenez à écrire des smart contracts Clarity pour amener la DeFi et les NFTs sur Bitcoin.',
    category: 'Blockchain',
    icon: 'Box',
    lessonsCount: 12,
    duration: '6h 30m',
    level: 'Intermédiaire',
    completed: false,
    lessons: generateRichLessons('stacks', 'Stacks')
  },
  {
    id: 'scroll',
    title: 'Scroll (zkEVM Layer 2)',
    description: 'Maîtrisez le scaling d’Ethereum grâce aux rollups basés sur les preuves Zero-Knowledge.',
    category: 'Blockchain',
    icon: 'ScrollText',
    lessonsCount: 12,
    duration: '6h 00m',
    level: 'Avancé',
    completed: false,
    lessons: generateRichLessons('scroll', 'Scroll')
  },
  {
    id: 'immutablex',
    title: 'Immutable X',
    description: 'Développez des jeux Web3 et des marketplaces NFT scalables avec zéro frais de gas grâce au Layer 2 StarkEx.',
    category: 'Blockchain',
    icon: 'Gamepad2',
    lessonsCount: 12,
    duration: '6h 00m',
    level: 'Débutant',
    completed: false,
    lessons: generateRichLessons('immutablex', 'Immutable X')
  },
  {
    id: 'flutter',
    title: 'Flutter Multiplatform Apps',
    description: 'Créez des interfaces mobiles, web et desktop performantes et connectez-les aux différentes blockchains.',
    category: 'Mobile & Frontend',
    icon: 'Smartphone',
    lessonsCount: 12,
    duration: '10h 00m',
    level: 'Intermédiaire',
    completed: false,
    lessons: [
      {
        id: 'flutter-1',
        title: 'Introduction à Flutter et Dart',
        duration: '30 min',
        type: 'reading',
        completed: false,
        content: 'Bases du langage Dart et architecture des widgets Flutter.'
      },
      {
        id: 'flutter-2',
        title: 'Gestion des états (Provider & Riverpod)',
        duration: '45 min',
        type: 'interactive',
        completed: false,
        codeSnippet: `final counterProvider = StateProvider<int>((ref) => 0);`
      },
      {
        id: 'flutter-3',
        title: 'Navigation et Design System responsive',
        duration: '40 min',
        type: 'reading',
        completed: false,
        content: 'Mise en place de routes propres et d’interfaces adaptatives.'
      },
      {
        id: 'flutter-4',
        title: 'Consommation d’APIs REST et WebSockets',
        duration: '45 min',
        type: 'interactive',
        completed: false,
        codeSnippet: `Future<void> fetchData() async {\n  final response = await http.get(Uri.parse('https://api.example.com'));\n}`
      },
      {
        id: 'flutter-5',
        title: 'Stockage local sécurisé (Flutter Secure Storage)',
        duration: '30 min',
        type: 'reading',
        completed: false,
        content: 'Stocker des clés privées et des jetons d’authentification en toute sécurité.'
      },
      {
        id: 'flutter-6',
        title: 'Intégration d’un Wallet Crypto dans Flutter',
        duration: '60 min',
        type: 'video',
        completed: false,
        videoUrl: 'https://example.com/videos/flutter-crypto-wallet.mp4',
        content: 'Comment signer des transactions directement depuis l’application mobile.'
      },
      {
        id: 'flutter-7',
        title: 'Gestion des formulaires et validation avancée',
        duration: '30 min',
        type: 'reading',
        completed: false,
        content: 'Création de formulaires robustes pour les transferts de fonds.'
      },
      {
        id: 'flutter-8',
        title: 'Tests unitaires et de widgets',
        duration: '40 min',
        type: 'interactive',
        completed: false,
        codeSnippet: `testWidgets('Counter increments smoke test', (WidgetTester tester) async {\n  // Test implementation\n});`
      },
      {
        id: 'flutter-9',
        title: 'Animations et transitions fluides',
        duration: '35 min',
        type: 'reading',
        completed: false,
        content: 'Améliorer l’expérience utilisateur avec des animations personnalisées.'
      },
      {
        id: 'flutter-10',
        title: 'Publication sur les stores (Google Play & App Store)',
        duration: '50 min',
        type: 'reading',
        completed: false,
        content: 'Préparation, signature et déploiement de l’application mobile.'
      },
      {
        id: 'flutter-11',
        title: 'Quiz final Flutter',
        duration: '15 min',
        type: 'quiz',
        completed: false,
        quiz: [{ question: 'Quel langage est utilisé pour développer avec Flutter ?', options: ['Java', 'Kotlin', 'Dart', 'Swift'], correctAnswer: 2 }]
      },
      {
        id: 'flutter-12',
        title: 'Projet Final : Application FasilB Mobile',
        duration: '90 min',
        type: 'interactive',
        completed: false,
        content: 'Développement d’une application multi-chaînes complète sous Flutter.'
      }
    ]
  }
];