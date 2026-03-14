import { benefits } from '../utils/benefits'

export default function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-[#16A34A] to-[#0B6B3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Transformez vos ventes en expérience mémorable
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            YouCanWin offre à vos clients plus qu&apos;un produit : une expérience interactive
            complète autour du football
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{b.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
