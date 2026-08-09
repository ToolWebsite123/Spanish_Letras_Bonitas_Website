"use client";

interface ProTipItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  badgeColor: string;
}

const PRO_TIPS: ProTipItem[] = [
  {
    id: "tip-1",
    number: "#1",
    title: "Prueba tu texto en un bloc de notas antes de guardar",
    subtitle: "Evita perder cambios o usar diamantes en balde",
    description:
      "En juegos como Free Fire, cambiar de nombre cuesta diamantes o tarjetas de apodo. Antes de confirmar, pega tu diseño en la aplicación de Notas de tu celular para comprobar que todos los caracteres y separadores se despliegan adecuadamente.",
    tag: "Verificación Previa",
    badgeColor: "bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300",
  },
  {
    id: "tip-2",
    number: "#2",
    title: "Aplica la regla de oro para los emojis (Máximo 1 por línea)",
    subtitle: "Mantén un diseño limpio, profesional y legible",
    description:
      "Evita aglomerar múltiples emojis seguidos al inicio de tu biografía. Lo ideal es utilizar un único emoji temático como viñeta ordenadora al inicio de cada reglón (ejemplo: 📍 para ubicación, 📧 para contacto).",
    tag: "Estética Bio",
    badgeColor: "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300",
  },
  {
    id: "tip-3",
    number: "#3",
    title: "Ahorra espacio en Instagram usando 'Small Caps (Pequeñas)'",
    subtitle: "Incluye 30% más información dentro del límite de 150 caracteres",
    description:
      "Las letras en formato 'Small Caps' ( ᴘᴇǫᴜᴇñᴀs ᴀᴇsᴛʜᴇᴛɪᴄ ) son tipográficamente más angostas pero cuentan como 1 único carácter Unicode. Te permiten resumir tu profesión y pasatiempos en menos espacio visual.",
    tag: "Hack para Bios",
    badgeColor: "bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300",
  },
  {
    id: "tip-4",
    number: "#4",
    title: "Combina 2 o 3 fuentes para crear jerarquía visual impactante",
    subtitle: "No uses un solo estilo para todo el texto",
    description:
      "Usa una fuente llamativa como 𝓒𝓾𝓻𝓼𝓲𝓿𝓪 𝓔𝓵𝓮𝓰𝓪𝓷𝓽𝓮 para tu nombre principal, Small Caps para tu ocupación o frase corta, y Negrita Sans para llamados a la acción (ejemplo: ' Link abajo 👇').",
    tag: "Jerarquía Visual",
    badgeColor: "bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300",
  },
  {
    id: "tip-5",
    number: "#5",
    title: "Aprovecha los nicks con espacio transparente en clanes",
    subtitle: "Separa el tag del clan del apodo del jugador",
    description:
      "Si perteneces a un clan competitivo en Free Fire o COD Mobile, inserta el carácter transparente (U+3164) entre la sigla del clan y tu nombre personal. Tu nick lucirá profesional como el de los jugadores de eSports.",
    tag: "Gaming Pro",
    badgeColor: "bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300",
  },
  {
    id: "tip-6",
    number: "#6",
    title: "Elige la fuente según el contexto de la red social",
    subtitle: "Adapta el tono tipográfico al público de la plataforma",
    description:
      "Para bios profesionales de LinkedIn o firmas de email, usa estilos sutiles como 'Doble Rayado' o 'Negrita Sans'. Para TikTok, Instagram y gaming, experimenta libremente con fuentes Góticas y Símbolos Aesthetic.",
    tag: "Estrategia por Red",
    badgeColor: "bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300",
  },
];

export default function ProTipsSection() {
  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 font-semibold text-xs border border-amber-200/60 dark:border-amber-800/50">
          <span>💡</span> Consejos y Hacks de Expertos
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
          6 Consejos Profesionales para Destacar en Redes y Juegos
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Sigue estas recomendaciones de diseño tipográfico para optimizar tus perfiles sociales y marcar la diferencia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 pt-2">
        {PRO_TIPS.map((tip) => (
          <div
            key={tip.id}
            className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40 flex flex-col gap-3 hover:border-amber-300 dark:hover:border-amber-800 transition-colors"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xl font-extrabold text-amber-600 dark:text-amber-400">
                {tip.number}
              </span>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${tip.badgeColor}`}>
                {tip.tag}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100 leading-snug">
                {tip.title}
              </h3>
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                {tip.subtitle}
              </span>
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1 border-t border-neutral-200/60 dark:border-neutral-800/60">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
