import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Bio Colorida para Free Fire - Códigos HEX de Colores para Firma 🎨",
  description:
    "Aprende a usar códigos HEX de colores ([FF0000], [00FF00], [0000FF]) para poner tu firma y biografía de Free Fire en letras de colores deslumbrantes.",
};

const bioColoridaFaqs = [
  {
    q: "¿Cómo funcionan los códigos de color en la firma de Free Fire?",
    a: "Debes colocar el código HEX entre corchetes rectos antes de tu texto. Por ejemplo: [FF0000]Texto Rojo o [00FF00]Texto Verde. El juego convertirá ese código en color visible en tu perfil.",
  },
];

export default function BioColoridaFreeFirePage() {
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
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Bio Colorida Free Fire</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Códigos de Bio Colorida para Free Fire 🎨
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Personaliza la firma de tu perfil con letras de colores vivos usando códigos HEX estándar compatibles con la plataforma de Garena.
          </p>
        </header>

        <Converter highlightStyleId="bold" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>🎨</span> Lista de Códigos de Colores Populares
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <span className="text-red-600 font-bold">[FF0000] Rojo</span>
            </div>
            <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <span className="text-green-600 font-bold">[00FF00] Verde</span>
            </div>
            <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <span className="text-blue-600 font-bold">[0000FF] Azul</span>
            </div>
            <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <span className="text-yellow-500 font-bold">[FFFF00] Amarillo</span>
            </div>
          </div>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Bio Colorida" faqs={bioColoridaFaqs} />
      </main>
    </div>
  );
}
