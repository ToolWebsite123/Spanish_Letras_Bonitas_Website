import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Cómo Cambiar de Nick en Free Fire - Guía Paso a Paso 🎫",
  description:
    "Aprende cómo cambiar tu nombre en Free Fire paso a paso usando la tarjeta de cambio de apodo o diamantes sin perder caracteres especiales.",
};

const cambiarFaqs = [
  {
    q: "¿Cuántos diamantes cuesta cambiar de nick en Free Fire?",
    a: "El costo regular es de 800 diamantes, aunque puedes obtener la 'Tarjeta de Cambio de Nombre' por 39 diamantes + 200 tokens de clan en la tienda de canje.",
  },
];

export default function CambiarNickFreeFirePage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Nicks para Juegos</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Cambiar Nick Free Fire</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Cómo Cambiar tu Nick en Free Fire 🎫
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Sigue nuestra guía paso a paso para modificar tu nombre de usuario en el juego sin cometer errores ni perder tus caracteres especiales.
          </p>
        </header>

        <Converter highlightStyleId="gothic" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>📝</span> Pasos para Cambiar de Nombre en Free Fire
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Copia la combinación de texto y símbolos generada en nuestro conversor.</li>
            <li>Abre Free Fire y toca tu foto de perfil en la esquina superior izquierda.</li>
            <li>Presiona el ícono del lápiz amarillo de edición.</li>
            <li>Pega tu nuevo texto en el campo 'Apodo Nuevo' y confirma con tu Tarjeta o Diamantes.</li>
          </ol>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Cambiar Nick" faqs={cambiarFaqs} />
      </main>
    </div>
  );
}
