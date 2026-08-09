import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Símbolos para Nick - Colección Gamer, Coronas, Espadas y Alas ⚔️",
  description:
    "Copia y pega los mejores símbolos para nicks de Free Fire, Roblox, Fortnite y Discord. Coronas, espadas, estrellas, alas y caracteres japoneses en 1 clic.",
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
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-pink-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Símbolos Aesthetic</span>
          <span>/</span>
          <span className="text-pink-400 font-bold">Símbolos para Nick</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
            <span>⚔️</span> La Mayor Colección de Adornos Gamer y Símbolos Unicode
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Símbolos y Adornos para Nick de Juegos ⚔️
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Personaliza tu apodo con la mayor colección de coronas, alas de ángel, espadas, cruces, rayos, marcas de clan y caracteres japoneses para destacar en <Link href="/nicks-para-juegos/nick-free-fire" className="text-pink-400 underline font-bold hover:text-pink-300">nicks de Free Fire</Link>, <Link href="/nicks-para-juegos/nombres-para-roblox" className="text-pink-400 underline font-bold hover:text-pink-300">nombres para Roblox</Link>, <Link href="/fuentes-para-instagram/fuentes-para-discord" className="text-pink-400 underline font-bold hover:text-pink-300">canales de Discord</Link> y redes sociales.
          </p>
        </header>

        {/* Master Tool */}
        <Converter highlightStyleId="circled-dark" />

        {/* ARTÍCULO DEEP 1 */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 self-start border border-purple-500/30">
              👑 Guía de Estética eSports
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              El Arte de Diseñar Nicks Imponentes: 5 Categorías Esenciales de Símbolos
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Un nombre de jugador memorable no solo depende de las letras, sino de los marcos y símbolos ornamentales que lo protegen. Explora nuestras colecciones especializadas de <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-pink-400 underline font-bold hover:text-pink-300">símbolos coquette con moños</Link> y <Link href="/simbolos-aesthetic/emojis-para-copiar" className="text-pink-400 underline font-bold hover:text-pink-300">emojis para copiar</Link>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-2xl">⚔️</span>
              <h3 className="font-extrabold text-base text-pink-400">1. Símbolos Guerreros & Armas</h3>
              <p className="text-slate-300 leading-relaxed">
                Espadas cruzadas (⚔️), dagas (🗡️), pistolas (🔫) y escudos (🛡️). Transmiten agresividad y liderazgo en partidas de clasificación de Free Fire y PUBG.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-2xl">👑</span>
              <h3 className="font-extrabold text-base text-pink-400">2. Coronas & Realeza</h3>
              <p className="text-slate-300 leading-relaxed">
                Coronas doradas (👑, ♔, ♕) y marcos reales (꧁♔꧂). Ideales para capitanes de clan y jugadores de alto rango en la tabla de clasificación.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-2xl">꧁༺༻꧂</span>
              <h3 className="font-extrabold text-base text-pink-400">3. Alas de Ángel & Demonio</h3>
              <p className="text-slate-300 leading-relaxed">
                Alas de plumas (꧁༺ ༻꧂) y marcos simétricos (༻꧂). Proporcionan un marco envolvente impecable alrededor del nombre central.
              </p>
            </div>
          </div>
        </section>

        {/* Related Categories internal linking widget */}
        <RelatedCategoriesWidget currentPath="/simbolos-aesthetic/simbolos-para-nick" />

        {/* Curated Preset Grid */}
        <ExamplesSection />

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Símbolos para Nick" faqs={simbolosFaqs} />
      </main>
    </div>
  );
}
