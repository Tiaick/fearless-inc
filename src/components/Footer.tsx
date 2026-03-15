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
    <footer style={{ background: '#0d1014', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
          {/* Brand */}
          <div className="md:col-span-1">
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '0.08em', color: '#f0ece4', lineHeight: 1, marginBottom: '6px' }}>
              FEARLESS<span style={{ color: 'var(--bronze)' }}>.</span>
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.55rem', letterSpacing: '0.3em', color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase' }}>
              Tattoo by Petzko
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.8rem', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '220px' }}>
              Premium Tattoo Kunst in Ellerau. Individuell. Präzise. Permanent.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '16px' }}>Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="link-hover" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.85rem', color: 'var(--muted)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '16px' }}>Kontakt</p>
            <div className="flex flex-col gap-3">
              <a href="tel:015222458669" className="link-hover" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.85rem', color: 'var(--muted)' }}>01522 2458669</a>
              <a href="mailto:info@fearless-tattoo.at" className="link-hover" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.85rem', color: 'var(--muted)' }}>info@fearless-tattoo.at</a>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.85rem', color: 'var(--muted)' }}>Königsberger Str. 2<br />25479 Ellerau</p>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '16px' }}>Öffnungszeiten</p>
            <div className="flex flex-col gap-2">
              {[
                { tag: 'Mo – Fr', zeit: '12:00 – 17:00' },
                { tag: 'Samstag', zeit: 'Geschlossen' },
                { tag: 'Sonntag', zeit: 'Geschlossen' },
              ].map(({ tag, zeit }) => (
                <div key={tag} className="flex justify-between gap-4">
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--muted)' }}>{tag}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: zeit === 'Geschlossen' ? '#3a3a3a' : 'var(--cream-dim)' }}>{zeit}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/buchen" className="btn-bronze" style={{ fontSize: '0.65rem', padding: '10px 20px' }}>Buchen</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#3a3a3a' }}>
            © {new Date().getFullYear()} Fearless Inc. Alle Rechte vorbehalten.
          </p>
          <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" className="link-hover" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#3a3a3a', textTransform: 'uppercase' }}>
            Instagram: @fearless.tattoo
          </a>
        </div>
      </div>
    </footer>
  );
}
