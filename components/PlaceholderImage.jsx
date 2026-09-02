import styles from "./PlaceholderImage.module.css";

export default function PlaceholderImage({
  title = "이미지 영역",
  description = "추후 이미지 등록 예정",
  variant = "default",
}) {
  const variantClass = variant === "compact" ? styles.compact : variant === "tall" ? styles.tall : "";

  return (
    <div className={`${styles.placeholder} ${variantClass}`} role="img" aria-label={`${title} - ${description}`}>
      <div className={styles.inner}>
        <div className={styles.icon} aria-hidden="true">▧</div>
        <strong className={styles.title}>{title}</strong>
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
}
