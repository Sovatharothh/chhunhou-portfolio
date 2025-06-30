import React, { useState } from "react";
import styles from "./InteractiveCompetitions.module.css";
import data from "../../data/competitions.json";

export const InteractiveCompetitions = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? data
    : data.filter((item) => item.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "legal": return "⚖️";
      case "leadership": return "🧭";
      default: return "🏆";
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Competitions & <span className={styles.highlight}>Programs</span>
      </h2>
      <p className={styles.description}>
        As a law student, I participate in legal competitions and leadership programs to build my skills and connect with others in the field.
      </p>

      <div className={styles.filters}>
        {["all", "legal", "leadership"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ""}`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.cardGrid}>
        {filtered.map((comp) => (
          <div key={comp.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={comp.imageSrc} alt={comp.title} />
              <div className={styles.tags}>
                <span className={styles.tag}>
                  {getCategoryIcon(comp.category)} {comp.category}
                </span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>{comp.title}</h3>

              <p className={styles.meta}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {comp.date}
              </p>

              <p className={styles.meta}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {comp.location}
              </p>

              <p className={styles.text}>{comp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
