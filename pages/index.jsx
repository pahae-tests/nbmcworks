import Head from "next/head";
import { useLanguage } from "../lib/languageContext";
import Header from "../components/header";
import Hero from "../components/hero";
import Capabilities from "../components/capabilities";
import Services from "../components/services";
import Process from "../components/process";
import Sectors from "../components/sectors";
import About from "../components/about";
import QuoteForm from "../components/quoteForm";
import Footer from "../components/footer";
import WhatsappButton from "../components/whatsappButton";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
      </Head>
      <div className="bg-white font-sans text-nbmc-ink antialiased">
        <Header />
        <main>
          <Hero />
          <Capabilities />
          <Services />
          <Process />
          <Sectors />
          <About />
          <QuoteForm />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </>
  );
}
