import BasePicture from "../BasePicture";
import styles from "./ProductDetailRecommendationListItem.module.scss";

const ProductDetailRecommendationListItem: React.FC = () => {
  return (
    <article className={styles.container}>
      <figure className={styles.figure}>
        <BasePicture
          sourceLarge={"/./assets/shared/desktop/image-xx59-headphones.jpg"}
          sourceMedium={"/./assets/shared/tablet/image-xx59-headphones.jpg"}
          sourceSmall={"/./assets/shared/mobile/image-xx59-headphones.jpg"}
          alt={""}
        />
      </figure>
      <h1 className={styles.tilte}>XX99 MARK I</h1>
      <button className={styles.button}>See product</button>
    </article>
  );
};

export default ProductDetailRecommendationListItem;
