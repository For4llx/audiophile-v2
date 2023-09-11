import BaseSecondaryNavigation from "../BaseSecondaryNavigation";
import styles from "./TheSecondaryNavigation.module.scss";

const TheSecondaryNavigation: React.FC = () => {
  return (
    <section className={styles.container}>
      <BaseSecondaryNavigation />
    </section>
  );
};

export default TheSecondaryNavigation;
