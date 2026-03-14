import { Check } from 'lucide-react'
import { plans } from '../utils/data'

export default function PricingSection() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Des formules adaptées à votre échelle
          </h2>
          <p className="text-gray-500 text-sm">
            Choisissez la solution qui correspond à vos besoins et votre ambition
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-7 border flex flex-col  ${
                  plan.popular
                    ? 'border-[#FECACA]'
                    : 'border-[#E2E8F0]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#dc2626] text-white text-[11px] font-bold px-4 py-1 rounded-full tracking-wide">
                      POPULAIRE
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${plan.popular ? '' : 'bg-[#F0FDF4]'}`}>
                    <Icon size={20} strokeWidth={1.6} className={plan.popular ? 'text-[#DC2626]' : 'text-[#0B6B3A]'} />
                  </div>
                  <div  className='flex flex-col gap-5'>
                  <div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-0.5">{plan.name}</h3>
                  <div className="text-xs font-semibold text-[#16A34A] mb-1">{plan.subtitle}</div>

                  </div>

                  <p className="text-[16px] text-[#475569]]">{plan.desc}</p>

                  </div>

                </div>

                <div className="border-t border-gray-100 mb-3" />

                <p className="text-[14px] text-[#64748B]   mb-3">
                  Tarification au mesure selon vos volumes
                </p>
                <div className="border-t border-gray-100 mb-5" />

                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={14} strokeWidth={2.5} className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-[#DC2626]' : 'text-[#16A34A]'}`} />
                      <span className="text-xs text-[#475569] leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`w-full block text-center font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
