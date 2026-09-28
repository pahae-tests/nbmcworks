import { Check } from "lucide-react";
import { useLanguage } from "../lib/languageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-nbmc-green">
            {t.about.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-nbmc-ink sm:text-4xl">
            {t.about.title}
          </h2>
          {t.about.paragraphs.map((p) => (
            <p key={p} className="mt-5 text-lg leading-relaxed text-nbmc-steel">
              {p}
            </p>
          ))}
        </div>
        <ul className="rounded border border-nbmc-silver/50 bg-nbmc-ink p-8">
          {t.about.points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-4 border-b border-nbmc-charcoal py-4 text-white last:border-b-0"
            >
              <Check size={20} className="shrink-0 text-nbmc-green" />
              <span className="font-semibold">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
