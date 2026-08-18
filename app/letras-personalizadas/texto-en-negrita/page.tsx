import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Texto en Negrita - Conversor de Letras Negritas para Copiar y Pegar",
  description:
    "Convierte texto normal a letras en negrita (Bold Sans, Serif, Italic) para destacar palabras clave en Facebook, Instagram, WhatsApp y TikTok.",
  alternates: {
    canonical: "/letras-personalizadas/texto-en-negrita",
  },
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Texto en Negrita (Bold Text Generator) 💪
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="bold" />

        {/* ARTÍCULO DETALLADO DEEP 1: Por qué la Negrita es la Mejor Herramienta de Lectura Rápida */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💪 Psicología del Énfasis Visual
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Guía Definitiva: Cómo el Texto en Negrita Multiplica por 3 la Retención en Redes Sociales
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              En plataformas digitales dominadas por el desplazamiento rápido (scrolling continuo), la mayoría de los usuarios no lee cada palabra de una publicación. En su lugar, el ojo humano realiza un patrullaje visual rápido buscando puntos de anclaje de mayor peso y contraste.
            </p>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Utilizar <strong className="text-teal-600 dark:text-teal-400">letras en negrita (Bold Sans y Bold Serif)</strong> combinadas con nuestro <Link href="/letras-personalizadas/texto-italico" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">conversor de texto itálico</Link> genera un contraste tipográfico inmediato que detiene la vista del lector justo en la información estratégica de tu mensaje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Destacar Ofertas y Precios</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                En publicaciones comerciales o tiendas online de Instagram y Facebook, formatear el precio, el porcentaje de descuento o el código de cupón en negrita (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">50% DE DESCUENTO</code>) incrementa el porcentaje de clics hacia tu enlace.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Titulares de Enganche en Copys</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Empieza siempre la primera oración de tu descripción o hilo con un titular en mayúsculas negritas. Esto asegura que la vista se detenga antes de que el usuario pase al siguiente post.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">3. Marcas Personales y Profesión</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Formatea la casilla del nombre o la primera línea de tu Bio con letras negritas limpias para transmitir firmeza, autoridad y profesionalismo en tu nicho.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">4. Llamados a la Acción (CTA)</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Guía al usuario hacia la acción deseada utilizando negritas justo antes de un enlace o botón (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">👇 HAZ CLIC AQUÍ PARA MÁS INFO</code>).
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Negrita Sans vs Negrita Serif: ¿Cuál Elegir? */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📊 Comparativa de Estilos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Negrita Sans vs Negrita Serif: ¿Cuál Elegir?
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Conoce cuál variante de negrita se adapta mejor al formato y la intención de tu publicación:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Negrita Sans (Sin Remates)
              </span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                La <strong className="text-teal-600 dark:text-teal-400 font-bold">Negrita Sans</strong> (sin remates) se ve moderna y limpia, ideal para bios de Instagram y TikTok, nombres de usuario y llamados a la acción rápidos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Negrita Serif (Con Remates)
              </span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                La <strong className="text-teal-600 dark:text-teal-400 font-bold">Negrita Serif</strong> (con remates) transmite formalidad y autoridad, mejor para citas célebres, anuncios profesionales o textos tipo &quot;editorial&quot;.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION E — Por Qué la Negrita Mejora el Engagement en Publicaciones Largas */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📈 Optimización de Engagement
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Por Qué la Negrita Mejora el Engagement en Publicaciones Largas
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              En textos largos (como descripciones de LinkedIn o publicaciones de Facebook), usar negrita en la primera línea o en palabras clave ayuda al lector a decidir en segundos si vale la pena seguir leyendo — mejora la tasa de lectura completa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">👀</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Gancho Inicial Inmediato
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                El primer renglón en negrita actúa como titular atrapante que detiene el scroll acelerado en redes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">⚡</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Escaneo Rápido de Puntos Clave
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Palabras destacadas en negrita guían la mirada del lector a través de los conceptos más valiosos del mensaje.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🚀</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Mayor Retención & Clics
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Facilitar la lectura aumenta significativamente el tiempo de permanencia y las respuestas al llamado a la acción.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARATIVA DE ESTILOS EN NEGRITA */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📊 Variantes Tipográficas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Comparativa de las 4 Variantes de Letras Negritas Unicode
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--input-bg)] flex flex-col gap-2">
              <span className="text-xs font-black text-teal-600 dark:text-teal-400">Bold Sans</span>
              <span className="text-base font-extrabold text-[var(--foreground)] font-mono">𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀</span>
              <span className="text-[11px] text-[var(--foreground)] opacity-75">Moderna, limpia y de trazo directo.</span>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--input-bg)] flex flex-col gap-2">
              <span className="text-xs font-black text-teal-600 dark:text-teal-400">Bold Serif</span>
              <span className="text-base font-extrabold text-[var(--foreground)] font-mono">𝐁𝐨𝐥𝐝 𝐒𝐞𝐫𝐢𝐟</span>
              <span className="text-[11px] text-[var(--foreground)] opacity-75">Elegante con remates clásicos.</span>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--input-bg)] flex flex-col gap-2">
              <span className="text-xs font-black text-teal-600 dark:text-teal-400">Bold Italic</span>
              <span className="text-base font-extrabold text-[var(--foreground)] font-mono">𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄</span>
              <span className="text-[11px] text-[var(--foreground)] opacity-75">Combinación de grosor e inclinación.</span>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--input-bg)] flex flex-col gap-2">
              <span className="text-xs font-black text-teal-600 dark:text-teal-400">Bold Script</span>
              <span className="text-base font-extrabold text-[var(--foreground)] font-mono">𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽</span>
              <span className="text-[11px] text-[var(--foreground)] opacity-75">Caligrafía de trazo grueso.</span>
            </div>
          </div>
        </section>

        {/* Alphabet Reference Table */}
        <AlphabetReferenceTable highlightStyleId="bold" />

        {/* Related Categories Widget */}
        <RelatedCategoriesWidget currentPath="/letras-personalizadas/texto-en-negrita" />

        {/* Examples */}

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Texto en Negrita" faqs={negritaFaqs} />
      </main>
    </div>
  );
}
