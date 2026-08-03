"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

interface SymbolCategory {
  name: string;
  items: string[];
}

const nickSymbolCategories: SymbolCategory[] = [
  {
    name: "Coronas y Realeza",
    items: ["👑", "♚", "♛", "♔", "♕", "꧁👑꧂", "༺👑༻", "⚡👑⚡"],
  },
  {
    name: "Espadas y Armas",
    items: ["⚔", "⚔️", "🗡️", "⚔️💥", "🛡️", "🏹", "🔫", "💣", "☠️⚔️"],
  },
  {
    name: "Calaveras y Clan Tags",
    items: ["☠", "☠️", "💀", "【Clan】", "〖TAG〗", "꧁ Clan ꧂", "༺TAG༻", "⦇Clan⦈"],
  },
  {
    name: "Alas, Corchetes y Estrellas",
    items: ["𓆩𓆪", "ʚɞ", "≪≫", "⟨⟩", "✦", "✧", "★", "✩", "⚡", "💥", "🔥"],
  },
];

const nickExamples = [
  {
    persona: "Sniper de Elite Free Fire",
    text: "꧁⚔️𝒮𝓃𝒾𝓅ℯ𝓇⚔️꧂",
  },
  {
    persona: "Líder de Clan Épico",
    text: "【𝒦𝒾𝓃ℊ】𝒮𝒽𝒶𝒹ℴ𝓌 👑",
  },
  {
    persona: "Estilo Rusk / Insano",
    text: "☠️ ℛ𝓊𝓈𝒽ℯ𝓇𝐹𝐹 ☠️",
  },
  {
    persona: "Jugadora Femenina Pro",
    text: "𓆩♡𓆪 𝒬𝓊ℯℯ𝓃𝒴𝓊𝓇𝒾 𓆩♡𓆪",
  },
  {
    persona: "Tag de Clan Destacado",
    text: "〖𝒩𝒳𝒯〗 𝒦𝒾𝓁𝓁ℯ𝓇 ⚡",
  },
  {
    persona: "Modo Leyenda PUBG",
    text: "༺𝒯𝒾𝓉𝒶𝓃༻ 🛡️",
  },
  {
    persona: "Estilo Alfa Wolf Roblox",
    text: "🐺 𝒜𝓁𝓅𝒽𝒶𝒲ℴ𝓁𝒻 ≪≫",
  },
  {
    persona: "Nick con Alas Aesthetic",
    text: "ʚɞ 𝒜𝓃ℊℯ𝓁𝒴𝓊𝓂𝒾 ʚɞ",
  },
  {
    persona: "Demon Gamer",
    text: "👿 𝒟𝒶𝓇𝓀𝒟ℯ𝓂ℴ𝓃 🔥",
  },
  {
    persona: "Guerrero Mítico",
    text: "🗡️ 𝒱𝒶𝓁𝓀𝓎𝓇𝒾ℯ 🛡️",
  },
];

const faqs = [
  {
    q: "¿Cómo uso los símbolos para nick en mis juegos?",
    a: "Simplemente haz clic en el botón 'Copiar' del símbolo o clan tag que desees, luego pégalo directamente en la pantalla de edición de nombre de tu juego (Free Fire, Roblox, PUBG, Call of Duty).",
  },
  {
    q: "¿Son compatibles las coronas y espadas con Free Fire?",
    a: "¡Sí! Todos los símbolos de coronas, espadas, alas y corchetes decorativos presentados en esta página son 100% compatibles con la versión actual de Free Fire y Free Fire MAX.",
  },
  {
    q: "¿Qué significan los símbolos ꧁꧂ y ༺༻?",
    a: "Son adornos de marcos o alas muy populares en la comunidad gamer para encerrar el nombre de usuario o el tag del clan y darles un aspecto llamativo de torneo.",
  },
  {
    q: "¿Cuentan los símbolos para el límite de 12 caracteres de Free Fire?",
    a: "Sí, cada símbolo o adorno cuenta como uno o más caracteres según su codificación Unicode. Procura usar apodos cortos al incluir adornos para no superar los 12 caracteres.",
  },
  {
    q: "¿Es seguro usar símbolos en mi nombre de usuario?",
    a: "Totalmente seguro. Utilizar símbolos Unicode estándar permitidos en el juego no viola las normas ni causa sanciones.",
  },
  {
    q: "¿Puedo copiar símbolos para nombres de clan?",
    a: "Sí, los marcos como 【Clan】 y 〖Tag〗 son perfectos para identificar a todos los integrantes de tu equipo o clan.",
  },
  {
    q: "¿Es gratis copiar los símbolos para nicks?",
    a: "Sí, la herramienta de símbolos es completamente gratuita y libre de copiar cuantas veces quieras.",
  },
  {
    q: "¿Funcionan estos símbolos en consolas y PC?",
    a: "Sí, son compatibles en dispositivos móviles (Android, iOS), PC y plataformas de consola.",
  },
];

export default function SimbolosParaNickPage() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopySymbol = async (symbol: string) => {
    try {
      await navigator.clipboard.writeText(symbol);
      setCopiedItem(symbol);
      setTimeout(() => {
        setCopiedItem((prev) => (prev === symbol ? null : prev));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy nick symbol: ", err);
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
                Símbolos para Nick
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Símbolos para Nick: Coronas, Espadas y Clan Tags
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Copia y pega los mejores símbolos gamer para tu nick. Encuentra coronas de rey/reina, espadas
              cruzadas, calaveras insanas, alas elegantes y marcas de clan como 【】 y ꧁꧂. Personaliza tu apodo
              para Free Fire, Roblox, PUBG y Call of Duty en segundos.
            </p>
          </header>

          {/* Symbol Category Grids */}
          <div className="flex flex-col gap-8">
            {nickSymbolCategories.map((cat) => (
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

          {/* Section: Ejemplos Listos para Copiar */}
          <ExamplesSection
            title="Nicks Gamer con Símbolos Listos para Copiar"
            examples={nickExamples}
          />

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Símbolos para Nick"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
