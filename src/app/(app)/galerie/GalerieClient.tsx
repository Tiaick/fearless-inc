'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

type Kategorie = 'Alle' | 'Realism' | 'Fine Line' | 'Geometric' | 'Custom';
const kategorien: Kategorie[] = ['Alle', 'Realism', 'Fine Line', 'Geometric', 'Custom'];

export type GalerieItem = {
  id: string;
  src: string;
  alt: string;
  category: string;
  w: number;
  h: number;
};

export default function GalerieClient({ items }: { items: GalerieItem[] }) {
  const [aktiveKategorie, setAktiveKategorie] = useState<Kategorie>('Alle');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gefiltert = aktiveKategorie === 'Alle' ? items : items.filter(i => i.category === aktiveKategorie);

  const openLightbox = (i: number) => { setLightboxIndex(i); document.body.style.overflow = 'hidden'; };
  const closeLightbox = () => { setLightboxIndex(null); document.body.style.overflow = ''; };
  const prev = () => { if (lightboxIndex === null) return; setLightboxIndex((lightboxIndex - 1 + gefiltert.length) % gefiltert.length); };
  const next = () => { if (lightboxIndex === null) return; setLightboxIndex((lightboxIndex + 1) % gefiltert.length); };

  return (
    <>
      {/* ─── PAGE HEADER ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg2)', paddingTop: '140px', paddingBottom: '64px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <span className="gold-bar" />
              <span className="f-label">Portfolio</span>
            </div>
            <h1 className="f-display" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', color: 'var(--white)', lineHeight: 0.9, marginBottom: '20px' }}>
              GALERIE
            </h1>
            <p className="f-body" style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--dim)', maxWidth: '480px' }}>
              {items.length} Arbeiten — jedes Stück entstand aus Beratung, individuellem Design und präziser Ausführung.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FILTER BAR ───────────────────────────────────────────── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 30,
        background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto', paddingBottom: '1px' }}>
            {kategorien.map(kat => (
              <button
                key={kat}
                onClick={() => setAktiveKategorie(kat)}
                data-hover
                style={{
                  flexShrink: 0,
                  padding: '16px 20px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `2px solid ${aktiveKategorie === kat ? 'var(--gold)' : 'transparent'}`,
                  color: aktiveKategorie === kat ? 'var(--gold)' : 'var(--muted)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  cursor: 'none',
                  transition: 'color 0.25s ease, border-color 0.25s ease',
                }}
              >
                {kat}
                {aktiveKategorie === kat && (
                  <span style={{ marginLeft: '6px', opacity: 0.5, fontSize: '0.55rem' }}>
                    ({gefiltert.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── MASONRY GRID ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 40px 80px' }}>
          <div className="masonry">
            {gefiltert.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 35}>
                <button
                  onClick={() => openLightbox(i)}
                  data-hover
                  style={{ display: 'block', width: '100%', background: 'none', border: 'none', cursor: 'none', padding: 0, marginBottom: '10px' }}
                >
                  <div className="img-cell" style={{ display: 'block' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: `${item.w}/${item.h}`, overflow: 'hidden' }}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)',
                        opacity: 0, transition: 'opacity 0.35s ease',
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                        padding: '16px',
                      }}
                        className="img-overlay-info"
                      >
                        <span className="f-label" style={{ fontSize: '0.52rem', color: 'var(--gold)', marginBottom: '3px' }}>{item.category}</span>
                        <span className="f-body" style={{ fontSize: '0.8rem', color: 'var(--white)' }}>{item.alt}</span>
                      </div>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIGHTBOX ─────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.97)' }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            data-hover
            style={{ position: 'absolute', top: '24px', right: '24px', display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--dim)', cursor: 'none' }}
            className="f-label"
          >
            Schließen <X size={16} />
          </button>

          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '85vh' }} onClick={e => e.stopPropagation()}>
            <Image
              src={gefiltert[lightboxIndex].src}
              alt={gefiltert[lightboxIndex].alt}
              width={gefiltert[lightboxIndex].w}
              height={gefiltert[lightboxIndex].h}
              style={{ maxHeight: '85vh', width: 'auto', objectFit: 'contain' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div className="f-label" style={{ fontSize: '0.52rem', marginBottom: '4px' }}>{gefiltert[lightboxIndex].category}</div>
                <div className="f-body" style={{ fontSize: '0.88rem', color: 'var(--white)' }}>{gefiltert[lightboxIndex].alt}</div>
              </div>
              <span className="f-body" style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{lightboxIndex + 1} / {gefiltert.length}</span>
            </div>
          </div>

          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            data-hover
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', background: 'rgba(10,10,10,0.6)', color: 'var(--dim)', cursor: 'none', transition: 'border-color 0.25s, color 0.25s' }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={e => { e.stopPropagation(); next(); }}
            data-hover
            style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', background: 'rgba(10,10,10,0.6)', color: 'var(--dim)', cursor: 'none', transition: 'border-color 0.25s, color 0.25s' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '96px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '16px' }}>
              <span className="gold-bar" />
              <span className="f-label">Dein eigenes Werk</span>
              <span className="gold-bar" />
            </div>
            <h2 className="f-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'var(--white)', marginBottom: '20px' }}>
              INSPIRIERT?
            </h2>
            <p className="f-body" style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--muted)', maxWidth: '440px', margin: '0 auto 36px' }}>
              Folge auf Instagram für tägliche Arbeiten — oder buch direkt deinen Termin.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
              <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" data-hover className="btn-ghost" style={{ textDecoration: 'none' }}>
                @fearless.tattoo →
              </a>
              <Link href="/buchen" data-hover className="btn-gold" style={{ textDecoration: 'none' }}>
                Termin buchen
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
