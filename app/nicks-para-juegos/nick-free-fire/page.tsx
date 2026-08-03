import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Nicks para Free Fire | Creador de Nombres Épicos y Letras Chidas",
  description:
    "Crea nicks insanos y nombres épicos para Free Fire. Convierte tu apodo a letras bonitas con símbolos y estilo profesional gratis.",
};

const charLimits = [
  { platform: "Free Fire (Nick Máximo)", limit: "12 caracteres (¡Estricto!)" },
  { platform: "Free Fire (Nombre de Clan)", limit: "12 caracteres" },
  { platform: "Free Fire (Firma / Bio FF)", limit: "50 caracteres" },
  { platform: "PUBG Mobile (Nick)", limit: "16 caracteres" },
  { platform: "Roblox (Display Name)", limit: "20 caracteres" },
  { platform: "Call of Duty Mobile", limit: "14 caracteres" },
  { platform: "Brawl Stars", limit: "15 caracteres" },
];

const gamingNickExamples = [
  {
    persona: "Sniper / Tirador",
    text: "𝒢ℴ𝒹𝒮𝓃𝒾𝓅ℯ𝓇 ⚡",
  },
  {
    persona: "Jugador Insano",
    text: "𝐼𝓃𝓈𝒶𝓃ℴ𝐹𝐹 ☠️",
  },
  {
    persona: "Líder de Clan",
    text: "𝒞𝓁𝒶𝓃ℬℴ𝓈𝓈 ⚔️",
  },
  {
    persona: "Estilo Rusk / Rush",
    text: "ℛ𝓊𝓈𝒽𝒦𝒾𝓁𝓁ℯ𝓇 💥",
  },
  {
    persona: "Jugadora Femenina",
    text: "𝒬𝓊ℯℯ𝓃𝒴𝓊𝓇𝒾 👑",
  },
  {
    persona: "Modo Leyenda / Heroico",
    text: "ℋℯ𝓇ℴ𝒾𝒸𝒫𝓇ℴ 🏆",
  },
  {
    persona: "Sombra / Sigilo",
    text: "𝒮𝒽𝒶𝒹ℴ𝓌𝒩𝒾𝒸𝓀 🌙",
  },
  {
    persona: "Fuerza / Titan",
    text: "𝒯𝒾𝓉𝒶𝓃𝒦𝒾𝓃ℊ 🛡️",
  },
  {
    persona: "Estilo Alfa / Bestia",
    text: "𝒜𝓁𝓅𝒽𝒶𝒲ℴ𝓁𝒻 🐺",
  },
  {
    persona: "Dark Demon",
    text: "𝒟𝒶𝓇𝓀𝒟ℯ𝓂ℴ𝓃 👿",
  },
];

const faqs = [
  {
    q: "¿Cuál es el límite máximo de letras para un Nick en Free Fire?",
    a: "Garena Free Fire establece un límite estricto de 12 caracteres para el nick o nombre de usuario. Si utilizas letras o símbolos Unicode, asegúrate de que el contador no exceda los 12 caracteres para que el juego lo acepte.",
  },
  {
    q: "¿Cómo cambio mi nombre en Free Fire usando letras bonitas?",
    a: "Abre Free Fire, ve a tu Perfil (esquina superior izquierda), toca el icono de lápiz para editar tu nombre, pega el nick convertido con nuestra herramienta y confirma usando 390 diamantes o una Tarjeta de Cambio de Nombre.",
  },
  {
    q: "¿Por qué Free Fire rechaza algunos símbolos o caracteres?",
    a: "Free Fire bloquea algunos caracteres especiales que no son compatibles con su motor gráfico. Todas las letras cursivas y tipografías generadas por nuestra herramienta son 100% compatibles con la versión actual de FF.",
  },
  {
    q: "¿Cómo puedo poner mi nick en espacio transparente / invisible?",
    a: "Puedes usar el estilo 'Texto Invisible' de nuestra herramienta o copiar el carácter de espacio transparente Unicode (U+3164) para dejar espacios invisibles dentro de tu nick en Free Fire.",
  },
  {
    q: "¿Se pueden crear nombres insanos para clanes en Free Fire?",
    a: "¡Sí! Puedes convertir tanto apodos individuales como el tag o nombre completo de tu clan para lucir profesional en las salas privadas y torneos.",
  },
  {
    q: "¿Es seguro cambiar mi nick con letras de esta página? ¿Hay riesgo de ban?",
    a: "Es 100% seguro. Usar letras y caracteres Unicode permitidos en el campo de nick de Free Fire no vulnera ninguna regla del juego ni provoca baneo.",
  },
  {
    q: "¿Sirve este creador de nicks para Free Fire MAX?",
    a: "Sí, es completamente compatible tanto con Free Fire estándar como con Free Fire MAX en Android e iOS.",
  },
  {
    q: "¿Puedo guardar y copiar varias ideas de nick gratis?",
    a: "Sí, el generador es libre y gratuito. Puedes probar diferentes combinaciones y copiar los resultados con un solo clic.",
  },
];

export default function NickFreeFirePage() {
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
                  Nicks para Juegos
                </a>
              </li>
              <li>/</li>
              <li className="font-semibold text-neutral-800 dark:text-neutral-200">
                Nick Free Fire
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Nicks para Free Fire: Creador de Nombres Épicos
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Crea los nombres más insanos, épicos y profesionales para tu perfil de Free Fire. Convertimos
              tu apodo habitual en letras chidas compatibles con el juego, respetando el límite máximo de
              12 caracteres. Diseña tu nick ideal, copia el código con un clic y destaca en el campo de batalla.
            </p>
          </header>

          {/* Interactive Converter Pre-filtered for Gaming Nicks */}
          <Converter initialCategory="Script" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Crear tu Nick para Free Fire en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Escribe tu Nick de Gamer
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Ingresa tu apodo en la casilla superior (mantén tu nombre corto para no exceder los 12 caracteres).
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Selecciona la Letra Chida
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Explora los estilos convertidos e insanos listos para ser aceptados por Free Fire.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Pega en el Juego
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Haz clic en &quot;Copiar&quot; y pégalo directamente en la casilla de cambiar nombre en Free Fire.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tabla de Límites de Caracteres en Juegos */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites de Caracteres para Nombres de Juegos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Juego / Campo</th>
                    <th className="py-3 px-4">Límite de Longitud</th>
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

          {/* Section: Ejemplos de Nicks de Juego Listos para Copiar */}
          <ExamplesSection
            title="Ideas de Nicks Insanos para Free Fire"
            examples={gamingNickExamples}
          />

          {/* Section: Preguntas Frecuentes sobre Nicks de Free Fire */}
          <FaqSection
            title="Preguntas Frecuentes sobre Nicks de Free Fire"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
