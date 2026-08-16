"use client";

import { useState } from "react";

export default function CaseConverter() {
  const [inputText, setInputText] = useState(
    "HOLA, ESTE ES UN TEXTO DE EJEMPLO PARA CONVERTIR MAYÚSCULAS Y MINÚSCULAS."
  );
  const [copied, setCopied] = useState(false);

  const handleLowercase = () => {
    setInputText((prev) => prev.toLowerCase());
  };

  const handleUppercase = () => {
    setInputText((prev) => prev.toUpperCase());
  };

  const handleSentenceCase = () => {
    setInputText((prev) =>
      prev
        .toLowerCase()
        .replace(/(^\s*|[.!?]\s+)([a-záéíóúñ])/gi, (_, p1, p2) => p1 + p2.toUpperCase())
    );
  };

  const handleTitleCase = () => {
    setInputText((prev) =>
      prev
        .toLowerCase()
        .replace(/(^\s*|\s+)([a-záéíóúñ])/gi, (_, p1, p2) => p1 + p2.toUpperCase())
    );
  };

  const handleAlternatingCase = () => {
    setInputText((prev) =>
      prev
        .split("")
        .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
        .join("")
    );
  };

  const handleInverseCase = () => {
    setInputText((prev) =>
      prev
        .split("")
        .map((char) =>
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        )
        .join("")
    );
  };

  const handleReverseText = () => {
    setInputText((prev) => prev.split("").reverse().join(""));
  };

  const handleCopy = async () => {
    if (!inputText) return;
    try {
      await navigator.clipboard.writeText(inputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 p-4 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-[#faf8f5] dark:bg-zinc-900 shadow-xs">
      {/* Title Header */}
      <h2 className="text-lg sm:text-xl font-bold text-center text-slate-800 dark:text-slate-100">
        Convertidor de Mayúsculas y Minúsculas
      </h2>

      {/* Input Box */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-500 dark:text-zinc-400 uppercase">
            Escribe o pega tu texto:
          </label>
          <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
            {inputText.length} caracteres
          </span>
        </div>

        <div className="relative w-full">
          <textarea
            rows={4}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe o pega tu texto aquí..."
            className="w-full p-3 sm:p-4 rounded-xl text-sm sm:text-base font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-y shadow-xs"
          />
          {inputText && (
            <button
              type="button"
              onClick={() => setInputText("")}
              className="absolute top-2.5 right-2.5 px-2 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-zinc-800 text-slate-500 hover:text-red-500 transition-colors"
              title="Borrar texto"
            >
              Limpiar
            </button>
          )}
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div className="bg-[#ede7df]/50 dark:bg-zinc-800/50 p-2.5 sm:p-3.5 rounded-xl border border-slate-200/60 dark:border-zinc-700/60 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={handleSentenceCase}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-700 hover:border-amber-500 hover:text-amber-600 transition-all cursor-pointer shadow-xs"
        >
          Formato Oración
        </button>
        <button
          type="button"
          onClick={handleLowercase}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-700 hover:border-amber-500 hover:text-amber-600 transition-all cursor-pointer shadow-xs"
        >
          minúsculas
        </button>
        <button
          type="button"
          onClick={handleUppercase}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-700 hover:border-amber-500 hover:text-amber-600 transition-all cursor-pointer shadow-xs"
        >
          MAYÚSCULAS
        </button>
        <button
          type="button"
          onClick={handleTitleCase}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-700 hover:border-amber-500 hover:text-amber-600 transition-all cursor-pointer shadow-xs"
        >
          Capitalizar
        </button>
        <button
          type="button"
          onClick={handleAlternatingCase}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-700 hover:border-amber-500 hover:text-amber-600 transition-all cursor-pointer shadow-xs"
        >
          aLtErNaDo
        </button>
        <button
          type="button"
          onClick={handleInverseCase}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-700 hover:border-amber-500 hover:text-amber-600 transition-all cursor-pointer shadow-xs"
        >
          iNvErSo
        </button>
        <button
          type="button"
          onClick={handleReverseText}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-700 hover:border-amber-500 hover:text-amber-600 transition-all cursor-pointer shadow-xs"
        >
          Invertir Texto
        </button>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
            copied
              ? "bg-emerald-600 text-white"
              : "bg-amber-600 hover:bg-amber-500 text-white"
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012-2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z"
            />
          </svg>
          <span>{copied ? "¡Copiado!" : "Copiar Texto"}</span>
        </button>
      </div>
    </div>
  );
}
