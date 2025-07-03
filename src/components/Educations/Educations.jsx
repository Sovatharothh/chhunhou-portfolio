import React from "react";
import styles from "./Educations.module.css";

export const Educations = () => {
  return (
    <section className={styles.container} id="Educations">
      <h2 className={styles.title}>Education Background</h2>
      <div className={styles.timeline}>
        <div className={styles.entry}>
          <div className={styles.dot}></div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <img
                src="https://kznkgfggjytrgctfggte.supabase.co/storage/v1/object/public/portfolio-web//rule%20logo.png"
                alt="RULE"
                className={styles.schoolLogo}
              />
              <div>
                <h3>Royal University of Law and Economics</h3>
                <p className={styles.location}>Phnom Penh, Cambodia</p>
              </div>
            </div>

            <div className={styles.program}>
              <div>
                <h4>LLB in Law</h4>
                <p>2022 – 2025</p>
              </div>
              <span className={styles.gpa}>GPA: <strong>4.0</strong></span>
            </div>

            <div className={styles.program}>
              <div>
                <h4>English-based LLB Program</h4>
                <p>2023 – 2026</p>
              </div>
              <span className={styles.gpa}>GPA: <strong>3.7</strong></span>
            </div>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.dot}></div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <img
                src="https://kznkgfggjytrgctfggte.supabase.co/storage/v1/object/public/portfolio-web//Gadjah_Mada_University_Logo.gif"
                alt="UGM"
                className={styles.schoolLogo}
              />
              <div>
                <h3>Universitas Gadjah Mada</h3>
                <p className={styles.location}>Indonesia</p>
              </div>
            </div>

            <div className={styles.program}>
              <div>
                <h4>ASEAN University Network Summer Camp</h4>
                <p>July 2024</p>
              </div>
              <span className={styles.gpa}>GPA: <strong>A</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
