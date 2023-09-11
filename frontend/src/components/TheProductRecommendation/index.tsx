import ProductDetailRecommendationListItem from "../ProductDetailRecommendationListItem";
import styles from "./TheProductRecommendation.module.scss";

const TheProductRecommendation: React.FC = () => {
  return (
    <aside className={styles.container}>
      <h1 className={styles.title}>You may also like</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <ProductDetailRecommendationListItem />
        </li>
        <li className={styles.item}>
          <ProductDetailRecommendationListItem />
        </li>
        <li className={styles.item}>
          <ProductDetailRecommendationListItem />
        </li>
      </ul>
    </aside>
  );
};

export default TheProductRecommendation;
