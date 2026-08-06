import Link from "next/link";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Caligrafía | Convertidor de Letras Elegantes y Manuscritas",
  description:
    "Transforma tu texto en letras de caligrafía elegante y firma. Copia y pega gratis en Instagram, cartas, invitaciones y firmas digitales.",
};

const charLimits = [
  { platform: "Instagram Bio", limit: "150 caracteres" },
  { platform: "Firmas Digitales / Bio", limit: "100 caracteres" },
  { platform: "WhatsApp Estado", limit: "139 caracteres" },
  { platform: "TikTok Bio", limit: "80 caracteres" },
  { platform: "Facebook Post Título", limit: "Sin límite estricto" },
  { platform: "Twitter / X Bio", limit: "160 caracteres" },
];

const calligraphyExamples = [
  {
    persona: "Invitación de Bodas / Eventos",
    text: "𝒮𝒶𝓋ℯ 𝓉𝒽ℯ 𝒟𝒶𝓉ℯ 💍 | 𝒩𝓊ℯ𝓈𝓉𝓇𝒶 ℬℴ𝒹𝒶 𝟤𝟢𝟤𝟨",
  },
  {
    persona: "Firma de Diseñador",
    text: "𝒞𝒶𝓇𝓁ℴ𝓈 ℳℯ𝓃𝒹ℴ𝓏𝒶 ✒️ | 𝒟𝒾𝓈ℯñ𝒶𝒹ℴ𝓇 𝒢𝓇á𝒻𝒾𝒸ℴ",
  },
  {
    persona: "Poesía / Literatura",
    text: "𝒱ℯ𝓇𝓈ℴ𝓈 𝒹ℯ𝓁 𝒜𝓁𝓂𝒶 📖 | 𝒫ℴℯ𝓈í𝒶 & ℛℯ𝒻𝓁ℯ𝓍𝒾ó𝓃",
  },
  {
    persona: "Marca de Lujo",
    text: "ℋ𝒶𝓊𝓉ℯ 𝒞ℴ𝓊𝓉𝓊𝓇ℯ 💎 | ℰ𝓁ℯℊ𝒶𝓃𝒸𝒾𝒶 & ℰ𝓈𝓉𝒾𝓁ℴ",
  },
  {
    persona: "Fotografía Artística",
    text: "𝒫𝒽ℴ𝓉ℴℊ𝓇𝒶𝓅𝒽𝓎 𝒷𝓎 𝒮ℴ𝓅𝒽𝒾𝒶 📸 | ℐ𝓂áℊℯ𝓃ℯ𝓈 𝒞𝒶𝓁𝒾ℊ𝓇á𝒻𝒾𝒸𝒶𝓈",
  },
  {
    persona: "Frase de Vida",
    text: "ℒ𝒶 𝓋𝒾𝒹𝒶 ℯ𝓈 𝓊𝓃𝒶 ℴ𝒷𝓇𝒶 𝒹ℯ 𝒶𝓇𝓉ℯ ✨",
  },
  {
    persona: "Carta de Agradecimiento",
    text: "𝒞ℴ𝓃 𝓉ℴ𝒹ℴ 𝓂𝒾 𝒶ℊ𝓇𝒶𝒹ℯ𝒸𝒾𝓂𝒾ℯ𝓃𝓉ℴ 💖",
  },
  {
    persona: "Perfil Personal Femenino",
    text: "𝒱𝒾𝓋𝒾ℯ𝓃𝒹ℴ 𝒸ℴ𝓃 𝓅𝒶𝓏 𝓎 ℯ𝓁ℯℊ𝒶𝓃𝒸𝒾𝒶 🌸",
  },
  {
    persona: "Música Clásica / Arte",
    text: "𝒮ℴ𝓃𝒶𝓉𝒶𝓈 & 𝒮𝒾𝓃𝒻ℴ𝓃í𝒶𝓈 🎼 | 𝒫𝒾𝒶𝓃ℴ 𝒮ℴ𝓊𝓁",
  },
  {
    persona: "Nombre Personal Elegante",
    text: "𝒱𝒶𝓁ℯ𝓃𝓉𝒾𝓃𝒶 ℛℴ𝒹𝓇íℊ𝓊ℯ𝓏 🌹",
  },
];

const faqs = [
  {
    q: "¿Qué son las letras de caligrafía en formato Unicode?",
    a: "Son tipografías estilizadas que simulan trazos pluma, pincel y letra manuscrita fina codificadas en el estándar Unicode. Permite pegar frases sofisticadas directamente en cualquier plataforma web sin requerir imágenes.",
  },
  {
    q: "¿Puedo usar letras de caligrafía para invitaciones y diplomas digitales?",
    a: "¡Sí! Son ideales para encabezados de invitaciones de boda, cartas de agradecimiento, posts de Instagram y biografías ejecutivas.",
  },
  {
    q: "¿Es compatible con WhatsApp e Instagram?",
    a: "Totalmente compatible. Las letras de caligrafía se pueden usar en biografías, nombres de usuario, mensajes de WhatsApp y comentarios.",
  },
  {
    q: "¿Cómo se diferencia la caligrafía de la fuente cursiva estándar?",
    a: "La caligrafía o estilo 'Firma' utiliza un doble trazo refinado (Double-Struck) de mayor contraste visual, imitando la caligrafía de pluma tintero clásica.",
  },
  {
    q: "¿Puedo usar las letras de caligrafía en mi logo o firma digital?",
    a: "Sí, puedes copiarlas y usarlas en descripciones de marca, firmas de correo electrónico y banners de redes sociales libremente.",
  },
  {
    q: "¿Es gratis usar este generador de caligrafía?",
    a: "Sí, el convertidor de caligrafía es 100% gratuito e ilimitado.",
  },
  {
    q: "¿Se pueden convertir números a caligrafía elegante?",
    a: "Los caracteres alfabéticos (A-Z y a-z) se convierten al estilo de firma caligráfica. Los números y signos se mantienen legibles en su formato estándar.",
  },
  {
    q: "¿Necesito descargar fuentes en mi computadora?",
    a: "No, la conversión funciona directamente en línea dentro de tu navegador web sin necesidad de instalar archivos de fuentes TTF u OTF.",
  },
];

export default function CaligrafiaPage() {
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
                Caligrafía
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Caligrafía: Convertidor de Letras Elegantes y Manuscritas
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Transforma tu texto en hermosas letras de caligrafía y firmas manuscritas elegantes. Nuestro
              generador crea trazos refinados ideales para biografías distinguidas, invitaciones digitales,
              firmas de correo y posts en redes sociales. Escribe tu frase, copia el resultado y destaca con clase.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              El arte de la caligrafía destaca por evocar manuscritos clásicos y trazados artesanales de alta calidad. A menudo es popular en plataformas creativas porque brinda distinción y sobriedad. Se usa comúnmente en encabezados de invitaciones y publicaciones ejecutivas, y si buscas estilos similares te sugerimos explorar nuestras <Link href="/letras-bonitas/letras-firma" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras para firma</Link> o la categoría de <Link href="/letras-bonitas/letras-tatuajes" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras para tatuajes</Link>.
            </p>
          </header>

          {/* Interactive Converter with Firma / Caligrafía Highlighted */}
          <Converter highlightStyleId="elegant-script" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Usar las Letras de Caligrafía
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Escribe tu Frase o Nombre
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Ingresa tu texto en la casilla superior para comenzar la conversión caligráfica.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Elige la Caligrafía Elegante
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  La herramienta generará al instante los trazos de firma y letra refinada.
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
                  Haz clic en &quot;Copiar&quot; y pega el resultado en tus perfiles o documentos.
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
              Al ingresar tu frase, la herramienta aplica glifos caligráficos matemáticos con trazo fino. Puedes utilizar estas fuentes en tus mensajes de <Link href="/fuentes-para-instagram/fuentes-para-whatsapp" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">fuentes para WhatsApp</Link> o para decorar una <Link href="/nicks-para-juegos/bio-colorida-free-fire" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">bio colorida Free Fire</Link>.
            </p>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites de Caracteres Recomendados
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Plataforma / Aplicación</th>
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
            title="Ejemplos de Caligrafía Elegante"
            examples={calligraphyExamples}
          />

          {/* Section: Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Si deseas descubrir más estilos de letras refinadas, te invitamos a probar nuestro convertidor de <Link href="/letras-personalizadas/texto-italico" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">texto en itálico</Link> o revisar la colección de <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">símbolos coquette</Link>.
          </section>

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Caligrafía"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
