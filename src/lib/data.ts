export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  category: "Press Ons" | "Gel Polish" | "Tools" | "Care";
  collection: "Bridal Atelier" | "Soft Glam" | "Chrome Edit" | "Salon Pro";
  badge?: string;
  rating: number;
  reviews: number;
  image: string;
  tones: string[];
  description: string;
};

export const products: Product[] = [
  {
    slug: "celeste-french-almond-set",
    name: "Celeste French Almond Set",
    price: 42,
    compareAt: 54,
    category: "Press Ons",
    collection: "Bridal Atelier",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 186,
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85",
    tones: ["#fff6f2", "#f6cbd1", "#d9b866"],
    description:
      "A couture almond press-on set with a whisper-thin French tip, salon-grade hold, and a soft bridal finish.",
  },
  {
    slug: "rose-glaze-builder-gel",
    name: "Rose Glaze Builder Gel",
    price: 28,
    category: "Gel Polish",
    collection: "Soft Glam",
    badge: "New",
    rating: 4.8,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=85",
    tones: ["#e9b8c1", "#fff2ec", "#181312"],
    description:
      "A self-leveling blush builder gel designed for glossy overlays, strengthening services, and clean-girl manicures.",
  },
  {
    slug: "champagne-chrome-powder",
    name: "Champagne Chrome Powder",
    price: 24,
    category: "Tools",
    collection: "Chrome Edit",
    badge: "Limited",
    rating: 4.7,
    reviews: 72,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    tones: ["#d6b15c", "#f4e7cb", "#fff"],
    description:
      "A finely milled metallic powder that melts into no-wipe top coat for a warm champagne mirror effect.",
  },
  {
    slug: "velvet-cuticle-oil",
    name: "Velvet Cuticle Oil",
    price: 19,
    category: "Care",
    collection: "Salon Pro",
    rating: 4.9,
    reviews: 221,
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
    tones: ["#f4d9d7", "#d2a850", "#1f1a18"],
    description:
      "A lightweight botanical oil with rosehip, jojoba, and vitamin E for a polished finish between appointments.",
  },
  {
    slug: "noir-bow-coffin-set",
    name: "Noir Bow Coffin Set",
    price: 48,
    category: "Press Ons",
    collection: "Soft Glam",
    badge: "Editor Pick",
    rating: 4.8,
    reviews: 138,
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=85",
    tones: ["#171211", "#f7dbe0", "#e5c675"],
    description:
      "A dramatic coffin silhouette with black micro-bow accents for clients who want polished evening glamour.",
  },
  {
    slug: "pro-detailing-brush-suite",
    name: "Pro Detailing Brush Suite",
    price: 36,
    category: "Tools",
    collection: "Salon Pro",
    rating: 4.6,
    reviews: 66,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
    tones: ["#111", "#b9914f", "#fff6ef"],
    description:
      "A five-piece precision brush suite for French lines, chrome placement, micro art, and flawless cleanup.",
  },
];

export const collections = [
  {
    name: "Bridal Atelier",
    href: "/collections",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    copy: "Soft pearlescent finishes, French silhouettes, and aisle-ready elegance.",
  },
  {
    name: "Chrome Edit",
    href: "/collections",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
    copy: "High-shine powders and reflective sets built for statement manicures.",
  },
  {
    name: "Salon Pro",
    href: "/training-courses",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85",
    copy: "Artist-grade tools, education, and client-retention essentials.",
  },
];

export const testimonials = [
  {
    quote:
      "The redesign makes the brand feel immediately premium. I can find sets, training, and care products without hunting.",
    name: "Arielle M.",
    role: "Loyal client",
  },
  {
    quote:
      "The product cards and quick actions feel like a luxury beauty store, not a small catalogue.",
    name: "Nia R.",
    role: "Salon owner",
  },
  {
    quote:
      "The training page finally explains value clearly. It feels confident, polished, and easy to book.",
    name: "Simone K.",
    role: "Beginner nail tech",
  },
];
