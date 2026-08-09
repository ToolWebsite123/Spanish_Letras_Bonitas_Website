import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Nicks Masculinos para Free Fire - Nombres Imponentes y Agresivos ⚔️",
  description:
    "Genera nicks masculinos agresivos, competitivos y rudos para Free Fire. Combina fuentes góticas, espadas, coronas y alas para copiar y pegar.",
};

const masculinoFaqs = [
  {
    q: "¿Qué símbolos representan mejor un estilo competitivo masculino en Free Fire?",
    a: "Las espadas (⚔️), las coronas de rey (👑), el fuego (🔥), las dagas (🗡️) y los corchetes oscuros son los favoritos para capitanes de clan y francotiradores.",
  },
];

export default function NickFreeFireMasculinoPage() {
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
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Nicks Masculinos Free Fire</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Nicks Masculinos para Free Fire ⚔️
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Descubre nombres de batalla competitivos y rudos. Crea apodos con fuentes góticas y marcos de armamento para dominar las salas de clasificatoria.
          </p>
        </header>

        <Converter highlightStyleId="gothic" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>🛡️</span> Estilos de Nombres para Líderes de Clan
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Un apodo imponente le da identidad a tu perfil. Utiliza fuentes de trazo grueso en las iniciales y mantén el nombre conciso para encajar en el límite de 12 caracteres.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Nicks Masculinos" faqs={masculinoFaqs} />
      </main>
    </div>
  );
}
