interface ProTipItem {
  id: string;
  numberStr: string;
  icon: string;
  title: string;
  shortTag: string;
  detail: string;
}

const PRO_TIPS: ProTipItem[] = [
  {
    id: "tip-1",
    numberStr: "01",
    icon: "👁️",
    title: "Jerarquía Visual con 2 Estilos",
    shortTag: "Regla de Legibilidad",
    detail: "Combina un máximo de 2 fuentes distintas por perfil. Utiliza fuentes cursivas para la palabra principal y fuentes pequeñas para la línea secundaria.",
  },
  {
    id: "tip-2",
    numberStr: "02",
    icon: "🎯",
    title: "Un Emoji por Renglón",
    shortTag: "Orden Estético",
    detail: "Coloca 1 único emoji como viñeta ordenadora al inicio de cada renglón. Evita saturar con cadenas de emojis que distraigan la atención.",
  },
  {
    id: "tip-3",
    numberStr: "03",
    icon: "📝",
    title: "Pre-verificación en Notas",
    shortTag: "Prevención de Errores",
    detail: "Pega tu diseño en el bloc de notas de tu teléfono antes de guardarlo en Free Fire o Instagram para verificar la alineación exacta de líneas.",
  },
  {
    id: "tip-4",
    numberStr: "04",
    icon: "📐",
    title: "Small Caps para Ahorro de Espacio",
    shortTag: "Optimización de Chars",
    detail: "Las letras pequeñas en formato Small Caps ocupan un 30% menos de ancho visual, permitiendo escribir frases más extensas sin cortar la línea.",
  },
  {
    id: "tip-5",
    numberStr: "05",
    icon: "👻",
    title: "Espacio Invisible (U+3164) en Clanes",
    shortTag: "Estilo Pro eSports",
    detail: "Inserta el carácter transparente Unicode para separar el tag de tu clan de tu nombre personal, creando un estilo pro y ordenado.",
  },
  {
    id: "tip-6",
    numberStr: "06",
    icon: "🎨",
    title: "Adaptación según el Contexto",
    shortTag: "Estrategia de Perfil",
    detail: "Reserva las letras góticas y símbolos de armas para juegos de combate y utiliza caligrafía sobria para proyectos personales o comerciales.",
  },
];

interface ProTipsSectionProps {
  platform?: string;
}

export default function ProTipsSection({ platform }: ProTipsSectionProps) {
  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
          <span>🎨</span> Guía Profesional de Diseño
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-2.5">
          El Arte de la Tipografía Digital: 6 Principios Aesthetic
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
          Aplica estos principios fundamentales de diseño para lograr un perfil memorable y profesional en cualquier red social.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
        {PRO_TIPS.map((tip) => (
          <div
            key={tip.id}
            className="p-6 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col justify-between gap-3 hover:border-pink-500/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl p-2 rounded-xl bg-purple-950/80 border border-purple-800 text-pink-400">
                {tip.icon}
              </span>
              <span className="text-xs font-black text-pink-400 font-mono">
                {tip.numberStr}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 pt-2">
              <span className="text-[11px] font-extrabold text-pink-400 uppercase tracking-wider">
                {tip.shortTag}
              </span>
              <h3 className="font-extrabold text-base text-slate-100 leading-snug">
                {tip.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {tip.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
