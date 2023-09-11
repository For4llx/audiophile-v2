import BasePicture from "../BasePicture";
import styles from "./TheProductGallery.module.scss";

const TheProductGallery: React.FC = () => {
  return (
    <section className={styles.container}>
      <figure className={styles.gallery1}>
        <BasePicture
          sourceLarge={
            "/./assets/product-xx59-headphones/desktop/image-gallery-1.jpg"
          }
          sourceMedium={
            "/./assets/product-xx59-headphones/tablet/image-gallery-1.jpg"
          }
          sourceSmall={
            "/./assets/product-xx59-headphones/mobile/image-gallery-1.jpg"
          }
          alt={""}
        />
      </figure>
      <figure className={styles.gallery2}>
        <BasePicture
          sourceLarge={
            "/./assets/product-xx59-headphones/desktop/image-gallery-2.jpg"
          }
          sourceMedium={
            "/./assets/product-xx59-headphones/tablet/image-gallery-2.jpg"
          }
          sourceSmall={
            "/./assets/product-xx59-headphones/mobile/image-gallery-2.jpg"
          }
          alt={""}
        />
      </figure>
      <figure className={styles.gallery3}>
        <BasePicture
          sourceLarge={
            "/./assets/product-xx59-headphones/desktop/image-gallery-3.jpg"
          }
          sourceMedium={
            "/./assets/product-xx59-headphones/tablet/image-gallery-3.jpg"
          }
          sourceSmall={
            "/./assets/product-xx59-headphones/mobile/image-gallery-3.jpg"
          }
          alt={""}
        />
      </figure>
    </section>
  );
};

export default TheProductGallery;
