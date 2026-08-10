import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Nicks Free Fire - Generador de Apodos y Símbolos 🎮",
  description:
    "Copia los mejores nicks pro para Free Fire. Genera apodos masculinos, femeninos, espacio transparente (U+3164) y letras góticas en 12 bytes.",
};

const freeFireFaqs = [
  {
    q: "¿Cómo poner espacio invisible o transparente en el nick de Free Fire?",
    a: "El teclado normal no permite poner espacios en Free Fire. Debes copiar el carácter Unicode transparente (U+3164) desde nuestra sección de herramientas y pegarlo directamente en el juego para separar la tag de tu clan de tu nombre personal.",
  },
  {
    q: "¿Cuál es el límite máximo de memoria al crear un nick en Free Fire?",
    a: "Garena Free Fire establece un límite estricto de 12 bytes en memoria UTF-8. Los caracteres normales ocupan 1 byte, mientras que los símbolos de armas, alas y coronas ocupan entre 3 y 4 bytes.",
  },
  {
    q: "¿Por qué el juego dice 'Nombre demasiado largo' o 'Inválido'?",
    a: "Ocurre cuando el nick supera los 12 bytes de memoria. Nuestro conversor dinámico en vivo te indica exactamente cuántos bytes ocupa tu nombre antes de que lo copies.",
  },
  {
    q: "¿Se pueden crear nicks femeninos con moños y coronas?",
    a: "¡Sí! Explora nuestra sección de nicks femeninos con fuentes cursivas, corazones suaves y coronas de reina.",
  },
  {
    q: "¿Es seguro usar estos apodos sin riesgo de baneos?",
    a: "100% seguro. Todos los símbolos provienen de la tabla estándar Unicode aceptada oficialmente por los servidores de Garena.",
  },
];

export default function NickFreeFirePage() {
  return (
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Nicks para Juegos</span>
          <span>/</span>
          <span className="text-teal-400 font-bold">Nick Free Fire</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>🎮</span> Generador Pro para Garena Free Fire
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Nicks para Free Fire Pro 🎮
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Genera apodos pro con espadas, coronas, alas de ángel, espacio invisible y letras góticas. Explora nuestras guías de <Link href="/nicks-para-juegos/nick-free-fire-masculino" className="text-teal-400 underline font-bold hover:text-teal-300">nicks masculinos</Link>, <Link href="/nicks-para-juegos/nick-free-fire-femenino" className="text-teal-400 underline font-bold hover:text-teal-300">nicks femeninos</Link> y el tutorial paso a paso para <Link href="/nicks-para-juegos/cambiar-nick-free-fire" className="text-teal-400 underline font-bold hover:text-teal-300">cambiar tu nick de Free Fire</Link>.
          </p>
        </header>

        {/* Converter Tool */}
        <Converter highlightStyleId="gothic" />

        {/* ARTÍCULO DEEP 1 */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              🎮 Anatomía de un Nick Pro
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Guía de Estructura de Clan y Espacio Transparente
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Para armar un nick imponente en eSports, combina <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-teal-400 underline font-bold hover:text-teal-300">símbolos para nick de armas</Link> con <Link href="/nicks-para-juegos/bio-colorida-free-fire" className="text-teal-400 underline font-bold hover:text-teal-300">códigos de colores para tu firma de Free Fire</Link> y <Link href="/nicks-para-juegos/nombres-para-roblox" className="text-teal-400 underline font-bold hover:text-teal-300">apodos de Roblox</Link>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">1. Tag de Clan Volada</span>
              <p className="text-slate-300 leading-relaxed">
                Utiliza letras pequeñas voladas (ej: ᵀᴳ) para ahorrar bytes y dejar espacio al nombre central.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">2. Espacio Invisible U+3164</span>
              <p className="text-slate-300 leading-relaxed">
                Intercala el espacio transparente para separar limpiamente tu sigla del resto del apodo.
              </p>
            </div>
          </div>
        </section>

        {/* Related Categories internal linking widget */}
        <RelatedCategoriesWidget currentPath="/nicks-para-juegos/nick-free-fire" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre Nicks Free Fire" faqs={freeFireFaqs} />
      </main>
    </div>
  );
}
