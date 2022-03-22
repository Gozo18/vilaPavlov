import Document, { Html, Head, Main, NextScript, Script } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='cs'>
        <Head>
          <Script
            src='https://www.googletagmanager.com/gtag/js?id=id=UA-48767601-12'
            strategy='afterInteractive'
          />
          <Script id='google-analytics' strategy='afterInteractive'>
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-48767601-12');
        `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
