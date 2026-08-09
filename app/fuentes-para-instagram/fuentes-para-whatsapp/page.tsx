import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Fuentes para WhatsApp - Generador de Estilos para Estado e Info 💬",
  description:
    "Personaliza tus mensajes, estados y la sección Info de WhatsApp con letras bonitas, cursivas y fuentes decoradas para copiar y pegar gratis.",
};

const waFaqs = [
  {
    q: "¿Qué ventaja tienen estos caracteres sobre la negrita nativa de WhatsApp (*texto*)?",
    a: "La sintaxis interna de WhatsApp (*negrita*, _cursiva_) solo cambia el peso, mientras que nuestro conversor transforma las letras en fuentes completamente distintas (como cursiva elegante, burbujas o doble rayado) que resaltan mucho más.",
  },
  {
    q: "¿Cuál es el límite de caracteres en la sección 'Info' de WhatsApp?",
    a: "El estado de texto o sección 'Info' de WhatsApp admite 139 caracteres. Con nuestro conversor verás el estado en tiempo real.",
  },
];

export default function FuentesParaWhatsappPage() {
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
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Fuentes para WhatsApp</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Fuentes y Letras Bonitas para WhatsApp 💬
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Personaliza la sección Info de tu perfil, tus estados de 24 horas y tus chats grupales con formatos tipográficos que sorprenderán a tus contactos.
          </p>
        </header>

        <Converter highlightStyleId="cursive" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>💬</span> Cómo Personalizar la Sección Info de WhatsApp
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Tu información de contacto es lo primero que ven las personas al abrir tu chat. Usar una combinación de frase corta en cursiva acompañada de un decorador minimalista le otorga un aspecto limpio y profesional.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Fuentes para WhatsApp" faqs={waFaqs} />
      </main>
    </div>
  );
}
