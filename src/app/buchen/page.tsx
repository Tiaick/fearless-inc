'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const schritte = [
  { n: '01', title: 'Anfrage senden', desc: 'Formular mit deiner Idee, Körperstelle und Referenzen ausfüllen.' },
  { n: '02', title: 'Beratungsgespräch', desc: 'Petzko meldet sich persönlich innerhalb von 48 Stunden.' },
  { n: '03', title: 'Custom Design', desc: 'Ein exklusives Design wird erstellt und zur Freigabe geteilt.' },
  { n: '04', title: 'Die Session', desc: 'Transformation in ruhiger, steriler Studio-Atmosphäre.' },
  { n: '05', title: 'Nachsorge', desc: 'Detaillierte Pflegehinweise für perfekte, dauerhafte Heilung.' },
];

const tipps = [
  { t: 'Vorher essen', d: 'Ordentliche Mahlzeit 2–3 Stunden vorher stabilisiert den Blutzucker.' },
  { t: 'Gut hydratisiert', d: 'Gut hydrierte Haut nimmt Tinte gleichmäßiger auf.' },
  { t: 'Kein Alkohol', d: 'Kein Alkohol 24 h vorher — verdünnt Blut und beeinträchtigt Heilung.' },
  { t: 'Richtig kleiden', d: 'Kleidung wählen, die die Tattoostelle gut zugänglich macht.' },
  { t: 'Eincremen', d: 'Unparfümierte Feuchtigkeitscreme die Tage vor dem Termin.' },
  { t: 'Gut schlafen', d: 'Ausgeschlafen ist Körper und Geist ruhiger und fokussierter.' },
];

export default function BuchenPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', idea: '', placement: '', size: '', budget: '', notes: '' });
  const [sent, setSent] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <>
      {/* ─── PAGE HEADER ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg2)', paddingTop: 'clamp(100px, 14vw, 140px)', paddingBottom: '72px', borderBottom: '1px solid var(--border)' }}>
        <div className="r-page-header">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <span className="gold-bar" />
              <span className="f-label">Termine</span>
            </div>
            <h1 className="f-display" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', color: 'var(--white)', lineHeight: 0.9, marginBottom: '24px' }}>
              BUCHEN
            </h1>
            <p className="f-body" style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--dim)', maxWidth: '520px' }}>
              Deine Tattoo-Reise beginnt hier. Alle Termine starten mit einer Beratung — damit deine Vision präzise und sorgfältig umgesetzt wird.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── ABLAUF ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="r-section">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <span className="gold-bar" />
              <span className="f-label">So funktioniert es</span>
            </div>
            <h2 className="f-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--white)', marginBottom: '48px' }}>
              DER ABLAUF
            </h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2px', background: 'var(--border)' }}>
            {schritte.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 60}>
                <div style={{ background: 'var(--bg)', padding: '32px 24px' }}>
                  <div className="f-display" style={{ fontSize: '3.5rem', color: 'rgba(201,168,76,0.18)', lineHeight: 1, marginBottom: '12px' }}>{s.n}</div>
                  <h3 className="f-display" style={{ fontSize: '1.4rem', color: 'var(--white)', marginBottom: '10px' }}>{s.title}</h3>
                  <p className="f-body" style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--muted)' }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORMULAR ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
        <div className="r-section">
          <div className="r-grid-form">

            {/* LEFT — info */}
            <ScrollReveal>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <span className="gold-bar" />
                  <span className="f-label">Kontakt</span>
                </div>
                <h2 className="f-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--white)', marginBottom: '20px' }}>
                  TERMIN<br />ANFRAGEN
                </h2>
                <p className="f-body" style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '32px' }}>
                  Fülle das Formular aus — Petzko meldet sich innerhalb von 48 Stunden zurück.
                </p>
                {[
                  { lbl: 'E-Mail', val: 'info@fearles.ink', href: 'mailto:info@fearles.ink' },
                  { lbl: 'Telefon', val: '01522 2458669', href: 'tel:015222458669' },
                  { lbl: 'Instagram', val: '@fearless.tattoo', href: 'https://www.instagram.com/fearless.tattoo/' },
                  { lbl: 'Adresse', val: 'Königsberger Str. 2, 25479 Ellerau', href: null },
                ].map(item => (
                  <div key={item.lbl} style={{ marginBottom: '16px' }}>
                    <div className="f-label" style={{ fontSize: '0.55rem', marginBottom: '4px' }}>{item.lbl}</div>
                    {item.href ? (
                      <a href={item.href} className="u-link f-body" style={{ fontSize: '0.88rem', color: 'var(--dim)', textDecoration: 'none' }}>{item.val}</a>
                    ) : (
                      <p className="f-body" style={{ fontSize: '0.88rem', color: 'var(--dim)' }}>{item.val}</p>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* RIGHT — form */}
            <ScrollReveal className="delay-2">
              {sent ? (
                <div style={{ border: '1px solid var(--border)', background: 'var(--bg3)', padding: '64px', textAlign: 'center' }}>
                  <div className="f-display" style={{ fontSize: '5rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '20px' }}>✓</div>
                  <h3 className="f-display" style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '16px' }}>ANFRAGE ERHALTEN</h3>
                  <p className="f-body" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Petzko meldet sich innerhalb von 48 Stunden bei dir.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="r-grid-form-2">
                    <div>
                      <label className="input-label">Vollständiger Name *</label>
                      <input className="input" type="text" name="name" required value={form.name} onChange={set} placeholder="Dein Name" />
                    </div>
                    <div>
                      <label className="input-label">E-Mail-Adresse *</label>
                      <input className="input" type="email" name="email" required value={form.email} onChange={set} placeholder="deine@email.at" />
                    </div>
                  </div>

                  <div>
                    <label className="input-label">Telefon / Instagram</label>
                    <input className="input" type="text" name="phone" value={form.phone} onChange={set} placeholder="Telefonnummer oder @instagram" />
                  </div>

                  <div>
                    <label className="input-label">Tattoo-Idee *</label>
                    <textarea className="input" name="idea" required value={form.idea} onChange={set} rows={5} placeholder="Beschreibe deine Idee ausführlich — Motive, Symbolik, Stil, Referenzen…" style={{ resize: 'vertical', lineHeight: 1.7 }} />
                  </div>

                  <div className="r-grid-form-3">
                    <div>
                      <label className="input-label">Körperstelle *</label>
                      <input className="input" type="text" name="placement" required value={form.placement} onChange={set} placeholder="z.B. Unterarm" />
                    </div>
                    <div>
                      <label className="input-label">Größe</label>
                      <select className="input" name="size" value={form.size} onChange={set} style={{ appearance: 'none' }}>
                        <option value="" style={{ background: '#111' }}>Größe wählen</option>
                        <option value="s" style={{ background: '#111' }}>Klein (unter 5 cm)</option>
                        <option value="m" style={{ background: '#111' }}>Mittel (5–15 cm)</option>
                        <option value="l" style={{ background: '#111' }}>Groß (15–30 cm)</option>
                        <option value="xl" style={{ background: '#111' }}>Sehr groß (30 cm+)</option>
                        <option value="sleeve" style={{ background: '#111' }}>Vollärmel</option>
                      </select>
                    </div>
                    <div>
                      <label className="input-label">Budget</label>
                      <select className="input" name="budget" value={form.budget} onChange={set} style={{ appearance: 'none' }}>
                        <option value="" style={{ background: '#111' }}>Budget wählen</option>
                        <option value="u300" style={{ background: '#111' }}>Unter 300 €</option>
                        <option value="300-600" style={{ background: '#111' }}>300 – 600 €</option>
                        <option value="600-1200" style={{ background: '#111' }}>600 – 1.200 €</option>
                        <option value="o1200" style={{ background: '#111' }}>1.200 € +</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="input-label">Weitere Anmerkungen</label>
                    <textarea className="input" name="notes" value={form.notes} onChange={set} rows={3} placeholder="Referenzbilder, Cover-Up Anforderungen, sonstiges…" style={{ resize: 'vertical', lineHeight: 1.7 }} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '8px' }}>
                    <button type="submit" data-hover className="btn-gold">Anfrage senden →</button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── CAL.COM EMBED ───────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="r-section">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <span className="gold-bar" />
              <span className="f-label">Selbst buchen</span>
            </div>
            <h2 className="f-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--white)', marginBottom: '48px' }}>
              DIREKT BUCHEN
            </h2>
          </ScrollReveal>
          <ScrollReveal className="delay-1">
            <div style={{ border: '1px solid var(--border)', overflow: 'hidden', background: 'var(--bg2)' }}>
              <iframe
                src="https://www.cal.eu/fearless"
                width="100%"
                height="700"
                style={{ border: 0, display: 'block', colorScheme: 'dark' }}
                title="Termin buchen — Fearless Inc"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── TIPPS ───────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="r-section">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <span className="gold-bar" />
              <span className="f-label">Vorbereitung</span>
            </div>
            <h2 className="f-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--white)', marginBottom: '48px' }}>
              WIE DU DICH VORBEREITEST
            </h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {tipps.map((tp, i) => (
              <ScrollReveal key={tp.t} delay={i * 55}>
                <div className="card">
                  <div className="f-display" style={{ fontSize: '2.5rem', color: 'rgba(201,168,76,0.2)', lineHeight: 1, marginBottom: '14px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="f-display" style={{ fontSize: '1.4rem', color: 'var(--white)', marginBottom: '10px' }}>{tp.t}</h3>
                  <p className="f-body" style={{ fontSize: '0.83rem', lineHeight: 1.7, color: 'var(--muted)' }}>{tp.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
