import { ChevronRight } from 'lucide-react'
import { games } from '../utils/data'

export default function GameCatalog() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Catalogue de jeux
          </h2>
          <p className="text-gray-500 text-sm">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {games.map((game) => (
            <div key={game.title} className="group cursor-pointer border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {game.badge && (
                  <div className="absolute top-3 left-3 bg-[#0B6B3A] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {game.badge}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1">{game.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{game.desc}</p>
                {game.showLink && (
                  <a href="#" className="inline-flex items-center gap-1 text-xs text-[#16A34A] font-semibold group-hover:underline">
                    Découvrir
                    <ChevronRight size={13} strokeWidth={2.5} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
