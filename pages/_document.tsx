import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to the manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon and other icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        {/* Meta tags */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#1a202c" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
