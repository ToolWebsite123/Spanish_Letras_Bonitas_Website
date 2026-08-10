import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import SimpleCursiveConverter from "@/components/SimpleCursiveConverter";
import FaqSection from "@/components/FaqSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Alfabeto Cursivo Completo - Abecedario A-Z ✒️",
  description:
    "Abecedario cursivo completo en mayúsculas y minúsculas de la A a la Z. Consulta glifo por glifo, copia letras sueltas e iniciales individuales con 1 clic.",
};

const alfabetoCursivoFaqs = [
  {
    q: "¿Cómo copiar una sola letra cursiva en lugar de una frase completa?",
    a: "En nuestra tabla del abecedario interactiva superior, toca directamente sobre la casilla de la letra mayúscula (ej: 𝒜) o minúscula (ej: 𝒶) que necesites y el carácter se copiará instantáneamente al portapapeles de tu dispositivo.",
  },
  {
    q: "¿Por qué algunas letras cursivas minúsculas como la 'e' (ℯ) o la 'g' (ℊ) tienen códigos Unicode especiales?",
    a: "En la especificación internacional Unicode, ciertas letras caligráficas (como e, g, h, o, L) fueron registradas originalmente en bloques matemáticos históricos anteriores. Nuestro diccionario integra todos estos glifos para garantizar coherencia visual completa.",
  },
  {
    q: "¿Puedo utilizar una sola inicial mayúscula cursiva con letras normales en mi biografía?",
    a: "¡Sí! Es una técnica de diseño muy popular en Instagram, TikTok y firmas electrónicas: copia una inicial grande cursiva desde nuestra tabla (ej: ℳ) y escribe el resto de tu nombre en letras estándar para crear un contraste estilizado.",
  },
  {
    q: "¿El abecedario cursivo incluye la letra Ñ y vocales con acento en español?",
    a: "¡Absolutamente! Nuestro muestrario adaptado al idioma español incluye la Ñ mayúscula y minúscula (𝒩̃ / ñ), así como las vocales acentuadas (á, é, í, ó, ú) adaptadas al trazo cursivo.",
  },
  {
    q: "¿En qué aplicaciones y redes sociales puedo pegar estas letras cursivas sueltas?",
    a: "Las letras cursivas Unicode (Mathematical Script) se pueden pegar sin problemas en el 100% de las plataformas digitales: Instagram (biografías, nombres y comentarios), WhatsApp, TikTok, Facebook, Discord, Word y Photoshop.",
  },
  {
    q: "¿Cuál es la diferencia entre este muestrario de abecedario y la página de letras cursivas?",
    a: "Esta página está diseñada específicamente como un diccionario de consulta rápida para copiar letras e iniciales individuales de la A a la Z. Si buscas transformar frases largas con múltiples marcos y decoraciones, te recomendamos visitar nuestro conversor de letras cursivas.",
  },
];

export default function AlfabetoCursivoPage() {
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
          <span className="text-slate-400">Alfabeto Completo</span>
          <span>/</span>
          <span className="text-teal-400 font-bold">Alfabeto Cursivo</span>
        </nav>

        {/* Hero Header Focused on Letter-by-Letter Reference */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>✒️</span> Diccionario & Muestrario de Caracteres A-Z
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Alfabeto Cursivo Completo A-Z ✒️
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Consulta y copia carácter por carácter cada letra del <strong className="text-teal-400 font-extrabold">abecedario cursivo en mayúsculas (𝒜-𝒵) y minúsculas (𝒶-𝓏)</strong>. Ideal para buscar iniciales de nombres, crear monogramas o copiar letras sueltas de forma individual.
          </p>
        </header>

        {/* 1. PROMINENT ALPHABET REFERENCE TABLE (Primary Tool) */}
        <AlphabetReferenceTable
          highlightStyleId="cursive"
          title="Tabla Interactiva del Abecedario Cursivo A-Z"
          subtitle="Toca sobre cualquier letra mayúscula (𝒜, ℬ, 𝒞) o minúscula (𝒶, 𝒷, 𝒸) para copiarla instantáneamente a tu portapapeles."
        />

        {/* 2. UNIQUE SECTION: Guía para Copiar Letras Individuales vs Frases */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              ✒️ Guía de Uso Letra por Letra
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Cómo Copiar Letras Cursivas Individuales e Iniciales
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              A diferencia de un conversor general de frases, esta herramienta está optimizada para consultar el abecedario posición por posición:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">1. Copiar una Inicial Cursiva Suelta</span>
              <p className="text-slate-300 leading-relaxed">
                Toca cualquier casilla de la tabla superior para copiar únicamente la letra mayúscula (ej: <code className="text-teal-400 font-bold">𝒜</code>) o minúscula (ej: <code className="text-teal-400 font-bold">𝒶</code>). Perfecto para armar siglas o acrónimos personalizados.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">2. Monogramas & Combinaciones Aesthetic</span>
              <p className="text-slate-300 leading-relaxed">
                Combina 1 primera letra cursiva en mayúscula con caracteres normales o fuentes diminutas (ej: <code className="text-teal-400 font-bold">ℳaría</code>) para crear una estética limpia y sofisticada en tu perfil de Instagram.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">3. Compatibilidad Universal Unicode</span>
              <p className="text-slate-300 leading-relaxed">
                Cada letra del abecedario corresponde al estándar internacional <code className="text-teal-400 font-bold">Mathematical Script</code>. Al copiar una letra suelta, se visualizará idéntica en iPhone, Android, WhatsApp e Historias.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">4. Conversión de Frases Completas</span>
              <p className="text-slate-300 leading-relaxed">
                Si además de buscar letras sueltas necesitas transformar una oración completa de una sola vez, utiliza la herramienta rápida a continuación.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SIMPLE CURSIVE PHRASE CONVERTER TOOL */}
        <SimpleCursiveConverter />

        {/* Internal Linking Widget */}
        <RelatedCategoriesWidget currentPath="/alfabeto-completo/alfabeto-cursivo" />

        {/* 4. UNIQUE ALPHABET LOOKUP FAQ SECTION */}
        <FaqSection title="Preguntas Frecuentes sobre el Abecedario Cursivo" faqs={alfabetoCursivoFaqs} />
      </main>
    </div>
  );
}
