import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const standards = [
  {
    num: '01',
    title: 'Sterile Environment',
    desc: 'Single-use needles and cartridges. All surfaces and equipment are sterilised to medical-grade standards before every session.',
  },
  {
    num: '02',
    title: 'Premium Equipment',
    desc: 'Professional-grade tattoo machines, high-quality inks from certified suppliers, and industry-leading aftercare products.',
  },
  {
    num: '03',
    title: 'Private Sessions',
    desc: 'One client at a time. Your session is private, focused, and unhurried — the time you need to achieve the best possible result.',
  },
  {
    num: '04',
    title: 'Calm Atmosphere',
    desc: 'No chaos. No noise. A curated environment designed to put you at ease, with music, art, and a focused creative energy.',
  },
];

const atmosphereImages = [
  { src: 'https://picsum.photos/seed/studio1/800/600', alt: 'Studio interior', label: 'The Chair' },
  { src: 'https://picsum.photos/seed/studio2/800/1000', alt: 'Tattoo station', label: 'Workspace' },
  { src: 'https://picsum.photos/seed/studio3/800/600', alt: 'Studio art wall', label: 'Art Wall' },
  { src: 'https://picsum.photos/seed/studio4/800/800', alt: 'Equipment setup', label: 'Equipment' },
];

export default function StudioPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/studio-hero/1920/1080"
            alt="Fearless Inc Studio"
            fill
            priority
            className="object-cover object-center"
            style={{ filter: 'brightness(0.2) saturate(0.4)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0b0b0b 0%, rgba(11,11,11,0.4) 70%)' }} />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 pb-20 pt-48 w-full">
          <ScrollReveal>
            <p
              className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
              style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
            >
              <span className="gold-line" />
              Our Space
            </p>
            <h1
              className="font-light leading-none"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}
            >
              <span className="block text-7xl md:text-9xl">The Studio</span>
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

      {/* ─── INTRO ───────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <ScrollReveal>
            <div className="img-overlay">
              <Image
                src="https://picsum.photos/seed/studio-wide/800/1000"
                alt="Studio space"
                width={800}
                height={1000}
                className="w-full object-cover"
                style={{ filter: 'grayscale(0.25) contrast(1.05)' }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p
              className="text-[9px] tracking-[0.45em] uppercase mb-6 flex items-center gap-4"
              style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
            >
              <span className="gold-line" />
              The Space
            </p>
            <h2
              className="text-5xl md:text-6xl font-light mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}
            >
              Built for<br />
              <em style={{ color: '#c8a96a' }}>Creation</em>
            </h2>
            <p
              className="text-base leading-loose mb-6"
              style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
            >
              Fearless Inc is not a walk-in shop. It is a private studio — a deliberate, curated creative space designed for the serious collector and the first-time client alike.
            </p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
            >
              Located in the heart of Vienna, the studio was designed with a single principle in mind: the environment should serve the art. Every detail — the lighting, the music, the atmosphere — is considered.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}
            >
              Sessions are by appointment only. This ensures that every client receives Petzko&apos;s complete, undivided attention from the first consultation to the final line.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── STANDARDS ───────────────────────────────────────────── */}
      <section style={{ background: '#060606' }} className="py-28 md:py-40">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <p
              className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
              style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
            >
              <span className="gold-line" />
              Our Standards
            </p>
            <h2
              className="text-5xl md:text-7xl font-light mb-16 leading-none"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}
            >
              No<br />
              <em style={{ color: '#c8a96a' }}>Compromise</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(200,169,106,0.06)' }}>
            {standards.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 70}>
                <div
                  className="p-10 md:p-14 hover:bg-[#111111] transition-colors duration-500"
                  style={{ background: '#060606' }}
                >
                  <span
                    className="text-6xl font-light block mb-4"
                    style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(200,169,106,0.18)', lineHeight: 1 }}
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
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ATMOSPHERE IMAGES ───────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-32">
        <ScrollReveal>
          <p
            className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
            style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
          >
            <span className="gold-line" />
            Inside the Studio
          </p>
          <h2
            className="text-4xl md:text-6xl font-light mb-16 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}
          >
            The <em style={{ color: '#c8a96a' }}>Atmosphere</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {atmosphereImages.map((img, i) => (
            <ScrollReveal key={img.label} delay={i * 80}>
              <div className="img-overlay group">
                <div className="relative overflow-hidden" style={{ aspectRatio: i % 2 === 1 ? '4/5' : '4/3' }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    style={{ filter: 'grayscale(0.3) brightness(0.75)' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
                  >
                    <span
                      className="text-[9px] tracking-[0.3em] uppercase"
                      style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
                    >
                      {img.label}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── LOCATION + CTA ──────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ background: '#111111', borderTop: '1px solid rgba(200,169,106,0.06)' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p
                className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4"
                style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}
              >
                <span className="gold-line" />
                Location
              </p>
              <h2
                className="text-4xl font-light mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}
              >
                Find Us in<br />
                <em style={{ color: '#c8a96a' }}>Vienna</em>
              </h2>
              <div className="flex flex-col gap-4 mb-10">
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Address</p>
                  <p className="text-sm" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>Vienna, Austria</p>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Hours</p>
                  <p className="text-sm" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>By Appointment Only</p>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Email</p>
                  <a href="mailto:info@fearless-tattoo.at" className="text-sm luxury-underline" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                    info@fearless-tattoo.at
                  </a>
                </div>
              </div>
              <Link
                href="/booking"
                data-hover
                className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80"
                style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}
              >
                Book a Session
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              {/* Map placeholder */}
              <div
                className="relative w-full flex items-center justify-center"
                style={{ height: '360px', background: '#0b0b0b', border: '1px solid rgba(200,169,106,0.1)' }}
              >
                <div className="text-center">
                  <p
                    className="text-[9px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}
                  >
                    Vienna, Austria
                  </p>
                  <p
                    className="text-2xl font-light"
                    style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(200,169,106,0.4)' }}
                  >
                    Fearless Inc Studio
                  </p>
                  <p
                    className="text-xs mt-3"
                    style={{ color: '#4a4540', fontFamily: 'var(--font-inter)' }}
                  >
                    Exact address shared upon booking confirmation
                  </p>
                </div>
                {/* Decorative cross */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div style={{ width: '1px', height: '100%', background: 'rgba(200,169,106,0.05)', position: 'absolute' }} />
                  <div style={{ height: '1px', width: '100%', background: 'rgba(200,169,106,0.05)', position: 'absolute' }} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
