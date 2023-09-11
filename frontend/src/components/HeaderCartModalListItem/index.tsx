import HeaderCartModalListItemBody from "../HeaderCartModalListItemBody";
import HeaderCartModalListItemCounter from "../HeaderCartModalListItemCounter";
import styles from "./HeaderCartModalListItem.module.scss";

const HeaderCartModalListItem: React.FC = () => {
  return (
    <article className={styles.container}>
      <HeaderCartModalListItemBody />
      <HeaderCartModalListItemCounter />
    </article>
  );
};

export default HeaderCartModalListItem;
