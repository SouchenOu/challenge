import { ChevronRight } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-[#0B6B3A] rounded-lg flex items-center justify-center">
              <img src="/vector.png" alt="trophy" className="w-4 h-4 object-contain" />
              </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold tracking-tight leading-none">
              <span className="text-[#dc2626]">You</span>
              <span className="text-gray-900">can</span>
              <span className="text-[#0B6B3A]">win</span>
            </span>
            <span className="text-[11px] text-[#0B6B3A] font-bold tracking-widest uppercase bg-[#DCFCE7] px-3 py-1 rounded-full">
              GAMES
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:gap-6">
          <ul className="hidden md:flex items-center gap-5 lg:gap-10">
            {['Nos offres', 'Nos jeux', 'Album 2025', 'À propos'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm text-[#334155] hover:text-gray-900 font-medium transition-colors whitespace-nowrap"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="hidden md:flex bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] hover:opacity-90 text-white text-sm font-semibold px-4 py-2.5 lg:px-6 lg:py-3 rounded-xl transition-opacity items-center gap-2 whitespace-nowrap"
          >
            Demander une démo
            <ChevronRight size={16} strokeWidth={2.5} />
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-600"
            aria-label="Ouvrir le menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  )
}
