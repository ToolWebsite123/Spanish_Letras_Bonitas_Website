import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Letras Góticas - Conversor de Fuentes Medievales 🏰",
  description:
    "Convierte texto en letras góticas, fuentes estilo Fraktur y caligrafía medieval para copiar y pegar.",
  alternates: {
    canonical: "/letras-bonitas/letras-goticas",
  },
};

const faqs = [
  {
    q: "¿Qué son las letras góticas Unicode?",
    a: "Son alfabetos derivados del estilo caligráfico medieval (Fraktur y Blackletter) disponibles en el estándar Unicode.",
  },
];

export default function LetrasGoticasPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />
      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Letras Góticas: Conversor de Fuentes Medievales
          </h1>
        </header>

        <Converter showCategoryNav={true}/>

        <FaqSection title="Preguntas Frecuentes" faqs={faqs} />
      </main>
    </div>
  );
}
