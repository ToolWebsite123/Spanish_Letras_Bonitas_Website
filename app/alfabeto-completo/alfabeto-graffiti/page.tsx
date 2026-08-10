import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Alfabeto Graffiti - Abecedario Urbano A-Z 🎨",
  description:
    "Muestrario completo del abecedario de letras graffiti en bloques negros, cuadrados claros y círculos oscuros de la A a la Z para copiar y pegar.",
};

const alfabetoGraffitiFaqs = [
  {
    q: "¿El alfabeto de letras graffiti incluye todas las letras de la A a la Z en bloque?",
    a: "¡Sí! Nuestra herramienta incluye el muestrario completo A-Z en bloques negros (🅰🅱🅲), recuadros claros (🄰🄱🄲) y círculos oscuros (❶❷❸) listos para copiar de forma individual o en frases.",
  },
  {
    q: "¿Por qué las letras graffiti encuadradas destacan tanto en portadas y nicks?",
    a: "Los bloques oscuros con letra calada negativa (Squared Dark) generan un contraste de color absoluto que sobresale inmediatamente en cualquier fondo de pantalla, perfil o banner publicitario.",
  },
  {
    q: "¿Cómo copiar una sola letra graffiti para armar una inicial o acrónimo?",
    a: "Revisa la tabla de referencia del abecedario abajo, toca cualquier letra de bloque deseada y se copiará instantáneamente a la memoria de tu dispositivo.",
  },
  {
    q: "¿Sirven los caracteres de graffiti para apodos de Free Fire y Discord?",
    a: "¡Absolutamente! Es la tipografía de bloque preferida por creadores de contenido, streamers y capitanes de clan por su estética agresiva y profesional.",
  },
  {
    q: "¿Preserva el abecedario graffiti los números y símbolos?",
    a: "¡Sí! El alfabeto graffiti incluye números encuadrados (❶❷❸❹❺) para acompañar los nicks y etiquetas de clan.",
  },
  {
    q: "¿Cómo convertir una palabra completa a letras de bloque graffiti?",
    a: "Escribe tu apodo o palabra en la herramienta superior, selecciona el estilo 'Squared Dark (Bloques Negros)' y copia todo el resultado en 1 solo clic.",
  },
];

export default function AlfabetoGraffitiPage() {
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
          <span className="text-slate-400">Alfabeto Completo</span>
          <span>/</span>
          <span className="text-teal-400 font-bold">Alfabeto Graffiti</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>🎨</span> Abecedario Urbano A-Z en Bloques y Caracteres Encuadrados
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Alfabeto Graffiti Completo A-Z 🎨
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Muestrario interactivo del <strong className="text-teal-400 font-extrabold">abecedario de letras graffiti, bloques oscuros (Squared Dark) y caracteres encuadrados de la A a la Z</strong>. Prueba nuestro <Link href="/letras-bonitas/letras-graffiti" className="text-teal-400 underline font-bold hover:text-teal-300">conversor de letras graffiti</Link>, copia letras sueltas para tus siglas de clan o convierte frases completas en 1 clic.
          </p>
        </header>

        {/* Converter Tool */}
        <Converter highlightStyleId="gothic" />

        {/* ARTÍCULO DETALLADO DEEP 1: El Arte del Graffiti Digital */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              🎨 Arte Urbano & Tags
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Guía del Abecedario Graffiti: Estilos de Bloque para eSports y Banners
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              El arte del graffiti digital combina volumen, presencia y contraste. Para destacar en tus <Link href="/nicks-para-juegos/nick-free-fire" className="text-teal-400 underline font-bold hover:text-teal-300">nicks pro de Free Fire</Link>, dispones de 3 familias principales de caracteres encuadrados:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">1. Bloques Oscuros (Squared Dark)</span>
              <p className="text-slate-300 leading-relaxed font-mono">
                🅰 🅱 🅲 🅳 🅴 🅵 🅶 🅷 🅸 🅹 🅺 🅻 🅼 🅽 🅾 🅿 🅬 🆁 🅯 🅣 🅄 🅅 🅺 🅯 🆈 🆉
              </p>
              <p className="text-slate-300 leading-relaxed">
                Recuadros negros con letra calada en blanco. Transmite fuerza y estructura en marcas de equipo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">2. Bloques Claros (Squared Light)</span>
              <p className="text-slate-300 leading-relaxed font-mono">
                🄰 🄱 🄲 🄳 🄴 🄵 🄶 🄷 🄸 🄹 🄺 🄻 🄼 🄽 🄾 🄿 🅀 🅁 🅂 🅃 🅄 🅅 7 8 9 🅉
              </p>
              <p className="text-slate-300 leading-relaxed">
                Marcos delineados con interior despejado. Ideal para subtítulos y acrónimos limpios.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">3. Círculos Negros (Circled Dark)</span>
              <p className="text-slate-300 leading-relaxed font-mono">
                🅐 🅑 🅒 🅓 🅔 🅕 🅖  me 🅘 🅙 🅀 🅛 🅜 🅝 🅞 🅟 🅠 🅡 🅢 🅣 🅤 🅥 7 8 9 🅩
              </p>
              <p className="text-slate-300 leading-relaxed">
                Sellos circulares oscuros ideales para listas ordenadas y números de rango.
              </p>
            </div>
          </div>
        </section>

        {/* ALPHABET REFERENCE TABLE FOR GOTHIC */}
        <AlphabetReferenceTable highlightStyleId="gothic" />

        {/* Related Categories Widget */}
        <RelatedCategoriesWidget currentPath="/letras-bonitas/letras-graffiti" />

        {/* Examples */}
        <ExamplesSection />

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Alfabeto Graffiti" faqs={alfabetoGraffitiFaqs} />
      </main>
    </div>
  );
}
