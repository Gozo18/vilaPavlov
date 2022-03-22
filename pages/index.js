import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className={styles.bottleBox}>
        <h1>vilaPavlov</h1>
        <h2>ubytování v Pavlově na Pálavě</h2>

        <span>
          <Image
            src='/bottlePal.png'
            alt='vilaPavlov'
            layout='fill'
            objectFit='contain'
          />
        </span>
      </div>
    </Layout>
  );
}
