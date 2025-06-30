import React from "react";
import styles from "./Roth.module.css";

export const Roth = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <p>Hi, I am</p>
          <b className={styles.highlight}>chhunhou</b>
        </h1>

        <h2>Aspiring Legal Professional | Law Student | Youth Advocate</h2>
        <p className={styles.description}>
            I’m a passionate law student with a strong academic foundation and practical experience across various legal and administrative roles. Currently working at the Ministry of Education, Youth and Sports, Cambodia.
            Whether drafting legal documents, researching complex legislation, or assisting national moot court competitions, I bring precision, drive, and a deep commitment to justice and civic engagement.        
        </p>

        <div className={styles.socialLinks}>
          <a href="https://t.me/Chou_14" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <img src="https://deizhycgdcbjnpwmrxnp.supabase.co/storage/v1/object/public/portfolio-assets/telegram.png" alt="Telegram" />
          </a>
          <a href="https://www.linkedin.com/in/hok-hourchhunhou-a6287b223/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <img src="https://deizhycgdcbjnpwmrxnp.supabase.co/storage/v1/object/public/portfolio-assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="mailto:chhunhou123@gmail.com |" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <img src="https://deizhycgdcbjnpwmrxnp.supabase.co/storage/v1/object/public/portfolio-assets/gmail.png" alt="Email" />
          </a>
        </div>

        <a href="https://t.me/Chou_14" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        src="https://kznkgfggjytrgctfggte.supabase.co/storage/v1/object/public/portfolio-web//chhunhou.png"
        alt="Chounhou image"
        className={styles.rothImg}
      />
    </section>
  );
};
