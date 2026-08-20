import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Símbolos para Nick - Gamer, Coronas y Espadas ⚔️",
  description:
    "Copia y pega los mejores símbolos para nicks de Free Fire, Roblox, Fortnite y Discord. Coronas, espadas, estrellas, alas y caracteres japoneses en 1 clic.",
  alternates: {
    canonical: "/simbolos-aesthetic/simbolos-para-nick",
  },
};

const simbolosFaqs = [
  {
    q: "¿Cómo copiar los símbolos para nick al portapapeles?",
    a: "Simplemente toca cualquier recuadro de símbolo, adorno o nick predeterminado en nuestra herramienta y el texto se copiará de forma inmediata a la memoria de tu teléfono u ordenador listo para pegar.",
  },
  {
    q: "¿Todos los juegos como Free Fire y Roblox aceptan estos símbolos?",
    a: "La inmensa mayoría de videojuegos modernos compatibles con Unicode (Garena Free Fire, Roblox, PUBG Mobile, Call of Duty Mobile, Fortnite y Valorant) reconocen correctamente símbolos de armas, coronas y alas.",
  },
  {
    q: "¿Por qué algunos símbolos aparecen como rectángulos vacíos 🔲 en juegos?",
    a: "Ocurre únicamente cuando un juego utiliza un motor gráfico muy antiguo que no incluye la tabla de símbolos matemáticos. Para garantizar un 100% de visibilidad universal, utiliza símbolos clásicos como estrellas (★), coronas (👑), espadas (⚔️) o rayos (⚡).",
  },
  {
    q: "¿Cómo insertar el espacio transparente o invisible entre mi clan y mi nombre?",
    a: "En lugar de usar la barra espaciadora del teclado (que muchos juegos rechazan), copia el carácter Unicode transparente U+3164 desde nuestra sección de solución de problemas para separar limpiamente tu tag de clan.",
  },
  {
    q: "¿Cuál es el límite máximo de memoria al agregar símbolos en Free Fire?",
    a: "Free Fire permite hasta 12 bytes de memoria. Como un símbolo decorativo puede pesar de 2 a 4 bytes, te sugerimos verificar tu apodo en nuestro simulador en tiempo real arriba.",
  },
  {
    q: "¿Se pueden combinar varios símbolos en un mismo nick?",
    a: "Sí, la regla de oro para un nick pro de eSports es mantener simetría: coloca 1 símbolo de escudo a la izquierda (ej: ꧁༺) y el mismo símbolo invertido a la derecha (ej: ༻꧂).",
  },
];

export default function SimbolosParaNickPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Símbolos y Adornos para Nick de Juegos ⚔️
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="circled-negative" highlightStyleIds={["circled-negative", "squared-negative", "gothic", "double-struck", "greek-lookalike", "cyrillic-lookalike"]} />

        {/* ARTÍCULO DEEP 1 */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              👑 Guía de Estética eSports
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              El Arte de Diseñar Nicks Imponentes: 5 Categorías Esenciales de Símbolos
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Un nombre de jugador memorable no solo depende de las letras, sino de los marcos y símbolos ornamentales que lo protegen. Explora nuestras colecciones especializadas de <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">símbolos coquette con moños</Link> y <Link href="/simbolos-aesthetic/emojis-para-copiar" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">emojis para copiar</Link>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-2xl">⚔️</span>
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">1. Símbolos Guerreros & Armas</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Espadas cruzadas (⚔️), dagas (🗡️), pistolas (🔫) y escudos (🛡️). Transmiten agresividad y liderazgo en partidas de clasificación de Free Fire y PUBG.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-2xl">👑</span>
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">2. Coronas & Realeza</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Coronas doradas (👑, ♔, ♕) y marcos reales (꧁♔꧂). Ideales para capitanes de clan y jugadores de alto rango en la tabla de clasificación.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-2xl">꧁༺༻꧂</span>
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">3. Alas de Ángel & Demonio</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Alas de plumas (꧁༺ ༻꧂) y marcos simétricos (༻꧂). Proporcionan un marco envolvente impecable alrededor del nombre central.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Símbolos que Free Fire NO Recorta (Los Más Seguros) */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ⚔️ Optimización de Bytes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Símbolos que Free Fire NO Recorta (Los Más Seguros)
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Símbolos simples de 1 byte como ✰ ✿ ♛ ⚔ suelen sobrevivir mejor al límite de 12 bytes que combinaciones Unicode complejas de 3-4 bytes — prioriza estos si tu nick ya es largo.
            </p>
          </div>
        </section>

        {/* Related Categories internal linking widget */}
        <RelatedCategoriesWidget currentPath="/simbolos-aesthetic/simbolos-para-nick" />

        {/* Curated Preset Grid */}

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Símbolos para Nick" faqs={simbolosFaqs} />
      </main>
    </div>
  );
}
