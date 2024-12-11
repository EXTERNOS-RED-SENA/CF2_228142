export default {
  global: {
    componenteFormativo:
      'Cableado estructurado: instalación y cumplimiento normativo',
    descripcionCurso:
      'El contenido aborda aspectos de la instalación de cableado estructurado y las normativas internacionales y nacionales que regulan la instalación para asegurar la calidad y seguridad del sistema. Se abordan procedimientos de instalación, selección de materiales y herramientas, así como interpretación de planos y documentación técnica. Finalmente, se subraya la importancia del control de calidad y la gestión de riesgos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
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
        titulo: 'Marco normativo del cableado estructurado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estándares Internacionales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normativa nacional',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Certificaciones y cumplimiento',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de instalación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de cableado y categorías',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas y materiales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Procedimientos de instalación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Documentación técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Planos y diagramas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Especificaciones técnicas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos de verificación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad y buenas prácticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Normas de seguridad en instalación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Gestión de riesgos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Control de calidad',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Conclusiones',
        desarrolloContenidos: true,
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
        download: 'downloads/228142_CF02_DU.pdf',
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
      tema: '1.  Marco normativo del cableado estructurado',
      referencia:
        'Camacol Colombia  (2024,septiembre 10) <i>Actualización Reglamento Técnico de Instalaciones Eléctricas (RETIE) Resolución 40117 de 2024</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5tBwk7BPVFE ',
    },
    {
      tema: '1.  Marco normativo del cableado estructurado',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. <i>Procesos y normatividad del sector eléctrico</i>  (2023 julio 12)',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QdO36H187yo ',
    },
    {
      tema: '2. Fundamentos de instalación',
      referencia:
        'AMGElectric (2024, junio 4). <i>Herramientas básicas de Electricista</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oDL5vMZRzoU ',
    },
    {
      tema: '3. Documentación técnica',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 23). <i>Introducción a la documentación técnica de la instalación eléctrica</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rtFjKCqvo04',
    },
    {
      tema: '5. Seguridad y buenas prácticas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, marzo 4). <i>Riesgos de la electricidad: caso de ejemplo</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ls-pANyapho ',
    },
    {
      tema: '5. Seguridad y buenas prácticas',
      referencia:
        'ARL SURA (2020, noviembre 10). <i>Las cinco reglas de oro para trabajos eléctricos</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8UYgRMjtjPU',
    },
  ],
  glosario: [
    {
      termino: 'Cableado estructurado',
      significado:
        'Sistema de interconexión de cables y componentes que permite la transmisión de datos y servicios de telecomunicaciones en una infraestructura.',
    },
    {
      termino: 'Código Eléctrico Colombiano',
      significado:
        'Normativa nacional (NTC 2050) que regula las instalaciones eléctricas en Colombia, asegurando la seguridad y el correcto funcionamiento de los sistemas.',
    },
    {
      termino: 'Control de calidad',
      significado:
        'Proceso de verificación y aseguramiento de que todos los componentes y procedimientos de instalación cumplen con los estándares de rendimiento establecidos.',
    },
    {
      termino: 'Documentación técnica',
      significado:
        'Conjunto de documentos que incluyen planos, diagramas y especificaciones técnicas que guían la instalación y el mantenimiento del sistema de cableado.',
    },
    {
      termino: 'Estándares internacionales',
      significado:
        'Conjuntos de normas que regulan la instalación y funcionamiento de sistemas de cableado a nivel global, como ANSI/TIA-568 e ISO/IEC 11801.',
    },
    {
      termino: 'Fundamentos de instalación',
      significado:
        'Conjunto de conocimientos y procedimientos básicos necesarios para realizar la instalación adecuada de un sistema de cableado estructurado.',
    },
    {
      termino: 'Gestión de riesgos',
      significado:
        'Proceso de identificación, evaluación y mitigación de posibles peligros en la instalación de sistemas eléctricos y de cableado.',
    },
    {
      termino: 'Mejores prácticas',
      significado:
        'Estrategias y procedimientos recomendados para garantizar la seguridad, eficiencia y calidad en la instalación y mantenimiento de cableado estructurado.',
    },
    {
      termino: 'Marco normativo',
      significado:
        'Conjunto de regulaciones y estándares que guían la instalación y operación de sistemas de cableado, incluyendo normativas nacionales e internacionales.',
    },
    {
      termino: 'Normas de seguridad',
      significado:
        'Conjunto de directrices que establecen procedimientos y requisitos para garantizar un ambiente de trabajo seguro durante la instalación de cableado estructurado.',
    },
    {
      termino: 'Planos y diagramas',
      significado:
        'Representaciones gráficas que ilustran la disposición y conexión de componentes en un sistema de cableado estructurado, facilitando la instalación y mantenimiento.',
    },
    {
      termino: 'Procedimientos de instalación',
      significado:
        'Secuencia de pasos y técnicas a seguir durante la instalación de un sistema de cableado, asegurando su correcto funcionamiento y cumplimiento normativo.',
    },
    {
      termino: 'Reglamento Técnico de Instalaciones Eléctricas (RETIE)',
      significado:
        'Normativa que establece los requisitos técnicos y de seguridad para las instalaciones eléctricas en Colombia.',
    },
    {
      termino: 'Seguridad eléctrica',
      significado:
        'Conjunto de prácticas y normas que buscan prevenir accidentes y garantizar la protección de las personas y bienes durante la manipulación de sistemas eléctricos.',
    },
    {
      termino: 'Simbología eléctrica',
      significado:
        'Conjunto de símbolos y convenciones gráficas utilizados en planos y diagramas eléctricos para representar componentes, circuitos y conexiones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cardozo Cabal, M. C., Castro Aranda, F., & Gómez Luna, E. (2023). Revisión crítica de herramientas para monitoreo y gestión en transformadores de distribución ante la integración de recursos de energía distribuida. <i>Ingeniería</i>, 28(1), e18786. Universidad Distrital Francisco José de Caldas. ',
      link: 'https://doi.org/10.14483/23448393.18786',
    },
    {
      referencia:
        'Gil Montoya, F., Manzano-Agugliaro, F., Gómez López, J., & Sánchez Alguacil, P. (2012). Técnicas de investigación en calidad eléctrica: Ventajas e inconvenientes. <i>Dyna</i>, 79(173), 66-74. Universidad Nacional de Colombia.',
    },
    {
      referencia:
        'IEEE, C62.82.1, “IEEE Standard for Insulation Coordination-Definitions, Principles, and Rules ", 2010, en IEEE Std C62.82.1-2010 (Revisión de IEEE Std 1313.1-1996) , vol., No., Págs. 1-22, 15 de abril de 2011, doi: 10.1109 / IEEESTD.2011.5754137. Disponoble en:',
      link:
        'https://ieeexplore.ieee.org/document/5754137/references#references',
    },
    {
      referencia:
        'International Electrotechnical Commission (IEC) 60071-1, "Coordination Insulation, definitions, principies, and rule", edition 8.02006. Disponible en:',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (s.f.). <i>Norma Técnica Colombiana NTC 2050: Código Eléctrico Colombiano</i>. Recuperado de ',
      link:
        'https://www.ugc.edu.co/pages/juridica/documentos/institucionales/Norma_%20NTC_2050_98_codigo_electrico_col.pdf',
    },
    {
      referencia:
        'Maza Amador, J. de J. (2019). <i>Manual técnico de normatividad y estándares internacionales aplicado al sistema de cableado estructurado (SCS) </i>(2.ª ed.). SENA. ',
      link: 'https://repositorio.sena.edu.co/handle/11404/5833',
    },
    {
      referencia:
        'Melguizo Bermúdez, S. (2009). <i>Instalaciones eléctricas: teoría y aplicaciones domiciliarias</i> (11.ª ed.). Centro de Publicaciones Universidad Nacional.',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (2024). <i>Resolución número 40150 de 03 de mayo de 2024</i>. Recuperado de ',
      link:
        'https://www.ugc.edu.co/pages/juridica/documentos/institucionales/Norma_%20NTC_2050_98_codigo_electrico_col.pdf',
    },
    {
      referencia:
        'North American Electric Reliability Council. “Electric System Restoration Reference Document”. Princeton Forrestal Village, New Jersey, April 1993. [Consultado 23 de enero de 2022]. Disponible en: ',
      link:
        'https://support.sosintl.com//AvatarHandler.ashx?radfile=%5CDepartments%5C1%5CStudy%20Guides%5CNERC%5CESRRef11.pdf',
    },
    {
      referencia:
        'Universidad Tecnológica De Bolívar “Guía Para Diseñar Instalaciones Eléctricas Domiciliarias Según Ntc 2050 Y Retie” 2012 ',
      link: 'https://biblioteca.utb.edu.co/notas/tesis/0063145.pdf',
    },
  ],
}
