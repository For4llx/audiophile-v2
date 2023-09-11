import BasePicture from "../BasePicture";
import styles from "./TheAbout.module.scss";

const TheAbout: React.FC = () => {
  return (
    <section className={styles.section}>
      <article className={styles.container}>
        <div className={styles.card}>
          <figure className={styles.figure}>
            <BasePicture
              sourceLarge={"/./assets/shared/desktop/image-best-gear.jpg"}
              sourceMedium={"/./assets/shared/tablet/image-best-gear.jpg"}
              sourceSmall={"/./assets/shared/mobile/image-best-gear.jpg"}
              alt={""}
            />
          </figure>
          <div className={styles.body}>
            <h1 className={styles.title}>
              Bringing you the <em className={styles.emphasis}>best</em> audio
              gear
            </h1>
            <p className={styles.copy}>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default TheAbout;
