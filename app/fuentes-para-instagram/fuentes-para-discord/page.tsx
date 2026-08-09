import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Fuentes para Discord - Conversor de Apodos de Servidor y Canales 👾",
  description:
    "Decora nicks de servidor en Discord, nombres de canales y roles con letras estilizadas, monoespaciadas y marcos especiales para copiar y pegar.",
};

const discordFaqs = [
  {
    q: "¿Cuál es el límite de caracteres para apodos en servidores de Discord?",
    a: "Discord permite apodos de servidor de hasta 32 caracteres. Las tipografías monoespaciadas y pequeñas caben sin problemas en este espacio.",
  },
  {
    q: "¿Se pueden usar letras estilizadas en los nombres de canales de voz y texto?",
    a: "¡Sí! Muchos administradores de comunidad usan letras pequeñas o monoespaciadas para organizar las categorías del servidor (ej: ─── 💬 ᴄʜᴀᴛ-ɢᴇɴᴇʀᴀʟ ───).",
  },
];

export default function FuentesParaDiscordPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Fuentes para Redes</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Fuentes para Discord</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Fuentes y Estilos de Letras para Discord 👾
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Personaliza tus apodos de servidor, la sección 'Sobre mí' de tu perfil y la jerarquía de canales en tu comunidad de Discord.
          </p>
        </header>

        <Converter highlightStyleId="monospace" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>👾</span> Consejos para Diseñar Servidores de Discord Impactantes
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Los servidores mejor organizados utilizan fuentes monoespaciadas y símbolos sutiles para crear separadores estéticos entre categorías. Esto ayuda a que los nuevos miembros naveguen más fácilmente.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Fuentes para Discord" faqs={discordFaqs} />
      </main>
    </div>
  );
}
