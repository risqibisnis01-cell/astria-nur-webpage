import { Boxes, Factory, Leaf, PackageCheck, Ship, ShieldCheck } from 'lucide-react';

export const commodities = [
  {
    title: 'Agricultural Commodities',
    titleId: 'Komoditas Pertanian',
    description: 'Curated sourcing for coffee, spices, coconut derivatives, and seasonal Indonesian produce.',
    icon: Leaf,
  },
  {
    title: 'Manufactured Goods',
    titleId: 'Produk Manufaktur',
    description: 'Supplier coordination for consumer goods, furniture, packaging, and selected industrial products.',
    icon: Factory,
  },
  {
    title: 'Raw Materials',
    titleId: 'Bahan Baku',
    description: 'Partner-led procurement for raw materials with documentation and route planning support.',
    icon: Boxes,
  },
  {
    title: 'Quality & Compliance',
    titleId: 'Kepatuhan Dokumen',
    description: 'Document readiness, partner due diligence, and export-import compliance coordination.',
    icon: ShieldCheck,
  },
];

export const processSteps = [
  { title: 'Partner Discovery', description: 'Define buyer/seller requirements, country lane, and commodity fit.' },
  { title: 'Sourcing & Validation', description: 'Screen suppliers, documentation, samples, and commercial terms.' },
  { title: 'Logistics Coordination', description: 'Prepare shipment milestones, inspection points, and freight planning.' },
  { title: 'Delivery Support', description: 'Track handover, document completion, and post-shipment partner follow-up.' },
];

export const tradeStrengths = [
  { label: 'Port-to-partner coordination', icon: Ship },
  { label: 'Documentation readiness', icon: PackageCheck },
  { label: 'Supplier relationship network', icon: Boxes },
];
