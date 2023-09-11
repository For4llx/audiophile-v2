import FooterSocial from "../FooterSocial";
import styles from "./FooterBody.module.scss";

const FooterBody: React.FC = () => {
  return (
    <section className={styles.container}>
      <p className={styles.copy}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className={styles.footer}>Copyright 2021. All Rights Reserved</p>

      <div className={styles.social}>
        <FooterSocial />
      </div>
    </section>
  );
};

export default FooterBody;
