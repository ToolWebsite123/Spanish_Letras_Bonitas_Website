import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Letras Graffiti - Fuentes Urbanas y Arte Callejero 🎨",
  description:
    "Genera letras estilo graffiti, fuentes urbanas, letras con sombra, cuadros oscuros y trazos gruesos para copiar y pegar en nicks y redes.",
};

const graffitiFaqs = [
  {
    q: "¿Qué son las letras tipo graffiti Unicode?",
    a: "Son conjuntos de caracteres alfanuméricos encuadrados en bloques negros (Squared Dark), círculos oscuros y dobles trazos que emulan los tags y graffitis del arte urbano.",
  },
  {
    q: "¿Sirven las letras graffiti para nombres de clanes de eSports?",
    a: "¡Absolutamente! Es una de las familias tipográficas más populares para líderes de clan en Free Fire, apodos de Discord y miniaturas de YouTube por su gran presencia visual.",
  },
  {
    q: "¿Cómo copiar letras estilo graffiti en 1 clic?",
    a: "Escribe tu nombre o el de tu equipo en la herramienta superior, pulsa sobre la variante de bloque deseada y el texto se copiará inmediatamente a tu portapapeles.",
  },
  {
    q: "¿Tienen las letras graffiti buena visibilidad en celulares?",
    a: "Sí. Los caracteres en bloques negros (🅶🆁🅰🅵🅵🅸🆃🅸) destacan con alto contraste tanto en pantallas con fondo claro como en temas oscuros.",
  },
];

export default function LetrasGraffitiPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[var(--foreground)] opacity-75 font-medium">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)] opacity-75">Letras Bonitas</span>
          <span>/</span>
          <span className="text-teal-600 dark:text-teal-400 font-bold">Letras Graffiti</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>🎨</span> Estilo Urbano & Tags Callejeros
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras Graffiti y Arte Urbano 🎨
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground)] opacity-80 leading-relaxed max-w-4xl font-medium">
            Convierte tus palabras en potentes tipografías urbanas, letras con volumen, bloques encuadrados y estilos callejeros. Combínalas con nuestro <Link href="/letras-bonitas/letras-graffiti" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">alfabeto graffiti completo A-Z</Link> y destaca en tu <Link href="/nicks-para-juegos/nick-free-fire" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">nick de Free Fire</Link>.
          </p>
        </header>

        <Converter highlightStyleId="gothic" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🎨 Impacto Visual
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              La Estética del Arte Urbano Digital
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              El graffiti digital transmite energía, fuerza y presencia. Para acompañar tu tag urbano, puedes añadir <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">símbolos para nick gamer</Link> o aplicar un formato de <Link href="/letras-personalizadas/texto-en-negrita" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">texto en negrita</Link>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Nombres de Clanes eSports</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Los recuadros negros (🅲🅻🅰🅽) proyectan autoridad y solidez en los capitanes de escuadra.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Títulos de Banners y Portadas</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utiliza las fuentes encuadradas para destacar ofertas o títulos en historias de Instagram y miniaturas.
              </p>
            </div>
          </div>
        </section>

        {/* Related Categories internal linking widget */}
        <RelatedCategoriesWidget currentPath="/letras-bonitas/letras-graffiti" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre Letras Graffiti" faqs={graffitiFaqs} />
      </main>
    </div>
  );
}
