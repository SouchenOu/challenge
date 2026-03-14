import { Calendar, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-12 lg:py-20" style={{ background: 'linear-gradient(to right, #DC2626, #B01219)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
          Prêt à transformer votre marketing ?
        </h2>
        <p className="text-white/80 text-sm mb-10">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="bg-white text-[#DC2626] hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-sm transition-colors flex items-center gap-2"
          >
            <Calendar size={16} strokeWidth={1.5} />
            Planifier une démo gratuite
          </a>
          <a
            href="#"
            className="border border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg text-sm transition-colors flex items-center gap-2"
          >
            <Mail size={16} strokeWidth={1.5} />
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  )
}
