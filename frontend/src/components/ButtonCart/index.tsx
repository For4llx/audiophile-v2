import BaseIconCart from "../BaseIconCart";
import styles from "./ButtonCart.module.scss";

interface IButtonCart {
  cartRef: any;
}

const ButtonCart: React.FC<IButtonCart> = ({ cartRef }) => {
  return (
    <button
      onClick={() =>
        cartRef.current?.open
          ? cartRef.current?.close()
          : cartRef.current?.showModal()
      }
      className={styles.container}
    >
      <BaseIconCart />
    </button>
  );
};

export default ButtonCart;
