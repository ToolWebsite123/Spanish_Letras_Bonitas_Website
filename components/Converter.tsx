"use client";

import { useState, useMemo } from "react";
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
  highlightStyleId,
  styleOverrides,
}: ConverterProps) {
  const [inputText, setInputText] = useState("Letras Bonitas");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedDecorator, setSelectedDecorator] = useState<Decorator | null>(null);

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
    <div className="w-full flex flex-col gap-6">
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
            className="w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 shadow-xs resize-y text-base sm:text-lg"
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

      {/* Decorators Selection Bar & Combinations Counter Badge (Single Control Above Grid) */}
      <div className="flex flex-col gap-2 p-3 sm:p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800">
        <div className="flex items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
            <span>Decoraciones (Opcional):</span>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200/50 dark:border-purple-800/40">
            {effectiveStyles.length} estilos × {decorators.length} decoraciones = {effectiveStyles.length * decorators.length}+ combinaciones
          </span>
        </div>

        {/* Scrollable Decorator Chips Container */}
        <div className="w-full min-w-0 flex items-center gap-1.5 overflow-x-auto py-1 px-0.5 touch-pan-x">
          <button
            type="button"
            onClick={() => setSelectedDecorator(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer ${
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
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1 ${
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

      {/* Live-Updating Results Section (Responsive 3-Column Grid displaying all styles) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {effectiveStyles.map((style) => {
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
              className={`flex flex-col justify-between gap-3 p-4 rounded-xl shadow-xs transition-colors ${
                isHighlighted
                  ? "border border-purple-300 dark:border-purple-800/60 bg-purple-50/50 dark:bg-purple-950/30 ring-1 ring-purple-400/30 dark:ring-purple-700/30"
                  : "border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 flex items-center gap-1 cursor-pointer ${
                    isCopied
                      ? "bg-green-600 text-white shadow-xs"
                      : "bg-purple-600 hover:bg-purple-700 text-white shadow-xs active:scale-95"
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

