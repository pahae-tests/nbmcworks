import { Flame, Maximize, Boxes, FileText } from "lucide-react";
import { useLanguage } from "../lib/languageContext";

const icons = [Flame, Maximize, Boxes, FileText];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-nbmc-green">
          {t.services.eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-nbmc-ink sm:text-4xl">
          {t.services.title}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="rounded border border-nbmc-silver/50 bg-nbmc-mist p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded bg-nbmc-ink text-nbmc-green">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-nbmc-ink">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-nbmc-steel">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
