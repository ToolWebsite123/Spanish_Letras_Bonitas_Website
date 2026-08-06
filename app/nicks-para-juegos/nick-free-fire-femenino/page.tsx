import Link from "next/link";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Nick Free Fire Femenino | Nombres Chidos para Chicas Gamer",
  description:
    "Crea nicks femeninos e insanos para Free Fire. Nombres para chicas gamer con coronas, moños, letras bonitas y símbolos rosas gratis.",
};

const charLimits = [
  { platform: "Free Fire (Nick Máximo)", limit: "12 caracteres (¡Estricto!)" },
  { platform: "Free Fire Clan Femenino", limit: "12 caracteres" },
  { platform: "Free Fire Firma / Bio", limit: "50 caracteres" },
  { platform: "PUBG Mobile (Nick)", limit: "16 caracteres" },
  { platform: "Roblox Display Name", limit: "20 caracteres" },
];

const feminineNickExamples = [
  {
    persona: "Reina Gamer",
    text: "𝒬𝓊ℯℯ𝓃𝒴𝓊𝓇𝒾 👑",
  },
  {
    persona: "Coquette Gamer",
    text: "𝒮𝓌ℯℯ𝓉𝒦𝒾𝓁𝓁 🎀",
  },
  {
    persona: "Princesa Sniper",
    text: "𝒫𝓇𝒾𝓃𝒸ℯ𝓈𝓈𝐹𝐹 🌸",
  },
  {
    persona: "Chica Insana PvP",
    text: "𝐼𝓃𝓈𝒶𝓃𝒶𝒢𝒾𝓇𝓁 ☠️",
  },
  {
    persona: "Líder Clan Femenino",
    text: "𝒢𝒾𝓇𝓁ℬℴ𝓈𝓈 💖",
  },
  {
    persona: "Estilo Flor de Cerezos",
    text: "𝒮𝒶𝓀𝓊𝓇𝒶𝒫𝓇ℴ ✿",
  },
  {
    persona: "Sombra Femenina",
    text: "𝒮𝒽𝒶𝒹ℴ𝓌𝒬𝓊ℯℯ𝓃 🌙",
  },
  {
    persona: "Ángel Guerrero",
    text: "𝒜𝓃ℊℯ𝓁𝒦𝒾𝓁𝓁ℯ𝓇 𓆩♡𓆪",
  },
  {
    persona: "Valkiria / Mítica",
    text: "𝒱𝒶𝓁𝓀𝓎𝓇𝒾𝒶 💎",
  },
  {
    persona: "Star Girl Roblox / FF",
    text: "𝒮𝓉𝒶𝓇𝒢𝒾𝓇𝓁 ✨",
  },
];

const faqs = [
  {
    q: "¿Cuál es la mejor combinación para un nick femenino en Free Fire?",
    a: "Combinar una letra elegante o cursiva con símbolos como coronas (👑), moños (🎀), flores (🌸) o corazones (💖) respetando el límite de 12 caracteres.",
  },
  {
    q: "¿Cuál es el límite máximo de letras para un nick femenino en Free Fire?",
    a: "El límite de Free Fire es de 12 caracteres para el nick o nombre de usuario.",
  },
  {
    q: "¿Cómo cambio mi nick en Free Fire a un nombre de chica gamer?",
    a: "Abre Free Fire, toca tu Perfil, presiona el icono de lápiz para editar tu nombre, pega el nick femenino generado y confirma con tu Tarjeta de Cambio de Nombre o diamantes.",
  },
  {
    q: "¿Son compatibles los moños y coronas en Free Fire MAX?",
    a: "Sí, todos los símbolos e íconos probados en nuestra herramienta son 100% compatibles tanto en Free Fire estándar como en Free Fire MAX.",
  },
  {
    q: "¿Se pueden crear nombres para clanes de puras mujeres (Clan Femenino)?",
    a: "¡Sí! Puedes crear tags y nombres insanos para clanes femeninos de torneos y duelos de escuadras.",
  },
  {
    q: "¿Es gratis guardar e interactuar con estos nombres?",
    a: "Sí, la herramienta y los ejemplos son 100% gratuitos y de libre copia.",
  },
  {
    q: "¿Por qué rechaza Free Fire algunos espacios?",
    a: "Si deseas colocar un espacio en tu nick femenino de Free Fire, utiliza el carácter de espacio transparente Unicode (U+3164) o nuestro estilo 'Texto Invisible'.",
  },
  {
    q: "¿Sirven estos nicks para Roblox, TikTok y PUBG?",
    a: "Sí, son compatibles en todas las redes sociales y plataformas de videojuegos.",
  },
];

export default function NickFreeFireFemeninoPage() {
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
                FF Femenino
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Nick Free Fire Femenino: Creador de Nombres para Chicas
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Crea nombres insanos, bonitos y elegantes para chicas gamer en Free Fire. Combina letras refinadas
              con coronas, moños coquette, estrellas y flores rosas. Genera tu nick femenino ideal sin exceder los 12
              caracteres, copia con un clic y domina el campo de batalla con estilo.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Los nicks femeninos para Free Fire destacan por combinar la dulzura de detalles delicados con la fuerza de un perfil de chica gamer competitiva. A menudo son muy populares en escuadras y salas privadas para mostrar identidad y personalidad en el juego. Se usan comúnmente en apodos de duelos de escuadra, y si buscas estilos alternativos masculinos puedes visitar la sección de <Link href="/nicks-para-juegos/nick-free-fire-masculino" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nick Free Fire masculino</Link> o explorar nuestra categoría general de <Link href="/nicks-para-juegos/nick-free-fire" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nick Free Fire</Link>.
            </p>
          </header>

          {/* Interactive Converter with Cursive Highlighted */}
          <Converter highlightStyleId="cursive" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Crear tu Nick Femenino en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Escribe tu Nombre
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Ingresa tu apodo o palabra base en la casilla del generador.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Selecciona la Fuente Femenina
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Explora las opciones de letras bonitas y elegantes generadas.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Pega en Free Fire
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Haz clic en &quot;Copiar&quot; y pégalo en la casilla de cambiar nombre en tu perfil.
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
              Combina moños o coronas sin exceder los 12 caracteres máximos. Puedes usar nuestro tutorial de <Link href="/nicks-para-juegos/cambiar-nick-free-fire" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">cambiar nick Free Fire</Link> para aprender a pegarlo en el juego o añadir <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">símbolos coquette</Link> decorativos.
            </p>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites de Caracteres para Nicks Femeninos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Juego / Perfil</th>
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
            title="Ideas de Nicks Femeninos Insanos"
            examples={feminineNickExamples}
          />

          {/* Section: Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Si deseas adornar la firma de tu perfil dentro del juego, te recomendamos crear una <Link href="/nicks-para-juegos/bio-colorida-free-fire" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">bio colorida Free Fire</Link> o probar opciones de <Link href="/letras-bonitas/letras-cursivas" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras cursivas</Link>.
          </section>

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Nicks Femeninos"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
