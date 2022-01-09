import Link from "next/link";
import { FaHome, FaWineBottle } from "react-icons/fa";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBox}>
        <Link href='/ubytovani'>
          <a className={styles.home}>
            <div className={styles.iconBox}>
              <div className={styles.iconCircle}>
                <FaHome />
              </div>
            </div>
            Ubytování
          </a>
        </Link>
        <Link href='https://vinarstviiris.cz'>
          <a className={styles.wine}>
            <div className={styles.iconBox}>
              <div className={styles.iconCircle}>
                <FaWineBottle />
              </div>
            </div>
            Vinařství Iris
          </a>
        </Link>
      </div>
    </header>
  );
}
