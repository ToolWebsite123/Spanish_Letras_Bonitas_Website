"use client";

import { useState } from "react";

interface TrendingItem {
  id: string;
  name: string;
  styledText: string;
  copiesThisWeek: string;
  badge: string;
  category: string;
}

const TRENDING_ITEMS: TrendingItem[] = [
  {
    id: "tr-1",
    name: "Cursiva Elegante",
    styledText: "𝓒𝓾𝓻𝓼𝓲𝓿𝓪 𝓔𝓵𝓮𝓰𝓪𝓷𝓽𝓮",
    copiesThisWeek: "4,821",
    badge: "🔥 #1 Más Copiada",
    category: "Bio Instagram",
  },
  {
    id: "tr-2",
    name: "Nick FF Guerrero",
    styledText: "꧁★𝓝𝓲𝓬𝓴 𝓕𝓕★꧂",
    copiesThisWeek: "3,647",
    badge: "🎮 Top Gaming",
    category: "Free Fire",
  },
  {
    id: "tr-3",
    name: "Pequenas Aesthetic",
    styledText: "ᴘᴇǫᴜᴇɴᴀs ᴀᴇsᴛʜᴇᴛɪᴄ",
    copiesThisWeek: "2,891",
    badge: "✨ Tendencia",
    category: "TikTok & Stories",
  },
  {
    id: "tr-4",
    name: "Outline Bold",
    styledText: "𝕆𝕦𝕥𝕝𝕚𝕟𝕖 𝔹𝕠𝕝𝕕",
    copiesThisWeek: "2,456",
    badge: "⚡ Destaque",
    category: "WhatsApp",
  },
  {
    id: "tr-5",
    name: "Square Bold",
    styledText: "🅱🅾🅻🅳 𝕊𝕢𝕦𝕒𝕣𝕖𝕤",
    copiesThisWeek: "1,923",
    badge: "⭐ Popular",
    category: "Discord",
  },
  {
    id: "tr-6",
    name: "Gótica Fraktur",
    styledText: "𝔊ó𝔱𝔦𝔠𝔞 𝔉𝔯𝔞𝔨𝔱𝔲𝔯",
    copiesThisWeek: "1,640",
    badge: "⚔️ Favorita",
    category: "Roblox & COD",
  },
];

export default function TrendingFonts() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch (e) {
      console.error("Error copying trending text", e);
    }
  };

  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-9 rounded-3xl border border-amber-200/90 dark:border-amber-900/40 bg-gradient-to-br from-amber-50/60 via-amber-50/20 to-orange-50/40 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-200/60 dark:border-amber-900/30 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span className="text-2xl">🔥</span> Fuentes Más Copiadas Esta Semana
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 font-medium">
            Descubre los estilos tipográficos más populares elegidos por millones de usuarios para sus redes sociales y juegos.
          </p>
        </div>
        <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 self-start sm:self-center shrink-0 border border-amber-300/80 dark:border-amber-800/60 flex items-center gap-1.5 shadow-2xs">
          <span>📊</span> Actualizado Hoy
        </span>
      </div>

      {/* Grid of Trending Font Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TRENDING_ITEMS.map((item) => {
          const isCopied = copiedId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => handleCopy(item.id, item.styledText)}
              className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-amber-400 dark:hover:border-amber-500 transition-all shadow-xs hover:shadow-md cursor-pointer overflow-hidden min-h-[140px]"
            >
              {/* Top Row: Badge + Category */}
              <div className="flex items-center justify-between gap-2 z-10">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300">
                  {item.badge}
                </span>
                <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
                  {item.category}
                </span>
              </div>

              {/* Rendered Font Text */}
              <div className="my-auto py-3 text-center">
                <p className="text-xl sm:text-2xl font-normal text-neutral-900 dark:text-neutral-100 break-words tracking-wide">
                  {item.styledText}
                </p>
              </div>

              {/* Bottom Row: Copies Count + Orange Copy Button */}
              <div className="flex items-center justify-between pt-2.5 border-t border-neutral-100 dark:border-neutral-900 text-xs z-10">
                <span className="text-neutral-500 dark:text-neutral-400 font-medium text-[11px]">
                  <strong className="text-neutral-800 dark:text-neutral-200 font-bold">{item.copiesThisWeek}</strong> copias
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(item.id, item.styledText);
                  }}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs ${
                    isCopied
                      ? "bg-emerald-600 text-white"
                      : "bg-amber-500 hover:bg-amber-600 text-white hover:scale-105 active:scale-95"
                  }`}
                >
                  {isCopied ? "¡Copiado!" : "Copiar"}
                </button>
              </div>

              {/* Copied Toast Overlay */}
              <div
                className={`absolute inset-0 bg-emerald-600/95 flex items-center justify-center text-white font-extrabold text-sm transition-all duration-200 z-20 ${
                  isCopied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
                }`}
              >
                <span>✨ ¡FUENTE COPIADA AL PORTAPAPELES!</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
