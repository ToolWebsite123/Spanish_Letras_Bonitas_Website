import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Bio Colorida Free Fire - Códigos de Colores y Banderas 🌈",
  description:
    "Genera firmas y biografías a color en Free Fire con códigos Hexadecimales [FF0000], [00FF00], [0000FF] y códigos de banderas de países.",
};

const bioColoridaFaqs = [
  {
    q: "¿Cómo poner letras de colores en la firma de Free Fire?",
    a: "Para escribir en color en tu firma de Free Fire, debes anteceder el texto con un código de color Hexadecimal de 6 dígitos encerrado entre corchetes rectos (ejemplo: [FF0000]Hola para escribir Hola en rojo neón).",
  },
  {
    q: "¿Puedo poner el nombre en color en el nick de jugador?",
    a: "No. Los códigos de color entre corchetes funcionan únicamente en la sección 'Firma / Presentación' del perfil de Free Fire. En el apodo de jugador (nick superior) no son procesados.",
  },
  {
    q: "¿Cómo poner la bandera de México, España o Argentina en la Firma?",
    a: "Puedes combinar los códigos de color en orden para simular la bandera. Ejemplo para México: [008000]█[FFFFFF]█[FF0000]█ o usar nuestros emojis preseteados en 1 clic.",
  },
  {
    q: "¿Se pueden combinar letras bonitas con códigos de colores en la Firma?",
    a: "¡Sí! Escribe tu texto estilizado en nuestro conversor (ej: 𝓒𝓻𝓮𝓪𝓭𝓸𝓻a), cópialo y añade el código [FF007F] justo al inicio para obtener letras cursivas en tono rosa fucsia.",
  },
  {
    q: "¿Es legal usar códigos de color en la firma de Free Fire?",
    a: "Totalmente legal y seguro. Es un sistema oficial de formato de texto nativo soportado por los servidores de Garena Free Fire.",
  },
];

export default function BioColoridaFreeFirePage() {
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
          <span className="text-teal-400 font-bold">Bio Colorida FF</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>🌈</span> Códigos Hexadecimales Oficiales para Garena Free Fire
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Bio Colorida para Free Fire y Códigos de Banderas 🌈
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Personaliza tu firma de perfil en Free Fire con colores fucsia, verde neón, dorado y azul rey. Copia los códigos Hexadecimales e imita las banderas de México, España, Argentina y Colombia. Combínalos con <Link href="/nicks-para-juegos/nick-free-fire" className="text-teal-400 underline font-bold hover:text-teal-300">nicks de Free Fire pro</Link> y <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-teal-400 underline font-bold hover:text-teal-300">símbolos para nick</Link>.
          </p>
        </header>

        {/* Interactive Hex Color Palette Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-5 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-1">
            <span className="text-xs font-black text-red-400 block font-mono">[FF0000]</span>
            <span className="text-xs font-bold text-slate-200">Rojo Neón</span>
          </div>
          <div className="p-5 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-1">
            <span className="text-xs font-black text-yellow-400 block font-mono">[FFFF00]</span>
            <span className="text-xs font-bold text-slate-200">Dorado Neón</span>
          </div>
          <div className="p-5 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-1">
            <span className="text-xs font-black text-emerald-400 block font-mono">[00FF00]</span>
            <span className="text-xs font-bold text-slate-200">Verde Neón</span>
          </div>
          <div className="p-5 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-1">
            <span className="text-xs font-black text-cyan-400 block font-mono">[00FFFF]</span>
            <span className="text-xs font-bold text-slate-200">Celeste Neón</span>
          </div>
        </section>

        <Converter highlightStyleId="small" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              🌈 Códigos de Banderas Latinoamericanas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Cómo Crear Banderas a Color en tu Firma
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Combina bloques sólidos de color (█) antecedidos por sus códigos Hexadecimales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">🇲🇽 Bandera de México</span>
              <p className="font-mono text-slate-200 text-xs bg-[#0f0c1b] p-3 rounded-xl border border-purple-900/40">
                [008000]█[FFFFFF]█[FF0000]█ MÉXICO
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">🇪🇸 Bandera de España</span>
              <p className="font-mono text-slate-200 text-xs bg-[#0f0c1b] p-3 rounded-xl border border-purple-900/40">
                [FF0000]█[FFFF00]█[FF0000]█ ESPAÑA
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/nicks-para-juegos/nick-free-fire" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre Bio Colorida" faqs={bioColoridaFaqs} />
      </main>
    </div>
  );
}
