import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Letras Cursivas - Conversor de Tipografía Script Elegante ✒️",
  description:
    "Convierte tu texto a letras cursivas, manuscritas y caligráficas para copiar y pegar. Decora nombres, cartas, biografías de Instagram y mensajes especiales gratis.",
};

const cursivasFaqs = [
  {
    q: "¿Qué diferencia existe entre las letras cursivas Unicode y una fuente instalada?",
    a: "Las fuentes instaladas (archivos .ttf o .otf) solo se ven en el programa donde se instalan. En cambio, las letras cursivas Unicode que generas aquí son caracteres de texto universales que se pueden copiar y pegar en Instagram, WhatsApp o correos y se verán iguales en cualquier pantalla.",
  },
  {
    q: "¿Por qué algunas palabras en cursiva se ven con diferentes tipos de trazo?",
    a: "El estándar Unicode contiene dos bloques de cursiva principales: Cursiva Script Normal (𝓒𝓾𝓻𝓼𝓲𝓿𝓪) y Cursiva Script de Trazo Fino (𝒞𝓊𝓇𝓈𝒾𝓋𝒶). Nuestro conversor te permite probar ambos estilos para que elijas el nivel de elegancia que prefieras.",
  },
  {
    q: "¿Funciona el conversor de letras cursivas con tildes y nombres en español?",
    a: "¡Sí! Nuestro motor está calibrado para mantener las vocales acentuadas (á, é, í, ó, ú) y la letra ñ dentro de la conversión cursiva, evitando que aparezcan caracteres rotos.",
  },
  {
    q: "¿En qué casos es mejor utilizar tipografía cursiva?",
    a: "Es idónea para firmas digitales, frases románticas, dedicatorias de cumpleaños, titulares de historias en Instagram y nombres de perfil donde desees destacar clase y delicadeza.",
  },
  {
    q: "¿Cómo usar letras cursivas en invitaciones digitales de boda o aniversarios?",
    a: "Escribe los nombres de los festejados en la herramienta, convierte el texto a Cursiva Elegante (Bold Script), cópialo y pégalo directamente en la plantilla de Canva, WhatsApp o correo.",
  },
  {
    q: "¿Las letras cursivas se leen bien en pantallas pequeñas de celular?",
    a: "Sí, nuestras fuentes cursivas utilizan glifos equilibrados. Si deseas mayor legibilidad en textos largos, te sugerimos utilizar el control deslizante de tamaño en 20px o 24px.",
  },
];

export default function LetrasCursivasPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Letras Bonitas</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Letras Cursivas</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
            Letras Cursivas y Manuscritas Elegantes ✒️
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
            Transforma cualquier palabra en hermosos trazos cursivos y caligráficos. Ideal para firmar tus publicaciones, enviar notas afectuosas, diseñar invitaciones y renovar tu biografía con un estilo distinguido.
          </p>
        </header>

        {/* Converter focused on Cursive */}
        <Converter highlightStyleId="cursive" />

        {/* ARTÍCULO DETALLADO 1: Origen y Elegancia de la Cursiva Script */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>✒️</span> Historia y Elegancia de la Escritura Cursiva Digital
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            La caligrafía manuscrita ha sido desde hace siglos el símbolo supremo de sofisticación, delicadeza y toque personal en cartas de amor, títulos honoríficos y correspondencia de alta gala. En el mundo digital contemporáneo, los bloques tipográficos <code className="text-purple-600 font-mono font-semibold">Mathematical Script (U+1D49C)</code> permiten replicar esa elegancia artesanal sin necesidad de pluma de pluma ni tinta.
          </p>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Las letras cursivas digitales imitan las variaciones de presión de las plumas de punta flexible, ofreciendo trazos ascendentes delgados y trazos descendentes con mayor grosor. Esto genera una armonía visual que capta de inmediato la atención en publicaciones de Instagram y mensajes de WhatsApp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
            <div className="p-5 rounded-xl border border-purple-100 dark:border-purple-900/50 bg-purple-50/40 dark:bg-purple-950/20 flex flex-col gap-2">
              <h3 className="font-bold text-base text-purple-700 dark:text-purple-300">𝓒𝓾𝓻𝓼𝓲𝓿𝓪 𝓝𝓮𝓰𝓻𝓲𝓽𝓪 (Bold Script)</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Trazos con mayor volumen y contraste. Perfectos para destacar nombres propios en títulos de fotos, firmas destacadas en la biografía de Instagram y tarjetas de felicitación.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/40 dark:bg-indigo-950/20 flex flex-col gap-2">
              <h3 className="font-bold text-base text-indigo-700 dark:text-indigo-300">𝒞𝓊𝓇𝓈𝒾𝓋𝒶 𝐹𝒾𝓃𝒶 (Fine Script)</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Líneas delgadas y sutiles que recuerdan la caligrafía Copperplate del siglo XVIII. Ideales para poemas, versos románticos y frases reflexivas.
              </p>
            </div>
          </div>
        </section>

        {/* ARTÍCULO DETALLADO 2: Aplicaciones Prácticas y Ejemplos Cursivos */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>💌</span> Usos Recomendados y Frases Cursivas Listas para Copiar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Invitaciones y Aniversarios</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">𝓝𝓾𝓮𝓼𝓽𝓻𝓪 𝓗𝓲𝓼𝓽𝓸𝓻𝓲𝓪 𝓭𝓮 𝓐𝓶𝓸𝓻 💕 𝟤𝟢𝟤𝟦</p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Firmas Digitales</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">𝓐𝓉ℯ𝓃𝓉𝒶𝓂ℯ𝓃𝓉ℯ, 𝓜𝒶𝓇𝒾𝒶 ℱℯ𝓇𝓃𝒶𝓃𝒹𝒶 ✨</p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Titulares de Historias</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">𝓡𝓮𝓬𝓾𝓮𝓻𝓭𝓸𝓼 𝓘𝓷𝓸𝓵𝓿𝓲𝓭𝓪𝓫𝓵𝓮𝓼 🌴 𝓢𝓾𝓶𝓶𝓮𝓻 𝓥𝓲𝓫𝓮𝓼</p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Citas Románticas</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">𝒞𝑜𝓃𝓉𝒾𝑔𝑜, 𝓉𝑜𝒹𝑜 𝑒𝓈 𝓂á𝓈 𝒷𝑜𝓃𝒾𝓉𝑜 🌹</p>
            </div>
          </div>
        </section>

        {/* Unique FAQ */}
        <FaqSection title="Preguntas Frecuentes sobre Letras Cursivas" faqs={cursivasFaqs} />
      </main>
    </div>
  );
}
