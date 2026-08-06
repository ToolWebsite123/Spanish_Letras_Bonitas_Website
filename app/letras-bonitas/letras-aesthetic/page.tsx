import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";

export const metadata: Metadata = {
  title: "Letras Aesthetic | Tipografías Lindas para Instagram",
  description:
    "Convierte tu texto en letras aesthetic, minimalistas y letras pequeñas para copiar y pegar. Decora la biografía de tu Instagram, TikTok y Tumblr fácil.",
};

export default function LetrasAestheticPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-10 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/letras-bonitas/letras-cursivas" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Letras Bonitas
            </Link>
            <span>/</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">Letras Aesthetic</span>
          </nav>

          {/* Header */}
          <header className="flex flex-col gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Letras Aesthetic para Copiar y Pegar
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Descubre y genera tipografías aesthetic, minimalistas y delicadas para tu biografía de Instagram, TikTok, Tumblr y redes sociales. Elige entre estilos suaves, letras pequeñas y bordes decorativos aesthetic para darle un toque único a tu perfil.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              El concepto de letras aesthetic destaca por ofrecer una estética limpia, armónica y sofisticada en plataformas digitales. A menudo es popular entre creadores de contenido porque brinda elegancia visual sin recargar el texto. Se usa comúnmente en descripciones de foto y subtítulos, y si buscas estilos complementarios puedes probar nuestras <Link href="/letras-bonitas/letras-japonesas" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras japonesas</Link> estilizadas o combinar frases con <Link href="/simbolos-aesthetic/emojis-para-copiar" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">emojis para copiar</Link>.
            </p>
          </header>

          {/* Interactive Converter Tool */}
          <Converter highlightStyleId="small" />

          {/* Section: Ejemplos de Frases Aesthetic */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              ✨ Ejemplos de Frases y Bios Aesthetic
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Minimalist Bio</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">⋆ ˢᵒᶠᵗ ᵈʳᵉᵃᵐˢ ᵃⁿᵈ ᶜᵒᶠᶠᵉᵉ ⋆</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Soft Vibe</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">♡ ʟɪᴠɪɴɢ ɪɴ ᴍʏ ᴏᴡɴ ᴡᴏʀʟᴅ ♡</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Coquette Style</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">🎀 𝓈𝓌𝑒𝑒𝓉 𝓁𝒾𝓀𝑒 𝒽𝑜𝓃𝑒𝓎 🎀</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Vintage Vibes</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">✧ 𝔠𝔥𝔞𝔰𝔦𝔫𝔤 𝔰𝔲𝔫𝔰𝔢𝔱𝔰 ✧</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Clean Girl Aesthetic</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">•° ꜱɪᴍᴘʟʏ ᴍᴇ °•</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Dark Aesthetic</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">🌙 𝔩𝔬𝔰𝔱 𝔦𝔫 𝔱𝔥𝔢 𝔫𝔦𝔤𝔥𝔱 🌙</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Angel Vibes</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">ᨏ ᵃⁿᵍᵉˡ ᵉⁿᵉʳᵍʸ ᨏ</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Starry Girl</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">💫 ᴍᴀᴅᴇ ᴏғ sᴛᴀʀᴅᴜsᴛ 💫</p>
              </div>
            </div>
          </section>

          {/* Reference Table */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              📋 Tabla de Referencia de Estilos Aesthetic
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-700 dark:text-neutral-300 border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-800/40">
                    <th className="py-3 px-4 font-semibold">Categoría Aesthetic</th>
                    <th className="py-3 px-4 font-semibold">Ejemplo de Texto</th>
                    <th className="py-3 px-4 font-semibold">Uso Sugerido</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Small Caps (Mayúsculas Pequeñas)</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">ᴀᴇꜱᴛʜᴇᴛɪᴄ ᴠɪʙᴇꜱ</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Biografías limpias e Instagram Stories</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Superíndice Suave</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">ˢᵒᶠᵗ ᵈʳᵉᵃᵐˢ</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Subtítulos y nombres aesthetic de TikTok</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Fullwidth (Ancho Completo)</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">Ａ Ｅ Ｓ Ｔ Ｈ Ｅ Ｔ Ｉ Ｃ</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Nombres en pantalla de Roblox y Discord</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Script Delicado</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">𝓈𝓌𝑒𝑒𝓉 𝓋𝒾𝒷𝑒𝓈</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Estados de WhatsApp y frases de amor</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
              Copia de forma directa caracteres de superíndices o mayúsculas pequeñas. Puedes integrar este formato a tu perfil de <Link href="/fuentes-para-instagram/fuentes-para-instagram" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">fuentes para Instagram</Link> o aplicarlo a <Link href="/nicks-para-juegos/nombres-para-roblox" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nombres para Roblox</Link>.
            </p>
          </section>

          {/* Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Descubre otras alternativas de personalización: si deseas un estilo llamativo revisa las <Link href="/letras-bonitas/letras-graffiti" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras graffiti</Link> o prueba las fuentes de <Link href="/fuentes-para-instagram/fuentes-para-facebook" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">fuentes para Facebook</Link>.
          </section>

          {/* FAQs */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              ❓ Preguntas Frecuentes sobre Letras Aesthetic
            </h2>
            <div className="flex flex-col gap-4">
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Qué significa que una letra sea aesthetic?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  El estilo aesthetic se refiere a tipografías con un atractivo visual armónico, suave y minimalista, inspiradas en tendencias vintage, Y2K, coquette y pastel.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Cómo pego letras aesthetic en mi biografía de Instagram?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Genera tu texto en el conversor superior, presiona el botón &quot;Copiar&quot;, abre Instagram &gt; Editar perfil, y pega el contenido en la sección de biografía.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Se pueden combinar letras aesthetic con emojis coquette?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  ¡Sí! Puedes usar nuestro selector de decoraciones opcional para añadir automáticamente moños 🎀, estrellas ⋆, o corazones ♡ alrededor de tus fuentes.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es gratuito usar las letras aesthetic?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, la herramienta es 100% gratuita y sin límites de conversión.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Funcionan estas letras en WhatsApp?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, se pueden enviar en mensajes de chat, incluir en la Info del perfil o publicar en los estados de WhatsApp.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Qué fuentes aesthetic son las más populares?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Las fuentes de letras pequeñas (Small Caps), superíndices, monoespaciadas y escrituras cursivas suaves son las más solicitadas.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Necesito instalar algún tipo de teclado especial?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  No se requiere instalar ningún teclado. Todo se hace mediante copiar y pegar directamente desde tu navegador.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Sirven para nicks de TikTok o Tumblr?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  ¡Sí! Son 100% compatibles con nombres de usuario y descripciones de perfil en TikTok, Tumblr y Pinterest.
                </p>
              </details>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
