import styles from "./ShowcaseSecondary.module.scss";

const ShowcaseSecondary: React.FC = () => {
  return (
    <article className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>ZX7 SPEAKER</h1>
        <button className={styles.button}>See product</button>
      </div>
    </article>
  );
};

export default ShowcaseSecondary;
