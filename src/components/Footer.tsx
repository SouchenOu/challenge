import { Facebook, Instagram, Linkedin, ExternalLink, BadgeCheck } from 'lucide-react'
import { legalLinks, quickLinks } from '../utils/data'

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-dashed border-[#CBD5E1] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#0B6B3A] rounded-lg flex items-center justify-center">
              <img src="/vector.png" alt="trophy" className="w-4 h-4 object-contain" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-[#B01219]">You</span>
                <span className="">can</span>
                <span className="text-[#166534]">win</span>
              </span>
            </div>
            <p className="text-sm text-[#64748B] leading-relaxed max-w-sm mb-6">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d&apos;Agency.Africa.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#475569]" />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-[#475569]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#475569]" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#475569]" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-base font-bold text-[#1E293B] mb-5">Liens rapides</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#64748B] hover:text-[#1E293B] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-base font-bold text-[#1E293B] mb-5">Contact & Légal</h5>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#64748B] hover:text-[#1E293B] transition-colors inline-flex items-center gap-1.5"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3.5 h-3.5" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E2E8F0] pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <span className="text-sm text-[#94A3B8]">
              © 2025 Youcanwin. Tous droits réservés.
            </span>

            <div className="flex items-center gap-2 bg-[#F0FDF4] px-4 py-2 border border-[#BBF7D0] rounded-full">
              <BadgeCheck className="w-5 h-5 text-[#22C55E]" />
              <span className="text-sm text-[#0B6B3A] font-medium">Site conforme CNDP Maroc</span>
            </div>

            <span className="text-sm text-[#64748B]">
              Un service de{' '}
              <a href="#" className="text-[#0B6B3A] font-semibold hover:underline">
                Agency.Africa
              </a>
              {' '}— games.agency.africa
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
