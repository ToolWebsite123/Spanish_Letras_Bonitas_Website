import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";

export const metadata: Metadata = {
  title: "Texto Itálico - Conversor de Letras Inclinadas e Itálicas <i>",
  description:
    "Convierte texto normal a letras itálicas (Italic Sans, Italic Serif y Bold Italic) para destacar palabras y citas en redes sociales.",
};

const italicoFaqs = [
  {
    q: "¿Por qué usar letras itálicas en redes sociales si no hay botón de formato?",
    a: "Plataformas como Instagram, TikTok, Facebook y comentarios de YouTube no ofrecen botones de formato inclinado. Nuestro conversor transforma cada carácter en un glifo del estándar Unicode (Mathematical Italic) que se puede copiar y pegar directamente conservando la inclinación intacta.",
  },
  {
    q: "¿Cuál es la diferencia entre Italic Sans e Italic Serif?",
    a: "Italic Sans (𝘐𝘵𝘢𝘭𝘪𝘤 𝘚𝘢𝘯𝘴) presenta trazos limpios, modernos y sin remates, excelente para frases informales y biografías minimalistas. Italic Serif (𝐼𝑡𝑎𝑙𝑖𝑐 𝑆𝑒𝑟𝑖𝑓) incluye remates tradicionales en los extremos, perfecta para citas poéticas y pasajes literarios.",
  },
  {
    q: "¿Cuándo es recomendable utilizar texto inclinado en publicaciones?",
    a: "El formato itálico se utiliza habitualmente para destacar citas célebres, títulos de libros, películas o canciones, palabras en idiomas extranjeros, o para aportar un matiz sutil de voz interior y pensamiento en tus textos.",
  },
  {
    q: "¿Preservan las letras itálicas los acentos en español (á, é, í, ó, ú, ñ)?",
    a: "¡Sí! Nuestro conversor asigna automáticamente los glifos inclinados correspondientes con sus tildes y tildes diacríticas completas.",
  },
  {
    q: "¿Son compatibles las fuentes itálicas con celulares Android e iPhone?",
    a: "100% compatibles. Dado que pertenecen al estándar internacional Unicode, cualquier dispositivo móvil u ordenador las renderiza sin problemas.",
  },
  {
    q: "¿Afectan las fuentes itálicas al recuento de caracteres en biografías?",
    a: "Cada letra itálica matemática ocupa exactamente 1 posición de carácter en la Bio de Instagram (150 max) o TikTok (80 max). Puedes pre-calcular tu texto con nuestro contador dinámico superior.",
  },
];

export default function TextoItalicoPage() {
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
          <span className="text-slate-400">Letras Personalizadas</span>
          <span>/</span>
          <span className="text-pink-400 font-bold">Texto Itálico</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
            <span>✨</span> Conversor de Fuentes Itálicas e Inclinadas Unicode
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Conversor de Texto Itálico e Inclinado (Italic Text Generator) ✨
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Transforma cualquier texto convencional en <strong className="text-pink-400 font-extrabold">letras itálicas Sans, Serif, Cursivas Inclinadas y Negritas Itálicas</strong>. Copia con 1 solo toque y dale un toque de refinamiento a tus publicaciones, notas de perfil e historias.
          </p>
        </header>

        {/* Converter Tool */}
        <Converter highlightStyleId="italic-sans" />

        {/* ARTÍCULO DETALLADO DEEP 1: El Arte del Texto Itálico Digital */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 self-start border border-purple-500/30">
              ✨ Usos Tipográficos del Estilo Inclinado
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Guía de Estilo: Cuándo y Cómo Utilizar Texto Itálico Digital
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              El formato itálico o cursivo inclinado fue creado históricamente en la Venecia del Renacimiento para imitar la caligrafía rápida y ahorrar espacio en imprenta. En el mundo digital actual, el texto en itálica cumple 4 funciones comunicativas esenciales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">1. Citas Cuestionables y Frases Célebres</span>
              <p className="text-slate-300 leading-relaxed">
                Presentar una frase motivacional o pasaje poético en <code className="text-pink-400 font-bold">𝘐𝘵𝘢𝘭𝘪𝘤 𝘚𝘢𝘯𝘴</code> aporta elegancia e indica inmediatamente que se trata de un pensamiento citado.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">2. Títulos de Obras y Canciones</span>
              <p className="text-slate-300 leading-relaxed">
                Cumple con las normas ortográficas internacionales destacando los títulos de libros, películas, podcasts o canciones en formato inclinado dentro de tus publicaciones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">3. Términos en Idiomas Extranjeros</span>
              <p className="text-slate-300 leading-relaxed">
                Destaca expresiones en inglés, francés o latín (ej: <code className="text-pink-400 font-bold">𝑐𝑎𝑟𝑝𝑒 𝑑𝑖𝑒𝑚</code>) para mantener una impecable redacción editorial.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">4. Énfasis Sutil y Reflexión</span>
              <p className="text-slate-300 leading-relaxed">
                A diferencia de la negrita (que grita atención), la itálica sugiere un susurro o un matiz de voz interior más personal e introspectivo.
              </p>
            </div>
          </div>
        </section>

        {/* Alphabet Reference Table */}
        <AlphabetReferenceTable highlightStyleId="italic-sans" />

        {/* Examples */}
        <ExamplesSection />

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Texto Itálico" faqs={italicoFaqs} />
      </main>
    </div>
  );
}
