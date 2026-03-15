'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function KontaktPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputStyle = {
    background: 'transparent',
    border: '1px solid rgba(200,169,106,0.2)',
    borderRadius: 0,
    color: '#f2f2f2',
    fontFamily: 'var(--font-inter)',
    fontWeight: 300,
    fontSize: '0.85rem',
    padding: '14px 16px',
    width: '100%',
    transition: 'border-color 0.3s ease',
  };
  const labelStyle = {
    display: 'block',
    fontSize: '0.6rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase' as const,
    color: '#8a8270',
    fontFamily: 'var(--font-inter)',
    marginBottom: '8px',
  };

  return (
    <>
      <section className="relative pt-40 pb-20" style={{ background: '#060606' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <p className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
              <span className="gold-line" />Kontakt
            </p>
            <h1 className="font-light leading-none mb-6" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}>
              <span className="block text-7xl md:text-9xl">Kontakt</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Kontaktinfos */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="flex flex-col gap-10">
                {/* Instagram */}
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Instagram</p>
                  <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" data-hover className="group flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-[#c8a96a]" style={{ border: '1px solid rgba(200,169,106,0.2)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#c8a96a' }}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm luxury-underline" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>@fearless.tattoo</p>
                      <p className="text-[10px] mt-0.5" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}>Täglich neue Arbeiten</p>
                    </div>
                  </a>
                </div>

                {/* Telefon */}
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Telefon</p>
                  <a href="tel:015222458669" data-hover className="group flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-[#c8a96a]" style={{ border: '1px solid rgba(200,169,106,0.2)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#c8a96a' }}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm luxury-underline" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>01522 2458669</p>
                      <p className="text-[10px] mt-0.5" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}>Mo–Fr 12:00–17:00 Uhr</p>
                    </div>
                  </a>
                </div>

                {/* E-Mail */}
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>E-Mail</p>
                  <a href="mailto:info@fearless-tattoo.at" data-hover className="group flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-[#c8a96a]" style={{ border: '1px solid rgba(200,169,106,0.2)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#c8a96a' }}>
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m2 7 10 7 10-7"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm luxury-underline" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>info@fearless-tattoo.at</p>
                      <p className="text-[10px] mt-0.5" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}>Antwort innerhalb 48 Std.</p>
                    </div>
                  </a>
                </div>

                {/* Adresse */}
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Adresse</p>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0" style={{ border: '1px solid rgba(200,169,106,0.2)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#c8a96a' }}>
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>Königsberger Str. 2</p>
                      <p className="text-sm" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>25479 Ellerau</p>
                    </div>
                  </div>
                </div>

                {/* Öffnungszeiten */}
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Öffnungszeiten</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { tag: 'Montag', zeit: '12:00 – 17:00' },
                      { tag: 'Dienstag', zeit: '12:00 – 17:00' },
                      { tag: 'Mittwoch', zeit: '12:00 – 17:00' },
                      { tag: 'Donnerstag', zeit: '12:00 – 17:00' },
                      { tag: 'Freitag', zeit: '12:00 – 17:00' },
                      { tag: 'Samstag', zeit: 'Geschlossen' },
                      { tag: 'Sonntag', zeit: 'Geschlossen' },
                    ].map(({ tag, zeit }) => (
                      <div key={tag} className="flex justify-between items-center py-1.5" style={{ borderBottom: '1px solid rgba(200,169,106,0.06)' }}>
                        <span className="text-xs" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)' }}>{tag}</span>
                        <span className="text-xs" style={{ color: zeit === 'Geschlossen' ? '#4a4540' : '#c0b8a8', fontFamily: 'var(--font-inter)' }}>{zeit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking CTA */}
                <div className="p-6" style={{ border: '1px solid rgba(200,169,106,0.12)', background: '#111111' }}>
                  <p className="text-sm font-light mb-2" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', fontSize: '1.1rem' }}>Termin buchen?</p>
                  <p className="text-xs leading-relaxed mb-5" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                    Nutze das Buchungsformular für deine Terminanfrage.
                  </p>
                  <Link href="/buchen" data-hover className="inline-flex text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80 px-6 py-3" style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
                    Jetzt buchen
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Formular */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={150}>
              <p className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
                <span className="gold-line" />Nachricht senden
              </p>
              <h2 className="text-4xl font-light mb-10 leading-tight" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}>
                Hast du eine Frage?<br /><em style={{ color: '#c8a96a' }}>Schreib uns.</em>
              </h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-24 px-8" style={{ border: '1px solid rgba(200,169,106,0.15)', background: '#111111' }}>
                  <span className="text-7xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: '#c8a96a', lineHeight: 1 }}>✓</span>
                  <h3 className="text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}>Nachricht gesendet</h3>
                  <p className="text-sm" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '320px' }}>
                    Danke für deine Nachricht. Wir melden uns innerhalb von 48 Stunden bei dir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label style={labelStyle}>Dein Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Vollständiger Name" style={inputStyle} className="placeholder:text-[#4a4540]" />
                    </div>
                    <div>
                      <label style={labelStyle}>E-Mail-Adresse *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="deine@email.at" style={inputStyle} className="placeholder:text-[#4a4540]" />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Betreff</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Worum geht es?" style={inputStyle} className="placeholder:text-[#4a4540]" />
                  </div>
                  <div>
                    <label style={labelStyle}>Nachricht *</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Schreib deine Nachricht..." rows={8} style={{ ...inputStyle, resize: 'vertical' as const, lineHeight: '1.8' }} className="placeholder:text-[#4a4540]" />
                  </div>
                  <div className="flex items-center justify-end">
                    <button type="submit" data-hover className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80" style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
                      Nachricht senden
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── KARTE ───────────────────────────────────────────────── */}
      <section style={{ background: '#060606', borderTop: '1px solid rgba(200,169,106,0.06)' }} className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="relative w-full overflow-hidden" style={{ height: '400px', border: '1px solid rgba(200,169,106,0.08)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365.0!2d9.9847!3d53.7236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zKiJLw7ZuaWdzcGVyZ2VyIFN0ci4gMiwgMjU0NzkgRWxsZXJhdQ!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.85) brightness(0.4)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fearless Inc Standort"
            />
            {/* Overlay label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(6,6,6,0.9), transparent)' }}>
              <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>Fearless Inc</p>
              <p className="text-sm font-light" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}>Königsberger Str. 2, 25479 Ellerau</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
