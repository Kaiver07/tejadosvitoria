// ============================================================
// DATOS DEL NEGOCIO (sin dependencias de assets de imagen)
// Se separa de site.config.ts para que scripts fuera de Astro/Vite
// (p. ej. scripts/generate-blog-post.ts, ejecutado con tsx) puedan
// importar estos datos sin arrastrar los imports de imágenes .webp
// de los servicios, que solo Vite/Astro sabe resolver.
// ============================================================
export const site = {
  name: 'Tejados Vitoria',
  tagline: 'Expertos en Tejados y Cubiertas en Vitoria-Gasteiz',
  phone: '+34945492939',
  phoneDisplay: '945 49 29 39',
  email: 'info@reparaciondetejadosvitoria.es',
  address: {
    street: 'Paseo de la Zumaquera, 15',
    postalCode: '01006',
    city: 'Vitoria-Gasteiz',
    province: 'Álava',
    region: 'País Vasco',
    country: 'ES',
  },
  geo: { lat: 42.8358, lng: -2.665 },
  social: {
    facebook: 'https://www.facebook.com/people/Reparaci%C3%B3n-de-Tejados-Vitoria/61592724928709/',
    instagram: 'https://www.instagram.com/reparaciondetejadosvitoria/',
  },
  hours: 'Lun–Dom 7:00–21:00 · Urgencias 24h',
  openingHours: [{ days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], opens: '07:00', closes: '21:00' }],
  yearsExperience: 18,
  priceRange: '€€',
  domain: 'reparaciondetejadosvitoria.es',
  url: 'https://reparaciondetejadosvitoria.es',
  locale: 'es_ES',
  lang: 'es',
  schemaType: 'RoofingContractor',
  formAccessKey: '4155ef0e-f3ca-45d8-84df-9332924fafb0',
  gaMeasurementId: 'G-M2Q34T9BJ3',

  // SEO defaults
  defaultTitle: 'Reparación de Tejados Vitoria-Gasteiz | 945 49 29 39',
  defaultDescription:
    'Reparación e instalación de tejados en Vitoria-Gasteiz con garantía por escrito. Presupuesto gratis, 18 años de experiencia y urgencias 24h.',
  defaultOgImage: '/images/og-default.jpg',

  // Marca (colores documentados — se aplican en global.css vía @theme)
  colors: { primary: '#1e3a5f', secondary: '#e85d04', accent: '#f4a261' },

  // Titular del sitio: autónomo (persona física), no sociedad — sin CIF ni Registro Mercantil.
  legal: {
    legalName: 'Andrea Iglesias Magalde',
    nif: '71706738Y',
    tradeName: 'Tejados Vitoria',
  },
};
