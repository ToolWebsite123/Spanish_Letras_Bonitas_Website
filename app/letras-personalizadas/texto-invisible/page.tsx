import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Texto Invisible - Espacio en Blanco para Copiar 👻",
  description:
    "Copia el carácter transparente de espacio invisible (U+3164) para nicks de Free Fire, WhatsApp e Instagram.",
  alternates: {
    canonical: "/letras-personalizadas/texto-invisible",
  },
};

const faqs = [
  {
    q: "¿Cómo copiar el texto invisible?",
    a: "Presiona el botón de copiar para obtener el espacio en blanco transparente Unicode listo para usar en tus apodos.",
  },
];

export default function TextoInvisiblePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />
      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Texto Invisible: Espacio en Blanco para Copiar
          </h1>
        </header>

        <Converter showCategoryNav={true}/>

        <FaqSection title="Preguntas Frecuentes" faqs={faqs} />
      </main>
    </div>
  );
}
