import ProductDetailBoxContentItem from "../ProductDetailBoxContentItem";
import styles from "./ProductDetailBoxContent.module.scss";

const ProductDetailBoxContent: React.FC = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>in the box</h1>
      <ul className={styles.list}>
        <li>
          <ProductDetailBoxContentItem quantity={"1"} name={"Headphone Unit"} />
        </li>
        <li>
          <ProductDetailBoxContentItem quantity={"1"} name={"Headphone Unit"} />
        </li>
        <li>
          <ProductDetailBoxContentItem quantity={"1"} name={"Headphone Unit"} />
        </li>
        <li>
          <ProductDetailBoxContentItem quantity={"1"} name={"Headphone Unit"} />
        </li>
        <li>
          <ProductDetailBoxContentItem quantity={"1"} name={"Headphone Unit"} />
        </li>
      </ul>
    </article>
  );
};

export default ProductDetailBoxContent;
