import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Caligrafía Artística - Conversor de Letras de Pluma y Tinta ✒️",
  description:
    "Convierte tu texto en caligrafía artística, trazos clásicos de plumilla y lettering artesanal para copiar y pegar. Ideal para invitaciones y diplomas.",
};

const caligrafiaFaqs = [
  {
    q: "¿Qué diferencia hay entre caligrafía y tipografía común?",
    a: "La caligrafía es el arte de escribir a mano con trazos armoniosos de grosor variable. Nuestro conversor imita esa presión de plumilla mediante caracteres Unicode de trazo caligráfico de precisión.",
  },
];

export default function CaligrafiaPage() {
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
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Caligrafía</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Caligrafía Artística y Trazos de Pluma ✒️
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Convierte cualquier texto en trazos caligráficos dignos de manuscritos medievales, tarjetas de gala e invitaciones distinguidas.
          </p>
        </header>

        <Converter highlightStyleId="cursive" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>📜</span> Caligrafía Clásica y Spenceriana en la Era Digital
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            La belleza de la caligrafía reside en el contraste entre líneas finas de ascenso y trazos gruesos de descenso. Al convertir tus palabras en caracteres Unicode de alta precisión, garantizas que ese encanto caligráfico se preserve en cualquier dispositivo.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Caligrafía Artística" faqs={caligrafiaFaqs} />
      </main>
    </div>
  );
}
