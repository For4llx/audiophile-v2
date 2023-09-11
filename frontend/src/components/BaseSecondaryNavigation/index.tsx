import styles from "./BaseSecondaryNavigation.module.scss";

const BaseSecondaryNavigation: React.FC = () => {
  return (
    <nav className={styles.container}>
      <menu className={styles.menu}>
        <li className={styles.item}>
          <a>
            <article className={styles.headphones}>
              <h1 className={styles.title}>Headphones</h1>
              <button className={styles.button}>Shop</button>
            </article>
          </a>
        </li>
        <li className={styles.item}>
          <a>
            <article className={styles.speakers}>
              <h1 className={styles.title}>Speakers</h1>
              <button className={styles.button}>Shop</button>
            </article>
          </a>
        </li>
        <li className={styles.item}>
          <a>
            <article className={styles.earphones}>
              <h1 className={styles.title}>Earphones</h1>
              <button className={styles.button}>Shop</button>
            </article>
          </a>
        </li>
      </menu>
    </nav>
  );
};

export default BaseSecondaryNavigation;
