import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Invertir Texto | Generador de Texto al Revés Gratis",
  description:
    "Invierte y voltéalo todo tu texto en orden inverso al instante. Copia y pega frases al revés para juegos, secretos y redes sociales.",
};

const charLimits = [
  { platform: "Mensajes Secretos / Chat", limit: "Sin límite práctico" },
  { platform: "Instagram Bio / Post", limit: "150 / 2200 caracteres" },
  { platform: "WhatsApp Chats", limit: "Sin límite" },
  { platform: "TikTok Comentarios", limit: "150 caracteres" },
  { platform: "Discord Mensajes", limit: "2000 caracteres" },
  { platform: "Free Fire Nick Invertido", limit: "12 caracteres" },
];

const reverseExamples = [
  {
    persona: "Mensaje Enigmático / Acertijo",
    text: "¡ℴ𝓉𝒾𝓍é 𝓁ℯ 𝒶 ℯ𝓈𝒶𝓅 ℴ𝓁𝓇ℯ𝓋ℯ𝓇 𝓁𝒶 ℴ𝓉𝓍ℯ𝓉 ℯ𝓉𝓈ℰ!",
  },
  {
    persona: "Nick Invertido para Juegos",
    text: "𝓇ℯ𝓁𝓁𝒾𝒦𝓌ℴ𝒹𝒶𝒽𝒮 ⚡",
  },
  {
    persona: "Frase de Misterio",
    text: "ℴ𝓉ℯ𝓇𝒸ℯ𝓈 𝓁ℯ 𝓇𝒾𝓇𝒷𝓊𝒸𝓈ℯ𝒹 a 𝓈ℯ𝓋𝒶𝓇𝓉𝓇𝒶 𝒶 ℯℯ𝓁",
  },
  {
    persona: "Desafío de Lectura",
    text: "?ℴ𝓁𝓇ℯℯ𝓁 𝓈ℯ𝒹ℯ𝓊𝓅 ¿𝓈ℯ𝓋ℯ𝓇 𝓁𝒶 𝒶𝓉𝒾𝓇𝒸𝓈ℯ 𝒶𝓈ℯ𝓇𝒴",
  },
  {
    persona: "Biografía Criptográfica",
    text: "ℴ𝒹𝓃𝓊𝓂 𝓁ℯ 𝓃ℯ ℴ𝒹𝓃𝒶𝒾𝒶𝒱",
  },
  {
    persona: "Título Divertido",
    text: "ℴ𝒹𝒾𝓉𝓇ℯ𝓋𝒾𝒟 ℴ𝓉𝓍ℯ𝒯 🙃",
  },
  {
    persona: "Nombre al Revés",
    text: "𝓏ℯ𝓂ó𝒢 ℴ𝓇𝒹𝓃𝒶𝒿ℯ𝓁𝒜",
  },
  {
    persona: "Estado de WhatsApp",
    text: ".𝓅𝒶ℯ𝓈 𝒶𝓁 𝓅𝒶ℯ𝓈",
  },
  {
    persona: "Clave Divertida",
    text: "𝟨𝟤𝟢𝟤𝓅𝓊𝒯ℴ𝓉𝓇ℯ𝓅𝒮",
  },
  {
    persona: "Comentario Curioso",
    text: "!ℴ𝒾𝒸𝒶𝓅𝓈ℯ 𝓁ℯ 𝒹ℯ𝓈𝒹ℯ ℴ𝒹𝓊𝓁𝒶𝒮",
  },
];

const faqs = [
  {
    q: "¿Cómo funciona el generador de invertir texto?",
    a: "El algoritmo invierte el orden exacto de los caracteres de tu frase de derecha a izquierda, permitiendo leer el texto en sentido inverso como un espejo.",
  },
  {
    q: "¿Se puede invertir cualquier idioma o conjunto de caracteres?",
    a: "Sí, la inversión funciona carácter por carácter respetando letras, espacios, emojis y signos de puntuación de cualquier idioma.",
  },
  {
    q: "¿Para qué sirve escribir texto al revés?",
    a: "Es muy utilizado para crear acertijos en redes sociales, nicks llamativos en juegos como Free Fire o Roblox, mensajes cifrados divertidos y títulos originales.",
  },
  {
    q: "¿Funciona en WhatsApp y redes sociales?",
    a: "¡Sí! Como el orden de las letras se invierte a nivel de cadena de caracteres, funciona perfectamente en cualquier chat, biografía o publicación.",
  },
  {
    q: "¿Se pueden invertir números y emojis también?",
    a: "Sí, la herramienta invierte toda la secuencia de caracteres incluyendo números, símbolos y emojis.",
  },
  {
    q: "¿Es seguro e ilimitado?",
    a: "Totalmente seguro y 100% gratuito. Puedes invertir textos de cualquier longitud sin restricciones.",
  },
  {
    q: "¿Cómo vuelvo a poner el texto al derecho?",
    a: "Simplemente copia el texto invertido, pégalo de nuevo en nuestro generador y al invertirlo por segunda vez volverá a su orden original.",
  },
  {
    q: "¿Necesito instalar algo para invertir texto?",
    a: "No, la herramienta funciona directamente en línea en tu navegador web.",
  },
];

export default function InvertirTextoPage() {
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
                  Letras Personalizadas
                </a>
              </li>
              <li>/</li>
              <li className="font-semibold text-neutral-800 dark:text-neutral-200">
                Invertir Texto
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Invertir Texto: Generador de Texto al Revés
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Invierte cualquier frase o palabra en orden inverso de derecha a izquierda al instante. Ideal
              para crear acertijos en chats, nicks de juegos divertidos, códigos secretos y publicaciones
              originales en redes sociales. Escribe tu texto y copia el resultado invertido con un clic.
            </p>
          </header>

          {/* Interactive Converter Pre-filtered to Especial (Reverse) */}
          <Converter initialCategory="Especial" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Invertir Texto en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Escribe tu Frase
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Coloca la palabra o mensaje que deseas voltear al revés en la casilla de texto.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Visualiza el Orden Inverso
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  El sistema invertirá de inmediato el orden de cada letra de derecha a izquierda.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Comparte
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Presiona &quot;Copiar&quot; y pégalo en tus mensajes de WhatsApp o redes sociales.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites Recomendados para Texto Invertido
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Plataforma / Uso</th>
                    <th className="py-3 px-4">Límite Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-sm text-neutral-700 dark:text-neutral-300">
                  {charLimits.map((item) => (
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
            title="Ejemplos de Texto Invertido"
            examples={reverseExamples}
          />

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Invertir Texto"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
