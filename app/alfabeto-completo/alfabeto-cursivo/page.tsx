"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

const upperCursiveAlphabet = [
  { char: "A", styled: "𝒜" },
  { char: "B", styled: "ℬ" },
  { char: "C", styled: "𝒞" },
  { char: "D", styled: "𝒟" },
  { char: "E", styled: "ℰ" },
  { char: "F", styled: "ℱ" },
  { char: "G", styled: "𝒢" },
  { char: "H", styled: "ℋ" },
  { char: "I", styled: "ℐ" },
  { char: "J", styled: "𝒥" },
  { char: "K", styled: "𝒦" },
  { char: "L", styled: "ℒ" },
  { char: "M", styled: "ℳ" },
  { char: "N", styled: "𝒩" },
  { char: "O", styled: "𝒪" },
  { char: "P", styled: "𝒫" },
  { char: "Q", styled: "𝒬" },
  { char: "R", styled: "ℛ" },
  { char: "S", styled: "𝒮" },
  { char: "T", styled: "𝒯" },
  { char: "U", styled: "𝒰" },
  { char: "V", styled: "𝒱" },
  { char: "W", styled: "𝒲" },
  { char: "X", styled: "𝒳" },
  { char: "Y", styled: "𝒴" },
  { char: "Z", styled: "𝒵" },
];

const lowerCursiveAlphabet = [
  { char: "a", styled: "𝒶" },
  { char: "b", styled: "𝒷" },
  { char: "c", styled: "𝒸" },
  { char: "d", styled: "𝒹" },
  { char: "e", styled: "ℯ" },
  { char: "f", styled: "𝒻" },
  { char: "g", styled: "ℊ" },
  { char: "h", styled: "𝒽" },
  { char: "i", styled: "𝒾" },
  { char: "j", styled: "𝒿" },
  { char: "k", styled: "𝓀" },
  { char: "l", styled: "ℓ" },
  { char: "m", styled: "𝓂" },
  { char: "n", styled: "𝓃" },
  { char: "o", styled: "ℴ" },
  { char: "p", styled: "𝓅" },
  { char: "q", styled: "𝓆" },
  { char: "r", styled: "𝓇" },
  { char: "s", styled: "𝓈" },
  { char: "t", styled: "𝓉" },
  { char: "u", styled: "𝓊" },
  { char: "v", styled: "𝓋" },
  { char: "w", styled: "𝓌" },
  { char: "x", styled: "𝓍" },
  { char: "y", styled: "𝓎" },
  { char: "z", styled: "𝓏" },
];

const charLimits = [
  { platform: "Instagram Bio", limit: "150 caracteres" },
  { platform: "Free Fire (Nick)", limit: "12 caracteres" },
  { platform: "WhatsApp Estado", limit: "139 caracteres" },
  { platform: "TikTok Bio", limit: "80 caracteres" },
  { platform: "Twitter / X Bio", limit: "160 caracteres" },
];

const cursiveWordExamples = [
  {
    persona: "Amor / Sentimientos",
    text: "𝒜𝓂ℴ𝓇 ℯ𝓉ℯ𝓇𝓃ℴ ✨",
  },
  {
    persona: "Esperanza & Fe",
    text: "ℱℯ 𝓎 ℰ𝓈𝓅ℯ𝓇𝒶𝓃𝓏𝒶 🙏",
  },
  {
    persona: "Familia",
    text: "ℱ𝒶𝓂𝒾𝓁𝒾𝒶 𝓊𝓃𝒾𝒹𝒶 ❤️",
  },
  {
    persona: "Libertad",
    text: "ℒ𝒾𝒷ℯ𝓇𝓉𝒶𝒹 & 𝒫𝒶𝓏 🕊️",
  },
  {
    persona: "Sueños",
    text: "𝒮𝓊ℯñℴ𝓈 𝒸𝓊𝓂𝓅𝓁𝒾𝒹ℴ𝓈 🌟",
  },
  {
    persona: "Bienvenida",
    text: "ℬ𝒾ℯ𝓃𝓋ℯ𝓃𝒾𝒹ℴ𝓈 𝒶 𝓂𝒾 𝓅ℯ𝓇𝒻𝒾𝓁 🌸",
  },
  {
    persona: "Pasión & Arte",
    text: "𝒫𝒶𝓈𝒾ó𝓃 𝓅ℴ𝓇 ℯ𝓁 𝒶𝓇𝓉ℯ 🎨",
  },
  {
    persona: "Felicidad",
    text: "ℱℯ𝓁𝒾𝒸𝒾𝒹𝒶𝒹 𝓅𝓁ℯ𝓃𝒶 😊",
  },
  {
    persona: "Éxito",
    text: "ℰ𝓍𝒾𝓉ℴ & 𝒟𝒾𝓈𝒸𝒾𝓅𝓁𝒾𝓃𝒶 💎",
  },
  {
    persona: "Gratitud",
    text: "𝒢𝓇𝒶𝓉𝒾𝓉𝓊𝒹 𝒹𝒾𝒶𝓇𝒾𝒶 💖",
  },
];

const faqs = [
  {
    q: "¿Qué es el Alfabeto Cursivo en Unicode?",
    a: "Es la colección completa de letras mayúsculas y minúsculas (de la A a la Z) pertenecientes al bloque de símbolos alfanuméricos matemáticos en estilo script manuscrito.",
  },
  {
    q: "¿Puedo copiar letras individuales del alfabeto cursivo?",
    a: "¡Sí! Nuestra tabla de referencia te permite tocar cualquier letra mayúscula o minúscula para copiarla directamente al portapapeles.",
  },
  {
    q: "¿Por qué algunas letras como la B, E, F, H, I, L, M, R tienen códigos especiales en Unicode?",
    a: "En el estándar Unicode original, algunas letras cursivas se registraron previamente en el bloque 'Letterlike Symbols' (U+2100). Nuestra herramienta mapea automáticamente todas estas excepciones para que la palabra completa se lea uniforme.",
  },
  {
    q: "¿Es compatible este alfabeto cursivo en Instagram y WhatsApp?",
    a: "Sí, el 100% del alfabeto cursivo es compatible con la mayoría de teléfonos móviles y plataformas sociales.",
  },
  {
    q: "¿Puedo formar frases largas con el generador?",
    a: "Sí, puedes escribir párrafos completos en el cuadro del convertidor y se traducirán instantáneamente todas las letras a cursiva.",
  },
  {
    q: "¿Es gratis usar la tabla de referencia del alfabeto cursivo?",
    a: "Sí, la tabla y la herramienta de conversión son totalmente gratuitas y de libre uso.",
  },
  {
    q: "¿Se pueden combinar letras cursivas mayúsculas con letras de otros estilos?",
    a: "¡Por supuesto! Puedes usar una letra cursiva mayúscula al inicio de tu nombre y combinarla con otros estilos o símbolos.",
  },
  {
    q: "¿Necesito instalar algún programa?",
    a: "No se requiere ninguna instalación de software ni paquete de fuentes.",
  },
];

export default function AlfabetoCursivoPage() {
  const [copiedLetter, setCopiedLetter] = useState<string | null>(null);

  const handleCopyLetter = async (styled: string) => {
    try {
      await navigator.clipboard.writeText(styled);
      setCopiedLetter(styled);
      setTimeout(() => {
        setCopiedLetter((prev) => (prev === styled ? null : prev));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy letter: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      {/* Site Header Navigation */}
      <NavBar />

      <main className="flex-1 py-8 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 dark:text-neutral-400">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <a href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Alfabeto Completo
                </a>
              </li>
              <li>/</li>
              <li className="font-semibold text-neutral-800 dark:text-neutral-200">
                Alfabeto Cursivo
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Alfabeto Cursivo: Guía Completa de Letras de la A a la Z
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Explora el alfabeto cursivo completo de la A a la Z en mayúsculas y minúsculas. Copia cada letra
              individualmente o utiliza nuestro convertidor automático en tiempo real para transformar tus frases
              completas a letra manuscrita bonita.
            </p>
          </header>

          {/* Cursive Alphabet Reference Grid: Mayúsculas */}
          <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Alfabeto Cursivo Mayúsculas (A - Z)
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2.5">
              {upperCursiveAlphabet.map((item) => {
                const isCopied = copiedLetter === item.styled;
                return (
                  <button
                    key={item.char}
                    type="button"
                    onClick={() => handleCopyLetter(item.styled)}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isCopied
                        ? "bg-green-600 border-green-600 text-white shadow-sm scale-105"
                        : "bg-neutral-50 dark:bg-neutral-800/40 border-neutral-200 dark:border-neutral-800 hover:border-purple-500 text-neutral-900 dark:text-neutral-100 hover:shadow-sm"
                    }`}
                  >
                    <span className="text-2xl font-normal">{item.styled}</span>
                    <span className="text-[10px] opacity-60 mt-0.5">{item.char}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Cursive Alphabet Reference Grid: Minúsculas */}
          <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Alfabeto Cursivo Minúsculas (a - z)
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2.5">
              {lowerCursiveAlphabet.map((item) => {
                const isCopied = copiedLetter === item.styled;
                return (
                  <button
                    key={item.char}
                    type="button"
                    onClick={() => handleCopyLetter(item.styled)}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isCopied
                        ? "bg-green-600 border-green-600 text-white shadow-sm scale-105"
                        : "bg-neutral-50 dark:bg-neutral-800/40 border-neutral-200 dark:border-neutral-800 hover:border-purple-500 text-neutral-900 dark:text-neutral-100 hover:shadow-sm"
                    }`}
                  >
                    <span className="text-2xl font-normal">{item.styled}</span>
                    <span className="text-[10px] opacity-60 mt-0.5">{item.char}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Interactive Converter Pre-filtered to Script */}
          <Converter initialCategory="Script" />

          {/* Section: Tabla de Límites */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites Recomendados para Texto Cursivo
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Plataforma</th>
                    <th className="py-3 px-4">Límite Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-sm text-neutral-700 dark:text-neutral-300">
                  {charLimits.map((item) => (
                    <tr key={item.platform} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                      <td className="py-3.5 px-4 font-medium">{item.platform}</td>
                      <td className="py-3.5 px-4">{item.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Ejemplos de Palabras en Cursivo Listos para Copiar */}
          <ExamplesSection
            title="Ejemplos de Palabras en Cursiva"
            examples={cursiveWordExamples}
          />

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre el Alfabeto Cursivo"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
