interface StepItem {
  number: string;
  icon: string;
  title: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    number: "1",
    icon: "⌨️",
    title: "Escribe tu Texto",
    description: "Ingresa tu palabra, apodo o frase en el recuadro superior del conversor.",
  },
  {
    number: "2",
    icon: "✨",
    title: "Elige tu Estilo",
    description: "Navega entre más de 300+ fuentes cursivas, góticas, pequeñas y marcos decorados.",
  },
  {
    number: "3",
    icon: "📋",
    title: "Copia y Pega",
    description: "Toca cualquier tarjeta para copiar al portapapeles y pégalo en tu perfil o juego.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
          <span>⚡</span> Proceso en 3 Pasos
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-2.5">
          ¿Cómo Funciona el Conversor de Letras Bonitas?
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
          Transforma tu texto convencional en letras especiales en cuestión de segundos de forma 100% gratuita.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="p-6 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-3 hover:border-pink-500/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl p-2 rounded-xl bg-purple-950/80 border border-purple-800 text-pink-400">
                {step.icon}
              </span>
              <span className="w-7 h-7 rounded-full bg-pink-500/10 text-pink-400 font-black text-xs flex items-center justify-center border border-pink-500/30">
                {step.number}
              </span>
            </div>
            <h3 className="font-extrabold text-base text-slate-100 pt-1">
              {step.title}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
