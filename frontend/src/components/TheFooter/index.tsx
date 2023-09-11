import FooterBody from "../FooterBody";
import FooterMenu from "../FooterMenu";
import styles from "./TheFooter.module.scss";

const TheFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <FooterMenu />
      <FooterBody />
    </footer>
  );
};

export default TheFooter;
