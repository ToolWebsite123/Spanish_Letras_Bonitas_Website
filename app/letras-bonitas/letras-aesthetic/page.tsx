import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Letras Aesthetic - Conversor de Fuentes Lindas y Minimalistas ✨",
  description:
    "Convierte texto en letras aesthetic, fuentes lindas, estilos espacio amplio (Fullwidth), cursivas y adornos de destellos para copiar y pegar.",
};

const aestheticFaqs = [
  {
    q: "¿Qué son las letras aesthetic y cuál es su origen?",
    a: "El término 'Aesthetic' se refiere a una corriente visual inspirada en la nostalgia de los años 80 y 90, el arte Vaporwave, la cultura anime y la belleza minimalista. En tipografía, incluye fuentes de espacio amplio (Ｆｕｌｌｗｉｄｔｈ), letras pequeñas (Small Caps) y marcos suaves con estrellas y destellos.",
  },
  {
    q: "¿Cómo copiar fuentes aesthetic al portapapeles?",
    a: "Escribe tu palabra o frase en el recuadro superior del conversor, elige cualquiera de los estilos aesthetic preseteados y toca la tarjeta resultante. Se copiará al instante lista para pegar.",
  },
  {
    q: "¿Cuáles son las fuentes aesthetic más usadas en TikTok e Instagram?",
    a: "Las más populares son las letras anchas (Ｆｕｌｌｗｉｄｔｈ), las letras diminutas (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ), el script manuscrito delicado (𝓡𝓸𝓶á𝓷𝓽𝓲𝓬𝓸) y los marcos adornados con estrellas (✨ 𝒯𝑒𝓍𝓉𝑜 ✨).",
  },
  {
    q: "¿Preservan las letras aesthetic los acentos en español?",
    a: "¡Sí! Nuestro motor garantiza que palabras con tildes en español mantengan su ortografía impecable al convertirse a tipografías aesthetic.",
  },
  {
    q: "¿Son compatibles las fuentes aesthetic en historias y publicaciones?",
    a: "100% compatibles. Al pertenecer al estándar público internacional Unicode, funcionan en historias de Instagram, videos de TikTok, estados de WhatsApp y biografías.",
  },
  {
    q: "¿Cómo combinar símbolos aesthetic con letras bonitas?",
    a: "Acompaña tu frase con símbolos suaves como lunas (🌙), estrellas (✨), nubes (☁️), moños (🎀) o flores de cerezo (🌸) para dar una identidad visual completa a tu perfil.",
  },
];

export default function LetrasAestheticPage() {
  return (
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Letras Bonitas</span>
          <span>/</span>
          <span className="text-teal-400 font-bold">Letras Aesthetic</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>✨</span> Estética Vaporwave, Soft & Minimalista
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras Aesthetic ✨
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Transforma cualquier palabra en letras de espacio amplio (Fullwidth), caracteres diminutos, fuentes retro y combinaciones de estrellas para personalizar tus <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-teal-400 underline font-bold hover:text-teal-300">biografías de Instagram</Link>, historias y perfiles sociales.
          </p>
        </header>

        {/* Converter Tool */}
        <Converter highlightStyleId="fullwidth" />

        {/* ARTÍCULO DETALLADO DEEP 1: Las 4 Variantes de la Estética Aesthetic */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              ✨ Variantes Estéticas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Guía de Estilo: Las 4 Tendencias Tipográficas Aesthetic Más Populares
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              La estética aesthetic abarca distintos estados de ánimo visuales. Combina tus letras con nuestros <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-teal-400 underline font-bold hover:text-teal-300">símbolos coquette con moños</Link> y elige la corriente que mejor defina tu canal:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">1. Fullwidth o Ancho Retro (Ｆｕｌｌｗｉｄｔｈ)</span>
              <p className="text-slate-300 leading-relaxed">
                Inspirado en la estética cibernética de los 90 y los teclados japoneses. Ocupa el doble de espacio horizontal transmitiendo elegancia espacial.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">2. Small Caps o Letras Diminutas (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ)</span>
              <p className="text-slate-300 leading-relaxed">
                Minimiza el tamaño visual de las letras mayúsculas creando un look sofisticado y editorial para biografías ordenadas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">3. Script Cursivo Romántico (𝓡𝓸𝓶á𝓷𝓽𝓲𝓬𝓸)</span>
              <p className="text-slate-300 leading-relaxed">
                Trazos continuos delicados con curvas suaves para transmitir calidez, poesía e introspección.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">4. Marcos de Estrellas y Lunas (✨ 🌙)</span>
              <p className="text-slate-300 leading-relaxed">
                Acompaña tu frase con viñetas estelares en los extremos para enmarcar el texto con magia visual.
              </p>
            </div>
          </div>
        </section>

        {/* Alphabet Reference Table */}
        <AlphabetReferenceTable highlightStyleId="fullwidth" />

        {/* Related Categories Widget */}
        <RelatedCategoriesWidget currentPath="/simbolos-aesthetic/simbolos-para-nick" />

        {/* Examples */}
        <ExamplesSection />

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Letras Aesthetic" faqs={aestheticFaqs} />
      </main>
    </div>
  );
}
