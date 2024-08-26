import { useState, useRef } from 'react';
import styles from './Contact.module.css';
import { constants } from '../../utils/constants';
import useIsInViewportOnce from '../../utils/hooks/useIsInViewportOnce';
import me from '../../assets/20240511_192004 (1).jpg';

const Contact = () => {
  const sectionRef = useRef();
  const isInViewportOnce = useIsInViewportOnce(sectionRef);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    number: '',
    email: '',
    subject: '',
    message: '',
  });

  const submit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    console.log(formValues);
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify(formValues),
          /*    body: { fd: 'd' }, */
          headers: {
            Accept: 'application/json',
          },
        },
      );
      console.log(response);
      if (response.status !== 200) {
        throw new Error();
      }

      if (response.status === 200) {
        setSuccess(true);
        alert('Mensaje Enviado :)');
        setFormValues({
          name: '',
          number: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (formError) {
      setError(true);
      console.log(formError);
      console.log(formError.response);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={styles.contact} id="contact" ref={sectionRef}>
      <div
        className={`${styles.heading} ${
          isInViewportOnce ? 'useSlideInLeft' : 'useSlideInLeftEnter'
        }`}
      >
        <h4>DATOS DE CONTACTO</h4>
        <h1>¡Trabajemos juntos!</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.box}>
            <div className={styles.img}>
              <img
                width="300px"
                height="400px"
                src={me}
                alt="E Juliana Ruiz Profile"
              />
            </div>
            <div className={styles.details}>
              <h1>Erika Juliana Ruiz </h1>
              <p>
                Estoy disponible en casi todas las redes sociales. Puede
                enviarme un mensaje, le responderé dentro de las 24 horas.
                Siempre puedes contactarme por los siguientes medios.
              </p>
              <br />
              <p>
                Numero:{' '}
                <a
                  title="contact number whatsapp"
                  href={constants.profilesUrls.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {constants.profilesUrls.number}
                </a>
              </p>
              <p>
                Correo:{' '}
                <a
                  title="contact email"
                  href={`mailto: ${constants.profilesUrls.email}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {constants.profilesUrls.email}
                </a>
              </p>
              <br />

              <span> CONTÁCTAME AQUÍ</span>
              <div className={styles.socialContainer}>
                {/*  <a
                  title="contact facebook"
                  href={constants.profilesUrls.facebook}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a> */}
                <a
                  title="contact github"
                  href={constants.profilesUrls.github}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  title="contact linkedin"
                  href={constants.profilesUrls.linkedin}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  title="contact whatsapp"
                  href={constants.profilesUrls.whatsapp}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <p>
            <i className="fas fa-envelope" /> Llena este formulario y mandame un
            mensaje
          </p>
          <form onSubmit={submit} className={styles.form}>
            <div className={`${styles.input} ${styles.inputRow}`}>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formValues.name}
                onChange={handleChange}
              />
              <label htmlFor="name">NOMBRE</label>
            </div>
            <div className={`${styles.input} ${styles.inputRow}`}>
              <input
                type="number"
                name="number"
                id="number"
                value={formValues.number}
                onChange={handleChange}
              />
              <label htmlFor="number">NUMERO </label>
            </div>
            <div className={styles.input}>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formValues.email}
                onChange={handleChange}
              />
              <label htmlFor="email">EMAIL </label>
            </div>
            <div className={styles.input}>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                value={formValues.subject}
                onChange={handleChange}
              />
              <label htmlFor="subject">ASUNTO </label>
            </div>
            <div className={styles.input}>
              <textarea
                type="text"
                name="message"
                id="message"
                cols="10"
                rows="10"
                required
                value={formValues.message}
                onChange={handleChange}
              />
              <label htmlFor="message">MENSAJE </label>
            </div>
            {!isLoading && (
              <button className={styles.submitBtn} type="submit">
                ENVIAR MENSAJE <i className="fas fa-long-arrow-right" />
              </button>
            )}
            {isLoading && (
              <>
                <div className={styles.loader} />
                <p>Enviando Formulario</p>
              </>
            )}
            {error && (
              <span className={styles.errorMsg}>
                Error al enviar formulario intentalo mas tarde
              </span>
            )}
            {success && (
              <span className={styles.successMsg}>Formulario Enviado!</span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
