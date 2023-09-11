import HeaderCartModalFooter from "../HeaderCartModalFooter";
import HeaderCartModalHeader from "../HeaderCartModalHeader";
import HeaderCartModalList from "../HeaderCartModalList";
import styles from "./HeaderCartModal.module.scss";

const HeaderCartModal: React.FC = () => {
  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <HeaderCartModalHeader />
        <HeaderCartModalList />
        <HeaderCartModalFooter />
      </article>
    </section>
  );
};

export default HeaderCartModal;
