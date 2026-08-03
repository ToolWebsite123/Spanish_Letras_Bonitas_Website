import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Letras Graffiti | Convertidor de Fuentes Estilo Urbano",
  description:
    "Convierte tu texto en letras estilo graffiti y letras góticas urbanas. Copia y pega gratis en biografías de Instagram, nicks de juegos y TikTok.",
};

const charLimits = [
  { platform: "Free Fire (Nick)", limit: "12 caracteres" },
  { platform: "Instagram Bio", limit: "150 caracteres" },
  { platform: "TikTok Bio", limit: "80 caracteres" },
  { platform: "Discord Nick", limit: "32 caracteres" },
  { platform: "WhatsApp Estado", limit: "139 caracteres" },
  { platform: "Twitch Username", limit: "25 caracteres" },
  { platform: "Twitter / X Bio", limit: "160 caracteres" },
];

const graffitiExamples = [
  {
    persona: "Streetwear Brand",
    text: "𝔘𝔯𝔟𝔞𝔫 𝔖𝔱𝔶𝔩𝔢 🔥 | 𝔖𝔱𝔯𝔢𝔢𝔱𝔴𝔢𝔞𝔯 ℭ𝔬𝔩𝔩𝔢𝔠𝔱𝔦𝔬𝔫",
  },
  {
    persona: "Hip-Hop Artist",
    text: "𝔅𝔢𝔞𝔱𝔪𝔞𝔭𝔢𝔯 🎙️ | ℌ𝔦𝔭-ℌ𝔬𝔭 ℭ𝔲𝔩𝔱𝔲𝔯𝔢",
  },
  {
    persona: "Skater Crew",
    text: "𝔖𝔨𝔞𝔱𝔢 𝔬𝔯 𝔇𝔦𝔢 🛹 | 𝔘𝔫𝔡𝔢𝔯𝔤𝔯𝔬𝔲𝔫𝔡 ℭ𝔯𝔢𝔴",
  },
  {
    persona: "Graffiti Writer",
    text: "𝔖𝔱𝔯𝔢𝔢𝔱 𝔄𝔯𝔱𝔦𝔰𝔱 🎨 | 𝔚𝔞𝔩𝔩 ℭ𝔞𝔫𝔳𝔞𝔰",
  },
  {
    persona: "Gamer Insano",
    text: "𝔎𝔦𝔩𝔩𝔢𝔯 ℨ𝔬𝔫𝔢 ⚡ | 𝔓𝔯𝔬 𝔖𝔫𝔦𝔟𝔢𝔯",
  },
  {
    persona: "DJ / Music Producer",
    text: "ℭ𝔩𝔲𝔥 𝔅𝔢𝔞𝔱𝔰 🎧 | 𝔑𝔦𝔤𝔩𝔱 𝔙𝔦𝔥𝔢𝔰",
  },
  {
    persona: "Perfil Rebelde",
    text: "𝔑𝔬 ℜ𝔲𝔩𝔢𝔰 ☠️ | 𝔉𝔯𝔢𝔢 𝔖𝔭𝔦𝔯𝔦𝔱",
  },
  {
    persona: "Tattoo Apprentice",
    text: "ℑ𝔫𝔨 & 𝔅𝔩𝔬𝔬𝔡 🖋️ | 𝔗𝔞𝔱𝔱𝔬𝔬 𝔖𝔱𝔲𝔡𝔦𝔬",
  },
  {
    persona: "Cyberpunk Vibe",
    text: "𝔑𝔢𝔬𝔫 𝔑𝔦𝔤𝔩𝔱𝔰 🌆 | ℭ𝔶𝔥𝔢𝔯 𝔖𝔬𝔲𝔩",
  },
  {
    persona: "Nick Clan",
    text: "𝔇𝔞𝔯𝔨 𝔏𝔢𝔤𝔢𝔫𝔡𝔰 ⚔️ | ℭ𝔩𝔞𝔫 𝔏𝔢𝔞𝔡𝔢𝔯",
  },
];

const faqs = [
  {
    q: "¿Qué son las letras en estilo graffiti Unicode?",
    a: "Son caracteres especiales inspirados en el arte urbano y tipografías expresivas que utilizan símbolos Unicode avanzados para imitar el trazo de un aerosol o estilo gótico callejero.",
  },
  {
    q: "¿Puedo usar letras graffiti en mi biografía de Instagram?",
    a: "¡Sí! Puedes copiar cualquier frase convertida a estilo graffiti y pegarla directamente en la biografía, nombre o pie de foto de tu cuenta de Instagram.",
  },
  {
    q: "¿Funcionan para nombres de Free Fire y TikTok?",
    a: "Absolutamente. Son muy populares para nicks de Free Fire, clanes de PUBG, apodos de Roblox y nombres de perfil en TikTok.",
  },
  {
    q: "¿Es necesario descargar tipografías o fuentes instalables?",
    a: "No. Al ser texto en código Unicode universal, se genera en tiempo real en tu navegador y funciona sin instalar ninguna app ni paquete de fuentes.",
  },
  {
    q: "¿Por qué algunos dispositivos antiguos no muestran las letras góticas urbano?",
    a: "Algunos teléfonos o navegadores muy desactualizados pueden no incluir la fuente Unicode completa. En la gran mayoría de dispositivos modernos de los últimos años se ven perfectas.",
  },
  {
    q: "¿Se pueden combinar letras graffiti con símbolos aesthetic?",
    a: "¡Por supuesto! Puedes copiar el texto en estilo urbano y agregarle coronas, alas, estrellas o fuego para personalizar aún más tu nick.",
  },
  {
    q: "¿El convertidor de letras graffiti es 100% gratuito?",
    a: "Sí, es completamente gratis y sin límites de conversión ni registros obligatorios.",
  },
  {
    q: "¿Cómo copio el texto generado en mi móvil?",
    a: "Simplemente pulsa el botón 'Copiar' al lado del estilo deseado y el texto se guardará al instante en el portapapeles de tu teléfono.",
  },
];

export default function LetrasGraffitiPage() {
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
                Letras Graffiti
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Letras Graffiti: Convertidor de Fuentes Estilo Urbano
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Dale un toque callejero, rebelde y underground a tus textos con nuestras letras estilo graffiti.
              Genera fuentes urbanas y trazos góticos compatibles con Instagram, TikTok, WhatsApp y nicks de juegos.
              Escribe tu apodo o mensaje, copia el resultado y personaliza tus redes sociales en segundos.
            </p>
          </header>

          {/* Interactive Converter Pre-filtered to Fraktur / Gothic */}
          <Converter initialCategory="Fraktur" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Usar las Letras Graffiti
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Ingresa tu Nombre o Frase
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Escribe en el cuadro de texto la palabra o apodo que deseas transformar en graffiti.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Visualiza el Estilo Urbano
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  El generador creará instantáneamente la versión urbana con tipografía impactante.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Personaliza
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Presiona el botón de copiar y pégalo en tu biografía, estado o perfil de juego.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites de Caracteres en Redes y Juegos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Plataforma</th>
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
            title="Ejemplos de Bios y Nombres con Estilo Graffiti"
            examples={graffitiExamples}
          />

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Letras Graffiti"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
