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
    <footer style={{ background: '#070708', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 40px 32px' }}>

        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', paddingBottom: '48px', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>

          {/* Brand */}
          <div>
            <div className="f-display" style={{ fontSize: '2rem', color: 'var(--white)', letterSpacing: '0.06em', marginBottom: '4px' }}>
              FEARLESS<span style={{ color: 'var(--gold)' }}>.</span>
            </div>
            <div className="f-label" style={{ color: 'var(--muted)', fontSize: '0.5rem', marginBottom: '16px' }}>Tattoo by Petzko</div>
            <p className="f-body" style={{ fontSize: '0.82rem', lineHeight: 1.75, color: 'var(--muted)', maxWidth: '210px' }}>
              Premium Tattoo Kunst in Ellerau. Individuell. Präzise. Permanent.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="f-label" style={{ marginBottom: '16px' }}>Navigation</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="u-link f-body" style={{ fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'none' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <div className="f-label" style={{ marginBottom: '16px' }}>Kontakt</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="tel:015222458669" className="u-link f-body" style={{ fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'none' }}>01522 2458669</a>
              <a href="mailto:info@fearles.ink" className="u-link f-body" style={{ fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'none' }}>info@fearles.ink</a>
              <p className="f-body" style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5 }}>Königsberger Str. 2<br />25479 Ellerau</p>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <div className="f-label" style={{ marginBottom: '16px' }}>Öffnungszeiten</div>
            {[
              ['Mo – Fr', '12:00 – 17:00'],
              ['Sa', 'Geschlossen'],
              ['So', 'Geschlossen'],
            ].map(([d, t]) => (
              <div key={d} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginBottom: '8px' }}>
                <span className="f-body" style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{d}</span>
                <span className="f-body" style={{ fontSize: '0.82rem', color: t === 'Geschlossen' ? 'var(--muted)' : 'var(--dim)', opacity: t === 'Geschlossen' ? 0.5 : 1 }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: '20px' }}>
              <Link href="/buchen" className="btn-gold" style={{ textDecoration: 'none', fontSize: '0.65rem', padding: '10px 18px' }}>Buchen</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <p className="f-body" style={{ fontSize: '0.75rem', color: 'var(--muted)', opacity: 0.5 }}>
            © {new Date().getFullYear()} Fearless Ink. Alle Rechte vorbehalten.
          </p>
          <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" className="u-link f-label" style={{ color: 'var(--muted)', textDecoration: 'none', opacity: 0.5 }}>
            @fearless.tattoo
          </a>
        </div>

      </div>
    </footer>
  );
}
