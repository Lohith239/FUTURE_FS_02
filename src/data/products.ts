import { Product } from '../types';

export const products: Product[] = [
  // Smartphones
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    price: 134900,
    description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system. Features 6.7-inch Super Retina XDR display.",
    category: "smartphones",
    brand: "Apple",
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.8, count: 1250 },
    specifications: ["A17 Pro Chip", "6.7-inch Display", "48MP Camera", "1TB Storage"]
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    price: 124999,
    description: "Premium Android flagship with S Pen, 200MP camera, and AI features. Perfect for productivity and photography.",
    category: "smartphones",
    brand: "Samsung",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.7, count: 980 },
    specifications: ["Snapdragon 8 Gen 3", "6.8-inch Display", "200MP Camera", "S Pen Included"]
  },
  {
    id: 3,
    title: "Google Pixel 8 Pro",
    price: 84999,
    description: "AI-powered photography with Magic Eraser, pure Android experience, and 7 years of updates.",
    category: "smartphones",
    brand: "Google",
    image: "https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.6, count: 756 },
    specifications: ["Google Tensor G3", "6.7-inch Display", "50MP Camera", "AI Photography"]
  },

  // Laptops
  {
    id: 4,
    title: "MacBook Pro 16-inch M3 Max",
    price: 399900,
    description: "Ultimate creative powerhouse with M3 Max chip, Liquid Retina XDR display, and all-day battery life.",
    category: "laptops",
    brand: "Apple",
    image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.9, count: 543 },
    specifications: ["M3 Max Chip", "16-inch Retina Display", "128GB RAM", "8TB SSD"]
  },
  {
    id: 5,
    title: "Dell XPS 15 OLED",
    price: 189999,
    description: "Premium Windows laptop with 4K OLED display, Intel Core i9, and NVIDIA RTX graphics.",
    category: "laptops",
    brand: "Dell",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.5, count: 432 },
    specifications: ["Intel Core i9", "15.6-inch OLED", "32GB RAM", "RTX 4070"]
  },
  {
    id: 6,
    title: "ASUS ROG Zephyrus G16",
    price: 249999,
    description: "Gaming laptop with AMD Ryzen 9, RTX 4080, and 240Hz display. Perfect for gaming and content creation.",
    category: "laptops",
    brand: "ASUS",
    image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.7, count: 678 },
    specifications: ["AMD Ryzen 9", "16-inch 240Hz", "32GB RAM", "RTX 4080"]
  },

  // Headphones & Audio
  {
    id: 7,
    title: "Sony WH-1000XM5",
    price: 29990,
    description: "Industry-leading noise canceling headphones with 30-hour battery life and premium sound quality.",
    category: "audio",
    brand: "Sony",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.8, count: 2340 },
    specifications: ["Active Noise Canceling", "30-hour Battery", "Hi-Res Audio", "Touch Controls"]
  },
  {
    id: 8,
    title: "Apple AirPods Pro (3rd Gen)",
    price: 24900,
    description: "Adaptive Audio with personalized spatial audio, advanced noise cancellation, and USB-C charging.",
    category: "audio",
    brand: "Apple",
    image: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.6, count: 1890 },
    specifications: ["Adaptive Audio", "6-hour Battery", "Spatial Audio", "USB-C Charging"]
  },
  {
    id: 9,
    title: "Bose QuietComfort Ultra",
    price: 34990,
    description: "Premium comfort with world-class noise cancellation and immersive spatial audio experience.",
    category: "audio",
    brand: "Bose",
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.7, count: 1234 },
    specifications: ["QuietComfort Technology", "24-hour Battery", "Spatial Audio", "Premium Materials"]
  },

  // Smartwatches
  {
    id: 10,
    title: "Apple Watch Series 9",
    price: 41900,
    description: "Advanced health monitoring, fitness tracking, and seamless iPhone integration with always-on display.",
    category: "wearables",
    brand: "Apple",
    image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.8, count: 1567 },
    specifications: ["S9 Chip", "Always-On Display", "ECG & Blood Oxygen", "45mm Case"]
  },
  {
    id: 11,
    title: "Samsung Galaxy Watch 6 Classic",
    price: 36999,
    description: "Rotating bezel navigation, comprehensive health tracking, and premium stainless steel design.",
    category: "wearables",
    brand: "Samsung",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.5, count: 892 },
    specifications: ["Rotating Bezel", "47mm Case", "Sleep Tracking", "5ATM Water Resistant"]
  },

  // Tablets
  {
    id: 12,
    title: "iPad Pro 12.9-inch M2",
    price: 112900,
    description: "Ultimate iPad experience with M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
    category: "tablets",
    brand: "Apple",
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.8, count: 743 },
    specifications: ["M2 Chip", "12.9-inch XDR Display", "Apple Pencil Support", "1TB Storage"]
  },
  {
    id: 13,
    title: "Samsung Galaxy Tab S9 Ultra",
    price: 94999,
    description: "Largest Android tablet with S Pen, AMOLED display, and desktop-class productivity features.",
    category: "tablets",
    brand: "Samsung",
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.6, count: 456 },
    specifications: ["Snapdragon 8 Gen 2", "14.6-inch AMOLED", "S Pen Included", "16GB RAM"]
  },

  // Gaming Accessories
  {
    id: 14,
    title: "PlayStation 5 DualSense Controller",
    price: 5990,
    description: "Revolutionary gaming controller with haptic feedback, adaptive triggers, and built-in microphone.",
    category: "gaming",
    brand: "Sony",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.7, count: 2134 },
    specifications: ["Haptic Feedback", "Adaptive Triggers", "Built-in Mic", "USB-C Charging"]
  },
  {
    id: 15,
    title: "Logitech MX Master 3S",
    price: 8999,
    description: "Advanced wireless mouse with ultra-precise scrolling, customizable buttons, and multi-device connectivity.",
    category: "accessories",
    brand: "Logitech",
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.8, count: 1876 },
    specifications: ["8K DPI Sensor", "70-day Battery", "Multi-device", "Customizable Buttons"]
  },

  // Cameras
  {
    id: 16,
    title: "Canon EOS R5",
    price: 329999,
    description: "Professional mirrorless camera with 45MP sensor, 8K video recording, and advanced autofocus system.",
    category: "cameras",
    brand: "Canon",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.9, count: 234 },
    specifications: ["45MP Full-Frame", "8K Video", "Dual Pixel AF", "5-axis Stabilization"]
  },
  {
    id: 17,
    title: "Sony Alpha A7 IV",
    price: 249999,
    description: "Versatile full-frame camera with 33MP sensor, 4K video, and exceptional low-light performance.",
    category: "cameras",
    brand: "Sony",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.8, count: 345 },
    specifications: ["33MP Full-Frame", "4K 60p Video", "693 AF Points", "5-axis Stabilization"]
  },

  // Power Banks & Chargers
  

  // Smart Home
  {
    id: 18,
    title: "Amazon Echo Dot (5th Gen)",
    price: 4999,
    description: "Compact smart speaker with Alexa, improved audio quality, and smart home control capabilities.",
    category: "smart-home",
    brand: "Amazon",
    image: "https://images.pexels.com/photos/4790268/pexels-photo-4790268.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.3, count: 5678 },
    specifications: ["Alexa Built-in", "Improved Audio", "Smart Home Hub", "Voice Control"]
  }
];

export const categories = [
  'all',
  'smartphones',
  'laptops',
  'audio',
  'wearables',
  'tablets',
  'gaming',
  'accessories',
  'cameras',
  'smart-home'
];
