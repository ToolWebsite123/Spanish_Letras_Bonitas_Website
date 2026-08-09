import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Letras Aesthetic - Generador de Tipografías Minimalistas para Copiar y Pegar 🌸",
  description:
    "Crea y convierte texto en letras aesthetic, minimalistas, vaporwave y letras pequeñas para copiar y pegar. Decora tu biografía de Instagram, TikTok, Tumblr y Pinterest.",
};

const aestheticFaqs = [
  {
    q: "¿Qué significa realmente el concepto de 'Letras Aesthetic'?",
    a: "El término 'aesthetic' se refiere a la apreciación del arte, la simetría y el buen gusto visual. En tipografía web, las letras aesthetic combinan minúsculas pequeñas (small caps), trazos sutiles, espaciados amplios y símbolos delicados (como estrellas, destellos y flores) para proyectar una apariencia suave, cuidada y limpia.",
  },
  {
    q: "¿Cómo pegar letras aesthetic en la biografía de Instagram sin que se desordenen?",
    a: "Simplemente escribe tu frase en nuestro conversor, selecciona la categoría 'Aesthetic' o 'Pequeñas', presiona la tarjeta para copiar y pégala directamente en el campo 'Presentación' de tu perfil de Instagram. Unicode mantiene la forma exacta en celulares iOS y Android.",
  },
  {
    q: "¿Por qué las tipografías aesthetic son tan populares en TikTok y Pinterest?",
    a: "Porque destacan de manera elegante sin saturar la pantalla. En lugar de letras gruesas o estridentes, las tipografías aesthetic dan un aire poético, relajado y sofisticado que capta la atención del espectador mientras se desplaza por el feed.",
  },
  {
    q: "¿Puedo usar letras aesthetic en apodos de juegos como Free Fire o Roblox?",
    a: "Sí, aunque debes prestar atención al límite de 12 caracteres de Free Fire. Las letras aesthetic pequeñas (Small Caps) ocupan pocos caracteres y lucen fantásticas acompañadas de coronas o destellos sutiles.",
  },
  {
    q: "¿Cuál es la diferencia entre letras aesthetic Soft, Coquette y Vaporwave?",
    a: "El estilo Soft utiliza letras pequeñas sutiles (ˢᵒᶠᵗ); el estilo Coquette incorpora moños (🎀), corazones finos y trazos cursivos; mientras que el estilo Vaporwave se caracteriza por letras de ancho completo con separación amplia (Ａ ｅ ｓ ｔ ｈ ｅ ｔ ｉ ｃ).",
  },
  {
    q: "¿Se pueden combinar símbolos aesthetic con letras pequeñas?",
    a: "¡Sí! La combinación más popular en Pinterest e Instagram es encerrar una palabra corta en Small Caps dentro de destellos o estrellas (ej: ✧ ˢᵒᶠᵗ ⲯɪʙᴇs ✧).",
  },
];

export default function LetrasAestheticPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Letras Bonitas</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Letras Aesthetic</span>
        </nav>

        {/* Unique Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
            Letras Aesthetic para Copiar y Pegar 🌸
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
            Descubre y genera tipografías aesthetic, minimalistas y delicadas para tu biografía de Instagram, TikTok, Tumblr y Pinterest. Elige entre estilos suaves, letras pequeñas y bordes decorativos aesthetic para darle un toque armónico y profesional a tu perfil.
          </p>
        </header>

        {/* Interactive Converter Tool */}
        <Converter highlightStyleId="small" />

        {/* ARTÍCULO DETALLADO 1: La Filosofía Visual de la Estética Aesthetic */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>✨</span> La Filosofía de la Tipografía Aesthetic en la Cultura Digital
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            La palabra <em>aesthetic</em> comenzó como un concepto filosófico sobre el arte y la percepción de la belleza. Con la llegada de redes visuales como Tumblr, VSCO, Pinterest y TikTok, la estética evolucionó hacia un estilo de vida digital basado en la moderación, la paleta de colores pasteles y la tipografía minimalista.
          </p>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Las letras aesthetic no buscan abrumar al espectador con trazos recargados o colores estridentes. Por el contrario, se apoyan en bloques de caracteres Unicode como el <code className="text-purple-600 font-mono font-semibold">Small Capitals (U+1D00)</code> o las letras de ancho completo <code className="text-purple-600 font-mono font-semibold">(Fullwidth)</code> para proyectar una sensación de calma, orden y elegancia atemporal.
          </p>

          {/* Sub-categorías Aesthetic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
            <div className="p-5 rounded-xl border border-purple-100 dark:border-purple-900/50 bg-purple-50/40 dark:bg-purple-950/20 flex flex-col gap-2">
              <span className="text-2xl">☕</span>
              <h3 className="font-bold text-base text-purple-700 dark:text-purple-300">Soft & Minimalist</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Utiliza minúsculas de imprenta reducida (ˢᵒᶠᵗ ᵈʳᵉᵃᵐˢ). Es la favorita de creadores de contenido que buscan una biografía limpia y sofisticada.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-pink-100 dark:border-pink-900/50 bg-pink-50/40 dark:bg-pink-950/20 flex flex-col gap-2">
              <span className="text-2xl">🎀</span>
              <h3 className="font-bold text-base text-pink-700 dark:text-pink-300">Coquette & Sweet</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Incorpora lazos (🎀), corazones sutiles (♡) y mariposas (🦋). Proyecta un aire romántico, poético y vintage inspirado en el estilo coquette.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/40 dark:bg-indigo-950/20 flex flex-col gap-2">
              <span className="text-2xl">🌌</span>
              <h3 className="font-bold text-base text-indigo-700 dark:text-indigo-300">Vaporwave & Spaced</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Caracteres con separación amplia (Ａ ｅ ｓ ｔ ｈ ｅ ｔ ｉ ｃ). Evoca la nostalgia retro de los años 80 y 90, el arte retrofuturista y la cultura anime.
              </p>
            </div>
          </div>
        </section>

        {/* ARTÍCULO DETALLADO 2: Ejemplos de Frases y Bios Aesthetic Categorizadas */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>🎁</span> Ejemplos de Frases y Bios Aesthetic Listas para Copiar
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Hemos reunido las combinaciones tipográficas más populares en Pinterest e Instagram para que puedas copiarlas directamente en tu perfil:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Soft Bio</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">⋆ ˢᵒᶠᵗ ᵈʳᵉᵃᵐˢ ᵃⁿᵈ ᶜᵒᶠᶠᵉᵉ ⋆ | ☕ ᴍᴀᴅʀɪᴅ | ♡ ʟɪᴠɪɴɢ ɪɴ ᴍʏ ᴏᴡɴ ᴡᴏʀʟᴅ</p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Coquette Style</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">🎀 𝓈𝓌𝑒𝑒𝓉 𝓁𝒾𝓀𝑒 𝒽𝑜𝓃𝑒𝓎 🎀 | 🌸 𝒸𝒽𝒶𝓈𝒾𝓃𝑔 𝓈𝓊𝓃𝓈𝑒𝓉𝓈 | 💫 ᴍᴀᴅᴇ ᴏғ sᴛᴀʀᴅᴜsᴛ</p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Golden Hour Vibe</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">✧ ᴄʜᴀsɪɴɢ sᴜɴsᴇᴛs & ᴍᴇᴍᴏʀɪᴇs ✧ | 🌊 ᴏᴄᴇᴀɴ ᴍɪɴᴅ | 🌿 ꜱɪᴍᴘʟʏ ᴍᴇ</p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Dark Aesthetic</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">🌙 𝔩𝔬𝔰𝔱 𝔦𝔫 𝔱𝔥𝔢 𝔫𝔦𝔤𝔥𝔱 🌙 | 🖤 ᵐⁱᵈⁿⁱᵍʰᵗ ᵗʰᵒᵘᵍʰᵗˢ | 🥀 𝔞𝔫𝔤𝔢𝔩 𝔢𝔫𝔢𝔯𝔤𝔶</p>
            </div>
          </div>
        </section>

        {/* ARTÍCULO DETALLADO 3: Tabla Comparativa de Tipografías Aesthetic */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>📋</span> Tabla de Referencia de Estilos Tipográficos Aesthetic
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Compara las características visuales y compatibilidades de cada estilo dentro de la categoría aesthetic:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300">
                  <th className="py-3 px-4 font-semibold">Estilo Aesthetic</th>
                  <th className="py-3 px-4 font-semibold">Ejemplo de Texto</th>
                  <th className="py-3 px-4 font-semibold">Plataforma Ideal</th>
                  <th className="py-3 px-4 font-semibold">Nivel de Compatibilidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-neutral-600 dark:text-neutral-400">
                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30">
                  <td className="py-3 px-4 font-bold text-purple-600 dark:text-purple-400">Small Caps (Pequeñas)</td>
                  <td className="py-3 px-4 font-mono font-bold text-neutral-900 dark:text-neutral-100">ʟᴇᴛʀᴀs ᴀᴇsᴛʜᴇᴛɪᴄ</td>
                  <td className="py-3 px-4">Bio de Instagram, TikTok</td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">100% (Universal)</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30">
                  <td className="py-3 px-4 font-bold text-purple-600 dark:text-purple-400">Superíndices</td>
                  <td className="py-3 px-4 font-mono font-bold text-neutral-900 dark:text-neutral-100">ˢᵒᶠᵗ ᵛⁱᵇᵉˢ</td>
                  <td className="py-3 px-4">Nicks de juegos, Tumblr</td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">99.8% High</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30">
                  <td className="py-3 px-4 font-bold text-purple-600 dark:text-purple-400">Fullwidth (Vaporwave)</td>
                  <td className="py-3 px-4 font-mono font-bold text-neutral-900 dark:text-neutral-100">Ａ ｅ ｓ ｔ ｈ ｅ ｔ ｉ ｃ</td>
                  <td className="py-3 px-4">Discord, Pinterest</td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">100% (Universal)</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30">
                  <td className="py-3 px-4 font-bold text-purple-600 dark:text-purple-400">Cursiva Fina (Script)</td>
                  <td className="py-3 px-4 font-mono font-bold text-neutral-900 dark:text-neutral-100">𝓈𝓌𝑒𝑒𝓉 𝓁𝒾𝓀𝑒 𝒽𝑜𝓃𝑒𝓎</td>
                  <td className="py-3 px-4">Estados de WhatsApp, Instagram</td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">99.5% High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Unique FAQ */}
        <FaqSection title="Preguntas Frecuentes sobre Letras Aesthetic" faqs={aestheticFaqs} />
      </main>
    </div>
  );
}
