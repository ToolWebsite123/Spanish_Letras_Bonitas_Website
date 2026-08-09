import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Letras para Tatuajes - Conversor de Chicano, Gótico y Lettering Tattoo 🗡️",
  description:
    "Prueba y convierte frases para tatuajes en letras góticas, chicano lettering y caligrafía de piel para copiar y pegar. Encuentra la tipografía perfecta para tu próximo tattoo.",
};

const tatuajesFaqs = [
  {
    q: "¿Sirven estas letras para llevarle un boceto a mi tatuador?",
    a: "¡Sí! Puedes generar la palabra o frase que te quieras tatuar en el conversor, tomarle captura de pantalla o copiar el texto para mostráselo a tu artista como referencia inicial de diseño.",
  },
  {
    q: "¿Qué estilos de letras son los más populares en tatuajes?",
    a: "El lettering estilo chicano, las fuentes góticas de trazo grueso (Old English / Fraktur) y las cursivas finas de trazo continuo son los estilos más buscados tanto en antebrazo como en costillas y espalda.",
  },
];

export default function LetrasTatuajesPage() {
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
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Letras para Tatuajes</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Letras para Tatuajes y Lettering Tattoo 🗡️
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Visualiza y diseña la frase o nombre de tu próximo tatuaje. Explora fuentes chicanas, serif itálicas oscuras y caligrafía fina para llevar a la piel.
          </p>
        </header>

        <Converter highlightStyleId="serif-bold-italic" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>🗡️</span> El Arte del Lettering Tattoo
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            El lettering en el mundo del tatuaje requiere legibilidad y armonía anatómica. Las tipografías de trazo itálico en negrita y las letras góticas tradicionales destacan por envejecer de manera limpia sobre la piel sin perder definición.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Letras para Tatuajes" faqs={tatuajesFaqs} />
      </main>
    </div>
  );
}
