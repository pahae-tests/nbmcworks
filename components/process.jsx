import { FileUp, ClipboardList, Zap, Truck } from "lucide-react";
import { useLanguage } from "../lib/languageContext";

const icons = [FileUp, ClipboardList, Zap, Truck];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="bg-nbmc-charcoal text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-nbmc-green">
          {t.process.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          {t.process.title}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div
                key={step.title}
                className="rounded border border-nbmc-steel bg-nbmc-ink p-7"
              >
                <div className="flex items-center justify-between">
                  <Icon size={28} className="text-nbmc-green" />
                  <span className="text-sm font-bold text-nbmc-silver">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-nbmc-soft">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
