import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Nicks Free Fire Masculinos - Estilo Pro, Clan y Guerrero 🗡️",
  description:
    "Copia los mejores nicks masculinos para Free Fire. Letras góticas, símbolos de espadas, dragones, rayos y coronas de líder.",
};

const masculinoFaqs = [
  {
    q: "¿Cómo crear un nick masculino intimidante y pro en Free Fire?",
    a: "Combina fuentes góticas de batalla (Fraktur) con símbolos de espadas cruzadas (⚔️), coronas de capitán (👑) o espaciado transparente (U+3164) entre la etiqueta de tu clan y tu nombre.",
  },
  {
    q: "¿Cuál es la mejor estructura para poner la tag de clan en hombres?",
    a: "La estructura más limpia en los eSports es colocar la sigla del clan en letras superiores pequeñas (ej: ᵀᴳ, 𝖥𝖥) seguida del espacio transparente y el nombre en letras góticas.",
  },
  {
    q: "¿Por qué se recortan las letras al final de mi apodo masculino?",
    a: "Garena Free Fire aplica un límite estricto de 12 bytes de memoria UTF-8. Los símbolos de armas o coronas complejas ocupan de 3 a 4 bytes. Utiliza fuentes de trazo optimizado como Small Caps para evitar recortes.",
  },
  {
    q: "¿Se pueden incluir números estilizados en el nick?",
    a: "¡Sí! Nuestro conversor transforma números normales (1, 2, 3) en números romanos, números dentro de círculos negros (❶❷❸) o superíndices.",
  },
  {
    q: "¿Cómo copiar un nick pro listo para usar en 1 clic?",
    a: "Explora nuestra lista de plantillas preseteadas en la sección inferior y toca el botón 'Copiar' para llevarlo directo al portapapeles.",
  },
];

export default function NickFreeFireMasculinoPage() {
  return (
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Nicks para Juegos</span>
          <span>/</span>
          <span className="text-teal-400 font-bold">Nicks FF Masculinos</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>🗡️</span> Estilos Imponentes para Capitanes y Rushers
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Nicks para Free Fire Masculinos 🗡️
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Genera apodos rudos, guerreros e imponentes para tu perfil de Free Fire. Combina símbolos de dagas, coronas de rey, dragones y <Link href="/letras-personalizadas/texto-en-negrita" className="text-teal-400 underline font-bold hover:text-teal-300">letras en negrita eSports</Link> con la guía oficial de <Link href="/nicks-para-juegos/nick-free-fire" className="text-teal-400 underline font-bold hover:text-teal-300">nicks de Free Fire</Link> y <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-teal-400 underline font-bold hover:text-teal-300">símbolos para nick</Link>.
          </p>
        </header>

        <Converter highlightStyleId="circled-negative" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              🗡️ Estrategia de Nombres eSports
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              3 Fórmulas Pro para Nicks Masculinos de Free Fire
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Crea una identidad intimidante en la sala de espera combinando símbolos guerreros:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-2xl">꧁⚔️PRO⚔️꧂</span>
              <h3 className="font-extrabold text-base text-teal-400">1. Marco Guerrero Doble</h3>
              <p className="text-slate-300 leading-relaxed">
                Utiliza escudos (꧁) y espadas (⚔️) en ambos extremos para enmarcar apodos cortos de 4 a 6 letras.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-2xl">『🇲🇽』KING</span>
              <h3 className="font-extrabold text-base text-teal-400">2. Tag de Clan + Bandera</h3>
              <p className="text-slate-300 leading-relaxed">
                Integra corchetes oscuros (『』) con la bandera de tu país antes de tu nombre personal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-2xl">⚡</span>
              <h3 className="font-extrabold text-base text-teal-400">3. Estilo Francotirador</h3>
              <p className="text-slate-300 leading-relaxed">
                Tags voladas y letras minimalistas (ej: <code className="text-teal-400 font-bold">⚡ᵀᴳ 𝕶𝖎𝖑𝖑𝖊𝖗⚡</code>).
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/nicks-para-juegos/nick-free-fire" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre FF Masculino" faqs={masculinoFaqs} />
      </main>
    </div>
  );
}
