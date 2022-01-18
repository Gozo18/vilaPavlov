import Head from "next/head";
import Header from "./Header";
import styles from "../styles/Layout.module.scss";

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' lang='cs' content={keywords}></meta>
        <meta httpEquiv='content-language' content='cs'></meta>
        <link rel='icon' href='/favicon.ico' />

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=UA-48767601-12'
        ></script>
        <script>
          dangerouslySetInnerHTML=
          {{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-48767601-12', { page_path: window.location.pathname });
            `,
          }}
        </script>
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  );
}

Layout.defaultProps = {
  title: "vilaPavlov | ubytování na Pálavě",
  description:
    "Vila Pavlov Vám nabízí ubytování v penzionu v malebné vesnici Pavlov s výraznou vinařskou tradicí.",
  keywords:
    "ubytování Pavlov, ubytování pod Pálavou, Pálava, ubytování v soukromí, penzion, Pavlov, vila, víno, Jižní Morava, Pálavské vrchy, Mušovská jezera, cyklovýlet, dovolená, Pálava, Děvičky",
};
