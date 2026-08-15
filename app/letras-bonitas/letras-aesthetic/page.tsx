import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Letras Aesthetic - Fuentes Lindas y Minimalistas ✨",
  description:
    "Convierte texto en letras aesthetic, fuentes lindas, estilos espacio amplio (Fullwidth), cursivas y adornos de destellos para copiar y pegar.",
  alternates: {
    canonical: "/letras-bonitas/letras-aesthetic",
  },
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras Aesthetic ✨
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="fullwidth" />

        {/* ARTÍCULO DETALLADO DEEP 1: Las 4 Variantes de la Estética Aesthetic */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ✨ Variantes Estéticas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Guía de Estilo: Las 4 Tendencias Tipográficas Aesthetic Más Populares
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              La estética aesthetic abarca distintos estados de ánimo visuales. Combina tus letras con nuestros <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">símbolos coquette con moños</Link> y elige la corriente que mejor defina tu canal:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Fullwidth o Ancho Retro (Ｆｕｌｌｗｉｄｔｈ)</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Inspirado en la estética cibernética de los 90 y los teclados japoneses. Ocupa el doble de espacio horizontal transmitiendo elegancia espacial.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Small Caps o Letras Diminutas (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ)</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Minimiza el tamaño visual de las letras mayúsculas creando un look sofisticado y editorial para biografías ordenadas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">3. Script Cursivo Romántico (𝓡𝓸𝓶á𝓷𝓽𝓲𝓬𝓸)</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Trazos continuos delicados con curvas suaves para transmitir calidez, poesía e introspección.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">4. Marcos de Estrellas y Lunas (✨ 🌙)</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Acompaña tu frase con viñetas estelares en los extremos para enmarcar el texto con magia visual.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Aesthetic vs Cursiva: La Diferencia Clave */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ✨ Comparativa de Estilos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Aesthetic vs Cursiva: La Diferencia Clave
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Aprende a diferenciar ambas tendencias para usarlas en la ocasión adecuada:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                1. Fuentes Aesthetic (Fullwidth & Small Caps)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Prioriza la amplitud espacial, la simetría y los caracteres retro/vaporwave (Ｆｕｌｌｗｉｄｔｈ y ꜱᴍᴀʟʟ ᴄᴀᴘꜱ). Ideal para bios limpias, títulos relajados y estética de redes sociales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                2. Fuentes Cursivas (Mathematical Script)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Se basa en trazos continuos de pluma manuscrita (𝓒𝓾𝓻𝓼𝓲𝓿𝓪). Transmite elegancia formal, poesía, firmas personales e invitaciones tradicionales.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION E — Combina Aesthetic con Emojis para Más Impacto */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🌸 Combinaciones Visuales
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Combina Aesthetic con Emojis para Más Impacto
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Potencia el dinamismo visual de tu texto intercalando emojis y símbolos de tono suave:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">✨</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Marcos con Destellos y Estrellas
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Encuadra palabras clave con estrellas (✨ 𝒯𝑒𝓍𝓉𝑜 ✨) para centrar la atención del lector en publicaciones de Instagram.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🎀</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Moños & Estética Coquette
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Combina fuentes delicadas con moños (🎀) y corazones suaves para un look romántico y dulce en tu perfil.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🌙</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Elementos de Naturaleza & Nubes
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Añade nubes (☁️), lunas (🌙) y flores de cerezo (🌸) para dar una vibra relajada y nostálgica.
              </p>
            </div>
          </div>
        </section>

        {/* Alphabet Reference Table */}
        <AlphabetReferenceTable highlightStyleId="fullwidth" />

        {/* Related Categories Widget */}
        <RelatedCategoriesWidget currentPath="/letras-bonitas/letras-aesthetic" />

        {/* Examples */}

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Letras Aesthetic" faqs={aestheticFaqs} />
      </main>
    </div>
  );
}
