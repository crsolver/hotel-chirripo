/**
 * HOTEL CHIRRIPÓ — San Isidro de El General, Pérez Zeledón.
 *
 * Fuentes: Tripadvisor, Petit Futé, Rough Guides, Google, Amarillas CR y la
 * lista de precios de hoteles de Pérez Zeledón (CONCITES 2022).
 *
 * Los valores marcados PLACEHOLDER no están confirmados. Ver PENDIENTES.md.
 * No hay fotos del hotel disponibles: las imágenes quedan en null y la
 * plantilla dibuja marcadores de posición.
 */

export interface Room {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  capacity: number;
  beds: string;
  size: string;
  features: string[];
  image: string | null;
  imageAlt: string;
}

export interface Amenity {
  icon: string;
  title: string;
  text: string;
}

export interface Attraction {
  name: string;
  distance: string;
  text: string;
}

export interface Review {
  name: string;
  origin: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

export interface GalleryItem {
  image: string | null;
  alt: string;
  caption: string;
  tone: number;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  text?: string;
}

export interface Hotel {
  name: string;
  shortName: string;
  legalName: string;
  stars: number;
  tagline: string;
  description: string;
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  contact: {
    phone: string;
    phoneHref: string;
    whatsapp: string;
    email: string;
    address: string;
    city: string;
    mapsQuery: string;
    coords: { lat: number; lng: number };
    social: { label: string; href: string }[];
  };
  checkIn: string;
  checkOut: string;
  currency: string;
  priceFrom: number;
  hero: {
    image: string | null;
    alt: string;
    eyebrow: string;
    titleLead: string;
    titleEm: string;
    titleTail: string;
    facts: { icon: string; text: string }[];
  };
  amenities: Amenity[];
  rooms: Room[];
  attractions: Attraction[];
  gallery: GalleryItem[];
  reviews: Review[];
  sections: {
    rooms: SectionCopy;
    amenities: SectionCopy;
    gallery: SectionCopy;
    location: SectionCopy;
    reviews: { eyebrow: string; title: string };
    contact: {
      eyebrow: string;
      title: string;
      text: string;
      formTitle: string;
      formText: string;
    };
  };
  pages: {
    rooms: {
      eyebrow: string;
      title: string;
      text: string;
      description: string;
    };
  };
  seo: { title: string; description: string; image?: string };
}

const shared = {
  stars: 2,
  contact: {
    phone: '+506 2771 0529',
    phoneHref: '+50627710529',
    // PLACEHOLDER: no se confirmó WhatsApp. Se usa el teléfono fijo.
    whatsapp: '50627710529',
    // Correo tomado de Amarillas CR; existen otros dos (ver PENDIENTES.md).
    email: 'chirripohr13@gmail.com',
    address: 'Calle 1, entre Avenida 2 y 4 — costado sur del Parque Central',
    city: 'San Isidro de El General, Pérez Zeledón, San José, Costa Rica',
    mapsQuery:
      'Hotel Chirripó, Calle 1, San Isidro de El General, Pérez Zeledón, Costa Rica',
    coords: { lat: 9.373298, lng: -83.703131 },
    social: [
      { label: 'Facebook', href: 'https://www.facebook.com/hotelchirripopz/' },
    ],
  },
  // PLACEHOLDER: horarios sin confirmar.
  checkIn: '14:00',
  checkOut: '12:00',
  currency: 'USD',
  // PLACEHOLDER: tarifa de referencia (Petit Futé: desde US$35).
  priceFrom: 35,
} satisfies Partial<Hotel>;

export const hotels: Record<'es' | 'en', Hotel> = {
  es: {
    ...shared,
    name: 'Hotel Chirripó',
    shortName: 'Chirripó',
    legalName: 'Hotel Chirripó',
    tagline: 'Su base en San Isidro, frente al Parque Central',
    description:
      'Hotel de 22 habitaciones frente al Parque Central de San Isidro de El General. Habitaciones sencillas y limpias, con baño privado o compartido, TV por cable, Wi-Fi y desayuno incluido; restaurante y parqueo en el mismo edificio.',

    intro: {
      eyebrow: 'El hotel',
      title: 'Sencillo, céntrico y sin sorpresas',
      paragraphs: [
        'Hotel Chirripó está sobre la Calle 1, frente al Parque Central y a la catedral de San Isidro. La terminal de buses, los bancos, la feria y los restaurantes del centro quedan a pocos minutos caminando.',
        'Es un hotel de 22 habitaciones, pensado para viajeros que necesitan dormir bien y seguir camino: habitaciones limpias, baño privado o compartido, agua caliente, abanico o aire acondicionado y televisión por cable. El restaurante del hotel sirve desayuno y comida típica.',
      ],
      highlights: [
        'Frente al Parque Central',
        '22 habitaciones',
        'Restaurante y parqueo',
      ],
    },

    hero: {
      // PLACEHOLDER: no se encontraron fotos del hotel con permiso de uso.
      image: null,
      alt: 'Fachada del Hotel Chirripó frente al Parque Central (foto pendiente)',
      eyebrow: 'San Isidro de El General · Pérez Zeledón',
      titleLead: 'Frente al parque,',
      titleEm: 'en el corazón',
      titleTail: 'de San Isidro',
      facts: [
        { icon: 'clock', text: 'Recepción 24 horas' },
        { icon: 'pin', text: 'Frente al Parque Central' },
        { icon: 'parking', text: 'Parqueo privado' },
        { icon: 'coffee', text: 'Desayuno incluido' },
      ],
    },

    amenities: [
      {
        icon: 'wifi',
        title: 'Wi-Fi gratis',
        text: 'Conexión inalámbrica en el hotel.',
      },
      {
        icon: 'parking',
        title: 'Parqueo privado',
        text: 'Estacionamiento dentro del hotel.',
      },
      {
        icon: 'utensils',
        title: 'Restaurante',
        text: 'Comida típica e internacional en el hotel.',
      },
      {
        icon: 'coffee',
        title: 'Desayuno incluido',
        text: 'Incluido en la tarifa; confirmar horario.',
      },
      {
        icon: 'tv',
        title: 'TV por cable',
        text: 'Televisor con cable en las habitaciones.',
      },
      {
        icon: 'fan',
        title: 'Abanico o A/C',
        text: 'Ventilación o aire acondicionado según la habitación.',
      },
      {
        icon: 'water',
        title: 'Agua caliente',
        text: 'Baño privado o compartido con agua caliente.',
      },
      {
        icon: 'clock',
        title: 'Recepción 24 horas',
        text: 'Atención a cualquier hora.',
      },
    ],

    rooms: [
      {
        slug: 'economica',
        name: 'Habitación Económica',
        tagline: 'Baño compartido',
        description:
          'La opción más económica del hotel: cama doble, abanico, televisor por cable y baño compartido en el pasillo, con varias duchas y servicios bien cuidados.',
        price: 35,
        capacity: 2,
        beds: '1 cama doble',
        // PLACEHOLDER: tamaño aproximado.
        size: 'Aprox. 14 m²',
        features: [
          'Baño compartido',
          'Agua caliente',
          'TV por cable',
          'Abanico',
          'Wi-Fi',
          'Desayuno incluido',
        ],
        image: null,
        imageAlt: 'Habitación económica con cama doble (foto pendiente)',
      },
      {
        slug: 'doble',
        name: 'Habitación Doble',
        tagline: 'Baño privado',
        description:
          'Habitación con cama doble y baño privado, pensada para parejas o viajeros que prefieren más comodidad. Incluye televisión por cable, abanico o aire acondicionado y desayuno.',
        price: 48,
        capacity: 2,
        beds: '1 cama doble',
        // PLACEHOLDER: tamaño aproximado.
        size: 'Aprox. 18 m²',
        features: [
          'Baño privado',
          'Agua caliente',
          'TV por cable',
          'Abanico o A/C',
          'Wi-Fi',
          'Desayuno incluido',
        ],
        image: null,
        imageAlt: 'Habitación doble con baño privado (foto pendiente)',
      },
      {
        slug: 'familiar',
        name: 'Habitación Familiar',
        tagline: 'Para tres o cuatro',
        description:
          'Habitación con dos camas y espacio para tres o cuatro personas, con baño privado. Útil para familias o grupos que llegan de la montaña o van hacia la península.',
        price: 60,
        capacity: 4,
        beds: '2 camas dobles',
        // PLACEHOLDER: tamaño aproximado.
        size: 'Aprox. 24 m²',
        features: [
          'Baño privado',
          'Agua caliente',
          'TV por cable',
          'Abanico o A/C',
          'Wi-Fi',
          'Desayuno incluido',
        ],
        image: null,
        imageAlt: 'Habitación familiar con dos camas (foto pendiente)',
      },
    ],

    attractions: [
      {
        name: 'Parque Central y Catedral',
        distance: '1 min a pie',
        text: 'El parque, la catedral y la vida del centro, justo enfrente.',
      },
      {
        name: 'Terminal de buses',
        distance: '5 min a pie',
        text: 'Salidas a San José, Dominical y la península.',
      },
      {
        name: 'Feria del Agricultor',
        distance: '10 min a pie',
        text: 'Productos de la zona los sábados por la mañana.',
      },
      {
        name: 'Parque Nacional Chirripó',
        distance: '45 min en carro',
        text: 'Acceso por San Gerardo de Rivas.',
      },
      {
        name: 'Cataratas Nauyaca',
        distance: '40 min en carro',
        text: 'Camino a Dominical, con tour o por cuenta propia.',
      },
      {
        name: 'Playa Dominical',
        distance: '45 min en carro',
        text: 'Arena, olas y restaurantes frente al mar.',
      },
    ],

    gallery: [
      {
        image: null,
        alt: 'Fachada del hotel (foto pendiente)',
        caption: 'Fachada',
        tone: 1,
      },
      {
        image: null,
        alt: 'Habitación doble (foto pendiente)',
        caption: 'Habitación doble',
        tone: 2,
      },
      {
        image: null,
        alt: 'Restaurante del hotel (foto pendiente)',
        caption: 'Restaurante',
        tone: 3,
      },
      {
        image: null,
        alt: 'Parque Central de San Isidro (foto pendiente)',
        caption: 'Parque Central',
        tone: 4,
      },
    ],

    reviews: [
      {
        name: 'Huésped de Tripadvisor',
        origin: 'Viajero con mochila',
        rating: 4,
        text: 'Habitación doble con baño compartido. Sencilla pero limpia, y los baños compartidos estaban muy bien cuidados. El personal fue muy amable, en especial Michael en recepción. Ideal para una noche de paso.',
        date: '2018',
        source: 'Tripadvisor',
      },
      {
        name: 'Huésped de blog',
        origin: 'Viaje en bus por Costa Rica',
        rating: 4,
        text: 'El hotel está en la plaza central, frente a la catedral. Cenamos en la terraza viendo pasar la gente. Cuarto sencillo, con abanico y agua caliente; buena parada antes de subir al Chirripó.',
        date: '2010',
        source: 'Blog de viaje',
      },
    ],

    sections: {
      rooms: {
        eyebrow: 'Habitaciones',
        title: 'Tres opciones, precio justo',
        text: 'Habitaciones sencillas y limpias, con baño privado o compartido. Todas incluyen TV por cable, abanico y desayuno; consulte disponibilidad por WhatsApp o teléfono.',
      },
      amenities: {
        eyebrow: 'Servicios',
        title: 'Lo práctico, resuelto',
        text: 'Un hotel de ciudad para dormir bien y salir temprano: lo necesario, sin extras que no va a usar.',
      },
      gallery: {
        eyebrow: 'Galería',
        title: 'El hotel y su entorno',
        text: 'Fotos del hotel y del parque. Toque una imagen para verla más grande.',
      },
      location: {
        eyebrow: 'Ubicación',
        title: 'Todo el centro, a pie',
        text: 'Sobre Calle 1, frente al Parque Central y la catedral. Terminal de buses, bancos, farmacias y restaurantes a pocos minutos.',
      },
      reviews: {
        eyebrow: 'Huéspedes',
        title: 'Lo que dicen quienes se han quedado',
      },
      contact: {
        eyebrow: 'Reservas',
        title: 'Reserve directo con el hotel',
        text: 'Escríbanos o llame. Le responde una persona del hotel; si llega de noche, avise para coordinar la recepción.',
        formTitle: 'Consultar disponibilidad',
        formText: 'Indique las fechas y le confirmamos por WhatsApp o correo.',
      },
    },

    pages: {
      rooms: {
        eyebrow: 'Habitaciones',
        title: 'Tres formas de quedarse',
        text: 'Baño compartido, baño privado o habitación familiar. Todas con TV por cable, abanico y desayuno incluido.',
        description:
          'Habitaciones y precios del Hotel Chirripó, frente al Parque Central de San Isidro de El General.',
      },
    },

    seo: {
      title: 'Hotel frente al Parque Central de San Isidro de El General',
      description:
        'Hotel de 22 habitaciones en el centro de San Isidro de El General, Pérez Zeledón. Baño privado o compartido, TV por cable, Wi-Fi, desayuno y parqueo. Reserve directo.',
    },
  },

  en: {
    ...shared,
    name: 'Hotel Chirripó',
    shortName: 'Chirripó',
    legalName: 'Hotel Chirripó',
    tagline: 'Your base in San Isidro, facing the Central Park',
    description:
      'A 22-room hotel facing the Central Park of San Isidro de El General. Simple, clean rooms with private or shared bathrooms, cable TV, Wi-Fi and breakfast; restaurant and parking on site.',

    intro: {
      eyebrow: 'The hotel',
      title: 'Simple, central and no surprises',
      paragraphs: [
        "Hotel Chirripó sits on Calle 1, facing San Isidro's Central Park and cathedral. The bus terminal, banks, the farmers market and downtown restaurants are all a few minutes away on foot.",
        'It is a 22-room hotel for travelers who need a good night of sleep and an early start: clean rooms, private or shared bathroom, hot water, fan or air conditioning and cable TV. The hotel restaurant serves breakfast and local food.',
      ],
      highlights: [
        'Facing the Central Park',
        '22 rooms',
        'Restaurant and parking',
      ],
    },

    hero: {
      image: null,
      alt: 'Hotel Chirripó facade facing the Central Park (photo pending)',
      eyebrow: 'San Isidro de El General · Pérez Zeledón',
      titleLead: 'Facing the park,',
      titleEm: 'in the heart',
      titleTail: 'of San Isidro',
      facts: [
        { icon: 'clock', text: '24-hour front desk' },
        { icon: 'pin', text: 'Facing the Central Park' },
        { icon: 'parking', text: 'Private parking' },
        { icon: 'coffee', text: 'Breakfast included' },
      ],
    },

    amenities: [
      {
        icon: 'wifi',
        title: 'Free Wi-Fi',
        text: 'Wireless internet in the hotel.',
      },
      {
        icon: 'parking',
        title: 'Private parking',
        text: 'Parking on site.',
      },
      {
        icon: 'utensils',
        title: 'Restaurant',
        text: 'Local and international food at the hotel.',
      },
      {
        icon: 'coffee',
        title: 'Breakfast included',
        text: 'Included in the rate; ask about the schedule.',
      },
      {
        icon: 'tv',
        title: 'Cable TV',
        text: 'Cable TV in the rooms.',
      },
      {
        icon: 'fan',
        title: 'Fan or A/C',
        text: 'Fan or air conditioning depending on the room.',
      },
      {
        icon: 'water',
        title: 'Hot water',
        text: 'Private or shared bathroom with hot water.',
      },
      {
        icon: 'clock',
        title: '24-hour front desk',
        text: 'Assistance at any time.',
      },
    ],

    rooms: [
      {
        slug: 'economica',
        name: 'Economy Room',
        tagline: 'Shared bathroom',
        description:
          'The cheapest option in the hotel: double bed, fan, cable TV and a shared bathroom down the hall, with several well-kept showers and toilets.',
        price: 35,
        capacity: 2,
        beds: '1 double bed',
        size: 'Approx. 14 m²',
        features: [
          'Shared bathroom',
          'Hot water',
          'Cable TV',
          'Fan',
          'Wi-Fi',
          'Breakfast included',
        ],
        image: null,
        imageAlt: 'Economy room with a double bed (photo pending)',
      },
      {
        slug: 'doble',
        name: 'Double Room',
        tagline: 'Private bathroom',
        description:
          'A room with a double bed and private bathroom, for couples or travelers who prefer more comfort. Includes cable TV, fan or air conditioning, and breakfast.',
        price: 48,
        capacity: 2,
        beds: '1 double bed',
        size: 'Approx. 18 m²',
        features: [
          'Private bathroom',
          'Hot water',
          'Cable TV',
          'Fan or A/C',
          'Wi-Fi',
          'Breakfast included',
        ],
        image: null,
        imageAlt: 'Double room with a private bathroom (photo pending)',
      },
      {
        slug: 'familiar',
        name: 'Family Room',
        tagline: 'For three or four',
        description:
          'A room with two beds and space for three or four people, with a private bathroom. Good for families or groups coming down from the mountains or heading to the peninsula.',
        price: 60,
        capacity: 4,
        beds: '2 double beds',
        size: 'Approx. 24 m²',
        features: [
          'Private bathroom',
          'Hot water',
          'Cable TV',
          'Fan or A/C',
          'Wi-Fi',
          'Breakfast included',
        ],
        image: null,
        imageAlt: 'Family room with two beds (photo pending)',
      },
    ],

    attractions: [
      {
        name: 'Central Park & Cathedral',
        distance: '1 min walk',
        text: 'The park, the cathedral and downtown life, right across the street.',
      },
      {
        name: 'Bus terminal',
        distance: '5 min walk',
        text: 'Departures to San José, Dominical and the peninsula.',
      },
      {
        name: 'Farmers Market',
        distance: '10 min walk',
        text: 'Local produce on Saturday mornings.',
      },
      {
        name: 'Chirripó National Park',
        distance: '45 min drive',
        text: 'Access via San Gerardo de Rivas.',
      },
      {
        name: 'Nauyaca Waterfalls',
        distance: '40 min drive',
        text: 'On the road to Dominical, with a tour or on your own.',
      },
      {
        name: 'Dominical Beach',
        distance: '45 min drive',
        text: 'Sand, surf and beachfront restaurants.',
      },
    ],

    gallery: [
      {
        image: null,
        alt: 'Hotel facade (photo pending)',
        caption: 'Facade',
        tone: 1,
      },
      {
        image: null,
        alt: 'Double room (photo pending)',
        caption: 'Double room',
        tone: 2,
      },
      {
        image: null,
        alt: 'Hotel restaurant (photo pending)',
        caption: 'Restaurant',
        tone: 3,
      },
      {
        image: null,
        alt: 'San Isidro Central Park (photo pending)',
        caption: 'Central Park',
        tone: 4,
      },
    ],

    reviews: [
      {
        name: 'Tripadvisor guest',
        origin: 'Backpacker',
        rating: 4,
        text: 'Double room with a shared bathroom. Simple but clean, and the shared bathrooms were very well kept. The staff was very helpful, especially Michael at reception. Ideal for an overnight stop.',
        date: '2018',
        source: 'Tripadvisor',
      },
      {
        name: 'Travel blogger',
        origin: 'Bus trip through Costa Rica',
        rating: 4,
        text: 'The hotel is on the central square, facing the cathedral. We had dinner on the patio watching the town go by. Simple room with a fan and hot water; a good stop before climbing Chirripó.',
        date: '2010',
        source: 'Travel blog',
      },
    ],

    sections: {
      rooms: {
        eyebrow: 'Rooms',
        title: 'Three options, fair price',
        text: 'Simple, clean rooms with a private or shared bathroom. All include cable TV, fan and breakfast; check availability by WhatsApp or phone.',
      },
      amenities: {
        eyebrow: 'Amenities',
        title: 'The practical things, taken care of',
        text: 'A city hotel for sleeping well and leaving early: what you need, without extras you will not use.',
      },
      gallery: {
        eyebrow: 'Gallery',
        title: 'The hotel and its surroundings',
        text: 'Photos of the hotel and the park. Tap an image to see it larger.',
      },
      location: {
        eyebrow: 'Location',
        title: 'Downtown, all on foot',
        text: 'On Calle 1, facing the Central Park and the cathedral. Bus terminal, banks, pharmacies and restaurants are minutes away.',
      },
      reviews: {
        eyebrow: 'Guests',
        title: 'What past guests say',
      },
      contact: {
        eyebrow: 'Bookings',
        title: 'Book direct with the hotel',
        text: 'Message or call us. A person at the hotel will reply; if you arrive at night, let us know so we can coordinate the front desk.',
        formTitle: 'Check availability',
        formText: 'Send your dates and we will confirm by WhatsApp or email.',
      },
    },

    pages: {
      rooms: {
        eyebrow: 'Rooms',
        title: 'Three ways to stay',
        text: 'Shared bathroom, private bathroom or family room. All with cable TV, fan and breakfast included.',
        description:
          'Rooms and rates at Hotel Chirripó, facing the Central Park of San Isidro de El General.',
      },
    },

    seo: {
      title: 'Hotel facing the Central Park of San Isidro de El General',
      description:
        '22-room hotel in downtown San Isidro de El General, Pérez Zeledón. Private or shared bathroom, cable TV, Wi-Fi, breakfast and parking. Book direct.',
    },
  },
};
