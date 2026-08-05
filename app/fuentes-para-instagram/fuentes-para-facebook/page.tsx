import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Fuentes para Facebook | Convertidor de Letras para Posts y Perfil",
  description:
    "Convierte tu texto a fuentes bonitas y negritas para Facebook. Destaca tus publicaciones, nombres de grupo y biografía gratis.",
};

const charLimits = [
  { platform: "Facebook Publicación (Post)", limit: "63,206 caracteres" },
  { platform: "Facebook Nombre de Usuario", limit: "50 caracteres" },
  { platform: "Facebook Biografía (Perfil)", limit: "101 caracteres" },
  { platform: "Facebook Nombre de Grupo", limit: "75 caracteres" },
  { platform: "Facebook Comentario", limit: "8,000 caracteres" },
  { platform: "Facebook Historias (Stories)", limit: "Sin límite práctico" },
];

const facebookExamples = [
  {
    persona: "Anuncio de Oferta / Tienda",
    text: "🔥 𝐆𝐑𝐀𝐍 𝐎𝐅𝐄𝐑𝐓𝐀: 𝟓𝟎% 𝐝𝐞 𝐝𝐞𝐬𝐜𝐮𝐞𝐧𝐭𝐨 𝐞𝐧 𝐭𝐨𝐝𝐚 𝐥𝐚 𝐭𝐢𝐞𝐧𝐝𝐚 🛍️",
  },
  {
    persona: "Título de Grupo de Facebook",
    text: "📌 𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋: 𝐄𝐦𝐩𝐫𝐞𝐧𝐝𝐞𝐝𝐨𝐫𝐞𝐬 𝐲 𝐍𝐞𝐠𝐨𝐜𝐢𝐨𝐬 𝟐𝟎𝟐𝟔",
  },
  {
    persona: "Publicación de Noticias / Blog",
    text: "📢 𝐔́𝐋𝐓𝐈𝐌𝐀 𝐇𝐎𝐑𝐀: 𝐍𝐮𝐞𝐯𝐚 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨́𝐧 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞",
  },
  {
    persona: "Perfil Profesional / Marca",
    text: "💼 𝐌𝐚𝐫𝐤𝐞𝐭𝐢𝐧𝐠 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 & 𝐃𝐢𝐬𝐞𝐧̃𝐨 𝐖𝐞𝐛 | 𝐀𝐬𝐞𝐬𝐨𝐫𝐢́𝐚𝐬 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐚𝐬",
  },
  {
    persona: "Llamado a Compartir",
    text: "👉 𝐂𝐎𝐌𝐏𝐀𝐑𝐓𝐄 𝐞𝐬𝐭𝐞 𝐩𝐨𝐬𝐭 𝐜𝐨𝐧 𝐭𝐮𝐬 𝐚𝐦𝐢𝐠𝐨𝐬 𝐲 𝐟𝐚𝐦𝐢𝐥𝐢𝐚",
  },
  {
    persona: "Evento Especial / Fiesta",
    text: "🎉 𝐈𝐍𝐕𝐈𝐓𝐀𝐂𝐈𝐎́𝐍: 𝐅𝐢𝐞𝐬𝐭𝐚 𝐝𝐞 𝐀𝐧𝐢𝐯𝐞𝐫𝐬𝐚𝐫𝐢𝐨 𝐞𝐬𝐭𝐞 𝐯𝐢𝐞𝐫𝐧𝐞𝐬 🥂",
  },
  {
    persona: "Reflexión Personal",
    text: "✨ 𝐋𝐚 𝐜𝐥𝐚𝐯𝐞 𝐝𝐞𝐥 𝐞́𝐱𝐢𝐭𝐨 𝐞𝐬 𝐥𝐚 𝐜𝐨𝐧𝐬𝐭𝐚𝐧𝐜𝐢𝐚 𝐝𝐢𝐚𝐫𝐢𝐚 💪",
  },
  {
    persona: "Venta de Vehículo / Inmueble",
    text: "🚘 𝐄𝐍 𝐕𝐄𝐍𝐓𝐀: 𝐄𝐱𝐜𝐞𝐥𝐞𝐧𝐭𝐞 𝐞𝐬𝐭𝐚𝐝𝐨 | 𝐔́𝐧𝐢𝐜𝐨 𝐝𝐮𝐞𝐧̃𝐨 🔑",
  },
  {
    persona: "Resaltar Nombre de Página",
    text: "🌟 𝐀𝐋𝐄𝐉𝐀𝐍𝐃𝐑𝐎 𝐆𝐎́𝐌𝐄𝐙 - 𝐅𝐨𝐭𝐨𝐠𝐫𝐚𝐟𝐢́𝐚 𝐏𝐫𝐨𝐟𝐞𝐬𝐢𝐨𝐧𝐚𝐥 📷",
  },
  {
    persona: "Aviso de Horario",
    text: "⏰ 𝐀𝐓𝐄𝐍𝐂𝐈𝐎́𝐍: 𝐀𝐛𝐢𝐞𝐫𝐭𝐨 𝐝𝐞 𝐋𝐮𝐧𝐞𝐬 𝐚 𝐒𝐚́𝐛𝐚𝐝𝐨 𝐝𝐞 𝟗𝐚𝐦 𝐚 𝟔𝐩𝐦",
  },
];

const faqs = [
  {
    q: "¿Cómo pongo letras en negrita o fuentes bonitas en Facebook?",
    a: "Escribe tu frase en la casilla de nuestro convertidor, elige el estilo de fuente deseado, presiona 'Copiar' y pégalo en tu publicación, comentario o biografía de Facebook.",
  },
  {
    q: "¿Funciona en publicaciones de grupos y páginas de Facebook?",
    a: "¡Sí! Como Facebook no incluye botones de formato de texto en todas sus secciones, nuestras fuentes Unicode permiten resaltar títulos y avisos en posts de grupos, páginas de empresa y perfiles personales.",
  },
  {
    q: "¿Puedo usar letras bonitas en mi nombre de perfil de Facebook?",
    a: "Facebook tiene políticas estrictas sobre nombres reales en perfiles personales. Sin embargo, para páginas de fans, nombres de grupos, historias y descripciones de perfil funciona perfectamente.",
  },
  {
    q: "¿Cuántos caracteres permite una publicación de Facebook?",
    a: "Las publicaciones de Facebook admiten hasta 63,206 caracteres, por lo que tienes libertad completa para formatear textos largos.",
  },
  {
    q: "¿Se ven correctamente las letras en Facebook Lite y computadoras?",
    a: "Sí, las fuentes Unicode se leen adecuadamente tanto en Facebook web para PC como en las aplicaciones móviles de Facebook y Facebook Lite.",
  },
  {
    q: "¿Es totalmente gratuito este generador de fuentes para Facebook?",
    a: "Sí, es 100% gratis y sin límites de uso.",
  },
  {
    q: "¿Ayuda usar texto en negrita a tener más interacción en Facebook?",
    a: "¡Definitivamente! Destacar las primeras palabras de un post en negrita actúa como un gancho visual que aumenta las vistas y reacciones en el feed.",
  },
  {
    q: "¿Necesito instalar alguna extensión en mi navegador?",
    a: "No, todo el proceso de conversión ocurre en línea directamente en nuestra página.",
  },
];

export default function FuentesParaFacebookPage() {
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
                Fuentes para Facebook
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Fuentes para Facebook: Convertidor de Letras para Posts
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Haz que tus publicaciones, anuncios y grupos de Facebook resalten sobre los demás. Convierte tus
              títulos a letras en negrita, cursiva y fuentes estilizadas compatibles con Facebook. Escribe tu aviso,
              copia el texto formateado y capta más reacciones al instante.
            </p>
          </header>

          {/* Interactive Converter with Bold Highlighted */}
          <Converter highlightStyleId="bold" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Formatear tus Posts de Facebook en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Escribe tu Anuncio
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Coloca el mensaje o título que deseas publicar en la casilla del generador.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Selecciona el Estilo Resaltado
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Elige la variante de letra negrita o tipografía que mejor encaje con tu post.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Publica
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Haz clic en &quot;Copiar&quot; y pégalo directamente en Facebook.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites de Caracteres en Facebook
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Sección de Facebook</th>
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
            title="Ejemplos Formateados para Facebook"
            examples={facebookExamples}
          />

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Fuentes para Facebook"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
