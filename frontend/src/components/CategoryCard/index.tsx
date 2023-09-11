import BasePicture from "../BasePicture";
import styles from "./CategoryCard.module.scss";

const CategoryCard: React.FC = () => {
  return (
    <article className={styles.card}>
      <figure className={styles.figure}>
        <BasePicture
          sourceLarge={
            "/./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
          }
          alt={"XX99 MARK II HEADPHONES"}
        />
      </figure>
      <div className={styles.body}>
        <p className={styles.overline}>New product</p>
        <h1 className={styles.title}>XX99 MARK II Headphones</h1>
        <p className={styles.copy}>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button className={styles.button}>See product</button>
      </div>
    </article>
  );
};

export default CategoryCard;
