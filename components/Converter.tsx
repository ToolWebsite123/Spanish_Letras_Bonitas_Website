"use client";

import { useState, useMemo } from "react";
import { fontStyles, FontStyle } from "@/lib/fontStyles";
import { convertText } from "@/lib/convertText";
import { decorators, Decorator } from "@/lib/decorators";
import { CategoryNav } from "@/components/NavBar";

export interface StyleOverride {
  name?: string;
  category?: string;
}

interface ConverterProps {
  initialCategory?: string;
  highlightStyleId?: string;
  styleOverrides?: Record<string, StyleOverride>;
  filterByHighlightedCategory?: boolean;
  showCategoryNav?: boolean;
}

export interface StyleCombination {
  id: string;
  name: string;
  baseStyle: FontStyle;
  decorator: Decorator | null;
}

export default function Converter({
  highlightStyleId,
  styleOverrides,
  showCategoryNav = false,
}: ConverterProps) {
  const [inputText, setInputText] = useState("Letras Bonitas");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedDecorator, setSelectedDecorator] = useState<Decorator | null>(null);
  const [fontSize, setFontSize] = useState<number>(18);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(40);

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

  // Combine every base font style with every decorator (plus 1 plain version)
  const allCombinations = useMemo(() => {
    const list: StyleCombination[] = [];

    effectiveStyles.forEach((style) => {
      // 1. Plain base style
      list.push({
        id: `${style.id}-plain`,
        name: style.name,
        baseStyle: style,
        decorator: null,
      });

      // 2. Base style + each decorator frame
      decorators.forEach((dec) => {
        list.push({
          id: `${style.id}-${dec.id}`,
          name: `${style.name} + ${dec.name}`,
          baseStyle: style,
          decorator: dec,
        });
      });
    });

    return list;
  }, [effectiveStyles]);

  const filteredCombinations = useMemo(() => {
    if (!searchQuery.trim()) return allCombinations;

    const q = searchQuery.toLowerCase();
    return allCombinations.filter((combo) => {
      const nameMatch = combo.name.toLowerCase().includes(q);
      const catMatch = combo.baseStyle.category.toLowerCase().includes(q);
      return nameMatch || catMatch;
    });
  }, [allCombinations, searchQuery]);

  const displayedCombinations = useMemo(() => {
    return filteredCombinations.slice(0, visibleCount);
  }, [filteredCombinations, visibleCount]);

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(40);
  };

  const isCategoryPage = Boolean(highlightStyleId && featuredStyle);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Sleek Input Container */}
      <div className="flex flex-col gap-3 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
        {/* Main Textarea Input */}
        <div className="relative w-full">
          <textarea
            id="text-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe o pega tu texto aquí..."
            rows={2}
            className="w-full p-3.5 sm:p-4 pr-10 sm:pr-12 rounded-xl sm:rounded-2xl border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--foreground)] placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 shadow-inner text-base sm:text-xl font-normal leading-normal resize-y transition-all"
          />
          {inputText && (
            <button
              type="button"
              onClick={() => setInputText("")}
              className="absolute top-3 right-3 p-1.5 rounded-full text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-red-400 hover:bg-[var(--input-bg)] transition-colors cursor-pointer"
              title="Borrar texto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Integrated Control Row (Slider + Decorator + Counter) */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-1 text-xs text-[var(--foreground)] opacity-80 font-semibold">
          {/* Font Size Slider */}
          <div className="flex items-center gap-2 flex-1 min-w-[220px] bg-[var(--input-bg)] p-2.5 rounded-xl border border-[var(--border-color)]">
            <span className="text-[11px] font-extrabold text-teal-600 dark:text-teal-400 shrink-0">Tamaño</span>
            <span className="text-[10px] opacity-60 font-bold">A</span>
            <input
              type="range"
              min={12}
              max={32}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-28 sm:w-36 h-2 bg-[var(--card-bg)] rounded-lg appearance-none cursor-pointer accent-teal-400"
              title="Ajustar tamaño de fuente"
            />
            <span className="text-sm font-bold text-[var(--foreground)]">A</span>
            <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-extrabold ml-1">{fontSize}px</span>
          </div>

          {/* Decorator Selector */}
          <div className="flex items-center gap-2 bg-[var(--input-bg)] p-2.5 rounded-xl border border-[var(--border-color)] shrink-0">
            <span className="text-[11px] font-bold text-[var(--foreground)] opacity-80">Marco:</span>
            <select
              value={selectedDecorator?.id || ""}
              onChange={(e) => {
                const dec = decorators.find((d) => d.id === e.target.value) || null;
                setSelectedDecorator(dec);
              }}
              className="px-3 py-1 rounded-lg text-xs font-bold border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-teal-500/30 cursor-pointer"
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
            <span className="px-3.5 py-2 rounded-xl bg-[var(--input-bg)] text-[var(--foreground)] opacity-90 font-bold border border-[var(--border-color)]">
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

      {/* Category Pills Filter Bar */}
      {showCategoryNav && <CategoryNav />}

      {/* Search Bar & Total Combinations Counter */}
      {!isCategoryPage && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 w-full p-2.5 sm:p-3 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-xl shadow-lg shadow-purple-950/10">
          <div className="text-xs font-bold text-[var(--foreground)] opacity-90 flex items-center gap-2 px-1">
            <span className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-500/15 via-emerald-500/15 to-indigo-500/15 text-teal-600 dark:text-teal-400 border border-teal-500/30 font-extrabold flex items-center gap-1.5 shadow-sm">
              <span>✨</span> {allCombinations.length}+ Estilos Combinados
            </span>
            <span className="hidden md:inline opacity-60 font-medium">— Buscador instantáneo</span>
          </div>

          <div className="relative w-full sm:w-80 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-teal-600 dark:text-teal-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Buscar estilo o marco (ej. Cursiva, Corazones)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl text-xs font-bold border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-400 shadow-inner transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setVisibleCount(40);
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-rose-400 transition-colors cursor-pointer"
                title="Limpiar búsqueda"
              >
                <div className="w-5 h-5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center text-[10px] font-bold">
                  ✕
                </div>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!isCategoryPage && filteredCombinations.length === 0 && (
        <div className="text-center py-14 px-6 rounded-3xl border border-dashed border-[var(--border-color)] bg-[var(--card-bg)]/60 backdrop-blur-md flex flex-col items-center gap-3">
          <span className="text-4xl">🔎</span>
          <h3 className="font-extrabold text-base text-[var(--foreground)]">
            No se encontraron fuentes con ese criterio
          </h3>
          <p className="text-xs text-[var(--foreground)] opacity-70 max-w-sm">
            Prueba buscando otra palabra clave o borra el texto del buscador.
          </p>
        </div>
      )}

      {/* Font Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5">
        {!isCategoryPage
          ? displayedCombinations.map((combo) => {
              const rawStyledText = convertText(
                inputText || "Escribe tu texto arriba",
                combo.baseStyle.map,
                combo.baseStyle.id
              );
              const styledText = selectedDecorator
                ? selectedDecorator.wrap(rawStyledText)
                : combo.decorator
                ? combo.decorator.wrap(rawStyledText)
                : rawStyledText;
              const isCopied = copiedId === combo.id;

              return (
                <div
                  key={combo.id}
                  onClick={() => handleCopy(combo.id, styledText)}
                  className="group relative flex flex-col justify-between gap-2 p-3 sm:p-4.5 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-teal-400/60 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer overflow-hidden min-h-[105px] sm:min-h-[115px]"
                >
                  {/* Top Bar: Font Name */}
                  <div className="flex items-center justify-between gap-1.5 z-10">
                    <span className="text-[11px] sm:text-xs font-extrabold text-[var(--foreground)] opacity-80 group-hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors truncate">
                      {combo.name}
                    </span>
                  </div>

                  {/* Center Converted Text Output */}
                  <div className="my-auto py-1 text-center overflow-hidden">
                    <p
                      className="text-[var(--foreground)] break-words font-normal leading-tight transition-all"
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      {styledText}
                    </p>
                  </div>

                  {/* Bottom Action Hint */}
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[var(--foreground)] opacity-60 pt-0.5 z-10">
                    <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity text-teal-600 dark:text-teal-400 font-bold">
                      Toca para copiar
                    </span>
                    <span className="ml-auto px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold border border-teal-500/20 group-hover:bg-teal-500 group-hover:text-white transition-all flex items-center gap-1 shrink-0">
                      <span>Copiar</span>
                      <span className="text-[9px] sm:text-[10px]">📋</span>
                    </span>
                  </div>

                  {/* Copied Toast Overlay Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-indigo-600 flex items-center justify-center text-white font-black text-xs sm:text-sm tracking-wide transition-all duration-200 z-20 ${
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
              const styledText = selectedDecorator
                ? selectedDecorator.wrap(card.wrap(rawStyledText))
                : card.wrap(rawStyledText);
              const isCopied = copiedId === card.id;
              const isCardFeatured =
                card.isFeatured ||
                Boolean(selectedDecorator && card.id.endsWith(`-${selectedDecorator.id}`));

              return (
                <div
                  key={card.id}
                  onClick={() => handleCopy(card.id, styledText)}
                  className={`group relative flex flex-col justify-between gap-2 p-3 sm:p-4.5 rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden min-h-[105px] sm:min-h-[115px] ${
                    isCardFeatured
                      ? "border-2 border-teal-400 bg-teal-950/30 shadow-xl shadow-teal-500/10"
                      : "border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-teal-400/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1.5 z-10">
                    <span className="text-[11px] sm:text-xs font-extrabold text-[var(--foreground)] opacity-90 truncate">
                      {card.name}
                    </span>
                    <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-bold bg-[var(--input-bg)] text-teal-600 dark:text-teal-400 border border-[var(--border-color)] shrink-0">
                      {card.decoratorName}
                    </span>
                  </div>

                  <div className="my-auto py-1 text-center overflow-hidden">
                    <p
                      className="text-[var(--foreground)] break-words font-normal leading-tight"
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      {styledText}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] pt-0.5 z-10">
                    <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity text-teal-600 dark:text-teal-400 font-bold">
                      Toca para copiar
                    </span>
                    <span className="ml-auto px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold border border-teal-500/20 group-hover:bg-teal-500 group-hover:text-white transition-all flex items-center gap-1 shrink-0">
                      <span>Copiar</span>
                      <span className="text-[9px] sm:text-[10px]">📋</span>
                    </span>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-indigo-600 flex items-center justify-center text-white font-black text-xs sm:text-sm tracking-wide transition-all duration-200 z-20 ${
                      isCopied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
                    }`}
                  >
                    <span>✨ ¡TEXTO COPIADO!</span>
                  </div>
                </div>
              );
            })}
      </div>

      {/* Load More Button for Pagination */}
      {!isCategoryPage && visibleCount < filteredCombinations.length && (
        <div className="flex flex-col items-center gap-2 pt-4">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 40)}
            className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold bg-gradient-to-r from-teal-500 via-emerald-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white shadow-xl shadow-teal-500/20 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Cargar más estilos</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-black">
              ({displayedCombinations.length} de {filteredCombinations.length})
            </span>
          </button>
          <span className="text-[11px] font-medium text-[var(--foreground)] opacity-60">
            Mostrando {displayedCombinations.length} de {filteredCombinations.length} combinaciones disponibles
          </span>
        </div>
      )}
    </div>
  );
}
