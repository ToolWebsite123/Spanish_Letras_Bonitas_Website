import Link from "next/link";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Nombres para Roblox | Creador de Nicks Bonitos y Display Names",
  description:
    "Crea nombres bonitos y nicks originales para Roblox. Convierte tu Display Name a letras burbuja, símbolos y fuentes aesthetic gratis.",
};

const charLimits = [
  { platform: "Roblox Display Name (Nombre Visible)", limit: "20 caracteres" },
  { platform: "Roblox Username (Nombre de Usuario @)", limit: "20 caracteres (3 a 20)" },
  { platform: "Roblox Descripción de Perfil", limit: "1,000 caracteres" },
  { platform: "Roblox Nombre de Grupo", limit: "50 caracteres" },
  { platform: "Free Fire (Nick)", limit: "12 caracteres" },
  { platform: "Minecraft Username", limit: "16 caracteres" },
];

const robloxExamples = [
  {
    persona: "Estilo Bubble / Aesthetic",
    text: "ⓈⓦℯℯⓣⓈⓚⓨ 🌸",
  },
  {
    persona: "Pro Gamer Bloxburg",
    text: "ⓅⓡℴⒷ𝓊ⓘ𝓁ⓓℯⓡ 🏗️",
  },
  {
    persona: "Adopt Me Trader",
    text: "ⓅℯⓣⓉⓡ𝒶ⓓℯⓡ 🦄",
  },
  {
    persona: "Brookhaven Roleplay",
    text: "Ⓢ𝓉𝒶ⓡℛ𝒫 🌟",
  },
  {
    persona: "Gamer Girl Roblox",
    text: "Ⓠ𝓊ℯℯ𝓃Ⓡℴⓦ 👑",
  },
  {
    persona: "Estilo Rusk / PvP",
    text: "Ⓢ𝓅ℯℯⓓⓀⓘ𝓁𝓁ℯⓡ ⚡",
  },
  {
    persona: "Minimal Roblox Nick",
    text: "ⓃℯℴⓝⓋⓘⓑℯ𝓈 ☁️",
  },
  {
    persona: "Líder de Clan Roblox",
    text: "Ⓑ𝓁ℴ𝓍Ⓚⓘⓝℊ ⚔️",
  },
  {
    persona: "Anime Fighting / Blade Ball",
    text: "Ⓢ𝒽𝒶𝒹ℴⓃⓘⓝⓙ𝒶 🗡️",
  },
  {
    persona: "Femenino / Coquette",
    text: "Ⓛ𝓊Ⓥ𝒶𝓁ℯ𝓃𝓉ⓘ𝓃𝒶 ୨୧",
  },
];

const faqs = [
  {
    q: "¿Cuál es el límite máximo de caracteres para el Display Name en Roblox?",
    a: "El Display Name (nombre visible) en Roblox permite un máximo de 20 caracteres. Puedes incluir letras convertidas, espacios y símbolos compatibles.",
  },
  {
    q: "¿Cuál es la diferencia entre Username y Display Name en Roblox?",
    a: "El Username es tu nombre de usuario único (@usuario) con el que inicias sesión, mientras que el Display Name es el nombre visible que aparece encima de tu avatar en los juegos y se puede cambiar gratis cada 7 días.",
  },
  {
    q: "¿Cómo cambio mi Display Name en Roblox gratis?",
    a: "Abre la app de Roblox o el sitio web, entra a Configuración de la Cuenta, toca el icono de editar junto a 'Nombre de Pantalla' (Display Name), pega el nombre convertido con nuestra herramienta y guarda los cambios.",
  },
  {
    q: "¿Por qué Roblox rechaza algunos caracteres o muestra asteriscos (###)?",
    a: "Roblox cuenta con un filtro de chat y nombres muy estricto. Si utilizas un término bloqueado o símbolos no soportados por el filtro, el juego mostrará ###. Todas nuestras letras burbuja y fuentes probadas son compatibles.",
  },
  {
    q: "¿Con qué frecuencia puedo cambiar mi Display Name en Roblox?",
    a: "Puedes cambiar tu Display Name de forma totalmente gratuita una vez cada 7 días.",
  },
  {
    q: "¿Es seguro usar este generador de nombres para Roblox?",
    a: "Sí, es 100% seguro. No requerimos tu contraseña ni datos de cuenta. Solo generas el texto, lo copias y lo pegas tú mismo en Roblox.",
  },
  {
    q: "¿Funcionan estas letras bonitas en Roblox Mobile (Android/iOS) y PC?",
    a: "Sí, la conversión Unicode es compatible tanto en dispositivos móviles (Android, iPhone, iPad) como en computadoras y consolas.",
  },
  {
    q: "¿Puedo usar letras circulares/burbuja para nombres de grupo en Roblox?",
    a: "¡Sí! Puedes usar estas letras para crear nombres de grupos, descripciones de experiencias y títulos de ropa en el catálogo de Roblox.",
  },
];

export default function NombresParaRobloxPage() {
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
                Nombres para Roblox
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Nombres para Roblox: Creador de Nicks Bonitos
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Diseña los mejores Display Names y nicks bonitos para Roblox. Convierte tu apodo habitual en
              letras burbuja, fuentes circulares y símbolos aesthetic compatibles con el juego. Respeta el
              límite de 20 caracteres, copia con un clic y renueva el perfil de tu avatar de Roblox gratis.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Los nombres personalizados para Roblox destacan por permitir una personalización vistosa del Display Name en mundos virtuales. A menudo son muy populares en experiencias de rol como Adopt Me o Brookhaven para lucir un perfil tierno. Se usan comúnmente en usuarios de comunidad, y si buscas otras opciones para el mundo gamer puedes mirar los estilos de <Link href="/nicks-para-juegos/nick-free-fire" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nick Free Fire</Link> o revisar nuestras <Link href="/letras-bonitas/letras-aesthetic" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras aesthetic</Link>.
            </p>
          </header>

          {/* Interactive Converter with Bubble Highlighted */}
          <Converter highlightStyleId="bubble" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Cambiar tu Display Name en Roblox en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Ingresa tu Nombre
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Escribe tu apodo en el generador (asegúrate de que no supere los 20 caracteres).
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Elige la Letra Burbuja
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Visualiza tu nombre transformado en letras circulares bonitas y fuentes aesthetic.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Pega en Roblox
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Haz clic en &quot;Copiar&quot; y pégalo en el campo Display Name de la configuración de tu cuenta.
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
              Aprovecha los 20 caracteres máximos permitidos en el Display Name para añadir fuentes burbuja. Puedes acompañar estos diseños con <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">símbolos coquette</Link> o darles formato mediante <Link href="/letras-personalizadas/texto-en-negrita" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">texto en negrita</Link>.
            </p>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites de Caracteres en Roblox y Juegos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Campo / Plataforma</th>
                    <th className="py-3 px-4">Límite de Caracteres</th>
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
            title="Ideas de Nombres Bonitos para Roblox"
            examples={robloxExamples}
          />

          {/* Section: Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Descubre más ideas para tus redes conectadas: explora nuestro creador de <Link href="/fuentes-para-instagram/fuentes-para-discord" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">fuentes para Discord</Link> o echa un vistazo al mapa de <Link href="/letras-bonitas/letras-japonesas" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras japonesas</Link>.
          </section>

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Nombres para Roblox"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
