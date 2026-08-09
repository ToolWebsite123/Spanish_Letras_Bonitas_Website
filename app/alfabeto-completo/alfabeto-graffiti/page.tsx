import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Alfabeto Graffiti Completo - A-Z de Letras Callejeras para Copiar 🎨",
  description:
    "Consulta y copia el alfabeto graffiti completo de la A a la Z en mayúsculas y minúsculas. Abecedario de letras góticas y urbanas listo para copiar.",
};

const alfabetoGraffitiFaqs = [
  {
    q: "¿Cómo usar caracteres del alfabeto graffiti en iniciales de títulos?",
    a: "Puedes copiar la letra inicial en bloque de este alfabeto y combinarla con minúsculas estándar para generar titulares potentes.",
  },
];

export default function AlfabetoGraffitiPage() {
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
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Alfabeto Graffiti</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Alfabeto Graffiti Completo de la A a la Z 🎨
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Abecedario urbano y gótico de trazo grueso. Copia letras sueltas para logos, firmas y diseños de camisetas.
          </p>
        </header>

        <Converter highlightStyleId="gothic" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>🎨</span> Abecedario Urbano de Referencia
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-mono">
            𝔄 𝔅 ℭ 𝔇 𝔈 𝔉 𝔁 ℌ ℑ 𝔍 𝔏 𝔍 𝔎 𝔏 𝔍 𝔏 𝔐 𝔑 𝔞 𝔟 𝔠 𝔡 𝔢 𝔣 𝔤 𝔨 𝔦 𝔧 𝔨 𝔩 𝔪 𝔫
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Alfabeto Graffiti" faqs={alfabetoGraffitiFaqs} />
      </main>
    </div>
  );
}
