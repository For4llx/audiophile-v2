import BaseIconLogo from "../BaseIconLogo";
import BaseNavigation from "../BaseNavigation";
import styles from "./FooterMenu.module.scss";

const FooterMenu: React.FC = () => {
  return (
    <section className={styles.container}>
      <BaseIconLogo />
      <BaseNavigation />
    </section>
  );
};

export default FooterMenu;
