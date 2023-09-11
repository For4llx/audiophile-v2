import styles from "./HeaderTitle.module.scss";

interface IHeaderTitle {
  children: React.ReactNode;
}

const HeaderTitle: React.FC<IHeaderTitle> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default HeaderTitle;
