'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Start' },
  { href: '/artist', label: 'Der Artist' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/buchen', label: 'Buchen' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'nav-blur border-b border-white/[0.04]' : ''}`}
        style={{ background: scrolled ? 'rgba(11,11,11,0.85)' : 'transparent' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group flex flex-col leading-none" data-hover>
              <span className="text-[11px] tracking-[0.35em] uppercase" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                Est. 2016
              </span>
              <span className="text-[1.4rem] font-light tracking-[0.15em] uppercase" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', lineHeight: 1 }}>
                Fearless Inc
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-hover
                    className="luxury-underline text-[11px] tracking-[0.25em] uppercase transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: pathname === link.href ? '#c8a96a' : '#c0b8a8' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link href="/buchen" data-hover className="hidden md:flex items-center gap-3 group">
              <span
                className="text-[10px] tracking-[0.3em] uppercase border px-5 py-2.5 transition-all duration-500 group-hover:border-[#c8a96a] group-hover:text-[#c8a96a]"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, borderColor: 'rgba(192,184,168,0.3)', color: '#c0b8a8' }}
              >
                Jetzt buchen
              </span>
            </Link>

            {/* Mobile toggle */}
            <button className="md:hidden flex items-center justify-center w-10 h-10" style={{ color: '#f2f2f2' }} onClick={() => setMenuOpen(!menuOpen)} data-hover>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center transition-all duration-700 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: '#0b0b0b' }}
      >
        <div className="grain" />
        <div className="px-10">
          <div className="absolute top-7 left-10">
            <span className="text-[1.4rem] font-light tracking-[0.15em] uppercase" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}>
              Fearless Inc
            </span>
          </div>

          <ul className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-hover
                  className="flex items-baseline gap-4 group"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.6s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 0.07}s`,
                  }}
                >
                  <span className="num-indicator">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-4xl font-light transition-colors duration-300 group-hover:text-[#c8a96a]" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.01em' }}>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(200,169,106,0.15)' }}>
            <Link href="/buchen" className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase border px-6 py-3" style={{ borderColor: 'rgba(200,169,106,0.4)', color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
              Termin buchen
            </Link>
          </div>

          <div className="absolute bottom-10 left-10">
            <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#c8a96a]" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}>
              @fearless.tattoo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
