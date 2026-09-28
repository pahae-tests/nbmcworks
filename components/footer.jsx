import Image from "next/image";
import { useLanguage } from "../lib/languageContext";
import { config } from "../lib/config";

const sectionIds = ["home", "services", "capabilities", "sectors", "about", "contact"];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-nbmc-ink text-nbmc-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Image src="/logo.png" alt="NBMC Works" width={900} height={278} className="h-12 w-auto" />
          <p className="mt-5 text-sm">{t.footer.tagline}</p>
        </div>
        <nav className="flex flex-col gap-3 text-sm">
          {sectionIds.map((id) => (
            <a key={id} href={`#${id}`} className="transition-colors hover:text-white">
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-3 text-sm">
          <a href={`tel:${config.phoneHref}`} dir="ltr" className="w-fit transition-colors hover:text-white">
            {config.phoneDisplay}
          </a>
          <a href={`mailto:${config.email}`} dir="ltr" className="w-fit transition-colors hover:text-white">
            {config.email}
          </a>
        </div>
      </div>
      <div className="border-t border-nbmc-charcoal">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-nbmc-silver">
          © {new Date().getFullYear()} NBMC Works. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
