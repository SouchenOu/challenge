import { ChevronRight, Sun } from "lucide-react"
import { brands } from "../utils/data"

export default function Hero() {
  return (
    <section className="bg-white py-6 lg:py-15 overflow-hidden">
      <div className="sm:max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 sm:py-6 py-15 flex flex-col lg:flex-row items-center gap-2 lg:gap-4">

        <div className="w-full lg:flex-shrink-0 lg:w-[480px] flex flex-col items-center lg:items-start text-center lg:text-left">

          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] font-black text-[#0F172A] tracking-tight mb-3">
            Transformez<br />
            chaque{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(to right, #16A34A, #0B6B3A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              produit
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 120 10"
                fill="none"
                preserveAspectRatio="none"
                height="10"
              >
                <defs>
                  <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#16A34A" />
                    <stop offset="100%" stopColor="#0B6B3A" />
                  </linearGradient>
                </defs>
                <path d="M2 7 C20 2, 50 2, 60 5 C70 8, 100 8, 118 4"
                  stroke="url(#underlineGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
            <br />
            en expérience de<br />
            jeu
          </h1>

          <p className="font-poppins font-normal text-sm sm:text-base leading-relaxed text-[#475569] mb-7 max-w-[430px]">
            YouCanWin connecte vos marques aux fans de football à travers des mécaniques de
            gamification innovantes.{' '}
            <strong className="font-bold text-[#1e293b]">Codes QR, cartes digitales, défis et récompenses.</strong>
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-10 mb-5">
            <div>
              <div className="text-xl sm:text-2xl font-black text-[#0B6B3A]">500K+</div>
              <div className="text-xs text-gray-500 mt-0.5">Interactions/mois</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-[#dc2626]">50+</div>
              <div className="text-xs text-gray-500 mt-0.5">Marques actives</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-[#0B6B3A]">x3.5</div>
              <div className="text-xs text-gray-500 mt-0.5">ROI moyen</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-5">
            <a href="#" className="bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] hover:opacity-90 text-white font-bold px-6 py-3 rounded-xl text-sm transition-opacity flex items-center gap-2">
              Voir la démo
              <ChevronRight size={16} strokeWidth={2.5} />
            </a>
            <a href="#" className="border border-gray-300 bg-white text-[#334155] font-medium px-5 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Sun size={16} strokeWidth={1.8} className="text-gray-400" />
              Comment ça marche
            </a>
          </div>

          <div className="border-[0.5px] border-[#E2E8F0] mb-4"/>
          <div>
            <p className="text-[10px] text-[#94a3b8] font-semibold uppercase tracking-widest mb-2">
              ILS NOUS FONT CONFIANCE
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
              {brands.map((b) => (
                <span key={b} className="text-sm text-[#94a3b8] font-medium">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full lg:flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0  ">
          <div className="relative">
            <div className="absolute -top-4 -right-6 sm:-right-32 lg:-right-20 z-20 bg-white border border-gray-100 shadow-lg rounded-2xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
              <div className="w-9 sm:w-11 h-9 sm:h-11 bg-[#DCFCE7] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="1" width="6" height="6" rx="1" stroke="#0B6B3A" strokeWidth="1.4"/>
                  <rect x="11" y="1" width="6" height="6" rx="1" stroke="#0B6B3A" strokeWidth="1.4"/>
                  <rect x="1" y="11" width="6" height="6" rx="1" stroke="#0B6B3A" strokeWidth="1.4"/>
                  <rect x="11" y="11" width="2.5" height="2.5" fill="#0B6B3A"/>
                  <rect x="14.5" y="11" width="2.5" height="2.5" fill="#0B6B3A"/>
                  <rect x="11" y="14.5" width="2.5" height="2.5" fill="#0B6B3A"/>
                  <rect x="14.5" y="14.5" width="2.5" height="2.5" fill="#0B6B3A"/>
                </svg>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">Scan QR Code</div>
                <div className="text-[10px] sm:text-xs text-[#16a34a]">Débloquer une carte</div>
              </div>
            </div>

            <div className="w-[260px] sm:w-[380px] lg:w-[380px] h-[460px] sm:h-[520px] lg:h-[600px] border-[6px] sm:border-[8px] border-[#1e293b] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-white">

              <div className="bg-gradient-to-br from-[#3d9d62] via-[#2d8a52] to-[#1a6e3e] px-4 sm:px-6 pt-6 sm:pt-8 pb-5 sm:pb-6">
                <p className="text-white/70 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] mb-1">
                  Album Digital 2025
                </p>
                <h3 className="text-white font-extrabold text-xl sm:text-2xl mb-4 sm:mb-5">Ma Collection</h3>
                <div className="flex gap-4 sm:gap-6">
                  {[
                    { v: '127', l: 'Cartes' },
                    { v: '76%', l: 'Complet' },
                    { v: '#12', l: 'Rang' },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-white font-extrabold text-lg sm:text-xl">{s.v}</div>
                      <div className="text-white/60 text-[10px] sm:text-[11px] mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white px-4 sm:px-5 py-5 sm:py-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="aspect-[3/4] bg-[#e8edf2] rounded-xl sm:rounded-2xl" />
                  ))}
                </div>
              </div>

            </div>

            <div className="absolute -bottom-18 sm:-bottom-10 -left-10 sm:-left-40 lg:-left-40 z-20 bg-white border border-gray-100 rounded-2xl shadow-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#FEE2E2] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 12 20 22 4 22 4 12"/>
                  <rect x="2" y="7" width="20" height="5" rx="1"/>
                  <line x1="12" y1="22" x2="12" y2="7"/>
                  <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/>
                  <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-gray-900">Récompense</div>
                <div className="text-[9px] sm:text-xs text-gray-500">Tirage hebdomadaire</div>
              </div>
            </div>

            <div className="absolute -bottom-6 sm:-bottom-8 left-1/3 -translate-x-1/3 w-[250px] sm:w-[400px] lg:w-[400px] z-10 bg-white border border-gray-200 rounded-2xl shadow-lg px-4 sm:px-6 py-2 sm:py-3 flex items-end justify-around">
              {['Scanner', 'Échanges', 'Profil'].map((t) => (
                <div key={t} className="flex flex-col items-center gap-0.5 sm:gap-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#e2e8f0] rounded-md" />
                  <span className="text-[8px] sm:text-[10px] text-gray-500 font-medium">{t}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
