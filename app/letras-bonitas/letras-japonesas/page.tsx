import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Letras Japonesas - Conversor de Estilos Otaku y Anime ⛩️",
  description:
    "Convierte tu nombre en letras con estilo asiático, caracteres orientales, trazos de kanji y símbolos anime para copiar.",
  alternates: {
    canonical: "/letras-bonitas/letras-japonesas",
  },
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
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras Japonesas y Orientales ⛩️
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="fullwidth" highlightStyleIds={["fullwidth", "double-struck", "circled-negative", "squared", "greek-lookalike", "cyrillic-lookalike"]} />

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

        {/* SECTION D — ¿Son Caracteres Japoneses Reales? */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ⛩️ Aclaración Lingüística
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              ¿Son Caracteres Japoneses Reales?
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Conoce la naturaleza técnica y estética de las letras estilo oriental en Unicode:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                1. Mapeo Tipográfico Faux-Japanese
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Son caracteres del alfabeto latino adaptados con trazos caligráficos orientales (CJK strokes). Esto permite conservar la lectura completa de palabras en español mientras lucen una estética japonesa.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                2. Simbolismo Kanji y Hiragana Real
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Para ideogramas con significado lingüístico estricto (como &apos;amor&apos;, &apos;fuerza&apos; o &apos;dragón&apos;), se emplean los ideogramas originales de la tabla Unicode japonesa.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION E — Popular en Comunidades de Anime y Manga */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🎮 Cultura Otaku & Gamer
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Popular en Comunidades de Anime y Manga
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Descubre por qué las letras orientales son la tendencia principal en espacios gaming y otaku:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">👾</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Discord Servers & Roles
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Personaliza nombres de canales, categorías e insignias de roles en servidores temáticos de anime y manga.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">⚔️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Nicks de Roblox & Free Fire
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Crea apodos inspirados en personajes legendarios acompañados de katanas, flores de cerezo y marcos de honor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">📱</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Biografías de TikTok & Instagram
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Dale un toque visual minimalista y asiático a las descripciones y subtítulos de tus videos virales.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/letras-bonitas/letras-japonesas" />


        <FaqSection title="Preguntas Frecuentes sobre Letras Japonesas" faqs={japonesasFaqs} />
      </main>
    </div>
  );
}
