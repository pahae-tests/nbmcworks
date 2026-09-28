import { ArrowRight, FileUp } from "lucide-react";
import { useLanguage } from "../lib/languageContext";
import { config } from "../lib/config";

export default function Hero() {
  const { t } = useLanguage();
  const planUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(t.planMessage)}`;

  return (
    <section id="home" className="scroll-mt-20 bg-nbmc-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold uppercase leading-tight sm:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
            {t.hero.upTo} <span className="text-nbmc-green">{t.hero.value}</span>
          </p>
          <p className="mt-6 text-lg font-semibold text-nbmc-silver">
            {t.hero.materials}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-nbmc-soft">
            {t.hero.text}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded bg-nbmc-green px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-nbmc-greenHover"
            >
              {t.cta.quote}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </a>
            <a
              href={planUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded border-2 border-nbmc-green px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-nbmc-green"
            >
              <FileUp size={18} />
              {t.cta.plan}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
