import { Smartphone, Layers, Gift, BarChart2 } from 'lucide-react'


export const featuresSolution = [
  {
    title: 'Activation instantanée',
    desc: 'QR codes uniques sur chaque produit',
    icon: <Smartphone size={15} strokeWidth={1.6} />,
  },
  {
    title: 'Collection digitale',
    desc: 'Cartes de joueurs, raretés, échanges',
    icon: <Layers size={15} strokeWidth={1.6} />,
  },
  {
    title: 'Récompenses exclusives',
    desc: 'Tirages au sort, lots partenaires, expériences VIP',
    icon: <Gift size={15} strokeWidth={1.6} />,
  },
  {
    title: 'Analytics avancés',
    desc: 'Dashboard temps réel, insights consommateurs',
    icon: <BarChart2 size={15} strokeWidth={1.6} />,
  },
]
export default function SolutionSection() {
  return (
    <section className="border-t border-b border-gray-200 py-12 lg:py-20" style={{ background: 'linear-gradient(180deg, #F3F4F6 0%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        <div className="w-full lg:w-[45%]">
          <img
            src="/foot.png"
            alt="Football"
            className="w-100 h-[280px] sm:h-[380px] lg:h-[480px] rounded-3xl"
          />
        </div>

        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] border border-green-100 rounded-full px-3 py-1 mb-5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#0B6B3A" strokeWidth="1.3" />
              <path d="M4.5 7l1.8 1.8 3.2-3.2" stroke="#0B6B3A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#0B6B3A] text-xs font-semibold">Solution complète</span>
          </div>

          <h2 className="text-[36px] sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Le terrain de jeu digital de votre marque
          </h2>

          <p className="text-gray-500 text-[18px] leading-relaxed mb-8">
            YouCanWin transforme vos produits en expériences interactives.
            Chaque achat devient une opportunité d'engagement avec vos consommateurs.
          </p>

          <ul className="space-y-5 mb-8">
            {featuresSolution.map((f) => (
              <li key={f.title} className="flex items-start gap-4">
                <div className="rounded-full bg-[#F0FDF4] w-9 h-9 flex items-center justify-center flex-shrink-0 text-[#0B6B3A]">
                  {f.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{f.title}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{f.desc}</div>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Planifier une démo
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="white" strokeWidth="1.3" />
              <path d="M2 6h12" stroke="white" strokeWidth="1.3" />
              <path d="M5 1.5v3M11 1.5v3" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
