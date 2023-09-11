import ShowcasePrimary from "../ShowcasePrimary";
import ShowcaseSecondary from "../ShowcaseSecondary";
import ShowCaseTertiary from "../ShowCaseTertiary";
import styles from "./TheShowcase.module.scss";

const TheShowcase: React.FC = () => {
  return (
    <section className={styles.container}>
      <ShowcasePrimary />
      <ShowcaseSecondary />
      <ShowCaseTertiary />
    </section>
  );
};

export default TheShowcase;
