import styles from "./Statistics.module.css";

// функція для генерації випадкового кольору
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: getRandomColor() }} // додаємо фон
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
