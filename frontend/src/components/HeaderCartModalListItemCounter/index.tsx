import styles from "./HeaderCartModalListItemCounter.module.scss";

const HeaderCartModalListItemCounter: React.FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>-</button>
      <input className={styles.value} type={"text"} defaultValue={1} readOnly />
      <button className={styles.button}>+</button>
    </div>
  );
};

export default HeaderCartModalListItemCounter;
