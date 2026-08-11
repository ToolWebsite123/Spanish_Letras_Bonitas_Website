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
  // All FAQs are collapsed (hidden) by default
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Generate FAQPage JSON-LD schema for Google SERP
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
      {/* Inject FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
          <span>❓</span> Preguntas Frecuentes
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] flex items-center gap-2.5">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
          Respuestas a las dudas más comunes sobre la conversión de letras, fuentes Unicode y compatibilidad.
        </p>
      </div>

      <div className="flex flex-col gap-3.5 pt-1">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--input-bg)] overflow-hidden transition-all relative hover:border-teal-400/60"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 font-bold text-sm sm:text-base text-[var(--foreground)] flex items-center justify-between gap-3 cursor-pointer hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="flex-1 pr-2">{faq.q}</span>
                <span
                  className={`w-7 h-7 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-extrabold flex items-center justify-center text-xs shrink-0 transition-transform duration-200 border border-teal-500/30 ${
                    isOpen ? "rotate-180 bg-gradient-to-r from-teal-500 to-indigo-600 text-white" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              {isOpen && (
                <div className="p-5 pt-3 text-xs sm:text-sm text-[var(--foreground)] opacity-85 leading-relaxed border-t border-[var(--border-color)] bg-[var(--card-bg)]/90">
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
