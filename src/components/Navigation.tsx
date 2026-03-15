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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-blur' : ''}`}
        style={{
          background: scrolled ? 'rgba(17,20,24,0.92)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : 'none',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" data-hover>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', letterSpacing: '0.1em', color: '#f0ece4', lineHeight: 1 }}>
                FEARLESS<span style={{ color: 'var(--bronze)' }}>.</span>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.5rem', letterSpacing: '0.4em', color: 'var(--muted)', marginTop: '2px' }}>
                TATTOO BY PETZKO
              </div>
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-hover
                    className="link-hover"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: pathname === link.href ? 'var(--bronze)' : 'var(--cream-dim)',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link href="/buchen" data-hover className="hidden md:inline-flex btn-bronze">
              Jetzt buchen
            </Link>

            {/* Mobile */}
            <button
              className="md:hidden"
              style={{ color: 'var(--cream)', background: 'none', border: 'none' }}
              onClick={() => setMenuOpen(!menuOpen)}
              data-hover
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center"
        style={{
          background: 'var(--charcoal)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.5s ease',
        }}
      >
        <div className="grain" />
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.1em', color: '#f0ece4' }}>
            FEARLESS<span style={{ color: 'var(--bronze)' }}>.</span>
          </div>
          <button onClick={() => setMenuOpen(false)} style={{ color: 'var(--cream)', background: 'none', border: 'none' }} data-hover>
            <X size={24} />
          </button>
        </div>

        <div className="px-10">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'none' : 'translateX(-20px)', transition: `all 0.5s ease ${i * 0.06}s` }}>
                <Link href={link.href} data-hover style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', letterSpacing: '0.06em', color: 'var(--cream)', display: 'block', lineHeight: 1.15, transition: 'color 0.3s ease' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
            <Link href="/buchen" className="btn-bronze">Termin buchen</Link>
          </div>

          <div className="absolute bottom-10 left-10 right-10 flex items-center gap-6">
            <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" className="link-hover" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--muted)', textTransform: 'uppercase' }}>
              @fearless.tattoo
            </a>
            <span style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.15)' }} />
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--muted)', textTransform: 'uppercase' }}>Ellerau</span>
          </div>
        </div>
      </div>
    </>
  );
}
