import BaseMenu from "../BaseMenu";
import styles from "./HeaderMenu.module.scss";

interface IHeaderMenu {
  cartRef: any;
  menuRef: any;
}

const HeaderMenu: React.FC<IHeaderMenu> = ({ cartRef, menuRef }) => {
  return (
    <section className={styles.container}>
      <BaseMenu menuRef={menuRef} cartRef={cartRef} />
    </section>
  );
};

export default HeaderMenu;
