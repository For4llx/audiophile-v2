import styles from "./HeaderCartModalHeader.module.scss";

const HeaderCartModalHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cart (3)</h1>
      <button className={styles.button}>Remove all</button>
    </div>
  );
};

export default HeaderCartModalHeader;
