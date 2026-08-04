import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Fuentes para Discord | Convertidor de Letras para Servidores y Nombres",
  description:
    "Crea nombres de usuario y títulos de servidores para Discord con letras góticas y fuentes estéticas gratis.",
};

const charLimits = [
  { platform: "Discord Display Name (Nombre Visible)", limit: "32 caracteres" },
  { platform: "Discord Username (Nombre @)", limit: "32 caracteres" },
  { platform: "Discord Nombre de Servidor", limit: "100 caracteres" },
  { platform: "Discord Canal de Texto / Voz", limit: "100 caracteres" },
  { platform: "Discord Estado / Sobre Mí", limit: "190 caracteres" },
  { platform: "Discord Mensaje de Chat", limit: "2,000 caracteres" },
];

const discordExamples = [
  {
    persona: "Nombre de Servidor Gamer",
    text: "𝔇𝔞𝔯𝔨 𝔏𝔢𝔤𝔢𝔫𝔡𝔰 🎮 | 𝔖𝔢𝔯𝔳𝔢𝔯 𝔒𝔣𝔦𝔠𝔦𝔞𝔩",
  },
  {
    persona: "Nombre de Canal de Chat",
    text: "💬-𝔠𝔩𝔞𝔱-𝔤𝔢𝔫𝔢𝔯𝔞𝔩",
  },
  {
    persona: "Nombre de Usuario Insano",
    text: "𝔖𝔩𝔞𝔡𝔬𝔮𝔎𝔦𝔩𝔩𝔢𝔯 ⚡",
  },
  {
    persona: "Servidor de Anime / Hangout",
    text: "🌸 𝔄𝔫𝔦𝔪𝔢 ℭ𝔞𝔣𝔢 ☕ | ℭ𝔬𝔪𝔲𝔫𝔦𝔡𝔞𝔡",
  },
  {
    persona: "Modo Leyenda / VIP",
    text: "👑 𝔙ℑ𝔅 𝔏𝔬𝔲𝔫𝔤𝔢 👑",
  },
  {
    persona: "Perfil Cyberpunk",
    text: "𝔑𝔢𝔬𝔫 ℭ𝔶𝔥𝔢𝔯 🌆 | 𝔅𝔬𝔱 𝔇𝔢𝔳𝔢𝔩𝔬𝔟𝔢𝔯",
  },
  {
    persona: "Canal de Reglas / Reglamento",
    text: "📜-𝔯𝔢𝔤𝔩𝔞𝔰-𝔡𝔢𝔩-𝔰𝔢𝔯𝔳𝔦𝔡𝔬𝔯",
  },
  {
    persona: "Nombre de Clan RPG",
    text: "⚔️ 𝔉𝔯𝔞𝔨𝔱𝔲𝔯 𝔎𝔫𝔦𝔤𝔩𝔱𝔰 🛡️",
  },
  {
    persona: "Streamer / Creador",
    text: "🎙️ 𝔖𝔱𝔯𝔢𝔞𝔪𝔢𝔯 ℌ𝔲𝔥 | 𝔏𝔦𝔳𝔢 𝔑𝔬𝔯𝔦𝔣𝔦𝔠𝔞𝔱𝔦𝔬𝔫𝔰",
  },
  {
    persona: "Sobre Mí / Status Discord",
    text: "𝔙𝔦𝔳𝔦𝔢𝔫𝔡𝔬 𝔢𝔫 𝔩𝔞𝔰 𝔰𝔬𝔪𝔥𝔯𝔞𝔰 🌙",
  },
];

const faqs = [
  {
    q: "¿Cómo uso letras bonitas y góticas en mi nombre de Discord?",
    a: "Escribe tu apodo en el convertidor, selecciona el estilo gótico o la tipografía deseada, haz clic en 'Copiar' y pégalo en el campo 'Nombre de pantalla' (Display Name) o Perfil del servidor de Discord.",
  },
  {
    q: "¿Funcionan las fuentes góticas en los nombres de canales de Discord?",
    a: "¡Sí! Puedes formatear los nombres de tus canales de texto y voz en tu servidor de Discord para ordenarlos de forma visualmente atractiva.",
  },
  {
    q: "¿Cuántos caracteres permite el Display Name de Discord?",
    a: "Discord permite hasta 32 caracteres para tu Display Name o apodo del servidor.",
  },
  {
    q: "¿Afectan estas fuentes especiales los comandos de bots de Discord?",
    a: "Para mencionar usuarios o usar comandos de bots se recomienda utilizar el nombre de usuario base. Para títulos de canales, apodos y categorías de servidor, las fuentes góticas lucen increíbles.",
  },
  {
    q: "¿Se pueden combinar letras góticas con emojis en Discord?",
    a: "Sí, puedes añadir emojis, símbolos de espadas o coronas al inicio y final de tus títulos de canal.",
  },
  {
    q: "¿Es gratis este convertidor para Discord?",
    a: "Sí, es completamente gratuito y sin límites.",
  },
  {
    q: "¿Se ven igual las letras en Discord para PC y móvil?",
    a: "Sí, los caracteres Unicode son compatibles en las aplicaciones de Discord para Windows, Mac, Android e iOS.",
  },
  {
    q: "¿Necesito permisos especiales en el servidor para cambiar mi apodo?",
    a: "Necesitas el permiso 'Cambiar apodo' en el servidor para cambiar tu nombre en dicho servidor específico. Tu Display Name global lo puedes cambiar libremente en los ajustes de tu cuenta.",
  },
];

export default function FuentesParaDiscordPage() {
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
                  Fuentes para Instagram
                </a>
              </li>
              <li>/</li>
              <li className="font-semibold text-neutral-800 dark:text-neutral-200">
                Fuentes para Discord
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Fuentes para Discord: Convertidor de Nombres y Servidores
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Organiza y personaliza tus nombres de usuario, apodos y títulos de canales en Discord. Convierte
              tu texto a fuentes góticas, letras oscuras y símbolos para servidores. Copia con un clic y dale un
              aspecto profesional a tu comunidad de Discord.
            </p>
          </header>

          {/* Interactive Converter Pre-filtered to Fraktur / Gothic */}
          <Converter initialCategory="Fraktur" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Usar Fuentes Especiales en Discord en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Escribe tu Nombre o Canal
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Ingresa el nombre de usuario o título de canal que deseas formatear.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Visualiza el Estilo Gótico
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  El generador creará la variante en letras góticas y estilizadas de inmediato.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Pega en Discord
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Presiona &quot;Copiar&quot; y pégalo en tu perfil o configuración de canales.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites de Caracteres en Discord
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Sección / Campo</th>
                    <th className="py-3 px-4">Límite Permitido</th>
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
            title="Ejemplos Formateados para Discord"
            examples={discordExamples}
          />

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Fuentes para Discord"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
