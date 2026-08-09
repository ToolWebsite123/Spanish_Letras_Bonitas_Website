import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Letras para Tatuajes - Conversor de Fuentes Góticas y Chicanas 💉",
  description:
    "Previsualiza bocetos de nombres para tatuajes en fuentes góticas, letras chicanas y caligrafía fina para llevar a tu tatuador.",
};

const tatuajesFaqs = [
  {
    q: "¿Sirven estas fuentes para llevarle una idea a mi tatuador?",
    a: "¡Sí! Puedes previsualizar cómo lucirán nombres propios, frases o fechas importantes en tipografía gótica (Fraktur) o cursiva antes de la sesión de tatuaje.",
  },
  {
    q: "¿Cuáles son las fuentes para tatuajes más populares?",
    a: "Las más solicitadas son la letra Gótica Fraktur (para nombres en pecho y brazos) y la letra Cursiva Fine Line (para muñecas, costillas y frases).",
  },
];

export default function LetrasTatuajesPage() {
  return (
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-pink-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Letras Bonitas</span>
          <span>/</span>
          <span className="text-pink-400 font-bold">Letras para Tatuajes</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
            <span>💉</span> Arte Corporal & Previsualizador de Bocetos
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras para Tatuajes 💉
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Previsualiza nombres, fechas romanas y frases en <Link href="/letras-bonitas/letras-graffiti" className="text-pink-400 underline font-bold hover:text-pink-300">tipografías góticas</Link>, <Link href="/letras-bonitas/caligrafia" className="text-pink-400 underline font-bold hover:text-pink-300">caligrafía de trazo fino</Link> y <Link href="/letras-personalizadas/nombres-personalizados" className="text-pink-400 underline font-bold hover:text-pink-300">nombres personalizados</Link>.
          </p>
        </header>

        <Converter highlightStyleId="gothic" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 self-start border border-purple-500/30">
              💉 Inspiración Tatuada
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Estilos Tipográficos Más Populares en Tatuajes
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Prueba distintas familias de fuentes antes de plasmar tu idea sobre la piel:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">1. Letras Góticas (Fraktur)</span>
              <p className="text-slate-300 leading-relaxed">
                Aportan carácter, misterio y fuerza a nombres propios en antebrazos o pecho.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">2. Cursiva Fine Line</span>
              <p className="text-slate-300 leading-relaxed">
                Trazos delgados e hilos continuos ideales para frases cortas y fechas memorables.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/letras-bonitas/letras-graffiti" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre Letras para Tatuajes" faqs={tatuajesFaqs} />
      </main>
    </div>
  );
}
