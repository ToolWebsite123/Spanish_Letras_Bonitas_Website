import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[var(--foreground)] opacity-75 font-medium">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)] opacity-75">Letras Personalizadas</span>
          <span>/</span>
          <span className="text-teal-600 dark:text-teal-400 font-bold">Texto Itálico</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>✨</span> Conversor de Fuentes Itálicas e Inclinadas Unicode
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Texto Itálico e Inclinado (Italic Text Generator) ✨
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground)] opacity-80 leading-relaxed max-w-4xl font-medium">
            Convierte cualquier frase o palabra en letras inclinadas de inclinación suave. Ideal para enfatizar conceptos clave en biografías, comentarios de Instagram, tweets y mensajes de WhatsApp. Explora también <Link href="/letras-personalizadas/texto-en-negrita" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">texto en negrita</Link>, <Link href="/letras-bonitas/letras-cursivas" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">letras cursivas manuscritas</Link> y <Link href="/letras-personalizadas/nombres-personalizados" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">nombres personalizados</Link>.
          </p>
        </header>

        {/* Converter Tool */}
        <Converter highlightStyleId="italic-serif" />

        {/* ARTÍCULO DETALLADO DEEP 1: El Arte del Texto Itálico Digital */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              𝘐 Tipografía Editorial
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cuándo Usar Texto en Itálica en Redes Sociales
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              El formato itálico proporciona dinamismo visual y énfasis sutil en composiciones escritas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Citas y Frases Célebres</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utiliza Serif Itálica (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">𝑕𝑎𝑧𝑙𝑜 𝑐𝑜𝑛 𝑝𝑎𝑠𝑖ó𝑛</code>) para diferenciar testimonios, citas bibliográficas o versos en publicaciones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Subtítulos y Cargos Profesionales</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Aplica Sans Itálica para la segunda línea de tu biografía de Instagram o LinkedIn, creando una distinción clara frente al título principal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">3. Términos en Idiomas Extranjeros</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Destaca expresiones en inglés, francés o latín (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">𝑐𝑎𝑟𝑝𝑒 𝑑𝑖𝑒𝑚</code>) para mantener una impecable redacción editorial.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">4. Énfasis Sutil y Reflexión</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                A diferencia de la negrita (que grita atención), la itálica sugiere un susurro o un matiz de voz interior más personal e introspectivo.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Itálica vs Cursiva: El Error Común que Debes Evitar */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              𝘐 Tipografía Editorial
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Itálica vs Cursiva: El Error Común que Debes Evitar
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Mucha gente confunde ambos términos: la itálica es texto normal inclinado (como este), mientras que la cursiva imita caligrafía manuscrita conectada — son estilos Unicode completamente distintos, no confundas uno con otro al elegir.
            </p>
          </div>
        </section>

        {/* Alphabet Reference Table */}
        <AlphabetReferenceTable highlightStyleId="sans-italic" />

        {/* Examples */}

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Texto Itálico" faqs={italicoFaqs} />
      </main>
    </div>
  );
}
