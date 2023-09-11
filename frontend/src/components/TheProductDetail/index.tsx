import ProductDetailBoxContent from "../ProductDetailBoxContent";
import ProductDetailFeatures from "../ProductDetailFeatures";
import styles from "./TheProductDetail.module.scss";

const TheProductDetail: React.FC = () => {
  return (
    <section className={styles.container}>
      <ProductDetailFeatures />
      <ProductDetailBoxContent />
    </section>
  );
};

export default TheProductDetail;
