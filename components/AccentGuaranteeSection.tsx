interface AccentPair {
  accented: string;
  exampleWord: string;
}

const ACCENT_SAMPLES: AccentPair[] = [
  { accented: "á, é, í, ó, ú", exampleWord: "𝓒𝓸𝓻𝓪𝔃ó𝓷" },
  { accented: "ñ (Minúscula)", exampleWord: "𝓝𝓲ñ𝓸" },
  { accented: "Ñ (Mayúscula)", exampleWord: "𝓔𝓼𝓹𝓪ñ𝓪" },
  { accented: "ç / Ç", exampleWord: "𝓒𝓸𝓻𝓪çã𝓸" },
];

export default function AccentGuaranteeSection() {
  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs border border-emerald-500/30">
          <span>✅</span> 100% Compatibilidad en Español
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-2.5">
          Garantía Anti-Errores para Acentos y Tildes (á, é, í, ó, ú, ñ, ç)
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
          A diferencia de herramientas anglosajonas que rompen palabras como "Corazón" o "España", nuestro conversor integra un motor adaptado para el idioma español que preserva la ortografía exacta.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
        {ACCENT_SAMPLES.map((sample, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-2 hover:border-pink-500/60 transition-colors"
          >
            <span className="text-xs font-black text-pink-400">
              {sample.accented}
            </span>
            <span className="text-lg font-normal text-slate-100 font-mono pt-1">
              {sample.exampleWord}
            </span>
            <span className="text-[10px] font-bold text-emerald-400 pt-1">
              ✓ Rendimiento Correcto
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
