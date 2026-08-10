"use client";

import { useState } from "react";
import { fontStyles } from "@/lib/fontStyles";
import { convertText } from "@/lib/convertText";

export default function SimpleCursiveConverter() {
  const [inputText, setInputText] = useState("Hola Mundo Cursivo");
  const [isCopied, setIsCopied] = useState(false);

  const cursiveStyle = fontStyles.find((s) => s.id === "cursive") || fontStyles[0];
  const convertedText = convertText(
    inputText || "Escribe tu frase aquí",
    cursiveStyle.map,
    cursiveStyle.id
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(convertedText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1600);
    } catch (e) {
      console.error("Could not copy text", e);
    }
  };

  return (
    <section className="w-full flex flex-col gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
      <div className="flex flex-col gap-1.5">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
          <span>⚡</span> Conversor Rápido de Frases
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-100">
          Convertidor de Frases Completas a Cursiva
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-medium">
          Si prefieres transformar un texto entero en lugar de copiar letra por letra, escríbelo a continuación:
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escribe tu texto o frase aquí..."
          rows={2}
          className="w-full p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-purple-900/50 bg-[#231c3d] text-slate-100 placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 text-base sm:text-lg font-normal leading-normal resize-y"
        />

        <div className="p-4 sm:p-5 rounded-2xl border border-teal-500/30 bg-[#231c3d] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xl sm:text-2xl text-slate-100 font-normal break-words leading-tight text-center sm:text-left">
            {convertedText}
          </p>

          <button
            type="button"
            onClick={handleCopy}
            className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer shrink-0 flex items-center gap-2 shadow-lg ${
              isCopied
                ? "bg-emerald-500 text-white shadow-emerald-500/25 scale-105"
                : "bg-gradient-to-r from-teal-500 via-emerald-500 to-indigo-600 text-white hover:opacity-95 shadow-teal-500/20"
            }`}
          >
            {isCopied ? (
              <span>✨ ¡Frase Copiada!</span>
            ) : (
              <>
                <span>Copiar Frase Cursiva</span>
                <span>📋</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
