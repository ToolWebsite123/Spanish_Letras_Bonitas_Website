import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Letras para Firma - Generador de Firmas Digitales y Manuscritas ✒️",
  description:
    "Crea letras estilo firma personal, rúbricas elegantes y cierres de correo para copiar y pegar gratis. Dale un toque profesional y distinguido a tus mensajes.",
};

const firmaFaqs = [
  {
    q: "¿Puedo usar estas letras para firmar correos electrónicos?",
    a: "¡Sí! Puedes usar la conversión en la línea final o despido de tus correos (ej: 𝓐𝓉ℯ𝓃𝓉𝒶𝓂ℯ𝓃𝓉ℯ, 𝓜𝒶𝓇𝒾𝒶) para dar un toque distinguido y personal a tu correspondencia.",
  },
];

export default function LetrasFirmaPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Letras Bonitas</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Letras para Firma</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Letras para Firma Personal y Rúbrica ✒️
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Genera trazos elegantes de firma manuscrita para cerrar mensajes, firmar correos o agregar distinción al pie de tus publicaciones digitales.
          </p>
        </header>

        <Converter highlightStyleId="elegant-script" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>✒️</span> La Firma como Sello de Identidad Digital
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Una firma manuscrita transmite compromiso y cercanía. En el ámbito digital, las tipografías de doble trazado y cursiva fluida permiten añadir esa rúbrica personal sin importar la plataforma.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Letras para Firma" faqs={firmaFaqs} />
      </main>
    </div>
  );
}
