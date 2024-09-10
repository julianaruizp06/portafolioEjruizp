import { useState } from 'react';
import hero from '../../assets/20240511_192004 (1).jpg';
import styles from './AboutMe.module.css';
import { constants } from '../../utils/constants';

const skills = [
  {
    name: 'CSS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    href: 'https://www.w3schools.com/css/',
  },
  {
    name: 'Git',
    img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    href: 'https://git-scm.com/',
  },
  {
    name: 'HTML',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    href: 'https://www.w3.org/html/',
  },
  {
    name: 'Javascript',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'MySQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    href: 'https://www.mysql.com/',
  },
  {
    name: 'NodeJS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    href: 'https://nodejs.org',
  },
  {
    name: 'Postman',
    img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    href: 'https://postman.com',
  },
  {
    name: 'Python',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    href: 'https://www.python.org',
  },
  {
    name: 'React',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    href: 'https://reactjs.org/',
  },
  {
    name: 'Bootstrap',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
    href: 'https://getbootstrap.com',
  },
  {
    name: 'Figma',
    img: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/figma/figma-original.svg',
    href: 'https://www.figma.com/',
  },
  {
    name: 'Postgresql',
    img: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/postgresql/postgresql-plain-wordmark.svg',
    href: 'https://www.figma.com/',
  },
];
function About() {
  return (
    <div className={styles.me}>
      <h2>Quién soy y más sobre mí</h2>
      <p>
        Me llamo Erika Juliana Ruiz. Soy una desarrolladora Front End enfocada
        en el desarrollo y las arquitecturas de software, con un interés
        particular en la Inteligencia Artificial.
        <br />
        <br />
        Poseo conocimientos sólidos en HTML, CSS, JavaScript, React y SQL.
        Cuento con certificaciones en UX/UI y RPA, lo que me permite diseñar
        interfaces de usuario intuitivas y automatizar procesos de manera
        eficiente. Además, mi enfoque en el análisis de datos me capacita para
        tomar decisiones informadas y optimizar proyectos.
        <br />
        <br />
        Estoy en constante búsqueda de oportunidades y desafíos que me permitan
        aprender y desarrollar nuevas habilidades en un entorno dinámico.
      </p>

      <h2>Trayectoria</h2>
      <p>
        Experiencia en dirección de equipos pequeños y en la participación de
        todo proceso de una aplicación (desde el planteamiento inicial,
        extracción de funcionalidades necesarias, desarrollo, pruebas y
        evolución).
        <br />
        Busco ampliar mis conocimientos en la programación y obtener experiencia
        formando parte de un productivo y exitoso equipo. Tengo habilidad para
        adaptarme rapido a otras tecnologias. Estoy buscando un proyecto
        adecuado a mis habilidades que me permita desarrollarme, que me ponga
        nuevos retos y nuevos aprendizajes.
        <br />
      </p>
      <h2>Intereses y Hobbies</h2>
      <p>
        Interesada en aprender más sobre data analytics, data science, y el RPA
        <br /> En mi tiempo suelo hacer ejercicio, ver series y cocinar
      </p>
    </div>
  );
}

function Skills() {
  return (
    <>
      <h2>Habilidades – Tecnologías - Herramientas</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <a
            key={index}
            className={styles.a}
            href={skill.href}
            title={`${skill.name} Site`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={skill.img} alt="css3" width="40" height="40" />
            {skill.name}
          </a>
        ))}
      </div>
    </>
  );
}

function Education() {
  return (
    <div className={styles.educationSection}>
      <h2>Desarrollo Web Full Stack (2022) (Titulado)</h2>
      <h4>Enjoy</h4>
      <span>Enyoi SAS NIT 901616585</span>
      <p>
        Mi experiencia en enyoi fue enriquecedora, con clases desafiantes y
        recursos accesibles. Los proyectos grupales me ayudaron a desarrollar
        habilidades adicionales. Salí con sólidas bases tecnológicas y ahora
        estoy en mi primera experiencia laboral .
      </p>
      <br />

      <h2>Administración de Empresas (2014) (Titulado)</h2>
      <h4>Universidad Nacional de Colombia</h4>
      <span>Sede Manizales</span>
      <p>
        Como adminitradora de empresas aprendi a planificar, organizar, dirigir
        y controlar recursos para alcanzar los objetivos organizacionales
        eficientemente.
      </p>
      <br />

      <h2>Automatización Industrial (2010) (Titulado)</h2>
      <h4>Sena</h4>
      <span>Sena regional Caldas</span>
      <p>
        Como automatizadora indsutrial apreni a diseñar, implementar y mantener
        sistemas automatizados para optimizar la producción, mejorar la
        eficiencia y asegurar la calidad en procesos industriales.
      </p>
    </div>
  );
}

function Studies() {
  return (
    <>
      <h2>Certificados y cursos</h2>
      <ul className={styles.studiesContainer}>
        <li>
          <a
            title="Certificado Diseño UX/UI"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.ux}
          >
            • Certificado Diseño UX/UI -Jump! Educación Nearsure - Agosto 2024
          </a>
        </li>
        <li>
          <a
            title="Curso Básico RPA PIX"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.basicoRpa}
          >
            • Curso Básico RPA PIX Studio - Agosto 2024
          </a>
        </li>

        <li>
          <a
            title="Curso Avanzado RPA PIX"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.avanzadoRpa}
          >
            • Curso Avanzado RPA PIX - Agosto 2024
          </a>
        </li>
        <li>
          <a
            title="Curso Avanzado RPA PIX"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.path}
          >
            • Introducción a RPA y Automatización UI path- Diciembre 2023
          </a>
        </li>
        <li>
          <a
            title="Mini Program Development Level 1"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.miniprogram}
          >
            • Mini Program Development Level 1 -Septiembre 2023
          </a>
        </li>
        <li>
          <a
            title=" Curso Básico de programación"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.programacion}
          >
            • Curso Básico de Programación Básica Platzi -Octubre 2022
          </a>
        </li>
        <li>
          <a
            title="Curso de Pensamiento Lógico: Lenguajes de Programación"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.pensamientoLogico}
          >
            • Curso de Pensamiento Lógico Platzi: Lenguajes de Programación-
            Agosto 2022
          </a>
        </li>
        <li>
          <a
            title=" Curso Básico de Python"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.Python}
          >
            • Curso Básico de Python Platzi -Julio 2022
          </a>
        </li>
        <li>
          <a
            title="Curso Básico de JavaScript"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.javaScript}
          >
            • Curso Básico de JavaScript Platzi- Junio 2022
          </a>
        </li>

        {/*  <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.IntroduccionAPIRest}
          >
            • Escuela Js - Platzi - 20%
          </a>
        </li> */}
      </ul>
      <h2>Eventos</h2>
      <ul className={styles.studiesContainer}>
      <li>
          <a
            title="Hackathon AI VTEX 2023"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.events.vtex}
          >
            • Ganador Hackathon AI VTEX 2023
          </a>
        </li>
      </ul>
    </>
  );
}
function CV() {
  return (
    <>
      <h2>CV Privado</h2>
      <p>Dirigete a la sección de contacto.</p>
      <button type="button" className="boxShadow" disabled>
        DESCARGA CV
      </button>
    </>
  );
}
function Experience() {
  return (
    <>
    <button type="button" className="boxShadow" disabled>
        <h4>Softgic Abril 2023</h4>
      </button>
      <br />
      <h3>Desarrollador Frontend en Proyecto de Fábrica de Miniprograms</h3>
      <h2>Claro</h2>
      <br />
      <p>    
        Desarrollar un servicio APP dedicado al desarrollo,
        revisión y publicación de Miniprograms (MP). Realizando Migracion a react Native 
        de la app movil de Claro, implementando diferentes módulos, dar
        soporte a la estabiliazación y resolución de bugs.
      </p>
      <ul className={styles.studiesContainer}>
        <li>
          <a>
            •  Implementación de interfaces de usuario para la plataforma de gestión de Miniprograms, asegurando una experiencia de usuario intuitiva y responsiva.
          </a>
        </li>
        <li>
          <a>
            • Conexión de la interfaz con las APIs backend para la gestión de Miniprograms.
          </a>
        </li>
        <li>
          <a>
            • Asegurar la calidad del código mediante revisiones regulares, pruebas y optimización del rendimiento de la aplicación.
          </a>
        </li>
        <li>
          <a>
            • Implementación de mejoras continuas y corrección de errores en la interfaz de usuario y experiencia del usuario.
          </a>
        </li>
        <li>
          <a>
            • Provisión de documentación detallada y soporte inicial para el equipo de mantenimiento y los usuarios.
          </a>
        </li>
        </ul>

      <button type="button" className="boxShadow" disabled>
        <h4>.......</h4>
      </button>
    </>
  );
}

function AboutMe() {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.AboutLeft}>
          <span>Actualizado el 21 de Agosto, 2024</span>
          <div className={styles.leftImg}>
            <img
              src={hero}
              alt="E Juliana Ruiz Profile"
              className={styles.img}
            />
            <h1>{'<Erika Juliana Ruiz/>'}</h1>
            <a
              title="Buy me a coffe"
              className={styles.supportBtn}
              href={constants.profilesUrls.buymeacoffee}
              target="_blank"
              rel="noreferrer noopener"
            >
              Contáctame
            </a>
            {/* <button className={styles.supportBtn} type="button">
              APOYAME
            </button> */}
            <p>Desarrollo de software con ❤️ </p>
            <p> y mucho ☕️</p>
          </div>
        </div>
        <div className={styles.AboutRight}>
          <div>
            {/* <span>Actualizado el 5 de Marzo, 2022</span> */}
            <ul className={styles.tabs}>
              <li className={activeSection === 0 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(0)}
                  className={styles.tabBtn}
                  aria-label="about"
                >
                  about
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 1 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(1)}
                  className={styles.tabBtn}
                  aria-label="skills"
                >
                  skills
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 2 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(2)}
                  className={styles.tabBtn}
                  aria-label="formación"
                >
                  formación
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 3 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(3)}
                  className={styles.tabBtn}
                  aria-label="certificados"
                >
                  Certificados
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 4 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(4)}
                  className={styles.tabBtn}
                  aria-label="experiencia"
                >
                  Experiencia
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 5 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(5)}
                  className={styles.tabBtn}
                  aria-label="cv"
                >
                  CV
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              {/* <li>
                <span>Actualizado el 5 de Marzo, 2022</span>
              </li> */}
            </ul>
            <hr />
          </div>
          <div className={styles.tabContent}>
            {activeSection === 0 && <About />}
            {activeSection === 1 && <Skills />}
            {activeSection === 2 && <Education />}
            {activeSection === 3 && <Studies />}
            {activeSection === 4 && <Experience />}
            {activeSection === 5 && <CV />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
