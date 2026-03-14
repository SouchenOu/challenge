import { ShoppingCart, QrCode, CreditCard, Puzzle, Gift } from 'lucide-react'

export const steps = [
  {
    number: '1',
    title: 'Achat produit',
    desc: 'Le client achète votre produit en magasin',
    icon: <ShoppingCart size={28} strokeWidth={1.6} />,
    color: 'green',
  },
  {
    number: '2',
    title: 'Scan QR Code',
    desc: "Il scanne le code sur l'emballage",
    icon: <QrCode size={28} strokeWidth={1.6} />,
    color: 'green',
  },
  {
    number: '3',
    title: 'Déblocage carte',
    desc: 'Une carte digitale est débloquée',
    icon: <CreditCard size={28} strokeWidth={1.6} />,
    color: 'green',
  },
  {
    number: '4',
    title: 'Collection',
    desc: 'Il complète sa collection',
    icon: <Puzzle size={28} strokeWidth={1.6} />,
    color: 'red',
  },
  {
    number: '5',
    title: 'Récompenses',
    desc: 'Participe aux tirages',
    icon: <Gift size={28} strokeWidth={1.6} />,
    color: 'red',
  },
]
export default function CustomerJourney() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" rounded-3xl py-12 lg:py-16 px-6 lg:px-12">

        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Un parcours client simple et engageant
          </h2>
          <p className="text-gray-500 text-sm">
            De l'achat du produit à la récompense, en 5 étapes
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((step) => {
            const isGreen = step.color === 'green'
            return (
              <div key={step.number} className="flex flex-col items-center text-center relative px-6 pt-2">

                <span
                  className={`absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-white text-base font-bold ${
                    isGreen ? 'bg-[#16A34A]' : 'bg-[#dc2626]'
                  }`}
                >
                  {step.number}
                </span>

                <div className="mb-5 mt-4">
                  <div
                    className={`w-[72px] h-[72px] rounded-2xl flex items-center justify-center ${
                      isGreen
                        ? ' border-2 border-[#BBF7D0] text-[#0B6B3A]'
                        : ' border-2 border-[#FECACA] text-[#DC2626]'
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>

                <h4 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[130px]">{step.desc}</p>
              </div>
            )
          })}
        </div>

        </div>
      </div>
    </section>
  )
}
