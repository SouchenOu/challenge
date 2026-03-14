import { stats } from "../utils/data"

export default function StatsBar() {
  return (
    <section className="bg-white border-t border-[#E5E7EB] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.value} className="text-center">
                <Icon className="w-7 h-7 text-[#22C55E] mx-auto mb-4" strokeWidth={2} />
                <div className="text-3xl lg:text-4xl font-extrabold text-[#1E293B] mb-2">
                  {s.value}
                </div>
                <div className="text-sm text-[#64748B]">{s.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
