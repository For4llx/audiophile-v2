import styles from "./ShowCaseTertiary.module.scss";

const ShowCaseTertiary: React.FC = () => {
  return (
    <article className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>YX1 EARPHONES</h1>
        <button className={styles.button}>See product</button>
      </div>
    </article>
  );
};

export default ShowCaseTertiary;
