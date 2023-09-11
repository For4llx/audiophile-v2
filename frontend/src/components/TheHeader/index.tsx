"use client";

import { useRef } from "react";
import HeaderMenu from "../HeaderMenu";
import HeaderCart from "../HeaderCart";
import styles from "./TheHeader.module.scss";
import HeaderSecondaryNavigation from "../HeaderSecondaryNavigation";

const TheHeader: React.FC = () => {
  const CartModal = useRef(null);
  const menuRef = useRef(null);

  return (
    <header className={styles.container}>
      <HeaderMenu menuRef={menuRef} cartRef={CartModal} />
      <HeaderCart cartRef={CartModal} menuRef={menuRef} />
      <HeaderSecondaryNavigation cartRef={CartModal} menuRef={menuRef} />
    </header>
  );
};

export default TheHeader;
