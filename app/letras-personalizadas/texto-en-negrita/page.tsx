import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Texto en Negrita - Conversor de Letras Negritas para Copiar y Pegar <b>",
  description:
    "Convierte tu texto a letras en negrita sans-serif, serif y gótica para copiar y pegar. Resalta titulares, palabras clave y mensajes en redes sociales gratis.",
};

const negritaFaqs = [
  {
    q: "¿Por qué usar letras en negrita en redes sociales?",
    a: "Las letras en negrita crean jerarquía visual. Permiten que los lectores escaneen tu publicación rápidamente y se detengan en los puntos más importantes.",
  },
];

export default function TextoEnNegritaPage() {
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
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Texto en Negrita</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Conversor de Texto en Negrita 💪
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Resalta tus palabras con negrita sans, serif y variantes decorativas. Ideal para copys promocionales, encabezados y post de LinkedIn o Facebook.
          </p>
        </header>

        <Converter highlightStyleId="bold" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>💪</span> El Poder de la Negrita en el Copywriting Digital
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Las publicaciones con términos resaltados en negrita obtienen mayor porcentaje de retención de lectura. Al convertir encabezados clave con Unicode Bold, garantizas que la atención del usuario se mantenga enfocado en tu oferta o idea principal.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Texto en Negrita" faqs={negritaFaqs} />
      </main>
    </div>
  );
}
