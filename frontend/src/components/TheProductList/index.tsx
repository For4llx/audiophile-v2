import CategoryCard from "../CategoryCard";
import styles from "./TheProductList.module.scss";

const TheProductList: React.FC = () => {
  return (
    <section className={styles.container}>
      <CategoryCard />
    </section>
  );
};

export default TheProductList;
