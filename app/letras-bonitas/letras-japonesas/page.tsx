import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Letras Japonesas - Conversor de Estilo Otaku y Símbolos Asiáticos ⛩️",
  description:
    "Convierte tu texto en letras japonesas, caracteres Kanji/Katakana falsos y símbolos asiáticos para copiar y pegar. Decora perfiles de anime, TikTok y Discord.",
};

const japonesasFaqs = [
  {
    q: "¿Son estos caracteres japoneses reales o imitaciones tipográficas?",
    a: "Son caracteres Unicode que imitan visualmente la forma de los alfabetos Katakana, Hiragana y Kanji japoneses, pero representan letras de nuestro alfabeto para que sigan siendo entendibles en tus nombres y bios.",
  },
  {
    q: "¿Por qué el estilo de letras japonesas es popular entre la comunidad gamer y otaku?",
    a: "Porque aporta un aire místico, ninja y futurista inspirado en la cultura anime, los videojuegos de combate y el universo cyberpunk.",
  },
];

export default function LetrasJaponesasPage() {
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
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Letras Japonesas</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Letras Japonesas y Símbolos Asiáticos ⛩️
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Personaliza tus palabras con la estética del país del sol naciente. Convierte tu apodo o biografía en tipografías inspiradas en el alfabeto nipón, ideal para la comunidad otaku, anime y gaming.
          </p>
        </header>

        <Converter highlightStyleId="fullwidth" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>🌸</span> La Estética Nipona en la Cultura Digital
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Los caracteres de ancho completo (Fullwidth) y los glifos de apariencia asiática permiten que cada letra ocupe un bloque simétrico perfecto. Esto genera un efecto visual limpio y equilibrado muy utilizado en firmas de Discord y perfiles de TikTok de temáticas anime.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Letras Japonesas" faqs={japonesasFaqs} />
      </main>
    </div>
  );
}
