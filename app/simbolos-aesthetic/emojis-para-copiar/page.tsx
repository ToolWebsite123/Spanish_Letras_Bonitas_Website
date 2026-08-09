import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Emojis para Copiar - Colección de Emojis Bonitos y Estéticos 🌸",
  description:
    "Copia emojis estéticos, caritas kawaii, estrellas, flores, corazones y símbolos para redes sociales con 1 solo clic.",
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
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Símbolos Aesthetic</span>
          <span>/</span>
          <span className="text-teal-400 font-bold">Emojis para Copiar</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>🌸</span> Emojis Aesthetic Categorizados en 1-Clic
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Emojis Bonitos para Copiar y Pegar 🌸
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Descubre la selección más cuidada de emojis aesthetic, caritas kawaii, flores, destellos, corazones de colores y símbolos temáticos. Combínalos con <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-teal-400 underline font-bold hover:text-teal-300">símbolos coquette con moños</Link>, <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-teal-400 underline font-bold hover:text-teal-300">fuentes para la Bio de Instagram</Link>, <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-teal-400 underline font-bold hover:text-teal-300">símbolos para nick de juegos</Link> y <Link href="/letras-bonitas/letras-aesthetic" className="text-teal-400 underline font-bold hover:text-teal-300">letras aesthetic</Link>.
          </p>
        </header>

        <Converter highlightStyleId="small" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              🌸 Psicología del Emoji
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Cómo Combinar Emojis para Proyectar una Identidad Visual Única
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Los emojis no son simples adornos: son los marcadores de tono emocional en la comunicación digital. Para construir una biografía aesthetic coherente, elige una paleta temática:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-2xl">🌸 🌿 ☕</span>
              <h3 className="font-extrabold text-base text-teal-400">1. Estilo Soft & Minimal</h3>
              <p className="text-slate-300 leading-relaxed">
                Tonos relajantes, naturaleza y cafeína (🌸, 🌿, ☕, 📖, ☁️). Transmite calma, lectura y vida diaria.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-2xl">🎀 💕 🩰</span>
              <h3 className="font-extrabold text-base text-teal-400">2. Estilo Coquette & Chic</h3>
              <p className="text-slate-300 leading-relaxed">
                Moños rosados, perlas y corazones (🎀, 💕, 🩰, 🦪, 💖). Ideal para perfiles de moda, belleza y estilo personal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-2xl">🔥 ⚡ 🎮</span>
              <h3 className="font-extrabold text-base text-teal-400">3. Estilo Gamer & Fuego</h3>
              <p className="text-slate-300 leading-relaxed">
                Intensidad y competencia (🔥, ⚡, 🎮, 🏆, 💥). Perfecto para streamers de TikTok, Twitch y jugadores de eSports.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/simbolos-aesthetic/simbolos-para-nick" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre Emojis para Copiar" faqs={emojisFaqs} />
      </main>
    </div>
  );
}
