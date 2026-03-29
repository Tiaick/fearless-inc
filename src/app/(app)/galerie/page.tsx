import { getGalerieBilder, getMediaUrl } from '@/lib/payload';
import GalerieClient, { GalerieItem } from './GalerieClient';

const FALLBACK_ITEMS: GalerieItem[] = [
  { id: '1',  src: '/images/tattoo-01.jpeg', alt: 'Tattoo Fine Line',  category: 'Fine Line', w: 600, h: 800 },
  { id: '2',  src: '/images/tattoo-02.jpeg', alt: 'Tattoo Fine Line',  category: 'Fine Line', w: 600, h: 600 },
  { id: '3',  src: '/images/tattoo-03.jpeg', alt: 'Tattoo Fine Line',  category: 'Fine Line', w: 600, h: 750 },
  { id: '4',  src: '/images/tattoo-04.jpeg', alt: 'Tattoo Fine Line',  category: 'Fine Line', w: 600, h: 600 },
  { id: '5',  src: '/images/tattoo-05.jpeg', alt: 'Tattoo Fine Line',  category: 'Fine Line', w: 600, h: 800 },
  { id: '6',  src: '/images/tattoo-06.jpeg', alt: 'Tattoo Fine Line',  category: 'Fine Line', w: 600, h: 600 },
  { id: '7',  src: '/images/tattoo-07.jpeg', alt: 'Tattoo Fine Line',  category: 'Fine Line', w: 600, h: 750 },
  { id: '8',  src: '/images/tattoo-08.jpeg', alt: 'Tattoo Fine Line',  category: 'Fine Line', w: 600, h: 600 },
  { id: '9',  src: '/images/tattoo-09.jpeg', alt: 'Tattoo Geometric',  category: 'Geometric', w: 600, h: 800 },
  { id: '10', src: '/images/tattoo-10.jpeg', alt: 'Tattoo Geometric',  category: 'Geometric', w: 600, h: 600 },
  { id: '11', src: '/images/tattoo-11.jpeg', alt: 'Tattoo Geometric',  category: 'Geometric', w: 600, h: 750 },
  { id: '12', src: '/images/tattoo-12.jpeg', alt: 'Tattoo Geometric',  category: 'Geometric', w: 600, h: 600 },
  { id: '13', src: '/images/tattoo-13.jpeg', alt: 'Tattoo Geometric',  category: 'Geometric', w: 600, h: 800 },
  { id: '14', src: '/images/tattoo-14.jpeg', alt: 'Tattoo Geometric',  category: 'Geometric', w: 600, h: 600 },
  { id: '15', src: '/images/tattoo-15.jpeg', alt: 'Tattoo Geometric',  category: 'Geometric', w: 600, h: 750 },
  { id: '16', src: '/images/tattoo-16.jpeg', alt: 'Tattoo Geometric',  category: 'Geometric', w: 600, h: 600 },
  { id: '17', src: '/images/tattoo-17.jpeg', alt: 'Tattoo Realism',    category: 'Realism',   w: 600, h: 800 },
  { id: '18', src: '/images/tattoo-18.jpeg', alt: 'Tattoo Realism',    category: 'Realism',   w: 600, h: 600 },
  { id: '19', src: '/images/tattoo-19.jpeg', alt: 'Tattoo Realism',    category: 'Realism',   w: 600, h: 750 },
  { id: '20', src: '/images/tattoo-20.jpeg', alt: 'Tattoo Realism',    category: 'Realism',   w: 600, h: 600 },
  { id: '21', src: '/images/tattoo-21.jpeg', alt: 'Tattoo Realism',    category: 'Realism',   w: 600, h: 800 },
  { id: '22', src: '/images/tattoo-22.jpeg', alt: 'Tattoo Realism',    category: 'Realism',   w: 600, h: 600 },
  { id: '23', src: '/images/tattoo-23.jpeg', alt: 'Tattoo Realism',    category: 'Realism',   w: 600, h: 750 },
  { id: '24', src: '/images/tattoo-24.jpeg', alt: 'Tattoo Realism',    category: 'Realism',   w: 600, h: 600 },
  { id: '25', src: '/images/tattoo-25.jpeg', alt: 'Tattoo Realism',    category: 'Realism',   w: 600, h: 800 },
  { id: '26', src: '/images/tattoo-26.jpeg', alt: 'Tattoo Custom',     category: 'Custom',    w: 600, h: 600 },
  { id: '27', src: '/images/tattoo-27.jpeg', alt: 'Tattoo Custom',     category: 'Custom',    w: 600, h: 750 },
  { id: '28', src: '/images/tattoo-28.jpeg', alt: 'Tattoo Custom',     category: 'Custom',    w: 600, h: 600 },
  { id: '29', src: '/images/tattoo-29.jpeg', alt: 'Tattoo Custom',     category: 'Custom',    w: 600, h: 800 },
  { id: '30', src: '/images/tattoo-30.jpeg', alt: 'Tattoo Custom',     category: 'Custom',    w: 600, h: 600 },
  { id: '31', src: '/images/tattoo-31.jpeg', alt: 'Tattoo Custom',     category: 'Custom',    w: 600, h: 750 },
  { id: '32', src: '/images/tattoo-32.jpeg', alt: 'Tattoo Custom',     category: 'Custom',    w: 600, h: 600 },
  { id: '33', src: '/images/tattoo-33.jpeg', alt: 'Tattoo Custom',     category: 'Custom',    w: 600, h: 800 },
];

async function getGalerieItems(): Promise<GalerieItem[]> {
  const data = await getGalerieBilder();
  if (!data || data.length === 0) return FALLBACK_ITEMS;
  return data.map((item: { id: string; image: { url?: string; width?: number; height?: number }; alt: string; category: string }) => ({
    id: item.id,
    src: getMediaUrl(item.image) ?? '',
    alt: item.alt,
    category: item.category,
    w: item.image?.width || 600,
    h: item.image?.height || 800,
  })).filter((i: GalerieItem) => i.src);
}

export default async function GaleriePage() {
  const items = await getGalerieItems();
  return <GalerieClient items={items} />;
}
