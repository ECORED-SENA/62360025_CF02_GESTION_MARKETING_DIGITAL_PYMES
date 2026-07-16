export default {
  global: {
    Name: 'Diseño y publicación de contenidos digitales',
    Description:
      'Este componente desarrolla conocimientos y habilidades para diseñar, estructurar y publicar contenidos digitales empresariales mediante herramientas tecnológicas, aplicando principios de comunicación, diseño gráfico, posicionamiento digital y estrategias de difusión para fortalecer la presencia organizacional en redes sociales según objetivos comunicativos y características de la audiencia.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comunicación estratégica para contenidos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Comunicación empresarial en entornos digitales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Proceso básico para planear un comunicado',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Integración del plan de comunicación en redes sociales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Audiencias y adaptación del mensaje digital',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Redacción y construcción de mensajes digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de redacción para medios digitales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Producción de mensajes empresariales efectivos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Integración comunicativa entre plataformas digitales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Mensajes persuasivos y llamados a la acción',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño gráfico aplicado a redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios básicos del diseño gráfico digital',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Teoría del color aplicada a contenidos empresariales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Diseño de piezas gráficas con herramientas gratuitas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Adaptación gráfica según red social',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Herramientas digitales para creación y difusión',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Publicación y administración de contenidos en línea',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Protocolos y criterios para la publicación digital',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Actualización y administración de contenidos web',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Organización y administración escalable de contenidos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Interacción y generación de <em>engagement</em>',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Posicionamiento y visibilidad del contenido digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Herramientas y estrategias de posicionamiento digital',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Optimización de contenidos mediante etiquetas y palabras clave',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estructura y organización de contenidos web',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Captación y gestión estratégica de datos',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Publicación estratégica y propiedad intelectual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Publicación de contenidos según la audiencia',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Propiedad intelectual y uso responsable de contenidos digitales',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Buenas prácticas para la publicación empresarial',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Evaluación y mejora de contenidos publicados',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alcance digital',
      significado:
        'Es el equivalente moderno a estar en la cima de la colina más alta con un megáfono, solo que la colina es internet y el megáfono es tu estrategia digital. Permite a las pequeñas empresas trascender sus límites físicos y llegar a una audiencia global mediante canales digitales como redes sociales, correo electrónico y marketing de contenidos.',
    },
    {
      termino: 'Análisis de audiencia',
      significado:
        'Es el proceso de recopilar, interpretar y comprender información sobre el público objetivo para identificar sus necesidades, preferencias, comportamientos y la forma en que interactúa con una marca o sector.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Es una herramienta que almacena información de un mismo contexto de manera organizada y sistematizada, facilitando su recuperación, análisis o transmisión. Ejemplos son una biblioteca, un listado de clientes o el historial de navegación.',
    },
    {
      termino: 'Canal digital',
      significado:
        'Es un medio que permite comunicar, vender o prestar servicios a través de dispositivos como computadoras, tabletas o teléfonos móviles. Puede ser propio, como un sitio web o una tienda en línea, o externo, como un marketplace o una tienda de terceros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Font, H. G. (2017, 22 de noviembre). ¿Qué es un canal digital? La guía definitiva. Telematel.',
      link: 'https://www.telematel.com/blog/canal-digital-que-es/',
    },
    {
      referencia:
        'Gatward, D. (2024, 27 de marzo). ¿Qué es el alcance digital y cómo puedes implementarlo? Counting Stars.',
      link: 'https://www.counting-stars.co.uk/what-is-digital-outreach-how-can-you-implement-it/',
    },
    {
      referencia:
        'Wilkinson, M. (2024, 25 de junio). Análisis de la audiencia: Qué es y cómo hacerlo. Semrush.',
      link: 'https://es.semrush.com/blog/analisis-de-audiencia/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
