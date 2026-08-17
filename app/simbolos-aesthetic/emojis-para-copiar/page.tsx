import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Emojis para Copiar y Pegar - Bonitos y Estéticos 🌸",
  description:
    "Copia emojis estéticos, caritas kawaii, estrellas, flores, corazones y símbolos para redes sociales con 1 solo clic.",
  alternates: {
    canonical: "/simbolos-aesthetic/emojis-para-copiar",
  },
};

const emojisFaqs = [
  {
    q: "¿Cómo copiar los emojis directamente a mi teléfono?",
    a: "Toca cualquier recuadro de emoji o combinación estética en nuestra herramienta y el símbolo se copiará instantáneamente al portapapeles de tu celular Android o iPhone.",
  },
  {
    q: "¿Cuáles son los emojis más usados para biografías aesthetic?",
    a: "Los emojis más populares son las flores de cerezo (🌸), destellos de luz (✨), lunas crecientes (🌙), moños rosados (🎀) y tazas de café (☕).",
  },
  {
    q: "¿Afecta usar emojis al límite de caracteres en redes sociales?",
    a: "Sí. Cada emoji ocupa exactamente 2 posiciones de carácter (o 4 bytes de memoria) en el recuento oficial de Instagram, TikTok y WhatsApp.",
  },
  {
    q: "¿Por qué los emojis se ven distintos entre iPhone y Samsung?",
    a: "Apple, Samsung, Google y Microsoft diseñan su propio conjunto visual de emoticonos basados en el mismo código estándar Unicode. Aunque el estilo gráfico cambie ligeramente, el emoji es exactamente el mismo.",
  },
  {
    q: "¿Se pueden combinar emojis con tipografías cursivas y pequeñas?",
    a: "¡Absolutamente! La combinación de 1 emoji inicial como viñeta decorativa junto a un texto en letras pequeñas (Small Caps) es la estructura estándar de las cuentas con mayor crecimiento en Instagram.",
  },
];

export default function EmojisParaCopiarPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Emojis Bonitos para Copiar y Pegar 🌸
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="small" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🌸 Psicología del Emoji
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cómo Combinar Emojis para Proyectar una Identidad Visual Única
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Los emojis no son simples adornos: son los marcadores de tono emocional en la comunicación digital. Para construir una biografía aesthetic coherente, elige una paleta temática:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-2xl">🌸 🌿 ☕</span>
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">1. Estilo Soft & Minimal</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Tonos relajantes, naturaleza y cafeína (🌸, 🌿, ☕, 📖, ☁️). Transmite calma, lectura y vida diaria.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-2xl">🎀 💕 🩰</span>
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">2. Estilo Coquette & Chic</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Moños rosados, perlas y corazones (🎀, 💕, 🩰, 🦪, 💖). Ideal para perfiles de moda, belleza y estilo personal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-2xl">🔥 ⚡ 🎮</span>
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">3. Estilo Gamer & Fuego</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Intensidad y competencia (🔥, ⚡, 🎮, 🏆, 💥). Perfecto para streamers de TikTok, Twitch y jugadores de eSports.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Los 5 Emojis Más Usados en Bios Aesthetic de 2026 */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🌸 Tendencias 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Los 5 Emojis Más Usados en Bios Aesthetic de 2026
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              ✨ (brillo/destaque), 🌸 (suavidad), 🖤 (elegancia oscura), 🦋 (transformación), ☁️ (ligereza) — combínalos con moderación (2-3 máximo) para no saturar visualmente tu perfil.
            </p>
          </div>
        </section>

        {/* SECTION E — Cómo Elegir Emojis Según tu Tipo de Contenido */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🎯 Estrategia de Contenido
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cómo Elegir Emojis Según tu Tipo de Contenido
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Seleccionar los emojis adecuados permite alinear tu estética con el tipo de contenido que publicas. Define el tono visual de tu perfil siguiendo estas 3 recomendaciones:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">📸</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                1. Creadores de Contenido & Marca Personal
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utiliza emojis de cámara (📸), destellos (✨) y ubicación (📍) para proyectar profesionalismo y guía clara de contacto.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🩰</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                2. Moda, Belleza & Coquette
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Incorpora moños (🎀), perlas (🦪) y zapatillas de ballet (🩰) para reflejar un tono delicado, femenino y sofisticado.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">⚡</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                3. Gaming & Entretenimiento
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Aplica rayos (⚡), coronas (👑) y trofeos (🏆) para transmitir competitividad y energía en comunidades eSports.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION F — Combinaciones de Emojis que Cuentan una Historia */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📖 Narrativa Visual
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Combinaciones de Emojis que Cuentan una Historia
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Intercalar pequeños grupos de 2 a 3 emojis en un mismo renglón puede transmitir un micro-mensaje visual instantáneo. Por ejemplo, combinar un avión con una nube y una cámara (<code className="text-teal-600 dark:text-teal-400 font-bold">✈️ ☁️ 📷</code>) resume perfectamente un perfil de viajes, mientras que un libro con café y una vela (<code className="text-teal-600 dark:text-teal-400 font-bold">📖 ☕ 🕯️</code>) evoca momentos de lectura y estudio.
            </p>
          </div>
        </section>

        {/* SECTION G — Errores Comunes al Usar Emojis en Bios y Publicaciones */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ⚠️ Prevención de Errores
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Errores Comunes al Usar Emojis en Bios y Publicaciones
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Evita la saturación visual. Usar más de 3 emojis por línea o reemplazar palabras clave completas por símbolos dificulta la lectura automática de los visitantes. Mantén los emojis como viñetas de inicio o remates decorativos de renglón para asegurar la máxima legibilidad.
            </p>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/simbolos-aesthetic/emojis-para-copiar" />


        <FaqSection title="Preguntas Frecuentes sobre Emojis para Copiar" faqs={emojisFaqs} />
      </main>
    </div>
  );
}
