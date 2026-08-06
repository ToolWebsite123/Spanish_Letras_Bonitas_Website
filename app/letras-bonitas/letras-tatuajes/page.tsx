import Link from "next/link";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Letras para Tatuajes | Convertidor de Tipografías y Lettering",
  description:
    "Convierte tu frase o nombre a letras para tatuajes en estilo Serif Bold Italic. Encuentra ideas de lettering, frases cortas con significado y nombres para tatuar gratis.",
};

const tattooLimits = [
  { platform: "Frases Cortas en Muñeca / Antebrazo", limit: "Recomendado: 2 - 5 palabras" },
  { platform: "Nombres / Fechas en Costilla", limit: "Recomendado: 1 - 3 palabras" },
  { platform: "Lettering Pecho / Espalda", limit: "Recomendado: 3 - 8 palabras" },
  { platform: "Tatuaje de Tobillo / Cuello", limit: "Recomendado: 1 - 2 palabras" },
  { platform: "Frase en Clavícula / Homoplato", limit: "Recomendado: 3 - 6 palabras" },
  { platform: "Iniciales / Monogramas", limit: "1 - 3 letras" },
];

const tattooExamples = [
  {
    persona: "Frase de Vida / Motivación",
    text: "𝑭𝒂𝒎𝒊𝒍𝒊𝒂 𝒆𝒔 𝒕𝒐𝒅𝒐 🌿",
  },
  {
    persona: "Amor Propio / Fuerza",
    text: "𝑺𝒊𝒆𝒎𝒑𝒓𝒆 𝒇𝒖𝒆𝒓𝒕𝒆 ⚔️",
  },
  {
    persona: "Frase Corta en Latín",
    text: "𝑪𝒂𝒓𝒑𝒆 𝒅𝒊𝒆𝒎 🌙",
  },
  {
    persona: "Recordatorio Personal",
    text: "𝑨𝒎𝒐𝒓 𝒇𝒂𝒕𝒊 ✨",
  },
  {
    persona: "Nombre de Hijo / Familiar",
    text: "𝑽𝒂𝒍𝒆𝒏𝒕𝒊𝒏𝒂 🤍 𝟏𝟒.𝟎𝟓.𝟐𝟎𝟐𝟒",
  },
  {
    persona: "Frase de Resiliencia",
    text: "𝑵𝒂𝒅𝒂 𝒆𝒔 𝒑𝒂𝒓𝒂 𝒔𝒊𝒆𝒎𝒑𝒓𝒆",
  },
  {
    persona: "Inspiración de Arte / Pasión",
    text: "𝑺𝒖𝒆ñ𝒂 𝒔𝒊𝒏 𝒎𝒊𝒆𝒅𝒐 🕊️",
  },
  {
    persona: "Frase Minimalista en Elegante",
    text: "𝑽𝒊𝒗𝒆 𝒚 𝒅𝒆𝒋𝒂 𝒗𝒊𝒗𝒊𝒓",
  },
  {
    persona: "Lettering para Brazo",
    text: "𝑺𝒊𝒆𝒎𝒑𝒓𝒆 𝒆𝒏 𝒎𝒊 𝒎𝒆𝒎𝒐𝒓𝒊𝒂 🖤",
  },
  {
    persona: "Tatuaje de Pareja / Promesa",
    text: "𝑱𝒖𝒏𝒕𝒐𝒔 𝒑𝒐𝒓 𝒔𝒊𝒆𝒎𝒑𝒓𝒆 ♾️",
  },
];

const faqs = [
  {
    q: "¿Cómo funciona el generador de letras para tatuajes?",
    a: "El convertidor transforma tu texto ingresado a caracteres tipográficos Unicode Serif Bold Italic, permitiéndote visualizar instantáneamente cómo luciría tu frase o nombre en lettering curvo remarcado.",
  },
  {
    q: "¿Puedo llevar estos diseños a mi tatuador?",
    a: "¡Sí! Puedes copiar la frase estilizada o tomar una captura de pantalla para mostrársela a tu tatuador como referencia visual del estilo de letra y distribución.",
  },
  {
    q: "¿Cuáles son las frases más populares para tatuarse?",
    a: "Las frases más buscadas incluyen recordar a la familia ('Familia es todo'), resiliencia ('Siempre fuerte'), frases en latín ('Carpe diem') y nombres o fechas de nacimiento.",
  },
  {
    q: "¿Qué tamaño de letra se recomienda para un tatuaje en la muñeca?",
    a: "Para zonas pequeñas como la muñeca o clavícula, se recomiendan frases cortas de 2 a 4 palabras con tipografía clara para evitar que con los años la tinta se expanda excesivamente.",
  },
  {
    q: "¿Es gratis usar el diseñador de letras para tatuaje?",
    a: "Sí, la herramienta es totalmente gratuita y sin límites de generación o copia.",
  },
  {
    q: "¿Puedo convertir números y fechas para tatuajes?",
    a: "Sí, el convertidor permite números romanos, fechas con puntos o barras y nombres combinados con símbolos minimalistas.",
  },
  {
    q: "¿Cómo asegurar que el lettering del tatuaje envejezca bien?",
    a: "Elige un tamaño de letra adecuado con espacio suficiente entre trazos. Las tipografías tipo Serif Bold Italic ofrecen una estructura definida que mantiene excelente legibilidad.",
  },
  {
    q: "¿Se pueden copiar las letras directamente al teléfono?",
    a: "Sí, solo debes hacer clic en 'Copiar' y podrás guardar la frase en tus notas o enviarla por WhatsApp a tu estudio de tatuajes.",
  },
];

export default function LetrasTatuajesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      {/* Site Header Navigation */}
      <NavBar />

      <main className="flex-1 py-8 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 dark:text-neutral-400">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <a href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Letras Bonitas
                </a>
              </li>
              <li>/</li>
              <li className="font-semibold text-neutral-800 dark:text-neutral-200">
                Letras para Tatuajes
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Letras para Tatuajes: Generador de Lettering y Tipografías
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Encuentra la tipografía perfecta para tu próximo tatuaje. Genera letras remarcadas e inclinadas
              en estilo Serif Bold Italic ideales para nombres, frases inspiradoras, fechas especiales e iniciales.
              Visualiza tus palabras, copia con un clic y comparte la idea con tu artista del tatuaje.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Las letras para tatuajes destacan por aportar trazos artísticos con gran definición estética sobre la piel. A menudo son populares porque inmortalizan nombres, fechas memorables y mantras de vida. Se usan comúnmente en diseños para antebrazos y costillas, y si deseas explorar opciones manuscritas adicionales puedes revisar nuestras <Link href="/letras-bonitas/letras-cursivas" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras cursivas</Link> o bien probar trazos de <Link href="/letras-bonitas/caligrafia" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">caligrafía</Link>.
            </p>
          </header>

          {/* Interactive Converter with Tatuajes (Serif Bold Italic) Highlighted */}
          <Converter highlightStyleId="serif-bold-italic" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Diseñar tu Frase para Tatuaje en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Ingresa tu Frase o Nombre
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Escribe la palabra, cita célebre o fecha que planeas tatuarte.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Explora el Lettering
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Visualiza el resultado en estilo tatuaje con trazos inclinados y serifas.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia o Guarda
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Haz clic en &quot;Copiar&quot; y envía la referencia directamente a tu tatuador.
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
              Visualiza al instante el patrón de letras Seriadas con inclinación elegante. También puedes aplicar esta tipografía en <Link href="/fuentes-para-instagram/fuentes-para-discord" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">fuentes para Discord</Link> o probarla en <Link href="/letras-personalizadas/nombres-personalizados" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nombres personalizados</Link>.
            </p>
          </section>

          {/* Section: Tabla de Guía de Longitud */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Guía de Longitudes Recomendadas según la Zona del Cuerpo
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Zona del Cuerpo</th>
                    <th className="py-3 px-4">Longitud Recomendada</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-sm text-neutral-700 dark:text-neutral-300">
                  {tattooLimits.map((item) => (
                    <tr key={item.platform} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                      <td className="py-3.5 px-4 font-medium">{item.platform}</td>
                      <td className="py-3.5 px-4">{item.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Ejemplos Listos para Copiar */}
          <ExamplesSection
            title="Ejemplos e Ideas de Frases para Tatuajes"
            examples={tattooExamples}
          />

          {/* Section: Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Si quieres personalizar tu diseño con elementos simbólicos, te recomendamos agregar decoraciones desde nuestros <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">símbolos coquette</Link> o consultar nuestro convertidor de <Link href="/letras-personalizadas/invertir-texto" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">invertir texto</Link>.
          </section>

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Letras para Tatuajes"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
