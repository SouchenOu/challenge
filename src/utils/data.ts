import { QrCode, Users, SlidersHorizontal, BarChart3, Gift, Bell, Download, Layers, Star, Settings } from "lucide-react"
import { TrendingUp, Globe, Zap } from 'lucide-react'

export const features = [
  {
    icon: QrCode,
    title: 'Générateur QR Codes',
    desc: 'Créez et téléchargez vos QR codes uniques en masse',
  },
  {
    icon: Users,
    title: 'CRM Participants',
    desc: 'Collectez et gérez vos participants avec segmentation avancée',
  },
  {
    icon: SlidersHorizontal,
    title: 'Configuration jeux',
    desc: 'Paramétrez entièrement vos jeux : règles, lots, durée, visuels',
  },
  {
    icon: BarChart3,
    title: 'Analytics temps réel',
    desc: 'Suivez vos KPIs : scans, conversions, engagement, ROI',
  },
  {
    icon: Gift,
    title: 'Gestion des lots',
    desc: 'Définissez vos récompenses et gérez les tirages au sort',
  },
  {
    icon: Bell,
    title: 'Notifications',
    desc: 'Envoyez des push, emails et SMS à vos participants',
  },
  {
    icon: Download,
    title: 'Export données',
    desc: 'Téléchargez vos données en CSV, Excel ou via API',
  },
  {
    icon: Layers,
    title: 'Multi-campagnes',
    desc: 'Gérez plusieurs campagnes simultanément',
  },
]

//footer
export const quickLinks = ['Nos offres', 'Nos jeux', 'Album 2025', 'À propos']

export const legalLinks = [
  { label: 'games@agency.africa', href: 'mailto:games@agency.africa', external: false },
  { label: 'Mentions légales', href: '#', external: false },
  { label: 'Protection des données (CNDP)', href: '#', external: true },
  { label: "Conditions d'utilisation", href: '#', external: false },
]


//Games


export const games = [
  {
    title: 'Album Digital 2025',
    desc: 'Collection de cartes avec échanges et défis',
    image: '/game1.jpg',
    badge: 'NEW',
    showLink: true,
  },
  {
    title: 'Quiz Football',
    desc: "Questions sur l'actualité et l'histoire du foot",
    image: '/game2.png',
    badge: null,
    showLink: false,
  },
  {
    title: 'Tombola digitale',
    desc: 'Tirage au sort avec lots sponsorisés',
    image: '/game3.png',
    badge: null,
    showLink: false,
  },
  {
    title: 'Pronostics',
    desc: 'Prédictions de matchs et classements',
    image: '/game4.png',
    badge: null,
    showLink: false,
  },
]

export const brands = ['Maroc Telecom', 'Inwi', 'Orange', 'Carrefour']

//Pricing Section

export const plans = [
  {
    name: 'Starter',
    subtitle: 'Campagne locale',
    desc: 'Idéal pour tester sur un marché',
    popular: false,
    icon: Zap,
    features: [
      "Jusqu'à 1 000 utilisateurs",
      "Jusqu'à 100 QR codes",
      '1 jeux / région',
      'Album régional (équipe nationale)',
      'Backoffice simplifié',
      'Support par email',
      '1 marque',
    ],
    cta: 'Demander un devis',
    ctaStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  },
  {
    name: 'Scale',
    subtitle: 'Expansion nationale',
    desc: "Pour des campagnes d'envergure",
    popular: true,
    icon: TrendingUp,
    features: [
      "Jusqu'à 50 000 utilisateurs",
      'QR codes illimités',
      'Multi-sport (jusqu\'à 5)',
      'Album complet (toutes les équipes)',
      'Backoffice avancé avec analytics',
      'Support prioritaire 24/7',
      "Jusqu'à 3 marques",
      'API REST disponible',
    ],
    cta: 'Planifier une démo',
    ctaStyle: 'bg-[#dc2626] hover:bg-[#b91c1c] text-white',
  },
  {
    name: 'Enterprise',
    subtitle: 'Solution globale',
    desc: 'Pour les groupes internationaux',
    popular: false,
    icon: Globe,
    features: [
      'Utilisateurs illimités',
      'QR codes illimités',
      'Déploiement mondial',
      'Albums personnalisés par région',
      'Infrastructure dédiée (On-Premise)',
      'Multi-marques illimité',
      'Account manager dédié',
      'SLA garanti 99.9%',
      'Formation et onboarding complet',
    ],
    cta: 'Contactez-nous',
    ctaStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  },
]

//Stat section
export const stats = [
  { value: '500K+', label: 'Interactions mensuelles', icon: TrendingUp },
  { value: '50+', label: 'Marques partenaires', icon: Users },
  { value: '98%', label: 'Taux de satisfaction', icon: Star },
  { value: '24/7', label: 'Support technique', icon: Settings },
]


