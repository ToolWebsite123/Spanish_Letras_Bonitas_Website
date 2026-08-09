import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import PlatformLimitsWidget from "@/components/PlatformLimitsWidget";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Fuentes para WhatsApp - Letras para Info, Estados y Mensajes 💬",
  description:
    "Genera letras bonitas, cursivas, fuentes diminutas y textos en negrita para personalizar tu Estado, Info y mensajes de WhatsApp.",
};

const whatsappFaqs = [
  {
    q: "¿Cómo cambiar la letra en el Estado y la Info de WhatsApp?",
    a: "Escribe tu texto en la herramienta superior, copia el diseño en letras cursivas o negritas y pégalo directamente en la casilla 'Info' o en las publicaciones de tus Estados de WhatsApp.",
  },
  {
    q: "¿Cuál es la diferencia entre los códigos nativos de WhatsApp (*texto*) y estas letras Unicode?",
    a: "Los códigos nativos de WhatsApp (`*negrita*`, `_cursiva_`) solo funcionan dentro del cuerpo del chat y no se pueden usar en la casilla de Info o Nombre. Nuestras fuentes Unicode estilizadas funcionan en TODAS partes (Info, Estados, Nombre y Chats).",
  },
  {
    q: "¿Se ven las letras bonitas en WhatsApp Web y WhatsApp Business?",
    a: "¡Sí! Se visualizan perfectamente tanto en celulares (Android e iOS) como en la versión web y aplicaciones de escritorio de WhatsApp Business.",
  },
  {
    q: "¿Preservan los acentos en español (á, é, í, ó, ú, ñ) en las conversaciones de WhatsApp?",
    a: "¡Sí! Nuestro conversor adapta todos los glifos con tildes para garantizar una lectura impecable en español.",
  },
  {
    q: "¿Cómo copiar las fuentes de WhatsApp en 1 solo paso?",
    a: "Toca la tarjeta con tu diseño preferido arriba y el texto estilizado se copiará automáticamente al portapapeles de tu teléfono.",
  },
];

export default function FuentesParaWhatsAppPage() {
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
          <span className="text-teal-400 font-bold">Fuentes para WhatsApp</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>💬</span> Personalización de Estados, Info & Mensajes
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Fuentes para WhatsApp 💬
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Personaliza la casilla de Info de tu perfil, tus Estados diarios y el nombre de tus grupos de WhatsApp con <Link href="/letras-bonitas/letras-cursivas" className="text-teal-400 underline font-bold hover:text-teal-300">letras cursivas finas</Link>, <Link href="/letras-personalizadas/texto-en-negrita" className="text-teal-400 underline font-bold hover:text-teal-300">letras en negrita</Link>, <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-teal-400 underline font-bold hover:text-teal-300">fuentes para la Bio de Instagram</Link> y <Link href="/simbolos-aesthetic/emojis-para-copiar" className="text-teal-400 underline font-bold hover:text-teal-300">emojis para copiar</Link>.
          </p>
        </header>

        <Converter highlightStyleId="bold-script" />

        <PlatformLimitsWidget currentPlatform="whatsapp" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              💬 Guía de Uso en WhatsApp
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Cómo Destacar en WhatsApp: Info, Estados y Nombres de Grupos
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              WhatsApp es la plataforma de mensajería más utilizada. Puedes destacar en 3 secciones clave:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">1. Casilla de Info Personal</span>
              <p className="text-slate-300 leading-relaxed">
                Sustituye la aburrida frase predeterminada ('Disponible') por una frase motivacional en letras cursivas finas (ej: <code className="text-teal-400 font-bold">✨ 𝒱𝒾𝓋ℯ ℯ𝓁 𝓅𝓇ℯ𝓈ℯ𝓃𝓉ℯ ✨</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">2. Nombres de Grupos de Familia o Trabajo</span>
              <p className="text-slate-300 leading-relaxed">
                Utiliza letras en negrita o recuadros negros para que el nombre del grupo destaque en la lista de chats.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/fuentes-para-instagram/bio-para-instagram" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre Fuentes para WhatsApp" faqs={whatsappFaqs} />
      </main>
    </div>
  );
}
