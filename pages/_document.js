import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="cs">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-48767601-12"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-48767601-12', { page_path: window.location.pathname });
            `,
            }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-11208729421"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11208729421');
  `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
  gtag('event', 'conversion', {'send_to': 'AW-11208729421/Igv7COyFyqgYEM3G3uAp'});
`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
