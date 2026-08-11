import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Letras Japonesas - Conversor de Estilos Otaku y Anime ⛩️",
  description:
    "Convierte tu nombre en letras con estilo asiático, caracteres orientales, trazos de kanji y símbolos anime para copiar.",
};

const japonesasFaqs = [
  {
    q: "¿Las letras japonesas sustituyen los caracteres reales de kanji o hiragana?",
    a: "Son caracteres del alfabeto latino estilizados con trazos de orientación oriental (CJK strokes) para mantener la lectura en español con estética otaku.",
  },
  {
    q: "¿Puedo usarlas en apodos de Discord y Roblox?",
    a: "¡Sí! Son ideales para personalizar nombres de canales en servidores de anime, bios de TikTok y Display Names de Roblox.",
  },
];

export default function LetrasJaponesasPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[var(--foreground)] opacity-75 font-medium">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)] opacity-75">Letras Bonitas</span>
          <span>/</span>
          <span className="text-teal-600 dark:text-teal-400 font-bold">Letras Japonesas</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>⛩️</span> Estética Otaku & Anime
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras Japonesas y Orientales ⛩️
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground)] opacity-80 leading-relaxed max-w-4xl font-medium">
            Personaliza tus nicks con trazos orientales, caracteres estilo kanji y símbolos anime para <Link href="/nicks-para-juegos/nombres-para-roblox" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">Roblox</Link>, <Link href="/nicks-para-juegos/nick-free-fire" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">Free Fire</Link> y <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">símbolos para nick gamer</Link>.
          </p>
        </header>

        <Converter highlightStyleId="fullwidth" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ⛩️ Estilo Anime
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Estética Oriental en Juegos y Discord
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Destaca en servidores de anime y clanes con nicks temáticos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Símbolos Torii & Katana</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Acompaña tu nick con toriis (⛩️), katanas (⚔️) y cerezos en flor (🌸).
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">2. Fullwidth (Ｆｕｌｌｗｉｄｔｈ)</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utiliza las letras de espacio amplio que recuerdan los teclados japoneses retro.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/simbolos-aesthetic/simbolos-para-nick" />


        <FaqSection title="Preguntas Frecuentes sobre Letras Japonesas" faqs={japonesasFaqs} />
      </main>
    </div>
  );
}
