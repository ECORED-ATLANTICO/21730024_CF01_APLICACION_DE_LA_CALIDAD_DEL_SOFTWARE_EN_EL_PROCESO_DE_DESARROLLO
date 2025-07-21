export default {
  global: {
    Name: 'Fundamentos y procesos en calidad de <em>software</em>',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos de la calidad de <em>software</em>, integrando normas ISO/IEC 9126, 14598 y su transición a ISO/IEC 25000. Incluye métricas básicas, factores de calidad, ciclo de vida del <em>software</em>, aplicación de estándares (PSP, TSP, CMMI, GQM) y modelos de procesos para garantizar productos confiables, eficientes y alineados con las expectativas del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Aplicación de la calidad en el desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Factores clave: análisis, pruebas, código limpio y refactorización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Relación entre procesos, calidad interna/externa y contexto de uso',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ciclo de vida del <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Fases: requerimientos, diseño, codificación, pruebas, validación, mantenimiento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas de revisión y auditoría',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Transición de las normas ISO/IEC 9126 e ISO/IEC 14598 a ISO/IEC 25000',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Fases: requerimientos, diseño, codificación, pruebas, validación, mantenimiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Integración en el marco <em>SQuaRE</em>',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Medición de la calidad del <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Desafíos en la medición de atributos intangibles',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Enfoque cualitativo frente al cuantitativo',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Factores de Calidad según ISO/IEC 9126',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características de la norma',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Métricas externas, internas y de calidad en uso',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Factores de Evaluación según ISO/IEC 14598',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Características de la norma',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Procesos para desarrolladores, usuarios finales y avaladores',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Modelos y estándares de apoyo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'PSP (Personal Software Process): fases y registro de tiempos',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'TSP (Team Software Process):trabajo en equipo y planificación',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo:
              'CMMI (Capability Maturity Model Integration): niveles de madurez',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'GQM (Goal Question Metric): metas, preguntas y métricas',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Familia de Normas ISO/IEC 25000',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Divisiones del modelo <em>SQuaRE</em>',
            hash: 't_8_1',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_21730024_DU.pdf',
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
  complementario: [
    {
      tema: 'Modelo CMMI',
      referencia:
        'SEI. (2010). <em>Modelo CMMI para Desarrollo v1.3.</em> <em>Carnegie Mellon University</em>',
      tipo: 'Guía técnica',
      link:
        'https://es.slideshare.net/slideshow/spanish-technical-report-cmmi-v-1-3-26416661/26416661',
    },
    {
      tema: 'PSP y TSP',
      referencia:
        '<em>Humphrey, W. S.</em> (2017). <em>Introducción al PSP.</em>',
      tipo: 'Libro/PDF',
      link: 'downloads/psp.pdf',
    },
    {
      tema: 'Ciclo de Vida del <em>Software</em>',
      referencia: 'SENA. (2017).',
      tipo: 'Video educativo',
      link: 'https://www.youtube.com/watch?v=XGSPIaLtJ-M',
    },
  ],
  glosario: [
    {
      termino: 'Calidad interna',
      significado:
        'capacidad de un conjunto estático de atributos para satisfacer las necesidades declaradas e implícitas de un producto de <em>software</em> bajo ciertas condiciones especificadas.',
    },
    {
      termino: 'Calidad externa',
      significado:
        'capacidad de un producto de <em>software</em> para desarrollar el comportamiento de un sistema de forma que satisfaga las necesidades del usuario en condiciones reales de uso.',
    },
    {
      termino: 'Calidad en uso:',
      significado:
        'grado en que un producto satisface objetivos con efectividad, eficiencia y satisfacción en un contexto específico.',
    },
    {
      termino: 'Funcionalidad',
      significado:
        'capacidad del <em>software</em> para cumplir con las funciones especificadas, incluyendo adecuación, exactitud y seguridad.',
    },
    {
      termino: 'Fiabilidad',
      significado:
        'capacidad del <em>software</em> para mantener su nivel de funcionamiento bajo condiciones específicas durante un tiempo determinado.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'facilidad con la que los usuarios pueden aprender, operar y entender el <em>software</em>.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'relación entre el rendimiento del <em>software</em> y los recursos utilizados.',
    },
    {
      termino: 'Mantenibilidad',
      significado:
        'grado de facilidad para modificar el <em>software</em>, incluyendo análisis, cambios y pruebas.',
    },
    {
      termino: 'Portabilidad',
      significado:
        'capacidad del <em>software</em> para ser transferido entre diferentes entornos.',
    },
    {
      termino: 'PSP <em>(Personal Software Process)</em>',
      significado:
        'método para mejorar la productividad individual en el desarrollo de <em>software</em> mediante planificación y registro de tiempos.',
    },
    {
      termino: 'TSP <em>(Team Software Process)</em>',
      significado:
        'metodología para optimizar el trabajo en equipo en proyectos de <em>software</em>, enfocada en roles y planificación colaborativa.',
    },
    {
      termino: 'CMMI <em>(Capability Maturity Model Integration)</em>',
      significado:
        'modelo que evalúa y mejora procesos de desarrollo de <em>software</em> mediante niveles de madurez.',
    },
    {
      termino: 'GQM <em>(Goal Question Metric)</em>',
      significado:
        'enfoque para definir métricas basadas en objetivos, preguntas y medidas cuantificables.',
    },
    {
      termino: '<em>SQuaRE</em> (ISO/IEC 5000)',
      significado:
        'familia de normas para gestionar requisitos y evaluación de calidad en sistemas y <em>software.</em>',
    },
    {
      termino: 'Refactorización',
      significado:
        'reestructuración del código sin alterar su funcionalidad para mejorar su mantenibilidad o rendimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abud Figueroa, M. (2000). <em>Calidad en la Industria del <em>Software</em>. La Norma ISO-9126. Recuperado de',
      link:
        'https://repositorio.utp.edu.co/server/api/core/bitstreams/1bb30bc9-250c-4764-8366-27b1e6ed2ef1/content',
    },
    {
      referencia:
        'Garzás, J. (2012). <em>Cómo estandarizar la evaluación de la calidad software</em>... la ISO 9126 y la ISO 25000. Recuperado de:',
      link: 'http://www.javiergarzas.com/2012/10/iso-9126-iso-25000-2.html',
    },
    {
      referencia:
        'ISO/IEC. (2014). <em>ISO/IEC 25000:2014 – Ingeniería de sistemas y <em>software</em> – Requisitos y evaluación de la calidad de sistemas y <em>software</em> (<em>SQuaRE</em>).</em> Ginebra: Organización Internacional de Normalización (ISO).',
      link: '',
    },
    {
      referencia:
        'Instituto de Ingeniería del <em>Software</em> (SEI). (2010). <em>Modelo CMMI para desarrollo v1.3: Guía para la integración de procesos y la mejora de productos</em> [Presentación de diapositivas]. <em>Carnegie Mellon University.</em> Recuperado de',
      link:
        'https://es.slideshare.net/slideshow/spanish-technical-report-cmmi-v-1-3-26416661/26416661',
    },
    {
      referencia: 'Humphrey, W. S. (2017). Introducción al PSP. Recuperado de',
      link: 'https://www.uv.mx/personal/asumano/files/2010/07/psp.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Aydeé López Contador',
          cargo: 'Experta temática',
          centro:
            'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Jair Coll',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
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
