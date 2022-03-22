import Script from "next/script";

function Gtag() {
  return (
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=UA-48767601-12'
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
    </>
  );
}

export default Gtag;
