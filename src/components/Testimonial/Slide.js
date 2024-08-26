import styles from './Testimonial.module.css';
/* 
const img = require.context('../../assets', true); */
const Slide = ({ valueIndex, index, dataLength, data }) => {
  const { id, company, name, level, work, testimony, date, profileImg } = data;

  // eslint-disable-next-line import/no-dynamic-require
  const img = require(`../../assets/testimonial/${profileImg}`);
  let position = 'nextSlide';
  if (valueIndex === index) {
    position = 'activeSlide';
  }

  if (
    valueIndex === index - 1 ||
    (index === 0 && valueIndex === dataLength - 1)
  ) {
    position = 'lastSlide';
  }
  return (
    <article className={`${styles.slide} ${styles[position]}`}>
      <div className={styles.left}>
        <div className={styles.slideImg}>
          {/* <img src={img('./testimonial/appdt.jpg').default} alt="fsf" /> */}
          <img width="300px" height="300px" src={img} alt="company" />
        </div>
        <div className={styles.details}>
          <span>{company}</span>
          <h5>{name}</h5>
          <p>{level}</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.quote}>
          <i className="fas fa-quote-right" />
        </div>
        <div className={styles.content}>
          <h3>{work}</h3>
          <h4>{date}</h4>
          <p>{testimony}</p>
        </div>
      </div>
    </article>
  );
};

export default Slide;
