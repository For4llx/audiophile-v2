import styles from "./HeaderCartModalFooterTotal.module.scss";

interface IHeaderCartModalFooterTotal {
  price: string;
}

const HeaderCartModalFooterTotal: React.FC<IHeaderCartModalFooterTotal> = ({
  price,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>Total</p>
      <p className={styles.price}>$ {price}</p>
    </div>
  );
};

export default HeaderCartModalFooterTotal;
