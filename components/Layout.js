import Head from "next/head"
import Header from "./Header"

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" lang="cs" content={keywords}></meta>
        <meta httpEquiv="content-language" content="cs"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}

Layout.defaultProps = {
  title: "vilaPavlov | ubytování na Pálavě",
  description:
    "Vila Pavlov Vám nabízí ubytování v penzionu v malebné vesnici Pavlov s výraznou vinařskou tradicí.",
  keywords: "ubytování Pavlov, ubytování pod Pálavou, penzion Pavlov",
}
