import styles from "./ProductDetailFeatures.module.scss";

const ProductDetailFeatures: React.FC = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>Features</h1>
      <p className={styles.body}>
        Featuring a genuine leather head strap and premium earcups, these
        headphones deliver superior comfort for those who like to enjoy endless
        listening. It includes intuitive controls designed for any situation.
        Whether you’re taking a business call or just in your own personal
        space, the auto on/off and pause features ensure that you’ll never miss
        a beat.
      </p>
      <br />
      <p className={styles.body}>
        The advanced Active Noise Cancellation with built-in equalizer allow you
        to experience your audio world on your terms. It lets you enjoy your
        audio in peace, but quickly interact with your surroundings when you
        need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour
        battery life, the XX99 Mark II headphones gives you superior sound,
        cutting-edge technology, and a modern design aesthetic.
      </p>
    </article>
  );
};

export default ProductDetailFeatures;
