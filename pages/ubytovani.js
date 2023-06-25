import Link from "next/link"
import {
  FaBath,
  FaBed,
  FaUtensils,
  FaWifi,
  FaBicycle,
  FaWineGlassAlt,
  FaCoffee,
  FaIceCream,
} from "react-icons/fa"
import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import SimpleSlider from "../components/slick/slider"
import styles from "../styles/ubytovani.module.scss"

export default function ubytovani() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>vilaPavlov</h1>
        <p>
          Náš penzion je novostavba nacházející se v malebné obci Pavlov na
          úbočí Pálavských vrchů a nad Mušovskými jezery. Máme pro Vás
          připraveny apartmány a k nim velké spektrum vyžití. Od vinařské
          turistiky, cyklistiky, vodních sportů, až po přírodní krásy okolních
          kopců.
        </p>
      </div>
      <div className={styles.container} id="price">
        <h2>Ceník</h2>
        <div className={styles.priceBox}>
          <div>Dvoulůžkový apartmán za noc:</div>
          <div className={styles.price}>od 1.500,- Kč</div>
        </div>
        <div className={styles.priceBox}>
          <div>Jednolůžkový apartmán za noc:</div>
          <div className={styles.price}>od 1.100,- Kč</div>
        </div>
        <div className={styles.priceBox}>
          <div>Čtyřlůžkový apartmán za noc:</div>
          <div className={styles.price}>od 3.000,- Kč</div>
        </div>
        <div className={styles.priceBox}>
          <div>Děti bez nároku na vlastní postel:</div>
          <div className={styles.price}>zdarma</div>
        </div>
      </div>
      <div className={styles.container} id="equip">
        <h2>Vybavení apartmánů</h2>
        <div className={styles.equipBox}>
          <div className={styles.equip}>
            <div className={styles.icon}>
              <FaUtensils />
            </div>
            Vlastní kuchyňka
          </div>
          <div className={styles.equip}>
            <div className={styles.icon}>
              <FaBath />
            </div>
            Vlastní koupelna
          </div>
          <div className={styles.equip}>
            <div className={styles.icon}>
              <FaBed />
            </div>
            Postle z masivu
          </div>
          <div className={styles.equip}>
            <div className={styles.icon}>
              <FaWifi />
            </div>
            Wifi
          </div>
          <div className={styles.equipLast}>
            <div className={styles.icon}>
              <FaBicycle />
            </div>
            Úschovna kol
          </div>
        </div>
      </div>
      <div className={styles.gallery} id="gallery">
        <SimpleSlider />
      </div>
      <div className={styles.container}>
        <h2>Staráme se, aby se Vám v Pavlově líbilo.</h2>
        <p>
          Doporučíme Vám jak nejlepší cyklo výlety, tak nejlepší restaurace i
          vinařství. Největší ocenění pro nás bude, když se k nám budete stále
          vracet.
        </p>
        <p>
          Určitě si nenechte ujít výlet k nám, máme zde krásné akce jako třeba
          velikonoční košt mladých vín, léto otevřených sklepů, červencové dračí
          lodě, zářijovou vinařskou stezku a burčáky a nakonec listopadové
          otevřené sklepy. Vyžití zde najde opravdu každý.
        </p>
        <p>
          Pavlov je obec v okrese Břeclav nacházející se na úpatí Pavlovských
          vrchů při pravém břehu vodní nádrže Nové Mlýny asi 8 km severně od
          Mikulova. Hlavním zdrojem bohatství obce vždy bylo vinařství.
        </p>
      </div>
      <div className={styles.container}>
        <h2>Vinařství Iris</h2>
        <div className={styles.equipBox}>
          <div className={styles.equip}>
            <div className={styles.icon}>
              <FaWineGlassAlt />
            </div>
            Degustace
          </div>
          <div className={styles.equip}>
            <div className={styles.icon}>
              <FaCoffee />
            </div>
            Káva
          </div>
          <div className={styles.equipLast}>
            <div className={styles.icon}>
              <FaIceCream />
            </div>
            Zmrzlina
          </div>
        </div>
        <p className={styles.winery}>
          Více informací o vinařství na{" "}
          <Link href="https://vinarstviiris.cz">vinarstviiris.cz</Link>
        </p>
        <p className={styles.winery}>Adresa: Podhradní 180, Pavlov 692 01</p>
      </div>
      <div className={styles.container} id="contact">
        <h2>KONTAKTUJTE NÁS!</h2>
        <ContactForm />
        <div className={styles.space}></div>
      </div>
    </Layout>
  )
}
