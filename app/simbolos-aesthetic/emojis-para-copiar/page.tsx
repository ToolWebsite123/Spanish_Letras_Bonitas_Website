"use client";

import Link from "next/link";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

interface EmojiCategory {
  name: string;
  items: string[];
}

const emojiCategories: EmojiCategory[] = [
  {
    name: "Corazones Aesthetic",
    items: ["♡", "♥", "❥", "❣", "𓆩♡𓆪", "𓍢ִ໋🌷͙֒", "💖", "💘", "🖤", "🤍", "🩵", "💜"],
  },
  {
    name: "Estrellas y Brillos",
    items: ["✧", "✦", "★", "✩", "✬", "✭", "✮", "✯", "✰", "✨", "💫", "🌟"],
  },
  {
    name: "Separadores & Combos",
    items: [
      "⋆｡°✩",
      "─── ⋆⋅☆⋅⋆ ───",
      "˚₊· ͟͟͞͞➳❥",
      "┊ ➶ ｡˚ °",
      "𐦍༘",
      "𓍢ִ໋🌸",
      "☁️ 🕊️ ☁️",
      "☈ 𖦹 🫧",
    ],
  },
  {
    name: "Símbolos Coquette & Kawaii",
    items: ["୨୧", "🎀", "🪞", "🩰", "🧸", "🕯️", "🍓", "🕊️", "☁️", "🧁", "🎂", "🌷"],
  },
];

const emojiExamples = [
  {
    persona: "Bio Coquette Aesthetic",
    text: "୨୧ 𝒮ℴ𝒻𝓉 ℊ𝒾𝓇𝓁 𝓋𝒾𝒷ℯ𝓈 🩰 𓍢ִ໋🌷͙֒ 𝒫𝒶𝓇í𝓈 | ℳℴ𝒹𝒶 🎀",
  },
  {
    persona: "Separador para Posts",
    text: "─── ⋆⋅☆⋅⋆ ───",
  },
  {
    persona: "Nick Gamer con Estrellas",
    text: "✦ 𝒮𝒽𝒶𝒹ℴ𝓌 ✦ ⋆｡°✩",
  },
  {
    persona: "Corazón Criptográfico",
    text: "𓆩♡𓆪 𝒩ℴ 𝓇𝓊𝓁ℯ𝓈, 𝒿𝓊𝓈𝓉 𝓅ℯ𝒶𝒸ℯ 𓆩♡𓆪",
  },
  {
    persona: "Estado Romántico",
    text: "˚₊· ͟͟͞͞➳❥ 𝒯ú 𝓎 𝓎ℴ, 𝓈𝒾ℯ𝓂𝓅𝓇ℯ ♡",
  },
  {
    persona: "Bio Minimalista con Flores",
    text: "𓍢ִ໋🌸 𝒱𝒾𝓋𝒾ℯ𝓃𝒹ℴ ℯ𝓁 𝓅𝓇ℯ𝓈ℯ𝓃𝓉ℯ 🍃",
  },
  {
    persona: "Estilo Kawaii Soft",
    text: "🧸 𝒞𝓊𝓉ℯ & 𝒮𝓌ℯℯ𝓉 🧁 𝒟𝓇ℯ𝒶𝓂ℯ𝓇 ☁️",
  },
  {
    persona: "Perfil Oscuro / Dark Aesthetic",
    text: "🖤 ℰ𝓃 𝓁𝒶𝓈 𝓈ℴ𝓂𝒷𝓇𝒶𝓈 🥀 𝒩𝒾ℊ𝒽𝓉 𝓋𝒾𝒷ℯ𝓈",
  },
  {
    persona: "Separador de Historia",
    text: "┊ ➶ ｡˚ ° 𝒩𝓊ℯ𝓋ℴ 𝓅ℴ𝓈𝓉",
  },
  {
    persona: "Nick Free Fire con Coronita",
    text: "👑 𝒦𝒾𝓃ℊ𝒫𝓇ℴ 👑 ⋆｡°✩",
  },
];

const faqs = [
  {
    q: "¿Cómo copio un emoji o símbolo aesthetic?",
    a: "Simplemente haz clic en la casilla o botón 'Copiar' al lado del símbolo deseado y se guardará al instante en el portapapeles de tu dispositivo.",
  },
  {
    q: "¿Son compatibles los símbolos aesthetic en Instagram y TikTok?",
    a: "¡Sí! Todos los símbolos y emojis de esta lista son totalmente compatibles con biografías, nombres y comentarios de Instagram, TikTok, WhatsApp, Discord y Free Fire.",
  },
  {
    q: "¿Qué es el estilo Coquette o Aesthetic en emojis?",
    a: "Es una tendencia visual que utiliza símbolos delicados como moños (୨୧), corazones vacíos (♡), destellos (✧) y separadores decorativos para darle un toque suave y elegante al perfil.",
  },
  {
    q: "¿Por qué algunos emojis cambian de color en mi teléfono?",
    a: "El diseño exacto y color de los emojis estándar puede variar según el sistema operativo (iOS, Android, Windows) o la versión del teléfono.",
  },
  {
    q: "¿Puedo combinar varios símbolos para crear mi propio nick?",
    a: "¡Por supuesto! Puedes copiar varios símbolos individualmente o usar nuestros ejemplos prediseñados para armar tu biografía o nombre de usuario.",
  },
  {
    q: "¿Es totalmente gratis este catálogo de emojis?",
    a: "Sí, todos los emojis y símbolos son 100% gratuitos de copiar sin límites.",
  },
  {
    q: "¿Funcionan para nombres de clan en juegos?",
    a: "Sí, los símbolos como estrellas y separadores son muy utilizados para marcas de clan en Free Fire, PUBG y Roblox.",
  },
  {
    q: "¿Necesito instalar algún teclado de símbolos especial?",
    a: "No necesitas instalar teclados ni aplicaciones. Puedes copiar todo directo desde el sitio web.",
  },
];

export default function EmojisParaCopiarPage() {
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
                Emojis para Copiar y Pegar
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Emojis para Copiar y Pegar: Símbolos Aesthetic
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Explora y copia los mejores emojis, símbolos aesthetic, moños coquette, estrellas y separadores decorativos.
              Haz clic en cualquier símbolo para copiarlo directamente al portapapeles y personalizar tu biografía de Instagram,
              nicks de Free Fire, estados de WhatsApp y mensajes de TikTok.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              El uso de emojis para copiar destaca por brindar expresividad, frescura y dinamismo visual a tus textos cotidianos. A menudo es muy popular entre creadores de tendencias y perfiles de moda para decorar historias y presentaciones. Se usa comúnmente en la estilización de bios, y si buscas elementos de diseño afines te invitamos a conocer nuestras páginas de <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">símbolos coquette</Link> o la colección de <Link href="/letras-bonitas/letras-aesthetic" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras aesthetic</Link>.
            </p>
          </header>

          {/* Aesthetic Symbol Category Grids */}
          <div className="flex flex-col gap-8">
            {emojiCategories.map((cat) => (
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
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
              Haz clic en cualquier casilla para guardar el emoji al instante en el portapapeles. Si deseas acompañar tus combinaciones con fuentes para perfil, puedes consultar nuestras <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">fuentes para biografía de Instagram</Link> o descubrir nuestro creador de <Link href="/letras-personalizadas/nombres-personalizados" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nombres personalizados</Link>.
            </p>
          </div>

          {/* Section: Ejemplos Listos para Copiar */}
          <ExamplesSection
            title="Combos y Frases Aesthetic Listas para Copiar"
            examples={emojiExamples}
          />

          {/* Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Si también te interesa personalizar nombres de juego o firmas digitales, no te pierdas la colección de <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">símbolos para nick</Link> o nuestras <Link href="/fuentes-para-instagram/fuentes-para-whatsapp" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">fuentes para WhatsApp</Link>.
          </section>

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Emojis y Símbolos"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
