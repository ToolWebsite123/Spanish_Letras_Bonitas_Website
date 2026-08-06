"use client";

import Link from "next/link";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

interface CoquetteCategory {
  name: string;
  items: string[];
}

const coquetteCategories: CoquetteCategory[] = [
  {
    name: "Moños y Lazos Coquette (Bows)",
    items: ["୨୧", "🎀", "𓍢ִ໋🎀", "⑅", "𓍢ִ໋୨୧", "🎀₊˚", "🎗️", "⑅˚₊"],
  },
  {
    name: "Corazones Delicate & Soft",
    items: ["♡", "♥", "❥", "❣", "𓆩♡𓆪", "𓍢ִ໋🌷͙֒", "💖", "🤍", "🩵", "💗"],
  },
  {
    name: "Mariposas y Flores Elegantes",
    items: ["🦋", "ʚɞ", "𓆣", "𓆤", "🌸", "🌷", "𓍢ִ໋🌸", "🪷", "🌿", "🌺"],
  },
  {
    name: "Perlas, Estrellas & Objetos Kawaii",
    items: ["⋆｡°✩", "✧", "✦", "🫧", "🪞", "🩰", "🕯️", "🧸", "☁️", "🧁", "🎂", "🍓"],
  },
];

const platformGuide = [
  { platform: "Instagram Bio Coquette", limit: "Recomendado: 2-3 moños (୨୧) y corazones" },
  { platform: "TikTok Username & Bio", limit: "Recomendado: 1-2 separadores con mariposas (ʚɞ)" },
  { platform: "WhatsApp Estado / Nombre", limit: "Recomendado: Combos con moños y estrellas (⋆｡°✩)" },
  { platform: "Pinterest Nombre de Tablero", limit: "Sin límite práctico" },
  { platform: "Discord Nick Coquette", limit: "32 caracteres" },
  { platform: "Roblox Display Name", limit: "20 caracteres" },
];

const coquetteExamples = [
  {
    persona: "Bio Coquette Princess",
    text: "୨୧ 𝒮ℴ𝒻𝓉 ℊ𝒾𝓇𝓁 𝓋𝒾𝒷ℯ𝓈 🩰 𓍢ִ໋🌷͙֒ 𝒫𝒶𝓇í𝓈 | ℳℴ𝒹𝒶 🎀",
  },
  {
    persona: "Separador Dulce para Posts",
    text: "୨୧ ─── ⋆⋅☆⋅⋆ ─── ୨୧",
  },
  {
    persona: "Nick Gamer Ballet Coquette",
    text: "🩰 𝒫𝒾𝓃𝓀𝒬𝓊ℯℯ𝓃 ୨୧ ⋆｡°✩",
  },
  {
    persona: "Estado Romántico con Mariposa",
    text: "ʚɞ 𝒯ú 𝓎 𝓎ℴ, 𝓈𝒾ℯ𝓂𝓅𝓇ℯ ♡ 𓍢ִ໋🌸",
  },
  {
    persona: "Bio Soft Floral",
    text: "𓍢ִ໋🌸 𝒱𝒾𝓋𝒾ℯ𝓃𝒹ℴ ℯ𝓃 𝓊𝓃 𝓈𝓊ℯñℴ 𝓇ℴ𝓈𝒶𝒹ℴ 🧸 🎀",
  },
  {
    persona: "Combo Vintage Coquette",
    text: "🕯️ 🪞 𝒮ℴ𝓅𝒽𝒾𝒶 ୨୧ 𝒱𝒾𝓃𝓉𝒶ℊℯ 𝒮ℴ𝓊𝓁",
  },
  {
    persona: "Perfil Kawaii & Sweets",
    text: "🍓 𝒞𝓊𝓉ℯ & 𝒮𝓌ℯℯ𝓉 🧁 𝒟𝓇ℯ𝒶𝓂ℯ𝓇 ☁️ 🎀",
  },
  {
    persona: "Nick con Corazón y Perlas",
    text: "𓆩♡𓆪 𝒜𝓃ℊℯ𝓁𝒾𝒸 𓆩♡𓆪 🫧",
  },
  {
    persona: "Separador de Historia Instagram",
    text: "┊ ➶ ｡˚ ° ୨୧ 𝒩𝓊ℯ𝓋ℴ 𝓅ℴ𝓈𝓉",
  },
  {
    persona: "Frase de Presentación",
    text: "🎀 𝒜𝓂𝒶𝓃𝓉ℯ 𝒹ℯ𝓁 𝒶𝓇𝓉ℯ, 𝓁ℴ𝓈 𝓁𝒾𝒷𝓇ℴ𝓈 𝓎 ℯ𝓁 𝒸𝒶𝒻é 🩰",
  },
];

const faqs = [
  {
    q: "¿Qué son los símbolos coquette y cómo se usan?",
    a: "Los símbolos coquette son elementos estéticos suaves y femeninos como moños (୨୧), corazones vacíos (♡), mariposas (ʚɞ) y destellos (⋆｡°✩) utilizados para decorar biografías y nombres en redes sociales.",
  },
  {
    q: "¿Cómo copio los moños y corazones coquette?",
    a: "Solo debes presionar el botón 'Copiar' en el recuadro del símbolo que desees y se guardará automáticamente en tu portapapeles listo para pegar.",
  },
  {
    q: "¿Son compatibles con Instagram, TikTok y WhatsApp?",
    a: "¡Sí! Todos los moños, mariposas y símbolos coquette son caracteres estándar Unicode compatibles con biografías, nombres y comentarios de todas las plataformas sociales.",
  },
  {
    q: "¿Cuál es el origen de la estética Coquette?",
    a: "La tendencia Coquette se inspira en el romanticismo clásico, encajes, tonos pastel, zapatillas de ballet y moños rosados, buscando transmitir delicadeza y elegancia inocente.",
  },
  {
    q: "¿Puedo combinar los moños con letras cursivas o bonitas?",
    a: "¡Por supuesto! Puedes usar nuestro generador de letras bonitas y añadir moños (୨୧) al inicio y final de tu nombre para armar una bio perfecta.",
  },
  {
    q: "¿Es totalmente gratuito copiar estos símbolos?",
    a: "Sí, todos los símbolos, emojis y combinaciones coquette de este catálogo son 100% gratuitos de copiar cuantas veces quieras.",
  },
  {
    q: "¿Funcionan estos moños para nicks de juegos como Roblox?",
    a: "Sí, los caracteres como ୨୧ y ʚɞ son sumamente populares en nicks y nombres de usuario de Roblox, Free Fire y Minecraft.",
  },
  {
    q: "¿Necesito instalar algún teclado especial?",
    a: "No requieres instalar aplicaciones ni teclados adicionales. Copias directo desde el navegador en cualquier smartphone o computadora.",
  },
];

export default function SimbolosCoquettePage() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopySymbol = async (symbol: string) => {
    try {
      await navigator.clipboard.writeText(symbol);
      setCopiedItem(symbol);
      setTimeout(() => {
        setCopiedItem((prev) => (prev === symbol ? null : prev));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy symbol: ", err);
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
                  Símbolos Aesthetic
                </a>
              </li>
              <li>/</li>
              <li className="font-semibold text-neutral-800 dark:text-neutral-200">
                Símbolos Coquette
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Símbolos Coquette: Copiar Moños, Corazones y Mariposas Aesthetic
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Explora y copia la mejor colección de símbolos coquette: moños (୨୧, 🎀), corazones vacíos (♡),
              mariposas delicadas (ʚɞ), perlas y estrellas decorativas. Personaliza tu biografía de Instagram,
              nombres de Roblox, TikTok y estados de WhatsApp con un toque delicado y aesthetic.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              La moda de símbolos coquette destaca por impregnar tu presencia digital con moños, corazones y tonos de delicadeza romántica. A menudo es muy popular entre creadoras de contenido y usuarios que prefieren perfiles suaves y vintage. Se usa comúnmente en descripciones de Instagram y TikTok, y si deseas complementar con otras fuentes te recomendamos revisar nuestras páginas de <Link href="/letras-bonitas/letras-aesthetic" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras aesthetic</Link> o la colección de <Link href="/simbolos-aesthetic/emojis-para-copiar" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">emojis para copiar</Link>.
            </p>
          </header>

          {/* Coquette Symbol Category Grids */}
          <div className="flex flex-col gap-8">
            {coquetteCategories.map((cat) => (
              <section
                key={cat.name}
                className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0"
              >
                <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  {cat.name}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {cat.items.map((item) => {
                    const isCopied = copiedItem === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleCopySymbol(item)}
                        className={`flex items-center justify-between gap-2 p-3 rounded-xl border transition-all cursor-pointer ${
                          isCopied
                            ? "bg-green-600 border-green-600 text-white shadow-sm scale-105"
                            : "bg-neutral-50 dark:bg-neutral-800/40 border-neutral-200 dark:border-neutral-800 hover:border-purple-500 text-neutral-900 dark:text-neutral-100 hover:shadow-sm"
                        }`}
                      >
                        <span className="text-lg sm:text-xl truncate">{item}</span>
                        <span className="text-xs font-semibold shrink-0">
                          {isCopied ? "✓ Copiado" : "Copiar"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Section: Tabla de Recomendaciones */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Guía de Uso de Símbolos Coquette por Plataforma
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Plataforma / Red Social</th>
                    <th className="py-3 px-4">Uso Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-sm text-neutral-700 dark:text-neutral-300">
                  {platformGuide.map((item) => (
                    <tr key={item.platform} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                      <td className="py-3.5 px-4 font-medium">{item.platform}</td>
                      <td className="py-3.5 px-4">{item.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
              Combina los moños coquette con nuestras opciones para <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">bio para Instagram</Link> o prueba a diseñar un estilo delicado en tus <Link href="/nicks-para-juegos/nombres-para-roblox" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nombres para Roblox</Link>.
            </p>
          </section>

          {/* Section: Ejemplos Listos para Copiar */}
          <ExamplesSection
            title="Combos y Bios Coquette Listas para Copiar"
            examples={coquetteExamples}
          />

          {/* Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Descubre otras formas de engalanar tu perfil explorando nuestras <Link href="/letras-bonitas/caligrafia" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">fuentes de caligrafía</Link> o el catálogo de <Link href="/letras-bonitas/letras-cursivas" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras cursivas</Link>.
          </section>

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Símbolos Coquette"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
