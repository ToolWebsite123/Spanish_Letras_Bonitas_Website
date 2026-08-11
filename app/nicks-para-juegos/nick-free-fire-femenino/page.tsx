import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Nicks Free Fire Femeninos - Lindos y Chicas Gamer 🌸",
  description:
    "Copia los mejores nicks femeninos para Free Fire. Coronas de reina, moños, flores, estrellas y tipografía cursiva delicada.",
};

const femeninoFaqs = [
  {
    q: "¿Cómo crear un nick femenino lindo y respetado en Free Fire?",
    a: "Combina fuentes cursivas elegantes (Script) con coronas de reina (👑), corazones delicados (💕), flores de cerezo (🌸) o moños (🎀), utilizando el espacio transparente (U+3164) para ordenar el nombre.",
  },
  {
    q: "¿Cuáles son los símbolos más usados por las chicas gamer en Free Fire?",
    a: "Los símbolos más populares son las alas simétricas (꧁༺ ༻꧂), lunas crecientes (🌙), coronas (👑) y flores (🌸).",
  },
  {
    q: "¿Cómo poner la tag de mi clan femenino sin sobrepasar el límite de 12 bytes?",
    a: "Utiliza letras pequeñas voladas para el clan (ej: ᴳᴵᴿᴸ, ᶠᶠ) y mantén el nombre personal entre 4 y 6 letras en formato Small Caps.",
  },
  {
    q: "¿Funcionan las letras cursivas en perfiles femeninos de Android e iOS?",
    a: "¡Sí! Las fuentes cursivas Unicode son completamente universales y se muestran exactamente igual en celulares Android e iPhone.",
  },
  {
    q: "¿Cómo copiar un nick femenino completo en 1 clic?",
    a: "Explora la sección de plantillas listas abajo y toca el botón 'Copiar' para llevarlo directo al portapapeles de tu teléfono.",
  },
];

export default function NickFreeFireFemeninoPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[var(--foreground)] opacity-75 font-medium">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)] opacity-75">Nicks para Juegos</span>
          <span>/</span>
          <span className="text-teal-600 dark:text-teal-400 font-bold">FF Femenino</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>🌸</span> Nicks Femeninos & Chicas Gamer
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Nicks para Free Fire Femeninos 🌸
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground)] opacity-80 leading-relaxed max-w-4xl font-medium">
            Genera apodos hermosos, estéticos y respetados para liderar tu escuadra femenina en Free Fire. Combina <Link href="/letras-bonitas/letras-cursivas" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">fuentes cursivas delicadas</Link> con <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">símbolos coquette de moños y flores</Link>, <Link href="/nicks-para-juegos/bio-colorida-free-fire" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">firmas de colores</Link> y <Link href="/nicks-para-juegos/nick-free-fire" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">nicks de Free Fire pro</Link>.
          </p>
        </header>

        <Converter highlightStyleId="cursive" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🌸 Diseños Femeninos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Ideas de Estilos Femeninos para Escuadras
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              3 tendencias de nombres femeninos más populares:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-2xl">👑</span>
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">1. Estilo Reina (Queen)</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Coronas y alas delicadas (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">꧁♡𝓟𝓻𝓲𝓷𝓬𝓮𝓼𝓼♡꧂</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-2xl">🌸</span>
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">2. Estilo Soft & Aesthetic</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Flores y lunas suaves (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">🌸 𝒬𝓊𝑒𝑒𝓃 🌸</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-2xl">⚡</span>
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">3. Estilo Rusher Femenina</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Letras góticas con destellos (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">⚡ ᴬⁿᵍᵉˡ 𝔽𝔉 ⚡</code>).
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/nicks-para-juegos/nick-free-fire" />


        <FaqSection title="Preguntas Frecuentes sobre FF Femenino" faqs={femeninoFaqs} />
      </main>
    </div>
  );
}
