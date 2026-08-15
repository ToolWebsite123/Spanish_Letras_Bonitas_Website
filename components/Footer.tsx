import Link from "next/link";

interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidad", href: "/legal/politica-de-privacidad" },
      { label: "Política de Cookies", href: "/legal/politica-de-cookies" },
      { label: "Aviso Legal", href: "/legal/aviso-legal" },
      { label: "Sobre Nosotros", href: "/legal/sobre-nosotros" },
      { label: "Contacto", href: "/legal/contacto" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--card-bg)] text-[var(--foreground)] border-t border-[var(--border-color)] transition-colors mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-12 border-b border-[var(--border-color)]">
          {/* Brand Info Column */}
          <div className="flex flex-col gap-4 max-w-md">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-400 via-emerald-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                🌸
              </div>
              <span className="text-lg font-black bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent">
                Letras Bonitas
              </span>
            </Link>
            <p className="text-xs text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              El conversor de letras bonitas y fuentes estéticas #1 en español. Genera más de 300+ tipografías gratis para Instagram, TikTok, WhatsApp y Free Fire.
            </p>
          </div>

          {/* Nav Link Groups */}
          {footerLinkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3 md:items-end">
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-[var(--foreground)] opacity-75 hover:opacity-100 hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--foreground)] opacity-80 font-medium">
          <p>© {currentYear} Letras Bonitas. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors">
              Inicio
            </Link>
            <Link href="/letras-bonitas/letras-cursivas" className="hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors">
              Cursivas
            </Link>
            <Link href="/nicks-para-juegos/nick-free-fire" className="hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors">
              Free Fire
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
