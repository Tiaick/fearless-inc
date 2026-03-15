import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Start' },
  { href: '/artist', label: 'Der Artist' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/buchen', label: 'Buchen' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#060606', borderTop: '1px solid rgba(200,169,106,0.08)' }}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="text-[9px] tracking-[0.4em] uppercase block mb-1" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>Est. 2016</span>
              <span className="text-3xl font-light tracking-[0.12em] uppercase block" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}>Fearless Inc</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '260px' }}>
              Premium Tattoo Kunst von Petzko. Jedes Werk ist ein permanentes Zeichen, wer du bist.
            </p>
            <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" className="luxury-underline text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#c8a96a]" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)' }}>
              @fearless.tattoo
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="luxury-underline text-sm transition-colors duration-300 hover:text-[#c8a96a]" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Kontakt</p>
            <div className="flex flex-col gap-3 mb-8">
              <a href="tel:015222458669" className="text-sm transition-colors duration-300 hover:text-[#c8a96a]" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                01522 2458669
              </a>
              <p className="text-sm" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>Königsberger Str. 2, 25479 Ellerau</p>
              <p className="text-xs" style={{ color: '#4a4540', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>Mo–Fr 12:00–17:00 Uhr</p>
            </div>
            <Link href="/buchen" className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase border px-5 py-2.5 transition-all duration-500 hover:border-[#c8a96a] hover:text-[#c8a96a]" style={{ borderColor: 'rgba(200,169,106,0.3)', color: '#c0b8a8', fontFamily: 'var(--font-inter)' }}>
              Termin buchen
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(200,169,106,0.08)' }}>
          <p className="text-[10px] tracking-[0.15em]" style={{ color: '#4a4540', fontFamily: 'var(--font-inter)' }}>
            © {new Date().getFullYear()} Fearless Inc. Alle Rechte vorbehalten.
          </p>
          <p className="text-[10px] tracking-[0.15em]" style={{ color: '#4a4540', fontFamily: 'var(--font-inter)' }}>
            Tattoo Kunst von Petzko — Wien
          </p>
        </div>
      </div>
    </footer>
  );
}
