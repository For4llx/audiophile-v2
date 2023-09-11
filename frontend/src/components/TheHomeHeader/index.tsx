"use client";

import { useRef } from "react";
import HeaderMenu from "../HeaderMenu";
import HeaderCart from "../HeaderCart";
import styles from "./TheHomeHeader.module.scss";
import HeaderSecondaryNavigation from "../HeaderSecondaryNavigation";
import HeaderHero from "../HeaderHero";

const TheHomeHeader: React.FC = () => {
  const CartModal = useRef(null);
  const menuRef = useRef(null);

  return (
    <header className={styles.container}>
      <HeaderMenu menuRef={menuRef} cartRef={CartModal} />
      <HeaderHero />
      <HeaderCart cartRef={CartModal} menuRef={menuRef} />
      <HeaderSecondaryNavigation cartRef={CartModal} menuRef={menuRef} />
    </header>
  );
};

export default TheHomeHeader;
