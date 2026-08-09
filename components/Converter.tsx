"use client";

import { useState, useMemo, useEffect } from "react";
import { fontStyles } from "@/lib/fontStyles";
import { convertText } from "@/lib/convertText";
import { decorators, Decorator } from "@/lib/decorators";

export interface StyleOverride {
  name?: string;
  category?: string;
}

interface ConverterProps {
  initialCategory?: string;
  highlightStyleId?: string;
  styleOverrides?: Record<string, StyleOverride>;
  filterByHighlightedCategory?: boolean;
}

const CATEGORIES = [
  "Todos",
  "Favoritos",
  "Cursivas",
  "Góticas",
  "Aesthetic",
  "Gaming",
  "Pequeñas",
  "Decoradas",
];

export default function Converter({
  highlightStyleId,
  styleOverrides,
}: ConverterProps) {
  const [inputText, setInputText] = useState("Letras Bonitas");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedDecorator, setSelectedDecorator] = useState<Decorator | null>(null);
  const [fontSize, setFontSize] = useState<number>(22);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("letras_bonitas_favs");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Could not load favorites from localStorage", e);
    }
    setIsLoaded(true);
  }, []);

  // Toggle favorite style
  const toggleFavorite = (styleId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) => {
      const updated = prev.includes(styleId)
        ? prev.filter((id) => id !== styleId)
        : [...prev, styleId];
      try {
        localStorage.setItem("letras_bonitas_favs", JSON.stringify(updated));
      } catch (err) {
        console.error("Could not save favorites to localStorage", err);
      }
      return updated;
    });
  };

  const effectiveStyles = useMemo(() => {
    return styleOverrides
      ? fontStyles.map((style) => {
          const override = styleOverrides[style.id];
          if (!override) return style;
          return {
            ...style,
            name: override.name ?? style.name,
            category: override.category ?? style.category,
          };
        })
      : fontStyles;
  }, [styleOverrides]);

  const filteredStyles = useMemo(() => {
    return effectiveStyles.filter((style) => {
      if (activeCategory === "Favoritos") {
        if (!favorites.includes(style.id)) return false;
      } else if (activeCategory === "Cursivas") {
        const cat = style.category.toLowerCase();
        if (!cat.includes("script") && !cat.includes("cursiva") && !cat.includes("firma")) return false;
      } else if (activeCategory === "Góticas") {
        const cat = style.category.toLowerCase();
        if (!cat.includes("fraktur") && !cat.includes("gótica")) return false;
      } else if (activeCategory === "Aesthetic") {
        const cat = style.category.toLowerCase();
        if (!cat.includes("small") && !cat.includes("matemático") && !cat.includes("especial")) return false;
      } else if (activeCategory === "Gaming") {
        const cat = style.category.toLowerCase();
        if (!cat.includes("sans") && !cat.includes("técnico") && !cat.includes("squared")) return false;
      } else if (activeCategory === "Pequeñas") {
        const cat = style.category.toLowerCase();
        if (!cat.includes("small") && !cat.includes("especial")) return false;
      } else if (activeCategory === "Decoradas") {
        const cat = style.category.toLowerCase();
        if (!cat.includes("circled") && !cat.includes("squared")) return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = style.name.toLowerCase().includes(q);
        const matchesCat = style.category.toLowerCase().includes(q);
        return matchesName || matchesCat;
      }

      return true;
    });
  }, [effectiveStyles, activeCategory, searchQuery, favorites]);

  const featuredStyle = useMemo(() => {
    if (!highlightStyleId) return null;
    return (
      effectiveStyles.find((s) => s.id === highlightStyleId) || effectiveStyles[0]
    );
  }, [highlightStyleId, effectiveStyles]);

  const categoryCards = useMemo(() => {
    if (!featuredStyle) return [];

    const plainCard = {
      id: `${featuredStyle.id}-plain`,
      name: `${featuredStyle.name} (Sin decoración)`,
      decoratorName: "Sin decoración",
      wrap: (t: string) => t,
      isFeatured: true,
    };

    const decCards = decorators.map((dec) => ({
      id: `${featuredStyle.id}-${dec.id}`,
      name: `${featuredStyle.name} con ${dec.name}`,
      decoratorName: dec.name,
      wrap: dec.wrap,
      isFeatured: false,
    }));

    return [plainCard, ...decCards];
  }, [featuredStyle]);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const isCategoryPage = Boolean(highlightStyleId && featuredStyle);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Sleek Input Container in Midnight Orchid */}
      <div className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
        {/* Main Textarea Input */}
        <div className="relative w-full">
          <textarea
            id="text-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe o pega tu texto aquí..."
            rows={3}
            className="w-full p-5 sm:p-6 rounded-2xl border border-purple-900/50 bg-[#231c3d] text-slate-100 placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 shadow-inner text-xl sm:text-3xl font-normal leading-relaxed resize-y transition-all"
          />
          {inputText && (
            <button
              type="button"
              onClick={() => setInputText("")}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-red-400 hover:bg-[#231c3d] transition-colors cursor-pointer"
              title="Borrar texto"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Integrated Control Row (Slider + Decorator + Counter) */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-1 text-xs text-slate-400 font-semibold">
          {/* Font Size Slider */}
          <div className="flex items-center gap-2 flex-1 min-w-[220px] bg-[#231c3d] p-2.5 rounded-xl border border-purple-900/40">
            <span className="text-[11px] font-extrabold text-pink-400 shrink-0">Tamaño</span>
            <span className="text-[10px] text-slate-500 font-bold">A</span>
            <input
              type="range"
              min={14}
              max={36}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-28 sm:w-36 h-2 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-pink-500"
              title="Ajustar tamaño de fuente"
            />
            <span className="text-sm font-bold text-slate-300">A</span>
            <span className="text-[11px] font-mono text-pink-400 font-extrabold ml-1">{fontSize}px</span>
          </div>

          {/* Decorator Selector */}
          <div className="flex items-center gap-2 bg-[#231c3d] p-2.5 rounded-xl border border-purple-900/40 shrink-0">
            <span className="text-[11px] font-bold text-slate-300">Marco:</span>
            <select
              value={selectedDecorator?.id || ""}
              onChange={(e) => {
                const dec = decorators.find((d) => d.id === e.target.value) || null;
                setSelectedDecorator(dec);
              }}
              className="px-3 py-1 rounded-lg text-xs font-bold border border-purple-900/50 bg-[#1b1530] text-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-500/30 cursor-pointer"
            >
              <option value="">Sin marco</option>
              {decorators.map((dec) => (
                <option key={dec.id} value={dec.id}>
                  {dec.name} ({dec.wrap("a").replace("a", "")})
                </option>
              ))}
            </select>
          </div>

          {/* Character & Byte Counter Stat */}
          <div className="flex items-center gap-2 shrink-0 text-[11px]">
            <span className="px-3.5 py-2 rounded-xl bg-[#231c3d] text-slate-300 font-bold border border-purple-900/40">
              {inputText.length} caracteres
            </span>
            <span
              className={`px-3.5 py-2 rounded-xl font-bold border ${
                inputText.length > 12
                  ? "bg-rose-950/80 text-rose-300 border-rose-800"
                  : "bg-emerald-950/80 text-emerald-300 border-emerald-800"
              }`}
            >
              Free Fire (12 max): {inputText.length > 12 ? "⚠️ Excede" : "✓ OK"}
            </span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills & Search Bar */}
      {!isCategoryPage && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === "Favoritos"
                  ? favorites.length
                  : cat === "Todos"
                  ? effectiveStyles.length
                  : null;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4.5 py-2 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white shadow-lg shadow-pink-500/25 scale-105"
                      : "bg-[#1b1530] hover:bg-[#231c3d] text-slate-300 border border-purple-900/40"
                  }`}
                >
                  {cat === "Favoritos" && <span>❤️</span>}
                  <span>{cat}</span>
                  {count !== null && (
                    <span
                      className={`px-2 py-0.3 text-[10px] rounded-full font-black ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-purple-950 text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative shrink-0 sm:w-60">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar estilo o fuente..."
              className="w-full pl-9 pr-4 py-2 rounded-2xl text-xs font-bold border border-purple-900/40 bg-[#1b1530] text-slate-100 placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500"
            />
            <span className="absolute left-3 top-2.5 text-xs text-purple-400">🔍</span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!isCategoryPage && filteredStyles.length === 0 && (
        <div className="text-center py-14 px-6 rounded-3xl border border-dashed border-purple-900/40 bg-[#1b1530]/60 backdrop-blur-md flex flex-col items-center gap-3">
          <span className="text-4xl">{activeCategory === "Favoritos" ? "💔" : "🔎"}</span>
          <h3 className="font-extrabold text-base text-slate-200">
            {activeCategory === "Favoritos"
              ? "No tienes fuentes guardadas en Favoritos"
              : "No se encontraron fuentes con ese criterio"}
          </h3>
          <p className="text-xs text-slate-400 max-w-sm">
            {activeCategory === "Favoritos"
              ? "Haz clic en el corazón (❤️) de cualquier tarjeta de fuente para tenerla siempre guardada."
              : "Prueba buscando otra palabra clave o haz clic en 'Todos'."}
          </p>
        </div>
      )}

      {/* Font Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {!isCategoryPage
          ? filteredStyles.map((style) => {
              const rawStyledText = convertText(
                inputText || "Escribe tu texto arriba",
                style.map,
                style.id
              );
              const styledText = selectedDecorator
                ? selectedDecorator.wrap(rawStyledText)
                : rawStyledText;
              const isCopied = copiedId === style.id;
              const isFav = isLoaded && favorites.includes(style.id);

              return (
                <div
                  key={style.id}
                  onClick={() => handleCopy(style.id, styledText)}
                  className="group relative flex flex-col justify-between gap-3 p-5 sm:p-6 rounded-3xl border border-purple-900/40 bg-[#1b1530] hover:border-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden min-h-[130px]"
                >
                  {/* Top Bar: Font Name + Heart Icon */}
                  <div className="flex items-center justify-between gap-2 z-10">
                    <span className="text-xs font-extrabold text-slate-400 group-hover:text-pink-400 transition-colors">
                      {style.name}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(style.id, e)}
                      className={`p-1 text-base transition-transform hover:scale-125 cursor-pointer ${
                        isFav ? "text-pink-500 opacity-100" : "text-slate-600 hover:text-pink-400"
                      }`}
                      title={isFav ? "Quitar de favoritos" : "Guardar en favoritos"}
                    >
                      {isFav ? "❤️" : "🤍"}
                    </button>
                  </div>

                  {/* Center Converted Text Output */}
                  <div className="my-auto py-2 text-center">
                    <p
                      className="text-slate-100 break-words font-normal leading-tight transition-all"
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      {styledText}
                    </p>
                  </div>

                  {/* Bottom Action Hint */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 z-10">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-pink-400 font-bold">
                      Toca para copiar
                    </span>
                    <span className="text-[11px] font-bold text-pink-400 group-hover:underline flex items-center gap-1.5">
                      <span>Copiar</span>
                      <span>📋</span>
                    </span>
                  </div>

                  {/* Copied Toast Overlay Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 flex items-center justify-center text-white font-black text-base tracking-wide transition-all duration-200 z-20 ${
                      isCopied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
                    }`}
                  >
                    <span>✨ ¡TEXTO COPIADO!</span>
                  </div>
                </div>
              );
            })
          : featuredStyle &&
            categoryCards.map((card) => {
              const rawStyledText = convertText(
                inputText || "Escribe tu texto arriba",
                featuredStyle.map,
                featuredStyle.id
              );
              const styledText = card.wrap(rawStyledText);
              const isCopied = copiedId === card.id;

              return (
                <div
                  key={card.id}
                  onClick={() => handleCopy(card.id, styledText)}
                  className={`group relative flex flex-col justify-between gap-3 p-5 sm:p-6 rounded-3xl border transition-all duration-200 cursor-pointer overflow-hidden min-h-[130px] ${
                    card.isFeatured
                      ? "border-2 border-pink-500 bg-pink-950/30 shadow-xl shadow-pink-500/10"
                      : "border border-purple-900/40 bg-[#1b1530]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 z-10">
                    <span className="text-xs font-extrabold text-slate-300">
                      {card.name}
                    </span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-purple-950 text-purple-300">
                      {card.decoratorName}
                    </span>
                  </div>

                  <div className="my-auto py-2 text-center">
                    <p
                      className="text-slate-100 break-words font-normal leading-tight"
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      {styledText}
                    </p>
                  </div>

                  <div className="flex justify-end pt-1 z-10">
                    <span className="text-[11px] font-bold text-pink-400">
                      Copiar 📋
                    </span>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 flex items-center justify-center text-white font-black text-base tracking-wide transition-all duration-200 z-20 ${
                      isCopied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
                    }`}
                  >
                    <span>✨ ¡TEXTO COPIADO!</span>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
