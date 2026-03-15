'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

type Kategorie = 'Alle' | 'Blackwork' | 'Realism' | 'Fine Line' | 'Geometric' | 'Custom';

const galerieItems = [
  { id: 1, src: 'https://picsum.photos/seed/g1/600/800', alt: 'Dunkler Sleeve Blackwork', category: 'Blackwork', w: 600, h: 800 },
  { id: 2, src: 'https://picsum.photos/seed/g2/600/600', alt: 'Realistisches Wolfsportrait', category: 'Realism', w: 600, h: 600 },
  { id: 3, src: 'https://picsum.photos/seed/g3/600/900', alt: 'Fine Line Botanik', category: 'Fine Line', w: 600, h: 900 },
  { id: 4, src: 'https://picsum.photos/seed/g4/600/600', alt: 'Geometrisches Mandala', category: 'Geometric', w: 600, h: 600 },
  { id: 5, src: 'https://picsum.photos/seed/g5/600/700', alt: 'Custom dunkle Blumen', category: 'Custom', w: 600, h: 700 },
  { id: 6, src: 'https://picsum.photos/seed/g6/600/600', alt: 'Blackwork Brust', category: 'Blackwork', w: 600, h: 600 },
  { id: 7, src: 'https://picsum.photos/seed/g7/600/800', alt: 'Realism Tiger', category: 'Realism', w: 600, h: 800 },
  { id: 8, src: 'https://picsum.photos/seed/g8/600/600', alt: 'Fine Line Portrait', category: 'Fine Line', w: 600, h: 600 },
  { id: 9, src: 'https://picsum.photos/seed/g9/600/600', alt: 'Heilige Geometrie', category: 'Geometric', w: 600, h: 600 },
  { id: 10, src: 'https://picsum.photos/seed/g10/600/900', alt: 'Custom Schlange', category: 'Custom', w: 600, h: 900 },
  { id: 11, src: 'https://picsum.photos/seed/g11/600/600', alt: 'Abstraktes Blackwork', category: 'Blackwork', w: 600, h: 600 },
  { id: 12, src: 'https://picsum.photos/seed/g12/600/700', alt: 'Realism Hand', category: 'Realism', w: 600, h: 700 },
  { id: 13, src: 'https://picsum.photos/seed/g13/600/600', alt: 'Fine Line Mond', category: 'Fine Line', w: 600, h: 600 },
  { id: 14, src: 'https://picsum.photos/seed/g14/600/800', alt: 'Ornamentale Geometrie', category: 'Geometric', w: 600, h: 800 },
  { id: 15, src: 'https://picsum.photos/seed/g15/600/600', alt: 'Custom Koi', category: 'Custom', w: 600, h: 600 },
];

const kategorien: Kategorie[] = ['Alle', 'Blackwork', 'Realism', 'Fine Line', 'Geometric', 'Custom'];

export default function GaleriePage() {
  const [aktiveKategorie, setAktiveKategorie] = useState<Kategorie>('Alle');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gefiltert = aktiveKategorie === 'Alle' ? galerieItems : galerieItems.filter(item => item.category === aktiveKategorie);

  const openLightbox = (index: number) => { setLightboxIndex(index); document.body.style.overflow = 'hidden'; };
  const closeLightbox = () => { setLightboxIndex(null); document.body.style.overflow = ''; };
  const prevImage = () => { if (lightboxIndex === null) return; setLightboxIndex((lightboxIndex - 1 + gefiltert.length) % gefiltert.length); };
  const nextImage = () => { if (lightboxIndex === null) return; setLightboxIndex((lightboxIndex + 1) % gefiltert.length); };

  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: '#060606' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-12">
            <div>
              <p className="text-[9px] tracking-[0.45em] uppercase mb-5 flex items-center gap-4" style={{ color: '#c8a96a', fontFamily: 'var(--font-inter)' }}>
                <span className="gold-line" />Portfolio
              </p>
              <h1 className="font-light leading-none" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.03em' }}>
                <span className="block text-7xl md:text-9xl">Galerie</span>
                <span className="block text-lg md:text-xl mt-4" style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, letterSpacing: '0.2em', color: '#8a8270', fontSize: '0.8rem' }}>
                  {galerieItems.length} ARBEITEN · WIEN
                </span>
              </h1>
            </div>
            <div className="max-w-sm">
              <p className="text-sm leading-relaxed" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
                Jedes Stück ist eine einzigartige Zusammenarbeit — entstanden aus Beratung, individuellem Design und präziser Ausführung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b" style={{ background: 'rgba(6,6,6,0.95)', backdropFilter: 'blur(20px)', borderColor: 'rgba(200,169,106,0.08)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center gap-0 overflow-x-auto py-4">
            {kategorien.map((kat) => (
              <button key={kat} onClick={() => setAktiveKategorie(kat)} data-hover
                className="shrink-0 px-5 py-2 text-[10px] tracking-[0.25em] uppercase transition-all duration-300 border-b-2"
                style={{ fontFamily: 'var(--font-inter)', color: aktiveKategorie === kat ? '#c8a96a' : '#8a8270', borderColor: aktiveKategorie === kat ? '#c8a96a' : 'transparent', background: 'transparent' }}
              >
                {kat}
                {aktiveKategorie === kat && <span className="ml-2 text-[8px]" style={{ color: '#c8a96a', opacity: 0.6 }}>({gefiltert.length})</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="masonry-grid">
          {gefiltert.map((item, i) => (
            <div key={item.id} className="masonry-item">
              <ScrollReveal delay={i * 40}>
                <button className="img-overlay block w-full text-left group" onClick={() => openLightbox(i)} data-hover>
                  <div className="relative overflow-hidden w-full" style={{ aspectRatio: `${item.w}/${item.h}` }}>
                    <Image src={item.src} alt={item.alt} fill className="object-cover" style={{ filter: 'grayscale(0.2) contrast(1.1)' }} />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}>
                      <span className="num-indicator block mb-1">{item.category}</span>
                      <span className="text-sm font-light" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}>{item.alt}</span>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400" style={{ background: 'rgba(200,169,106,0.15)', border: '1px solid rgba(200,169,106,0.4)' }}>
                      <span style={{ color: '#c8a96a', fontSize: '18px', lineHeight: 1 }}>+</span>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.96)' }} onClick={closeLightbox}>
          <button className="absolute top-6 right-6 z-10 flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase" style={{ color: '#c0b8a8', fontFamily: 'var(--font-inter)' }} onClick={closeLightbox} data-hover>
            Schließen <X size={16} />
          </button>
          <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={gefiltert[lightboxIndex].src} alt={gefiltert[lightboxIndex].alt} width={gefiltert[lightboxIndex].w} height={gefiltert[lightboxIndex].h} className="object-contain" style={{ maxHeight: '85vh', width: 'auto', filter: 'contrast(1.05)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
              <div>
                <span className="num-indicator block mb-0.5">{gefiltert[lightboxIndex].category}</span>
                <span className="text-sm font-light" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2' }}>{gefiltert[lightboxIndex].alt}</span>
              </div>
              <span className="text-xs" style={{ color: '#8a8270', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>{lightboxIndex + 1} / {gefiltert.length}</span>
            </div>
          </div>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border transition-colors duration-300 hover:border-[#c8a96a] hover:text-[#c8a96a]" style={{ borderColor: 'rgba(200,169,106,0.3)', color: '#c0b8a8' }} onClick={(e) => { e.stopPropagation(); prevImage(); }} data-hover>
            <ChevronLeft size={18} />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border transition-colors duration-300 hover:border-[#c8a96a] hover:text-[#c8a96a]" style={{ borderColor: 'rgba(200,169,106,0.3)', color: '#c0b8a8' }} onClick={(e) => { e.stopPropagation(); nextImage(); }} data-hover>
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      <section className="py-28" style={{ background: '#111111', borderTop: '1px solid rgba(200,169,106,0.06)' }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2f2f2', letterSpacing: '-0.02em' }}>
              Inspiriert?<br /><em style={{ color: '#c8a96a' }}>Lass uns deins kreieren.</em>
            </h2>
            <p className="text-sm mb-10 max-w-md mx-auto" style={{ color: '#8a8270', fontFamily: 'var(--font-inter)', fontWeight: 300 }}>
              Folge auf Instagram für tägliche Arbeiten und Studio-Updates.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://www.instagram.com/fearless.tattoo/" target="_blank" rel="noopener noreferrer" data-hover className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase border transition-all duration-500 hover:border-[#c8a96a] hover:text-[#c8a96a]" style={{ borderColor: 'rgba(200,169,106,0.3)', color: '#c0b8a8', fontFamily: 'var(--font-inter)' }}>
                @fearless.tattoo
              </a>
              <a href="/buchen" data-hover className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80" style={{ background: '#c8a96a', color: '#0b0b0b', fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
                Termin buchen
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
