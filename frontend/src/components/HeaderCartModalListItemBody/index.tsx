import HeaderCartModalListItemBodyHeader from "../HeaderCartModalListItemBodyHeader";
import HeaderCartModalListItemBodyPicture from "../HeaderCartModalListItemBodyPicture";
import styles from "./HeaderCartModalListItemBody.module.scss";

const HeaderCartModalListItemBody: React.FC = () => {
  return (
    <div className={styles.container}>
      <HeaderCartModalListItemBodyPicture />
      <HeaderCartModalListItemBodyHeader />
    </div>
  );
};

export default HeaderCartModalListItemBody;
