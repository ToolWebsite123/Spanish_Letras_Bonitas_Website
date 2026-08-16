import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import GothicConverter from "@/components/GothicConverter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Letras Góticas - Conversor de Fuentes Medievales 🏰",
  description:
    "Convierte texto en letras góticas, fuentes estilo Fraktur y caligrafía medieval para copiar y pegar en Instagram, tatuajes y videojuegos.",
  alternates: {
    canonical: "/letras-bonitas/letras-goticas",
  },
};

const faqs = [
  {
    q: "¿Qué son las letras góticas Unicode?",
    a: "Son conjuntos de caracteres tipográficos basados en los bloques de símbolos matemáticos y de letras del estándar Unicode (Fraktur y Bold Fraktur). Permiten copiar estilos góticos medievales que se leen en cualquier navegador sin instalar fuentes externas.",
  },
  {
    q: "¿Funcionan las letras góticas en Instagram y TikTok?",
    a: "Sí, puedes copiarlas y pegarlas en biografías, nombres de perfil, historias y comentarios de Instagram, TikTok, Facebook y X (Twitter).",
  },
  {
    q: "¿Cuál es la diferencia entre gótico normal y negrita?",
    a: "El estilo gótico normal (Fraktur) utiliza trazos finos con detalles elegantes, mientras que el estilo gótico negrita (Bold Fraktur) aplica un grosor de trazo mayor para ofrecer un contraste más imponente y llamativo.",
  },
  {
    q: "¿Puedo usarlas en nombres de usuario para juegos?",
    a: "Sí, son muy populares en videojuegos como Free Fire, Roblox, PUBG Mobile y League of Legends para otorgar un toque oscuro o medieval al nick de jugador.",
  },
  {
    q: "¿Por qué algunos caracteres no tienen versión gótica?",
    a: "El estándar Unicode define el bloque Fraktur principalmente para las 26 letras del alfabeto latino. Símbolos con acentos (como á, é, í, ó, ú) o la letra ñ conservan su formato original o se representan con su equivalente base.",
  },
  {
    q: "¿Las letras góticas son iguales en todos los dispositivos?",
    a: "Sí, al ser caracteres Unicode estandarizados, se visualizan de forma idéntica en celulares Android, iPhones, iPads y computadoras Windows o Mac.",
  },
  {
    q: "¿Puedo copiar y pegar texto gótico en Microsoft Word?",
    a: "Por supuesto, al pegar el texto convertido en Word u otros editores de texto, mantendrá los caracteres góticos sin cambiar la tipografía del documento.",
  },
  {
    q: "¿Existen números en estilo gótico?",
    a: "Sí, en la herramienta y en nuestra tabla de referencia encontrarás la versión de dígitos estilizados (como 𝟙𝟚𝟛 y 𝟭𝟮𝟯) que acompañan armónicamente la estética gótica.",
  },
  {
    q: "¿Cuál es el origen histórico de la tipografía gótica?",
    a: "Surgió en Europa Occidental durante el siglo XII (Edad Media) como un estilo de caligrafía manual denso y anguloso para optimizar el espacio en manuscritos pergaminos antes de la invención de la imprenta.",
  },
  {
    q: "¿Es totalmente gratis usar el conversor de letras góticas?",
    a: "Sí, el conversor es 100% gratuito, ilimitado y no requiere ningún tipo de registro ni descarga de aplicaciones.",
  },
];

const alphabetRows = [
  { letter: "A / a", gothic: "𝔄 / 𝔞", bold: "𝕬 / 𝖆" },
  { letter: "B / b", gothic: "𝔅 / 𝔟", bold: "𝕭 / 𝖇" },
  { letter: "C / c", gothic: "ℭ / 𝔠", bold: "𝕮 / 𝖈" },
  { letter: "D / d", gothic: "𝔇 / 𝔡", bold: "𝕯 / 𝖉" },
  { letter: "E / e", gothic: "𝔈 / 𝔢", bold: "𝕰 / 𝖊" },
  { letter: "F / f", gothic: "𝔉 / 𝔣", bold: "𝕱 / 𝖋" },
  { letter: "G / g", gothic: "𝔊 / 𝔤", bold: "𝕲 / 𝖌" },
  { letter: "H / h", gothic: "ℌ / 𝔥", bold: "𝕳 / 𝖍" },
  { letter: "I / i", gothic: "ℑ / 𝔦", bold: "𝕴 / 𝖎" },
  { letter: "J / j", gothic: "𝔍 / 𝔧", bold: "𝕵 / 𝖏" },
  { letter: "K / k", gothic: "𝔎 / 𝔨", bold: "𝕶 / 𝖐" },
  { letter: "L / l", gothic: "𝔏 / 𝔩", bold: "𝕷 / 𝖑" },
  { letter: "M / m", gothic: "𝔐 / 𝔪", bold: "𝕸 / 𝖒" },
  { letter: "N / n", gothic: "𝔑 / 𝔫", bold: "𝕹 / 𝖓" },
  { letter: "O / o", gothic: "𝔒 / 𝔬", bold: "𝕺 / 𝖔" },
  { letter: "P / p", gothic: "𝔓 / 𝔭", bold: "𝕻 / 𝖕" },
  { letter: "Q / q", gothic: "𝔔 / 𝔮", bold: "𝕼 / 𝖖" },
  { letter: "R / r", gothic: "ℜ / 𝔯", bold: "𝕽 / 𝖗" },
  { letter: "S / s", gothic: "𝔖 / 𝔰", bold: "𝕾 / 𝖘" },
  { letter: "T / t", gothic: "𝔗 / 𝔱", bold: "𝕿 / 𝖙" },
  { letter: "U / u", gothic: "𝔘 / 𝔲", bold: "𝖀 / 𝖚" },
  { letter: "V / v", gothic: "𝔙 / 𝔳", bold: "𝖁 / 𝖛" },
  { letter: "W / w", gothic: "𝔚 / 𝔴", bold: "𝖂 / 𝖜" },
  { letter: "X / x", gothic: "𝔛 / 𝔵", bold: "𝖃 / 𝖝" },
  { letter: "Y / y", gothic: "𝔜 / 𝔶", bold: "𝖄 / 𝖞" },
  { letter: "Z / z", gothic: "ℨ / 𝔷", bold: "𝖅 / 𝖟" },
];

export default function LetrasGoticasPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 pt-3 sm:pt-4 pb-8 sm:pb-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* Compact Hero Header */}
        <header className="flex flex-col gap-1">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Letras Góticas: Conversor de Fuentes Medievales 🏰
          </h1>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed font-medium mt-1">
            La tipografía gótica (conocida históricamente como <strong>Gothic</strong>, <strong>Blackletter</strong> o <strong>Fraktur</strong>) destaca por su imponente presencia visual, trazos angulosos y elegancia histórica. Nuestro conversor en línea te permite transformar cualquier texto en letras góticas medievales compuestas por caracteres Unicode reales, listas para copiar y pegar en tatuajes, títulos de diseño gráfico, perfiles sociales y nombres personalizados para juegos.
          </p>
        </header>

        {/* Working Gothic Converter Tool */}
        <GothicConverter />

        {/* SECTION 1: Cómo funciona el conversor gótico */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Cómo funciona el conversor gótico
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1.5">
              <span className="w-7 h-7 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold flex items-center justify-center">1</span>
              <strong className="text-[var(--foreground)]">Escribe tu texto:</strong>
              <span className="opacity-80">Ingresa cualquier frase, palabra o nombre en la casilla de texto superior.</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1.5">
              <span className="w-7 h-7 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold flex items-center justify-center">2</span>
              <strong className="text-[var(--foreground)]">El sistema convierte instantáneamente:</strong>
              <span className="opacity-80">La herramienta traduce cada letra a su equivalente en el bloque de tipografía Fraktur Unicode.</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1.5">
              <span className="w-7 h-7 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold flex items-center justify-center">3</span>
              <strong className="text-[var(--foreground)]">Copia con un solo clic:</strong>
              <span className="opacity-80">Haz clic en el botón de copiar de la variante que prefieras y pégala en cualquier app.</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: Ideal para */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Ideal para
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs sm:text-sm">
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>✒️</span> Diseños de Tatuajes y Lettering
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>🎮</span> Nombres de Usuario para Videojuegos
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>🖤</span> Contenido Visual y Estética Dark/Vintage
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>📜</span> Titulares y Títulos de Proyectos
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>🎸</span> Logotipos de Bandas e Ilustraciones
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>✨</span> Biografías y Estados en Redes Sociales
            </li>
          </ul>
        </section>

        {/* SECTION 3: Tipografía Gótica y Letras Medievales */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Tipografía Gótica y Letras Medievales
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            La caligrafía gótica tiene sus raíces en la Europa de la Edad Media (siglo XII al XV). Surgió como una evolución de la minúscula carolina para adaptarse al pergamino de la época, permitiendo escribir más palabras por página mediante trazos condensados y verticales. Se utilizó ampliamente en la transcripción manual de manuscritos bíblicos, documentos de cancillería y textos académicos.
          </p>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            También conocida como **Blackletter**, **letras medievales** o **Fraktur**, fue además el estilo utilizado por Johannes Gutenberg en la célebre Biblia de 42 líneas cuando inventó la imprenta de tipos móviles en Europa, consolidándola como el primer estándar tipográfico impreso del continente.
          </p>
        </section>

        {/* SECTION 4: Características principales */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Características principales de la tipografía gótica
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1">
              <strong className="text-[var(--foreground)] font-bold">• Trazos angulares y definidos:</strong>
              <span className="opacity-80">A diferencia de las letras redondas latinas, las letras góticas poseen esquinas marcadas y remates puntiagudos.</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1">
              <strong className="text-[var(--foreground)] font-bold">• Alto contraste de líneas:</strong>
              <span className="opacity-80">Marcada alternancia entre trazos verticales gruesos y finas líneas de conexión horizontales o diagonales.</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1 sm:col-span-2">
              <strong className="text-[var(--foreground)] font-bold">• Estilo denso y ornamental:</strong>
              <span className="opacity-80">Debido a su alta densidad visual, este estilo no está pensado para párrafos largos, sino para destacar palabras clave, títulos, nombres o marcas con fuerte identidad.</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: Alfabeto de Letras Góticas (Tabla de Referencia) */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50 overflow-x-auto">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Alfabeto de Letras Góticas (Guía de Referencia)
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Consulta la siguiente tabla de equivalencias de las 26 letras del alfabeto en estilo Gótico Normal (Fraktur) y Gótico Negrita (Bold Fraktur) para armar combinaciones manuales:
          </p>

          <table className="w-full text-left text-xs sm:text-sm border-collapse mt-2">
            <thead>
              <tr className="border-b border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-extrabold">
                <th className="py-2.5 px-3">Letra Estándar</th>
                <th className="py-2.5 px-3">Gótica Normal (Fraktur)</th>
                <th className="py-2.5 px-3">Gótica Negrita (Bold)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]/60 text-[var(--foreground)] font-serif text-base">
              {alphabetRows.map((row) => (
                <tr key={row.letter}>
                  <td className="py-2 px-3 font-sans text-xs font-bold text-slate-500">{row.letter}</td>
                  <td className="py-2 px-3 text-slate-800 dark:text-slate-100">{row.gothic}</td>
                  <td className="py-2 px-3 text-slate-900 dark:text-white">{row.bold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* SECTION 6: Números Góticos */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Números Góticos
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Los números en estilo gótico utilizan dígitos estilizados basados en notaciones de imprenta clásica para mantener la coherencia estética con las letras Fraktur:
          </p>
          <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] font-mono text-sm sm:text-base font-bold">
            <span className="px-3 py-1.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400">𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡 𝟘</span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-amber-600 dark:text-amber-400">𝟭 𝟮 𝟯  𝟱 𝟲 𝟳 𝟴 𝟡 𝟬</span>
          </div>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Son muy utilizados para escribir fechas significativas en tatuajes (como años de nacimiento), números de camiseta de clanes de videojuegos o combinaciones numéricas en perfiles.
          </p>
        </section>

        {/* SECTION 7: Caligrafía Gótica */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Caligrafía Gótica: La base artesanal
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            La caligrafía gótica es la cuna artística de estas fuentes tipográficas. Se realiza tradicionalmente con plumillas de punta plana (chata) sujetas a un ángulo constante de 45 grados respecto a la línea de escritura. Esta técnica artesanal garantiza:
          </p>
          <ul className="flex flex-col gap-1.5 text-xs sm:text-sm text-[var(--foreground)] opacity-80">
            <li>• Trazos verticales rectos y firmes con remates romboidales en la parte superior e inferior.</li>
            <li>• Geometría simétrica entre las aperturas de las letras y sus espacios internos (aristas).</li>
            <li>• Detalles ornamentales y capitulares profusamente decoradas en las letras mayúsculas.</li>
          </ul>
        </section>

        {/* SECTION 8: Diferencia entre Gótico, Fraktur y Old English */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Diferencia entre Gótico, Fraktur y Old English
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Aunque a menudo se usan como sinónimos, existen sutilezas estéticas entre estas tres ramas de la caligrafía de letra negra (Blackletter):
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1.5">
              <strong className="text-[var(--foreground)] font-bold">1. Textura (Gótico Primitivo):</strong>
              <span className="opacity-80">Es la versión más antigua y rígida, caracterizada por líneas verticales apretadas que crean una textura similar a un tejido denso.</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1.5">
              <strong className="text-[var(--foreground)] font-bold">2. Fraktur (Gótico Alemán):</strong>
              <span className="opacity-80">Introduce trazos curvos partidos y líneas más elegantes. Es el estándar representado técnicamente en Unicode.</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1.5">
              <strong className="text-[var(--foreground)] font-bold">3. Old English (Gótico Anglosajón):</strong>
              <span className="opacity-80">Posee mayúsculas con espirales adornadas y bucles elaborados, muy utilizado en periódicos tradicionales y diplomas.</span>
            </div>
          </div>
        </section>

        {/* SECTION 9: Dónde usar Letras Góticas */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Dónde usar Letras Góticas
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center gap-2">
              <span>🩸</span> Diseños de tatuajes en el pecho, brazos o espalda.
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center gap-2">
              <span>🎸</span> Logotipos de bandas de Metal, Rock, Rap y estética Dark.
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center gap-2">
              <span>🎃</span> Arte temático de Halloween y diseño de portadas de libros.
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center gap-2">
              <span>⚔️</span> Apodos y nombres de clan en Free Fire, Roblox, PUBG y League of Legends.
            </li>
          </ul>
        </section>

        {/* SECTION 10: FAQ */}
        <FaqSection title="Preguntas Frecuentes sobre Letras Góticas" faqs={faqs} />

        {/* SECTION 11: Conclusión */}
        <section className="p-6 rounded-2xl bg-[#ede7df]/50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/60 flex flex-col gap-2 text-xs sm:text-sm">
          <h3 className="font-extrabold text-base text-[var(--foreground)]">Conclusión</h3>
          <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
            Las letras góticas ofrecen una estética inconfundible repleta de historia, carácter y dinamismo visual. Gracias a nuestro conversor en línea, puedes transformar palabras en instantes y llevar la elegancia de la caligrafía medieval a tus redes sociales, proyectos de diseño o tatuajes de forma 100% gratuita.
          </p>
        </section>
      </main>
    </div>
  );
}
