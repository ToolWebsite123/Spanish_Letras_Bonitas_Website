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
      title: "Letras Góticas Medievales",
      href: "/letras-bonitas/letras-goticas",
      description: "Transforma textos en estilo medieval Fraktur y Blackletter.",
      icon: "🏰",
      badge: "Gótica",
    },
  ],
  "/letras-bonitas/letras-graffiti": [
    {
      title: "Letras Aesthetic",
      href: "/letras-bonitas/letras-aesthetic",
      description: "Fuentes anchas e inspiradas en cultura synthwave y vaporwave.",
      icon: "✨",
      badge: "Aesthetic",
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
  "/letras-personalizadas/texto-en-negrita": [
    {
      title: "Texto Itálico Inclinado",
      href: "/letras-personalizadas/texto-italico",
      description: "Convierte texto a letras inclinadas serif y sans-serif.",
      icon: "✍️",
      badge: "Itálico",
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
      title: "Letras Cursivas Manuscritas",
      href: "/letras-bonitas/letras-cursivas",
      description: "Fuentes manuscritas elegantes para copiar.",
      icon: "✒️",
      badge: "Cursiva",
    },
  ],
  "/nicks-para-juegos/nick-free-fire": [
    {
      title: "Símbolos para Nick",
      href: "/simbolos-aesthetic/simbolos-para-nick",
      description: "Espadas, coronas y alas para videojuegos.",
      icon: "⚔️",
      badge: "Gamer",
    },
    {
      title: "Nombres para Roblox",
      href: "/nicks-para-juegos/nombres-para-roblox",
      description: "Display Names kawaii y estéticos.",
      icon: "🤖",
      badge: "Roblox",
    },
    {
      title: "Texto en Negrita",
      href: "/letras-personalizadas/texto-en-negrita",
      description: "Resalta títulos y marcas en 1 clic.",
      icon: "💪",
      badge: "Negrita",
    },
    {
      title: "Emojis para Copiar",
      href: "/simbolos-aesthetic/emojis-para-copiar",
      description: "Colección categorizada de emojis estéticos.",
      icon: "🌸",
      badge: "Emojis",
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
  "/letras-bonitas/caligrafia": [
    {
      title: "Letras Cursivas Manuscritas",
      href: "/letras-bonitas/letras-cursivas",
      description: "Fuentes manuscritas elegantes para copiar.",
      icon: "✒️",
      badge: "Cursivas",
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
      description: "Fuentes elegantes para tu perfil personal.",
      icon: "📸",
      badge: "Instagram",
    },
    {
      title: "Letras Góticas Medievales",
      href: "/letras-bonitas/letras-goticas",
      description: "Trazos históricos y caligrafía Fraktur.",
      icon: "🏰",
      badge: "Gótica",
    },
  ],
  "/letras-bonitas/letras-firma": [
    {
      title: "Conversor de Caligrafía",
      href: "/letras-bonitas/caligrafia",
      description: "Trazos elegantes y pluma artesanal.",
      icon: "✍️",
      badge: "Elegante",
    },
    {
      title: "Letras Cursivas Manuscritas",
      href: "/letras-bonitas/letras-cursivas",
      description: "Fuentes fluidas estilo firma personal.",
      icon: "✒️",
      badge: "Cursivas",
    },
    {
      title: "Texto Itálico Inclinado",
      href: "/letras-personalizadas/texto-italico",
      description: "Letras inclinadas serif y sans-serif.",
      icon: "✍️",
      badge: "Itálico",
    },
    {
      title: "Bio para Instagram",
      href: "/fuentes-para-instagram/bio-para-instagram",
      description: "Firmas elegantes para destacar tu biografía.",
      icon: "📸",
      badge: "Instagram",
    },
  ],
  "/letras-bonitas/letras-aesthetic": [
    {
      title: "Símbolos Coquette",
      href: "/simbolos-aesthetic/simbolos-coquette",
      description: "Moños rosados 🎀 y estética vintage.",
      icon: "🎀",
      badge: "Coquette",
    },
    {
      title: "Kaomojis Japoneses",
      href: "/simbolos-aesthetic/kaomojis",
      description: "Emoticones Unicode tiernos e interactivos.",
      icon: "😊",
      badge: "Kaomoji",
    },
    {
      title: "Emojis para Copiar",
      href: "/simbolos-aesthetic/emojis-para-copiar",
      description: "Colección de emojis estéticos categorizados.",
      icon: "🌸",
      badge: "Emojis",
    },
    {
      title: "Bio para Instagram",
      href: "/fuentes-para-instagram/bio-para-instagram",
      description: "Fuentes aesthetic y separadores decorativos.",
      icon: "📸",
      badge: "Instagram",
    },
  ],
  "/letras-bonitas/letras-japonesas": [
    {
      title: "Kaomojis Japoneses",
      href: "/simbolos-aesthetic/kaomojis",
      description: "Emoticones CJK y rostros de anime Unicode.",
      icon: "😊",
      badge: "Kaomoji",
    },
    {
      title: "Letras Góticas Medievales",
      href: "/letras-bonitas/letras-goticas",
      description: "Tipografía medieval para perfiles otaku.",
      icon: "🏰",
      badge: "Gótica",
    },
    {
      title: "Nombres para Roblox",
      href: "/nicks-para-juegos/nombres-para-roblox",
      description: "Display Names en estilo japonés y anime.",
      icon: "🤖",
      badge: "Roblox",
    },
    {
      title: "Símbolos para Nick",
      href: "/simbolos-aesthetic/simbolos-para-nick",
      description: "Espadas, katanas y alas para apodos.",
      icon: "⚔️",
      badge: "Gamer",
    },
  ],
  "/letras-bonitas/letras-tatuajes": [
    {
      title: "Letras Góticas Medievales",
      href: "/letras-bonitas/letras-goticas",
      description: "Blackletter y Fraktur tradicionales para tatuajes.",
      icon: "🏰",
      badge: "Tatuajes",
    },
    {
      title: "Conversor de Caligrafía",
      href: "/letras-bonitas/caligrafia",
      description: "Trazos finos y pluma para lettering corporal.",
      icon: "✍️",
      badge: "Caligrafía",
    },
    {
      title: "Letras Cursivas Manuscritas",
      href: "/letras-bonitas/letras-cursivas",
      description: "Líneas fluidas ideal para nombres en la piel.",
      icon: "✒️",
      badge: "Cursivas",
    },
    {
      title: "Nombres Personalizados",
      href: "/letras-personalizadas/nombres-personalizados",
      description: "Diseña nombres propios para bocetos de tatuaje.",
      icon: "🏷️",
      badge: "Nombres",
    },
  ],
  "/nicks-para-juegos/nombres-para-roblox": [
    {
      title: "Nicks para Free Fire",
      href: "/nicks-para-juegos/nick-free-fire",
      description: "Apodos pro y guerreros en 12 bytes.",
      icon: "🎮",
      badge: "Free Fire",
    },
    {
      title: "Símbolos para Nick",
      href: "/simbolos-aesthetic/simbolos-para-nick",
      description: "Espadas, coronas y alas para apodos.",
      icon: "⚔️",
      badge: "Gamer",
    },
    {
      title: "Kaomojis Tiernos",
      href: "/simbolos-aesthetic/kaomojis",
      description: "Caritas japonesas kawaii para Display Name.",
      icon: "😊",
      badge: "Kaomojis",
    },
    {
      title: "Símbolos Coquette",
      href: "/simbolos-aesthetic/simbolos-coquette",
      description: "Moños 🎀 y símbolos femeninos para Roblox.",
      icon: "🎀",
      badge: "Coquette",
    },
  ],
  "/fuentes-para-instagram/fuentes-para-discord": [
    {
      title: "Símbolos para Nick",
      href: "/simbolos-aesthetic/simbolos-para-nick",
      description: "Decoración de roles y apodos de servidor.",
      icon: "⚔️",
      badge: "Servidor",
    },
    {
      title: "Texto en Negrita",
      href: "/letras-personalizadas/texto-en-negrita",
      description: "Resalta títulos de canales e información.",
      icon: "💪",
      badge: "Negrita",
    },
    {
      title: "Bio para Instagram",
      href: "/fuentes-para-instagram/bio-para-instagram",
      description: "Fuentes estéticas compatibles con Discord.",
      icon: "📸",
      badge: "Fuentes",
    },
    {
      title: "Kaomojis para Discord",
      href: "/simbolos-aesthetic/kaomojis",
      description: "Emoticones de texto para chats de voz y texto.",
      icon: "😊",
      badge: "Kaomojis",
    },
  ],
  "/fuentes-para-instagram/fuentes-para-facebook": [
    {
      title: "Texto en Negrita",
      href: "/letras-personalizadas/texto-en-negrita",
      description: "Rompe la monotonía del feed con negrita.",
      icon: "💪",
      badge: "Facebook",
    },
    {
      title: "Bio para Instagram",
      href: "/fuentes-para-instagram/bio-para-instagram",
      description: "Fuentes y estilos para perfil comercial.",
      icon: "📸",
      badge: "Perfil",
    },
    {
      title: "Mayúsculas a Minúsculas",
      href: "/letras-personalizadas/mayusculas-minusculas",
      description: "Corrige párrafos largos y títulos fácilmente.",
      icon: "🔤",
      badge: "Formato",
    },
    {
      title: "Texto Itálico",
      href: "/letras-personalizadas/texto-italico",
      description: "Destaca citas y opiniones en publicaciones.",
      icon: "✍️",
      badge: "Itálico",
    },
  ],
  "/fuentes-para-instagram/fuentes-para-whatsapp": [
    {
      title: "Texto Invisible",
      href: "/letras-personalizadas/texto-invisible",
      description: "Envía mensajes en blanco o espacios vacíos.",
      icon: "👻",
      badge: "Trucos",
    },
    {
      title: "Texto en Negrita",
      href: "/letras-personalizadas/texto-en-negrita",
      description: "Resalta avisos y mensajes en grupos.",
      icon: "💪",
      badge: "Negrita",
    },
    {
      title: "Letras Cursivas",
      href: "/letras-bonitas/letras-cursivas",
      description: "Estiliza la casilla de Info / Estado personal.",
      icon: "✒️",
      badge: "Estado",
    },
    {
      title: "Emojis para Copiar",
      href: "/simbolos-aesthetic/emojis-para-copiar",
      description: "Expresiones y viñetas para tus chats.",
      icon: "🌸",
      badge: "Emojis",
    },
  ],
  "/simbolos-aesthetic/emojis-para-copiar": [
    {
      title: "Kaomojis Japoneses",
      href: "/simbolos-aesthetic/kaomojis",
      description: "Emoticones hechos con texto Unicode.",
      icon: "😊",
      badge: "Kaomoji",
    },
    {
      title: "Símbolos Coquette",
      href: "/simbolos-aesthetic/simbolos-coquette",
      description: "Moños, corazones y estética pastel.",
      icon: "🎀",
      badge: "Coquette",
    },
    {
      title: "Símbolos para Nick",
      href: "/simbolos-aesthetic/simbolos-para-nick",
      description: "Decoración para nombres de usuario.",
      icon: "⚔️",
      badge: "Símbolos",
    },
    {
      title: "Bio para Instagram",
      href: "/fuentes-para-instagram/bio-para-instagram",
      description: "Organiza tu perfil con viñetas estéticas.",
      icon: "📸",
      badge: "Bio",
    },
  ],
  "/simbolos-aesthetic/simbolos-coquette": [
    {
      title: "Emojis para Copiar",
      href: "/simbolos-aesthetic/emojis-para-copiar",
      description: "Corazones, flores y emojis estéticos.",
      icon: "🌸",
      badge: "Emojis",
    },
    {
      title: "Kaomojis Tiernos",
      href: "/simbolos-aesthetic/kaomojis",
      description: "Caritas sonrojadas y tiernas para copiar.",
      icon: "😊",
      badge: "Kaomojis",
    },
    {
      title: "Letras Aesthetic",
      href: "/letras-bonitas/letras-aesthetic",
      description: "Tipografía vintage y espacio amplio.",
      icon: "✨",
      badge: "Aesthetic",
    },
    {
      title: "Bio para Instagram",
      href: "/fuentes-para-instagram/bio-para-instagram",
      description: "Combina moños 🎀 con fuentes bonitas.",
      icon: "📸",
      badge: "Instagram",
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
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
          <span>🔗</span> Navegación Recomendada
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] flex items-center gap-2.5">
          Otras Herramientas de Letras Bonitas Relacionadas
        </h2>
        <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
          Explora nuestros conversores especializados y potencia tus textos en redes sociales y juegos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {hubs.map((hub) => (
          <Link
            key={hub.href}
            href={hub.href}
            className="group relative flex flex-col justify-between p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--input-bg)] hover:border-teal-400/60 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-2xl">{hub.icon}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30">
                {hub.badge}
              </span>
            </div>

            <div className="flex flex-col gap-1 my-3">
              <h3 className="font-extrabold text-sm text-[var(--foreground)] group-hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors">
                {hub.title}
              </h3>
              <p className="text-xs text-[var(--foreground)] opacity-80 leading-relaxed">
                {hub.description}
              </p>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-bold text-teal-600 dark:text-teal-400 group-hover:underline">
              <span>Probar conversor</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
