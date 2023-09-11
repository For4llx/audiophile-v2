import styles from "./ProductDetailBoxContentItem.module.scss";

interface IProductDetailBoxContentItem {
  quantity: string;
  name: string;
}

const ProductDetailBoxContentItem: React.FC<IProductDetailBoxContentItem> = ({
  name,
  quantity,
}) => {
  return (
    <article className={styles.container}>
      <p className={styles.quantity}>{quantity}x</p>
      <p className={styles.name}>{name}</p>
    </article>
  );
};

export default ProductDetailBoxContentItem;
