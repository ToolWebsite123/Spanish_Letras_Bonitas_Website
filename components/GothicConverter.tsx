"use client";

import { useState } from "react";

const GOTHIC_MAP: Record<string, string> = {
  A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ",
  J: "𝔍", K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ",
  S: "𝔖", T: "𝔗", U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ",
  a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦",
  j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯",
  s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷",
  0: "𝟘", 1: "𝟙", 2: "𝟚", 3: "𝟛", 4: "𝟜", 5: "𝟝", 6: "𝟞", 7: "𝟟", 8: "𝟠", 9: "𝟡",
};

const GOTHIC_BOLD_MAP: Record<string, string> = {
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴",
  J: "𝕵", K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽",
  S: "𝕾", T: "𝕿", U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅",
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎",
  j: "𝖏", k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗",
  s: "𝖘", t: "𝖙", u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  0: "𝟬", 1: "𝟭", 2: "𝟮", 3: "𝟯", 4: "", 5: "𝟱", 6: "𝟲", 7: "𝟳", 8: "𝟴", 9: "𝟵",
};

export function convertToGothic(text: string, isBold = false): string {
  const map = isBold ? GOTHIC_BOLD_MAP : GOTHIC_MAP;
  return text
    .split("")
    .map((char) => map[char] || char)
    .join("");
}

export default function GothicConverter() {
  const [inputText, setInputText] = useState<string>("Letras Góticas");
  const [copiedVariant, setCopiedVariant] = useState<string | null>(null);

  const sampleWords = ["Letras Bonitas", "Tatuajes", "Caligrafía", "Medieval", "12345"];

  const variants = [
    {
      id: "normal",
      title: "Gótica Normal (Fraktur Standard)",
      badge: "Clásico",
      convertedText: convertToGothic(inputText || "Letras Góticas", false),
    },
    {
      id: "bold",
      title: "Gótica Negrita (Bold Fraktur)",
      badge: "Destacado",
      convertedText: convertToGothic(inputText || "Letras Góticas", true),
    },
    {
      id: "decorated_swords",
      title: "Gótica Medieval (Con Espadas)",
      badge: "Estilo Épico",
      convertedText: `⚔️ ${convertToGothic(inputText || "Letras Góticas", true)} ⚔️`,
    },
    {
      id: "decorated_dark",
      title: "Gótica Oscura (Estética Vintage)",
      badge: "Aesthetic",
      convertedText: `🕯️ ${convertToGothic(inputText || "Letras Góticas", false)} 🕯️`,
    },
  ];

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedVariant(id);
      setTimeout(() => {
        setCopiedVariant((prev) => (prev === id ? null : prev));
      }, 1800);
    } catch (err) {
      console.error("Failed to copy gothic text: ", err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 p-4 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-[#faf8f5] dark:bg-zinc-900 shadow-xs">
      {/* Input Section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <span>✍️</span> Escribe o pega tu texto aquí:
          </label>
          <span className="text-[11px] text-slate-500 font-mono">
            {inputText.length} caracteres
          </span>
        </div>

        <div className="relative w-full">
          <textarea
            rows={3}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe algo aquí para convertir a letras góticas..."
            className="w-full p-3 sm:p-4 rounded-xl text-sm sm:text-base font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 shadow-xs resize-none"
          />
          {inputText && (
            <button
              type="button"
              onClick={() => setInputText("")}
              className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 dark:bg-zinc-800 text-slate-500 hover:text-red-500 transition-colors cursor-pointer"
            >
              Borrar
            </button>
          )}
        </div>

        {/* Quick Sample Selector */}
        <div className="flex items-center gap-1.5 flex-wrap pt-1">
          <span className="text-[11px] font-bold text-slate-500 dark:text-zinc-400">
            Prueba rápida:
          </span>
          {sampleWords.map((word) => (
            <button
              key={word}
              type="button"
              onClick={() => setInputText(word)}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#ede7df]/60 dark:bg-zinc-800/60 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-600 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* Gothic Output Cards */}
      <div className="flex flex-col gap-3.5 pt-2">
        <h3 className="text-xs font-extrabold tracking-wider uppercase text-slate-500 dark:text-zinc-400">
          Resultados en Estilo Gótico (Fraktur Unicode)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {variants.map((v) => {
            const isCopied = copiedVariant === v.id;
            return (
              <div
                key={v.id}
                onClick={() => handleCopy(v.convertedText, v.id)}
                className="group relative flex flex-col justify-between p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 hover:border-amber-500/60 hover:shadow-md transition-all duration-200 cursor-pointer min-h-[110px]"
              >
                <div className="flex items-center justify-between gap-1 text-[11px] font-bold text-slate-500">
                  <span>{v.title}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {v.badge}
                  </span>
                </div>

                <div className="my-auto py-2">
                  <span className="text-lg sm:text-xl font-serif text-slate-900 dark:text-slate-100 break-words leading-relaxed select-all">
                    {v.convertedText || "𝔏𝔢𝔱𝔯𝔞𝔰 𝔊ó𝔱𝔦𝔠𝔞𝔰"}
                  </span>
                </div>

                <div className="flex items-center justify-end pt-1">
                  <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold text-xs border border-amber-500/20 group-hover:bg-amber-600 group-hover:text-white transition-all flex items-center gap-1">
                    <span>{isCopied ? "¡Copiado! ✓" : "Copiar"}</span>
                    <span>📋</span>
                  </span>
                </div>

                {/* Copied Toast Overlay */}
                <div
                  className={`absolute inset-0 bg-amber-600 text-white rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-200 z-20 ${
                    isCopied ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <span>¡COPIADO AL PORTAPAPELES! 🏰</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
