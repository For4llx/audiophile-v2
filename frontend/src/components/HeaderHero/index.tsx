import styles from "./HeaderHero.module.scss";

const HeaderHero: React.FC = () => {
  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <p className={styles.overline}>New product</p>
        <h1 className={styles.title}>XX99 Mark II Headphones</h1>
        <p className={styles.body}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className={styles.button}>See Product</button>
      </article>
    </section>
  );
};

export default HeaderHero;
