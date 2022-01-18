import Document, { Html, Head, Main, NextScript } from "next/document";
import Gta from "../components/Gta";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='cs'>
        <Head />
        <body>
          <Main />
          <NextScript>
            <Gta />
          </NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
