import { Settings, ChevronRight } from "lucide-react"
import { features } from "../utils/data"

export default function BackofficeSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] border border-[#DCFCE7] rounded-full px-4 py-1 shadow-sm">
            <Settings className="w-4 h-4 text-[#16a34a]" />
            <span className="text-[#16a34a] text-sm font-medium">Backoffice tout-en-un</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Gérez tout depuis une interface unique
          </h2>
          <p className="text-[#475569] text-base max-w-2xl mx-auto leading-relaxed">
            Notre backoffice intuitif vous permet de créer, configurer et piloter vos
            campagnes en toute autonomie
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#F0FDF4] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#16A34A]" />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">{f.title}</h4>
                <p className="text-sm text-[#475569] leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Demander un accès au backoffice
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
