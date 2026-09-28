import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "../lib/languageContext";
import { config } from "../lib/config";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  material: 0,
  thickness: "",
  quantity: "",
  message: "",
};

const fieldClass =
  "mt-2 w-full rounded border border-gray-300 bg-white px-4 py-3 text-nbmc-ink outline-none transition-colors focus:border-nbmc-green focus:ring-1 focus:ring-nbmc-green";

const labelClass = "block text-sm font-medium text-nbmc-steel";

export default function QuoteForm() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      setError(f.required);
      return;
    }

    if (form.thickness && (Number(form.thickness) <= 0 || Number(form.thickness) > 100)) {
      setError(f.thicknessError);
      return;
    }

    setError("");

    const lines = [
      f.intro,
      `${f.name} : ${form.name.trim()}`,
      `${f.phone} : ${form.phone.trim()}`,
      form.email.trim() && `${f.email.replace(/\s*\(.*\)/, "")} : ${form.email.trim()}`,
      `${f.material} : ${f.materials[form.material]}`,
      form.thickness && `${f.thickness} : ${form.thickness}`,
      form.quantity.trim() && `${f.quantity} : ${form.quantity.trim()}`,
      form.message.trim() && `${f.message} : ${form.message.trim()}`,
    ].filter(Boolean);

    const url = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const info = [
    { icon: Phone, label: t.contact.info.phone, value: config.phoneDisplay, href: `tel:${config.phoneHref}` },
    { icon: MessageCircle, label: t.contact.info.whatsapp, value: config.phoneDisplay, href: `https://wa.me/${config.whatsappNumber}` },
    { icon: Mail, label: t.contact.info.email, value: config.email, href: `mailto:${config.email}` },
    { icon: MapPin, label: t.contact.info.zone, value: t.contact.info.zoneValue },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-nbmc-mist">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-nbmc-green">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-nbmc-ink sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 leading-relaxed text-nbmc-steel">{t.contact.text}</p>
          <ul className="mt-10 space-y-6">
            {info.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-nbmc-ink text-nbmc-green">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-nbmc-steel">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      dir="ltr"
                      className="font-semibold text-nbmc-ink hover:text-nbmc-green"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-nbmc-ink">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded border border-nbmc-silver/50 bg-white p-6 sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>{f.name}</label>
              <input id="name" type="text" value={form.name} onChange={update("name")} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>{f.phone}</label>
              <input id="phone" type="tel" dir="ltr" value={form.phone} onChange={update("phone")} className={fieldClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className={labelClass}>{f.email}</label>
              <input id="email" type="email" dir="ltr" value={form.email} onChange={update("email")} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="material" className={labelClass}>{f.material}</label>
              <select
                id="material"
                value={form.material}
                onChange={(e) => setForm((prev) => ({ ...prev, material: Number(e.target.value) }))}
                className={fieldClass}
              >
                {f.materials.map((m, i) => (
                  <option key={m} value={i}>{m}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="thickness" className={labelClass}>{f.thickness}</label>
                <input id="thickness" type="number" inputMode="decimal" min="0" max="100" step="any" value={form.thickness} onChange={update("thickness")} className={fieldClass} />
              </div>
              <div>
                <label htmlFor="quantity" className={labelClass}>{f.quantity}</label>
                <input id="quantity" type="text" value={form.quantity} onChange={update("quantity")} className={fieldClass} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>{f.message}</label>
              <textarea id="message" rows={5} value={form.message} onChange={update("message")} className={fieldClass} />
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-5 text-sm font-medium text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-nbmc-green px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-nbmc-greenHover sm:w-auto"
          >
            <Send size={18} className="rtl:-scale-x-100" />
            {f.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
