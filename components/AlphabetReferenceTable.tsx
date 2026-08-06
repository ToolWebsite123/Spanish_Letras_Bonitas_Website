import fontStyles from "@/lib/fontStyles";
import { convertText } from "@/lib/convertText";

interface AlphabetReferenceTableProps {
  styleId: string;
}

export default function AlphabetReferenceTable({ styleId }: AlphabetReferenceTableProps) {
  const targetStyle = fontStyles.find((s) => s.id === styleId) || fontStyles[0];

  const upperLetters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((char) => ({
    normal: char,
    styled: convertText(char, targetStyle.map, targetStyle.id),
  }));

  const lowerLetters = Array.from("abcdefghijklmnopqrstuvwxyz").map((char) => ({
    normal: char,
    styled: convertText(char, targetStyle.map, targetStyle.id),
  }));

  return (
    <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          <span>🔤</span> Tabla del Abecedario ({targetStyle.name})
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Consulta la equivalencia de cada letra del alfabeto de la A a la Z (mayúsculas y minúsculas) en el estilo {targetStyle.name}:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Uppercase Column */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-800 pb-2">
            Mayúsculas (A - Z)
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-semibold text-xs uppercase tracking-wider text-neutral-400">Letra Normal</div>
            <div className="font-semibold text-xs uppercase tracking-wider text-neutral-400">Versión Estilizada</div>
            {upperLetters.map((item) => (
              <div key={`upper-${item.normal}`} className="contents">
                <span className="font-mono text-neutral-600 dark:text-neutral-400">{item.normal}</span>
                <span className="font-mono font-bold text-purple-600 dark:text-purple-400 select-all">{item.styled}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lowercase Column */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-800 pb-2">
            Minúsculas (a - z)
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-semibold text-xs uppercase tracking-wider text-neutral-400">Letra Normal</div>
            <div className="font-semibold text-xs uppercase tracking-wider text-neutral-400">Versión Estilizada</div>
            {lowerLetters.map((item) => (
              <div key={`lower-${item.normal}`} className="contents">
                <span className="font-mono text-neutral-600 dark:text-neutral-400">{item.normal}</span>
                <span className="font-mono font-bold text-purple-600 dark:text-purple-400 select-all">{item.styled}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
