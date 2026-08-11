import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Nombres para Roblox - Nicks Estéticos y Creativos 🤖",
  description:
    "Genera nombres únicos y estéticos para Roblox. Combina símbolos de caras feliz, letras diminutas y estilos chic para destacar en tu avatar.",
};

const robloxFaqs = [
  {
    q: "¿Cuál es la diferencia entre Username y Display Name en Roblox?",
    a: "El Username es tu identificador único de cuenta (@usuario) que requiere letras normales. El Display Name (Nombre de Pantalla) es el apodo público que ven otros jugadores dentro de los mundos y acepta tipografías estéticas y caracteres Unicode.",
  },
  {
    q: "¿Cuántas veces se puede cambiar el Display Name en Roblox gratis?",
    a: "Roblox permite cambiar tu Display Name de forma totalmente gratuita 1 vez cada 7 días. No necesitas gastar Robux para cambiar tu nombre de pantalla.",
  },
  {
    q: "¿Cuál es el límite de caracteres para los nombres en Roblox?",
    a: "Roblox establece un límite de 3 a 20 caracteres tanto para el Nombre de Usuario como para el Nombre de Pantalla.",
  },
  {
    q: "¿Se pueden poner caracteres estéticos o kawaii en Roblox?",
    a: "¡Sí! El Nombre de Pantalla admite fuentes de espacio amplio (Fullwidth), caracteres pequeños (Small Caps), moños (🎀), destellos (✨) y caritas adorables.",
  },
  {
    q: "¿Qué hacer si Roblox censura mi nombre con signos ###?",
    a: "Si el filtro de Roblox muestra tres numerales (###), significa que el algoritmo automático de moderación detectó palabras restringidas. Elige un apodo con palabras neutras o letras estilizadas del conversor.",
  },
];

export default function NombresParaRobloxPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[var(--foreground)] opacity-75 font-medium">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)] opacity-75">Nicks para Juegos</span>
          <span>/</span>
          <span className="text-teal-600 dark:text-teal-400 font-bold">Nombres para Roblox</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>🤖</span> Personalización para Roblox Display Names
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Nombres y Nicks para Roblox 🤖
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground)] opacity-80 leading-relaxed max-w-4xl font-medium">
            Crea el nombre de pantalla perfecto para tu avatar de Roblox. Utiliza <Link href="/letras-bonitas/letras-aesthetic" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">letras aesthetic</Link>, <Link href="/letras-bonitas/letras-japonesas" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">fuentes japonesas otaku</Link>, <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">símbolos para nick gamer</Link> y <Link href="/nicks-para-juegos/nick-free-fire" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">apodos de Free Fire</Link>.
          </p>
        </header>

        <Converter highlightStyleId="small" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🤖 Guía de Personalización
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cómo Cambiar tu Display Name en Roblox en 4 Pasos
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Sigue estos sencillos pasos desde la aplicación de Roblox en tu celular o PC:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Abre Configuración</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Toca los 3 puntos (...) en el menú principal de Roblox y selecciona <strong>Configuración &gt; Información de la cuenta</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Edita Display Name</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Toca el icono de lápiz junto a <strong>Nombre de pantalla</strong>, pega tu diseño de nuestro conversor y pulsa Guardar.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/simbolos-aesthetic/simbolos-para-nick" />


        <FaqSection title="Preguntas Frecuentes sobre Nombres para Roblox" faqs={robloxFaqs} />
      </main>
    </div>
  );
}
