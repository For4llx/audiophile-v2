import BasePicture from "../BasePicture";
import styles from "./HeaderCartModalListItemBodyPicture.module.scss";

const HeaderCartModalListItemBodyPicture: React.FC = () => {
  return (
    <figure className={styles.container}>
      <BasePicture
        sourceLarge={"/./assets/cart/image-xx59-headphones.jpg"}
        alt={""}
      />
    </figure>
  );
};

export default HeaderCartModalListItemBodyPicture;
