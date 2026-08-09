import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";

export const metadata: Metadata = {
  title: "Alfabeto Cursivo Completo - Abecedario de Letras Cursivas A-Z ✒️",
  description:
    "Muestrario completo del abecedario en letras cursivas finas, manuscritas y caligrafía de la A a la Z para copiar letra por letra.",
};

const cursivoFaqs = [
  {
    q: "¿El alfabeto cursivo incluye todas las letras de la A a la Z en mayúsculas y minúsculas?",
    a: "¡Sí! Nuestra tabla interactiva de alfabeto cursivo muestra cada letra del abecedario en mayúscula (𝒜, ℬ, 𝒞, 𝒟) y minúscula (𝒶, 𝒷, 𝒸, 𝒹) lista para copiar de forma individual o en bloques.",
  },
  {
    q: "¿Por qué algunas letras cursivas como la 'e' (ℯ) o la 'g' (ℊ) tienen su propio código Unicode especial?",
    a: "En la tabla internacional Unicode, ciertas letras cursivas caligráficas (como la 'e', 'g', 'h', 'o' y 'L') fueron añadidas en bloques matemáticos históricos anteriores. Nuestro sistema unifica todos los glifos para garantizar perfecta coherencia tipográfica.",
  },
  {
    q: "¿Cómo copiar una sola letra cursiva para combinarla manualmente?",
    a: "Explora la tabla de referencia del abecedario abajo, toca cualquier letra individual y se copiará instantáneamente al portapapeles de tu celular o computadora.",
  },
  {
    q: "¿Preserva el abecedario cursivo la letra Ñ y los acentos en español?",
    a: "¡Sí! El alfabeto cursivo en español incluye la letra Ñ (ñ) y las vocales acentuadas (á, é, í, ó, ú).",
  },
  {
    q: "¿Son universales las letras del abecedario cursivo en Android e iOS?",
    a: "100% universales. Al formar parte del estándar internacional Unicode (Mathematical Script), se pueden pegar en WhatsApp, Instagram, TikTok, Word y Photoshop.",
  },
  {
    q: "¿Cómo convertir una frase entera en abecedario cursivo?",
    a: "Escribe cualquier oración o párrafo en el recuadro superior y la herramienta convertirá automáticamente todo el texto al instante.",
  },
];

export default function AlfabetoCursivoPage() {
  return (
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-pink-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Alfabeto Completo</span>
          <span>/</span>
          <span className="text-pink-400 font-bold">Alfabeto Cursivo</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
            <span>✒️</span> Abecedario Completo de la A a la Z Unicode
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Alfabeto Cursivo Completo A-Z ✒️
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Muestrario y tabla interactiva del <strong className="text-pink-400 font-extrabold">abecedario cursivo completo en mayúsculas y minúsculas</strong>. Consulta glifo por glifo, copia letras sueltas para tus iniciales o convierte frases completas con 1 clic.
          </p>
        </header>

        {/* Converter Tool */}
        <Converter highlightStyleId="script-italic" />

        {/* ARTÍCULO DETALLADO DEEP 1: La Historia del Abecedario Cursivo */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 self-start border border-purple-500/30">
              ✒️ Historia Tipográfica
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Guía del Abecedario Cursivo: De la Caligrafía Manual al Estándar Unicode
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              El alfabeto cursivo se distingue por la ligadura natural de los trazos y el ritmo orgánico entre caracteres. En la tipografía digital, los glifos cursivos se dividen en 2 variantes principales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">1. Script Fino (Mathematical Script Italic)</span>
              <p className="text-slate-300 leading-relaxed font-mono">
                𝒜 ℬ 𝒞 𝒟 ℰ ℱ 𝒢 ℋ ℐ 𝒥 𝒦 ℒ ℳ 𝒩 𝒪 𝒫 𝒬 ℛ 𝒮 𝒯 𝒰 𝒱 𝒲 𝒳 𝒴 𝒵
              </p>
              <p className="text-slate-300 leading-relaxed">
                Trazos delicados con ligereza de pluma estilográfica. Excelente para iniciales de nombres y títulos finos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">2. Script Bold (Mathematical Script Bold)</span>
              <p className="text-slate-300 leading-relaxed font-mono">
                𝓐 𝓑 𝓒 𝓓 𝓔 贵 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 FV 𝓦 𝓧 𝓨 𝓩
              </p>
              <p className="text-slate-300 leading-relaxed">
                Trazo caligráfico de mayor grosor y presencia visual. Perfecto para titulares y logos.
              </p>
            </div>
          </div>
        </section>

        {/* ALPHABET REFERENCE TABLE FOR SCRIPT */}
        <AlphabetReferenceTable highlightStyleId="script-italic" />

        {/* Examples */}
        <ExamplesSection />

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Alfabeto Cursivo" faqs={cursivoFaqs} />
      </main>
    </div>
  );
}
