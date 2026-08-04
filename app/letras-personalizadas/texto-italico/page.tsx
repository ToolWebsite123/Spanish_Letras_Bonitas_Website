import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Texto en Itálico | Convertidor de Letras Inclinadas y Cursivas",
  description:
    "Convierte tu texto a letras en itálica Unicode. Añade énfasis elegante a citas, frases de Instagram, biografías y mensajes gratis.",
};

const charLimits = [
  { platform: "Instagram Caption / Bio", limit: "2,200 / 150 caracteres" },
  { platform: "Citas en Twitter / X", limit: "280 caracteres" },
  { platform: "LinkedIn Publicaciones", limit: "3,000 caracteres" },
  { platform: "WhatsApp Mensajes", limit: "Sin límite práctico" },
  { platform: "Facebook Publicaciones", limit: "63,206 caracteres" },
  { platform: "Tatuajes / Diseños", limit: "Sin límite" },
];

const italicExamples = [
  {
    persona: "Cita Célebre / Poesía",
    text: "❛ 𝑨𝒎𝒂𝒓 𝒏𝒐 𝒆𝒔 𝒎𝒊𝒓𝒂𝒓𝒔𝒆 𝒆𝒍 𝒖𝒏𝒐 𝒂𝒍 𝒐𝒕𝒓𝒐, 𝒔𝒊𝒏𝒐 𝒎𝒊𝒓𝒂𝒓 𝒋𝒖𝒏𝒕𝒐𝒔 𝒆𝒏 𝒍𝒂 𝒎𝒊𝒔𝒎𝒂 𝒅𝒊𝒓𝒆𝒄𝒄𝒊𝒐́𝒏. ❜",
  },
  {
    persona: "Énfasis en Descripción de Post",
    text: "✨ 𝑵𝒖𝒆𝒗𝒐 𝒄𝒂𝒑𝒊́𝒕𝒖𝒍𝒐: 𝒂𝒑𝒓𝒆𝒏𝒅𝒊𝒆𝒏𝒅𝒐 𝒂 𝒅𝒊𝒔𝒇𝒓𝒖𝒕𝒂𝒓 𝒆𝒍 𝒄𝒂𝒎𝒊𝒏𝒐.",
  },
  {
    persona: "Frase de Motivación",
    text: "💡 𝑳𝒂 𝒎𝒆𝒋𝒐𝒓 𝒇𝒐𝒓𝒎𝒂 𝒅𝒆 𝒑𝒓𝒆𝒅𝒆𝒄𝒊𝒓 𝒆𝒍 𝒇𝒖𝒕𝒖𝒓𝒐 𝒆𝒔 𝒄𝒓𝒆𝒂𝒓𝒍𝒐.",
  },
  {
    persona: "Diseño para Tatuaje / Letra Inclinada",
    text: "𝑭𝒂𝒎𝒊𝒍𝒊𝒂 𝒆𝒔 𝒕𝒐𝒅𝒐 🌿",
  },
  {
    persona: "Resaltar Autoría",
    text: "✍️ 𝑬𝒔𝒄𝒓𝒊𝒕𝒐 𝒑𝒐𝒓: 𝑽𝒂𝒍𝒆𝒏𝒕𝒊𝒏𝒂 𝑹𝒐𝒅𝒓𝒊́𝒈𝒖𝒆𝒛",
  },
  {
    persona: "Perfil Profesional / Bio",
    text: "📖 𝑨𝒑𝒂𝒔𝒊𝒐𝒏𝒂𝒅𝒐 𝒑𝒐𝒓 𝒍𝒂 𝒍𝒆𝒄𝒕𝒖𝒓𝒂, 𝒆𝒍 𝒂𝒓𝒕𝒆 𝒚 𝒍𝒂 𝒇𝒐𝒕𝒐𝒈𝒓𝒂𝒇𝒊́𝒂.",
  },
  {
    persona: "Llamado a la Reflexión",
    text: "💭 𝑵𝒐 𝒄𝒖𝒆𝒏𝒕𝒆𝒔 𝒍𝒐𝒔 𝒅𝒊́𝒂𝒔, 𝒉𝒂𝒛 𝒒𝒖𝒆 𝒍𝒐𝒔 𝒅𝒊́𝒂𝒔 𝒄𝒖𝒆𝒏𝒕𝒆𝒏.",
  },
  {
    persona: "Subtítulo de Artículo",
    text: "📌 𝑺𝒆𝒄𝒄𝒊𝒐́𝒏 𝑬𝒔𝒑𝒆𝒄𝒊𝒂𝒍: 𝑻𝒆𝒏𝒅𝒆𝒏𝒄𝒊𝒂𝒔 𝒅𝒆 𝑫𝒊𝒔𝒆𝒏̃𝒐 𝟐𝟎𝟐𝟔",
  },
  {
    persona: "Agradecimiento Especial",
    text: "🙏 𝑮𝒓𝒂𝒄𝒊𝒂𝒔 𝒂 𝒕𝒐𝒅𝒐𝒔 𝒑𝒐𝒓 𝒔𝒖 𝒂𝒑𝒐𝒚𝒐 𝒊𝒏𝒄𝒐𝒏𝒅𝒊𝒄𝒊𝒐𝒏𝒂𝒍.",
  },
  {
    persona: "Nick Elegante e Inclinado",
    text: "✨ 𝑺𝒉𝒂𝒅𝒐𝒘𝑲𝒊𝒏𝒈 ✨",
  },
];

const faqs = [
  {
    q: "¿Cómo funciona el texto en itálico Unicode?",
    a: "El convertidor mapea cada carácter a su variante alfanumérica matemática inclinada u oblicua dentro del estándar Unicode mundial, permitiendo que el texto permanezca en itálica al pegarlo en cualquier aplicación.",
  },
  {
    q: "¿Se pueden poner frases en itálica en Instagram y Twitter?",
    a: "¡Sí! Puedes copiar y pegar palabras o frases completas en itálica en bios de Instagram, comentarios, publicaciones de X (Twitter), Facebook y LinkedIn.",
  },
  {
    q: "¿Es adecuado el estilo itálico para diseño de tatuajes?",
    a: "Sí, el estilo Serif Bold Italic es una excelente referencia visual para lettering de tatuajes, frases inspiradoras y firmas.",
  },
  {
    q: "¿Cómo se diferencia la itálica del estilo cursivo común?",
    a: "El texto en itálica conserva la estructura tipográfica de la letra romana con una inclinación angular elegante y trazo remarcado, mientras que la cursiva imita la escritura a mano alzada.",
  },
  {
    q: "¿Es gratis usar el convertidor de texto en itálico?",
    a: "Sí, la herramienta es totalmente gratuita y sin restricciones de uso.",
  },
  {
    q: "¿Funciona en estados de WhatsApp?",
    a: "Sí, puedes pegar frases en itálica Unicode en chats y estados de WhatsApp sin necesidad de usar los guiones bajos de formato.",
  },
  {
    q: "¿Se leen bien las letras en itálica en computadoras y móviles?",
    a: "Sí, todas las fuentes itálicas son legibles en dispositivos Android, iOS, Windows y Mac.",
  },
  {
    q: "¿Necesito instalar algún software?",
    a: "No, todo el proceso de conversión ocurre en línea desde tu navegador.",
  },
];

export default function TextoItalicoPage() {
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
                Texto en Itálico
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Texto en Itálico: Convertidor de Letras Inclinadas
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Añade énfasis, elegancia y estilo a tus frases con nuestro convertidor de texto en itálico.
              Genera letras inclinadas de gran impacto ideales para citas célebres, descripciones de Instagram,
              títulos de artículos y diseños de lettering. Convierte tu texto, copia con un clic y destaca tus palabras.
            </p>
          </header>

          {/* Interactive Converter Pre-filtered to Personalizado / Itálico */}
          <Converter
            initialCategory="Personalizado"
            styleOverrides={{
              "serif-bold-italic": {
                name: "Itálico",
                category: "Personalizado",
              },
            }}
          />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Convertir Texto a Itálico en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Escribe tu Cita o Frase
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Ingresa las palabras que deseas enfatizar en la casilla del generador.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Visualiza la Letra Inclinada
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  El sistema generará la versión en itálica estilizada de forma instantánea.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Enfatiza
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Haz clic en &quot;Copiar&quot; y pega el resultado en tu biografía o publicación.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites Recomendados para Texto en Itálico
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
            title="Ejemplos de Frases y Citas en Itálico"
            examples={italicExamples}
          />

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Texto en Itálico"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
