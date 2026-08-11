import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Letras Cursivas - Conversor de Fuentes Manuscritas ✒️",
  description:
    "Convierte texto normal en letras cursivas elegantes, caligrafía fina y manuscrita para copiar y pegar en Instagram, TikTok, WhatsApp y títulos.",
};

const cursivasFaqs = [
  {
    q: "¿Por qué las letras cursivas son el estilo más buscado en redes sociales?",
    a: "Las fuentes cursivas evocan distinción, caligrafía artesanal y sofisticación. Aportan un contraste visual de alto valor en perfiles de Instagram, nombres de canales y firmas sin perder legibilidad.",
  },
  {
    q: "¿Cómo copiar letras cursivas al portapapeles en celular o PC?",
    a: "Escribe tu palabra en la herramienta superior, elige la variante de cursiva (Script Fino, Negrita Cursiva o Manuscrita) y toca la tarjeta. Se copiará automáticamente al portapapeles.",
  },
  {
    q: "¿Preservan las letras cursivas los acentos en español (á, é, í, ó, ú, ñ)?",
    a: "¡Sí! A diferencia de conversores en inglés que generan caracteres rotos [?], nuestro motor asigna glifos cursivos con tildes o aplica diacríticos de combinación exacta.",
  },
  {
    q: "¿Son compatibles las letras cursivas con WhatsApp, TikTok e Instagram?",
    a: "100% compatibles. Al pertenecer al estándar internacional Unicode (Mathematical Script), funcionan en historias, bios, estados y comentarios de cualquier celular Android o iPhone.",
  },
  {
    q: "¿Puedo usar letras cursivas en marcas personales o logos?",
    a: "Sí, todos los caracteres Unicode son estándar público internacional y puedes usarlos libremente para marcas personales, firmas electrónicas, tarjetas de presentación y campañas sociales.",
  },
];

export default function LetrasCursivasPage() {
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
          <span className="text-[var(--foreground)] opacity-75">Letras Bonitas</span>
          <span>/</span>
          <span className="text-teal-600 dark:text-teal-400 font-bold">Letras Cursivas</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>✒️</span> Tipografía Caligráfica & Script Manuscrito
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras Cursivas y Manuscritas ✒️
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground)] opacity-80 leading-relaxed max-w-4xl font-medium">
            Transforma cualquier texto en hermosas letras cursivas finas, trazos manuscritos y <Link href="/letras-bonitas/caligrafia" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">caligrafía elegante</Link>. Copia con 1 solo toque y personaliza tus <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">biografías de Instagram</Link>, publicaciones e invitaciones digitales de forma gratuita.
          </p>
        </header>

        {/* Converter Tool */}
        <Converter highlightStyleId="cursive" />

        {/* ARTÍCULO DEEP 1: Con Enlaces Internos Contextuales */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ✒️ El Arte del Script Cursivo
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Guía de Estilo: Cuándo y Cómo Usar Letras Cursivas Digitales
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Las fuentes cursivas (Mathematical Script) representan sofisticación y personalidad. Para obtener el máximo impacto visual en tus proyectos, combínalas con nuestro <Link href="/letras-personalizadas/texto-italico" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">conversor de texto itálico</Link> o consulta el <Link href="/letras-bonitas/letras-cursivas" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">abecedario cursivo completo A-Z</Link>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Nombres Principales & Marcas</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utiliza la letra cursiva para destacar el nombre propio o la marca personal en el encabezado de tu perfil de Instagram o <Link href="/letras-bonitas/letras-firma" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">firma electrónica de correo</Link> (ej: <code className="text-teal-600 dark:text-teal-400">𝓒𝓪𝓻𝓵𝓸𝓼 𝓜𝓮𝓷𝓭𝓸𝔃𝓪</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Frases e Citas Célebres</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Las frases motivacionales en publicaciones o estados de WhatsApp cobran un valor poético cuando se presentan en caligrafía manuscrita estilizada combinada con <Link href="/letras-bonitas/letras-aesthetic" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">letras aesthetic</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Alphabet Reference Table */}
        <AlphabetReferenceTable highlightStyleId="cursive" />

        {/* Internal Linking Related Categories Widget */}
        <RelatedCategoriesWidget currentPath="/letras-bonitas/letras-cursivas" />

        <ExamplesSection />

        <FaqSection title="Preguntas Frecuentes sobre Letras Cursivas" faqs={cursivasFaqs} />
      </main>
    </div>
  );
}
