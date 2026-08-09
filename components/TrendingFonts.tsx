"use client";

import { fontStyles, FontStyle } from "@/lib/fontStyles";
import { convertText } from "@/lib/convertText";
import { useState } from "react";

interface TrendingFontsProps {
  inputText?: string;
}

export default function TrendingFonts({ inputText = "Letras Bonitas" }: TrendingFontsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Featured top trending fonts
  const trendingIds = [
    "script-italic",
    "gothic",
    "small",
    "double-struck",
    "circled-dark",
    "squared-dark",
  ];

  const trendingStyles: FontStyle[] = trendingIds
    .map((id) => fontStyles.find((s) => s.id === id))
    .filter((s): s is FontStyle => Boolean(s));

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (e) {
      console.error("Failed to copy text: ", e);
    }
  };

  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
          <span>🔥</span> Más Usadas esta Semana
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-2.5">
          Tipografías Tendencia para Redes y Juegos
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
          Los estilos más elegidos por creadores de contenido y gamers para personalizar biografías y apodos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        {trendingStyles.map((style) => {
          const styled = convertText(inputText, style.map, style.id);
          const isCopied = copiedId === style.id;

          return (
            <div
              key={style.id}
              onClick={() => handleCopy(style.id, styled)}
              className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-3xl border border-purple-900/40 bg-[#231c3d] hover:border-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden min-h-[130px]"
            >
              <div className="flex items-center justify-between gap-2 z-10">
                <span className="text-xs font-extrabold text-slate-400 group-hover:text-pink-400 transition-colors">
                  {style.name}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-pink-500/10 text-pink-400 border border-pink-500/30">
                  Popular
                </span>
              </div>

              <div className="my-auto py-2 text-center">
                <p className="text-slate-100 break-words font-normal text-lg sm:text-xl leading-tight">
                  {styled}
                </p>
              </div>

              <div className="flex justify-end pt-1 z-10">
                <span className="text-[11px] font-bold text-pink-400 group-hover:underline flex items-center gap-1">
                  <span>Copiar</span>
                  <span>📋</span>
                </span>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 flex items-center justify-center text-white font-black text-xs tracking-wide transition-all duration-200 z-20 ${
                  isCopied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
                }`}
              >
                <span>✨ ¡TEXTO COPIADO!</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
