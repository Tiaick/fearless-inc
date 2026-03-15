import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const styles = [
  { icon: '◆', title: 'Blackwork', desc: 'Präzise schwarze Kunst. Fette Flächen, scharfe Linien, dunkle Energie.' },
  { icon: '◇', title: 'Realism', desc: 'Fotorealistische Motive. Portraits, Tiere und Natur in atemberaubender Detailtreue.' },
  { icon: '◈', title: 'Fine Line', desc: 'Zarte, präzise Linienarbeit. Botanik, Porträts und geometrische Elemente.' },
  { icon: '◉', title: 'Geometric', desc: 'Mathematische Ästhetik. Mandalas, Sacred Geometry und ornamentale Muster.' },
  { icon: '◐', title: 'Custom', desc: 'Deine Idee, von Grund auf neu entworfen. Kein Template, pure Kunst.' },
  { icon: '◑', title: 'Cover-Up', desc: 'Alte Tattoos neu denken. Professionelle Überarbeitung mit kreativem Ansatz.' },
];

const featured = [
  { src: 'https://picsum.photos/seed/feat1/800/1000', alt: 'Blackwork Sleeve', cat: 'Blackwork', tall: true },
  { src: 'https://picsum.photos/seed/feat2/800/600', alt: 'Fine Line Botanik', cat: 'Fine Line', tall: false },
  { src: 'https://picsum.photos/seed/feat3/800/600', alt: 'Realism Portrait', cat: 'Realism', tall: false },
  { src: 'https://picsum.photos/seed/feat4/800/1000', alt: 'Geometric Mandala', cat: 'Geometric', tall: true },
  { src: 'https://picsum.photos/seed/feat5/800/600', alt: 'Custom Arbeit', cat: 'Custom', tall: false },
  { src: 'https://picsum.photos/seed/feat6/800/600', alt: 'Ornamental', cat: 'Blackwork', tall: false },
];

const igGrid = Array.from({ length: 6 }, (_, i) => `https://picsum.photos/seed/ig${i + 1}/500/500`);

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end" style={{ overflow: 'hidden' }}>
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/hero-bg-dark/1920/1080"
            alt="Fearless Inc Hero"
            fill priority
            className="object-cover object-center"
            style={{ filter: 'grayscale(0.5) brightness(0.3) contrast(1.2)' }}
          />
          {/* Gradient */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(17,20,24,0.97) 0%, rgba(17,20,24,0.7) 50%, rgba(17,20,24,0.4) 100%)' }} />
        </div>

        {/* Decorative vertical text */}
        <div className="absolute right-8 bottom-1/3 z-10 hidden xl:flex flex-col items-center gap-6">
          <span style={{ width: '1px', height: '80px', background: 'linear-gradient(to bottom, transparent, var(--bronze))', display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--muted)', writingMode: 'vertical-rl', textTransform: 'uppercase' }}>
            Scroll down
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 pb-20 pt-44 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="line-bronze" />
              <span className="section-label">Tattoo Studio · Ellerau</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-display)', lineHeight: 0.9, letterSpacing: '0.03em', color: '#f0ece4' }}>
              <span className="block" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}>FEARLESS</span>
              <span className="block" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', color: 'var(--bronze)', WebkitTextStroke: '1px var(--bronze)', WebkitTextFillColor: 'transparent' }}>INC.</span>
            </h1>

            <p className="mt-6 mb-10 max-w-lg" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '1rem', lineHeight: 1.8, color: 'var(--cream-dim)' }}>
              Tattoo Kunst auf höchstem Niveau. Jedes Motiv wird individuell für dich entworfen und mit absoluter Präzision in die Haut gestochen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/buchen" data-hover className="btn-bronze">
                Termin anfragen
                <span>→</span>
              </Link>
              <Link href="/galerie" data-hover className="btn-outline">
                Portfolio ansehen
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 pt-8 flex flex-wrap gap-10" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
              {[
                { n: '8+', label: 'Jahre Erfahrung' },
                { n: '2K+', label: 'Gestochene Tattoos' },
                { n: '100%', label: 'Custom Designs' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--bronze)', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--muted)', marginTop: '4px', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÜBER PETZKO ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--charcoal-2)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="img-hover" style={{ position: 'relative' }}>
                  <Image
                    src="https://picsum.photos/seed/petzko-main/800/1000"
                    alt="Petzko – Tattoo Artist"
                    width={800} height={1000}
                    className="w-full object-cover"
                  />
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-5 -right-5 p-6 z-10" style={{ background: 'var(--bronze)', minWidth: '120px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', color: 'var(--charcoal)', lineHeight: 1 }}>8+</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--charcoal)', textTransform: 'uppercase' }}>Jahre</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="flex items-center gap-4 mb-6">
                <span className="line-bronze" />
                <span className="section-label">Der Artist</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '0.04em', color: '#f0ece4', lineHeight: 0.95, marginBottom: '24px' }}>
                PETZKO
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '1rem', lineHeight: 1.85, color: 'var(--cream-dim)', marginBottom: '16px' }}>
                Petzko ist nicht einfach ein Tätowierer — er ist ein Künstler, der Haut als seine Leinwand sieht. Mit über acht Jahren Erfahrung und tausenden gestochenen Motiven hat er sein Handwerk auf ein Niveau perfektioniert, das für sich spricht.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--muted)', marginBottom: '32px' }}>
                Sein Studio Fearless Inc in Ellerau ist mehr als ein Ort — es ist ein kreativer Raum, in dem jede Vision Wirklichkeit wird. Von feinen Linienarbeiten bis zu mächtigen Blackwork-Pieces, von realistischen Portraits bis zu geometrischen Meisterwerken.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/artist" data-hover className="btn-bronze">Mehr über Petzko</Link>
                <Link href="/galerie" data-hover className="btn-outline">Portfolio</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── STYLES ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--charcoal)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="line-bronze" />
                <span className="section-label">Tattoo Stile</span>
                <span className="line-bronze" />
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em', color: '#f0ece4', lineHeight: 0.95 }}>
                SPEZIALISIERUNGEN
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {styles.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <div className="service-card">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--bronze)', lineHeight: 1, marginBottom: '16px', opacity: 0.6 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '0.08em', color: '#f0ece4', marginBottom: '12px' }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--muted)' }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--charcoal-2)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="line-bronze" />
                  <span className="section-label">Portfolio</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em', color: '#f0ece4', lineHeight: 0.95 }}>
                  AKTUELLE<br />ARBEITEN
                </h2>
              </div>
              <Link href="/galerie" data-hover className="btn-outline shrink-0">Alle Arbeiten →</Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {featured.map((item, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <Link href="/galerie" data-hover>
                  <div className="img-hover" style={{ position: 'relative' }}>
                    <div className="relative overflow-hidden" style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}>
                      <Image src={item.src} alt={item.alt} fill className="object-cover" />
                    </div>
                    <div
                      className="absolute bottom-0 left-0 right-0 p-3 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                      style={{ background: 'linear-gradient(to top, rgba(17,20,24,0.9), transparent)', position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px' }}
                    >
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--bronze)', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>{item.cat}</span>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: '#f0ece4' }}>{item.alt}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUCHUNG CTA ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '500px' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/cta-bg-dark/1920/800"
            alt="Studio"
            fill className="object-cover"
            style={{ filter: 'grayscale(0.6) brightness(0.25) contrast(1.1)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(17,20,24,0.98) 40%, rgba(17,20,24,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-36">
          <div className="max-w-xl">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="line-bronze" />
                <span className="section-label">Termin buchen</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '0.04em', color: '#f0ece4', lineHeight: 0.9, marginBottom: '20px' }}>
                BEREIT FÜR<br />DEIN TATTOO?
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--cream-dim)', marginBottom: '32px' }}>
                Jedes Tattoo beginnt mit einem Gespräch. Teile deine Idee und Petzko meldet sich persönlich zurück.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/buchen" data-hover className="btn-bronze">Jetzt anfragen →</Link>
                <a href="tel:015222458669" data-hover className="btn-outline">01522 2458669</a>
              </div>

              <div className="mt-10 flex flex-col gap-2">
                {[
                  'Mo–Fr 12:00–17:00 Uhr',
                  'Königsberger Str. 2, 25479 Ellerau',
                  '@fearless.tattoo auf Instagram',
                ].map(txt => (
                  <div key={txt} className="flex items-center gap-3">
                    <span style={{ width: '6px', height: '6px', background: 'var(--bronze)', borderRadius: '50%', display: 'block', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--muted)' }}>{txt}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── INSTAGRAM ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--charcoal)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="line-bronze" />
                  <span className="section-label">Instagram</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.05em', color: '#f0ece4', lineHeight: 0.95 }}>
                  @FEARLESS.TATTOO
                </h2>
              </div>
              <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" data-hover className="btn-outline shrink-0">
                Folgen →
              </a>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igGrid.map((src, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" data-hover>
                  <div className="img-hover">
                    <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                      <Image src={src} alt={`Instagram ${i + 1}`} fill className="object-cover" />
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ZITAT ───────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bronze)', padding: '80px 0' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <ScrollReveal>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '0.04em', color: 'var(--charcoal)', lineHeight: 1.2, maxWidth: '900px', margin: '0 auto' }}>
              &ldquo;KUNST SOLLTE STÖREN. EIN TATTOO TUT ES — FÜR IMMER.&rdquo;
            </p>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'rgba(17,20,24,0.6)', marginTop: '16px', textTransform: 'uppercase' }}>
              — Petzko, Fearless Inc
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
