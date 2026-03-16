import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const philosophie = [
  { num: '01', title: 'Intention', text: 'Jede Linie ist bewusst gesetzt. Keine Zufälle — nur präzise Entscheidungen, die dem Gesamtbild dienen.' },
  { num: '02', title: 'Präzision', text: 'Jahrelange Praxis haben ein intuitives Gefühl für Tinte auf Haut aufgebaut. Das Ergebnis hält Jahrzehnte.' },
  { num: '03', title: 'Zusammenarbeit', text: 'Die besten Tattoos entstehen im Dialog. Petzko hört zu, stellt die richtigen Fragen und macht deine Vision real.' },
  { num: '04', title: 'Entwicklung', text: 'Stil ist niemals fertig. Petzko entwickelt sein Handwerk ständig weiter — inspiriert von Kunst, Architektur und Natur.' },
];

const stile = [
  { label: 'Blackwork', pct: 92 },
  { label: 'Fine Line', pct: 88 },
  { label: 'Geometric', pct: 84 },
  { label: 'Realism', pct: 78 },
  { label: 'Cover-Up', pct: 74 },
];

const portfolio = [
  'https://picsum.photos/seed/art1/700/900',
  'https://picsum.photos/seed/art2/700/700',
  'https://picsum.photos/seed/art3/700/500',
  'https://picsum.photos/seed/art4/700/700',
  'https://picsum.photos/seed/art5/700/900',
  'https://picsum.photos/seed/art6/700/700',
];

export default function ArtistPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/Petzko.png"
            alt="Petzko"
            fill priority
            style={{ objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(0.5) brightness(0.22) contrast(1.1)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)' }} />
        </div>
        <div className="r-hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <span className="gold-bar" />
              <span className="f-label">Der Artist</span>
            </div>
            <h1 className="f-display" style={{ fontSize: 'clamp(5rem, 14vw, 12rem)', color: 'var(--white)', lineHeight: 0.9 }}>
              PETZKO
            </h1>
            <p className="f-label" style={{ color: 'var(--muted)', marginTop: '12px' }}>
              FEARLESS INC · ELLERAU
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── STORY ───────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="r-section">
          <div className="r-grid-sidebar-420">

            {/* Sticky image */}
            <ScrollReveal>
              <div style={{ position: 'sticky', top: '96px' }}>
                <div className="img-cell">
                  <div style={{ position: 'relative', aspectRatio: '7/9', overflow: 'hidden' }}>
                    <Image
                      src="/images/Petzko.png"
                      alt="Petzko im Studio"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Text column */}
            <div>
              <ScrollReveal delay={80}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <span className="gold-bar" />
                  <span className="f-label">Ursprung</span>
                </div>
                <h2 className="f-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--white)', marginBottom: '28px' }}>
                  HINGEZOGEN ZUM<br />PERMANENTEN
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '48px' }}>
                  <p className="f-body" style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--dim)' }}>
                    Petzko entdeckte das Tätowieren als Jugendlicher — nicht wegen des Handwerks selbst, sondern wegen dem, wofür es stand: die Kraft, etwas Permanentes zu schaffen. In einer Welt des Flüchtigen war hier eine Kunstform, die echtes Commitment fordert.
                  </p>
                  <p className="f-body" style={{ fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--muted)' }}>
                    Nach Jahren des autodidaktischen Studiums — Anatomie, Bildende Kunst, Architektur und Kalligraphie — begann er seine Lehre. Er wusste: Talent ist nur der Anfang. Disziplin und tausende Stunden Praxis sind das, was Meisterschaft ausmacht.
                  </p>
                  <p className="f-body" style={{ fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--muted)' }}>
                    2016 gründete er Fearless Inc — ein Studio, das auf der Überzeugung basiert: Jeder Kunde verdient ein einzigartiges, sorgfältig gestaltetes Werk. Kein Flash, keine Vorlage. Nur Kunst.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={220}>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '36px' }}>
                  <div className="f-label" style={{ marginBottom: '24px' }}>Stilschwerpunkte</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {stile.map(s => (
                      <div key={s.label}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                          <span className="f-label" style={{ color: 'var(--dim)', fontSize: '0.6rem' }}>{s.label}</span>
                          <span className="f-body" style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{s.pct}%</span>
                        </div>
                        <div style={{ height: '2px', background: 'rgba(201,168,76,0.1)', width: '100%' }}>
                          <div style={{ height: '2px', width: `${s.pct}%`, background: 'linear-gradient(90deg, var(--gold), var(--gold-hi))' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHIE ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="r-section">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '16px' }}>
                <span className="gold-bar" />
                <span className="f-label">Kreative Philosophie</span>
                <span className="gold-bar" />
              </div>
              <h2 className="f-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--white)' }}>
                DIE VIER PRINZIPIEN
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {philosophie.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 70}>
                <div className="card">
                  <div className="f-display" style={{ fontSize: '3.5rem', color: 'rgba(201,168,76,0.15)', lineHeight: 1, marginBottom: '12px' }}>{item.num}</div>
                  <h3 className="f-display" style={{ fontSize: '1.75rem', color: 'var(--white)', marginBottom: '12px' }}>{item.title.toUpperCase()}</h3>
                  <p className="f-body" style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--muted)' }}>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="r-section">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '48px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <span className="gold-bar" />
                  <span className="f-label">Aktuelle Arbeiten</span>
                </div>
                <h2 className="f-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--white)' }}>
                  AUS DEM STUDIO
                </h2>
              </div>
              <Link href="/galerie" data-hover className="btn-ghost" style={{ textDecoration: 'none' }}>Alle Arbeiten →</Link>
            </div>
          </ScrollReveal>

          <div className="r-grid-3col">
            {portfolio.map((src, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <Link href="/galerie" data-hover style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="img-cell">
                    <div style={{ position: 'relative', aspectRatio: i % 3 === 0 ? '3/4' : '1/1', overflow: 'hidden' }}>
                      <Image src={src} alt={`Portfolio ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--gold)' }}>
        <div className="r-section">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '32px' }}>
            <ScrollReveal>
              <h2 className="f-display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--bg)', lineHeight: 0.95 }}>
                DEIN TATTOO WARTET.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Link
                href="/buchen"
                data-hover
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: 'var(--bg)', color: 'var(--white)',
                  padding: '14px 32px',
                  fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  transition: 'background 0.25s ease',
                }}
              >
                JETZT BUCHEN →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
