'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const schritte = [
  { num: '01', title: 'Anfrage senden', desc: 'Fülle das Formular mit deiner Idee, Körperstelle, Größe und Referenzbildern aus.' },
  { num: '02', title: 'Beratungsgespräch', desc: 'Petzko meldet sich, um dein Konzept zu besprechen und sicherzustellen, dass es zu deiner Vision passt.' },
  { num: '03', title: 'Custom Design', desc: 'Ein maßgeschneidertes Design wird exklusiv für dich erstellt — vor der Session zur Freigabe geteilt.' },
  { num: '04', title: 'Die Session', desc: 'Erlebe die Transformation in einer ruhigen, sterilen und fokussierten Studio-Atmosphäre.' },
  { num: '05', title: 'Nachsorge', desc: 'Detaillierte Pflegehinweise sorgen dafür, dass dein Tattoo perfekt heilt und ein Leben lang hält.' },
];

const tipps = [
  { title: 'Vorher essen', desc: 'Iss 2–3 Stunden vor der Session eine ordentliche Mahlzeit, um den Blutzucker stabil zu halten.' },
  { title: 'Gut trinken', desc: 'Gut hydrierte Haut nimmt Tinte gleichmäßiger auf. Trink in den Tagen davor ausreichend Wasser.' },
  { title: 'Kein Alkohol', desc: 'Kein Alkohol 24 Stunden vor dem Termin — er verdünnt das Blut und beeinträchtigt die Heilung.' },
  { title: 'Richtig anziehen', desc: 'Trag Kleidung oder bring etwas mit, das leichten Zugang zur Tattoostelle ermöglicht.' },
  { title: 'Eincremen', desc: 'Trag in den Tagen vor dem Termin unparfümierte Feuchtigkeitscreme auf die entsprechende Stelle auf.' },
  { title: 'Gut ausschlafen', desc: 'Eine gute Nacht Schlaf vor der Session hilft Körper und Geist, ruhig und fokussiert zu bleiben.' },
];

export default function BuchenPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', idea: '', placement: '', size: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      {/* ─── HEADER ───────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20" style={{ background: '#060606' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <p className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
              <span className="gold-line" />Termine
            </p>
            <h1 className="font-light leading-none mb-6" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}>
              <span className="block text-7xl md:text-9xl">Buchen</span>
            </h1>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
              Deine Tattoo-Reise beginnt hier. Alle Termine starten mit einer Beratung, um sicherzustellen, dass deine Vision präzise und sorgfältig umgesetzt wird.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── ABLAUF ──────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24">
        <ScrollReveal>
          <p className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
            <span className="gold-line" />So funktioniert es
          </p>
          <h2 className="text-4xl md:text-6xl font-light mb-16 leading-tight" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}>
            Der <em style={{ color: '#c8a96a' }}>Ablauf</em>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-0">
          {schritte.map((schritt, i) => (
            <ScrollReveal key={schritt.num} delay={i * 60}>
              <div className="grid grid-cols-[auto,1fr] gap-8 py-8 group" style={{ borderBottom: '1px solid rgba(200,169,106,0.08)' }}>
                <span className="text-5xl font-light pt-0.5" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(200,169,106,0.25)', lineHeight: 1 }}>{schritt.num}</span>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                  <h3 className="text-2xl font-light md:min-w-[220px]" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.01em' }}>{schritt.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{schritt.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── FORMULAR ────────────────────────────────────────────── */}
      <section style={{ background: '#060606' }} className="py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
                  <span className="gold-line" />Kontakt
                </p>
                <h2 className="text-4xl font-light mb-8 leading-tight" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}>
                  Termin<br /><em style={{ color: '#c8a96a' }}>anfragen</em>
                </h2>
                <p className="text-sm leading-relaxed mb-10" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                  Fülle das Formular aus und Petzko meldet sich innerhalb von 48 Stunden zurück, um deine Idee zu besprechen und einen Termin festzulegen.
                </p>
                <div className="flex flex-col gap-4 mb-10">
                  {[
                    { label: 'E-Mail', value: 'info@fearless-tattoo.at', href: 'mailto:info@fearless-tattoo.at' },
                    { label: 'Instagram', value: '@fearless.tattoo', href: 'https://www.instagram.com/fearless.tattoo/' },
                    { label: 'Standort', value: 'Wien, Österreich', href: null },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm luxury-underline" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{item.value}</a>
                      ) : (
                        <p className="text-sm" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="img-overlay hidden lg:block">
                  <Image src="https://picsum.photos/seed/booking-img/500/600" alt="Studio Atmosphäre" width={500} height={600} className="w-full object-cover" style={{ filter: 'grayscale(0.3) brightness(0.7)' }} />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8">
              <ScrollReveal delay={150}>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-24 px-8" style={{ border: '1px solid rgba(200,169,106,0.15)', background: '#111111' }}>
                    <span className="text-7xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: '#c8a96a', lineHeight: 1 }}>✓</span>
                    <h3 className="text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}>Anfrage erhalten</h3>
                    <p className="text-sm" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300, maxWidth: '340px' }}>
                      Danke für deine Anfrage. Petzko wird sie prüfen und sich innerhalb von 48 Stunden bei dir melden.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label style={labelStyle}>Vollständiger Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Dein Name" style={inputStyle} className="placeholder:text-[#4a4540]" />
                      </div>
                      <div>
                        <label style={labelStyle}>E-Mail-Adresse *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="deine@email.at" style={inputStyle} className="placeholder:text-[#4a4540]" />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Telefon / Instagram</label>
                      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefonnummer oder @instagram" style={inputStyle} className="placeholder:text-[#4a4540]" />
                    </div>
                    <div>
                      <label style={labelStyle}>Tattoo-Idee *</label>
                      <textarea name="idea" required value={formData.idea} onChange={handleChange} placeholder="Beschreibe deine Tattoo-Idee ausführlich — Motive, Symbolik, Stilwünsche..." rows={5} style={{ ...inputStyle, resize: 'vertical' as const, lineHeight: '1.7' }} className="placeholder:text-[#4a4540]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label style={labelStyle}>Körperstelle *</label>
                        <input type="text" name="placement" required value={formData.placement} onChange={handleChange} placeholder="z.B. Unterarm, Rippen" style={inputStyle} className="placeholder:text-[#4a4540]" />
                      </div>
                      <div>
                        <label style={labelStyle}>Ungefähre Größe</label>
                        <select name="size" value={formData.size} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' as const }}>
                          <option value="" style={{ background: '#111111' }}>Größe wählen</option>
                          <option value="small" style={{ background: '#111111' }}>Klein (unter 5 cm)</option>
                          <option value="medium" style={{ background: '#111111' }}>Mittel (5–15 cm)</option>
                          <option value="large" style={{ background: '#111111' }}>Groß (15–30 cm)</option>
                          <option value="xlarge" style={{ background: '#111111' }}>Sehr groß (30 cm+)</option>
                          <option value="sleeve" style={{ background: '#111111' }}>Vollärmel / Körperarbeit</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Budget-Rahmen</label>
                        <select name="budget" value={formData.budget} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' as const }}>
                          <option value="" style={{ background: '#111111' }}>Budget wählen</option>
                          <option value="under300" style={{ background: '#111111' }}>Unter 300 €</option>
                          <option value="300-600" style={{ background: '#111111' }}>300 € – 600 €</option>
                          <option value="600-1200" style={{ background: '#111111' }}>600 € – 1.200 €</option>
                          <option value="over1200" style={{ background: '#111111' }}>1.200 € +</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Weitere Anmerkungen</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Referenzbilder, Inspiration, Cover-Up Anforderungen oder sonstiges..." rows={3} style={{ ...inputStyle, resize: 'vertical' as const, lineHeight: '1.7' }} className="placeholder:text-[#4a4540]" />
                    </div>
                    <div className="flex items-center justify-between gap-6 pt-2">
                      <p className="text-[10px] leading-relaxed" style={{ color: '#4a4540', fontFamily: 'var(--font-inter)', maxWidth: '300px' }}>
                        Mit dem Absenden stimmst du zu, von Fearless Inc bezüglich deiner Anfrage kontaktiert zu werden.
                      </p>
                      <button type="submit" data-hover className="shrink-0 inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80" style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
                        Anfrage senden
                      </button>
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIPPS ───────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-24">
        <ScrollReveal>
          <p className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
            <span className="gold-line" />Vorbereitung
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16 leading-tight" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}>
            Wie du dich <em style={{ color: '#c8a96a' }}>vorbereitest</em>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tipps.map((tipp, i) => (
            <ScrollReveal key={tipp.title} delay={i * 60}>
              <div className="p-8 hover:border-[rgba(200,169,106,0.3)] transition-all duration-500" style={{ border: '1px solid rgba(200,169,106,0.1)', background: '#111111' }}>
                <span className="text-4xl font-light block mb-3" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(200,169,106,0.3)', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}>{tipp.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>{tipp.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
