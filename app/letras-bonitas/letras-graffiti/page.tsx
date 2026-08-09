import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Letras Graffiti - Conversor de Fuentes Urbanas y Callejeras 🎨",
  description:
    "Convierte tu texto en letras de graffiti, arte urbano y fuentes callejeras para copiar y pegar. Decora nicks de juegos, logos y perfiles con estilo hip hop.",
};

const graffitiFaqs = [
  {
    q: "¿Qué caracteriza al estilo de letras graffiti en texto digital?",
    a: "Las letras graffiti digitales imitan los trazos robustos, contornos marcados y esquinas góticas del arte urbano callejero. Utilizan caracteres Unicode en bloque y fraktur pesada para transmitir fuerza, rebeldía y personalidad.",
  },
  {
    q: "¿Cómo usar fuentes de graffiti en nicks de Free Fire o juegos de acción?",
    a: "Son ideales para nombres de clan o apodos de batalla porque lucen imponentes. Al ser letras gruesas, te sugerimos combinarlas con símbolos de fuego (🔥) o espadas (⚔️) para dar un aspecto aún más competitivo.",
  },
  {
    q: "¿Se pueden usar letras de graffiti para crear logos rápidos?",
    a: "¡Sí! Puedes generar las iniciales o el nombre de tu marca o canal en el conversor, copiar el resultado y usarlo en las descripciones de tu canal de YouTube o Twitch.",
  },
  {
    q: "¿Cuál es la diferencia entre el estilo Wildstyle y las letras de bloque góticas?",
    a: "El Wildstyle en graffiti tradicional entrelaza letras con flechas y bordes afilados, mientras que las fuentes de bloque góticas digitales se enfocan en esquinas oscuras y bordes geométricos de alto contraste.",
  },
];

export default function LetrasGraffitiPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Letras Bonitas</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Letras Graffiti</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
            Letras Graffiti y Arte Urbano 🎨
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
            Convierte tus palabras en diseños tipográficos de estilo callejero y cultura hip-hop. Transforma apodos, marcas y títulos en letras imponentes con bordes marcados y aspecto de grafiti real.
          </p>
        </header>

        <Converter highlightStyleId="gothic" />

        {/* ARTÍCULO DETALLADO 1: Historia del Graffiti Digital */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>🎨</span> Estética del Graffiti y la Cultura Hip-Hop Digital
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Desde el nacimiento del movimiento Wildstyle en los vagones de metro de Nueva York durante los años 70 hasta los grandes murales de arte urbano contemporáneo, la tipografía de graffiti se caracteriza por la distorsión creativa, el volumen tridimensional y la expresividad de sus trazos.
          </p>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            En el mundo digital, el conversor utiliza caracteres Unicode como los bloques <code className="text-purple-600 font-mono font-semibold">Fraktur (U+1D504)</code> y las letras enmarcadas en bloque negativo para trasladar esa fuerza callejera a los nombres de juegos y canales de contenido.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
            <div className="p-5 rounded-xl border border-amber-100 dark:border-amber-900/50 bg-amber-50/40 dark:bg-amber-950/20 flex flex-col gap-2">
              <h3 className="font-bold text-base text-amber-700 dark:text-amber-300">𝔊ó𝔱𝔦𝔠𝔞 𝔘𝔯𝔟𝔞𝔫𝔞 (Urban Gothic)</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Trazos afilados inspirados en caligrafía germánica antigua combinados con la estética de pandillas y cultura hip-hop. Excelente para nicks de Free Fire.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-red-100 dark:border-red-900/50 bg-red-50/40 dark:bg-red-950/20 flex flex-col gap-2">
              <h3 className="font-bold text-base text-red-700 dark:text-red-300">🅱🅾🅻🅳 Block Negative</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Letras encerradas en bloques oscuros rellenos que simulan plantillas de stencil o aerosol sobre pared. Perfectas para destacar palabras individuales.
              </p>
            </div>
          </div>
        </section>

        {/* ARTÍCULO DETALLADO 2: Ejemplos de Nicks y Títulos de Graffiti */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>🔥</span> Ejemplos de Nombres y Títulos de Graffiti Listos para Copiar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Nick de Clan de Batalla</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">꧁𝔖𝔱𝔯𝔢𝔢𝔱𝔎𝔦𝔫𝔤𝔰꧂ | 🔥 𝕲𝖆𝖓𝖌𝖑𝖊𝖆𝖉𝖊𝖗</p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Título de Canal de YouTube</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">🆄🆁🅱🅰🅽 🆅🅸🅱🅴🆂 🎧 | 𝔘𝔯𝔟𝔞𝔫 𝔄𝔯𝔱 ℭ𝔥𝔞𝔫𝔫𝔢𝔩</p>
            </div>
          </div>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Letras Graffiti" faqs={graffitiFaqs} />
      </main>
    </div>
  );
}
