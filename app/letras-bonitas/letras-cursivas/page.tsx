import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Letras Cursivas | Convertidor de Texto en Cursiva Bonita",
  description:
    "Convierte tu texto a letras cursivas bonitas y elegantes. Copia y pega en tu biografía de Instagram, WhatsApp, TikTok y Free Fire gratis.",
};

const charLimits = [
  { platform: "Free Fire (Nick)", limit: "12 caracteres" },
  { platform: "Instagram Bio", limit: "150 caracteres" },
  { platform: "WhatsApp Estado", limit: "139 caracteres" },
  { platform: "TikTok Bio", limit: "80 caracteres" },
  { platform: "Discord Nick", limit: "32 caracteres" },
  { platform: "PUBG Mobile Nick", limit: "16 caracteres" },
  { platform: "Twitter / X Bio", limit: "160 caracteres" },
];

const cursiveExamples = [
  {
    persona: "Fotógrafa",
    text: "𝒞𝒶𝓅𝓉𝓊𝓇𝒶𝓃𝒹ℴ 𝓂ℴ𝓂ℯ𝓃𝓉ℴ𝓈 📸 | 𝒫𝒽ℴ𝓉ℴℊ𝓇𝒶𝓅𝒽ℯ𝓇",
  },
  {
    persona: "Gamer Girl",
    text: "𝒢𝒶𝓂ℯ𝓇 ✨ | 𝒬𝓊ℯℯ𝓃 ℴ𝒻 𝓉𝒽ℯ 𝒢𝒶𝓂ℯ 🎮",
  },
  {
    persona: "Estudiante",
    text: "ℰ𝓈𝓉𝓊𝒹𝒾𝒶𝓃𝓉ℯ 𝒹ℯ ℳℯ𝒹𝒾𝒸𝒾𝓃𝒶 🩺 | 𝒮𝓊ℯñℴ𝓈 ℯ𝓃 𝒸ℴ𝓃𝓈𝓉𝓇𝓊𝒸𝒸𝒾ó𝓃",
  },
  {
    persona: "Negocio / Tienda",
    text: "ℳℴ𝒹𝒶 & ℰ𝓈𝓉𝒾𝓁ℴ 🛍️ | ℰ𝓃𝓋íℴ𝓈 a 𝓉ℴ𝒹ℴ ℯ𝓁 𝓅𝒶í𝓈",
  },
  {
    persona: "Perfil Minimalista",
    text: "𝒮𝒾𝓂𝓅𝓁ℯ𝓂ℯ𝓃𝓉ℯ 𝓎ℴ 🌿 | 𝒱𝒾𝓋𝒾ℯ𝓃𝒹ℴ ℯ𝓁 𝓅𝓇ℯ𝓈ℯ𝓃𝓉ℯ",
  },
  {
    persona: "Artista / Diseñadora",
    text: "𝒜𝓇𝓉ℯ & 𝒟𝒾𝓈ℯñℴ 🎨 | 𝒞𝓇ℯ𝒶𝓃𝒹ℴ 𝓂𝒶ℊ𝒾𝒶",
  },
  {
    persona: "Fitness / Gym",
    text: "贵𝒾𝓉𝓃ℯ𝓈𝓈 ℒ𝒾𝒻ℯ𝓈𝓉𝓎𝓁ℯ 🏋️‍♀️ | 𝒟𝒾𝓈𝒸𝒾𝓅𝓁𝒾𝓃𝒶 𝓎 𝒫𝒶𝓈𝒾ó𝓃",
  },
  {
    persona: "Viajera / Blog",
    text: "𝒱𝒾𝒶𝒿ℯ𝓇𝒶 𝓅ℴ𝓇 ℯ𝓁 𝓂𝓊𝓃𝒹ℴ ✈️ | 𝒜𝒸𝓊𝓂𝓊𝓁𝒶𝓃𝒹ℴ 𝓇ℯ𝒸𝓊ℯ𝓇𝒹ℴ𝓈",
  },
  {
    persona: "Música / Cantante",
    text: "ℳú𝓈𝒾𝒸𝒶 & 𝒞𝒶𝓃𝒸𝒾ℴ𝓃ℯ𝓈 🎶 | 𝒜𝓁𝓂𝒶 ℯ𝓃 𝒸𝒶𝒹𝒶 𝓃ℴ𝓉𝒶",
  },
  {
    persona: "Nick Gamer Free Fire",
    text: "𝒮𝒽𝒶𝒹ℴ𝓌 𝒦𝒾𝓁𝓁ℯ𝓇 ⚡ | 𝒫𝓇ℴ 𝒫𝓁𝒶𝓎ℯ𝓇",
  },
];

const faqs = [
  {
    q: "¿Qué es el texto en letras cursivas Unicode?",
    a: "Son caracteres matemáticos especiales codificados dentro del estándar Unicode mundial. En lugar de cambiar la fuente visual de tu teclado, reemplaza cada letra por su equivalente Unicode en estilo manuscrito o cursivo, lo que permite que sea compatible directamente en bios y mensajes.",
  },
  {
    q: "¿Funciona en Instagram y redes sociales?",
    a: "¡Sí! Las letras cursivas son totalmente compatibles con la biografía, el nombre de usuario, comentarios y publicaciones de Instagram, Facebook, TikTok, X (Twitter) y Pinterest.",
  },
  {
    q: "¿Es compatible con WhatsApp y Free Fire?",
    a: "Sí, puedes copiar y pegar el texto generado directamente en tus chats y estados de WhatsApp, así como en los nombres de usuario o clanes de Free Fire, Roblox y PUBG.",
  },
  {
    q: "¿Es totalmente gratis esta herramienta?",
    a: "Absolutamente gratis. Puedes generar, convertir y copiar todas las letras cursivas que desees sin registrarte ni instalar ninguna aplicación.",
  },
  {
    q: "¿Por qué a veces se ven rectángulos o cuadritos [?] en lugar de la letra?",
    a: "Esto sucede si el sistema operativo o dispositivo del receptor es muy antiguo y no cuenta con soporte para los bloques de caracteres matemáticos Unicode. En smartphones modernos (Android e iOS) se visualizan sin problema.",
  },
  {
    q: "¿Puedo usar estas letras cursivas para fines comerciales?",
    a: "Sí. Al ser caracteres estándar del mapa Unicode mundial, puedes utilizarlos libremente en marcas, promociones, descripciones de productos y redes sociales comerciales.",
  },
  {
    q: "¿Se pueden convertir números y caracteres especiales a cursiva?",
    a: "Actualmente la conversión en cursiva está optimizada para las letras del alfabeto (A-Z y a-z). Los números y símbolos que no dispongan de equivalente Unicode se mantendrán en su formato original de forma fluida.",
  },
  {
    q: "¿Necesito instalar alguna app o teclado especial para usarlo?",
    a: "No necesitas instalar nada. Nuestra herramienta funciona 100% en el navegador desde cualquier teléfono móvil, tablet o computadora.",
  },
];

export default function LetrasCursivasPage() {
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
                Letras Cursivas
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Letras Cursivas: Convertidor de Texto en Cursiva
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Transforma tu texto normal en letras cursivas bonitas, manuscritas y elegantes al instante.
              Nuestro convertidor genera caracteres Unicode especiales compatibles con biografías de Instagram,
              mensajes de WhatsApp, nombres de Free Fire y publicaciones en redes sociales. Escribe tu texto,
              copia con un clic y destaca donde quieras.
            </p>
          </header>

          {/* Decorative Feature Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-2">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-600 text-white flex items-center justify-center shadow-sm shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                8+ Estilos
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-600 text-white flex items-center justify-center shadow-sm shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                Guardar Favoritos
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-600 text-white flex items-center justify-center shadow-sm shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                Copiar y Pegar
              </span>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-600 text-white flex items-center justify-center shadow-sm shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                100% Gratis
              </span>
            </div>
          </div>

          {/* Interactive Converter with Cursive (Script) Highlighted */}
          <Converter highlightStyleId="cursive" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Usar el Convertidor de Letras Cursivas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Escribe tu Texto
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Ingresa cualquier palabra, nombre o biografía en el cuadro de texto principal.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Elige la Cursiva
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  La herramienta convertirá automáticamente cada letra al estilo cursivo manuscrito.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Pega
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Haz clic en &quot;Copiar&quot; y pégalo directamente en tu red social o juego preferido.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites de Caracteres por Plataforma
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

          {/* Section: Cómo Funciona el Generador de Letras (Unicode) */}
          <HowItWorksSection />

          {/* Section: Ejemplos Listos para Copiar */}
          <ExamplesSection
            title="Ejemplos de Bio y Nombres en Cursiva"
            examples={cursiveExamples}
          />

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
