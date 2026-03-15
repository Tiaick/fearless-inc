import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const featuredWork = [
  { id: 1, src: 'https://picsum.photos/seed/tattoo1/600/800', alt: 'Blackwork sleeve', category: 'Blackwork', span: 'tall' },
  { id: 2, src: 'https://picsum.photos/seed/tattoo2/600/600', alt: 'Fine line botanical', category: 'Fine Line', span: 'square' },
  { id: 3, src: 'https://picsum.photos/seed/tattoo3/600/600', alt: 'Geometric mandala', category: 'Geometric', span: 'square' },
  { id: 4, src: 'https://picsum.photos/seed/tattoo4/600/800', alt: 'Realism portrait', category: 'Realism', span: 'tall' },
  { id: 5, src: 'https://picsum.photos/seed/tattoo5/600/400', alt: 'Minimalist script', category: 'Minimalist', span: 'wide' },
  { id: 6, src: 'https://picsum.photos/seed/tattoo6/600/600', alt: 'Dark floral', category: 'Blackwork', span: 'square' },
];

const igImages = [
  'https://picsum.photos/seed/ig1/400/400',
  'https://picsum.photos/seed/ig2/400/400',
  'https://picsum.photos/seed/ig3/400/400',
  'https://picsum.photos/seed/ig4/400/400',
  'https://picsum.photos/seed/ig5/400/400',
  'https://picsum.photos/seed/ig6/400/400',
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/hero-fearless/1920/1200"
            alt="FEARLESS INC — Tattoo Art"
            fill
            priority
            className="object-cover object-center"
            style={{ filter: 'brightness(0.35) saturate(0.6)' }}
          />
          {/* Vignette */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0b0b0b 0%, rgba(11,11,11,0.5) 50%, rgba(11,11,11,0.2) 100%)' }} />
        </div>

        {/* Side label */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4">
          <div style={{ height: '60px', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(200,169,106,0.5))' }} />
          <span
            className="text-[9px] tracking-[0.4em] uppercase"
            style={{ writingMode: 'vertical-rl', color: '#8a8270', fontFamily: 'var(--font-inter)' }}
          >
            Scroll to explore
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 pb-24 pt-40 w-full">
          <div className="max-w-3xl">
            <p
              className="text-[9px] tracking-[0.5em] uppercase mb-8 flex items-center gap-4"
              style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
            >
              <span className="gold-line" />
              Vienna, Austria
            </p>

            <h1
              className="leading-none mb-10"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', fontWeight: 300 }}
            >
              <span className="block text-6xl md:text-8xl lg:text-9xl" style={{ letterSpacing: '-0.02em' }}>
                FEARLESS
              </span>
              <span className="block text-6xl md:text-8xl lg:text-9xl italic" style={{ letterSpacing: '-0.02em', color: '#c8a96a' }}>
                Inc.
              </span>
              <span
                className="block text-lg md:text-xl mt-4 not-italic"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, letterSpacing: '0.18em', color: '#c0b8a8', fontSize: '0.85rem' }}
              >
                TATTOO ART BY PETZKO
              </span>
            </h1>

            <p
              className="text-base leading-relaxed mb-12 max-w-lg"
              style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
            >
              Where art becomes permanent. Each tattoo is a singular creation — deeply personal, endlessly precise.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <Link
                href="/booking"
                data-hover
                className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80"
                style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}
              >
                Book Appointment
              </Link>
              <Link
                href="/gallery"
                data-hover
                className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase border transition-all duration-500 hover:border-[#c8a96a] hover:text-[#c8a96a]"
                style={{ borderColor: 'rgba(192,184,168,0.3)', color: '#c0b8a8', fontFamily: 'var(--font-inter)' }}
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div
            className="mt-20 pt-8 grid grid-cols-3 gap-8 max-w-md"
            style={{ borderTop: '1px solid rgba(200,169,106,0.12)' }}
          >
            {[
              { num: '8+', label: 'Years of Art' },
              { num: '2K+', label: 'Tattoos Done' },
              { num: '∞', label: 'Unique Pieces' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-light mb-1"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#c8a96a' }}
                >
                  {stat.num}
                </div>
                <div
                  className="text-[9px] tracking-[0.2em] uppercase"
                  style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO STRIP ─────────────────────────────────────────── */}
      <section style={{ background: '#111111', borderTop: '1px solid rgba(200,169,106,0.06)', borderBottom: '1px solid rgba(200,169,106,0.06)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-12">
          <div className="flex items-center justify-between gap-8 overflow-x-auto">
            {['Blackwork', 'Realism', 'Fine Line', 'Geometric', 'Custom Tattoos', 'Cover-Up'].map((style, i) => (
              <div key={style} className="flex items-center gap-8 shrink-0">
                {i > 0 && <span style={{ width: '1px', height: '12px', background: 'rgba(200,169,106,0.2)', display: 'block' }} />}
                <span
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}
                >
                  {style}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PETZKO ────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <ScrollReveal>
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 z-0"
                style={{ width: '60%', height: '60%', border: '1px solid rgba(200,169,106,0.12)' }}
              />
              <div className="img-overlay relative z-10">
                <Image
                  src="https://picsum.photos/seed/petzko-portrait/700/900"
                  alt="Petzko — Tattoo Artist"
                  width={700}
                  height={900}
                  className="w-full object-cover"
                  style={{ filter: 'grayscale(0.3) contrast(1.05)' }}
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 z-20 px-6 py-5"
                style={{ background: '#0b0b0b', border: '1px solid rgba(200,169,106,0.15)' }}
              >
                <p className="num-indicator mb-1">Since</p>
                <p
                  className="text-4xl font-light"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#c8a96a' }}
                >
                  2016
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div>
              <p
                className="text-[9px] tracking-[0.45em] uppercase mb-6 flex items-center gap-4"
                style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
              >
                <span className="gold-line" />
                The Artist
              </p>
              <h2
                className="text-5xl md:text-6xl font-light mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}
              >
                Ink as a<br />
                <em>Language</em>
              </h2>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '420px' }}
              >
                Petzko is not just a tattoo artist — he is a storyteller who uses skin as his canvas. With over eight years of mastery in Vienna, he has perfected the craft of transforming visions into permanent art.
              </p>
              <p
                className="text-sm leading-relaxed mb-10"
                style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '420px' }}
              >
                His signature style bridges the worlds of blackwork and fine line — precise, dark, and deeply intentional. Every session is a conversation; every tattoo, a collaboration.
              </p>
              <Link
                href="/artist"
                data-hover
                className="luxury-underline inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 hover:text-[#c8a96a]"
                style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)' }}
              >
                Read the Full Story
                <span style={{ width: '32px', height: '1px', background: 'currentColor', display: 'inline-block' }} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FEATURED WORK ───────────────────────────────────────── */}
      <section style={{ background: '#060606' }} className="py-24 md:py-36">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p
                  className="text-[9px] tracking-[0.45em] uppercase mb-4 flex items-center gap-4"
                  style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
                >
                  <span className="gold-line" />
                  Portfolio
                </p>
                <h2
                  className="text-5xl md:text-7xl font-light leading-none"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}
                >
                  Selected<br />
                  <em style={{ color: '#c8a96a' }}>Works</em>
                </h2>
              </div>
              <Link
                href="/gallery"
                data-hover
                className="hidden md:flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 hover:text-[#c8a96a]"
                style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}
              >
                All Works
                <span style={{ width: '32px', height: '1px', background: 'currentColor', display: 'inline-block' }} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Bento-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {featuredWork.map((work, i) => (
              <ScrollReveal key={work.id} delay={i * 60}>
                <Link href="/gallery" data-hover className="img-overlay block group">
                  <div className="relative overflow-hidden" style={{ aspectRatio: work.span === 'tall' ? '3/4' : work.span === 'wide' ? '16/9' : '1/1' }}>
                    <Image
                      src={work.src}
                      alt={work.alt}
                      fill
                      className="object-cover"
                      style={{ filter: 'grayscale(0.2) contrast(1.1)' }}
                    />
                    <div
                      className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}
                    >
                      <span className="num-indicator mb-1">{work.category}</span>
                      <span
                        className="text-sm font-light"
                        style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}
                      >
                        {work.alt}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 flex md:hidden">
            <Link
              href="/gallery"
              className="text-[10px] tracking-[0.3em] uppercase border px-6 py-3 transition-all duration-500 hover:border-[#c8a96a] hover:text-[#c8a96a]"
              style={{ borderColor: 'rgba(200,169,106,0.3)', color: '#c0b8a8', fontFamily: 'var(--font-inter)' }}
            >
              View All Works
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BOOKING TEASER ──────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <ScrollReveal className="lg:col-span-3">
            <div>
              <p
                className="text-[9px] tracking-[0.45em] uppercase mb-6 flex items-center gap-4"
                style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
              >
                <span className="gold-line" />
                Your Appointment
              </p>
              <h2
                className="text-5xl md:text-6xl font-light leading-tight mb-6"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}
              >
                Ready to Begin<br />
                <em style={{ color: '#c8a96a' }}>Your Story?</em>
              </h2>
              <p
                className="text-sm leading-relaxed mb-10 max-w-md"
                style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
              >
                Every great tattoo starts with a conversation. Share your vision, your story, your idea — and Petzko will transform it into a work of art that you will carry forever.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/booking"
                  data-hover
                  className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80"
                  style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}
                >
                  Start Booking
                </Link>
                <Link
                  href="/contact"
                  data-hover
                  className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase border transition-all duration-500 hover:border-[#c8a96a] hover:text-[#c8a96a]"
                  style={{ borderColor: 'rgba(192,184,168,0.3)', color: '#c0b8a8', fontFamily: 'var(--font-inter)' }}
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="lg:col-span-2">
            <div
              className="p-8 md:p-10"
              style={{ background: '#111111', border: '1px solid rgba(200,169,106,0.1)' }}
            >
              <div className="flex flex-col gap-6">
                {[
                  { step: '01', title: 'Initial Consultation', desc: 'Discuss your concept, placement, and vision with Petzko.' },
                  { step: '02', title: 'Custom Design', desc: 'A bespoke design is created exclusively for you.' },
                  { step: '03', title: 'The Session', desc: 'Experience the transformation in a calm, professional environment.' },
                  { step: '04', title: 'Aftercare', desc: 'Detailed guidance to ensure your tattoo heals perfectly.' },
                ].map((item, i) => (
                  <div key={item.step} className="flex gap-5 items-start">
                    <span
                      className="text-2xl font-light shrink-0 mt-0.5"
                      style={{ fontFamily: 'var(--font-cormorant)', color: '#c8a96a', lineHeight: 1 }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <p
                        className="text-sm font-light mb-1"
                        style={{ fontFamily: 'var(--font-inter)', color: '#f2f2f2' }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── INSTAGRAM FEED ──────────────────────────────────────── */}
      <section style={{ background: '#060606', borderTop: '1px solid rgba(200,169,106,0.06)' }} className="py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <p
                  className="text-[9px] tracking-[0.45em] uppercase mb-3"
                  style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
                >
                  Instagram
                </p>
                <h2
                  className="text-4xl font-light"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}
                >
                  @fearless.tattoo
                </h2>
              </div>
              <a
                href="https://www.instagram.com/fearless.tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="hidden md:flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 hover:text-[#c8a96a]"
                style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}
              >
                Follow
                <span style={{ width: '32px', height: '1px', background: 'currentColor', display: 'inline-block' }} />
              </a>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {igImages.map((src, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <a
                  href="https://www.instagram.com/fearless.tattoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                  className="img-overlay block group"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                    <Image
                      src={src}
                      alt={`Instagram post ${i + 1}`}
                      fill
                      className="object-cover"
                      style={{ filter: 'grayscale(0.3) brightness(0.8)' }}
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: 'rgba(0,0,0,0.5)' }}
                    >
                      <span
                        className="text-[8px] tracking-[0.3em] uppercase"
                        style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
                      >
                        View
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE ───────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-48">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto">
            <span
              className="text-[80px] md:text-[120px] leading-none block mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(200,169,106,0.12)', lineHeight: 1 }}
            >
              &ldquo;
            </span>
            <p
              className="text-3xl md:text-5xl font-light italic leading-tight mb-8 -mt-16"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.01em' }}
            >
              Art should disturb the comfortable and comfort the disturbed. A tattoo does both — permanently.
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="gold-line" style={{ width: '30px' }} />
              <span
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
              >
                Petzko
              </span>
              <span className="gold-line" style={{ width: '30px' }} />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
