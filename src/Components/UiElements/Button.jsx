import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  children,
  onClick,
  danger,
  outline,
  href,
  className,
  disable,
}) {
  const classN = `
    ${styles.button} ${danger ? styles.danger : ""} ${outline ? styles.outline : ""} ${className ? className : ""} ${disable ? styles.disable : ""}
  `;

  if (href) 
    return (
      <Link href={href} className={classN}>
        {children}
      </Link>
    );
  

  return (
    <button onClick={onClick} className={classN} disabled={disable}>
      {children}
    </button>
  );
}