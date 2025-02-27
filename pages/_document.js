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
              __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KWFWTMK4')`,
            }}
          />

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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Hotel",
                name: "vila Pavlov",
                description:
                  "Skoukromé ubytování ve vinařské obci Pavlov na úbočí Pálavských vrchů a nad Mušovskými jezery.",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "CZ",
                  addressLocality: "Pavlov",
                  addressRegion: "Jižní Morava",
                  postalCode: "69201",
                  streetAddress: "Zahradní 287",
                },
                telephone: "+420 602 172 230",
                photo:
                  "https://www.vilapavlov.cz/_next/image?url=%2Fimage0.jpg&w=1920&q=75",
                image:
                  "https://www.vilapavlov.cz/_next/image?url=%2Fimage0.jpg&w=1920&q=75",
                starRating: {
                  "@type": "Rating",
                  ratingValue: "3",
                },
                priceRange: "1.700,- Kč - 1.900,- Kč",
              }),
            }}
          />
          <script
            async
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="90a93f73-b850-4682-a779-5cfd6d06c51d"
            data-blockingmode="auto"
            type="text/javascript"
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KWFWTMK4"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
