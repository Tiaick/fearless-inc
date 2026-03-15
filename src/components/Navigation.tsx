'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Start' },
  { href: '/artist', label: 'Der Artist' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/buchen', label: 'Buchen' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass' : ''}`}
        style={{
          background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* LOGO */}
          <Link href="/" data-hover style={{ textDecoration: 'none' }}>
            <div className="f-display" style={{ fontSize: '1.75rem', color: 'var(--white)', letterSpacing: '0.06em' }}>
              FEARLESS<span style={{ color: 'var(--gold)' }}>.</span>
            </div>
            <div className="f-label" style={{ color: 'var(--muted)', marginTop: '1px', letterSpacing: '0.3em', fontSize: '0.5rem' }}>
              TATTOO BY PETZKO
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  data-hover
                  className="u-link"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.68rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: pathname === l.href ? 'var(--gold)' : 'var(--dim)',
                    textDecoration: 'none',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link href="/buchen" data-hover className="btn-gold hidden md:inline-flex" style={{ textDecoration: 'none' }}>
            Jetzt buchen
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            data-hover
            style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'none', padding: '4px' }}
            className="md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'var(--bg)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 40px',
        }}
      >
        {/* top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px' }}>
          <div className="f-display" style={{ fontSize: '1.5rem', color: 'var(--white)' }}>
            FEARLESS<span style={{ color: 'var(--gold)' }}>.</span>
          </div>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'none' }} data-hover>
            <X size={22} />
          </button>
        </div>

        <nav>
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              data-hover
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 10vw, 5rem)',
                letterSpacing: '0.04em',
                color: pathname === l.href ? 'var(--gold)' : 'var(--white)',
                textDecoration: 'none',
                lineHeight: 1.15,
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(-24px)',
                transition: `opacity 0.45s ease ${i * 0.06}s, transform 0.45s ease ${i * 0.06}s, color 0.2s ease`,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/buchen" className="btn-gold" style={{ textDecoration: 'none' }}>Termin buchen</Link>
          <a
            href="https://www.instagram.com/fearless.tattoo/"
            target="_blank" rel="noopener noreferrer"
            className="f-label u-link"
            style={{ color: 'var(--muted)', textDecoration: 'none' }}
          >
            @fearless.tattoo
          </a>
        </div>
      </div>
    </>
  );
}
