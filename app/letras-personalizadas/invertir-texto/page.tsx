import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Invertir Texto - Conversor de Letras de Cabeza (Upside Down) 🙃",
  description:
    "Gira y convierte tu texto al revés (de cabeza) para copiar y pegar. Crea acertijos, estados divertidos y mensajes al revés en WhatsApp.",
};

const invertirFaqs = [
  {
    q: "¿Cómo logra la herramienta poner las letras de cabeza?",
    a: "Utiliza caracteres Unicode de rotación 180° e invierte el orden de la cadena (ej: 'Hola' -> 'ɐloH') para que el mensaje completo se lea al revés.",
  },
];

export default function InvertirTextoPage() {
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
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Invertir Texto</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Invertir Texto al Revés (Upside Down) 🙃
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Sorprende a tus amigos con mensajes volteados de cabeza. Ideal para adivinanzas, bromas y claves de texto.
          </p>
        </header>

        <Converter highlightStyleId="upside-down" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>🙃</span> La Magia del Texto Invertido
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Al rotar las vocales y consonantes, creas un efecto visual lúdico que obliga al lector a girar la cabeza o el teléfono para descifrar tu publicación.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Invertir Texto" faqs={invertirFaqs} />
      </main>
    </div>
  );
}
