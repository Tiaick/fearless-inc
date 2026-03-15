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
  { label: 'Realism', pct: 78 },
  { label: 'Geometric', pct: 84 },
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
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://picsum.photos/seed/artist-hero/1920/1080" alt="Petzko" fill priority className="object-cover object-center" style={{ filter: 'grayscale(0.5) brightness(0.25) contrast(1.1)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--charcoal) 0%, rgba(17,20,24,0.5) 60%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 pb-20 pt-48 w-full">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-5">
              <span className="line-bronze" />
              <span className="section-label">Der Artist</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem, 14vw, 12rem)', letterSpacing: '0.04em', color: '#f0ece4', lineHeight: 0.9 }}>
              PETZKO
            </h1>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--muted)', marginTop: '8px', textTransform: 'uppercase' }}>
              FEARLESS INC · ELLERAU
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── STORY ───────────────────────────────────────────────── */}
      <section style={{ background: 'var(--charcoal-2)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="sticky top-28">
                  <div className="img-hover relative">
                    <Image src="https://picsum.photos/seed/petzko-studio/700/900" alt="Petzko im Studio" width={700} height={900} className="w-full object-cover" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal delay={100}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="line-bronze" />
                  <span className="section-label">Ursprung</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.04em', color: '#f0ece4', lineHeight: 0.95, marginBottom: '24px' }}>
                  HINGEZOGEN ZUM PERMANENTEN
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={180}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '36px' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '1rem', lineHeight: 1.85, color: 'var(--cream-dim)' }}>
                    Petzko entdeckte das Tätowieren als Jugendlicher — nicht wegen des Handwerks selbst, sondern wegen dem, wofür es stand: die Kraft, etwas Permanentes zu schaffen. In einer Welt des Flüchtigen war hier eine Kunstform, die echtes Commitment fordert.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--muted)' }}>
                    Nach Jahren des autodidaktischen Studiums — Anatomie, Bildende Kunst, Architektur und Kalligraphie — begann er seine Lehre. Er wusste: Talent ist nur der Anfang. Disziplin und tausende Stunden Praxis sind das, was Meisterschaft ausmacht.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--muted)' }}>
                    2016 gründete er Fearless Inc — ein Studio, das auf der Überzeugung basiert: Jeder Kunde verdient ein einzigartiges, sorgfältig gestaltetes Werk. Kein Flash, keine Vorlage. Nur Kunst.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '20px' }}>Stilschwerpunkte</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {stile.map(s => (
                    <div key={s.label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cream-dim)' }}>{s.label}</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--muted)' }}>{s.pct}%</span>
                      </div>
                      <div style={{ height: '2px', background: 'rgba(201,168,76,0.12)', width: '100%' }}>
                        <div style={{ height: '2px', width: `${s.pct}%`, background: 'linear-gradient(90deg, var(--bronze), var(--bronze-2))' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHIE ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--charcoal)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-36">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="line-bronze" />
                <span className="section-label">Kreative Philosophie</span>
                <span className="line-bronze" />
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em', color: '#f0ece4', lineHeight: 0.95 }}>
                DIE VIER PRINZIPIEN
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {philosophie.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div className="service-card">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'rgba(201,168,76,0.15)', lineHeight: 1, marginBottom: '12px' }}>{item.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '0.06em', color: '#f0ece4', marginBottom: '12px' }}>{item.title.toUpperCase()}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--muted)' }}>{item.text}</p>
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
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="line-bronze" />
                  <span className="section-label">Aktuelle Arbeiten</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '0.05em', color: '#f0ece4', lineHeight: 0.95 }}>
                  AUS DEM STUDIO
                </h2>
              </div>
              <Link href="/galerie" data-hover className="btn-outline hidden md:inline-flex">Alle Arbeiten →</Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {portfolio.map((src, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="img-hover">
                  <div className="relative overflow-hidden" style={{ aspectRatio: i % 3 === 0 ? '3/4' : '1/1' }}>
                    <Image src={src} alt={`Portfolio ${i + 1}`} fill className="object-cover" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Link href="/galerie" data-hover className="btn-outline">Alle Arbeiten →</Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bronze)', padding: '80px 0' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <ScrollReveal>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.04em', color: 'var(--charcoal)', lineHeight: 0.95 }}>
                DEIN TATTOO WARTET.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Link href="/buchen" data-hover style={{ background: 'var(--charcoal)', color: '#f0ece4', display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 32px', fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', transition: 'background 0.3s ease', flexShrink: 0 }}>
                JETZT BUCHEN →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
