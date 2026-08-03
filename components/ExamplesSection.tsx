"use client";

import { useState } from "react";

export interface ExampleItem {
  persona: string;
  text: string;
}

interface ExamplesSectionProps {
  title?: string;
  examples: ExampleItem[];
}

export default function ExamplesSection({
  title = "Ejemplos Listos para Copiar",
  examples,
}: ExamplesSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (index: number, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex((current) => (current === index ? null : current));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy example text: ", err);
    }
  };

  return (
    <section className="relative z-0 flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {examples.map((ex, i) => {
          const isCopied = copiedIndex === i;
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 relative overflow-hidden"
            >
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                  {ex.persona}
                </span>
                <p className="text-lg text-neutral-900 dark:text-neutral-100 font-normal select-all break-words">
                  {ex.text}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(i, ex.text)}
                className={`self-start sm:self-center px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  isCopied
                    ? "bg-green-600 text-white shadow-sm scale-105"
                    : "bg-purple-600 hover:bg-purple-700 text-white shadow-sm hover:shadow active:scale-95"
                }`}
              >
                {isCopied ? (
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
          );
        })}
      </div>
    </section>
  );
}
