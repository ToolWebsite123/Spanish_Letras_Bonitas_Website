import Link from "next/link";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Nick Free Fire Masculino | Nombres y Letras Góticas para Gamer",
  description:
    "Genera tu nick de Free Fire masculino con estilo gótico y símbolos de combate (⚔️👑🔥). Copia nombres intimidantes y pro para Free Fire y clanes gratis.",
};

const ffLimits = [
  { platform: "Nick Principal de Free Fire", limit: "12 caracteres (incluyendo espacios y símbolos)" },
  { platform: "Tag / Nombre de Clan", limit: "12 caracteres" },
  { platform: "Firma / Bio de Jugador", limit: "50 caracteres" },
  { platform: "ID de Garena / Nombre de Usuario", limit: "12 caracteres" },
  { platform: "Nick para PUBG Mobile", limit: "16 caracteres" },
  { platform: "Nick para Call of Duty Mobile", limit: "14 caracteres" },
];

const masculineNickExamples = [
  {
    persona: "Nick Imponente / Rey del PvP",
    text: "⚔️ 𝔖𝔥𝔞𝔡𝔬𝔮𝔎𝔦𝔫𝔤 👑 🔥",
  },
  {
    persona: "Fragger Principal / Roto",
    text: "🔥 𝔇𝔞𝔯𝔨ℌ𝔲𝔫𝔱𝔢𝔯 ⚡",
  },
  {
    persona: "Líder de Clan Masculino",
    text: "👑 𝔙𝔦𝔭𝔢𝔯┫𝔓𝔯𝔬 ⚔️",
  },
  {
    persona: "Estilo Asesino Silencioso",
    text: "☠️ 𝔊𝔥𝔬𝔰𝔱𝔎𝔦𝔩𝔩𝔢𝔯 ☠️",
  },
  {
    persona: "Nick Agresivo / Sniper",
    text: "🎯 𝔅𝔩𝔬𝔬𝔡𝔖𝔫𝔦𝔭𝔢𝔯 💣",
  },
  {
    persona: "Nick Titán / Bestia",
    text: "⚡ 𝔗𝔦𝔱𝔞𝔫ℌ𝔢𝔞𝔢 ⚡",
  },
  {
    persona: "Nombre para Competitivo",
    text: "🏆 𝔒𝔪𝔢𝔤𝔞⚔️𝔓𝔯𝔬 👑",
  },
  {
    persona: "Estilo Inmortal / Legendario",
    text: "🔥 𝔏𝔢𝔤𝔢𝔫𝔡𝔞𝔯𝔦𝔬 ⚔️",
  },
  {
    persona: "Nick Oscuro / Demonio",
    text: "👹 𝔇𝔢𝔪𝔬𝔫 Lord ⛓️",
  },
  {
    persona: "Nick Pro / Clan Alpha",
    text: "⚔️ 𝔄𝔩𝔭𝔥𝔞ℜ𝔞𝔧𝔞 👑",
  },
];

const faqs = [
  {
    q: "¿Cómo creo un nick de Free Fire masculino impactante?",
    a: "Combina una tipografía fuerte como Letras Góticas (Fraktur) con símbolos de batalla masculino (⚔️, 👑, 🔥, ☠️) manteniendo la longitud por debajo de los 12 caracteres.",
  },
  {
    q: "¿Cuál es el límite máximo de caracteres para el nick en Free Fire?",
    a: "El sistema de Free Fire permite un máximo de 12 caracteres. Ten en cuenta que algunos símbolos invisibles o especiales cuentan como 1 o 2 espacios en el contador.",
  },
  {
    q: "¿Por qué el estilo gótico es tan popular en Free Fire?",
    a: "Las letras góticas le otorgan al nombre un aspecto intimidante, oscuro y clásico de guerrero, muy valorado en salas privadas y torneos competitivos de PvP.",
  },
  {
    q: "¿Es gratis generar y copiar los nicks masculinos?",
    a: "Sí, puedes probar todas las combinaciones que desees de forma 100% gratuita y copiar el resultado directo a tu juego.",
  },
  {
    q: "¿Puedo poner el tag de mi clan al inicio de mi nombre?",
    a: "¡Sí! Puedes anteponer las iniciales o tag de tu clan (ej. ⚔️) seguido de tu nombre en letras góticas siempre que la suma no exceda los 12 caracteres.",
  },
  {
    q: "¿Qué hago si Free Fire me dice que el nombre contiene caracteres no permitidos?",
    a: "Asegúrate de no incluir caracteres prohibidos por el filtro de Garena. La fuente gótica Unicode y los símbolos ⚔️👑🔥 que ofrecemos aquí son ampliamente aceptados.",
  },
  {
    q: "¿Funcionan estos nicks también para PUBG y Call of Duty Mobile?",
    a: "Sí, estas combinaciones en formato Unicode son totalmente compatibles con PUBG Mobile, COD Mobile, Brawl Stars y Roblox.",
  },
  {
    q: "¿Se requiere descargar alguna app para cambiar mi nick?",
    a: "No requieres instalar teclados ni aplicaciones. Copias la combinación desde el navegador y la pegas en la tarjeta de cambio de nombre en Free Fire.",
  },
];

export default function NickFreeFireMasculinoPage() {
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
                Nick Free Fire Masculino
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Nick Free Fire Masculino: Nombres Pro y Letras Góticas
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Crea un nick imponente y legendario para Free Fire. Combina letras góticas y de estilo guerrero
              con los mejores símbolos masculinos (⚔️👑🔥☠️). Genera tu nombre pro para PvP, salas clasificatorias
              y clanes competitivos. Copia con un clic y destaca en el campo de batalla.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              El estilo de nick masculino para Free Fire destaca por transmitir una presencia imponente, competitiva y dominante frente a los oponentes. A menudo es popular entre jugadores fraggers y líderes de escuadra para marcar respeto en salas clasificatorias. Se usa comúnmente en torneos competitivos, y si buscas alternativas puedes explorar nuestras <Link href="/letras-bonitas/letras-graffiti" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras graffiti</Link> o revisar la sección de <Link href="/nicks-para-juegos/nick-free-fire" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nick Free Fire</Link>.
            </p>
          </header>

          {/* Interactive Converter with Fraktur (Gothic) Highlighted */}
          <Converter highlightStyleId="gothic" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Crear tu Nick Masculino para Free Fire en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Ingresa tu Nombre Gamer
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Escribe tu alias o apodo en el cuadro del generador.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Elige la Fuente Gótica
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Visualiza tu nick con letras góticas y guerreras de gran impacto.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Pega en Garena
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Haz clic en &quot;Copiar&quot; y pégalo en tu tarjeta de cambio de nombre.
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
              Recuerda no sobrepasar los 12 caracteres máximos en el campo de apodo. Consulta nuestro tutorial para <Link href="/nicks-para-juegos/cambiar-nick-free-fire" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">cambiar nick Free Fire</Link> o adorna tu perfil con <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">símbolos para nick</Link>.
            </p>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites de Caracteres en Juegos Battle Royale
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Plataforma / Modo</th>
                    <th className="py-3 px-4">Límite Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-sm text-neutral-700 dark:text-neutral-300">
                  {ffLimits.map((item) => (
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
            title="Ejemplos de Nicks Masculinos Pro para Free Fire"
            examples={masculineNickExamples}
          />

          {/* Section: Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Si deseas darle un toque colorido a la firma de tu clan, consulta la guía de <Link href="/nicks-para-juegos/bio-colorida-free-fire" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">bio colorida Free Fire</Link> o prueba el convertidor de <Link href="/letras-personalizadas/texto-en-negrita" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">texto en negrita</Link>.
          </section>

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Nicks de Free Fire"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
