import Head from "next/head";
import "../styles/globals.css";
import { LanguageProvider } from "../lib/languageContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
