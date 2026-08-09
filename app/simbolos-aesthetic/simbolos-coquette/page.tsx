import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Símbolos Coquette - Moños 🎀, Corazones 💕 y Flores 🌸 para Copiar",
  description:
    "Copia símbolos coquette, moños rosados, corazones suaves, zapatillas de ballet y tipografías delicadas para Instagram, TikTok y biografías.",
};

const coquetteFaqs = [
  {
    q: "¿Qué símbolos representan la tendencia Coquette?",
    a: "Los elementos principales son los moños y lazos (🎀), corazones entrelazados (💕, 💖), flores de cerezo (🌸), zapatillas de ballet (🩰), perlas (🦪) y encajes victorianos.",
  },
  {
    q: "¿Cómo usar los símbolos coquette en la biografía de Instagram?",
    a: "Coloca 1 moño (🎀) en los extremos de tu nombre personal (ej: 🎀 𝓢𝓸𝓯í𝓪 🎀) y utiliza viñetas de corazones suaves (💕) para listar tus hobbies en letras pequeñas.",
  },
  {
    q: "¿Combinan los símbolos coquette con letras cursivas finas?",
    a: "¡Perfectamente! Las fuentes cursivas manuscritas (Script) son el complemento ideal para los moños y flores, aportando romanticismo y elegancia.",
  },
  {
    q: "¿Se pueden copiar estos moños y corazones desde cualquier celular?",
    a: "Sí, todos los símbolos coquette que ofrecemos forman parte del estándar Unicode público y se copian con 1 clic para pegar en iPhone, Android o computadoras.",
  },
  {
    q: "¿Cuál es la diferencia entre el estilo Coquette y el estilo Aesthetic general?",
    a: "El estilo aesthetic abarca varias corrientes (vaporwave, grunge, soft, vintage), mientras que el estilo coquette se enfoca específicamente en la hiperfemenidad romántica, tonos rosados, encajes y moños vintage.",
  },
];

export default function SimbolosCoquettePage() {
  return (
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-pink-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Símbolos Aesthetic</span>
          <span>/</span>
          <span className="text-pink-400 font-bold">Símbolos Coquette</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
            <span>🎀</span> Estética Romántica & Hiperfemenina
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Símbolos Coquette, Moños y Corazones 🎀
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Expresa tu lado más dulce y delicado. Copia la colección definitiva de moños rosados, corazones entrelazados, flores vintage y <Link href="/letras-bonitas/letras-cursivas" className="text-pink-400 underline font-bold hover:text-pink-300">letras cursivas románticas</Link> para tu <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-pink-400 underline font-bold hover:text-pink-300">perfil de Instagram</Link>, <Link href="/simbolos-aesthetic/emojis-para-copiar" className="text-pink-400 underline font-bold hover:text-pink-300">emojis para copiar</Link> y <Link href="/nicks-para-juegos/nick-free-fire-femenino" className="text-pink-400 underline font-bold hover:text-pink-300">nicks femeninos de Free Fire</Link>.
          </p>
        </header>

        <Converter highlightStyleId="script-italic" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 self-start border border-purple-500/30">
              🎀 Anatomía del Diseño Coquette
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Guía de Estilo: Cómo Diseñar una Biografía Coquette de Impacto
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              La tendencia coquette celebra la inocencia, el encanto clásico y la estética romántica. Para lograr un diseño impecable en tus redes sociales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">1. Encuadre con Moños (🎀)</span>
              <p className="text-slate-300 leading-relaxed">
                Utiliza el moño 🎀 a ambos lados de tu nombre personal para crear un marco de cinta victoriana (ej: <code className="text-pink-400">🎀 𝓥𝓪𝓵𝓮𝓷𝓽𝓲𝓷𝓪 🎀</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">2. Viñetas de Flores y Perlas</span>
              <p className="text-slate-300 leading-relaxed">
                Intercala flores de cerezo (🌸) y perlas (🦪) en tu lista de aficiones combinadas con letras pequeñas en formato Small Caps.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/simbolos-aesthetic/simbolos-para-nick" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre Símbolos Coquette" faqs={coquetteFaqs} />
      </main>
    </div>
  );
}
