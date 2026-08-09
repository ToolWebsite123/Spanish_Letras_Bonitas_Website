import { fontStyles } from "@/lib/fontStyles";
import { convertText } from "@/lib/convertText";

interface AlphabetReferenceTableProps {
  highlightStyleId?: string;
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function AlphabetReferenceTable({
  highlightStyleId = "script-italic",
}: AlphabetReferenceTableProps) {
  const currentStyle = fontStyles.find((s) => s.id === highlightStyleId) || fontStyles[0];

  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
          <span>🔤</span> Muestrario de Abecedario A-Z
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-2.5">
          Tabla de Equivalencias de Letras: {currentStyle.name}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
          Revisa la conversión carácter por carácter de cada letra mayúscula y minúscula de la A a la Z.
        </p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2.5 pt-2">
        {ALPHABET.map((letter) => {
          const uppercaseConv = convertText(letter, currentStyle.map, currentStyle.id);
          const lowercaseConv = convertText(letter.toLowerCase(), currentStyle.map, currentStyle.id);

          return (
            <div
              key={letter}
              className="p-3 rounded-xl border border-purple-900/40 bg-[#231c3d] flex flex-col items-center justify-center gap-1 text-center hover:border-pink-500/60 transition-colors"
            >
              <span className="text-[10px] font-bold text-slate-400">
                {letter} / {letter.toLowerCase()}
              </span>
              <span className="text-base font-normal text-slate-100 font-mono">
                {uppercaseConv} {lowercaseConv}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
