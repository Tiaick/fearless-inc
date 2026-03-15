import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const philosophy = [
  {
    num: '01',
    title: 'Intention',
    text: 'Every line drawn on skin is deliberate. There is no accident in Petzko\'s work — only carefully considered choices that serve the larger composition.',
  },
  {
    num: '02',
    title: 'Precision',
    text: 'Years of dedicated practice have built an innate understanding of how ink behaves on skin. The result is work that remains striking for decades.',
  },
  {
    num: '03',
    title: 'Collaboration',
    text: 'The best tattoos are born from dialogue. Petzko listens deeply, asks the right questions, and distills your essence into a permanent mark.',
  },
  {
    num: '04',
    title: 'Evolution',
    text: 'Style is never static. Petzko continuously pushes the boundaries of his craft, drawing from art history, architecture, and natural forms.',
  },
];

const styles = [
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
          <Image
            src="https://picsum.photos/seed/artist-hero/1920/1080"
            alt="Petzko at work"
            fill
            priority
            className="object-cover object-center"
            style={{ filter: 'brightness(0.25) saturate(0.5)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0b0b0b 0%, rgba(11,11,11,0.3) 70%)' }} />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 pb-20 pt-48 w-full">
          <ScrollReveal>
            <p
              className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
              style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
            >
              <span className="gold-line" />
              The Artist
            </p>
            <h1
              className="font-light leading-none"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}
            >
              <span className="block text-7xl md:text-9xl">Petzko</span>
              <span
                className="block text-lg md:text-xl mt-4"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, letterSpacing: '0.2em', color: '#8a8270', fontSize: '0.8rem' }}
              >
                FEARLESS INC · VIENNA
              </span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── STORY ───────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="relative sticky top-28">
                <div className="img-overlay">
                  <Image
                    src="https://picsum.photos/seed/petzko-studio/700/900"
                    alt="Petzko in the studio"
                    width={700}
                    height={900}
                    className="w-full object-cover"
                    style={{ filter: 'grayscale(0.25) contrast(1.08)' }}
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}
                >
                  <p className="num-indicator mb-1">Vienna, Austria</p>
                  <p
                    className="text-lg font-light"
                    style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}
                  >
                    Fearless Inc Studio
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal delay={100}>
              <p
                className="text-[9px] tracking-[0.45em] uppercase mb-8 flex items-center gap-4"
                style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
              >
                <span className="gold-line" />
                Origin
              </p>
              <h2
                className="text-5xl md:text-6xl font-light mb-10 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}
              >
                Drawn to the<br />
                <em style={{ color: '#c8a96a' }}>Permanent</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col gap-6 mb-12">
                <p
                  className="text-base leading-loose"
                  style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
                >
                  Petzko discovered tattooing as a teenager, drawn not to the craft itself at first, but to what it represented — the power to make something permanent. In a world of the ephemeral, here was an art form that demanded commitment, from both artist and collector.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
                >
                  After years of self-directed study — studying anatomy, fine art, architecture, and calligraphy — he began his apprenticeship. He pushed himself relentlessly, understanding that tattooing is a discipline where talent is the beginning, not the destination.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
                >
                  In 2016, he founded Fearless Inc in Vienna — a studio built on the belief that every client deserves a singular, thoughtfully designed piece. Not flash, not templates. Art.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col gap-5">
                {styles.map((style) => (
                  <div key={style.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[10px] tracking-[0.2em] uppercase"
                        style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)' }}
                      >
                        {style.label}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: '#8a8270', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}
                      >
                        {style.pct}%
                      </span>
                    </div>
                    <div className="h-px w-full" style={{ background: 'rgba(200,169,106,0.1)' }}>
                      <div
                        className="h-px"
                        style={{
                          width: `${style.pct}%`,
                          background: 'linear-gradient(90deg, #c8a96a, #a8883f)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ──────────────────────────────────────────── */}
      <section style={{ background: '#060606' }} className="py-28 md:py-40">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <div className="mb-16">
              <p
                className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
                style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
              >
                <span className="gold-line" />
                Creative Philosophy
              </p>
              <h2
                className="text-5xl md:text-7xl font-light leading-none"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}
              >
                The Four<br />
                <em style={{ color: '#c8a96a' }}>Principles</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(200,169,106,0.08)' }}>
            {philosophy.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div
                  className="p-10 md:p-14 group hover:bg-[#111111] transition-colors duration-500"
                  style={{ background: '#060606' }}
                >
                  <span
                    className="text-6xl font-light block mb-4"
                    style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(200,169,106,0.2)', lineHeight: 1 }}
                  >
                    {item.num}
                  </span>
                  <h3
                    className="text-2xl font-light mb-4"
                    style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.01em' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
                  >
                    {item.text}
                  </p>
                  <div
                    className="mt-6 h-px"
                    style={{ background: '#c8a96a', width: '0px', transition: 'width 0.6s cubic-bezier(0.77,0,0.175,1)' }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK GALLERY ────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-32">
        <ScrollReveal>
          <p
            className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
            style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
          >
            <span className="gold-line" />
            Recent Work
          </p>
          <h2
            className="text-5xl md:text-6xl font-light leading-none mb-16"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}
          >
            From the<br /><em style={{ color: '#c8a96a' }}>Studio</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {portfolio.map((src, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="img-overlay">
                <div className="relative overflow-hidden" style={{ aspectRatio: i % 3 === 0 ? '3/4' : '1/1' }}>
                  <Image
                    src={src}
                    alt={`Portfolio work ${i + 1}`}
                    fill
                    className="object-cover"
                    style={{ filter: 'grayscale(0.2) contrast(1.1)' }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/gallery"
            data-hover
            className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase border px-8 py-4 transition-all duration-500 hover:border-[#c8a96a] hover:text-[#c8a96a]"
            style={{ borderColor: 'rgba(200,169,106,0.3)', color: '#c0b8a8', fontFamily: 'var(--font-inter)' }}
          >
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ background: '#111111', borderTop: '1px solid rgba(200,169,106,0.06)' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <ScrollReveal>
            <p
              className="text-[9px] tracking-[0.45em] uppercase mb-6"
              style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
            >
              Ready?
            </p>
            <h2
              className="text-5xl md:text-7xl font-light mb-8 leading-none"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}
            >
              Your tattoo<br />
              <em style={{ color: '#c8a96a' }}>awaits.</em>
            </h2>
            <p
              className="text-sm mb-12 max-w-md mx-auto"
              style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
            >
              Book a consultation and begin the journey to your perfect piece.
            </p>
            <Link
              href="/booking"
              data-hover
              className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80"
              style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}
            >
              Book Now
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
