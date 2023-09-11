import styles from "./ShowcasePrimary.module.scss";

const ShowcasePrimary: React.FC = () => {
  return (
    <article className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>ZX9 SPEAKER</h1>
        <p className={styles.body}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className={styles.button}>See product</button>
      </div>
    </article>
  );
};

export default ShowcasePrimary;
