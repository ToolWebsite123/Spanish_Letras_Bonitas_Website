"use client";

import { useState } from "react";

// Hangul Filler U+3164 (one of the most effective invisible characters for games & socials)
const INVISIBLE_CHAR = "\u3164";

export default function InvisibleTextGenerator() {
  const [customCount, setCustomCount] = useState<number>(3);
  const [testText, setTestText] = useState<string>("");
  const [copiedPreset, setCopiedPreset] = useState<string | null>(null);
  const [copiedCustom, setCopiedCustom] = useState<boolean>(false);

  const copyToClipboard = async (text: string, type: "preset" | "custom", presetLabel?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "preset" && presetLabel) {
        setCopiedPreset(presetLabel);
        setTimeout(() => setCopiedPreset(null), 2000);
      } else {
        setCopiedCustom(true);
        setTimeout(() => setCopiedCustom(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy invisible text: ", err);
    }
  };

  const handleCustomCountChange = (delta: number) => {
    setCustomCount((prev) => Math.max(1, Math.min(100, prev + delta)));
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 p-4 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-[#faf8f5] dark:bg-zinc-900 shadow-xs">
      {/* Title Header */}
      <h2 className="text-lg sm:text-xl font-bold text-center text-slate-800 dark:text-slate-100">
        Generador y Copiador de Texto Invisible
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Método 1 - Copia Rápida */}
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs flex items-center justify-center">
              1
            </span>
            <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">
              Método 1 — Copia Rápida
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
            Haz clic en cualquiera de las 3 opciones prediseñadas para copiar el espacio invisible al instante:
          </p>

          <div className="flex flex-col gap-2 pt-1">
            <button
              type="button"
              onClick={() => copyToClipboard(INVISIBLE_CHAR.repeat(1), "preset", "pequeno")}
              className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-[#ede7df]/60 dark:bg-zinc-800/80 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-zinc-700 transition-all cursor-pointer flex items-center justify-between"
            >
              <span>Pequeño (1 espacio transparente)</span>
              <span className="px-2 py-0.5 rounded bg-white/40 dark:bg-black/30 text-[10px]">
                {copiedPreset === "pequeno" ? "¡Copiado! ✓" : "Copiar 📋"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => copyToClipboard(INVISIBLE_CHAR.repeat(5), "preset", "mediano")}
              className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-[#ede7df]/60 dark:bg-zinc-800/80 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-zinc-700 transition-all cursor-pointer flex items-center justify-between"
            >
              <span>Mediano (5 espacios transparentes)</span>
              <span className="px-2 py-0.5 rounded bg-white/40 dark:bg-black/30 text-[10px]">
                {copiedPreset === "mediano" ? "¡Copiado! ✓" : "Copiar 📋"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => copyToClipboard(INVISIBLE_CHAR.repeat(10), "preset", "grande")}
              className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-[#ede7df]/60 dark:bg-zinc-800/80 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-zinc-700 transition-all cursor-pointer flex items-center justify-between"
            >
              <span>Grande (10 espacios transparentes)</span>
              <span className="px-2 py-0.5 rounded bg-white/40 dark:bg-black/30 text-[10px]">
                {copiedPreset === "grande" ? "¡Copiado! ✓" : "Copiar 📋"}
              </span>
            </button>
          </div>
        </div>

        {/* Método 2 - Generar y Copiar Manualmente */}
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs flex items-center justify-center">
              2
            </span>
            <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">
              Método 2 — Generación Personalizada
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
            Elige la cantidad exacta de caracteres invisibles que necesitas y presiona el botón:
          </p>

          {/* Stepper Controls */}
          <div className="flex items-center justify-between gap-3 bg-[#ede7df]/40 dark:bg-zinc-800/40 p-2.5 rounded-xl border border-slate-200/60 dark:border-zinc-700/60">
            <span className="text-xs font-bold text-slate-600 dark:text-zinc-400">
              Cantidad:
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleCustomCountChange(-1)}
                className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-slate-200 font-bold text-sm hover:border-amber-500 flex items-center justify-center cursor-pointer"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                max={100}
                value={customCount}
                onChange={(e) => setCustomCount(Math.max(1, Math.min(100, Number(e.target.value) || 1)))}
                className="w-14 py-1 text-center font-mono font-bold text-sm rounded-lg border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
              <button
                type="button"
                onClick={() => handleCustomCountChange(1)}
                className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-slate-200 font-bold text-sm hover:border-amber-500 flex items-center justify-center cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={() => copyToClipboard(INVISIBLE_CHAR.repeat(customCount), "custom")}
            className={`w-full py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs ${
              copiedCustom
                ? "bg-emerald-600 text-white"
                : "bg-amber-600 hover:bg-amber-500 text-white"
            }`}
          >
            <span>{copiedCustom ? "¡Copiado al Portapapeles! ✓" : `Copiar ${customCount} Caracteres Invisibles 📋`}</span>
          </button>
        </div>
      </div>

      {/* Test Box: Pruébalo */}
      <div className="flex flex-col gap-2 p-4 rounded-xl bg-[#ede7df]/50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <span>🧪</span> Pruébalo aquí (Área de prueba):
          </label>
          <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400">
            Caracteres detectados: {testText.length}
          </span>
        </div>
        <div className="relative w-full">
          <textarea
            rows={3}
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            placeholder="Pega (Ctrl + V) aquí tu texto invisible copiado para verificar que funciona..."
            className="w-full p-3 rounded-lg text-xs sm:text-sm font-mono border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 shadow-xs resize-none"
          />
          {testText && (
            <button
              type="button"
              onClick={() => setTestText("")}
              className="absolute top-2 right-2 px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 dark:bg-zinc-800 text-slate-500 hover:text-red-500 transition-colors"
            >
              Limpiar
            </button>
          )}
        </div>
        <p className="text-[11px] text-slate-500 dark:text-zinc-400">
          Si pegas el texto aquí arriba y el contador indica una cifra mayor a 0 sin mostrar caracteres visuales, el texto invisible se copió con éxito.
        </p>
      </div>
    </div>
  );
}
