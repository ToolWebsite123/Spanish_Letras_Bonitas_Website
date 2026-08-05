import React from "react";

const unicodeExamples = [
  { normal: "A", unicode: "𝒜  /  Ａ  /  𝔄  /  𝐀  /  𝔸" },
  { normal: "B", unicode: "ℬ  /  Ｂ  /  𝔅  /  𝐁  /  𝔹" },
  { normal: "Texto", unicode: "𝒯ℯ𝓍𝓉ℴ  /  Ｔｅｘｔｏ  /  mathcal𝔗𝔢𝔭𝔱𝔬  /  𝐓𝐞𝐱𝐭𝐨" },
];

export default function HowItWorksSection() {
  return (
    <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        Cómo Funciona el Generador de Letras
      </h2>

      <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
        Nuestro convertidor transforma las letras normales de tu teclado en caracteres Unicode especiales que imitan visualmente distintas tipografías y fuentes decorativas. Unicode es el sistema estándar mundial de codificación de caracteres utilizado por computadoras, teléfonos móviles y sitios web. Cuenta con más de 100,000 caracteres que incluyen símbolos matemáticos, alfabetos históricos y glifos especiales.
      </p>

      {/* Unicode Reference Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
              <th className="py-3 px-4 w-1/3">Fuente Normal</th>
              <th className="py-3 px-4 w-2/3">Variantes Unicode</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-sm text-neutral-700 dark:text-neutral-300">
            {unicodeExamples.map((item) => (
              <tr
                key={item.normal}
                className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors"
              >
                <td className="py-3.5 px-4 font-semibold text-purple-600 dark:text-purple-400">
                  {item.normal}
                </td>
                <td className="py-3.5 px-4 font-mono text-base text-neutral-900 dark:text-neutral-100">
                  {item.unicode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note / Callout */}
      <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 flex items-start gap-3">
        <svg
          className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-xs sm:text-sm text-purple-900 dark:text-purple-200 leading-relaxed">
          <strong className="font-semibold">Nota importante:</strong> Estos caracteres no son archivos de fuentes verdaderos (.ttf/.otf), sino símbolos del mapa Unicode. Por esta razón, se pueden copiar y pegar en cualquier lugar que acepte texto sin necesidad de instalar nada. Sin embargo, algunos dispositivos muy antiguos o sistemas sin soporte Unicode actualizado pueden mostrar casillas vacías o [?] en lugar del glifo.
        </p>
      </div>
    </section>
  );
}
