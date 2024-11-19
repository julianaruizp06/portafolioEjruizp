import { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import hero from '../../assets/file.svg';
import styles from './Hero.module.css';
import { constants } from '../../utils/constants';
import useIsInViewport from '../../utils/hooks/useIsInViewport';

function Hero() {
  const sectionRef = useRef();
  const isInViewport = useIsInViewport(sectionRef);
  const [activeNav, setActiveNav] = useState(false);
  useEffect(() => {
    function handleScroll() {
      window.scrollY > 100 ? setActiveNav(true) : setActiveNav(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      className={
        activeNav ? `${styles.hero} ${styles.heroActive}` : styles.hero
      }
      id="home"
      ref={sectionRef}
    >
      {/*       <div className={styles.boxP}>ss</div>
      <div className={styles.boxS}>f</div> */}
      {/*       <div className="container f_flex top">
       */}{' '}
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h4
            className={isInViewport ? 'useSlideInLeft' : 'useSlideInLeftEnter'}
          >
            ¡HOLA MUNDO!
          </h4>
          <h1>
            Hi, I&#39;m <span>Erika Juliana Ruiz</span>
          </h1>

          <h2>
            a
            <Typewriter
              words={[
                ' Profesional Coder',
                ' Frontend Developer',
                ' Software Developer',
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <h3>
            Con gran interés en el mundo TECH, tanto Frontend como Backend;
            persiguiendo nuevos retos y explorando continuamente las nuevas
            tendencias.
            {/* Experiencia en Creación, prototipado y desarrollo de
            productos digitales innovadores centrados en el usuario. */}
          </h3>
          <div className={styles.socialSkills}>
            <div className={`col_1 ${isInViewport ? styles.slideIn : ''}`}>
              <h5>ENCUENTRAME AQUI</h5>
              <div className={styles.socialContainer}>
                <a
                  title="github contact"
                  href={constants.profilesUrls.github}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Github Profile"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  title="Linkedin contact"
                  href={constants.profilesUrls.linkedin}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Linkedin Profile"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                {/*   <a
                  title="Facebook contact"
                  href={constants.profilesUrls.facebook}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook Profile"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a> */}
              </div>
            </div>
            <div className={`col_1 ${isInViewport ? styles.slideIn : ''}`}>
              <h5>Tecnologias</h5>
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                />
              </figure>            
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="Js"
                />
              </figure>            
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/python/python-original.svg"
                  alt="python"
                />
              </figure>
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="NodeJs"
                />
              </figure>
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mysql/mysql-original-wordmark.svg"
                  alt="MySQL"
                />
              </figure>
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="PostgreSQL"
                />
              </figure>
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="MongoDB"
                />
              </figure>
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/figma/figma-original.svg"
                  alt="Figma"
                />
              </figure>
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/canva/canva-original.svg"
                  alt="Canva"
                />
              </figure>
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src='https://raw.githubusercontent.com/microsoft/PowerBI-Icons/24f1db8bdfab951c25db591772140d2f4ec5bc1e/SVG/Power-BI.svg'
                  alt="Power Bi"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.rightImg}>
            <img
              width="300px"
              height="400px"
              src={hero}
              alt="hero"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
