import Link from "next/link";
import styles from "../layout/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car Shopping</h2>
          <p>Choose and buy your car.</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>Develop by Mohammadreza</footer>
    </>
  );
}

export default Layout;
