import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import PlatformLimitsWidget from "@/components/PlatformLimitsWidget";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Fuentes para Discord - Letras para Canales, Nicks y Servidores 👾",
  description:
    "Convierte texto en letras negritas, fuentes de bloque, símbolos góticos y caracteres diminutos para personalizar canales y nicks de Discord.",
};

const discordFaqs = [
  {
    q: "¿Cómo usar letras bonitas en los nombres de canales de Discord (#canales)?",
    a: "Discord no permite espacios normales en los nombres de los canales de texto. Escribe el título de tu canal en la herramienta superior, selecciona la fuente deseada (Small Caps, Fullwidth o Bloques) e inserta el espacio invisible (U+3164) o un guión para organizar tus salas.",
  },
  {
    q: "¿Se pueden cambiar las letras del Apodo de Servidor (Server Nickname)?",
    a: "¡Sí! Puedes tener un apodo personalizado diferente para cada servidor de Discord donde participes utilizando fuentes góticas, cursivas o marcas de clan.",
  },
  {
    q: "¿Son compatibles los símbolos con Discord Nitro y la Bio de usuario?",
    a: "100% compatibles. Los caracteres Unicode se muestran con nitidez tanto en la versión web de Discord como en la aplicación móvil de iOS, Android y escritorio de Windows.",
  },
  {
    q: "¿Cómo organizar las categorías de un servidor con símbolos estéticos?",
    a: "Coloca corchetes o símbolos decorativos en los títulos de las categorías (ej: <code className='text-pink-400'>『💬』│ ᴄʜᴀᴛ-ɢᴇɴᴇʀᴀʟ</code>) para darle un aspecto profesional a tu comunidad.",
  },
  {
    q: "¿Es seguro usar letras especiales en servidores de juegos?",
    a: "Sí. Los caracteres Unicode forman parte del protocolo estándar web y no activan filtros de spam ni vulneran las directrices de la comunidad de Discord.",
  },
];

export default function FuentesParaDiscordPage() {
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
          <span className="text-teal-400 font-bold">Fuentes para Discord</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>👾</span> Estructura & Estética para Servidores de Discord
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Fuentes para Discord 👾
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Organiza tus canales de texto (#canales), categorías de voz, roles de servidor y apodos de usuario con <Link href="/letras-bonitas/letras-graffiti" className="text-teal-400 underline font-bold hover:text-teal-300">letras de bloque u urbano</Link>, <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-teal-400 underline font-bold hover:text-teal-300">símbolos para nick gamer</Link>, <Link href="/nicks-para-juegos/nick-free-fire" className="text-teal-400 underline font-bold hover:text-teal-300">nicks de Free Fire</Link> y <Link href="/alfabeto-completo/alfabeto-graffiti" className="text-teal-400 underline font-bold hover:text-teal-300">abecedario graffiti A-Z</Link>.
          </p>
        </header>

        <Converter highlightStyleId="squared-negative" />

        <PlatformLimitsWidget currentPlatform="discord" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              👾 Guía de Servidores
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Cómo Estructurar Canales de Discord Pro
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Los servidores con mayor retención de usuarios utilizan estructuras ordenadas con símbolos de separación:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">1. Canales de Texto con Íconos</span>
              <p className="text-slate-300 leading-relaxed font-mono">
                💬│ ᴄʜᴀᴛ-ɢᴇɴᴇʀᴀʟ <br />
                📢│ ᴀɴᴜɴᴄɪᴏs-ᴏғɪᴄɪᴀʟᴇs <br />
                🎮│ ɢᴀᴍɪɴɢ-ʏ-ᴍᴇᴍᴇs
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">2. Apodos de Servidor con Tags</span>
              <p className="text-slate-300 leading-relaxed">
                Utiliza letras góticas o pequeñas para distinguir a los Moderadores y Administradores en la lista lateral.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/simbolos-aesthetic/simbolos-para-nick" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre Fuentes para Discord" faqs={discordFaqs} />
      </main>
    </div>
  );
}
