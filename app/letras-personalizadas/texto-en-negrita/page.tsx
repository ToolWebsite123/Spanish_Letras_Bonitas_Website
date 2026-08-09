import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Texto en Negrita - Conversor de Letras Negritas para Copiar y Pegar <b>",
  description:
    "Convierte texto normal a letras en negrita (Bold Sans, Bold Serif, Bold Italic) para destacar palabras clave en Facebook, Instagram, WhatsApp, TikTok y comentarios.",
};

const negritaFaqs = [
  {
    q: "¿Por qué las letras en negrita Unicode no pierden el formato al pegarlas en redes sociales?",
    a: "Las redes sociales como Instagram, TikTok y Facebook no cuentan con una barra de herramientas con botón de negrita. Nuestro conversor no aplica etiquetas HTML, sino que transforma cada carácter en un glifo del estándar internacional Unicode (Mathematical Bold), garantizando que el énfasis en negrita se conserve intacto en cualquier plataforma.",
  },
  {
    q: "¿Cuál es la diferencia entre Negrita Sans y Negrita Serif?",
    a: "Negrita Sans (𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀) ofrece trazos limpios, modernos y sin remates, ideal para anuncios, títulos de TikTok y nombres de usuario. Negrita Serif (𝐁𝐨𝐥𝐝 𝐒𝐞𝐫𝐢𝐟) incluye pequeños remates clásicos en los extremos de las letras, perfecta para artículos formales, citas y publicaciones institucionales.",
  },
  {
    q: "¿Cómo usar texto en negrita para mejorar las ventas y copys comerciales?",
    a: "Destaca siempre el precio, la fecha límite de la oferta, los códigos de descuento o el primer renglón del anuncio con texto en negrita. El ojo humano escanea el contenido y se detiene automáticamente en las palabras con mayor grosor visual.",
  },
  {
    q: "¿Preservan las letras en negrita los acentos en español (á, é, í, ó, ú, ñ)?",
    a: "¡Sí! Nuestro conversor integra un mapa de caracteres adaptado al idioma español que garantiza que vocales acentuadas como 'Corazón' o 'Información' y la letra 'Ñ' se conviertan con perfecta ortografía.",
  },
  {
    q: "¿Afecta el uso de negrita al límite de caracteres en biografías?",
    a: "Los caracteres Unicode en negrita matemática equivalen exactamente al mismo número de posiciones de texto en Instagram (150 caracteres max) y TikTok (80 caracteres max). Te recomendamos usar nuestro contador dinámico en vivo arriba.",
  },
  {
    q: "¿Se pueden combinar letras en negrita con cursiva en la misma frase?",
    a: "¡Sí! Ofrecemos la variante Negrita Cursiva (𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄) que combina la intensidad del grosor con la elegancia del trazo inclinado.",
  },
];

export default function TextoEnNegritaPage() {
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
          <span className="text-pink-400 font-bold">Texto en Negrita</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
            <span>💪</span> Generador de Letras Negritas Unicode 100% Gratuito
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Conversor de Texto en Negrita (Bold Text Generator) 💪
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Transforma cualquier texto convencional en <strong className="text-pink-400 font-extrabold">letras en negrita Sans, Serif, Cursiva Negrita y Bloques en Negrita</strong>. Copia con 1 solo toque y destaca tus publicaciones de Facebook, <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-pink-400 underline font-bold hover:text-pink-300">biografías de Instagram</Link>, descripciones de TikTok y mensajes de WhatsApp sin perder el formato.
          </p>
        </header>

        {/* Converter Tool */}
        <Converter highlightStyleId="bold-sans" />

        {/* ARTÍCULO DETALLADO DEEP 1: Por qué la Negrita es la Mejor Herramienta de Lectura Rápida */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 self-start border border-purple-500/30">
              💪 Psicología del Énfasis Visual
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Guía Definitiva: Cómo el Texto en Negrita Multiplica por 3 la Retención en Redes Sociales
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              En plataformas digitales dominadas por el desplazamiento rápido (scrolling continuo), la mayoría de los usuarios no lee cada palabra de una publicación. En su lugar, el ojo humano realiza un patrullaje visual rápido buscando puntos de anclaje de mayor peso y contraste.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Utilizar <strong className="text-pink-400">letras en negrita (Bold Sans y Bold Serif)</strong> combinadas con nuestro <Link href="/letras-personalizadas/texto-italico" className="text-pink-400 underline font-bold hover:text-pink-300">conversor de texto itálico</Link> genera un contraste tipográfico inmediato que detiene la vista del lector justo en la información estratégica de tu mensaje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">1. Destacar Ofertas y Precios</span>
              <p className="text-slate-300 leading-relaxed">
                En publicaciones comerciales o tiendas online de Instagram y Facebook, formatear el precio, el porcentaje de descuento o el código de cupón en negrita (ej: <code className="text-pink-400 font-bold">50% DE DESCUENTO</code>) incrementa el porcentaje de clics hacia tu enlace.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">2. Titulares de Enganche en Copys</span>
              <p className="text-slate-300 leading-relaxed">
                Empieza siempre la primera oración de tu descripción o hilo con un titular en mayúsculas negritas. Esto asegura que la vista se detenga antes de que el usuario pase al siguiente post.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">3. Marcas Personales y Profesión</span>
              <p className="text-slate-300 leading-relaxed">
                Formatea la casilla del nombre o la primera línea de tu Bio con letras negritas limpias para transmitir firmeza, autoridad y profesionalismo en tu nicho.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">4. Llamados a la Acción (CTA)</span>
              <p className="text-slate-300 leading-relaxed">
                Guía al usuario hacia la acción deseada utilizando negritas justo antes de un enlace o botón (ej: <code className="text-pink-400 font-bold">👇 HAZ CLIC AQUÍ PARA MÁS INFO</code>).
              </p>
            </div>
          </div>
        </section>

        {/* COMPARATIVA DE ESTILOS EN NEGRITA */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 self-start border border-purple-500/30">
              📊 Variantes Tipográficas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Comparativa de las 4 Variantes de Letras Negritas Unicode
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-2">
              <span className="text-xs font-black text-pink-400">Bold Sans</span>
              <span className="text-base font-extrabold text-slate-100 font-mono">𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀</span>
              <span className="text-[11px] text-slate-400">Moderna, limpia y de trazo directo.</span>
            </div>

            <div className="p-5 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-2">
              <span className="text-xs font-black text-pink-400">Bold Serif</span>
              <span className="text-base font-extrabold text-slate-100 font-mono">𝐁𝐨𝐥𝐝 𝐒𝐞𝐫𝐢𝐟</span>
              <span className="text-[11px] text-slate-400">Elegante con remates clásicos.</span>
            </div>

            <div className="p-5 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-2">
              <span className="text-xs font-black text-pink-400">Bold Italic</span>
              <span className="text-base font-extrabold text-slate-100 font-mono">𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄</span>
              <span className="text-[11px] text-slate-400">Combinación de grosor e inclinación.</span>
            </div>

            <div className="p-5 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-2">
              <span className="text-xs font-black text-pink-400">Bold Script</span>
              <span className="text-base font-extrabold text-slate-100 font-mono">𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽</span>
              <span className="text-[11px] text-slate-400">Caligrafía de trazo grueso.</span>
            </div>
          </div>
        </section>

        {/* Alphabet Reference Table */}
        <AlphabetReferenceTable highlightStyleId="bold-sans" />

        {/* Related Categories Widget */}
        <RelatedCategoriesWidget currentPath="/letras-personalizadas/texto-en-negrita" />

        {/* Examples */}
        <ExamplesSection />

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Texto en Negrita" faqs={negritaFaqs} />
      </main>
    </div>
  );
}
