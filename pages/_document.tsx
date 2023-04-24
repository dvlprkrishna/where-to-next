import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next Holiday plan in seconds."
          />
          <meta property="og:site_name" content="krishnasahu.in" />
          <meta
            property="og:description"
            content="Generate your next Holiday plan in seconds."
          />
          <meta property="og:title" content="Holiday Plan Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Holiday Plan Generator" />
          <meta
            name="twitter:description"
            content="Generate your next Holiday plan in seconds."
          />
          <meta property="og:image" content="/og-image.png" />
          <meta name="twitter:image" content="/og-image.png" />
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
