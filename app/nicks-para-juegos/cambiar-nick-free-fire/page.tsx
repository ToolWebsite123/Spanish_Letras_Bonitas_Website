import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Cambiar Nick Free Fire - Guía Paso a Paso ⚙️",
  description:
    "Aprende cómo cambiar tu nombre en Free Fire paso a paso. Solución a errores de espacio transparente, límite de 12 bytes y tarjetas de cambio.",
};

const cambiarFaqs = [
  {
    q: "¿Cómo cambiar el nombre en Free Fire desde los ajustes del juego?",
    a: "Abre Free Fire > toca la foto de tu perfil en la esquina superior izquierda > presiona el icono de lápiz amarillo junto a tu nick actual > pega tu nuevo apodo estilizado y confirma con 800 diamantes o 1 Tarjeta de Cambio de Nombre.",
  },
  {
    q: "¿Cómo conseguir la Tarjeta de Cambio de Nombre gratis?",
    a: "Puedes obtener la tarjeta de cambio de apodo participando en eventos de temporada de Garena, canjeando puntos de clan en la tienda de clan o intercambiando tokens de pase de nivel.",
  },
  {
    q: "¿Por qué el juego dice 'Nombre demasiado largo' o 'Inválido'?",
    a: "Ocurre cuando el apodo sobrepasa los 12 bytes reales en memoria UTF-8. Utiliza nuestro contador dinámico en vivo arriba para asegurarte de que tu diseño ocupe 12 bytes o menos.",
  },
  {
    q: "¿Cómo agregar el espacio transparente al cambiar de apodo?",
    a: "Copia el carácter transparente Unicode U+3164 desde nuestra herramienta y pégalo directamente entre el tag de tu clan y tu nombre personal.",
  },
  {
    q: "¿Se pierde la lista de amigos o el progreso al cambiar de apodo?",
    a: "No. Tu ID numérico único de jugador (UID), lista de amigos, rango de clasificatoria y skins permanecen exactamente intactos.",
  },
];

export default function CambiarNickFreeFirePage() {
  return (
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Nicks para Juegos</span>
          <span>/</span>
          <span className="text-teal-400 font-bold">Cambiar Nick FF</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>⚙️</span> Guía Técnica de Configuración Oficial
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Guía Definitiva para Cambiar tu Nick en Free Fire ⚙️
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Aprende a modificar tu apodo de jugador sin perder diamantes, resolver errores de límites de bytes y colocar el espacio transparente oficial de Garena. Explora <Link href="/nicks-para-juegos/nick-free-fire" className="text-teal-400 underline font-bold hover:text-teal-300">nicks pro para Free Fire</Link>, <Link href="/nicks-para-juegos/bio-colorida-free-fire" className="text-teal-400 underline font-bold hover:text-teal-300">firmas de colores</Link> y <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-teal-400 underline font-bold hover:text-teal-300">símbolos para nick</Link>.
          </p>
        </header>

        <Converter highlightStyleId="gothic" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              ⚙️ Paso a Paso
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Tutorial Completo para Cambiar Apodo en Android e iOS
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Sigue estas 4 instrucciones para garantizar que tu apodo quede configurado a la primera:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">1. Copia tu Diseño</span>
              <p className="text-slate-300 leading-relaxed">
                Diseña tu apodo en nuestro conversor y verifica que el contador indique <strong>✓ OK (12 bytes max)</strong>. Toca para copiar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">2. Confirma en el Juego</span>
              <p className="text-slate-300 leading-relaxed">
                Ingresa al perfil de Free Fire, presiona el lápiz de edición, pega el texto y confirma con 800 diamantes o tu tarjeta de cambio.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/nicks-para-juegos/nick-free-fire" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre Cambiar Nick FF" faqs={cambiarFaqs} />
      </main>
    </div>
  );
}
