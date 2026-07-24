// ============================================================
// ARCHIVO MAESTRO DE CONFIGURACIÓN
// Para clonar a otro sitio: modifica SOLO este archivo.
// ============================================================

import type { ImageMetadata } from 'astro';

import reparacionTejadosImg from '../images/reparacion-tejados-vitoria-new.webp';
import instalacionTejadosNuevosImg from '../images/instalacion-tejados-nuevos-vitoria.webp';
import impermeabilizacionCubiertasImg from '../images/impermeabilizacion-cubiertas-vitoria.webp';
import reparacionGoterasImg from '../images/reparacion-goteras-vitoria.webp';
import instalacionCanalonesImg from '../images/instalacion-canalones-vitoria.webp';
import retejadoImg from '../images/retejado-vitoria-new.webp';
import claraboyasVeluxImg from '../images/claraboyas-velux-vitoria-new.webp';
import aislamientoCubiertasImg from '../images/aislamiento-cubiertas-vitoria-new.webp';
import rehabilitacionFachadasImg from '../images/rehabilitacion-fachadas-vitoria-new.webp';
import limpiezaTejadosImg from '../images/limpieza-tejados-vitoria-new.webp';
import panelSandwichImg from '../images/panel-sandwich-vitoria-new.webp';
import cubiertasIndustrialesImg from '../images/cubiertas-industriales-vitoria-new.webp';

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceContent {
  intro: string[];
  whatWeDo: string[];
  whenToCall: string[];
  faqs: ServiceFAQ[];
}

export interface ServiceConfig {
  slug: string;
  name: string;
  shortDesc: string;
  title: string;
  metaDescription: string;
  h1: string;
  content: ServiceContent;
  relatedServices: string[];
  image: { src: ImageMetadata; alt: string };
}

export interface Zone {
  name: string;
  slug: string;
  description: string;
  localInfo: string;
}

// ============================================================
// DATOS DEL NEGOCIO
// ============================================================
export const site = {
  name: 'Tejados Vitoria Express',
  tagline: 'Expertos en Tejados y Cubiertas en Vitoria-Gasteiz',
  phone: '+34945492939',
  phoneDisplay: '945 49 29 39',
  email: 'info@reparaciondetejadosvitoria.es',
  address: {
    street: 'Av. de Naciones Unidas, 19',
    postalCode: '01015',
    city: 'Vitoria-Gasteiz',
    province: 'Álava',
    region: 'País Vasco',
    country: 'ES',
  },
  geo: { lat: 42.846, lng: -2.6985 },
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

  legal: {
    companyName: 'Tejados Vitoria Express S.L.',
    cif: 'B01000000',
    registroMercantil: 'Registro Mercantil de Álava, Tomo 123, Folio 45, Hoja VI-1234',
  },

  // ============================================================
  // SERVICIOS
  // ============================================================
  services: [
    {
      slug: 'reparacion-de-tejados',
      name: 'Reparación de Tejados',
      shortDesc: 'Diagnóstico y reparación de cualquier daño en tejado, con garantía por escrito y actuación en 24 horas.',
      title: 'Reparación de Tejados en Vitoria | 945 49 29 39',
      metaDescription:
        'Reparamos tejados en Vitoria-Gasteiz con diagnóstico gratuito y actuación en 24h. Garantía por escrito y presupuesto cerrado sin sorpresas.',
      h1: 'Reparación de Tejados en Vitoria-Gasteiz',
      content: {
        intro: [
          'El tejado es el elemento más expuesto de cualquier edificio. En Vitoria-Gasteiz, el clima continental atlántico combina precipitaciones frecuentes en otoño e invierno con heladas que agravan las grietas existentes. Tejados Vitoria Express lleva 18 años reparando tejados en toda la comarca de Álava, desde intervenciones puntuales de urgencia hasta <a href="/servicio/retejado-sustitucion-de-tejas/">rehabilitaciones completas de cubierta</a>.',
          'Una reparación a tiempo evita daños mucho más costosos: una <a href="/servicio/reparacion-de-goteras-y-humedades/">gotera no atendida</a> puede llegar a pudrir la estructura de madera, deteriorar el aislamiento e incluso afectar al interior del inmueble. Nuestro equipo realiza una inspección gratuita con diagnóstico fotográfico antes de cualquier presupuesto, para que sepas exactamente qué se va a hacer y cuánto va a costar. No comenzamos ningún trabajo sin tu aprobación expresa.',
          'Trabajamos tanto en viviendas particulares como en comunidades de propietarios, locales comerciales y edificios históricos del casco de Vitoria. Utilizamos materiales homologados para el clima de Álava —tejas antihielo, morteros de reparación de alta resistencia, <a href="/servicio/impermeabilizacion-de-cubiertas/">impermeabilizantes elastoméricos</a>— y aplicamos garantía de mano de obra de 2 años en todas nuestras intervenciones.',
        ],
        whatWeDo: [
          'Sustitución de tejas rotas, agrietadas o desplazadas',
          'Sellado y rejuntado de cumbrera, limahoyas y aleros',
          'Reparación de faldones y enrastrelado deteriorado',
          'Revisión y refuerzo de la estructura de madera',
          'Reparación de chimeneas y lucernarios integrados en cubierta',
          'Sellado de juntas y puntos singulares con filtraciones',
          'Inspección post-tormenta y reportaje fotográfico para seguros',
        ],
        whenToCall: [
          'Manchas de humedad o moho en el techo o paredes superiores',
          'Tejas rotas, desplazadas o visiblemente levantadas',
          'Goteras activas durante la lluvia, aunque sean pequeñas',
          'Presencia de agua o filtraciones en el desván',
          'Tras una tormenta fuerte, granizo o período de heladas',
          'Antes de vender la vivienda (revisión preventiva)',
        ],
        faqs: [
          {
            q: '¿Cuánto tarda una reparación de tejado en Vitoria?',
            a: 'Las reparaciones puntuales —sustitución de tejas rotas, sellado de una zona— suelen completarse en una mañana de trabajo. Reparaciones de mayor alcance pueden requerir 2 o 3 días. Siempre confirmamos el plazo exacto en el presupuesto antes de comenzar.',
          },
          {
            q: '¿Necesito pedir licencia para reparar mi tejado?',
            a: 'En general, las reparaciones de conservación y mantenimiento no requieren licencia de obras en Vitoria-Gasteiz. Si la reparación afecta a elementos estructurales o al aspecto exterior en zonas de especial protección, puede ser necesaria una comunicación previa al Ayuntamiento. Te orientamos sin compromiso.',
          },
          {
            q: '¿Con qué garantía trabajan?',
            a: 'Ofrecemos 2 años de garantía de mano de obra por escrito en todas las reparaciones. Los materiales aplican además la garantía del fabricante, que según el producto puede alcanzar 10 o 15 años.',
          },
          {
            q: '¿Trabajáis en alturas con andamio o con técnicas verticales?',
            a: 'Dependiendo de la altura y configuración del tejado usamos andamio tubular (obligatorio por PRL en alturas superiores a 2 metros) o técnicas de trabajos verticales con arneses certificados. El coste del andamio siempre va incluido en el presupuesto, sin letra pequeña.',
          },
        ],
      },
      relatedServices: ['reparacion-de-goteras-y-humedades', 'retejado-sustitucion-de-tejas', 'impermeabilizacion-de-cubiertas'],
      image: { src: reparacionTejadosImg, alt: 'Reparación de tejado en Vitoria-Gasteiz por especialistas' },
    },
    {
      slug: 'instalacion-de-tejados-nuevos',
      name: 'Instalación de Tejados Nuevos',
      shortDesc: 'Instalamos tejados nuevos a medida con materiales de primera calidad adaptados al clima de Álava.',
      title: 'Tejados Nuevos en Vitoria-Gasteiz | 945 49 29 39',
      metaDescription:
        'Instalación de tejados nuevos en Vitoria-Gasteiz con teja cerámica, hormigón o pizarra. Presupuesto gratis y garantía de 10 años.',
      h1: 'Instalación de Tejados Nuevos en Vitoria-Gasteiz',
      content: {
        intro: [
          'Cuando un tejado ha llegado al final de su vida útil o estás construyendo de nuevo, la instalación correcta desde el origen marca la diferencia durante las próximas décadas. Si el problema es puntual —unas pocas tejas rotas o un daño localizado— probablemente te baste con una <a href="/servicio/reparacion-de-tejados/">reparación de tejado</a> más económica; si en cambio la estructura hay que rehacerla o cambias el tipo de cubierta, es más bien un caso de <a href="/servicio/retejado-sustitucion-de-tejas/">retejado</a> o de instalación completa. En Tejados Vitoria Express diseñamos e instalamos tejados nuevos a medida en Vitoria-Gasteiz y toda la comarca de Álava, con materiales de primera calidad seleccionados para resistir las condiciones climáticas del País Vasco.',
          'Un tejado nuevo bien ejecutado combina tres funciones críticas: estanqueidad total frente al agua, buen <a href="/servicio/aislamiento-de-cubiertas/">aislamiento térmico y acústico</a>, y durabilidad estructural durante décadas. Trabajamos con teja cerámica, de hormigón y pizarra natural, y utilizamos como base láminas impermeabilizantes transpirables de alta duración que garantizan la estanqueidad incluso si alguna teja superficial se desplaza.',
          'Cada instalación comienza con un proyecto personalizado: calculamos la pendiente óptima, la capacidad de carga de la estructura, el volumen de evacuación de agua y el tipo de teja más adecuado para el edificio. Coordinamos con su arquitecto técnico si la obra lo requiere y gestionamos la documentación necesaria.',
        ],
        whatWeDo: [
          'Diseño de cubierta según pendiente, carga y estilo arquitectónico',
          'Instalación de estructura de madera laminada o metálica (cabios, correas, rastreles)',
          'Colocación de lámina impermeabilizante transpirable de alta duración',
          'Montaje de teja cerámica antihielo, de hormigón o pizarra natural',
          'Instalación de cumbreras, limahoyas, caballetes y aleros',
          'Integración de canalones, bajantes y piezas especiales',
          'Acabados de chimeneas, claraboyas y pasos de instalaciones',
        ],
        whenToCall: [
          'Construcción de vivienda nueva o ampliación de edificio existente',
          'Tejado antiguo con más de 30 años y deterioro generalizado',
          'Cambio de tipología de cubierta (plana a inclinada o viceversa)',
          'Rehabilitación integral del edificio que incluye la cubierta',
        ],
        faqs: [
          {
            q: '¿Cuánto cuesta instalar un tejado nuevo en Vitoria?',
            a: 'El precio depende de la superficie, la pendiente, el tipo de teja elegida y si hay que renovar también la estructura. Como orientación, una instalación completa oscila entre 80 y 150 €/m². Pedimos siempre una visita previa para presupuestar con precisión.',
          },
          {
            q: '¿Qué tipo de teja recomiendan para el clima de Vitoria-Gasteiz?',
            a: 'Para el clima de Álava recomendamos teja cerámica esmaltada o de hormigón de alta resistencia a la helada (norma UNE-EN 1304, clase F2). La pizarra natural también es excelente por su longevidad (80-100 años) y su hermeticidad excepcional.',
          },
          {
            q: '¿Gestionan los permisos de obra?',
            a: 'Te orientamos sobre la documentación necesaria para el Ayuntamiento de Vitoria-Gasteiz. Colaboramos habitualmente con aparejadores y arquitectos para la tramitación completa si el proyecto lo requiere.',
          },
          {
            q: '¿Cuánto dura la instalación de un tejado nuevo?',
            a: 'Una vivienda unifamiliar estándar de 150 a 200 m² suele instalarse entre 5 y 8 días hábiles una vez iniciada la obra. Proyectos más grandes o con detalles arquitectónicos complejos pueden requerir más tiempo.',
          },
        ],
      },
      relatedServices: ['retejado-sustitucion-de-tejas', 'aislamiento-de-cubiertas', 'reparacion-de-tejados'],
      image: { src: instalacionTejadosNuevosImg, alt: 'Instalación de tejado nuevo en Vitoria-Gasteiz con teja cerámica' },
    },
    {
      slug: 'impermeabilizacion-de-cubiertas',
      name: 'Impermeabilización de Cubiertas',
      shortDesc: 'Impermeabilizamos cubiertas planas e inclinadas con sistemas de larga duración y garantía de estanqueidad.',
      title: 'Impermeabilizar Cubierta en Vitoria | 945 49 29 39',
      metaDescription:
        'Impermeabilización de cubiertas planas e inclinadas en Vitoria-Gasteiz. Garantía de estanqueidad de 10 años. Presupuesto sin compromiso.',
      h1: 'Impermeabilización de Cubiertas en Vitoria-Gasteiz',
      content: {
        intro: [
          'La impermeabilización es el tratamiento imprescindible para cualquier cubierta que presente filtraciones, acumulación de agua o un revestimiento antiguo que haya perdido sus propiedades. En Vitoria-Gasteiz, las abundantes lluvias de otoño e invierno —con una media de 700 litros por metro cuadrado al año— hacen que una cubierta mal impermeabilizada sea fuente constante de <a href="/servicio/reparacion-de-goteras-y-humedades/">goteras y humedades</a>. Si además de la humedad tu tejado tiene tejas rotas o desplazadas, puede que el problema sea más bien de <a href="/servicio/reparacion-de-tejados/">reparación de tejado</a> que de impermeabilización.',
          'En Tejados Vitoria Express aplicamos sistemas de impermeabilización adaptados a cada tipo de cubierta: láminas bituminosas, membranas de PVC o TPO, pinturas elastoméricas de poliuretano y sistemas de cubierta vegetal. Seleccionamos el sistema más adecuado según la pendiente, el uso de la cubierta, el presupuesto y la durabilidad deseada —y si buscas además reducir la factura energética, podemos combinarlo con un <a href="/servicio/aislamiento-de-cubiertas/">aislamiento de cubierta</a>—, y ofrecemos garantía de estanqueidad por escrito.',
        ],
        whatWeDo: [
          'Impermeabilización de cubiertas planas con lámina EPDM, PVC o betún modificado',
          'Impermeabilización de cubiertas inclinadas con láminas transpirables bajo teja',
          'Aplicación de pinturas y membranas de poliuretano líquido en azoteas',
          'Instalación de cubiertas invertidas y cubiertas vegetales',
          'Reparación y renovación de impermeabilizaciones existentes',
          'Sellado de puntos críticos: sumideros, juntas de dilatación, encuentros con paramentos',
        ],
        whenToCall: [
          'Cubierta plana (azotea) con charcos persistentes o filtraciones',
          'Humedades en forjado o muros bajo la cubierta',
          'Impermeabilización con más de 15-20 años sin renovar',
          'Burbujas o separaciones visibles en la lámina actual',
          'Antes de instalar una cubierta vegetal o solarium sobre azotea',
        ],
        faqs: [
          {
            q: '¿Cuánto dura una impermeabilización de cubierta?',
            a: 'Depende del sistema aplicado. Las láminas de EPDM tienen vida útil de 30-50 años. Las membranas de PVC y betún modificado de 15-25 años. Las pinturas elastoméricas de 10-15 años con mantenimiento. Siempre recomendamos el sistema más duradero adecuado a cada caso.',
          },
          {
            q: '¿Es necesario retirar la impermeabilización antigua?',
            a: 'En muchos casos se puede aplicar la nueva impermeabilización sobre la existente si esta está adherida y sin burbujas. Si hay separaciones o acumulación de agua entre capas, retiramos la capa vieja antes de aplicar la nueva. Lo evaluamos en la visita previa.',
          },
          {
            q: '¿Puedo impermeabilizar mi azotea para usarla como terraza?',
            a: 'Sí. Aplicamos sistemas de impermeabilización transitables con capa de acabado antideslizante apta para uso peatonal. También instalamos cubiertas invertidas con grava o cubierta vegetal extensiva para terrazas ajardinadas.',
          },
        ],
      },
      relatedServices: ['reparacion-de-goteras-y-humedades', 'aislamiento-de-cubiertas', 'reparacion-de-tejados'],
      image: { src: impermeabilizacionCubiertasImg, alt: 'Impermeabilización de cubierta plana en Vitoria-Gasteiz' },
    },
    {
      slug: 'reparacion-de-goteras-y-humedades',
      name: 'Reparación de Goteras y Humedades',
      shortDesc: 'Localizamos y reparamos el origen de cualquier gotera o humedad por cubierta, con garantía de estanqueidad.',
      title: 'Reparación Goteras y Humedades Vitoria | 945 49 29 39',
      metaDescription:
        'Localizamos y reparamos el origen real de tu gotera en Vitoria-Gasteiz, sin perforar paredes. Urgencias 24h y presupuesto gratis.',
      h1: 'Reparación de Goteras y Humedades en Vitoria-Gasteiz',
      content: {
        intro: [
          'Una gotera no es solo una molestia: puede arruinar aislamientos, dañar estructuras de madera, generar moho y reducir el valor del inmueble. Lo más frustrante de las goteras es que el punto donde aparece el agua en el techo rara vez coincide con el origen real del problema, que puede estar a metros de distancia. En muchos casos el origen no está en la teja sino en unos <a href="/servicio/instalacion-de-canalones/">canalones obstruidos o mal instalados</a> que desbordan agua hacia la cubierta. Por eso, antes de reparar nada, localizamos con precisión el origen.',
          'En Tejados Vitoria Express utilizamos técnicas de detección específicas —inspección visual con diagnóstico fotográfico, pruebas de inundación controlada y análisis de la trayectoria del agua según la geometría de la cubierta— para garantizar que reparamos el foco real y no solo los síntomas. Si detectamos tejas rotas o desplazadas durante la inspección, resolvemos también esa <a href="/servicio/reparacion-de-tejados/">reparación de tejado</a> en la misma visita, y si la humedad viene de una cubierta plana con filtraciones extendidas, a veces la solución pasa por una <a href="/servicio/impermeabilizacion-de-cubiertas/">impermeabilización completa</a> en lugar de un sellado puntual. Atendemos urgencias 24 horas cualquier día de la semana, porque una gotera durante la noche no puede esperar al lunes.',
        ],
        whatWeDo: [
          'Diagnóstico preciso del origen de la filtración (sin perforaciones innecesarias)',
          'Reparación de tejas rotas, desplazadas o con juntas deterioradas',
          'Sellado de puntos singulares: chimeneas, lucernarios, encuentros con paramentos',
          'Reparación de limahoyas y cumbreras con acumulación de agua',
          'Sellado de grietas en faldones y aleros',
          'Impermeabilización puntual de zonas problemáticas',
          'Revisión de canalones y bajantes obstruidos como fuente de filtraciones',
        ],
        whenToCall: [
          'Mancha de humedad en el techo, aunque sea pequeña',
          'Gotera activa durante la lluvia',
          'Olor a humedad o moho en la última planta',
          'Pintura que se levanta o despella en techo superior',
          'Después de granizo o viento fuerte',
          'Antes de iniciar una reforma interior (revisar que la cubierta esté sana)',
        ],
        faqs: [
          {
            q: '¿Podéis reparar goteras un sábado o domingo?',
            a: 'Sí. Atendemos urgencias 7 días a la semana, incluyendo fines de semana y festivos. Llama al 945 49 29 39 y enviamos técnico en el menor tiempo posible.',
          },
          {
            q: '¿Por qué el origen de la gotera suele estar lejos de donde cae el agua?',
            a: 'El agua penetra por un punto de la cubierta y viaja a lo largo de la estructura hasta encontrar un hueco por donde caer. Es habitual que recorra 2 o 3 metros antes de aparecer en el techo. Por eso la inspección visual del tejado es imprescindible antes de reparar.',
          },
          {
            q: '¿Qué garantía dais en la reparación de goteras?',
            a: 'Ofrecemos 2 años de garantía de mano de obra por escrito. Si en ese período vuelve a aparecer una filtración en el mismo punto, volvemos sin coste adicional.',
          },
        ],
      },
      relatedServices: ['impermeabilizacion-de-cubiertas', 'reparacion-de-tejados', 'instalacion-de-canalones'],
      image: { src: reparacionGoterasImg, alt: 'Reparación de gotera en tejado en Vitoria-Gasteiz' },
    },
    {
      slug: 'instalacion-de-canalones',
      name: 'Instalación de Canalones',
      shortDesc: 'Instalamos y reparamos canalones y bajantes de aluminio, zinc o PVC con acabados a medida.',
      title: 'Instalación de Canalones en Vitoria | 945 49 29 39',
      metaDescription:
        'Instalación y reparación de canalones de aluminio, zinc o PVC en Vitoria-Gasteiz. Montaje en un día. Presupuesto gratis.',
      h1: 'Instalación de Canalones en Vitoria-Gasteiz',
      content: {
        intro: [
          'Los canalones y bajantes son la red de evacuación del tejado: recogen el agua de lluvia del alero y la conducen hasta el desagüe. Cuando fallan —por rotura, obstrucción, mala pendiente o juntas abiertas— el agua se desborda sobre la fachada, provoca <a href="/servicio/reparacion-de-goteras-y-humedades/">humedades por capilaridad</a> en los muros y puede llegar a afectar a los cimientos. En Vitoria-Gasteiz, con sus lluvias intensas de otoño, un sistema de canalones en mal estado es un problema que se nota rápidamente.',
          'En Tejados Vitoria Express instalamos y reparamos canalones y bajantes de aluminio lacado, zinc natural, acero galvanizado y PVC. Si el canalón se obstruye con frecuencia por hojas y ramas, puede que necesites antes una <a href="/servicio/limpieza-de-tejados/">limpieza de tejado</a> que resuelva el problema de raíz; y cuando la filtración ya ha dañado el propio tejado, revisamos también si hace falta una <a href="/servicio/reparacion-de-tejados/">reparación de tejado</a> además del canalón. Calculamos la sección adecuada en función de la superficie de tejado a drenar y la intensidad de lluvia de la zona, y garantizamos una pendiente correcta para evitar estancamientos y desbordamientos.',
        ],
        whatWeDo: [
          'Instalación completa de canalones de aluminio lacado, zinc o PVC',
          'Sustitución de canalones rotos, deformados u oxidados',
          'Reparación de juntas, esquinas y soldaduras abiertas',
          'Limpieza y desobstrucción de canalones con acumulación de hojas',
          'Instalación de bajantes y conexión a red de saneamiento',
          'Montaje de cuelgues y abrazaderas con separación correcta',
          'Instalación de rejillas antihojas y cierres de protección',
        ],
        whenToCall: [
          'Canalón que desborda durante la lluvia aunque no esté obstruido',
          'Agua que cae directamente sobre la fachada desde el alero',
          'Canalones rotos, hundidos o separados de la fachada',
          'Humedades en la parte baja de fachada o arranque de muro',
          'Manchas de óxido o pintura desprendida bajo el canalón',
        ],
        faqs: [
          {
            q: '¿Qué material es mejor para canalones en Vitoria?',
            a: 'El aluminio lacado es la opción más equilibrada: ligero, resistente a la corrosión, disponible en muchos colores RAL y de fácil mantenimiento. El zinc natural es más estético y duradero (60-80 años) pero más caro. El PVC es económico pero menos robusto en climas con heladas.',
          },
          {
            q: '¿Con qué frecuencia hay que limpiar los canalones?',
            a: 'En Vitoria, con presencia de arbolado en muchos barrios, recomendamos limpiar los canalones una o dos veces al año: en primavera (tras la caída de semillas) y en otoño (tras la caída de hojas), o contratar una <a href="/servicio/limpieza-de-tejados/">limpieza de tejado</a> periódica que incluya también los canalones. Una limpieza preventiva cuesta mucho menos que reparar los daños de un desbordamiento.',
          },
          {
            q: '¿Cuánto cuesta instalar canalones nuevos?',
            a: 'El precio orientativo es de 15 a 35 €/metro lineal instalado, dependiendo del material y la sección. En la visita previa calculamos la longitud total y te damos un presupuesto detallado sin compromiso.',
          },
        ],
      },
      relatedServices: ['reparacion-de-tejados', 'reparacion-de-goteras-y-humedades', 'limpieza-de-tejados'],
      image: { src: instalacionCanalonesImg, alt: 'Instalación de canalones de aluminio en tejado en Vitoria-Gasteiz' },
    },
    {
      slug: 'retejado-sustitucion-de-tejas',
      name: 'Retejado — Sustitución de Tejas',
      shortDesc: 'Retejado completo o parcial con teja nueva, conservando la estructura si está en buen estado.',
      title: 'Retejado en Vitoria-Gasteiz | 945 49 29 39',
      metaDescription:
        'Retejado y sustitución de tejas en Vitoria-Gasteiz desde 35 €/m². 18 años de experiencia y garantía por escrito.',
      h1: 'Retejado y Sustitución de Tejas en Vitoria-Gasteiz',
      content: {
        intro: [
          'El retejado es el proceso de retirar la cubierta de tejas existente y colocar una nueva, manteniendo o renovando la estructura de soporte según su estado. Es el tratamiento adecuado cuando el tejado presenta deterioro generalizado: tejas porosas, cobertura antigua con muchas roturas, mortero de cumbrera disgregado o tejas que han perdido su impermeabilidad natural por la edad. Si el problema es puntual —unas pocas tejas rotas o un sellado fallado— probablemente te baste con una <a href="/servicio/reparacion-de-tejados/">reparación de tejado</a> más económica y rápida; y si además de la teja hay que rehacer toda la estructura, es más bien un caso de <a href="/servicio/instalacion-de-tejados-nuevos/">instalación de tejado nuevo</a> que de retejado.',
          'En Tejados Vitoria Express realizamos retejados parciales (sustitución de zonas concretas) y totales (cubierta completa). Antes de comenzar evaluamos el estado de la estructura —cabios, correas, rastreles— para determinar si se puede reutilizar o si conviene renovarla aprovechando el retejado. Aprovechamos siempre la intervención para instalar una lámina impermeabilizante bajo la nueva teja, mejorando significativamente la estanqueidad respecto al sistema original, y es también el momento ideal para mejorar el <a href="/servicio/aislamiento-de-cubiertas/">aislamiento de la cubierta</a> sin coste adicional de montaje.',
        ],
        whatWeDo: [
          'Retirada y gestión de residuos de la teja antigua',
          'Revisión y saneamiento de la estructura de madera',
          'Instalación de lámina impermeabilizante transpirable bajo teja nueva',
          'Colocación de teja cerámica, de hormigón o pizarra nueva',
          'Rejuntado y remate de cumbrera, limahoyas y aleros',
          'Retejado parcial de zonas concretas con teja de similar tipología',
        ],
        whenToCall: [
          'Tejado con más de 40-50 años sin intervención general',
          'Múltiples tejas rotas o porosas que dejan pasar humedad',
          'Mortero de cumbrera o limahoyas completamente disgregado',
          'Tejado que necesita varias reparaciones puntuales al año',
          'Cambio de propiedad o reforma integral del edificio',
        ],
        faqs: [
          {
            q: '¿Cuánto cuesta un retejado completo en Vitoria?',
            a: 'Un retejado completo (retirada de teja antigua, lámina y teja nueva) oscila entre 35 y 65 €/m² según el tipo de teja elegida y el estado de la estructura. Pedimos siempre una visita para evaluar el estado del entablado antes de presupuestar.',
          },
          {
            q: '¿Puedo reutilizar las tejas antiguas?',
            a: 'Si las tejas antiguas están en buen estado y no son porosas, se pueden reutilizar (previa limpieza) reduciendo el coste del material. Lo evaluamos durante la visita con una prueba de absorción de agua.',
          },
          {
            q: '¿Cuánto dura un retejado?',
            a: 'Con teja cerámica de calidad antihielo y lámina impermeabilizante bajo teja, la vida útil del sistema es de 50 a 80 años. La estructura de madera, si se revisa y sana correctamente, puede durar indefinidamente con mantenimiento mínimo.',
          },
        ],
      },
      relatedServices: ['instalacion-de-tejados-nuevos', 'aislamiento-de-cubiertas', 'reparacion-de-tejados'],
      image: { src: retejadoImg, alt: 'Retejado completo de cubierta en Vitoria-Gasteiz con teja cerámica nueva' },
    },
    {
      slug: 'instalacion-de-claraboyas-y-velux',
      name: 'Instalación de Claraboyas y Velux',
      shortDesc: 'Instalamos claraboyas y ventanas de tejado Velux con kit de impermeabilización integrado y garantía total.',
      title: 'Claraboyas y Velux en Vitoria | 945 49 29 39',
      metaDescription:
        'Instalación certificada de claraboyas y ventanas Velux en Vitoria-Gasteiz desde 400 €, con garantía total y presupuesto gratis.',
      h1: 'Instalación de Claraboyas y Ventanas Velux en Vitoria-Gasteiz',
      content: {
        intro: [
          'Las claraboyas y ventanas de tejado son la solución perfecta para llevar luz natural y ventilación a plantas bajo cubierta, áticos y buhardillas, espacios que de otro modo quedan oscuros y calurosos en verano. Una instalación correcta aporta luminosidad sin comprometer la estanqueidad del tejado; una instalación mal ejecutada, sin embargo, se convierte en un foco de goteras permanente. Si la claraboya existente gotea porque el tejado de alrededor también está deteriorado, revisamos si hace falta además una <a href="/servicio/reparacion-de-tejados/">reparación de tejado</a>.',
          'En Tejados Vitoria Express instalamos claraboyas fijas y ventanas abatibles de las principales marcas —Velux, Fakro y Roto— utilizando sus kits de impermeabilización originales, diseñados específicamente para cada modelo y tipo de cubierta. El uso de kits genéricos o flash universal es la principal causa de goteras en claraboyas; nosotros no los utilizamos nunca. Trabajamos en tejados de teja, pizarra y chapa, y si vas a instalarla junto con una <a href="/servicio/instalacion-de-tejados-nuevos/">instalación de tejado nuevo</a> o quieres aprovechar para mejorar el <a href="/servicio/aislamiento-de-cubiertas/">aislamiento de cubierta</a>, el coste conjunto suele ser más ajustado que hacerlo por separado.',
        ],
        whatWeDo: [
          'Instalación de ventanas de tejado Velux (fijas, abatibles, proyectantes, de cubierta plana)',
          'Instalación de claraboyas fijas sobre cubiertas inclinadas y planas',
          'Montaje de kits de impermeabilización originales por tipo de cubierta',
          'Acabados interiores: precerco, tapajuntas y alféizar',
          'Reparación de claraboyas existentes con goteras o fugas',
          'Sustitución de claraboyas antiguas por modelos actuales con mejor aislamiento térmico',
        ],
        whenToCall: [
          'Ático o buhardilla sin luz natural suficiente',
          'Claraboya existente que gotea o presenta condensación',
          'Reforma de bajo cubierta que requiere nueva apertura de huecos',
          'Sustitución de claraboya antigua por una con rotura de puente térmico',
        ],
        faqs: [
          {
            q: '¿Necesito licencia para instalar una claraboya en Vitoria?',
            a: 'En la mayoría de casos se necesita comunicación previa al Ayuntamiento de Vitoria-Gasteiz, no licencia de obra mayor. En edificios protegidos o zonas con protección urbanística puede requerirse informe previo. Te orientamos según la ubicación exacta de tu inmueble.',
          },
          {
            q: '¿Cuánto cuesta instalar una ventana Velux?',
            a: 'El precio orientativo es de 400 a 1.200 € por unidad instalada, dependiendo del modelo (fijo o practicable), las dimensiones y el tipo de cubierta. El precio incluye la ventana, el kit de impermeabilización y la mano de obra.',
          },
          {
            q: '¿Se puede instalar una claraboya en un tejado de pizarra?',
            a: 'Sí, tanto Velux como Fakro disponen de kits de impermeabilización específicos para pizarra. La instalación requiere más cuidado que en tejado de teja, pero el resultado es completamente estanco si se ejecuta correctamente.',
          },
        ],
      },
      relatedServices: ['reparacion-de-tejados', 'aislamiento-de-cubiertas', 'instalacion-de-tejados-nuevos'],
      image: { src: claraboyasVeluxImg, alt: 'Instalación de ventana Velux en tejado en Vitoria-Gasteiz' },
    },
    {
      slug: 'aislamiento-de-cubiertas',
      name: 'Aislamiento de Cubiertas',
      shortDesc: 'Mejoramos el aislamiento térmico y acústico de tu cubierta para reducir la factura energética y ganar confort.',
      title: 'Aislamiento de Cubiertas en Vitoria | 945 49 29 39',
      metaDescription:
        'Aislamiento térmico de cubiertas en Vitoria-Gasteiz: reduce hasta un 30% tu factura de calefacción. Presupuesto gratis.',
      h1: 'Aislamiento de Cubiertas en Vitoria-Gasteiz',
      content: {
        intro: [
          'La cubierta es el elemento constructivo por el que se pierde mayor cantidad de calor en un edificio no aislado: hasta el 30% de la energía térmica escapa por la parte superior. En Vitoria-Gasteiz, con inviernos fríos y veranos calurosos, un buen aislamiento de cubierta supone un ahorro real en calefacción y climatización, al tiempo que aumenta el confort interior en todas las estaciones.',
          'En Tejados Vitoria Express instalamos sistemas de aislamiento adaptados a cada tipo de cubierta: paneles rígidos de poliuretano o lana de roca entre rastreles en cubiertas inclinadas, aislamiento proyectado de poliuretano en el interior del desván, y sistemas de cubierta invertida con XPS en cubiertas planas. Todos nuestros materiales cumplen la normativa del Código Técnico de la Edificación (CTE HE1) para la zona climática D1 de Vitoria. El aislamiento se puede instalar de forma independiente o aprovechando otra intervención: si vas a hacer un <a href="/servicio/retejado-sustitucion-de-tejas/">retejado</a> o una <a href="/servicio/instalacion-de-tejados-nuevos/">instalación de tejado nuevo</a>, es el momento más económico para incorporarlo. Y si la cubierta además presenta filtraciones, conviene revisar primero la <a href="/servicio/impermeabilizacion-de-cubiertas/">impermeabilización</a> antes de aislar, para no encerrar humedad dentro del sistema.',
        ],
        whatWeDo: [
          'Instalación de aislamiento rígido (PIR/PUR) entre rastreles bajo teja',
          'Proyección de espuma de poliuretano en el interior del bajo cubierta',
          'Sistemas de cubierta invertida con XPS para cubiertas planas',
          'Instalación de lana de roca o lana mineral para mejora acústica',
          'Mejora del aislamiento en garajes y trasteros bajo cubierta',
          'Informe de mejora energética y cálculo del ahorro estimado',
        ],
        whenToCall: [
          'Excesivo calor en la última planta durante el verano',
          'Frío pronunciado en ático o buhardilla en invierno',
          'Factura de calefacción muy elevada en comparación con edificios similares',
          'Reforma de bajo cubierta que incluye habilitación como espacio habitable',
          'Rehabilitación energética del edificio (subvenciones disponibles)',
        ],
        faqs: [
          {
            q: '¿Qué ahorro energético puedo esperar tras aislar la cubierta?',
            a: 'Según la situación de partida, un buen aislamiento de cubierta puede reducir las pérdidas térmicas entre un 20 y un 35%. En una vivienda unifamiliar típica en Vitoria, esto se traduce en un ahorro de 300 a 700 € anuales en calefacción.',
          },
          {
            q: '¿Hay subvenciones para el aislamiento de cubierta?',
            a: 'Sí. El Gobierno Vasco y el Ayuntamiento de Vitoria-Gasteiz ofrecen ayudas para rehabilitación energética de viviendas. Además, los fondos europeos Next Generation (Programa PREE) cubren parte del coste de mejoras de eficiencia energética. Te ayudamos a identificar las ayudas aplicables a tu caso.',
          },
          {
            q: '¿Se puede aislar una cubierta inclinada sin retirar las tejas?',
            a: 'Sí. Si el acceso al bajo cubierta lo permite, podemos instalar aislamiento proyectado desde el interior del desván sin necesidad de retirar ninguna teja. Es la opción más económica y menos invasiva. Si el estado general de la teja es malo, quizá compense aprovechar un <a href="/servicio/retejado-sustitucion-de-tejas/">retejado</a> para instalar el aislamiento desde fuera en vez de solo por dentro.',
          },
        ],
      },
      relatedServices: ['instalacion-de-tejados-nuevos', 'retejado-sustitucion-de-tejas', 'impermeabilizacion-de-cubiertas'],
      image: { src: aislamientoCubiertasImg, alt: 'Aislamiento térmico de cubierta en Vitoria-Gasteiz con paneles PIR' },
    },
    {
      slug: 'rehabilitacion-de-fachadas',
      name: 'Rehabilitación de Fachadas',
      shortDesc: 'Rehabilitamos fachadas deterioradas: limpieza, reparación de grietas, impermeabilización y pintura exterior.',
      title: 'Rehabilitación de Fachadas Vitoria | 945 49 29 39',
      metaDescription:
        'Rehabilitación de fachadas en Vitoria-Gasteiz: grietas, humedades y pintura exterior. Andamio incluido y presupuesto gratis.',
      h1: 'Rehabilitación de Fachadas en Vitoria-Gasteiz',
      content: {
        intro: [
          'La fachada es la primera línea de defensa del edificio frente a la lluvia, el viento y los cambios de temperatura. En Vitoria-Gasteiz, el ciclo de heladas y deshielo en invierno es especialmente agresivo con los revestimientos exteriores: genera micro-fisuras que permiten la entrada de agua, que al congelarse ensancha las grietas y acelera el deterioro. Una fachada en mal estado no es solo un problema estético, es una vía de entrada de humedad al interior del edificio. Antes de rehabilitar la fachada conviene descartar que la humedad venga en realidad del tejado: revisamos si hace falta una <a href="/servicio/reparacion-de-tejados/">reparación de tejado</a> o una <a href="/servicio/impermeabilizacion-de-cubiertas/">impermeabilización de cubierta</a> en el encuentro con la fachada, ya que muchas humedades de fachada tienen origen en la cubierta.',
          'En Tejados Vitoria Express realizamos rehabilitaciones integrales de fachada: diagnóstico del estado del revestimiento, reparación de grietas y desprendimientos, tratamiento impermeabilizante y acabado con pintura elastomérica exterior o proyectado de mortero monocapa. Trabajamos tanto en fachadas de obra vista como revocadas, y en rehabilitaciones integrales aprovechamos también para mejorar el <a href="/servicio/aislamiento-de-cubiertas/">aislamiento de cubierta</a> del edificio, además de gestionar la tramitación de las ayudas a la rehabilitación cuando el proyecto lo permite.',
        ],
        whatWeDo: [
          'Diagnóstico del estado de la fachada con catas y análisis de humedad',
          'Reparación de grietas, fisuras y zonas con desprendimientos',
          'Saneado y limpieza de la base mediante hidrofresado o chorro de agua',
          'Aplicación de impermeabilizante transpirable de fachada',
          'Acabado con pintura elastomérica exterior o mortero monocapa',
          'Sellado de encuentros con carpinterías y pasos de instalaciones',
          'Trabajos de cantería en fachadas de piedra o ladrillo visto',
        ],
        whenToCall: [
          'Fachada con grietas, fisuras o zonas de revestimiento que se desprende',
          'Humedades que aparecen en zonas bajas de fachada o en paredes interiores',
          'Pintura exterior que se pela, ampollas o eflorescencias (sales)',
          'Edificio con más de 20 años sin intervención en fachada',
          'Inspección técnica de edificios (ITE) que detecta deficiencias en fachada',
        ],
        faqs: [
          {
            q: '¿Es necesario montar andamio para rehabilitar una fachada?',
            a: 'Para la mayor parte de los trabajos de rehabilitación de fachada sí es necesario andamio, que nosotros incluimos siempre en el presupuesto. En fachadas de poca altura (hasta 3 metros) podemos trabajar con plataformas elevadoras de menor coste.',
          },
          {
            q: '¿Cuánto dura una rehabilitación de fachada?',
            a: 'Dependiendo de la superficie y el estado de la fachada, una rehabilitación completa en un edificio de viviendas de 4 o 5 plantas suele durar entre 2 y 4 semanas. En ese tiempo el andamio permanece instalado y los vecinos conservan acceso normal al edificio.',
          },
          {
            q: '¿Hay ayudas para rehabilitar la fachada?',
            a: 'Sí. Las comunidades de propietarios pueden optar a subvenciones del Plan de Rehabilitación y Regeneración Urbana del Gobierno Vasco y del Ayuntamiento de Vitoria-Gasteiz para mejoras en eficiencia energética y accesibilidad. Te ayudamos a identificar las ayudas disponibles para tu comunidad.',
          },
        ],
      },
      relatedServices: ['impermeabilizacion-de-cubiertas', 'reparacion-de-tejados', 'aislamiento-de-cubiertas'],
      image: { src: rehabilitacionFachadasImg, alt: 'Rehabilitación de fachada en edificio de Vitoria-Gasteiz' },
    },
    {
      slug: 'limpieza-de-tejados',
      name: 'Limpieza de Tejados',
      shortDesc: 'Limpiamos tejados con hidrolimpiadora de alta presión, eliminando musgo, líquenes y suciedad acumulada.',
      title: 'Limpieza de Tejados en Vitoria | 945 49 29 39',
      metaDescription:
        'Limpieza profesional de tejados en Vitoria-Gasteiz desde 8 €/m². Eliminamos musgo y líquenes con tratamiento antihongos. Presupuesto gratis.',
      h1: 'Limpieza de Tejados en Vitoria-Gasteiz',
      content: {
        intro: [
          'El clima húmedo de Vitoria-Gasteiz favorece la proliferación de musgo, líquenes y algas en las superficies de los tejados, especialmente en las orientaciones norte y en zonas con arbolado cercano. Más allá del impacto estético, el musgo retiene humedad sobre la teja, acelera su degradación y puede llegar a desplazar tejas al expandirse con las heladas. Una limpieza periódica cada 5-8 años es la medida preventiva más rentable para alargar la vida del tejado.',
          'En Tejados Vitoria Express realizamos limpiezas de tejado con hidrolimpiadora de alta presión y tratamiento posterior con biocida de larga duración, que inhibe la reaparición de organismos durante varios años. También retiramos hojas, ramas y restos acumulados en canalones, limahoyas y zonas de bajante; si detectamos que los <a href="/servicio/instalacion-de-canalones/">canalones</a> están deteriorados y no solo obstruidos, te lo indicamos para valorar su sustitución. Después de la limpieza realizamos una inspección visual completa del tejado: si aparecen tejas rotas o desplazadas te avisamos para una <a href="/servicio/reparacion-de-tejados/">reparación de tejado</a> antes de que se convierta en gotera, y antes de aplicar una <a href="/servicio/impermeabilizacion-de-cubiertas/">impermeabilización de cubierta</a> la superficie debe estar limpia de musgo, por lo que muchas veces recomendamos esta limpieza como paso previo.',
        ],
        whatWeDo: [
          'Limpieza con hidrolimpiadora de alta presión (musgo, líquenes, algas)',
          'Tratamiento con biocida de larga duración post-limpieza',
          'Retirada de hojas y ramas acumuladas en limahoyas y canalones',
          'Limpieza de sumideros y bajantes obstruidos',
          'Inspección visual completa del estado del tejado post-limpieza',
          'Recomendaciones de reparaciones preventivas si se detectan deficiencias',
        ],
        whenToCall: [
          'Tejado visiblemente cubierto de musgo o líquenes verdes o grises',
          'Canalones que se obstruyen frecuentemente con residuos orgánicos',
          'Tejado que no se ha limpiado en más de 5-8 años',
          'Antes de realizar una impermeabilización o retejado (la superficie debe estar limpia)',
          'Antes de vender el inmueble (mejora el aspecto y el valor)',
        ],
        faqs: [
          {
            q: '¿La limpieza a presión daña las tejas?',
            a: 'Si se usa la presión adecuada y la boquilla correcta, la limpieza a presión no daña las tejas cerámicas o de hormigón en buen estado. Ajustamos la presión según el tipo y antigüedad de la teja. En tejas muy frágiles o porosas optamos por una presión más baja o por métodos químicos alternativos.',
          },
          {
            q: '¿Cuánto dura el efecto del biocida?',
            a: 'Los biocidas que aplicamos tienen un efecto residual de 3 a 5 años en condiciones normales. En entornos muy húmedos o con arbolado muy cercano el período puede ser menor.',
          },
          {
            q: '¿Cuánto cuesta limpiar un tejado en Vitoria?',
            a: 'El precio orientativo es de 8 a 20 €/m² dependiendo del nivel de suciedad y la dificultad de acceso. En la visita previa calculamos la superficie exacta y te damos un precio cerrado.',
          },
        ],
      },
      relatedServices: ['reparacion-de-tejados', 'instalacion-de-canalones', 'impermeabilizacion-de-cubiertas'],
      image: { src: limpiezaTejadosImg, alt: 'Limpieza de tejado con hidrolimpiadora en Vitoria-Gasteiz' },
    },
    {
      slug: 'cubierta-con-panel-sandwich',
      name: 'Cubierta con Panel Sándwich',
      shortDesc: 'Instalamos cubiertas con panel sándwich aislante para naves, viviendas y ampliaciones industriales.',
      title: 'Panel Sándwich Vitoria-Gasteiz | 945 49 29 39',
      metaDescription:
        'Cubiertas de panel sándwich en Vitoria-Gasteiz desde 45 €/m², con aislamiento incluido e instalación rápida. Presupuesto gratis.',
      h1: 'Cubierta con Panel Sándwich en Vitoria-Gasteiz',
      content: {
        intro: [
          'El panel sándwich es la solución de cubierta más eficiente para instalaciones industriales, naves, almacenes, ampliaciones de vivienda y garajes: combina en un solo elemento el acabado exterior, el núcleo aislante y el revestimiento interior, lo que permite una instalación muy rápida y una excelente relación coste-prestaciones. La cubierta queda terminada y aislada en una sola fase de trabajo. Si en cambio buscas mejorar solo el <a href="/servicio/aislamiento-de-cubiertas/">aislamiento</a> de una cubierta ya existente sin cambiar el acabado, te interesa más nuestro servicio de aislamiento de cubiertas; y para naves de mayor envergadura con necesidades estructurales específicas, consulta también nuestro servicio de <a href="/servicio/cubiertas-industriales-y-naves/">cubiertas industriales y naves</a>.',
          'En Tejados Vitoria Express instalamos paneles sándwich de acero galvanizado con núcleo de poliuretano (PUR) o lana de roca (para mayor resistencia al fuego) en todo tipo de estructuras. Trabajamos con los principales fabricantes del mercado y podemos suministrar paneles en cualquier perfil, color y espesor. Realizamos el montaje completo: estructura de soporte, colocación de paneles, remates, cumbrera, limahoyas y evacuaciones, y en cubiertas planas de poca pendiente lo complementamos con una <a href="/servicio/impermeabilizacion-de-cubiertas/">impermeabilización</a> adicional en los puntos críticos.',
        ],
        whatWeDo: [
          'Instalación de cubierta de panel sándwich en naves y ampliaciones',
          'Montaje sobre estructura metálica o de madera existente',
          'Paneles con núcleo de PUR (aislamiento térmico) o lana de roca (resistencia al fuego)',
          'Remates, cumbreras, limahoyas y encuentros con paramentos',
          'Instalación de lucernarios de policarbonato para iluminación natural',
          'Reparación y sellado de cubiertas de panel sándwich existentes',
        ],
        whenToCall: [
          'Nave industrial o almacén que necesita cubierta nueva o renovación',
          'Ampliación de garaje, porche o anexo de vivienda',
          'Cubierta existente de panel sándwich con juntas abiertas o corrosión',
          'Proyecto de construcción modular o prefabricada',
        ],
        faqs: [
          {
            q: '¿Cuánto cuesta una cubierta de panel sándwich?',
            a: 'El precio orientativo es de 45 a 80 €/m² instalado, dependiendo del espesor del panel, el tipo de núcleo aislante y la complejidad de la cubierta. Es una de las soluciones más económicas para cubrir grandes superficies con aislamiento incluido.',
          },
          {
            q: '¿El panel sándwich tiene resistencia al fuego?',
            a: 'Los paneles con núcleo de lana de roca mineral (lana de basalto) ofrecen una reacción al fuego de clase A1-A2 (no inflamable). Los paneles con núcleo de PUR son más aislantes pero tienen menor resistencia al fuego (clase E-F). Recomendamos lana de roca en actividades con normativa contra incendios.',
          },
          {
            q: '¿Se puede instalar panel sándwich sobre una cubierta de uralita antigua?',
            a: 'Sí, aunque previamente es necesario realizar un estudio de la estructura de soporte y gestionar correctamente la retirada del amianto (uralita) conforme a la normativa vigente. Nos coordinamos con empresas homologadas para la retirada segura.',
          },
        ],
      },
      relatedServices: ['cubiertas-industriales-y-naves', 'aislamiento-de-cubiertas', 'impermeabilizacion-de-cubiertas'],
      image: { src: panelSandwichImg, alt: 'Instalación de cubierta de panel sándwich en nave en Vitoria-Gasteiz' },
    },
    {
      slug: 'cubiertas-industriales-y-naves',
      name: 'Cubiertas Industriales y Naves',
      shortDesc: 'Soluciones integrales de cubierta para naves industriales, polígonos y grandes superficies en Álava.',
      title: 'Cubiertas Industriales Vitoria | 945 49 29 39',
      metaDescription:
        'Cubiertas industriales y para naves en Vitoria-Gasteiz y Álava: panel sándwich, chapa y membrana. 18 años de experiencia.',
      h1: 'Cubiertas Industriales y Naves en Vitoria-Gasteiz',
      content: {
        intro: [
          'Las cubiertas de naves industriales y grandes superficies presentan necesidades muy distintas a las viviendas: grandes luces estructurales, requisitos de resistencia al viento y nieve, pendientes reducidas, normativa contra incendios y necesidades específicas de ventilación e iluminación natural. En el entorno industrial de Vitoria-Gasteiz —con importantes polígonos como Gamarra, Júndiz, Ali Gobeo y Betoño— llevamos 18 años trabajando con empresas, promotores e industrias en el mantenimiento y la renovación de sus cubiertas.',
          'Ofrecemos soluciones integrales: desde el diagnóstico del estado actual de la cubierta hasta la ejecución completa de la nueva, incluyendo estructura, impermeabilización, <a href="/servicio/aislamiento-de-cubiertas/">aislamiento térmico</a> para reducir el consumo energético de la nave, evacuaciones, lucernarios y medidas de seguridad en cubierta (líneas de vida, escaleras de acceso). Trabajamos con <a href="/servicio/cubierta-con-panel-sandwich/">panel sándwich</a>, chapa grecada, <a href="/servicio/impermeabilizacion-de-cubiertas/">membrana bituminosa</a> y sistemas de cubierta invertida para grandes superficies.',
        ],
        whatWeDo: [
          'Cubiertas de panel sándwich para naves de nueva construcción o renovación',
          'Chapa grecada lacada o galvanizada sobre estructura metálica',
          'Impermeabilización de cubiertas planas industriales con membrana bituminosa o PVC',
          'Instalación de lucernarios de policarbonato o vidrio para iluminación natural',
          'Sistemas de evacuación de aguas pluviales de gran capacidad',
          'Líneas de vida y sistemas de seguridad para trabajos en cubierta',
          'Sustitución de cubiertas de fibrocemento (uralita) con gestión de amianto',
        ],
        whenToCall: [
          'Nave industrial con cubierta deteriorada, oxidada o con filtraciones',
          'Construcción de nueva nave o ampliación de la existente',
          'Necesidad de aumentar el aislamiento térmico para ahorro energético',
          'Cubierta de uralita (amianto) que debe ser retirada conforme a normativa',
          'Instalación de paneles fotovoltaicos sobre cubierta industrial (preparación)',
        ],
        faqs: [
          {
            q: '¿Cómo se gestiona la retirada de uralita en naves?',
            a: 'La retirada de materiales con amianto (fibrocemento) está regulada y debe realizarla una empresa inscrita en el RERA (Registro de Empresas con Riesgo de Amianto). Nos coordinamos con estas empresas para la retirada segura y gestionamos toda la documentación legal necesaria.',
          },
          {
            q: '¿Cuánto cuesta renovar la cubierta de una nave?',
            a: 'El precio varía enormemente según la superficie, el sistema elegido y el estado actual de la estructura. Para naves de tamaño medio (500-2.000 m²), una cubierta nueva de panel sándwich completa suele oscilar entre 45 y 75 €/m². Realizamos visita y medición gratuita para presupuestar con precisión.',
          },
          {
            q: '¿Podéis instalar una línea de vida en la cubierta?',
            a: 'Sí. La instalación de líneas de vida horizontales y puntos de anclaje para trabajos en cubierta es uno de nuestros servicios habituales para entornos industriales y comunidades de propietarios con acceso a cubierta.',
          },
        ],
      },
      relatedServices: ['cubierta-con-panel-sandwich', 'impermeabilizacion-de-cubiertas', 'aislamiento-de-cubiertas'],
      image: { src: cubiertasIndustrialesImg, alt: 'Cubierta industrial de panel sándwich en nave en Vitoria-Gasteiz' },
    },
  ] as ServiceConfig[],

  // ============================================================
  // ZONAS DE TRABAJO
  // ============================================================
  zones: [
    {
      name: 'Vitoria-Gasteiz',
      slug: 'vitoria-gasteiz',
      description:
        'Nuestra ciudad de referencia. Atendemos todos los barrios: Casco Medieval, Ensanche, Salburua, Ariznavarra, Lakua, Abetxuko, Arriaga, Zabalgana y resto de barrios de Vitoria-Gasteiz.',
      localInfo:
        'El clima de transición entre oceánico y continental de Vitoria-Gasteiz, con lluvias frecuentes durante buena parte del año, castiga especialmente los tejados de teja cerámica curva del Casco Medieval y las cubiertas de los bloques de los ensanches de Lakua, Salburua y Zabalgana tras las heladas invernales. También reparamos chalets y viviendas unifamiliares en Armentia, Gardelegi y el resto de barrios periféricos de la ciudad.',
    },
    {
      name: 'Amurrio',
      slug: 'amurrio',
      description:
        'Amurrio es uno de los municipios más poblados de la comarca de Ayala. Atendemos reparaciones e instalaciones de tejados en todo el término municipal, incluyendo su casco urbano y pedanías.',
      localInfo:
        'Por su cercanía a Bizkaia, el clima en Amurrio es más húmedo y lluvioso que en la capital alavesa, lo que favorece la aparición de musgo y humedades en los tejados de teja curva y pizarra de los caseríos tradicionales del valle. También trabajamos en los adosados y viviendas unifamiliares de construcción más reciente del casco urbano.',
    },
    {
      name: 'Llodio (Laudio)',
      slug: 'llodio',
      description:
        'En Llodio trabajamos tanto en el área residencial como en la zona industrial del municipio. Cubiertas de naves, tejados de viviendas unifamiliares y comunidades de propietarios.',
      localInfo:
        'La tradición siderúrgica de Llodio dejó un importante polígono industrial en el que reparamos con frecuencia cubiertas de chapa y fibrocemento de naves, además de los tejados residenciales del núcleo urbano. El clima oceánico del valle del Nervión, con precipitaciones abundantes todo el año, exige revisiones periódicas de canalones y juntas.',
    },
    {
      name: 'Salvatierra (Agurain)',
      slug: 'salvatierra',
      description:
        'Capital de la Llanada Oriental, con numerosas casas de pueblo que requieren trabajos de retejado y rehabilitación. Atendemos con la misma rapidez que en Vitoria capital.',
      localInfo:
        'El casco histórico amurallado de Salvatierra conserva edificios protegidos con tejados de teja cerámica curva que requieren un tratamiento cuidadoso por su valor patrimonial. En el resto del municipio, ya en plena Llanada Oriental, predominan las viviendas unifamiliares y caseríos con cubiertas a dos aguas más expuestas al viento por la ausencia de relieve que las proteja.',
    },
    {
      name: 'Iruña de Oca',
      slug: 'iruna-de-oca',
      description:
        'Municipio limítrofe con Vitoria-Gasteiz, con fuerte crecimiento residencial en los últimos años. Atendemos tanto urbanizaciones nuevas como casas de pueblo en Nanclares de la Oca y el resto de núcleos.',
      localInfo:
        'El crecimiento urbanístico de Nanclares de la Oca en las últimas décadas ha traído urbanizaciones con tejados a dos y cuatro aguas de construcción reciente, mientras que en los núcleos más pequeños del municipio conviven todavía casas de pueblo tradicionales. Su cercanía a la A-1 y al polígono industrial también nos lleva a atender con frecuencia cubiertas de naves.',
    },
    {
      name: 'Zuia',
      slug: 'zuia',
      description:
        'El municipio de Zuia comprende varios núcleos en el valle del mismo nombre. Trabajamos en tejados de caseríos, viviendas unifamiliares y pequeños edificios rurales.',
      localInfo:
        'Situado al pie del Parque Natural de Gorbeia, Zuia tiene un microclima más húmedo que la Llanada, con presencia notable de musgo y líquenes sobre las tejas de los caseríos y viviendas rurales dispersas por sus distintos núcleos. Recomendamos revisiones anuales antes del otoño para evitar filtraciones durante la temporada de lluvias.',
    },
    {
      name: 'Aramaio',
      slug: 'aramaio',
      description:
        'Valle de Aramaio, en el extremo oriental de Álava. Atendemos los distintos núcleos del municipio con reparaciones de tejado, impermeabilizaciones y retejados en arquitectura tradicional vasca.',
      localInfo:
        'Al lindar con Gipuzkoa, Aramaio es uno de los valles con mayor pluviometría de Álava. Los baserris y caseríos tradicionales suelen tener cubiertas de teja curva o pizarra con pendientes pronunciadas pensadas para evacuar rápido el agua, y son las que más mantenimiento requieren tras los temporales de otoño e invierno.',
    },
    {
      name: 'Asparrena',
      slug: 'asparrena',
      description:
        'Municipio de la Llanada Oriental que incluye Aretxabaleta, Araia, Urabain y otros núcleos. Trabajamos en tejados de casas rurales y edificios de pequeña altura.',
      localInfo:
        'En Asparrena, junto a la sierra de Elgea-Urkilla, combinamos trabajos en las viviendas y caseríos de los distintos núcleos del municipio con reparaciones en naves y edificios de pequeña altura, herencia de la actividad industrial y fabril histórica de la zona.',
    },
    {
      name: 'Alegría-Dulantzi',
      slug: 'alegria-dulantzi',
      description:
        'Localidad de la Llanada con crecimiento urbanístico notable. Atendemos tanto viviendas de obra nueva como casas más antiguas que necesitan revisión o retejado.',
      localInfo:
        'Alegría-Dulantzi ha vivido un fuerte crecimiento residencial en las últimas dos décadas, por lo que buena parte de nuestro trabajo se centra en viviendas unifamiliares y adosados de obra relativamente reciente, sin descuidar el mantenimiento de los tejados de teja curva del casco antiguo.',
    },
    {
      name: 'Legutiano',
      slug: 'legutiano',
      description:
        'Municipio del valle de Barrundia-Legutio, junto al pantano de Uribide. Acceso en menos de 30 minutos desde Vitoria. Atendemos caseríos, viviendas y edificios en todo el municipio.',
      localInfo:
        'Junto al pantano de Uribide, Legutiano tiene un buen número de viviendas de segunda residencia que requieren revisión del tejado tras largas temporadas cerradas, además de los caseríos y chalets habitados todo el año en los distintos núcleos del valle de Barrundia-Legutio.',
    },
    {
      name: 'Zigoitia',
      slug: 'zigoitia',
      description:
        'Valle de Zigoitia, al sur de Vitoria. Con varios núcleos de población dispersos, es habitual el trabajo en caseríos y viviendas unifamiliares de tipología rural.',
      localInfo:
        'Con numerosos núcleos de población dispersos, Zigoitia concentra sobre todo caseríos y viviendas unifamiliares de tipología rural con cubiertas de teja curva envejecida, en las que el problema habitual suele ser el desgaste acumulado por el paso de los años más que un daño puntual.',
    },
    {
      name: 'Barrundia',
      slug: 'barrundia',
      description:
        'Municipio del valle homónimo, al este de Vitoria. Atendemos tejados en Ozaeta, Guevara, Larrea y el resto de pequeños núcleos del municipio.',
      localInfo:
        'En Ozaeta, Guevara, Larrea y el resto de núcleos de Barrundia predominan las viviendas de piedra y el caserío tradicional propio de la Llanada, donde el principal problema suele ser el envejecimiento del tejado en construcciones con varias décadas de antigüedad y una revisión de mantenimiento aplazada durante demasiado tiempo.',
    },
    {
      name: 'Arrazua-Ubarrundia',
      slug: 'arrazua-ubarrundia',
      description:
        'Municipio que rodea el pantano de Ullibarri-Gamboa. Muchas de las viviendas son de segunda residencia y requieren revisiones y reparaciones periódicas de tejado.',
      localInfo:
        'Al rodear el pantano de Ullibarri-Gamboa, buena parte de las viviendas de Arrazua-Ubarrundia son segundas residencias junto al agua, lo que implica revisiones de tejado tras los periodos de cierre estacional y una humedad ambiental algo mayor que en el resto de la Llanada Alavesa.',
    },
    {
      name: 'Iruraiz-Gauna',
      slug: 'iruraiz-gauna',
      description:
        'Municipio de la Llanada Alavesa que combina pequeños núcleos rurales con la carretera N-I. Trabajamos en todo tipo de tejados, desde caseríos tradicionales hasta construcciones más recientes.',
      localInfo:
        'Iruraiz-Gauna combina pequeños núcleos rurales con el paso de la N-I, y en él encontramos tanto caseríos tradicionales de la Llanada Alavesa como construcciones más recientes junto a la carretera, casi todas ellas con tejados a dos aguas de teja cerámica que revisamos con presupuesto previo sin coste.',
    },
    {
      name: 'Elburgo (Burgelu)',
      slug: 'elburgo',
      description:
        'Pequeño municipio al sur de Vitoria-Gasteiz, en el acceso a la Llanada. Nos desplazamos sin coste adicional para presupuestar y realizar trabajos de tejado.',
      localInfo:
        'Al ser uno de los municipios más pequeños de Álava, en Elburgo las viviendas y caseríos se reparten de forma dispersa entre varios núcleos del acceso sur a la Llanada, por lo que un desplazamiento rápido es clave para presupuestar y actuar sin coste adicional para el vecino.',
    },
    {
      name: 'Murgia',
      slug: 'murgia',
      description:
        'Capital del municipio de Zuia, con acceso directo desde la autovía A-3132. Atendemos reparaciones urgentes e instalaciones en todo el entorno del valle.',
      localInfo:
        'Murgia concentra más densidad de vivienda que el resto del municipio de Zuia, con bloques de piso y viviendas unifamiliares que conviven con el clima húmedo característico del entorno de Gorbeia. Su acceso directo desde la A-3132 nos permite responder rápido a urgencias de goteras y desprendimiento de tejas.',
    },
    {
      name: 'Nanclares de la Oca (Langraiz Oka)',
      slug: 'nanclares-de-la-oca',
      description:
        'Nanclares es el núcleo principal del municipio de Iruña de Oca, con una fuerte presencia industrial y residencial. Atendemos tanto naves como viviendas particulares.',
      localInfo:
        'Como núcleo principal de Iruña de Oca, Nanclares combina un fuerte tejido industrial junto a la A-1 con barrios residenciales de crecimiento reciente, por lo que atendemos tanto cubiertas de nave de chapa o fibrocemento como tejados de vivienda unifamiliar y bloque de piso.',
    },
    {
      name: 'Berantevilla',
      slug: 'berantevilla',
      description:
        'Municipio en la ribera del Ebro, al sur de Álava. Más lejano de Vitoria pero dentro de nuestra área de trabajo habitual. Atendemos previo acuerdo de desplazamiento.',
      localInfo:
        'En la ribera del Ebro, Berantevilla tiene un clima más seco y caluroso en verano que el resto de Álava, propio de la transición hacia La Rioja, con construcciones tradicionales de piedra que acumulan menos humedad pero sufren más las dilataciones térmicas del tejado por el contraste de temperaturas entre el día y la noche.',
    },
  ] as Zone[],
};
