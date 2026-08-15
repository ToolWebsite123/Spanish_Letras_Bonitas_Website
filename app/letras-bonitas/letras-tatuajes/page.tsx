import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Letras para Tatuajes - Fuentes Góticas y Chicanas 💉",
  description:
    "Previsualiza bocetos de nombres para tatuajes en fuentes góticas, letras chicanas y caligrafía fina para llevar a tu tatuador.",
  alternates: {
    canonical: "/letras-bonitas/letras-tatuajes",
  },
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras para Tatuajes 💉
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="gothic" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💉 Inspiración Tatuada
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Estilos Tipográficos Más Populares en Tatuajes
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Prueba distintas familias de fuentes antes de plasmar tu idea sobre la piel:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Letras Góticas (Fraktur)</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Aportan carácter, misterio y fuerza a nombres propios en antebrazos o pecho.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">2. Cursiva Fine Line</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Trazos delgados e hilos continuos ideales para frases cortas y fechas memorables.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Cómo Probar tu Diseño Antes de Tatuarte */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💉 Planificación de Bocetos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cómo Probar tu Diseño Antes de Tatuarte
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Sigue estos 3 pasos prácticos para previsualizar tu frase o nombre antes de acudir al estudio de tatuajes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">✍️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                1. Escribe tu Frase Completa
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Genera tu texto en fuentes Góticas (Fraktur) o Cursiva Fina para evaluar la longitud visual de la frase.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">📸</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                2. Montaje Digital en Foto
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Copia el texto resultando y colócalo digitalmente sobre una foto de tu brazo, antebrazo o costillas para comprobar la escala.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">👨‍🎨</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                3. Consulta con tu Tatuador
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Muestra la captura de pantalla a tu artista para ajustar el grosor de aguja y la separación entre caracteres.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION E — Estilos que Mejor Envejecen en la Piel */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🩸 Durabilidad & Tinta
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Estilos que Mejor Envejecen en la Piel
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Elige la familia tipográfica considerando la expansión natural de la tinta con los años:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                1. Gótico Tradicional (Old English / Fraktur)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Trazos anchos con espacios internos claros. Mantienen su nitidez estructural durante décadas sin borronearse en áreas amplias como el pecho o la espalda.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                2. Caligrafía Cursiva Fina (Fine Line Script)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Estilo elegante e intemporal. Requiere un interlineado y espacio entre letras suficiente para que los trazos delgados conserven su definición con el paso del tiempo.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/letras-bonitas/letras-tatuajes" />


        <FaqSection title="Preguntas Frecuentes sobre Letras para Tatuajes" faqs={tatuajesFaqs} />
      </main>
    </div>
  );
}
