"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  title?: string;
  faqs: FaqItem[];
}

export default function FaqSection({
  title = "Preguntas Frecuentes",
  faqs,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative z-0 flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/30 overflow-hidden transition-all relative"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-4 font-semibold text-base sm:text-lg text-neutral-800 dark:text-neutral-200 flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="flex-1 pr-2">{faq.q}</span>
                <span
                  className={`w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 font-bold flex items-center justify-center text-xs shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              {isOpen && (
                <div className="p-4 pt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200/60 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/30">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
