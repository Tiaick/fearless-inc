import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import ScrollReveal from '@/components/ScrollReveal';

const styles = [
  { title: 'Blackwork', desc: 'Fette schwarze Flächen, scharfe Linien und dunkle ornamentale Energie.' },
  { title: 'Realism', desc: 'Fotorealistische Portraits, Tiere und Szenen in atemberaubender Detailtreue.' },
  { title: 'Fine Line', desc: 'Zarte, präzise Linienarbeit. Botanik, Porträts und geometrische Elemente.' },
  { title: 'Geometric', desc: 'Mandalas, Sacred Geometry und ornamentale Muster mit mathematischer Perfektion.' },
  { title: 'Custom', desc: 'Deine Idee, von Grund auf neu designed. Kein Template — pure, einzigartige Kunst.' },
  { title: 'Cover-Up', desc: 'Alte Tattoos neu denken und professionell überarbeiten. Kreativ, präzise, endgültig.' },
];

const realImages = [
  '/images/610187491_18087292439100682_8663289038902992315_n..jpg',
  '/images/624116235_18089624426100682_2088412342259823505_n..jpg',
  '/images/651812406_18093954797100682_8027518136352885077_n..jpg',
  '/images/652836111_18094310735100682_5263157646568125049_n..jpg',
];

const grid = realImages.map((url) => ({ url, aspect: '1/1' }));

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════ HERO ═══════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://loremflickr.com/1920/1080/tattoo,studio?lock=1"
            alt="Fearless Inc"
            fill priority unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(0.4) brightness(0.28) contrast(1.15)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(10,10,10,0.97) 30%, rgba(10,10,10,0.55) 70%, rgba(10,10,10,0.2) 100%)' }} />
        </div>

        <div className="r-hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <span className="gold-bar" />
              <span className="f-label">Tattoo Studio · Ellerau</span>
            </div>
          </ScrollReveal>

          <ScrollReveal className="delay-1">
            <h1 className="f-display" style={{ fontSize: 'clamp(5.5rem, 14vw, 13rem)', color: 'var(--white)', marginBottom: '8px' }}>
              FEARLESS
            </h1>
            <h1 className="f-display" style={{ fontSize: 'clamp(5.5rem, 14vw, 13rem)', color: 'transparent', WebkitTextStroke: '1.5px var(--gold)', marginBottom: '32px' }}>
              INC.
            </h1>
          </ScrollReveal>

          <ScrollReveal className="delay-2">
            <p className="f-body" style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--dim)', maxWidth: '480px', marginBottom: '36px' }}>
              Tattoo Kunst auf höchstem Niveau. Jedes Motiv wird individuell entworfen und mit absoluter Präzision in die Haut gestochen.
            </p>
          </ScrollReveal>

          <ScrollReveal className="delay-3">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '56px' }}>
              <Link href="/buchen" data-hover className="btn-gold" style={{ textDecoration: 'none' }}>Termin anfragen →</Link>
              <Link href="/galerie" data-hover className="btn-ghost" style={{ textDecoration: 'none' }}>Portfolio ansehen</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="delay-4">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', paddingTop: '32px', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
              {[['8+', 'Jahre Erfahrung'], ['2.000+', 'Tattoos gestochen'], ['100%', 'Custom Designs']].map(([n, l]) => (
                <div key={l}>
                  <div className="f-display" style={{ fontSize: '2.8rem', color: 'var(--gold)', lineHeight: 1 }}>{n}</div>
                  <div className="f-label" style={{ color: 'var(--muted)', marginTop: '4px', fontSize: '0.58rem' }}>{l}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════ ÜBER PETZKO ════════════════ */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="r-section">
          <div className="r-grid-2col">
            <ScrollReveal>
              <div style={{ position: 'relative' }}>
                <div className="img-cell">
                  <Image
                    src="/images/petzko.png"
                    alt="Petzko – Tattoo Artist"
                    width={800} height={1000} unoptimized
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', background: 'var(--gold)', padding: '20px 24px', textAlign: 'center' }}>
                  <div className="f-display" style={{ fontSize: '2.5rem', color: 'var(--bg)', lineHeight: 1 }}>8+</div>
                  <div className="f-label" style={{ color: 'rgba(10,10,10,0.65)', fontSize: '0.5rem' }}>Jahre</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="delay-2">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <span className="gold-bar" />
                  <span className="f-label">Der Artist</span>
                </div>
                <h2 className="f-display" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: 'var(--white)', marginBottom: '24px' }}>
                  PETZKO
                </h2>
                <p className="f-body" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--dim)', marginBottom: '16px' }}>
                  Petzko ist nicht einfach ein Tätowierer — er ist ein Künstler, der Haut als seine Leinwand sieht. Mit über acht Jahren Erfahrung und tausenden gestochenen Motiven hat er sein Handwerk auf ein Niveau perfektioniert, das für sich spricht.
                </p>
                <p className="f-body" style={{ fontSize: '0.92rem', lineHeight: 1.85, color: 'var(--muted)', marginBottom: '36px' }}>
                  Sein Studio Fearless Inc in Ellerau ist ein privater kreativer Raum, in dem jede Vision Wirklichkeit wird. Keine Vorlagen, keine Kompromisse — nur Kunst.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <Link href="/artist" data-hover className="btn-gold" style={{ textDecoration: 'none' }}>Mehr über Petzko</Link>
                  <Link href="/galerie" data-hover className="btn-ghost" style={{ textDecoration: 'none' }}>Portfolio</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ STILE ══════════════════════ */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="r-section">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '16px' }}>
                <span className="gold-bar" />
                <span className="f-label">Tattoo Stile</span>
                <span className="gold-bar" />
              </div>
              <h2 className="f-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'var(--white)' }}>
                SPEZIALISIERUNGEN
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {styles.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 50}>
                <div className="card">
                  <div className="f-display" style={{ fontSize: '3rem', color: 'rgba(201,168,76,0.15)', lineHeight: 1, marginBottom: '16px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="f-display" style={{ fontSize: '1.75rem', color: 'var(--white)', marginBottom: '12px' }}>{s.title}</h3>
                  <p className="f-body" style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--muted)' }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ PORTFOLIO ══════════════════ */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="r-section">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '48px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <span className="gold-bar" />
                  <span className="f-label">Portfolio</span>
                </div>
                <h2 className="f-display" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', color: 'var(--white)' }}>
                  AKTUELLE<br />ARBEITEN
                </h2>
              </div>
              <Link href="/galerie" data-hover className="btn-ghost" style={{ textDecoration: 'none' }}>Alle Arbeiten →</Link>
            </div>
          </ScrollReveal>

          <div className="r-grid-3col">
            {grid.map((item, i) => (
              <ScrollReveal key={i} delay={i * 45}>
                <Link href="/galerie" data-hover style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="img-cell">
                    <div style={{ position: 'relative', aspectRatio: item.aspect, overflow: 'hidden' }}>
                      <Image
                        src={item.url}
                        alt={`Tattoo Arbeit ${i + 1}`}
                        fill unoptimized
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CTA BANNER ═════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '480px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="https://loremflickr.com/1920/800/tattoo,ink?lock=9"
            alt="Studio"
            fill unoptimized
            style={{ objectFit: 'cover', filter: 'grayscale(0.5) brightness(0.2) contrast(1.2)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,10,10,0.98) 40%, rgba(10,10,10,0.6) 100%)' }} />
        </div>

        <div className="r-section" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ maxWidth: '600px' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <span className="gold-bar" />
                <span className="f-label">Termin buchen</span>
              </div>
              <h2 className="f-display" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: 'var(--white)', marginBottom: '20px', lineHeight: 0.92 }}>
                BEREIT FÜR<br />DEIN TATTOO?
              </h2>
              <p className="f-body" style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--dim)', marginBottom: '32px', maxWidth: '440px' }}>
                Jedes Tattoo beginnt mit einem Gespräch. Teile deine Idee und Petzko meldet sich persönlich zurück.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
                <Link href="/buchen" data-hover className="btn-gold" style={{ textDecoration: 'none' }}>Jetzt anfragen →</Link>
                <a href="tel:015222458669" data-hover className="btn-ghost" style={{ textDecoration: 'none' }}>01522 2458669</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Mo–Fr 12:00–17:00 Uhr', 'Königsberger Str. 2, 25479 Ellerau', '@fearless.tattoo auf Instagram'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                    <span className="f-body" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ INSTAGRAM ══════════════════ */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="r-section">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: '36px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                  <span className="gold-bar" />
                  <span className="f-label">Instagram</span>
                </div>
                <h2 className="f-display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--white)' }}>
                  @FEARLESS.TATTOO
                </h2>
              </div>
              <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ textDecoration: 'none' }}>Folgen →</a>
            </div>
          </ScrollReveal>

          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-b494d01d-c5d8-4bec-b1b5-f95560a64a42" data-elfsight-app-lazy />
        </div>
      </section>

      {/* ═══════════════════════════════ QUOTE ══════════════════════ */}
      <section style={{ background: 'var(--gold)' }}>
        <div className="r-section" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <blockquote className="f-display" style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', color: 'var(--bg)', lineHeight: 1.2, maxWidth: '900px', margin: '0 auto 16px' }}>
              &ldquo;KUNST SOLLTE STÖREN. EIN TATTOO TUT ES — FÜR IMMER.&rdquo;
            </blockquote>
            <cite className="f-label" style={{ color: 'rgba(10,10,10,0.55)', fontStyle: 'normal' }}>— PETZKO, FEARLESS INC</cite>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
