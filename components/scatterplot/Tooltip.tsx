import styles from "./tooltip.module.css";

export const Tooltip = ({ interactionData }) => {
  if (!interactionData) {
    return null;
  }

  const { xPos, yPos, name, color, x, y, size } = interactionData;

  return (
    <div
      className={styles.tooltip}
      style={{
        left: xPos,
        top: yPos,
      }}
    >
      <b className={styles.title}>{name}</b>

      <div className={styles.topHalfContainer} style={{ borderColor: color }}>
        <div className={styles.row}>
          <span>Vulnerability index</span>
          <b>{Math.round(x * 100) / 100}</b>
        </div>
        <div className={styles.row}>
          <span>Readiness index</span>
          <b>{Math.round(y * 100) / 100}</b>
        </div>
      </div>

      <div className={styles.separator} />

      <div className={styles.row}>
        <span>
          CO2 emission
          <br />
          (tons per capita)
        </span>
        <b>{(size / 10000000).toFixed(3)}</b>
      </div>
    </div>
  );
};
