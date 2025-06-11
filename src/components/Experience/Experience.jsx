import React, { useState } from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Work Experiences</h2>
      <div className={styles.summary}>
        <div className={styles.statBox}>
          <span>5</span>
          <p>Positions</p>
        </div>
        <div className={styles.statBox}>
          <span>3+</span>
          <p>Years Experience</p>
        </div>
        
          <div className={styles.statBox}>
            <span>4</span>
            <p>Organizations</p>
          </div>
          <div className={styles.statBox}>
            <span className={styles.highlight}>Legal</span>
            <p>Specialization</p>
          </div>
        </div>

      <div className={styles.grid}>
        {history.map((item, index) => {
          const isExpanded = expanded === index;
          const duration = `${item.startDate} – ${item.endDate}`;
          const isFeatured = item.endDate === "Present" || item.role.includes("Officer");

          return (
            <div
              key={index}
              className={`${styles.card} ${isExpanded ? styles.expanded : ""} ${isFeatured ? styles.featured : ""}`}
              onClick={() => toggleCard(index)}
            >
              <div className={styles.header}>
                <img src={item.imageSrc} alt={item.organisation} className={styles.logo} />
                <div className={styles.headline}>
                  <h3>{item.role}</h3>
                  <h4>{item.organisation}</h4>
                  <p className={styles.duration}>{duration}</p>
                </div>
              </div>

              {isExpanded && (
                <ul className={styles.details}>
                  {item.experiences.map((exp, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: exp }} />
                  ))}
                </ul>
              )}

              {!isExpanded && (
                <p className={styles.preview}>
                  {item.experiences[0].slice(0, 80)}...
                </p>
              )}
            </div>
          );
        })}
      </div>


    </section>
  );
};
