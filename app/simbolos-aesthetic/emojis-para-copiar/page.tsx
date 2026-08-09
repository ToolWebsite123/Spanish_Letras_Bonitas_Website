import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Emojis Aesthetic para Copiar - Colección de Emojis Lindos y Soft 🌸",
  description:
    "Copia emojis aesthetic, de flores, estrellas, corazones y destellos con 1 solo clic. Ideal para biografías, comentarios y mensajes especiales.",
};

const emojiFaqs = [
  {
    q: "¿Por qué algunos emojis se ven de colores distintos en Android e iPhone?",
    a: "Cada fabricante (Apple, Google, Samsung) diseña su propio paquete de ilustraciones para los códigos Unicode de emoji. Aunque el glifo es el mismo, la ilustración varía según el sistema operativo.",
  },
];

export default function EmojisParaCopiarPage() {
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
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Emojis para Copiar</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Emojis Aesthetic para Copiar y Pegar 🌸
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Explora una selección cuidada de emojis románticos, vintage, soft y aesthetic para acompañar tus fuentes bonitas.
          </p>
        </header>

        <Converter highlightStyleId="small" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>✨</span> Expresión Visual con Emojis Seleccionados
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Los emojis adecuados transforman una frase común en una emoción. Selecciona los íconos que mejor combinen con la temática de tu perfil.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Emojis" faqs={emojiFaqs} />
      </main>
    </div>
  );
}
