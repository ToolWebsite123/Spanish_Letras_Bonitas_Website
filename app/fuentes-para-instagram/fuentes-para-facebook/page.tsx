import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import PlatformLimitsWidget from "@/components/PlatformLimitsWidget";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Fuentes para Facebook - Letras para Publicaciones 📘",
  description:
    "Convierte textos en letras negritas, cursivas y decoradas para destacar tus publicaciones de Facebook, nombres de grupos, anuncios y comentarios.",
};

const facebookFaqs = [
  {
    q: "¿Cómo poner texto en negrita o cursiva en publicaciones de Facebook?",
    a: "Facebook no incluye botones de formato para publicaciones estándar de perfil. Escribe tu texto en la herramienta superior, selecciona la variante Negrita Sans (𝗕𝗼𝗹𝗱) o Cursiva (𝘚𝘤𝘳𝘪𝘱𝘵) y pégala directamente en la casilla de publicación.",
  },
  {
    q: "¿Preservan los anuncios y ofertas comerciales de Facebook el formato de negrita?",
    a: "¡Sí! El texto en negrita Unicode permanece 100% visible tanto en publicaciones orgánicas como en Facebook Ads, marketplace y comentarios.",
  },
  {
    q: "¿Se pueden personalizar los nombres de los Grupos de Facebook?",
    a: "¡Sí! Los administradores de grupos utilizan fuentes negritas y marcos de corchetes para hacer resaltar el nombre del grupo en los resultados de búsqueda de Facebook.",
  },
  {
    q: "¿Es seguro usar estas letras en Facebook?",
    a: "Totalmente seguro. No viola ninguna regla de la plataforma al tratarse de caracteres estándar internacionales Unicode.",
  },
  {
    q: "¿Cómo copiar las fuentes de Facebook en celular Android o iPhone?",
    a: "Toca cualquier tarjeta estilizada y la letra se copiará instantáneamente al portapapeles de tu teléfono lista para pegar.",
  },
];

export default function FuentesParaFacebookPage() {
  return (
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Fuentes para Instagram</span>
          <span>/</span>
          <span className="text-teal-400 font-bold">Fuentes para Facebook</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>📘</span> Tipografía para Publicaciones & Anuncios de Facebook
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Fuentes para Facebook 📘
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Destaca tus publicaciones, nombres de grupos, anuncios comerciales y comentarios. Genera <Link href="/letras-personalizadas/texto-en-negrita" className="text-teal-400 underline font-bold hover:text-teal-300">letras en negrita llamativas</Link>, <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-teal-400 underline font-bold hover:text-teal-300">fuentes para la bio de Instagram</Link> y <Link href="/fuentes-para-instagram/fuentes-para-whatsapp" className="text-teal-400 underline font-bold hover:text-teal-300">estados de WhatsApp</Link>.
          </p>
        </header>

        <Converter highlightStyleId="sans-bold" />

        <PlatformLimitsWidget currentPlatform="facebook" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              📘 Estrategia para Facebook
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Cómo Aumentar el Alcance Orgánico en Facebook con Fuentes en Negrita
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              El algoritmo de Facebook premia las publicaciones que consiguen mayor tiempo de lectura y comentarios. Aplicar fuentes llamativas en los primeros 2 renglones de tu post genera 3 ventajas competitivas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">1. Rompe la Monotonía del Muro</span>
              <p className="text-slate-300 leading-relaxed">
                El feed de Facebook está lleno de texto plano idéntico. Un titular en negrita resaltado (<code className="text-teal-400 font-bold">📢 ATENCIÓN COMUNIDAD</code>) atrae inmediatamente la mirada.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">2. Resalta Precios en Marketplace</span>
              <p className="text-slate-300 leading-relaxed">
                Formatea las especificaciones de tus productos e precios para transmitir seriedad comercial.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/fuentes-para-instagram/bio-para-instagram" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre Fuentes para Facebook" faqs={facebookFaqs} />
      </main>
    </div>
  );
}
