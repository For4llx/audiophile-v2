import styles from "./HeaderSecondaryNavigation.module.scss";
import HeaderMenu from "../HeaderMenu";
import HeaderSecondaryNavigationModal from "../HeaderSecondaryNavigationModal";

interface IHeaderCart {
  menuRef: any;
  cartRef: any;
}

const HeaderCart: React.FC<IHeaderCart> = ({ cartRef, menuRef }) => {
  return (
    <dialog className={styles.container} ref={menuRef}>
      <HeaderMenu menuRef={menuRef} cartRef={cartRef} />
      <HeaderSecondaryNavigationModal />
    </dialog>
  );
};

export default HeaderCart;
