import BaseIconLogo from "../BaseIconLogo";
import BaseNavigation from "../BaseNavigation";
import styles from "./BaseMenu.module.scss";
import ButtonCart from "../ButtonCart";
import ButtonHamburger from "../ButtonHamburger";

interface IBaseMenu {
  cartRef: any;
  menuRef: any;
}

const BaseMenu: React.FC<IBaseMenu> = ({ cartRef, menuRef }) => {
  return (
    <menu className={styles.container}>
      <li className={styles.hamburger}>
        <ButtonHamburger menuRef={menuRef} />
      </li>
      <li>
        <BaseIconLogo />
      </li>
      <li className={styles.navigation}>
        <BaseNavigation />
      </li>
      <li className={styles.cart}>
        <ButtonCart cartRef={cartRef} />
      </li>
    </menu>
  );
};

export default BaseMenu;
