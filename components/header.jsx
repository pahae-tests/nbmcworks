import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "../lib/languageContext";

const sectionIds = ["home", "services", "capabilities", "sectors", "about", "contact"];

export default function Header() {
  const { t, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-nbmc-charcoal bg-nbmc-ink">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5">
        <a href="#home" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="NBMC Works"
            width={900}
            height={278}
            priority
            className="h-11 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium transition-colors hover:text-white ${
                active === id ? "text-nbmc-green" : "text-nbmc-soft"
              }`}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="hidden items-center gap-2 rounded border border-nbmc-steel px-3 py-2 text-sm font-medium text-nbmc-soft transition-colors hover:border-nbmc-silver hover:text-white sm:flex"
          >
            <Languages size={16} />
            {t.langSwitch}
          </button>
          <a
            href="#contact"
            className="hidden rounded bg-nbmc-green px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-nbmc-greenHover md:inline-flex"
          >
            {t.cta.quote}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.closeMenu : t.openMenu}
            className="text-white lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-nbmc-charcoal bg-nbmc-ink lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {sectionIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`border-b border-nbmc-charcoal py-3 text-base font-medium ${
                  active === id ? "text-nbmc-green" : "text-nbmc-soft"
                }`}
              >
                {t.nav[id]}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded bg-nbmc-green px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-nbmc-greenHover"
              >
                {t.cta.quote}
              </a>
              <button
                type="button"
                onClick={toggleLang}
                className="inline-flex items-center justify-center gap-2 rounded border border-nbmc-steel px-5 py-3 text-sm font-medium text-nbmc-soft"
              >
                <Languages size={16} />
                {t.langSwitch}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
