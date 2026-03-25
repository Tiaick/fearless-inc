'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const zeiten = [
  ['Montag',     '12:00 – 17:00'],
  ['Dienstag',   '12:00 – 17:00'],
  ['Mittwoch',   '12:00 – 17:00'],
  ['Donnerstag', '12:00 – 17:00'],
  ['Freitag',    '12:00 – 17:00'],
  ['Samstag',    'Geschlossen'],
  ['Sonntag',    'Geschlossen'],
];

export default function KontaktPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <>
      {/* ─── PAGE HEADER ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg2)', paddingTop: 'clamp(100px, 14vw, 140px)', paddingBottom: '64px', borderBottom: '1px solid var(--border)' }}>
        <div className="r-page-header">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <span className="gold-bar" />
              <span className="f-label">Kontakt</span>
            </div>
            <h1 className="f-display" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', color: 'var(--white)', lineHeight: 0.9, marginBottom: '24px' }}>
              KONTAKT
            </h1>
            <p className="f-body" style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--dim)', maxWidth: '480px' }}>
              Fragen, Ideen oder Feedback — wir antworten innerhalb von 48 Stunden.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── HAUPT-GRID ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="r-section">
          <div className="r-grid-sidebar-380">

            {/* ── LINKE SPALTE: Info ───────────────────────────────── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

              {/* Kontaktpunkte */}
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                  ),
                  label: 'Instagram',
                  value: '@fearless.tattoo',
                  sub: 'Täglich neue Arbeiten',
                  href: 'https://www.instagram.com/fearless.tattoo/',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  label: 'Telefon',
                  value: '01522 2458669',
                  sub: 'Mo–Fr 12:00–17:00 Uhr',
                  href: 'tel:015222458669',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m2 7 10 7 10-7"/>
                    </svg>
                  ),
                  label: 'E-Mail',
                  value: 'info@fearles.ink',
                  sub: 'Antwort innerhalb 48 Std.',
                  href: 'mailto:info@fearles.ink',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: 'Adresse',
                  value: 'Königsberger Str. 2',
                  sub: '25479 Ellerau',
                  href: null,
                },
              ].map((item) => (
                <ScrollReveal key={item.label}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ width: '40px', height: '40px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--gold)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="f-label" style={{ fontSize: '0.55rem', marginBottom: '4px' }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer" className="u-link f-body"
                          style={{ fontSize: '0.92rem', color: 'var(--white)', textDecoration: 'none', display: 'block', marginBottom: '2px' }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="f-body" style={{ fontSize: '0.92rem', color: 'var(--white)', marginBottom: '2px' }}>{item.value}</p>
                      )}
                      <p className="f-body" style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{item.sub}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Öffnungszeiten */}
              <ScrollReveal>
                <div style={{ paddingTop: '28px', paddingBottom: '28px', borderBottom: '1px solid var(--border)' }}>
                  <div className="f-label" style={{ marginBottom: '16px' }}>Sprechzeiten</div>
                  {zeiten.map(([tag, zeit]) => (
                    <div key={tag} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px' }}>
                      <span className="f-body" style={{ fontSize: '0.82rem', color: 'var(--dim)' }}>{tag}</span>
                      <span className="f-body" style={{ fontSize: '0.82rem', color: zeit === 'Geschlossen' ? 'var(--muted)' : 'var(--white)', opacity: zeit === 'Geschlossen' ? 0.4 : 1 }}>
                        {zeit}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Buchen CTA */}
              <ScrollReveal>
                <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '28px', marginTop: '28px' }}>
                  <div className="f-display" style={{ fontSize: '1.6rem', color: 'var(--white)', marginBottom: '8px' }}>
                    TERMIN BUCHEN?
                  </div>
                  <p className="f-body" style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                    Nutze das Buchungsformular für deine Terminanfrage.
                  </p>
                  <Link href="/buchen" data-hover className="btn-gold" style={{ textDecoration: 'none' }}>
                    Jetzt buchen →
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* ── RECHTE SPALTE: Formular ──────────────────────────── */}
            <div>
              <ScrollReveal>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <span className="gold-bar" />
                  <span className="f-label">Nachricht senden</span>
                </div>
                <h2 className="f-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', color: 'var(--white)', marginBottom: '36px', lineHeight: 0.95 }}>
                  HAST DU EINE<br />FRAGE?
                </h2>
              </ScrollReveal>

              <ScrollReveal className="delay-1">
                {sent ? (
                  <div style={{ border: '1px solid var(--border)', background: 'var(--bg2)', padding: '64px 40px', textAlign: 'center' }}>
                    <div className="f-display" style={{ fontSize: '5rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '20px' }}>✓</div>
                    <h3 className="f-display" style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '12px' }}>NACHRICHT GESENDET</h3>
                    <p className="f-body" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Wir melden uns innerhalb von 48 Stunden.</p>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSent(true); }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div className="r-grid-form-2">
                      <div>
                        <label className="input-label">Dein Name *</label>
                        <input className="input" type="text" name="name" required
                          value={form.name} onChange={set} placeholder="Vollständiger Name" />
                      </div>
                      <div>
                        <label className="input-label">E-Mail-Adresse *</label>
                        <input className="input" type="email" name="email" required
                          value={form.email} onChange={set} placeholder="deine@email.at" />
                      </div>
                    </div>

                    <div>
                      <label className="input-label">Betreff</label>
                      <input className="input" type="text" name="subject"
                        value={form.subject} onChange={set} placeholder="Worum geht es?" />
                    </div>

                    <div>
                      <label className="input-label">Nachricht *</label>
                      <textarea className="input" name="message" required
                        value={form.message} onChange={set} rows={8}
                        placeholder="Schreib deine Nachricht…"
                        style={{ resize: 'vertical', lineHeight: 1.7 }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
                      <button type="submit" data-hover className="btn-gold">
                        Nachricht senden →
                      </button>
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KARTE ───────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="r-page-header">
          <div style={{ position: 'relative', height: '380px', overflow: 'hidden', border: '1px solid var(--border)', borderTop: 'none' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365.8935!2d9.98012!3d53.72485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b20cbdca4adb35%3A0x0!2zS8O2bmlnc2JlcmdlciBTdHIuIDIsIDI1NDc5IEVsbGVyYXU!5e0!3m2!1sde!2sde!4v1700000000000"
              width="100%" height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.88) contrast(0.9) brightness(0.38) sepia(0.2)' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fearless Inc Standort"
            />
            {/* Overlay label */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 28px', background: 'linear-gradient(to top, rgba(10,10,10,0.95), transparent)', pointerEvents: 'none' }}>
              <div className="f-label" style={{ marginBottom: '4px' }}>Fearless Inc</div>
              <p className="f-body" style={{ fontSize: '0.9rem', color: 'var(--white)' }}>Königsberger Str. 2, 25479 Ellerau</p>
            </div>
            {/* Maps link */}
            <a
              href="https://maps.google.com/?q=Königsberger+Str.+2,+25479+Ellerau"
              target="_blank" rel="noopener noreferrer"
              data-hover
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--bg)', border: '1px solid var(--border)', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
              className="f-label"
            >
              In Maps öffnen ↗
            </a>
          </div>
        </div>
        <div style={{ height: '40px' }} />
      </section>
    </>
  );
}
