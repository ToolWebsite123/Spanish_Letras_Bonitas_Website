import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Números en Letras - Convierte Números a Texto 🔢",
  description:
    "Herramienta gratis para convertir números en letras y formatos estéticos para copiar y pegar.",
  alternates: {
    canonical: "/letras-personalizadas/numeros-en-letras",
  },
};

const faqs = [
  {
    q: "¿Cómo convertir números a letras?",
    a: "Escribe cualquier número en la casilla del conversor y selecciona la tipografía o estilo deseado para copiar al instante.",
  },
];

export default function NumerosEnLetrasPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />
      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Números en Letras: Convierte Números a Texto
          </h1>
        </header>

        <Converter showCategoryNav={true}/>

        <FaqSection title="Preguntas Frecuentes" faqs={faqs} />
      </main>
    </div>
  );
}
