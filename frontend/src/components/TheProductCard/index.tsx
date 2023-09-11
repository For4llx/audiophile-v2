import ProductCardCounter from "../ProductCardCounter";
import BasePicture from "../BasePicture";
import styles from "./TheProductCard.module.scss";

const TheProductCard: React.FC = () => {
  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <figure className={styles.figure}>
          <BasePicture
            sourceLarge={
              "/./assets/product-xx59-headphones/desktop/image-product.jpg"
            }
            sourceMedium={
              "/./assets/product-xx59-headphones/tablet/image-product.jpg"
            }
            sourceSmall={
              "/./assets/product-xx59-headphones/mobile/image-product.jpg"
            }
            alt={"XX99 MARK II HEADPHONES"}
          />
        </figure>
        <div className={styles.body}>
          <p className={styles.overline}>New product</p>
          <h1 className={styles.title}>XX99 MARK II Headphones</h1>
          <p className={styles.copy}>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <p className={styles.price}>$ 2, 999</p>
          <div className={styles.footer}>
            <ProductCardCounter />
            <button className={styles.button}>See product</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default TheProductCard;
