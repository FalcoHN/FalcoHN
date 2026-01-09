
import { Service, VideoContent, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'consulting',
    title: 'Consultoría Estratégica 1-a-1',
    description: 'Navegamos la era digital juntos. 15+ años de experiencia para escalar tu visión empresarial.',
    icon: 'Brain'
  },
  {
    id: 'audits',
    title: 'Auditorías de Presencia Web',
    description: 'Análisis profundo de seguridad, SEO y rendimiento para optimizar tu activo más valioso.',
    icon: 'Shield'
  },
  {
    id: 'automation',
    title: 'Automatización con IA',
    description: 'Implementación de Chatbots y flujos n8n para optimizar la atención al cliente 24/7.',
    icon: 'Zap'
  },
  {
    id: 'reputation',
    title: 'Gestión de Reputación',
    description: 'Protección y mejora de tu marca personal y corporativa en el ecosistema digital moderno.',
    icon: 'Search'
  }
];

export const VIDEOS: VideoContent[] = [
  {
    id: 'v1',
    title: 'La Historia Olvidada de Honduras: Un Viaje en el Tiempo',
    thumbnail: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=800',
    videoId: '6zY2O-m7Yg8', // Example ID - User should verify
    category: 'Historia'
  },
  {
    id: 'v2',
    title: 'Cómo la IA está transformando las PYMES en Honduras',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    videoId: '6zY2O-m7Yg8', 
    category: 'Tecnología'
  },
  {
    id: 'v3',
    title: 'Estrategia de los Dos Pilares: Autoridad vs Ejecución',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    videoId: '6zY2O-m7Yg8',
    category: 'Estrategia'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'peligro-smm-panels-seguidores-falsos-honduras',
    category: 'Ciberseguridad',
    title: 'SMM Panels: El fraude de los seguidores en Honduras',
    excerpt: '¿Por qué comprar seguidores es el suicidio digital de tu marca? Analizamos el impacto en el algoritmo y la reputación.',
    readingTime: '6 min',
    author: {
      name: 'Saúl Milla',
      role: 'Estratega Digital',
      avatar: 'https://picsum.photos/seed/saul/100/100'
    },
    content: `
      <p>En mi trayectoria como consultor digital en Honduras, he visto a cientos de empresas cometer el mismo error crítico: priorizar la <strong>vanidad sobre la autoridad</strong>. El uso de SMM Panels (Social Media Marketing Panels) para inflar métricas es una plaga que destruye negocios prometedores.</p>
      
      <h2>¿Qué es un SMM Panel y por qué es peligroso?</h2>
      <p>Un SMM Panel es una plataforma que vende interacciones automáticas (bots). Por unos pocos lempiras, puedes comprar 10,000 seguidores de cuentas creadas en granjas de clics. Sin embargo, el costo oculto es devastador.</p>
      
      <h3>1. El Algoritmo es más inteligente que tú</h3>
      <p>Plataformas como Instagram o Facebook miden el <em>Engagement Rate</em>. Si tienes 20k seguidores y solo 15 likes reales, el algoritmo entiende que tu contenido es de baja calidad. Resultado: tu alcance orgánico cae a cero.</p>
      
      <h3>2. Reputación y Confianza</h3>
      <p>El cliente hondureño hoy es suspicaz. Un perfil con miles de seguidores pero comentarios genéricos ("Nice post!") grita falta de profesionalismo. La autoridad se construye con constancia, no con bots.</p>
      
      <h3>3. El riesgo de Shadowban</h3>
      <p>Meta está eliminando masivamente cuentas vinculadas a actividades fraudulentas. Al usar estos servicios, pones tu cuenta en una "lista negra" que puede llevar a la suspensión permanente.</p>
      
      <h2>¿Cuál es la alternativa real?</h2>
      <p>En <strong>FalcoHN</strong> promovemos la estrategia de <em>Autoridad Progresiva</em>. Es mejor tener 500 seguidores que son clientes potenciales reales, que 50,000 fantasmas que no compran. La clave está en el contenido de valor, el SEO Local y la pauta segmentada correctamente.</p>
    `,
    date: '20 de Mayo, 2024',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'b2',
    slug: 'guia-seo-local-negocios-honduras-2024',
    category: 'SEO Estratégico',
    title: 'Guía de SEO Local: Domina Google Maps en Honduras',
    excerpt: 'Si tu negocio no aparece cuando alguien busca en Tegucigalpa o SPS, no existes. Aprende a dominar las búsquedas locales.',
    readingTime: '8 min',
    author: {
      name: 'Saúl Milla',
      role: 'Estratega Digital',
      avatar: 'https://picsum.photos/seed/saul/100/100'
    },
    content: `
      <p>El comportamiento del consumidor ha cambiado. Hoy, el 80% de las compras físicas inician con una búsqueda en el celular. El <strong>SEO Local</strong> es la herramienta más potente para las PYMES en Honduras.</p>
      
      <h2>Google Business Profile: Tu nueva vitrina</h2>
      <p>No basta con registrarse. Para dominar Google Maps en ciudades competitivas como San Pedro Sula o Tegucigalpa, necesitas una ficha optimizada al 100%.</p>
      
      <h3>Puntos Clave para el Posicionamiento:</h3>
      <ul>
        <li><strong>NAP Consistency:</strong> Tu Nombre, Dirección y Teléfono deben ser idénticos en toda la web.</li>
        <li><strong>Reseñas con Palabras Clave:</strong> No solo pidas estrellas, pide que mencionen tu servicio (ej. "Excelente servicio de consultoría en FalcoHN").</li>
        <li><strong>Fotos de Alta Calidad:</strong> Google premia las imágenes originales sobre las de stock.</li>
      </ul>
      
      <h2>La importancia de la Georelevancia</h2>
      <p>Para posicionar, tu contenido debe "respirar" Honduras. Hablar de tu zona de cobertura, colaborar con otros negocios locales y generar enlaces desde portales nacionales es vital.</p>
      
      <p>En mi canal de YouTube <a href="https://youtube.com/@FalcoHN">@FalcoHN</a> explico paso a paso cómo configurar estas herramientas para que tu teléfono no deje de sonar.</p>
    `,
    date: '18 de Mayo, 2024',
    image: 'https://images.unsplash.com/photo-1573163276739-12b901ad3292?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'b3',
    slug: 'historia-identidad-marcas-honduras',
    category: 'Marca & Cultura',
    title: 'Identidad e Historia: El ADN de las marcas ganadoras',
    excerpt: '¿Por qué entender la historia de Honduras ayuda a crear mejores estrategias de marketing? Conectando el pasado con el futuro.',
    readingTime: '5 min',
    author: {
      name: 'Saúl Milla',
      role: 'Estratega Digital',
      avatar: 'https://picsum.photos/seed/saul/100/100'
    },
    content: `
      <p>Como Scout y apasionado por la historia de Honduras, he descubierto que las marcas más exitosas son aquellas que tienen un propósito arraigado en su identidad. No vendemos productos, vendemos soluciones con contexto.</p>
      
      <h2>Honduras: Un mercado de historias</h2>
      <p>Nuestra cultura es rica y diversa. Una estrategia digital que ignore las raíces de su audiencia está condenada al fracaso. El marketing moderno en nuestro país debe ser un puente entre la tradición y la tecnología.</p>
      
      <h3>Integración de Contenido Histórico</h3>
      <p>En mis videos de YouTube sobre la historia de Honduras, he notado que el engagement es superior cuando tocamos fibras de identidad nacional. Esa misma técnica se aplica a las marcas corporativas.</p>
      
      <p><strong>¿Cuál es la historia detrás de tu empresa?</strong> Si no la cuentas tú, el mercado inventará una. La narrativa es la base de la autoridad digital.</p>
    `,
    date: '12 de Mayo, 2024',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000'
  }
];
