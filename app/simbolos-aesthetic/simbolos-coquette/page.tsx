import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Símbolos Coquette - Moños, Corazones y Flores 🎀",
  description:
    "Copia símbolos coquette, moños rosados, corazones suaves, zapatillas de ballet y tipografías delicadas para Instagram, TikTok y biografías.",
  alternates: {
    canonical: "/simbolos-aesthetic/simbolos-coquette",
  },
};

const coquetteFaqs = [
  {
    q: "¿Qué símbolos representan la tendencia Coquette?",
    a: "Los elementos principales son los moños y lazos (🎀), corazones entrelazados (💕, 💖), flores de cerezo (🌸), zapatillas de ballet (🩰), perlas (🦪) y encajes victorianos.",
  },
  {
    q: "¿Cómo usar los símbolos coquette en la biografía de Instagram?",
    a: "Coloca 1 moño (🎀) en los extremos de tu nombre personal (ej: 🎀 𝓢𝓸𝓯í𝓪 🎀) y utiliza viñetas de corazones suaves (💕) para listar tus hobbies en letras pequeñas.",
  },
  {
    q: "¿Combinan los símbolos coquette con letras cursivas finas?",
    a: "¡Perfectamente! Las fuentes cursivas manuscritas (Script) son el complemento ideal para los moños y flores, aportando romanticismo y elegancia.",
  },
  {
    q: "¿Se pueden copiar estos moños y corazones desde cualquier celular?",
    a: "Sí, todos los símbolos coquette que ofrecemos forman parte del estándar Unicode público y se copian con 1 clic para pegar en iPhone, Android o computadoras.",
  },
  {
    q: "¿Cuál es la diferencia entre el estilo Coquette y el estilo Aesthetic general?",
    a: "El estilo aesthetic abarca varias corrientes (vaporwave, grunge, soft, vintage), mientras que el estilo coquette se enfoca específicamente en la hiperfemenidad romántica, tonos rosados, encajes y moños vintage.",
  },
];

export default function SimbolosCoquettePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Símbolos Coquette, Moños y Corazones 🎀
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="cursive" highlightStyleIds={["cursive", "elegant-script", "small", "parenthesized", "circled-negative", "sans-italic"]} />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🎀 Anatomía del Diseño Coquette
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Guía de Estilo: Cómo Diseñar una Biografía Coquette de Impacto
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              La tendencia coquette celebra la inocencia, el encanto clásico y la estética romántica. Para lograr un diseño impecable en tus redes sociales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Encuadre con Moños (🎀)</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utiliza el moño 🎀 a ambos lados de tu nombre personal para crear un marco de cinta victoriana (ej: <code className="text-teal-600 dark:text-teal-400">🎀 𝓥𝓪𝓵𝓮𝓷𝓽𝓲𝓷𝓪 🎀</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Viñetas de Flores y Perlas</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Intercala flores de cerezo (🌸) y perlas (🦪) en tu lista de aficiones combinadas con letras pequeñas en formato Small Caps.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — El Origen de la Estética Coquette: Lazos y Perlas */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🎀 Historia & Origen
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              El Origen de la Estética Coquette: Lazos y Perlas
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              La estética coquette nació de la moda francesa vintage (lazos, encaje, tonos pastel) y se trasladó a redes sociales como una identidad visual hiperfemenina y romántica — los símbolos de moños (🎀) y corazones son su firma visual principal.
            </p>
          </div>
        </section>

        {/* SECTION E — Cómo Construir un Feed Completo con Estética Coquette */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🩰 Diseño de Feed & Perfil
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cómo Construir un Feed Completo con Estética Coquette
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Mantener una estética coquette constante en tu perfil de Instagram o TikTok requiere armonizar 3 elementos visuales principales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🎀</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                1. Tipografía Cursiva Elegante
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Usa fuentes manuscritas finas en el nombre de perfil y destacados para proyectar dulzura y romance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🌸</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                2. Paleta de Tonos Pastel
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Predominan los colores rosa claro, crema, blanco perla y lavanda en fotografías y portadas de historias.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🦪</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                3. Símbolos Temáticos Delicados
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Integra viñetas con moños (🎀), perlas (🦪) y zapatillas de ballet (🩰) en los subtítulos de tus publicaciones.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION F — Coquette vs Otras Estéticas Populares: Diferencias Clave */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📊 Comparativa de Estéticas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Coquette vs Otras Estéticas Populares: Diferencias Clave
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              A diferencia del estilo <em>Y2K</em> (enfocado en tonos neón y futurismo retro) o el estilo <em>Dark Academia</em> (centrado en libros antiguos y tonos café oscuros), la estética <strong>Coquette</strong> es marcadamente romántica y suave, destacando por el uso distintivo de moños rosados, perlas y encajes victorianos.
            </p>
          </div>
        </section>

        {/* SECTION G — Símbolos Coquette Más Usados y Su Significado */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🎀 Simbología & Significado
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Símbolos Coquette Más Usados y Su Significado
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Cada elemento transmite una intención visual específica: el moño rosado (<code className="text-teal-600 dark:text-teal-400 font-bold">🎀</code>) representa dulzura y unión, las zapatillas de ballet (<code className="text-teal-600 dark:text-teal-400 font-bold">🩰</code>) simbolizan gracia y disciplina artística, mientras que las perlas (<code className="text-teal-600 dark:text-teal-400 font-bold">🦪</code>) evocan elegancia vintage atemporal.
            </p>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/simbolos-aesthetic/simbolos-coquette" />


        <FaqSection title="Preguntas Frecuentes sobre Símbolos Coquette" faqs={coquetteFaqs} />
      </main>
    </div>
  );
}
