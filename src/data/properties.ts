export type PropertyStatus = 'Available' | 'Limited' | 'Reserved';
export type PropertyPurpose = 'rent' | 'sale';
export type PropertyType = 'Residential' | 'Commercial';

export type Property = {
  id: string;
  name: string;
  purpose: PropertyPurpose;
  location: string;
  type: PropertyType;
  price: string;
  status: PropertyStatus;
  image: string;
  alt: string;
  size: string;
  description: string;
  highlights: string[];
};

export const properties: Property[] = [
  {
    id: 'jakarta-residence-rent',
    name: 'Menteng Executive Residence',
    purpose: 'rent',
    location: 'Menteng, Jakarta',
    type: 'Residential',
    price: 'IDR 185 jt / tahun',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern residential interior with refined neutral finishes',
    size: '210 m2',
    description:
      'Rumah tinggal premium dekat pusat bisnis Jakarta dengan akses cepat ke sekolah, perkantoran, dan fasilitas kesehatan.',
    highlights: ['3 bedrooms', 'Private parking', 'Near CBD'],
  },
  {
    id: 'bandung-shophouse-sale',
    name: 'Dago Commercial Shophouse',
    purpose: 'sale',
    location: 'Dago, Bandung',
    type: 'Commercial',
    price: 'IDR 4.8 M',
    status: 'Limited',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    alt: 'Commercial building facade in an urban district',
    size: '320 m2',
    description:
      'Ruko strategis untuk kantor cabang, showroom, atau bisnis hospitality di koridor komersial Bandung.',
    highlights: ['Main road access', '3 floors', 'High visibility'],
  },
  {
    id: 'surabaya-office-rent',
    name: 'Surabaya Business Suite',
    purpose: 'rent',
    location: 'Tegalsari, Surabaya',
    type: 'Commercial',
    price: 'IDR 72 jt / tahun',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bright office suite with desks and city light',
    size: '95 m2',
    description:
      'Unit kantor siap pakai untuk tim operasional, konsultan, atau representative office di Surabaya pusat.',
    highlights: ['Ready office', 'Lift access', 'Flexible lease'],
  },
  {
    id: 'bali-villa-sale',
    name: 'Sanur Garden Villa',
    purpose: 'sale',
    location: 'Sanur, Bali',
    type: 'Residential',
    price: 'IDR 7.2 M',
    status: 'Reserved',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Contemporary villa with pool and tropical landscaping',
    size: '410 m2',
    description:
      'Villa investasi dengan konsep tropis modern, suitable untuk keluarga atau hospitality rental portfolio.',
    highlights: ['Pool', 'Garden court', 'Tourism corridor'],
  },
  {
    id: 'bekasi-warehouse-rent',
    name: 'Bekasi Logistics Warehouse',
    purpose: 'rent',
    location: 'Cikarang, Bekasi',
    type: 'Commercial',
    price: 'IDR 950 jt / tahun',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warehouse racks and logistics aisle',
    size: '1,800 m2',
    description:
      'Gudang operasional dekat kawasan industri dan akses tol untuk distribusi regional Jabodetabek.',
    highlights: ['Loading dock', 'Industrial access', 'High ceiling'],
  },
  {
    id: 'yogyakarta-house-sale',
    name: 'Sleman Family Estate',
    purpose: 'sale',
    location: 'Sleman, Yogyakarta',
    type: 'Residential',
    price: 'IDR 2.6 M',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Family home exterior with driveway and landscaped frontage',
    size: '180 m2',
    description:
      'Hunian keluarga di area berkembang dengan lingkungan tenang dan akses baik ke kampus serta pusat kota.',
    highlights: ['Family area', 'Growing district', 'Freehold placeholder'],
  },
];

export const propertyLocations = Array.from(new Set(properties.map((property) => property.location)));
export const propertyTypes = Array.from(new Set(properties.map((property) => property.type)));
