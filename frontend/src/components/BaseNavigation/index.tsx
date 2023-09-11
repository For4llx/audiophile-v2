import styles from "./BaseNavigation.module.scss";

const BaseNavigation: React.FC = () => {
  return (
    <nav>
      <menu className={styles.menu}>
        <li>
          <a className={styles.link}>Home</a>
        </li>
        <li>
          <a className={styles.link}>Headphones</a>
        </li>
        <li>
          <a className={styles.link}>Speakers</a>
        </li>
        <li>
          <a className={styles.link}>Earphones</a>
        </li>
      </menu>
    </nav>
  );
};

export default BaseNavigation;
