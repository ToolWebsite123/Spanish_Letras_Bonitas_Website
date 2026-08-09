import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Alfabeto Cursivo Completo - A-Z de Letras Manuscritas para Copiar ✒️",
  description:
    "Explora y copia el alfabeto cursivo completo de la A a la Z en mayúsculas y minúsculas. Tipografía manuscrita lista para copiar letra por letra.",
};

const alfabetoCursivoFaqs = [
  {
    q: "¿Cómo copiar letras individuales del alfabeto cursivo?",
    a: "Puedes escribir la letra deseada en nuestro conversor o presionar directamente la tarjeta correspondiente al estilo cursiva para copiar el carácter exacto.",
  },
];

export default function AlfabetoCursivoPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Alfabeto Completo</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Alfabeto Cursivo</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Alfabeto Cursivo Completo de la A a la Z ✒️
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Consulta y copia cada letra del abecedario manuscrito en mayúsculas y minúsculas. Ideal para trabajos escolares, diseño y caligrafía.
          </p>
        </header>

        <Converter highlightStyleId="cursive" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>📜</span> Abecedario Cursivo de Referencia
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-mono">
            𝒜 ℬ 𝒞 𝒟 ℰ ℱ 𝒢 ℋ ℐ 𝒥 𝒦 ℒ ℳ 𝒩 𝒪 𝒫 𝒬 ℛ 𝒮 𝒯 𝒰 𝒱 𝒲 𝒳 𝒴 𝒵
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Alfabeto Cursivo" faqs={alfabetoCursivoFaqs} />
      </main>
    </div>
  );
}
