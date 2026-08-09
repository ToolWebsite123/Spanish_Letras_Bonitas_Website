import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Texto Itálico - Generador de Letras Inclinadas e Inclinación Elegante <i>",
  description:
    "Convierte tu texto en letras itálicas e inclinadas para copiar y pegar. Aporta sofisticación a tus citas literarias y pies de fotos gratis.",
};

const italicoFaqs = [
  {
    q: "¿Cuándo es apropiado usar texto itálico en descripciones?",
    a: "La itálica o cursiva inclinada se utiliza tradicionalmente para citas textuales, nombres de obras, pensamientos reflexivos y palabras en idiomas extranjeros.",
  },
];

export default function TextoItalicoPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Letras Personalizadas</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Texto Itálico</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Conversor de Texto Itálico e Inclinado ✒️
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Añade dinamismo y distinción a tus frases con caracteres itálicos inclinados de precisión.
          </p>
        </header>

        <Converter highlightStyleId="italic" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>📖</span> Elegancia y Énfasis con Tipografía Itálica
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Las letras inclinadas hacia la derecha transmiten fluidez y movimiento. Son perfectas para subtítulos en Instagram y versos poéticos.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Texto Itálico" faqs={italicoFaqs} />
      </main>
    </div>
  );
}
