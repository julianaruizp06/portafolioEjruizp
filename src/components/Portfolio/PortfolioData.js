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
    category: 'DESIGN',
    title: 'blog de Cafe',
    image: 'cafe.svg',
    technologies: ['HTML', 'CSS'],
    desc: `Este proyecto es un sitio web para dar a conocer un producto
    `,
    links: {
      code: 'https://github.com/julianaruizp06/Blog',
      page: 'https://blogcafeejr.netlify.app/',
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
];

export default data;
