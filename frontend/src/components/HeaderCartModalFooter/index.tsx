import BaseCartFooterRow from "../BaseCartCommonRow";
import HeaderCartModalFooterTotal from "../HeaderCartModalFooterTotal";
import styles from "./HeaderCartModalFooter.module.scss";

const HeaderCartModalFooter: React.FC = () => {
  return (
    <footer className={styles.container}>
      <HeaderCartModalFooterTotal price={"5396"} />
      <button className={styles.button}>Checkout</button>
    </footer>
  );
};

export default HeaderCartModalFooter;
