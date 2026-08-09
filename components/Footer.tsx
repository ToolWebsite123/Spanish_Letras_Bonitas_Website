import Link from "next/link";

interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Estilos Populares",
    links: [
      { label: "Letras Cursivas", href: "/letras-bonitas/letras-cursivas" },
      { label: "Letras Aesthetic", href: "/letras-bonitas/letras-aesthetic" },
      { label: "Letras Graffitis", href: "/letras-bonitas/letras-graffiti" },
      { label: "Letras Tattoo", href: "/letras-bonitas/letras-tatuajes" },
      { label: "Letras para Firma", href: "/letras-bonitas/letras-firma" },
      { label: "Letras Japonesas", href: "/letras-bonitas/letras-japonesas" },
    ],
  },
  {
    title: "Para Juegos",
    links: [
      { label: "Nick Free Fire", href: "/nicks-para-juegos/nick-free-fire" },
      { label: "Nombres Roblox", href: "/nicks-para-juegos/nombres-para-roblox" },
      { label: "FF Femenino", href: "/nicks-para-juegos/nick-free-fire-femenino" },
      { label: "FF Masculino", href: "/nicks-para-juegos/nick-free-fire-masculino" },
      { label: "Cambiar Nick FF", href: "/nicks-para-juegos/cambiar-nick-free-fire" },
      { label: "Bio Colorida FF", href: "/nicks-para-juegos/bio-colorida-free-fire" },
    ],
  },
  {
    title: "Para Redes Sociales",
    links: [
      { label: "Bio Instagram", href: "/fuentes-para-instagram/bio-para-instagram" },
      { label: "Fuentes Facebook", href: "/fuentes-para-instagram/fuentes-para-facebook" },
      { label: "Fuentes WhatsApp", href: "/fuentes-para-instagram/fuentes-para-whatsapp" },
      { label: "Fuentes Discord", href: "/fuentes-para-instagram/fuentes-para-discord" },
    ],
  },
  {
    title: "Herramientas",
    links: [
      { label: "Texto Negrita", href: "/letras-personalizadas/texto-en-negrita" },
      { label: "Texto Itálico", href: "/letras-personalizadas/texto-italico" },
      { label: "Nombres Personalizados", href: "/letras-personalizadas/nombres-personalizados" },
      { label: "Invertir Texto", href: "/letras-personalizadas/invertir-texto" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0b0814] text-slate-300 border-t border-purple-900/40 transition-colors mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-purple-900/40">
          {/* Brand Info Column */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform">
                🌸
              </div>
              <span className="text-lg font-black bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent">
                Letras Bonitas
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              El conversor de letras bonitas y fuentes estéticas #1 en español. Genera más de 300+ tipografías gratis para Instagram, TikTok, WhatsApp y Free Fire.
            </p>
          </div>

          {/* Nav Link Groups */}
          {footerLinkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-pink-400">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-pink-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© {currentYear} Letras Bonitas. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-pink-400 transition-colors">
              Inicio
            </Link>
            <Link href="/letras-bonitas/letras-cursivas" className="hover:text-pink-400 transition-colors">
              Cursivas
            </Link>
            <Link href="/nicks-para-juegos/nick-free-fire" className="hover:text-pink-400 transition-colors">
              Free Fire
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
