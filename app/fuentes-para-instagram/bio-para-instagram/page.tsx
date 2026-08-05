import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Bio para Instagram | Fuentes Bonitas y Letras para Biografía",
  description:
    "Crea biografías bonitas para Instagram con letras elegantes y símbolos aesthetic. Copia y pega gratis en tu perfil de IG al instante.",
};

const charLimits = [
  { platform: "Instagram Bio (Límite Máximo)", limit: "150 caracteres" },
  { platform: "Instagram Nombre de Usuario", limit: "30 caracteres" },
  { platform: "Instagram Name (Nombre Visible)", limit: "30 caracteres" },
  { platform: "Instagram Pie de Foto (Caption)", limit: "2,200 caracteres" },
  { platform: "Instagram Comentario", limit: "2,200 caracteres" },
  { platform: "Instagram Enlace Web (Link in Bio)", limit: "1 enlace activo" },
];

const instagramBioExamples = [
  {
    persona: "Creadora de Contenido",
    text: "✨ 𝒞𝓇ℯ𝒶𝓃𝒹ℴ 𝒸ℴ𝓃𝓉ℯ𝓃𝒾𝒹ℴ 𝒹𝒾𝒶𝓇𝒾ℴ 📍 ℳé𝓍𝒾𝒸ℴ 💌 𝒞ℴ𝓁𝒶𝒷𝓈: 𝒹𝓂@ℯ𝓂𝒶𝒾𝓁.𝒸ℴ𝓂 ⬇️ 𝒩𝓊ℯ𝓋ℴ 𝓋í𝒹ℯℴ 𝒶𝓆𝓊í",
  },
  {
    persona: "Tienda / E-commerce",
    text: "🛍️ ℳℴ𝒹𝒶 & 𝒯ℯ𝓃𝒹ℯ𝓃𝒸𝒾𝒶𝓈 🚚 ℰ𝓃𝓋íℴ𝓈 a 𝓉ℴ𝒹ℴ ℯ𝓁 𝓅𝒶í𝓈 💳 𝒯ℴ𝒹ℴ𝓈 𝓁ℴ𝓈 𝓂ℯ𝒹𝒾ℴ𝓈 𝒹ℯ 𝓅𝒶ℊℴ 👇 𝒞𝒶𝓉á𝓁ℴℊℴ 𝒶𝓆𝓊í",
  },
  {
    persona: "Perfil Personal Minimalista",
    text: "🌿 𝒮𝒾𝓂𝓅𝓁ℯ𝓂ℯ𝓃𝓉ℯ 𝓋𝒾𝓋𝒾ℯ𝓃𝒹ℴ ☕ 𝒜𝓂𝒶𝓃𝓉ℯ 𝒹ℯ𝓁 𝒸𝒶𝒻é y 𝓁ℴ𝓈 𝓁𝒾𝒷𝓇ℴ𝓈 📍 ℬ𝒶𝓇𝒸ℯ𝓁ℴ𝓃𝒶",
  },
  {
    persona: "Fotógrafo Profesional",
    text: "📸 𝒫𝒽ℴ𝓉ℴℊ𝓇𝒶𝓅𝒽ℯ𝓇 🎞️ 𝒱𝒾𝓈𝓊𝒶𝓁 𝒮𝓉ℴ𝓇𝓎𝓉ℯ𝓁𝓁ℯ𝓇 🌌 ℐ𝓂áℊℯ𝓃ℯ𝓈 𝓈𝒾𝓃 𝒻𝒾𝓁𝓉𝓇ℴ ⬇️ 𝒫ℴ𝓇𝓉𝒶𝒻ℴ𝓁𝒾ℴ",
  },
  {
    persona: "Fitness Coach",
    text: "🏋️‍♀️ 𝒯𝓇𝒶𝓃𝓈𝒻ℴ𝓇𝓂𝒶 𝓉𝓊 𝒸𝓊ℯ𝓇𝓅ℴ 🎯 ℛ𝓊𝓉𝒾𝓃𝒶𝓈 & 𝒩𝓊𝓉𝓇𝒾𝒸𝒾ó𝓃 💪 𝒰𝓃ℯ𝓉ℯ 𝒶𝓁 ℛℯ𝓉ℴ 𝟥𝟢 𝒹í𝒶𝓈",
  },
  {
    persona: "Artista & Ilustración",
    text: "🎨 ℐ𝓁𝓊𝓈𝓉𝓇𝒶𝒹ℴ𝓇𝒶 𝒟𝒾ℊ𝒾𝓉𝒶𝓁 ✨ 𝒟𝒾𝒷𝓊𝒿𝒶𝓃𝒹ℴ 𝓈𝓊ℯñℴ𝓈 📩 𝒞ℴ𝓂𝒾𝓈𝒾ℴ𝓃ℯ𝓈 𝒶𝒷𝒾ℯ𝓇𝓉𝒶𝓈",
  },
  {
    persona: "Viajes & Lifestyle",
    text: "✈️ 𝒱𝒾𝒶𝒿𝒶𝓃𝒹ℴ 𝓅ℴ𝓇 ℯ𝓁 𝓂𝓊𝓃𝒹ℴ 🧭 𝟤𝟧 𝓅𝒶í𝓈ℯ𝓈 𝓋𝒾𝓈𝒾𝓉𝒶𝒹ℴ𝓈 📍 𝒩ℴ𝓂𝒶𝒹𝒶 𝒟𝒾ℊ𝒾𝓉𝒶𝓁",
  },
  {
    persona: "Músico / DJ",
    text: "🎧 ℳ𝓊𝓈𝒾𝒸 𝒫𝓇ℴ𝒹𝓊𝒸ℯ𝓇 🎶 𝒩𝓊ℯ𝓋ℴ 𝓈𝒾𝓃ℊ𝓁ℯ 𝒹𝒾𝓈𝓅ℴ𝓃𝒾𝒷𝓁ℯ ⬇️ ℰ𝓈𝒸ú𝒸𝒽𝒶𝓁ℴ ℯ𝓃 𝒮𝓅ℴ𝓉𝒾𝒻𝓎",
  },
  {
    persona: "Emprendedora",
    text: "💼 𝒜𝓎𝓊𝒹ℴ a 𝓂𝓊𝒿ℯ𝓇ℯ𝓈 a ℯ𝓂𝓅𝓇ℯ𝓃𝒹ℯ𝓇 📈 ℳ𝒶𝓇𝓀ℯ𝓉𝒾𝓃ℊ & ℰ𝓈𝓉𝓇𝒶𝓉ℯℊ𝒾𝒶 ✨ 𝒰𝓃ℯ𝓉ℯ a 𝓁𝒶 𝒸ℴ𝓂𝓊𝓃𝒾𝒹𝒶𝒹",
  },
  {
    persona: "Aesthetic Vibe",
    text: "𓆩♡𓆪 𝒮ℴ𝒻𝓉 𝓋𝒾𝒷ℯ𝓈 & 𝒶ℯ𝓈𝓉𝒽ℯ𝓉𝒾𝒸 𝓅𝒽ℴ𝓉ℴ𝓈 🌙 𝒮ℯ𝒶𝓂ℴ𝓈 𝒻ℯ𝓁𝒾𝒸ℯ𝓈, 𝓃ℴ 𝓅ℯ𝓇𝒻ℯ𝒸𝓉ℴ𝓈",
  },
];

const faqs = [
  {
    q: "¿Cómo cambio la letra de mi biografía de Instagram?",
    a: "Abre Instagram, entra a tu perfil, toca 'Editar perfil', copia el texto convertido desde nuestra herramienta y pégalo en el campo 'Presentación' (Bio) o 'Nombre'. Guarda los cambios y listo.",
  },
  {
    q: "¿Cuántos caracteres permite la Bio de Instagram?",
    a: "Instagram permite exactamente 150 caracteres en el campo de la presentación (biografía). Asegúrate de que tu frase no supere este límite.",
  },
  {
    q: "¿Funcionan las fuentes bonitas en el nombre visible de Instagram?",
    a: "¡Sí! Puedes cambiar tanto la biografía como el campo 'Nombre' de tu perfil para lucir una tipografía elegante.",
  },
  {
    q: "¿Por qué algunas personas no ven mis letras bonitas en Instagram?",
    a: "El 99% de los smartphones actuales (iOS y Android) soportan perfectamente las letras Unicode. Solo dispositivos antiguos sin soporte Unicode completo podrían mostrar pequeños cuadros.",
  },
  {
    q: "¿Se pueden poner saltos de línea y emojis en la biografía de Instagram?",
    a: "Sí, puedes combinar saltos de línea, letras bonitas y emojis aesthetic para estructurar tu bio de forma limpia y ordenada.",
  },
  {
    q: "¿Esta herramienta para Bio de Instagram es gratis?",
    a: "Es 100% gratuita y sin necesidad de crear cuenta ni instalar aplicaciones.",
  },
  {
    q: "¿Afecta las búsquedas en Instagram usar letras estilizadas en la Bio?",
    a: "En el campo 'Nombre de usuario' (@usuario) se recomienda usar caracteres normales. Para el campo 'Nombre' y 'Biografía', las fuentes estilizadas son perfectas y atraen más seguidores.",
  },
  {
    q: "¿Puedo copiar y usar varias bios formateadas?",
    a: "Sí, puedes probar y copiar cuantas bios y frases desees sin límite.",
  },
];

export default function BioParaInstagramPage() {
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
                Bio para Instagram
              </li>
            </ol>
          </nav>

          {/* Page Heading & Intro */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Bio para Instagram: Fuentes Bonitas para Biografía
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Crea biografías atractivas y profesionales para tu perfil de Instagram. Convierte tus frases
              en fuentes bonitas, cursivas, negritas y estilizadas con un solo clic. Personaliza la presentación
              de tu cuenta, atrae más seguidores y destaca del resto.
            </p>
          </header>

          {/* Interactive Converter with Cursive Highlighted */}
          <Converter highlightStyleId="cursive" />

          {/* Section: Cómo Usar */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Cómo Personalizar tu Bio de Instagram en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Escribe tu Biografía
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Ingresa tu frase o descripción de perfil en el cuadro del convertidor.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Selecciona el Estilo Bonito
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Explora las diferentes tipografías convertidas compatibles con Instagram.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                  Copia y Pega en IG
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Copia el resultado y pégalo en el campo Presentación de tu perfil de Instagram.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm isolate relative z-0">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Límites de Caracteres en Instagram
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    <th className="py-3 px-4">Campo de Instagram</th>
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
            title="Ejemplos Formateados para Bio de Instagram"
            examples={instagramBioExamples}
          />

          {/* Section: Preguntas Frecuentes (FAQ Accordion) */}
          <FaqSection
            title="Preguntas Frecuentes sobre Bio para Instagram"
            faqs={faqs}
          />
        </div>
      </main>
    </div>
  );
}
