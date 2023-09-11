import BaseIconFacebook from "../BaseIconFacebook";
import BaseIconInstagram from "../BaseIconInstagram";
import BaseIconTweeter from "../BaseIconTweeter";
import styles from "./FooterSocial.module.scss";

const FooterSocial: React.FC = () => {
  return (
    <menu className={styles.menu}>
      <li>
        <a className={styles.link}>
          <BaseIconFacebook />
        </a>
      </li>
      <li>
        <a className={styles.link}>
          <BaseIconTweeter />
        </a>
      </li>
      <li>
        <a className={styles.link}>
          <BaseIconInstagram />
        </a>
      </li>
    </menu>
  );
};

export default FooterSocial;
