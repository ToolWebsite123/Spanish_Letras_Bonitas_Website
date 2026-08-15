import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Letras Graffiti - Fuentes Urbanas y Arte Callejero 🎨",
  description:
    "Genera letras estilo graffiti, fuentes urbanas, letras con sombra, cuadros oscuros y trazos gruesos para copiar y pegar en nicks y redes.",
  alternates: {
    canonical: "/letras-bonitas/letras-graffiti",
  },
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
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras Graffiti y Arte Urbano 🎨
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="gothic" />

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

        {/* SECTION D — Dónde Lucen Mejor las Letras Graffiti */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🎨 Aplicaciones Recomendadas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Dónde Lucen Mejor las Letras Graffiti
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              El estilo urbano de bloques oscuros y sombras proyecta fuerza e identidad. Descubre en qué plataformas digitales destaca más:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🎮</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Nicks de Free Fire & eSports
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Los recuadros y bloques de graffiti le dan un aspecto robusto a los apodos de jugadores competitivos y etiquetas de clan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">👾</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Nombres de Canales de Discord
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Personaliza los títulos de tus canales de texto e hilos de chat para organizar tu servidor con una estética callejera única.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🖼️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Miniaturas y Banners Promocionales
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Aumenta el contraste de tus títulos en portadas de YouTube e historias de Instagram para capturar la atención en desplazamientos rápidos.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION E — Graffiti vs Negrita vs Burbuja: ¿Cuál Elegir? */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📊 Comparativa de Estilos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Graffiti vs Negrita vs Burbuja: ¿Cuál Elegir?
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Compara las tres familias de tipografía pesada para seleccionar la que mejor se adapte a tu proyecto:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                1. Estilo Graffiti (Squared Dark)
              </span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Letras encerradas en bloques sólidos oscuros (🅶🆁🅰🅵🅵🅸🆃🅸). Máxima contundencia y presencia urbana.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                2. Texto en Negrita (Bold Sans)
              </span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Trazos limpios y gruesos sin marcos (𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀). Ideal para textos largos, biografías y descripciones formales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                3. Estilo Burbuja (Circled)
              </span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Caracteres dentro de círculos redondeados (ⒼⓇⒶⒻⒻⒾⓉⒾ). Opción más amigable y suave para perfiles estéticos.
              </p>
            </div>
          </div>
        </section>

        {/* Related Categories internal linking widget */}
        <RelatedCategoriesWidget currentPath="/letras-bonitas/letras-graffiti" />


        <FaqSection title="Preguntas Frecuentes sobre Letras Graffiti" faqs={graffitiFaqs} />
      </main>
    </div>
  );
}
