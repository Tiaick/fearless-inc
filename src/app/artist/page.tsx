import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const philosophie = [
  { num: '01', title: 'Intention', text: 'Jede Linie auf der Haut ist bewusst gesetzt. In Petzkos Arbeit gibt es keinen Zufall — nur sorgfältig durchdachte Entscheidungen, die der Gesamtkomposition dienen.' },
  { num: '02', title: 'Präzision', text: 'Jahre intensiver Übung haben ein intuitives Verständnis dafür aufgebaut, wie Tinte auf Haut reagiert. Das Ergebnis: Arbeiten, die jahrzehntelang beeindrucken.' },
  { num: '03', title: 'Zusammenarbeit', text: 'Die besten Tattoos entstehen im Dialog. Petzko hört genau zu, stellt die richtigen Fragen und destilliert dein Wesen in ein permanentes Zeichen.' },
  { num: '04', title: 'Entwicklung', text: 'Stil ist niemals statisch. Petzko treibt die Grenzen seines Handwerks kontinuierlich voran — inspiriert von Kunstgeschichte, Architektur und natürlichen Formen.' },
];

const stile = [
  { label: 'Blackwork', pct: 92 },
  { label: 'Fine Line', pct: 88 },
  { label: 'Realism', pct: 78 },
  { label: 'Geometric', pct: 82 },
  { label: 'Cover-Up', pct: 74 },
];

const portfolio = [
  'https://picsum.photos/seed/art1/600/800',
  'https://picsum.photos/seed/art2/600/600',
  'https://picsum.photos/seed/art3/600/400',
  'https://picsum.photos/seed/art4/600/600',
  'https://picsum.photos/seed/art5/600/800',
  'https://picsum.photos/seed/art6/600/600',
];

export default function ArtistPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://picsum.photos/seed/artist-hero/1920/1080" alt="Petzko bei der Arbeit" fill priority className="object-cover object-center" style={{ filter: 'brightness(0.25) saturate(0.5)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0b0b0b 0%, rgba(11,11,11,0.3) 70%)' }} />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 pb-20 pt-48 w-full">
          <ScrollReveal>
            <p className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
              <span className="gold-line" />
              Der Artist
            </p>
            <h1 className="font-light leading-none" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}>
              <span className="block text-7xl md:text-9xl">Petzko</span>
              <span className="block text-lg md:text-xl mt-4" style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, letterSpacing: '0.2em', color: '#8a8270', fontSize: '0.8rem' }}>
                FEARLESS INC · WIEN
              </span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── GESCHICHTE ──────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="relative sticky top-28">
                <div className="img-overlay">
                  <Image src="https://picsum.photos/seed/petzko-studio/700/900" alt="Petzko im Studio" width={700} height={900} className="w-full object-cover" style={{ filter: 'grayscale(0.25) contrast(1.08)' }} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                  <p className="num-indicator mb-1">Wien, Österreich</p>
                  <p className="text-lg font-light" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}>Fearless Inc Studio</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal delay={100}>
              <p className="text-[9px] tracking-[0.45em] uppercase mb-8 flex items-center gap-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
                <span className="gold-line" />
                Ursprung
              </p>
              <h2 className="text-5xl md:text-6xl font-light mb-10 leading-tight" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}>
                Hingezogen zum<br />
                <em style={{ color: '#c8a96a' }}>Permanenten</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col gap-6 mb-12">
                <p className="text-base leading-loose" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                  Petzko entdeckte das Tätowieren als Jugendlicher — nicht zuerst wegen des Handwerks selbst, sondern wegen dem, wofür es stand: die Kraft, etwas Permanentes zu schaffen. In einer Welt des Flüchtigen war hier eine Kunstform, die Commitment forderte — vom Künstler wie vom Sammler.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                  Nach Jahren des autodidaktischen Studiums — Anatomie, Bildende Kunst, Architektur und Kalligraphie — begann er seine Lehre. Er trieb sich unerbittlich an, im Bewusstsein, dass Tätowieren eine Disziplin ist, bei der Talent der Anfang ist, nicht das Ziel.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                  2016 gründete er Fearless Inc in Wien — ein Studio, das auf der Überzeugung aufgebaut ist, dass jeder Kunde ein einzigartiges, sorgfältig gestaltetes Werk verdient. Keine Vorlage, keine Massenware. Kunst.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col gap-5">
                {stile.map((style) => (
                  <div key={style.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)' }}>{style.label}</span>
                      <span className="text-xs" style={{ color: '#8a8270', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>{style.pct}%</span>
                    </div>
                    <div className="h-px w-full" style={{ background: 'rgba(200,169,106,0.1)' }}>
                      <div className="h-px" style={{ width: `${style.pct}%`, background: 'linear-gradient(90deg, #c8a96a, #a8883f)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHIE ─────────────────────────────────────────── */}
      <section style={{ background: '#060606' }} className="py-28 md:py-40">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
                <span className="gold-line" />
                Kreative Philosophie
              </p>
              <h2 className="text-5xl md:text-7xl font-light leading-none" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}>
                Die vier<br />
                <em style={{ color: '#c8a96a' }}>Prinzipien</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(200,169,106,0.08)' }}>
            {philosophie.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div className="p-10 md:p-14 hover:bg-[#111111] transition-colors duration-500" style={{ background: '#060606' }}>
                  <span className="text-6xl font-light block mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(200,169,106,0.2)', lineHeight: 1 }}>{item.num}</span>
                  <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARBEITEN ────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-32">
        <ScrollReveal>
          <p className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
            <span className="gold-line" />
            Aktuelle Arbeiten
          </p>
          <h2 className="text-5xl md:text-6xl font-light leading-none mb-16" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}>
            Aus dem<br /><em style={{ color: '#c8a96a' }}>Studio</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {portfolio.map((src, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="img-overlay">
                <div className="relative overflow-hidden" style={{ aspectRatio: i % 3 === 0 ? '3/4' : '1/1' }}>
                  <Image src={src} alt={`Portfolio Arbeit ${i + 1}`} fill className="object-cover" style={{ filter: 'grayscale(0.2) contrast(1.1)' }} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/galerie" data-hover className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase border px-8 py-4 transition-all duration-500 hover:border-[#c8a96a] hover:text-[#c8a96a]" style={{ borderColor: 'rgba(200,169,106,0.3)', color: '#c0b8a8', fontFamily: 'var(--font-inter)' }}>
            Gesamtes Portfolio ansehen
          </Link>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden" style={{ background: '#111111', borderTop: '1px solid rgba(200,169,106,0.06)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <ScrollReveal>
            <p className="text-[9px] tracking-[0.45em] uppercase mb-6" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Bereit?</p>
            <h2 className="text-5xl md:text-7xl font-light mb-8 leading-none" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}>
              Dein Tattoo<br /><em style={{ color: '#c8a96a' }}>wartet.</em>
            </h2>
            <p className="text-sm mb-12 max-w-md mx-auto" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
              Buche eine Beratung und beginne die Reise zu deinem perfekten Werk.
            </p>
            <Link href="/buchen" data-hover className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80" style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
              Jetzt buchen
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
