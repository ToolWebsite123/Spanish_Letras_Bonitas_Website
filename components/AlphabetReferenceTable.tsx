"use client";

import { useState } from "react";
import { fontStyles } from "@/lib/fontStyles";
import { convertText } from "@/lib/convertText";

interface AlphabetReferenceTableProps {
  highlightStyleId?: string;
  title?: string;
  subtitle?: string;
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const SPANISH_ACCENTS = ["Ñ", "Á", "É", "Í", "Ó", "Ú"];

export default function AlphabetReferenceTable({
  highlightStyleId = "cursive",
  title,
  subtitle,
}: AlphabetReferenceTableProps) {
  const currentStyle = fontStyles.find((s) => s.id === highlightStyleId) || fontStyles[0];
  const [copiedChar, setCopiedChar] = useState<string | null>(null);

  const handleCopy = async (char: string) => {
    try {
      await navigator.clipboard.writeText(char);
      setCopiedChar(char);
      setTimeout(() => {
        setCopiedChar((prev) => (prev === char ? null : prev));
      }, 1400);
    } catch (e) {
      console.error("Could not copy character", e);
    }
  };

  return (
    <section className="w-full flex flex-col gap-6 p-5 sm:p-8 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
          <span>🔤</span> Muestrario de Abecedario A-Z
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-100 flex items-center gap-2.5">
          {title || `Tabla del Abecedario: ${currentStyle.name}`}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
          {subtitle || "Toca sobre cualquier letra mayúscula o minúscula para copiarla individualmente a tu portapapeles."}
        </p>
      </div>

      {/* Alphabet Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2.5 pt-2">
        {ALPHABET.map((letter) => {
          const upperConv = convertText(letter, currentStyle.map, currentStyle.id);
          const lowerConv = convertText(letter.toLowerCase(), currentStyle.map, currentStyle.id);

          const isUpperCopied = copiedChar === upperConv;
          const isLowerCopied = copiedChar === lowerConv;

          return (
            <div
              key={letter}
              className="p-3 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col items-center justify-between gap-2 text-center hover:border-teal-400/60 transition-all group"
            >
              <span className="text-[10px] font-extrabold text-slate-400">
                Letra {letter}
              </span>

              <div className="flex items-center justify-center gap-2 w-full">
                {/* Uppercase Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(upperConv)}
                  className={`relative flex-1 py-1.5 px-1 rounded-xl text-base sm:text-lg font-normal transition-all cursor-pointer border ${
                    isUpperCopied
                      ? "bg-teal-500 text-white border-teal-400 font-bold scale-105"
                      : "bg-[#1b1530] text-slate-100 border-purple-900/50 hover:bg-teal-500/20 hover:border-teal-400/80 hover:text-teal-300"
                  }`}
                  title={`Copiar mayúscula ${upperConv}`}
                >
                  <span>{upperConv}</span>
                  {isUpperCopied && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow z-10 whitespace-nowrap">
                      ✓ Copiado
                    </span>
                  )}
                </button>

                {/* Lowercase Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(lowerConv)}
                  className={`relative flex-1 py-1.5 px-1 rounded-xl text-base sm:text-lg font-normal transition-all cursor-pointer border ${
                    isLowerCopied
                      ? "bg-teal-500 text-white border-teal-400 font-bold scale-105"
                      : "bg-[#1b1530] text-slate-100 border-purple-900/50 hover:bg-teal-500/20 hover:border-teal-400/80 hover:text-teal-300"
                  }`}
                  title={`Copiar minúscula ${lowerConv}`}
                >
                  <span>{lowerConv}</span>
                  {isLowerCopied && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow z-10 whitespace-nowrap">
                      ✓ Copiado
                    </span>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between w-full text-[9px] text-slate-500 font-bold px-0.5">
                <span>Mayús</span>
                <span>Minús</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Special Spanish Characters (Accents & Ñ) */}
      <div className="mt-2 pt-4 border-t border-purple-900/40 flex flex-col gap-3">
        <span className="text-xs font-bold text-slate-300">
          Caracteres Especiales en Español (Acentos y Ñ):
        </span>
        <div className="flex flex-wrap gap-2">
          {SPANISH_ACCENTS.map((char) => {
            const upperConv = convertText(char, currentStyle.map, currentStyle.id);
            const lowerConv = convertText(char.toLowerCase(), currentStyle.map, currentStyle.id);

            const isUpperCopied = copiedChar === upperConv;
            const isLowerCopied = copiedChar === lowerConv;

            return (
              <div
                key={char}
                className="flex items-center gap-1.5 bg-[#231c3d] p-1.5 px-3 rounded-xl border border-purple-900/40"
              >
                <span className="text-[10px] font-bold text-slate-400">{char}:</span>
                <button
                  type="button"
                  onClick={() => handleCopy(upperConv)}
                  className={`px-2 py-0.5 rounded-lg text-sm transition-all cursor-pointer border ${
                    isUpperCopied
                      ? "bg-teal-500 text-white border-teal-400"
                      : "bg-[#1b1530] text-slate-100 border-purple-900/50 hover:border-teal-400 hover:text-teal-300"
                  }`}
                  title={`Copiar ${upperConv}`}
                >
                  {upperConv}
                </button>
                <button
                  type="button"
                  onClick={() => handleCopy(lowerConv)}
                  className={`px-2 py-0.5 rounded-lg text-sm transition-all cursor-pointer border ${
                    isLowerCopied
                      ? "bg-teal-500 text-white border-teal-400"
                      : "bg-[#1b1530] text-slate-100 border-purple-900/50 hover:border-teal-400 hover:text-teal-300"
                  }`}
                  title={`Copiar ${lowerConv}`}
                >
                  {lowerConv}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
