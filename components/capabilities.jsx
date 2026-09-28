import { Layers, Ruler, Package, MapPin } from "lucide-react";
import { useLanguage } from "../lib/languageContext";

const icons = [Layers, Ruler, Package, MapPin];

export default function Capabilities() {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="scroll-mt-20 bg-nbmc-mist">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <h2 className="sr-only">{t.capabilities.title}</h2>
        <div className="grid gap-px overflow-hidden rounded border border-nbmc-silver/50 bg-nbmc-silver/50 sm:grid-cols-2 lg:grid-cols-4">
          {t.capabilities.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.label} className="bg-white p-8">
                <Icon size={28} className="text-nbmc-silver" />
                <p className="mt-5 text-2xl font-extrabold leading-tight text-nbmc-green">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-medium text-nbmc-steel">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
