import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Símbolos Coquette - Moños, Corazones y Lazos para Copiar y Pegar 🎀",
  description:
    "Copia símbolos de la estética coquette: moños 🎀, corazones ♡, lazos, flores 🌸 y mariposas para decorar tu biografía y mensajes.",
};

const coquetteFaqs = [
  {
    q: "¿Qué simboliza la tendencia Coquette?",
    a: "La estética Coquette celebra la feminidad romántica, el encaje, los moños y tonos pastel. Los símbolos Unicode de lazos y flores evocan esa dulzura nostálgica.",
  },
];

export default function SimbolosCoquettePage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Símbolos Aesthetic</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Símbolos Coquette</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Símbolos Coquette para Copiar 🎀
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Decora tu perfil con lazos, moños, flores y corazones finos. Copia y pega libremente en tu Bio y mensajes.
          </p>
        </header>

        <Converter highlightStyleId="cursive" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>🎀</span> Elementos Clave de la Tendencia Coquette
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Combina los moños (🎀) con letras cursivas finas para dar un aspecto delicado a tus frases.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Símbolos Coquette" faqs={coquetteFaqs} />
      </main>
    </div>
  );
}
