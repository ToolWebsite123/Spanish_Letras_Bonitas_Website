import Link from "next/link";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Letras para Firma | Convertidor de Texto en Estilo Firma Elegante",
  description:
    "Genera letras estilo firma elegante manuscrita en Unicode. Copia y pega para tu firma de correo electrónico, LinkedIn, documentos y redes sociales gratis.",
};

const charLimits = [
  { platform: "Firma de Correo (Gmail / Outlook)", limit: "Recomendado: 20 - 60 caracteres" },
  { platform: "LinkedIn Titular / Despedida", limit: "220 caracteres" },
  { platform: "Instagram Bio / Marca", limit: "150 caracteres" },
  { platform: "Pie de Artículo / Blog", limit: "Sin límite práctico" },
  { platform: "WhatsApp Mensajes / Estado", limit: "139 caracteres" },
  { platform: "Documentos Digitales / PDF", limit: "Sin límite" },
];

const firmaExamples = [
  {
    persona: "Firma Ejecutiva / Director",
    text: "𝒞𝒶𝓇𝓁ℴ𝓈 ℳℯ𝓃𝒹ℴ𝓏𝒶 | CEO & Founder",
  },
  {
    persona: "Despedida Profesional en Correo",
    text: "𝒜𝓉ℯ𝓃𝓉𝒶𝓂ℯ𝓃𝓉ℯ, 𝒟𝓇𝒶. 𝒱𝒶𝓁ℯ𝓃𝓉𝒾𝓃𝒶 ℛℴ𝒹𝓇íℊ𝓊ℯ𝓏",
  },
  {
    persona: "Firma de Artista / Creador",
    text: "✍️ 𝒜𝓇𝓉ℯ 𝓅ℴ𝓇 𝒮ℴ𝓅𝒽𝒾𝒶 ℳℴ𝓇𝒶𝓁ℯ𝓈 ✨",
  },
  {
    persona: "Firma para Fotografía",
    text: "📷 𝒫𝒽ℴ𝓉ℴℊ𝓇𝒶𝓅𝒽𝓎 𝒷𝓎 ℳ𝒶𝓉ℯℴ 𝒮𝒾𝓁𝓋𝒶",
  },
  {
    persona: "Signoff Elegante de Email",
    text: "𝒞ℴ𝓇𝒹𝒾𝒶𝓁𝓂ℯ𝓃𝓉ℯ, ℐ𝓃ℊ. 𝒜𝓁ℯ𝒿𝒶𝓃𝒹𝓇ℴ 𝒯ℴ𝓇𝓇ℯ𝓈",
  },
  {
    persona: "Firma en Biografía LinkedIn",
    text: "💼 ℬ𝓊𝓈𝒾𝓃ℯ𝓈𝓈 𝒞ℴ𝓃𝓈𝓊𝓁𝓉𝒶𝓃𝓉 | ℰ𝓁ℯ𝓃𝒶 𝒢ó𝓂ℯ𝓏",
  },
  {
    persona: "Despedida Cariñosa",
    text: "𝒞ℴ𝓃 𝒶𝒻ℯ𝒸𝓉ℴ, ℳ𝒶𝓇í𝒶 ℱℯ𝓇𝓃𝒶𝓃𝒹𝒶 ♡",
  },
  {
    persona: "Firma de Abogado / Consultor",
    text: "⚖️ ℒ𝒾𝒸. ℛℴ𝒷ℯ𝓇𝓉ℴ 𝒱𝒶𝓇ℊ𝒶𝓈 — 𝒜𝓈ℯ𝓈ℴ𝓇í𝒶 ℒℯℊ𝒶𝓁",
  },
  {
    persona: "Pie de Página en Blog",
    text: "✍️ ℰ𝓈𝒸𝓇𝒾𝓉ℴ 𝒸ℴ𝓃 𝓅𝒶𝓈𝒾ó𝓃 𝓅ℴ𝓇 𝒞𝒶𝓂𝒾𝓁𝒶 ℛíℴ𝓈",
  },
  {
    persona: "Firma de Diseño / Branding",
    text: "🎨 𝒟ℯ𝓈𝒾ℊ𝓃ℯ𝒹 𝒷𝓎 ℐ𝓈𝒶𝒷ℯ𝓁𝓁𝒶 𝒞𝓇𝓊𝓏",
  },
];

const faqs = [
  {
    q: "¿Cómo funciona el convertidor de letras para firma?",
    a: "Nuestra herramienta transforma cada letra de tu nombre en su variante alfanumérica en estilo manuscrito elegante Unicode, permitiendo copiar y pegar el texto en cualquier aplicación sin perder el formato.",
  },
  {
    q: "¿Puedo usar estas letras en firmas de correo como Gmail o Outlook?",
    a: "¡Sí! Puedes pegar el texto en estilo firma al final de tus correos electrónicos en Gmail, Outlook, Apple Mail y Yahoo para darle un acabado profesional y sofisticado a tus despedidas.",
  },
  {
    q: "¿Tienen validez legal estas firmas en texto Unicode?",
    a: "No, las firmas generadas aquí son elementos decorativos de tipografía para texto digital (correos, bios, redes). No reemplazan a una firma digital criptográfica ni a una firma autógrafa legal.",
  },
  {
    q: "¿Cómo se ven las letras de firma en dispositivos móviles?",
    a: "Las fuentes de estilo firma son parte del estándar Unicode y se leen perfectamente en teléfonos iPhone (iOS), Android, tabletas y computadoras.",
  },
  {
    q: "¿Es gratis usar las letras tipo firma elegante?",
    a: "Sí, el convertidor de texto en estilo firma es 100% gratuito y sin restricciones de uso.",
  },
  {
    q: "¿Puedo combinar la firma con emojis o símbolos?",
    a: "Por supuesto. Puedes agregar plumas (✍️), cámaras (📷), portafolios (💼) o corazones antes o después de tu nombre para personalizar tu marca personal.",
  },
  {
    q: "¿Por qué elegir el estilo Elegant Script para mi marca personal?",
    a: "El estilo Elegant Script imita los trazos finos de una pluma estilográfica, transmitiendo distinción, sofisticación y cuidado en los detalles para perfiles profesionales.",
  },
  {
    q: "¿Se requiere instalar programas o tipografías especiales?",
    a: "No requiere instalar ninguna fuente ni software. Simplemente escribe tu nombre, presiona 'Copiar' y pégalo en tu plataforma favorita.",
  },
];

export default function LetrasFirmaPage() {
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
                Letras para Firma
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Letras para Firma: Convertidor de Texto Elegante
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Crea firmas digitales distinguidas y elegantes para tus correos electrónicos, biografía de LinkedIn,
              redes sociales y documentos. Nuestro convertidor genera letras manuscritas finas en Unicode que puedes
              copiar con un solo clic para destacar tu marca personal con un toque profesional.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              El estilo de letra tipo firma destaca por ofrecer una apariencia ejecutiva y personalizada en comunicaciones digitales. A menudo es popular entre profesionales para añadir un toque de distinción al cierre de correos electrónicos y perfiles de negocios. Se usa comúnmente en tarjetas de presentación virtuales, y si deseas complementar tu diseño te sugerimos revisar nuestra sección de <Link href="/letras-bonitas/caligrafia" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">caligrafía</Link> o la opción de <Link href="/letras-personalizadas/nombres-personalizados" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nombres personalizados</Link>.
            </p>
          </header>

          {/* Interactive Converter with Firma (Elegant Script) Highlighted */}
          <Converter highlightStyleId="elegant-script" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Crear tu Firma Elegante en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Escribe tu Nombre o Frase
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Ingresa tu nombre completo, cargo o frase de despedida en el generador.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Visualiza el Estilo Firma
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  La herramienta transformará instantáneamente tu texto a trazos manuscritos finos.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Utiliza
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Haz clic en &quot;Copiar&quot; y pégalo al final de tus correos o en tus perfiles.
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
              Al escribir tu nombre, el conversor adapta la tipografía a trazos estilográficos fluidos. Puedes aplicar este formato a tus estados de <Link href="/fuentes-para-instagram/fuentes-para-facebook" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">fuentes para Facebook</Link> o incorporarlo a un <Link href="/nicks-para-juegos/nick-free-fire-femenino" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nick Free Fire femenino</Link>.
            </p>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Recomendaciones de Uso para Firmas Tipográficas
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Uso / Aplicación</th>
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
            title="Ejemplos de Firmas Profesionales Listas para Copiar"
            examples={firmaExamples}
          />

          {/* Section: Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Si estás buscando mayor variedad tipográfica para tus publicaciones, prueba nuestro generador de <Link href="/letras-personalizadas/texto-en-negrita" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">texto en negrita</Link> o la colección de <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">símbolos para nick</Link>.
          </section>

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Letras para Firma"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
