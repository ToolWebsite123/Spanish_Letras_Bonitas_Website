import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Nombres Personalizados - Creador de Estilos para Nombres y Marcas 🏷️",
  description:
    "Diseña nombres personalizados con letras bonitas, marcos decorativos y símbolos para copiar y pegar en perfiles y tarjetas.",
};

const nombresFaqs = [
  {
    q: "¿Cómo elegir la mejor combinación para mi nombre personal?",
    a: "Usa un estilo limpio (como Cursiva Elegante o Small Caps) para las palabras principales y añade un solo marco de adorno (como Estrellas o Corazones) para mantener equilibrio visual.",
  },
];

export default function NombresPersonalizadosPage() {
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
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Nombres Personalizados</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Diseñador de Nombres Personalizados 🏷️
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Dale identidad única a tu nombre o marca. Genera decenas de estilos en segundos con decoraciones exclusivas.
          </p>
        </header>

        <Converter highlightStyleId="cursive" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>🏷️</span> Identidad Visual para Marcas Personales
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Un nombre estilizado permite que tus seguidores reconozcan al instante la personalidad de tu contenido.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Nombres Personalizados" faqs={nombresFaqs} />
      </main>
    </div>
  );
}
