import Link from "next/link";

interface HubLink {
  title: string;
  href: string;
  description: string;
  icon: string;
  badge: string;
}

interface RelatedCategoriesWidgetProps {
  currentPath: string;
}

const ALL_HUBS: Record<string, HubLink[]> = {
  "/letras-bonitas/letras-cursivas": [
    {
      title: "Conversor de Caligrafía",
      href: "/letras-bonitas/caligrafia",
      description: "Trazos elegantes y pluma artesanal para invitaciones.",
      icon: "✍️",
      badge: "Elegante",
    },
    {
      title: "Letras para Firma",
      href: "/letras-bonitas/letras-firma",
      description: "Crea firmas manuscritas para emails y marcas.",
      icon: "🖋️",
      badge: "Profesional",
    },
    {
      title: "Fuentes para Bio de Instagram",
      href: "/fuentes-para-instagram/bio-para-instagram",
      description: "Combina cursivas con letras pequeñas en tu perfil.",
      icon: "📸",
      badge: "Instagram",
    },
    {
      title: "Abecedario Cursivo Completo",
      href: "/alfabeto-completo/alfabeto-cursivo",
      description: "Muestrario A-Z en mayúsculas y minúsculas.",
      icon: "✒️",
      badge: "Abecedario",
    },
  ],
  "/letras-bonitas/letras-graffiti": [
    {
      title: "Alfabeto Graffiti Completo",
      href: "/alfabeto-completo/alfabeto-graffiti",
      description: "Abecedario urbano A-Z en bloques negros.",
      icon: "🎨",
      badge: "Urbano",
    },
    {
      title: "Símbolos para Nick de Juegos",
      href: "/simbolos-aesthetic/simbolos-para-nick",
      description: "Espadas, coronas y alas para acompañar tu tag.",
      icon: "⚔️",
      badge: "Gamer",
    },
    {
      title: "Nicks para Free Fire",
      href: "/nicks-para-juegos/nick-free-fire",
      description: "Apodos pro y guerreros en 12 bytes.",
      icon: "🎮",
      badge: "Free Fire",
    },
    {
      title: "Texto en Negrita (Bold)",
      href: "/letras-personalizadas/texto-en-negrita",
      description: "Trazos gruesos para títulos e eSports.",
      icon: "💪",
      badge: "Potente",
    },
  ],
  "/nicks-para-juegos/nick-free-fire": [
    {
      title: "Nicks FF Masculinos",
      href: "/nicks-para-juegos/nick-free-fire-masculino",
      description: "Estilos imponentes de capitán y rusher.",
      icon: "🗡️",
      badge: "Masculino",
    },
    {
      title: "Nicks FF Femeninos",
      href: "/nicks-para-juegos/nick-free-fire-femenino",
      description: "Estilos lindos, coronas y moños coquette.",
      icon: "🌸",
      badge: "Femenino",
    },
    {
      title: "Cambiar Nick Free Fire",
      href: "/nicks-para-juegos/cambiar-nick-free-fire",
      description: "Guía paso a paso y solución a límites de bytes.",
      icon: "⚙️",
      badge: "Tutorial",
    },
    {
      title: "Bio Colorida Free Fire",
      href: "/nicks-para-juegos/bio-colorida-free-fire",
      description: "Códigos [FF0000] e imitación de banderas.",
      icon: "🌈",
      badge: "Colores",
    },
  ],
  "/simbolos-aesthetic/simbolos-para-nick": [
    {
      title: "Símbolos Coquette",
      href: "/simbolos-aesthetic/simbolos-coquette",
      description: "Moños rosados 🎀 y corazones entrelazados.",
      icon: "🎀",
      badge: "Coquette",
    },
    {
      title: "Emojis para Copiar",
      href: "/simbolos-aesthetic/emojis-para-copiar",
      description: "Colección categorizada de emojis estéticos.",
      icon: "🌸",
      badge: "Emojis",
    },
    {
      title: "Nombres para Roblox",
      href: "/nicks-para-juegos/nombres-para-roblox",
      description: "Display Names kawaii y estéticos.",
      icon: "🤖",
      badge: "Roblox",
    },
    {
      title: "Fuentes para Discord",
      href: "/fuentes-para-instagram/fuentes-para-discord",
      description: "Canales de texto y apodos de servidor.",
      icon: "👾",
      badge: "Discord",
    },
  ],
  "/fuentes-para-instagram/bio-para-instagram": [
    {
      title: "Letras Cursivas Manuscritas",
      href: "/letras-bonitas/letras-cursivas",
      description: "Fuentes finas para títulos de perfil.",
      icon: "✒️",
      badge: "Cursivas",
    },
    {
      title: "Letras Aesthetic",
      href: "/letras-bonitas/letras-aesthetic",
      description: "Espacio amplio (Fullwidth) y Small Caps.",
      icon: "✨",
      badge: "Aesthetic",
    },
    {
      title: "Texto en Negrita",
      href: "/letras-personalizadas/texto-en-negrita",
      description: "Resalta propuestas de valor en la Bio.",
      icon: "💪",
      badge: "Negrita",
    },
    {
      title: "Emojis para Copiar",
      href: "/simbolos-aesthetic/emojis-para-copiar",
      description: "Viñetas estéticas para ordenar tu perfil.",
      icon: "🌸",
      badge: "Emojis",
    },
  ],
};

const DEFAULT_HUBS: HubLink[] = [
  {
    title: "Letras Cursivas",
    href: "/letras-bonitas/letras-cursivas",
    description: "Fuentes manuscritas elegantes para copiar.",
    icon: "✒️",
    badge: "Populares",
  },
  {
    title: "Bio para Instagram",
    href: "/fuentes-para-instagram/bio-para-instagram",
    description: "Estructuras de 4 renglones y fuentes bonitas.",
    icon: "📸",
    badge: "Instagram",
  },
  {
    title: "Símbolos para Nick",
    href: "/simbolos-aesthetic/simbolos-para-nick",
    description: "Espadas, coronas y alas para videojuegos.",
    icon: "⚔️",
    badge: "Gamer",
  },
  {
    title: "Texto en Negrita",
    href: "/letras-personalizadas/texto-en-negrita",
    description: "Resalta títulos y ofertas en 1 clic.",
    icon: "💪",
    badge: "Negrita",
  },
];

export default function RelatedCategoriesWidget({ currentPath }: RelatedCategoriesWidgetProps) {
  const hubs = ALL_HUBS[currentPath] || DEFAULT_HUBS;

  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
          <span>🔗</span> Navegación Recomendada
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-2.5">
          Otras Herramientas de Letras Bonitas Relacionadas
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
          Explora nuestros conversores especializados y potencia tus textos en redes sociales y juegos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {hubs.map((hub) => (
          <Link
            key={hub.href}
            href={hub.href}
            className="group relative flex flex-col justify-between p-5 rounded-2xl border border-purple-900/40 bg-[#231c3d] hover:border-pink-500/60 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-2xl">{hub.icon}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-pink-500/10 text-pink-400 border border-pink-500/30">
                {hub.badge}
              </span>
            </div>

            <div className="flex flex-col gap-1 my-3">
              <h3 className="font-extrabold text-sm text-slate-100 group-hover:text-pink-400 transition-colors">
                {hub.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {hub.description}
              </p>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-bold text-pink-400 group-hover:underline">
              <span>Probar conversor</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
