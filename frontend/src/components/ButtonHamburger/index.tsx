import BaseIconHamburger from "../BaseIconHamburger";
import styles from "./ButtonHamburger.module.scss";

interface IButtonHamburger {
  menuRef: any;
}

const ButtonHamburger: React.FC<IButtonHamburger> = ({ menuRef }) => {
  return (
    <button
      onClick={() =>
        menuRef.current?.open
          ? menuRef.current?.close()
          : menuRef.current?.showModal()
      }
      className={styles.container}
    >
      <BaseIconHamburger />
    </button>
  );
};

export default ButtonHamburger;
