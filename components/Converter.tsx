"use client";

import { useState, useMemo, useRef, useEffect } from "react";
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
}

export default function Converter({
  initialCategory = "All",
  highlightStyleId,
  styleOverrides,
}: ConverterProps) {
  const [inputText, setInputText] = useState("Letras Bonitas");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(
    highlightStyleId ? "All" : initialCategory
  );
  const [isMixEnabled, setIsMixEnabled] = useState(false);
  const [selectedDecorator, setSelectedDecorator] = useState<Decorator | null>(null);

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Apply per-page style overrides if provided and move highlightStyleId to first position
  const effectiveStyles = useMemo(() => {
    let styles = styleOverrides
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

    if (highlightStyleId) {
      const highlighted = styles.find((s) => s.id === highlightStyleId);
      if (highlighted) {
        styles = [highlighted, ...styles.filter((s) => s.id !== highlightStyleId)];
      }
    }
    return styles;
  }, [styleOverrides, highlightStyleId]);

  // Extract unique categories dynamically from effectiveStyles
  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(effectiveStyles.map((style) => style.category))),
    ];
  }, [effectiveStyles]);

  // Filter font styles based on selected category
  const filteredStyles = useMemo(() => {
    if (selectedCategory === "All") return effectiveStyles;
    return effectiveStyles.filter((style) => style.category === selectedCategory);
  }, [selectedCategory, effectiveStyles]);

  // Exclude 'invisible' and 'reverse' styles from the random mix pool
  const mixableStyles = useMemo(() => {
    return effectiveStyles.filter(
      (style) => style.id !== "invisible" && style.id !== "reverse"
    );
  }, [effectiveStyles]);

  // Recalculates whenever inputText or isMixEnabled changes
  const mixedText = useMemo(() => {
    if (!isMixEnabled || mixableStyles.length < 2) return "";

    // Pick 2 random distinct styles from mixableStyles
    const idx1 = Math.floor(Math.random() * mixableStyles.length);
    let idx2 = Math.floor(Math.random() * mixableStyles.length);
    while (idx2 === idx1 && mixableStyles.length > 1) {
      idx2 = Math.floor(Math.random() * mixableStyles.length);
    }

    const style1 = mixableStyles[idx1];
    const style2 = mixableStyles[idx2];

    const textToConvert = inputText || "Escribe tu texto arriba";

    // Alternate characters between the 2 styles
    return Array.from(textToConvert)
      .map((char, index) => {
        const activeMap = index % 2 === 0 ? style1.map : style2.map;
        return activeMap[char] ?? char;
      })
      .join("");
  }, [inputText, isMixEnabled, mixableStyles]);

  // Track scroll position and updates scroll progress bar & button states
  const handleScroll = () => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft < maxScroll - 2);

    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    } else {
      setScrollProgress(100);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, [categories]);

  const scrollTabs = (direction: "left" | "right") => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -220 : 220;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 p-4 sm:p-6">
      {/* Textarea Input Section */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="text-input"
          className="text-sm font-semibold text-neutral-700 dark:text-neutral-300"
        >
          Escribe tu texto aquí:
        </label>
        <div className="relative">
          <textarea
            id="text-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe algo bonito..."
            rows={3}
            className="w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 shadow-sm resize-y transition-all text-lg"
          />
          {inputText && (
            <button
              type="button"
              onClick={() => setInputText("")}
              className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors font-medium cursor-pointer"
              title="Borrar texto"
            >
              Borrar
            </button>
          )}
        </div>
      </div>

      {/* Control Bar: Scrollable Category Carousel & Mix Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Filter Bar Carousel */}
        <div className="flex-1 min-w-0 flex flex-col gap-1.5">
          <div className="relative flex items-center gap-1.5">
            {/* Scroll Left Button */}
            <button
              type="button"
              onClick={() => scrollTabs("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors shrink-0 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Horizontal Scrollable Tabs Container */}
            <div
              ref={tabsContainerRef}
              onScroll={handleScroll}
              className="flex items-center gap-2 overflow-x-auto scroll-smooth py-1 px-0.5 flex-1 min-w-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white shadow-sm"
                      : "bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Scroll Right Button */}
            <button
              type="button"
              onClick={() => scrollTabs("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors shrink-0 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thin Progress / Scroll Indicator Bar */}
          <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-600 rounded-full transition-all duration-150"
              style={{ width: `${Math.max(10, Math.min(100, scrollProgress))}%` }}
            />
          </div>
        </div>

        {/* Mix Styles Toggle Switch (positioned to the right) */}
        <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center">
          <label
            htmlFor="mix-toggle"
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer select-none"
          >
            Mix styles
          </label>
          <button
            id="mix-toggle"
            type="button"
            role="switch"
            aria-checked={isMixEnabled}
            onClick={() => setIsMixEnabled((prev) => !prev)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
              isMixEnabled ? "bg-purple-600" : "bg-neutral-200 dark:bg-neutral-700"
            }`}
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                isMixEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Decorators Selection Bar & Combinations Counter Badge */}
      <div className="flex flex-col gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800">
        <div className="flex items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
            <span>Decoraciones (Opcional):</span>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200/50 dark:border-purple-800/40">
            {effectiveStyles.length} estilos × {decorators.length} decoraciones = {effectiveStyles.length * decorators.length}+ combinaciones
          </span>
        </div>

        {/* Scrollable Decorator Chips Container */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 px-0.5">
          <button
            type="button"
            onClick={() => setSelectedDecorator(null)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              selectedDecorator === null
                ? "bg-purple-600 text-white shadow-xs"
                : "bg-white hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
            }`}
          >
            Sin decoración
          </button>
          {decorators.map((dec) => {
            const isSelected = selectedDecorator?.id === dec.id;
            return (
              <button
                key={dec.id}
                type="button"
                onClick={() =>
                  setSelectedDecorator((prev) => (prev?.id === dec.id ? null : dec))
                }
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1 ${
                  isSelected
                    ? "bg-purple-600 text-white shadow-xs scale-105"
                    : "bg-white hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                }`}
              >
                <span>{dec.name}</span>
                <span className="opacity-75">{dec.wrap("a").replace("a", "")}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live-Updating Results Section (Responsive 3-Column Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Extra "Mezcla" Result Card when Mix styles is enabled */}
        {isMixEnabled && (() => {
          const displayMixedText = selectedDecorator
            ? selectedDecorator.wrap(mixedText)
            : mixedText;
          return (
            <div
              key="mix"
              className="col-span-full flex flex-col justify-between gap-3 p-4 rounded-xl border border-purple-300 dark:border-purple-800/60 bg-purple-50/50 dark:bg-purple-950/30 backdrop-blur-sm shadow-xs hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-purple-900 dark:text-purple-200">
                    Mezcla
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-200/60 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300 font-medium">
                    Mix
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("mix", displayMixedText)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 shrink-0 flex items-center gap-1 cursor-pointer ${
                    copiedId === "mix"
                      ? "bg-green-600 text-white shadow-xs scale-105"
                      : "bg-purple-600 hover:bg-purple-700 text-white shadow-xs hover:shadow-xs active:scale-95"
                  }`}
                >
                  {copiedId === "mix" ? (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-lg sm:text-xl text-neutral-900 dark:text-neutral-50 break-words select-all font-normal">
                {displayMixedText}
              </p>
            </div>
          );
        })()}

        {/* Style Grid Cards */}
        {filteredStyles.map((style) => {
          const rawStyledText = convertText(
            inputText || "Escribe tu texto arriba",
            style.map,
            style.id
          );
          const styledText = selectedDecorator
            ? selectedDecorator.wrap(rawStyledText)
            : rawStyledText;
          const isCopied = copiedId === style.id;
          const isHighlighted = style.id === highlightStyleId;

          return (
            <div
              key={style.id}
              className={`flex flex-col justify-between gap-3 p-4 rounded-xl backdrop-blur-sm shadow-xs hover:shadow-sm transition-all ${
                isHighlighted
                  ? "border border-purple-300 dark:border-purple-800/60 bg-purple-50/50 dark:bg-purple-950/30 ring-1 ring-purple-400/30 dark:ring-purple-700/30"
                  : "border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60"
              }`}
            >
              {/* Card Header: Style Name + Category Tag */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`font-semibold text-sm truncate ${
                    isHighlighted
                      ? "text-purple-900 dark:text-purple-200"
                      : "text-neutral-800 dark:text-neutral-200"
                  }`}
                >
                  {style.name}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${
                    isHighlighted
                      ? "bg-purple-200/80 dark:bg-purple-900/80 text-purple-800 dark:text-purple-200 font-semibold"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  {style.category}
                </span>
              </div>

              {/* Card Body: Styled Output Text */}
              <p className="text-lg sm:text-xl text-neutral-900 dark:text-neutral-50 break-words select-all font-normal min-h-[2.5rem] flex items-center">
                {styledText}
              </p>

              {/* Card Footer: Corner Copy Button */}
              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={() => handleCopy(style.id, styledText)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 shrink-0 flex items-center gap-1 cursor-pointer ${
                    isCopied
                      ? "bg-green-600 text-white shadow-xs scale-105"
                      : "bg-purple-600 hover:bg-purple-700 text-white shadow-xs hover:shadow-xs active:scale-95"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
