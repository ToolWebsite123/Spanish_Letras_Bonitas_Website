import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Fuentes para WhatsApp | Convertidor de Letras para Estados y Nombres",
  description:
    "Convierte tu texto a letras bonitas para WhatsApp. Destaca en tus estados, info de perfil y nombres de grupos gratis.",
};

const charLimits = [
  { platform: "WhatsApp Info (About)", limit: "139 caracteres" },
  { platform: "WhatsApp Nombre de Usuario", limit: "25 caracteres" },
  { platform: "WhatsApp Nombre de Grupo", limit: "100 caracteres" },
  { platform: "WhatsApp Estado de Texto", limit: "700 caracteres" },
  { platform: "WhatsApp Descripción de Grupo", limit: "2,048 caracteres" },
];

const whatsappExamples = [
  {
    persona: "Estado de Reflexión",
    text: "𝒮𝒾ℯ𝓂𝓅𝓇ℯ 𝒶ℊ𝓇𝒶𝒹ℯ𝒸𝒾𝒹ℴ 𝒸ℴ𝓃 𝓁𝒶 𝓋𝒾𝒹𝒶 ✨",
  },
  {
    persona: "Info Personal de Perfil",
    text: "𝒟𝒾𝓈𝓅ℴ𝓃𝒾𝒷𝓁ℯ 𝓈ℴ𝓁ℴ 𝓅ℴ𝓇 𝓂ℯ𝓃𝓈𝒶𝒿ℯ 𝒹ℯ 𝓉ℯ𝓍𝓉ℴ 📱",
  },
  {
    persona: "Nombre de Grupo Familiar",
    text: "ℱ𝒶𝓂𝒾𝓁𝒾𝒶 𝒰𝓃𝒾𝒹𝒶 ❤️ 𝟤𝟢𝟤𝟨",
  },
  {
    persona: "Grupo de Amigos",
    text: "ℒℴ𝓈 𝒹ℯ 𝒮𝒾ℯ𝓂𝓅𝓇ℯ 🎉 𝒵ℴ𝓃𝒶 𝒱ℐ𝒫",
  },
  {
    persona: "Negocio / Atención",
    text: "ℋℴ𝓇𝒶𝓇𝒾ℴ: 𝟫𝒶𝓂 𝒶 𝟨𝓅𝓂 🛍️ ℰ𝓃𝓋íℴ𝓈 𝒶𝒸𝓉𝒾𝓋ℴ𝓈",
  },
  {
    persona: "Frase de Motivación",
    text: "𝒞𝒶𝒹𝒶 𝒹í𝒶 ℯ𝓈 𝓊𝓃𝒶 𝓃𝓊ℯ𝓋𝒶 ℴ𝓅ℴ𝓇𝓉𝓊𝓃𝒾𝒹𝒶𝒹 🌟",
  },
  {
    persona: "Ocupado / Estudio",
    text: "ℰ𝓃 ℯ𝓈𝓉𝓊𝒹𝒾ℴ𝓈 📚 | 𝒰𝓇ℊℯ𝓃𝒸𝒾𝒶𝓈 𝓅ℴ𝓇 𝓁𝓁𝒶𝓂𝒶𝒹𝒶",
  },
  {
    persona: "Estado Romántico",
    text: "𝒯ú ℯ𝓇ℯ𝓈 𝓂𝒾 𝓁𝓊ℊ𝒶𝓇 𝒻𝒶𝓋ℴ𝓇𝒾𝓉ℴ 💖",
  },
  {
    persona: "Grupo de Trabajo",
    text: "ℰ𝓆𝓊𝒾𝓅ℴ 𝒹ℯ 𝒫𝓇ℴ𝓎ℯ𝒸𝓉ℴ𝓈 📈 𝒪𝒻𝒾𝒸𝒾𝓃𝒶",
  },
  {
    persona: "Viajes / Blog",
    text: "𝒟ℯ 𝓋𝒾𝒶𝒿ℯ 𝓅ℴ𝓇 ℯ𝓁 𝓂𝓊𝓃𝒹ℴ ✈️ 𝒩ℴ 𝒹𝒾𝓈𝓅ℴ𝓃𝒾𝒷𝓁ℯ",
  },
];

const faqs = [
  {
    q: "¿Cómo pongo letras bonitas en mi estado de WhatsApp?",
    a: "Escribe tu frase en la casilla de nuestro convertidor, elige el estilo de letra desejado, pulsa 'Copiar' y pégalo directamente en la casilla de Estado o en tu Info de perfil de WhatsApp.",
  },
  {
    q: "¿Es compatible con WhatsApp Web y WhatsApp Business?",
    a: "¡Sí! Como las fuentes generadas son caracteres Unicode estándar, se visualizan perfectamente tanto en la app de móvil como en WhatsApp Web, WhatsApp Desktop y WhatsApp Business.",
  },
  {
    q: "¿Puedo usar letras bonitas para nombres de grupos de WhatsApp?",
    a: "Totalmente. Puedes usar letras cursivas, negritas y símbolos para resaltar el nombre de tus grupos familiares, de trabajo o amigos.",
  },
  {
    q: "¿Cuántos caracteres permite la Info de perfil en WhatsApp?",
    a: "La sección 'Info' (antiguamente llamada Estado de perfil) admite un máximo de 139 caracteres.",
  },
  {
    q: "¿Por qué algunos contactos podrían no ver las letras especiales?",
    a: "En smartphones modernos con Android e iOS todas las fuentes se leen sin problemas. Solo teléfonos extremadamente antiguos podrían mostrar recuadros.",
  },
  {
    q: "¿Es gratis usar el convertidor para WhatsApp?",
    a: "Sí, es 100% gratuito e ilimitado.",
  },
  {
    q: "¿Se pueden enviar mensajes enteros con letras bonitas?",
    a: "Sí, puedes escribir o pegar párrafos completos en el convertidor y enviarlos por chat a cualquier contacto.",
  },
  {
    q: "¿Necesito instalar algún teclado especial?",
    a: "No requiere ninguna instalación, todo se realiza desde el navegador.",
  },
];

export default function FuentesParaWhatsAppPage() {
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
                Fuentes para WhatsApp
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Fuentes para WhatsApp: Convertidor de Letras para Estados
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Personaliza tus mensajes, estados e información de perfil de WhatsApp con letras bonitas y fuentes
              cursivas. Genera frases únicas para tus chats y nombres de grupo, copia con un clic y sorprende a todos
              tus contactos.
            </p>
          </header>

          {/* Interactive Converter Pre-filtered to Script / Cursive */}
          <Converter initialCategory="Script" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Cambiar tus Letras en WhatsApp en 3 Pasos
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
                  Ingresa tu mensaje, estado o nombre de grupo en la casilla del generador.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Elige la Fuente Cursiva
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Visualiza tu texto transformado automáticamente en fuentes elegantes.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Envía por Chat
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Haz clic en &quot;Copiar&quot; y pégalo directamente en tus chats o estado de WhatsApp.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites de Caracteres en WhatsApp
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Sección de WhatsApp</th>
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
            title="Ejemplos Formateados para WhatsApp"
            examples={whatsappExamples}
          />

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Fuentes para WhatsApp"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
