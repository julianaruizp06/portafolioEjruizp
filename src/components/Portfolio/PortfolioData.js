const CATEGORIES = [
  'DEVELOPMENT',
  'WEB DESIGN',
  'APPLICATION',
  'DESIGN',
  'MOBILE',
  'COLABORATION',
];

const data = [
  {
    id: 1,
    year: '2024',
    date: '16/8/2024',
    category: 'WEB DESIGN',
    title: 'Mi Portafolio',
    image: 'portafolio.svg',
    technologies: [
      'PWA',
      'React',
      'CSS Modules',
      'Responsive',
      'Neumorphism',
      'Netlify',
      'Markdown',
      'HTML',
      'JS',
      'react-transition-group',
      'Formspree',
      'Eslint',
      'Prettier',
    ],
    desc: `Este proyecto ha sido una labor de amor, diseñado para reflejar mi pasión y habilidades.
     He invertido mucho tiempo en crear un portafolio que no solo muestre mi trabajo, sino también mi e
     nfoque estético y funcional.Este portafolio está construido como una Progressive Web App (PWA), 
     lo que permite instalarlo directamente en tu dispositivo para una experiencia más inmersiva y accesible.`,
    links: {
      code: 'https://github.com/julianaruizp06/ejulianaruizpdev',
      page: 'https://ejulianaruizpdev.netlify.app/',
    },
  },
  {
    id: 2,
    year: '2023',
    date: '21/3/2023',
    category: 'DEVELOPMENT',
    title: 'Autotrend Landing Page',
    image: 'landingcars.svg',
    technologies: [
      'Webpack',
      'Yarn',
      'Sass(scss)',
      'Babel',
      'BEM',
      'SwiperJs',
      'Github Pages',
      'Github Actions',
      'Responsive',
      'HTML',
      'CSS',
      'JS',
    ],
    desc: `Este proyecto es una landing page con tematica de carros algo simple, me sirvio principalmente para practicar y entender mejor webpack, antes de pasar a esbuild con Vite D:
    también para ver como funciona sass junto con la metodologia BEM, implementar un efecto parallax de otra manera y un slider con SwiperJs.
    Esta vez lo subi a Github Pages, usando github actions, creando un pequeño workflow que crea el build y lo mueve a la rama de gh-pages para el deploy.`,
    links: {
      code: 'https://github.com/julianaruizp06/AutoTrendLandingPage',
      page: 'https://autotrendlandingpageejr.netlify.app',
    },
  },
  {
    id: 3,
    year: '2022',
    date: '10/4/2022',
    category: 'APPLICATION',
    title: 'MoviesApp',
    image: 'movieApp.webp',
    technologies: [
      'ReactJs',
      'Material-ui (MUI)',
      'HTML',
      'CSS',
      'JS',
      'SwiperJs',
      'Vercel',
      'Responsive',
      'TMBD',
      'Axios',
      'Moment',
      'react-router-dom',
    ],
    desc: `Este proyecto es un sitio web para navegar entre peliculas y ver detalles de cada una. 
    Ayudandonos de material-ui(mui) para el diseño y la API de TheMovieDataBase TMDB para obtener información de las peliculas.
    Fue un proyecto complicado, por el manejo de los datos, principalmente la seccion del buscador; ademas de que el diseño fue completamente pensado por mi.
    Te permite iniciar sesión con tu cuenta de TMDB y agregar peliculas a tus favoritos, calificarlas o marcarlas como vistas.
    Falta terminar la pestaña de actores y series que seria muy parecida a la de peliculas.
    El despliegue del sitio esta en vercel, se guarda la clave de la api en variables de ambiente.
    Me gustaria aprender y mejorar el rendimiento en este proyecto
    `,
    links: {
      code: 'https://github.com/Tono2007/Movies-App',
      page: 'https://movies-app-tono2007.vercel.app',
    },
  },
  {
    id: 4,
    year: '2022',
    date: '04/5/2022',
    category: 'WEB DESIGN',
    title: 'LOL-APP',
    image: 'lolApp.webp',
    technologies: [
      'ReactJs',
      'Styled-Components',
      'HTML',
      'CSS',
      'JS',
      'GSAP',
      'Netlify',
      'Responsive',
      'Riot API',
      'Axios',
    ],
    desc: `Este proyecto es una aplicación para consultar jugadores y detalles de los campeones del juego.
    Ocupando Styled Components para el diseño y la API de RIOT para obtener información de los jugadores.
    Este proyecto fue práctica para aprender Styled Components y la biblioteca GSAP para las animaciones.
    La clave que tengo para acceder a la api de riot es limitada, en cuanto numero de peticiones y el tiempo que estara activa, puede presentar errores antes que genere otra.
    El despliegue del sitio esta en Netlify.
    `,
    links: {
      code: null,
      //page: 'https://lol-app.netlify.app/',
      page: 'https://master--lol-app.netlify.app/',
    },
  },
  {
    id: 5,
    year: '2022',
    date: '05/11/2022',
    category: 'WEB DESIGN',
    title: 'Pokedex',
    image: 'pokedex.webp',
    technologies: [
      'NextJs',
      'ReactJs',
      'Tailwind',
      'HTML',
      'CSS',
      'JS',
      'PropTypes',
      'Pokeapi',
      'Vercel',
      'Responsive',
      'Axios',
    ],
    desc: `La típica aplicación pokedex que todos hacen, principalmente para practicar nextjs y tener mi primer acercamiento con tailwind y testing.
    Muestra, busca y guarda tus pokemones ademas de secciones como generaciones y tipos.
    Puedes encontrar imagenes, nombres y detalles de cada pokemon.
    Me senti muy comodo con tailwind, el diseño fue totalmente creado por mi.
    Ante la duda de agregar typescript ocupé proptypes para los tipos de datos.
    El despliegue del sitio esta en Vercel.`,
    links: {
      code: 'https://github.com/Tono2007/pokedex',
      page: 'https://pokedex-tono2007.vercel.app/',
    },
  },
  {
    id: 6,
    year: '2022',
    date: '11/11/2022',
    category: 'APPLICATION',
    title: 'React-Libs',
    image: 'reactLibs.webp',
    technologies: ['ReactJs', 'JS', 'Docusaurus ', 'Vercel', 'Responsive'],
    desc: `Para este proyecto queria intentar generar una documentación, me encontre con varias herramientas que ya se encargan de un desarrollo rapido para centrarnos en el contenido.
    Se eligío Docusaurus 2, un moderno generador de sitios estaticos, especializado en documentación ademas de estar construido con React.
    
    Utilizando el preset(classic) de Docusaurus fue muy sencillo generar la estructura de documentación. Se puede personalizar el diseño, crear tus componentes y seguir ocupando React, ademas que el contenido se escribe en mdx.

    El tema que se escogio para llenar con algo fue generar una base de datos con información util, consejos, guias en el uso de React.
    Este proyecto fue muy sencillo, el proposito solo fue agregar una herramienta mas a mis conocimientos que en algun momento puede ser util.
    `,
    links: {
      code: 'https://github.com/Tono2007/React-Libs',
      page: 'https://react-libs.vercel.app/',
    },
  },
  {
    id: 7,
    year: '2023',
    date: '21/05/2023',
    category: 'WEB DESIGN',
    title: 'Slim Mui Template',
    image: 'slimMuiTemplate.webp',
    technologies: [
      'ReactJs',
      'JS',
      'MUI ',
      'Dashboard Template',
      'Netlify',
      'Responsive',
    ],
    desc: `Se trata de una plantilla construida con material-ui(MUI), puede ser usada para construir un panel administrador, analíticas, red social, etc.

    Viene con muchos componentes y paginas demo preconstruidas reutilizables, cuenta con modo oscuro, responsive, code splitting y aliases por defecto. Por gusto personal agregue las guías de airbnb para el linter, pero puede ser cambiado.
    
    Guiándome  de otras platillas que usan las mismas tecnologías  genere una estructura de carpetas sencilla de usar, también viene con una versión  limpia que contiene solamente los componentes y estilos para empezar un nuevo proyecto rápidamente.
    
    Este proyecto me tomo casi 3 meses para la versión 1.0.0 y fue casi puro diseño, pude aprender a generar una versión y liberarla en las releases de github.
    
    En un futuro con tiempo podría agregar más componentes y páginas, además generar una mejor documentación y trabajar en las versiones de typescript, Next, CRA y Remix.
    Este proyecto sé que me será útil también para uso personal cuando me soliciten algo similar.
         `,
    links: {
      code: 'https://github.com/Tono2007/slim-free-react-mui-template',
      page: 'https://slim-free-react-mui-template.netlify.app/',
    },
  },
  {
    id: 101,
    year: '2023',
    date: '06/03/2023',
    category: 'COLABORATION',
    title: 'DustBusters',
    image: 'dustBusters.webp',
    technologies: ['ReactJs', 'Typescript', 'Tailwind ', 'Java', 'Spring Boot'],
    desc: `Proyecto colaborativo desarrollado durante el cohorte8 de No Country, simulación de entorno de trabajo con duranción de 5 semanas, con un equipo de 8 personas donde participe como frontend developer consiguiendo un avance satisfactorio.
    Buenisimo para mejorar abilidades blandas y hacer amistades nuevas.

    El proyecto consistió en Una plataforma de servicio de limpieza que permita a los clientes solicitar y programar servicios de limpieza en su hogar o lugar de trabajo. 
    `,
    links: {
      code: 'https://github.com/No-Country/c9-32-t-javareact',
      page: 'https://dust-busters.netlify.app',
    },
  },
  {
    id: 102,
    year: '2023',
    date: '30/04/2023',
    category: 'COLABORATION',
    title: 'CompraListo',
    image: 'compraListo.webp',
    technologies: ['ReactJs', 'JS', 'Tailwind ', 'Java', 'Spring Boot'],
    desc: `Proyecto colaborativo desarrollado durante el seleccionado7 de No Country, simulación de entorno de trabajo con duranción de 5 semanas, con un equipo de 9 personas donde participe como frontend developer.

    El proyecto consistió en web app para crear, guardar y compartir tus listas de compras. Puedes ingresar desde cualquier dispositivo, crearte una cuenta y empezar a crear tus listas, compartir con tus familiares, generar un pdf o compartir por whatsapp marcar los productos que ya tienes en el supermercado y hasta te calcula cuando vas a gastar. 
    `,
    links: {
      code: 'https://github.com/No-Country/s7-11-t-javareact',
      page: 'https://compralisto0.vercel.app/',
    },
  },
  {
    id: 103,
    year: '2023',
    date: '10/06/2023',
    category: 'COLABORATION',
    title: 'Pigmeo',
    image: 'pigmeo.jpg',
    technologies: ['ReactJs', 'Typescript', 'JS', 'Tailwind '],
    desc: `Proyecto colaborativo desarrollado durante el seleccionado8 de No Country, simulación de entorno de trabajo con duranción de 5 semanas, con un equipo de 12 personas donde participe como frontend developer.

    El proyecto consistió en web app mobile responsive desarrollada para brindar a los usuarios un control total de sus finanzas y facilitar la realización de diversas transacciones de forma rápida y segura.

    -> https://www.youtube.com/watch?v=UJ5vFleryLM
    `,
    links: {
      code: 'https://github.com/No-Country/s8-14-t-mern',
      page: 'https://pigmeo-app.netlify.app/',
    },
  },
];

export default data;
