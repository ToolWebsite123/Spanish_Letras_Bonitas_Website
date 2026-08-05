import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Texto en Negrita | Convertidor de Letras Gruesas y Remarcadas",
  description:
    "Convierte tu texto a letras en negrita Unicode. Destaca palabras en Instagram, WhatsApp, Facebook y comentarios gratis sin instalar apps.",
};

const charLimits = [
  { platform: "Instagram Bio / Post", limit: "150 / 2200 caracteres" },
  { platform: "WhatsApp Mensajes", limit: "Sin límite práctico" },
  { platform: "TikTok Bio / Comentarios", limit: "80 / 150 caracteres" },
  { platform: "Facebook Post", limit: "63,206 caracteres" },
  { platform: "LinkedIn Post", limit: "3,000 caracteres" },
  { platform: "YouTube Títulos", limit: "100 caracteres" },
  { platform: "Twitter / X Post", limit: "280 caracteres" },
];

const boldExamples = [
  {
    persona: "Promoción / Anuncio",
    text: "🔥 𝐎𝐅𝐄𝐑𝐓𝐀 𝐄𝐒𝐏𝐄𝐂𝐈𝐀𝐋: 𝟓𝟎% 𝐝𝐞 𝐝𝐞𝐬𝐜𝐮𝐞𝐧𝐭𝐨 𝐡𝐨𝐲",
  },
  {
    persona: "Llamado a la Acción",
    text: "👉 𝐇𝐀𝐙 𝐂𝐋𝐈𝐂 𝐄𝐍 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐏𝐀𝐑𝐀 𝐌𝐀́𝐒 𝐈𝐍𝐅𝐎",
  },
  {
    persona: "Frase de Motivación",
    text: "💪 𝐄𝐥 𝐞́𝐱𝐢𝐭𝐨 𝐞𝐬 𝐥𝐚 𝐬𝐮𝐦𝐚 𝐝𝐞 𝐩𝐞𝐪𝐮𝐞𝐧̃𝐨𝐬 𝐞𝐬𝐟𝐮𝐞𝐫𝐳𝐨𝐬",
  },
  {
    persona: "Título de Publicación",
    text: "📌 𝐆𝐔𝐈́𝐀 𝐃𝐄𝐅𝐈𝐍𝐈𝐓𝐈𝐕𝐀: 𝐂𝐨́𝐦𝐨 𝐜𝐫𝐞𝐜𝐞𝐫 𝐞𝐧 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦",
  },
  {
    persona: "Aviso Importante",
    text: "⚠️ 𝐀𝐕𝐈𝐒𝐎 𝐈𝐌𝐏𝐎𝐑𝐓𝐀𝐍𝐓𝐄: 𝐍𝐮𝐞𝐯𝐨 𝐡𝐨𝐫𝐚𝐫𝐢𝐨 𝐝𝐞 𝐚𝐭𝐞𝐧𝐜𝐢𝐨́𝐧",
  },
  {
    persona: "Evento Especial",
    text: "🎉 𝐆𝐑𝐀𝐍 𝐈𝐍𝐀𝐔𝐆𝐔𝐑𝐀𝐂𝐈𝐎́𝐍 este 𝐬𝐚́𝐛𝐚𝐝𝐨",
  },
  {
    persona: "Perfil Profesional",
    text: "🚀 𝐂𝐄𝐎 & 𝐅𝐮𝐧𝐝𝐚𝐝𝐨𝐫 | 𝐌𝐚𝐫𝐤𝐞𝐭𝐢𝐧𝐠 𝐃𝐢𝐠𝐢𝐭𝐚𝐥",
  },
  {
    persona: "Resaltar Nombre",
    text: "✨ 𝐀𝐋𝐄𝐉𝐀𝐍𝐃𝐑𝐎 𝐆𝐎́𝐌𝐄𝐙 | 𝐂𝐫𝐞𝐚𝐝𝐨𝐫 𝐝𝐞 𝐂𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨",
  },
  {
    persona: "Recordatorio",
    text: "⏰ 𝐑𝐄𝐂𝐎𝐑𝐃𝐀𝐓𝐎𝐑𝐈𝐎: Últimas vacantes disponibles",
  },
  {
    persona: "Nick Gamer Impactante",
    text: "⚡ 𝐁𝐎𝐋𝐃 𝐊𝐈𝐋𝐋𝐄𝐑 | 𝐏𝐫𝐨 𝐏𝐥𝐚𝐲𝐞𝐫 ⚡",
  },
];

const faqs = [
  {
    q: "¿Cómo funciona el texto en negrita Unicode?",
    a: "A diferencia de las etiquetas HTML de formato convencional (como <b>), el convertidor asigna a cada letra su equivalente en los bloques alfanuméricos matemáticos en negrita de Unicode. Esto permite que el texto permanezca en negrita al pegarlo en cualquier app.",
  },
  {
    q: "¿Se pueden poner palabras en negrita en Instagram?",
    a: "¡Sí! Como Instagram no ofrece botones nativos de negrita en bios o comentarios, este convertidor es la solución ideal para destacar palabras en tu biografía o pie de foto.",
  },
  {
    q: "¿Funciona en estados y chats de WhatsApp?",
    a: "Sí. Puedes usar el texto en negrita Unicode para destacar frases completas en tus estados de WhatsApp o mensajes sin depender de los asteriscos de formato estándar.",
  },
  {
    q: "¿Hay algún costo o suscripción para usar el convertidor?",
    a: "No, la herramienta es totalmente gratuita de uso ilimitado en cualquier momento.",
  },
  {
    q: "¿Afecta el SEO o la búsqueda de mi perfil usar texto en negrita?",
    a: "Para motores de búsqueda convencionales, se recomienda usar texto plano en palabras clave principales. Sin embargo, para captar la atención visual de tus seguidores en redes sociales, el impacto de las negritas es excelente.",
  },
  {
    q: "¿Es compatible con computadoras y teléfonos móviles?",
    a: "Sí, funciona impecablemente en dispositivos Android, iOS (iPhone/iPad), Windows y Mac.",
  },
  {
    q: "¿Puedo convertir frases largas a negrita?",
    a: "Sí, puedes escribir o pegar párrafos enteros y la herramienta convertirá al instante todas las letras A-Z y a-z.",
  },
  {
    q: "¿Necesito instalar algún programa o extensión?",
    a: "No se requiere ninguna instalación. Todo el proceso ocurre en tu navegador web.",
  },
];

export default function TextoEnNegritaPage() {
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
                Texto en Negrita
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Texto en Negrita: Convertidor de Letras Gruesas y Fuertes
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Resalta tus mensajes y títulos en redes sociales con letras en negrita Unicode. Genera texto
              grueso y remarcado ideal para biografías de Instagram, avisos en WhatsApp, títulos en LinkedIn
              y publicaciones en Facebook. Convierte tus frases con un clic y capta la atención de todos.
            </p>
          </header>

          {/* Interactive Converter with Bold Highlighted */}
          <Converter highlightStyleId="bold" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Convertir Texto a Negrita en 3 Pasos
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
                  Coloca las palabras o anuncios que deseas resaltar en la casilla del generador.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Genera la Negrita
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  El sistema convertirá cada carácter a su variante matemática en negrita inmediatamente.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Destaca
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Haz clic en &quot;Copiar&quot; y pégalo en tus publicaciones, comentarios o perfil.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites Recomendados por Plataforma
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Plataforma / Formato</th>
                    <th className="py-3 px-4">Capacidad de Texto</th>
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

          {/* Section: Ejemplos de Texto en Negrita Listos para Copiar */}
          <ExamplesSection
            title="Ejemplos de Frases y Títulos en Negrita"
            examples={boldExamples}
          />

          {/* Section: Preguntas Frecuentes sobre Texto en Negrita */}
          <FaqSection
            title="Preguntas Frecuentes sobre Texto en Negrita"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
