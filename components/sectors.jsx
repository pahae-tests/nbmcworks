import { Building2, Factory, Hammer, Wrench } from "lucide-react";
import { useLanguage } from "../lib/languageContext";

const icons = [Building2, Factory, Hammer, Wrench];

export default function Sectors() {
  const { t } = useLanguage();

  return (
    <section id="sectors" className="scroll-mt-20 bg-nbmc-mist">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-nbmc-green">
          {t.sectors.eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-nbmc-ink sm:text-4xl">
          {t.sectors.title}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.sectors.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="rounded border border-nbmc-silver/50 bg-white p-7"
              >
                <Icon size={28} className="text-nbmc-green" />
                <h3 className="mt-5 text-lg font-bold text-nbmc-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-nbmc-steel">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
