import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Nicks Femeninos para Free Fire - Estilos Delicados y Letales 🌸",
  description:
    "Genera nicks femeninos aesthetic, lindos e intimidantes para Free Fire. Combina fuentes cursivas, flores, estrellas y mariposas para copiar y pegar.",
};

const femeninoFaqs = [
  {
    q: "¿Cómo lograr un nick femenino aesthetic y letal al mismo tiempo?",
    a: "Mezcla palabras dulces o refinadas con símbolos de precisión (como miras, coronas de reina 👑, estrellas 💫 o corazones oscuros ♡). Esta combinación proyecta estilo y nivel de juego alto.",
  },
];

export default function NickFreeFireFemeninoPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Nicks para Juegos</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Nicks Femeninos Free Fire</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Nicks Femeninos para Free Fire 🌸
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Crea apodos elegantes, aesthetic y poderosos. Combina tipografías cursivas, coronas de reina y flores para destacar en la escuadra.
          </p>
        </header>

        <Converter highlightStyleId="cursive" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>✨</span> Tendencias de Nombres para Jugadoras
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Las fuentes en minúsculas pequeñas (Small Caps) con mariposas (🦋) o lazos (🎀) están en tendencia dentro del circuito competitivo femenino por su estética limpia.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Nicks Femeninos" faqs={femeninoFaqs} />
      </main>
    </div>
  );
}
