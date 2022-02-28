import { useRouter } from "next/router";
import Link from "next/link";
import {
  FaHome,
  FaWineBottle,
  FaMoneyBillAlt,
  FaArchive,
  FaImage,
  FaPhone,
} from "react-icons/fa";
import styles from "../styles/Header.module.scss";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      {router.route === "/" ? (
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
      ) : (
        <div className={styles.headerBox}>
          <Link href='/ubytovani#price' scrollSmooth>
            <a className={styles.home}>
              <div className={styles.iconBox}>
                <div className={styles.iconCircle}>
                  <FaMoneyBillAlt />
                </div>
              </div>
              Ceny za noc
            </a>
          </Link>
          {/* <Link href='/ubytovani#equip' scrollSmooth>
            <a className={styles.home}>
              <div className={styles.iconBox}>
                <div className={styles.iconCircle}>
                  <FaArchive />
                </div>
              </div>
              Vybavení
            </a>
          </Link> */}
          <Link href='/ubytovani#gallery' scrollSmooth>
            <a className={styles.home}>
              <div className={styles.iconBox}>
                <div className={styles.iconCircle}>
                  <FaImage />
                </div>
              </div>
              Galerie
            </a>
          </Link>
          <Link href='/ubytovani#contact' scrollSmooth>
            <a className={styles.home}>
              <div className={styles.iconBox}>
                <div className={styles.iconCircle}>
                  <FaPhone />
                </div>
              </div>
              Kontakty
            </a>
          </Link>
        </div>
      )}
    </header>
  );
}
