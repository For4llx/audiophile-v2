import HeaderCartModal from "../HeaderCartModal";
import styles from "./HeaderCart.module.scss";
import HeaderMenu from "../HeaderMenu";

interface IHeaderCart {
  cartRef: any;
  menuRef: any;
}

const HeaderCart: React.FC<IHeaderCart> = ({ cartRef, menuRef }) => {
  return (
    <dialog className={styles.container} ref={cartRef}>
      <HeaderMenu menuRef={menuRef} cartRef={cartRef} />
      <HeaderCartModal />
    </dialog>
  );
};

export default HeaderCart;
