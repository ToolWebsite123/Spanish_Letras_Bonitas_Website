import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";
import fontStyles from "@/lib/fontStyles";
import convertText from "@/lib/convertText";

export const metadata: Metadata = {
  title: "Letras Cursivas - Conversor de Fuentes Manuscritas ✒️",
  description:
    "Convierte texto normal en letras cursivas elegantes, caligrafía fina y manuscrita para copiar y pegar en Instagram, TikTok, WhatsApp y títulos.",
  alternates: {
    canonical: "/letras-bonitas/letras-cursivas",
  },
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
  const cursiveStyle = fontStyles.find((f) => f.id === "cursive") || fontStyles[0];

  const occasionPhrases = [
    { category: "💍 Aniversario", phrase: "Feliz Aniversario Mi Amor" },
    { category: "💖 San Valentín", phrase: "Tú y Yo Por Siempre" },
    { category: "☀️ Buenos Días", phrase: "Que Tengas Un Lindo Día" },
    { category: "✨ Frase Motivacional", phrase: "Sueña En Grande Y Trabaja Duro" },
  ];
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras Cursivas y Manuscritas ✒️
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="cursive" />

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

        {/* SECTION D — 3 Variantes de Letras Cursivas que Puedes Elegir */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ✒️ Variantes Tipográficas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              3 Variantes de Letras Cursivas que Puedes Elegir
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              En nuestro conversor dispones de tres estilos cursivos Unicode diferenciados para adaptarse a la personalidad de tu texto:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">✍️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                1. Cursiva Clásica (Mathematical Script)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                El estilo más refinado y legible. Transforma las letras estándar en trazos fluídos y elegantes con remates tradicionales. Perfecto para biografías institucionales y nombres personales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">✒️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                2. Script Negrita (Bold Script)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Una variante con trazo grueso e imponente. Combina la sofisticación de la caligrafía clásica con la fuerza visual de la negrita, ideal para títulos destacados y marcas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">📜</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                3. Manuscrita Fina (Caligrafía Ornamental)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Trazos delicados de pluma estilográfica. Excelente para firmas poéticas, dedicatorias y mensajes afectivos en tarjetas virtuales.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION E — Letras Cursivas en Cada Red Social: Guía Rápida */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📱 Compatibilidad Social
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Letras Cursivas en Cada Red Social: Guía Rápida
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Aprende dónde y cómo lucen mejor tus letras cursivas en las plataformas digitales más populares:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">📸</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Instagram (Bio & Destacados)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utilízala en la primera línea de tu biografía (tu nombre o profesión) para lograr una estética limpia y profesional. También es excelente para títulos de historias destacadas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">💬</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                WhatsApp (Estados & Mensajes)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Añade un toque único a tus frases diarias en los estados de WhatsApp o destaca palabras clave en chats privados sin interferir con la lectura.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🎵</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                TikTok (Nombres de Perfil & Captions)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Destaca tu nombre en la parte superior de tu canal para que tu cuenta sea fácilmente identificable en los comentarios y videos virales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">📘</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Facebook (Publicaciones & Perfil)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Embellece eventos especiales, invitaciones digitales a cumpleaños o aniversarios y publicaciones destacadas en muros y grupos.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION F — Frases en Cursiva para Momentos Especiales */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🎉 Plantillas Dinámicas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Frases en Cursiva para Momentos Especiales
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Explora ejemplos de frases especiales convertidas en tiempo real con nuestra tipografía cursiva:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
            {occasionPhrases.map((item, idx) => {
              const converted = convertText(item.phrase, cursiveStyle.map, cursiveStyle.id);
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
                    {item.category}
                  </span>
                  <p className="text-[var(--foreground)] font-semibold text-xs opacity-75">
                    "{item.phrase}"
                  </p>
                  <div className="p-3.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] font-mono text-sm sm:text-base text-teal-600 dark:text-teal-300 break-words flex items-center justify-between gap-2 shadow-inner">
                    <span className="select-all">{converted}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Alphabet Reference Table */}
        <AlphabetReferenceTable highlightStyleId="cursive" />

        {/* Internal Linking Related Categories Widget */}
        <RelatedCategoriesWidget currentPath="/letras-bonitas/letras-cursivas" />


        <FaqSection title="Preguntas Frecuentes sobre Letras Cursivas" faqs={cursivasFaqs} />
      </main>
    </div>
  );
}
