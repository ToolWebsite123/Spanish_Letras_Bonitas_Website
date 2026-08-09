import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import PlatformLimitsWidget from "@/components/PlatformLimitsWidget";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Fuentes para Bio de Instagram - Generador de Letras Bonitas 📸",
  description:
    "Convierte texto en letras bonitas, cursivas finas y fuentes aesthetic para tu presentación de Instagram. Copia con 1 clic en 150 caracteres.",
};

const bioInstagramFaqs = [
  {
    q: "¿Cómo cambiar la letra de la Bio o Presentación de Instagram?",
    a: "Escribe tu biografía en la herramienta superior, pulsa sobre la fuente estilizada de tu preferencia (Script Cursiva, Small Caps o Negrita) y luego ve a Instagram > Editar Perfil > Presentación y pega el texto.",
  },
  {
    q: "¿Cuál es el límite máximo de caracteres en la Bio de Instagram?",
    a: "Instagram permite exactamente 150 caracteres en el campo Presentación. Nuestro conversor incluye un contador en tiempo real para asegurarte de no exceder ese límite.",
  },
  {
    q: "¿Usar fuentes especiales perjudica la búsqueda de mi cuenta en Instagram?",
    a: "No. En el campo 'Presentación' (Bio) puedes usar cualquier fuente decorada sin afectar tu visibilidad. Sin embargo, para la casilla del 'Nombre de Usuario' (@handle) sugerimos mantener caracteres estándar para facilitar que te etiqueten.",
  },
  {
    q: "¿Funcionan las letras cursivas tanto en iPhone como en Android?",
    a: "¡Sí! Las fuentes son 100% universales al pertenecer al estándar internacional Unicode y se visualizan perfectamente en cualquier dispositivo.",
  },
  {
    q: "¿Cómo agregar saltos de línea ordenados en la Bio?",
    a: "Escribe cada línea de tu biografía por separado dentro de nuestro conversor y copia el bloque completo. Al pegarlo en Instagram se respetarán los saltos de renglón de forma limpia.",
  },
];

export default function BioParaInstagramPage() {
  return (
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-pink-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Fuentes para Instagram</span>
          <span>/</span>
          <span className="text-pink-400 font-bold">Bio de Instagram</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
            <span>📸</span> Optimización de Biografías & Marca Personal
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Fuentes Bonitas para Bio de Instagram 📸
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Personaliza tu perfil con las mejores <Link href="/letras-bonitas/letras-cursivas" className="text-pink-400 underline font-bold hover:text-pink-300">letras cursivas finas</Link>, fuentes pequeñas (Small Caps), símbolos aesthetic y estructuras de 4 renglones diseñadas para convertir visitantes en seguidores.
          </p>
        </header>

        {/* Converter Tool */}
        <Converter highlightStyleId="script-italic" />

        {/* Platform Limits Widget */}
        <PlatformLimitsWidget currentPlatform="instagram" />

        {/* ARTÍCULO DETALLADO DEEP 1: La Fórmula de la Bio Perfecta */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 self-start border border-purple-500/30">
              📸 Estrategia de Perfil
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Anatomía de una Biografía de Instagram que Convierte: Estructura de 4 Renglones
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Tu biografía de Instagram es tu carta de presentación digital. Acompáñala con nuestros <Link href="/simbolos-aesthetic/emojis-para-copiar" className="text-pink-400 underline font-bold hover:text-pink-300">emojis para copiar</Link> y sigue esta estructura en 4 niveles para garantizar el mayor crecimiento:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">Renglón 1: Título o Propuesta de Valor</span>
              <p className="text-slate-300 leading-relaxed">
                Define quién eres o qué haces utilizando letras en negrita limpias (ej: <code className="text-pink-400 font-bold">✨ 𝖢𝗋𝖾𝖺𝖽𝗈𝗋𝖺 𝖽𝖾 𝖢𝗈𝗇𝗍𝖾𝗇𝗂𝖽𝗈</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">Renglón 2: Nicho o Pasión</span>
              <p className="text-slate-300 leading-relaxed">
                Menciona tu especialidad o temáticas (Moda, Viajes, Fitness, Gaming) usando fuentes pequeñas (Small Caps) ordenadas con emojis de viñetas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">Renglón 3: Prueba Social o Ubicación</span>
              <p className="text-slate-300 leading-relaxed">
                Añade tu ciudad o un logro breve (ej: <code className="text-pink-400 font-bold">📍 Madrid | 💌 Colaboraciones</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">Renglón 4: Llamado a la Acción (CTA)</span>
              <p className="text-slate-300 leading-relaxed">
                Dirige el tráfico hacia tu enlace con una flecha o emoji de dedo apuntando hacia abajo (ej: <code className="text-pink-400 font-bold">👇 Descarga mi guía gratis</code>).
              </p>
            </div>
          </div>
        </section>

        {/* Related Categories Widget */}
        <RelatedCategoriesWidget currentPath="/fuentes-para-instagram/bio-para-instagram" />

        {/* Examples */}
        <ExamplesSection />

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Fuentes para Instagram" faqs={bioInstagramFaqs} />
      </main>
    </div>
  );
}
