"use client";

interface AccentExample {
  original: string;
  othersOutput: string;
  ourOutput: string;
  styleName: string;
}

const ACCENT_EXAMPLES: AccentExample[] = [
  {
    original: "Corazón",
    othersOutput: "Corazon (Sin ó ni acento)",
    ourOutput: "𝓒𝓸𝓻𝓪𝔃ó𝓷",
    styleName: "Cursiva Elegante",
  },
  {
    original: "São Paulo",
    othersOutput: "Sao Paulo (Pierde ã)",
    ourOutput: "𝓢ã𝓸 𝓟𝓪𝓾𝓵𝓸",
    styleName: "Bold Script",
  },
  {
    original: "España",
    othersOutput: "Espana (Falla la ñ)",
    ourOutput: "𝔈𝔰𝔭𝔞ñ𝔞",
    styleName: "Gótica Fraktur",
  },
  {
    original: "Información",
    othersOutput: "Informacion (Rompe acento)",
    ourOutput: "ɪɴғᴏʀᴍᴀᴄɪóɴ",
    styleName: "Small Aesthetic",
  },
  {
    original: "Correção",
    othersOutput: "Correcao (Falla ç y ã)",
    ourOutput: "ℂ𝕠𝕣𝕣𝕖çã𝕠",
    styleName: "Outline Double-Struck",
  },
  {
    original: "Niño",
    othersOutput: "Nino (Sin ñ)",
    ourOutput: "🅽🅸Ñ🅾",
    styleName: "Bold Squares",
  },
];

export default function AccentGuaranteeSection() {
  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-9 rounded-3xl border border-emerald-200/90 dark:border-emerald-900/40 bg-emerald-50/30 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-200/60 dark:border-emerald-900/30 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span className="text-2xl">🌐</span> Soporte 100% Garantizado para Ñ, Ç y Acentos
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 font-medium leading-relaxed">
            La mayoría de los conversores web están diseñados solo para inglés y rompen las palabras con acentos. Nuestro motor los convierte a la perfección.
          </p>
        </div>
        <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 shrink-0 border border-emerald-300/80 dark:border-emerald-800/60 flex items-center gap-1 shadow-2xs">
          <span>✓</span> Acentos Optimizados
        </span>
      </div>

      {/* Comparison Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ACCENT_EXAMPLES.map((item) => (
          <div
            key={item.original}
            className="flex flex-col gap-3 p-4 sm:p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900 pb-2.5">
              <span className="text-xs font-extrabold text-neutral-800 dark:text-neutral-200">
                Palabra: <strong className="text-purple-600 dark:text-purple-400">{item.original}</strong>
              </span>
              <span className="text-[10px] font-semibold text-neutral-400">
                {item.styleName}
              </span>
            </div>

            {/* Comparison Boxes */}
            <div className="flex flex-col gap-2 text-xs">
              {/* Red Broken Box */}
              <div className="p-2.5 rounded-xl bg-red-50/80 dark:bg-red-950/30 text-red-700 dark:text-red-300 border border-red-200/60 dark:border-red-900/40 flex items-center justify-between">
                <span className="font-semibold text-[11px]">Otros generadores:</span>
                <span className="line-through font-mono font-medium">{item.othersOutput}</span>
              </div>

              {/* Green Converter Box */}
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-between">
                <span className="font-bold text-[11px]">Nuestro conversor:</span>
                <span className="font-bold text-base text-neutral-900 dark:text-neutral-50 tracking-wide">{item.ourOutput}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Info Pill */}
      <div className="p-3.5 rounded-2xl bg-emerald-100/60 dark:bg-emerald-950/40 text-xs text-emerald-900 dark:text-emerald-200 text-center font-semibold border border-emerald-200/60 dark:border-emerald-900/40 shadow-2xs">
        💡 Funciona perfecto con: <strong>á, é, í, ó, ú, ñ, ç, ã, õ, â, ê, ô, À, É, Í, Ó, Ú, Ñ, Ç</strong>
      </div>
    </section>
  );
}
