import BaseSecondaryNavigation from "../BaseSecondaryNavigation";
import styles from "./HeaderSecondaryNavigationModal.module.scss";

const HeaderSecondaryNavigationModal: React.FC = () => {
  return (
    <section className={styles.container}>
      <BaseSecondaryNavigation />
    </section>
  );
};

export default HeaderSecondaryNavigationModal;
