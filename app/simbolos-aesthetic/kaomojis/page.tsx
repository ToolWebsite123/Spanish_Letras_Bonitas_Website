import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import KaomojiPicker from "@/components/KaomojiPicker";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Kaomojis - Emoticones Japoneses para Copiar y Pegar 😊",
  description:
    "Colección completa de kaomojis y emoticones japoneses estéticos ordenados por emociones: lindos, felices, amor, gatos, tristes, enojados y más.",
  alternates: {
    canonical: "/simbolos-aesthetic/kaomojis",
  },
};

const faqs = [
  {
    q: "¿Qué son los kaomojis y cuál es su origen?",
    a: "Los kaomojis (del japonés 顔 'kao' cara y 文字 'moji' letra) son emoticones de texto originados en Japón a mediados de los años 80. A diferencia de los emoticones occidentales que se leen de lado, los kaomojis se leen verticalmente de frente y combinan caracteres japoneses, griegos, cirílicos y símbolos matemáticos.",
  },
  {
    q: "¿Cuál es la diferencia entre un kaomoji y un emoji tradicional?",
    a: "Los emojis son imágenes vectoriales diseñadas por las grandes plataformas (Apple, Google, Microsoft), por lo que su apariencia cambia según el dispositivo. Los kaomojis son texto plano en caracteres Unicode, por lo que se ven exactamente igual en cualquier pantalla sin depender del sistema operativo.",
  },
  {
    q: "¿Cómo copiar y pegar un kaomoji en mis chats?",
    a: "Simplemente haz clic sobre cualquier tarjeta de kaomoji en nuestra herramienta. El código se copiará de forma automática a tu portapapeles y podrás pegarlo directamente usando Control + V en PC o manteniendo presionado en dispositivos móviles.",
  },
  {
    q: "¿Los kaomojis funcionan en todas las redes sociales y aplicaciones?",
    a: "Sí, al estar creados íntegramente con caracteres estándar de Unicode, los kaomojis son totalmente compatibles con Instagram, TikTok, WhatsApp, Discord, X (Twitter), Facebook, Twitch y videojuegos como Free Fire o Roblox.",
  },
  {
    q: "¿Cómo puedo crear mis propios kaomojis personalizados?",
    a: "Puedes combinar corchetes o paréntesis para el contorno del rostro ( ), símbolos de puntuación para la boca y caracteres especiales de idiomas como el katakana o cirílico para los ojos y las cejas.",
  },
  {
    q: "¿Cuáles son los kaomojis más populares en internet?",
    a: "Entre los más famosos mundialmente se encuentran el Lenny Face ( ͡° ͜ʖ ͡°), el Shrug ¯\\_(ツ)_/¯, el lloro dramático (⁠╥⁠﹏⁠╥⁠) y el abrazo dulce (⁠づ⁠￣⁠ ⁠³⁠￣⁠)⁠づ.",
  },
  {
    q: "¿Se pueden usar kaomojis en dispositivos móviles Android e iOS?",
    a: "Sí, todos los kaomojis de nuestro catálogo son 100% compatibles con teclados de teléfonos móviles Android, iPhone y iPad.",
  },
  {
    q: "¿Es totalmente gratis usar este conversor de kaomojis?",
    a: "Sí, la herramienta es 100% gratuita, libre de registros y puedes copiar cuantos kaomojis desees sin límite alguno.",
  },
  {
    q: "¿Cómo buscar un kaomoji específico por emoción o categoría?",
    a: "Utiliza el buscador en tiempo real en la parte superior de la herramienta e ingresa palabras clave como 'gato', 'amor', 'feliz', 'llorar' o 'sonrojo' para filtrar instantáneamente el resultado.",
  },
  {
    q: "¿Por qué algunos kaomojis incluyen caracteres japoneses o cirílicos?",
    a: "Los creadores de kaomojis aprovechan la enorme variedad del mapa Unicode para utilizar letras de distintos idiomas como elementos faciales (por ejemplo, la letra kana ツ para sonrisas o la letra theta θ para ojos).",
  },
];

export default function KaomojisPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 pt-3 sm:pt-4 pb-8 sm:pb-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* Compact Hero Header */}
        <header className="flex flex-col gap-1">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Kaomojis: Emoticones Japoneses para Copiar y Pegar ( ͡° ͜ʖ ͡°)
          </h1>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed font-medium mt-1">
            Los kaomojis (顔文字) son emoticones japoneses compuestos por una combinación única de caracteres Unicode, letras de diversos alfabetos y símbolos matemáticos. A diferencia de los emojis tradicionales creados con imágenes o gráficos vectoriales, los kaomojis son texto puro de ancho completo. Esta característica única permite que funcionen de manera universal en cualquier plataforma, videojuego, foro o red social sin distorsionarse ni requerir actualizaciones de software.
          </p>
        </header>

        {/* Real Working Kaomoji Tool */}
        <KaomojiPicker />

        {/* CATEGORY EXPLORATION SECTIONS */}
        <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-2 border-b border-[var(--border-color)] pb-4">
            <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
              Guía de Categorías de Kaomojis y Significado
            </h2>
            <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80">
              Explora en detalle los diferentes estilos de expresiones japonesas de nuestro repertorio y descubre en qué contextos utilizarlas:
            </p>
          </div>

          <div className="flex flex-col gap-6 text-xs sm:text-sm">
            {/* Category 1: Lindos */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🌸</span> 1. Kaomoji Lindos (Cute)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Esta categoría es la preferida en comunidades aesthetic, anime y gaming para transmitir inocencia, amabilidad y ternura en cualquier mensaje. Son ideales para decorar bios de Instagram o mensajes afectuosos en WhatsApp.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(｡◕‿◕｡) - Ojos radiantes</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(๑•ᴗ•๑) - Carita dulce</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(🌸^◡^) - Expresión floral</span>
              </div>
            </div>

            {/* Category 2: Felices */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>✨</span> 2. Kaomoji Felices (Happy)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Diseñados para compartir buena vibra, celebrar victorias o expresar alegría desbordante. Sus trazos amplios simulan sonrisas radiantes y brazos al aire que contagian entusiasmo en chats y comentarios.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠≧⁠▽⁠≦⁠) - Risa amplia</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">＼(≧▽ visual)／ - Triunfo eufórico</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(b ﾟ◡ﾟ)b - Aprobación feliz</span>
              </div>
            </div>

            {/* Category 3: Amor */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>❤️</span> 3. Kaomoji de Amor y Corazones (Love & Heart)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Ideales para mensajes de cariño, enamoramiento o felicitaciones románticas. Incorporan símbolos de corazones (♡, ♥) y bocas dispuestas para enviar besos virtuales a tus seres queridos.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠♡⁠ω⁠♡⁠) - Mirada enamorada</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠づ⁠￣⁠ ⁠³⁠￣⁠)⁠づ - Beso volador</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">ヽ(♡‿♡)ノ - Abrazo con amor</span>
              </div>
            </div>

            {/* Category 4: Gatos */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🐾</span> 4. Kaomoji de Gatos (Cat / Neko)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Inspirados en la adoración japonesa por los felinos (Neko), estos emoticones emulan orejitas, bigotes y patitas (ฅ). Muy populares entre la comunidad de streamers, gamers y amantes de las mascotas.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">ฅ(•ㅅ•❀)ฅ - Gato adornado</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(=^･ｪ･^=) - Gato clásico</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">ฅ(• ֊ •)ฅ - Saludo felino</span>
              </div>
            </div>

            {/* Category 5: Llorando */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>😭</span> 5. Kaomoji Llorando (Crying)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Muestran ríos de lágrimas mediante trazos vertiginosos. Utilizados frecuentemente con intención dramática, humorística o para reflejar conmoción ante una noticia triste o emocionante.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠╥⁠﹏⁠╥⁠) - Lloro desconsolado</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠༎ຶ⁠⌑⁠༎ຶ⁠) - Sollozo dramático</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠θ⁠‿⁠θ⁠)⁠.⁠.⁠.⁠💧 - Lágrima tímida</span>
              </div>
            </div>

            {/* Category 6: Tristes */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>😔</span> 6. Kaomoji Tristes (Sad)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Transmiten desánimo, empatía o decepción de forma sutil. Sus bocas invertidas y ojos agachados comunican melancolía sin necesidad de exageración.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠´⁠.⁠ ⁠.⁠ ⁠`⁠) - Mirada melancólica</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠ ⁠•⁠︵⁠•⁠ ⁠) - Decepción discreta</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠.⁠_⁠.⁠) - Cabizbajo</span>
              </div>
            </div>

            {/* Category 7: Abrazo */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🤗</span> 7. Kaomoji de Abrazo (Hug)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Representan brazos extendidos (っ, づ, ⊃) listos para brindar un abrazo reconfortante. Excelentes para enviar apoyo moral y calidez en conversaciones virtuales.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠っ⁠.⁠❛⁠ ⁠ᴗ⁠ ⁠❛⁠.⁠)⁠っ - Abrazo dulce</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠つ⁠✧⁠ω⁠✧⁠)⁠つ - Abrazo entusiasta</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠⊃⁠｡⁠•́⁠‿⁠•̀⁠｡⁠)⁠⊃ - Apoyo fraternal</span>
              </div>
            </div>

            {/* Category 8: Enojados */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>😡</span> 8. Kaomoji Enojados (Angry)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utilizan cejas inclinadas (｀, ಠ) y expresiones tensas para mostrar enfado cómico, indignación o molestia de manera expresiva.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠ノ⁠ಠ⁠益⁠ಠ⁠)⁠ノ - Furia e indignación</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠ಠ⁠_⁠ಠ⁠) - Mirada severa</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠╬⁠ಠ⁠益⁠ಠ⁠) - Rabia con vena</span>
              </div>
            </div>

            {/* Category 9: Sonrojados */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>😳</span> 9. Kaomoji Sonrojados (Shy/Blush)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Incoporan barras diagonales (///) o marcas de sonrojo (〃) para denotar pena, timidez o reacción a un halago halagador.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠〃⁠ﾟ⁠3⁠ﾟ⁠〃⁠) - Sonrojo intenso</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠ ⁠•⁠ ⁠(//⁠∇⁠//⁠)⁠ ⁠•⁠ ⁠) - Pena extrema</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠ ⁠///⁠ ⁠•⁠ ⁠a⁠ ⁠•⁠ ⁠///⁠ ⁠) - Vergüenza tierna</span>
              </div>
            </div>

            {/* Category 10: Pensando */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🤔</span> 10. Kaomoji Confundidos y Pensando (Thinking/Confused)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Añaden signos de interrogación o gotas de sudor para reflejar desorientación, cuestionamientos lógicos o incertidumbre ante una duda.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠・⁠_⁠・⁠?⁠) - Duda simple</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠⊙⁠_⁠⊙⁠?⁠) - Desconcierto</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠•⁠ ⁠A⁠ ⁠•⁠?⁠) - ¿Qué ocurrió?</span>
              </div>
            </div>

            {/* Category 11: Bailando */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>💃</span> 11. Kaomoji Bailando (Dancing)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Muestran movimientos rítmicos y notas musicales (♪) para celebrar momentos de fiesta, música favorita o pura diversión.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">ヽ(º▽º)ノ - Baile alegre</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">ヾ(⌐■_■)ノ♪ - Estilo DJ</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">└( ＾ω＾ )┐ - Ritmo en marcha</span>
              </div>
            </div>

            {/* Category 12: Graciosos */}
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🤪</span> 12. Kaomoji Graciosos y Locos (Funny/Crazy)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Los reyes de los memes en internet. Incluyen personajes icónicos de foros como 4chan y Reddit para aportar sarcasmo e ironía.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">( ͡° ͜ʖ ͡°) - Lenny Face</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">¯\_(ツ)_/¯ - Shrug indiferente</span>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-bold">(⁠ ⁠⊙⁠ ⁠o⁠ ⁠⊙⁠ ⁠) - Asombro loco</span>
              </div>
            </div>
          </div>
        </section>

        {/* KAOMOJI VS EMOJIS */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Kaomoji vs Emojis: Comparativa y Diferencias
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Aunque ambos sirven para transmitir emociones en conversaciones digitales, existen diferencias clave entre ellos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🤖</span> Emojis Tradicionales
              </h3>
              <ul className="flex flex-col gap-1.5 opacity-80 leading-relaxed">
                <li>• Son archivos de imagen gráfica diseñados por plataformas (Apple, Google).</li>
                <li>• Su apariencia varía de forma notable entre un iPhone y un celular Android.</li>
                <li>• Pueden requerir actualizaciones de sistema para mostrar nuevos diseños.</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>⛩️</span> Kaomojis Japoneses
              </h3>
              <ul className="flex flex-col gap-1.5 opacity-80 leading-relaxed">
                <li>• Son caracteres de texto tipográfico puro basados en el estándar Unicode.</li>
                <li>• Lucen exactamente igual en cualquier dispositivo sin importar la marca.</li>
                <li>• Permiten combinaciones infinitas de creatividad sin depender de empresas informáticas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONAN TÉCNICAMENTE */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Cómo funcionan los Kaomoji técnicamente
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Desde el punto de vista técnico, los kaomojis aprovechan el inmenso mapa de caracteres del estándar **Unicode**. Los creadores combinan deliberadamente letras del silabario japonés (Hiragana y Katakana), alfabetos Cirílico y Griego, así como notación matemática y de puntuación en una sola cadena de texto horizontal. Dado que Unicode es aceptado por el 100% de la web moderna, los kaomojis se procesan directamente como texto, lo que garantiza una compatibilidad universal inmediata.
          </p>
        </section>

        {/* DÓNDE USAR KAOMOJI */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Dónde usar Kaomoji
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Puedes incorporar kaomojis en cualquier plataforma que admita entrada de texto plano:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs sm:text-sm">
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>📸</span> Biografías y copys de Instagram
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>🎵</span> Comentarios de TikTok
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>👾</span> Estados y chats de Discord
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>💬</span> Mensajes directos en WhatsApp
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>🎮</span> Nombres de usuario en Free Fire y Roblox
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] font-bold text-[var(--foreground)] flex items-center gap-2">
              <span>🌐</span> Foros como Reddit y comunidades online
            </li>
          </ul>
        </section>

        {/* CONSEJOS PARA USAR KAOMOJI */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Consejos para usar Kaomoji
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1">
              <strong className="text-[var(--foreground)]">No satures tus párrafos:</strong>
              <span className="opacity-80">Usa uno o dos kaomojis al final de la oración para dar un toque estético sin entorpecer la lectura.</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1">
              <strong className="text-[var(--foreground)]">Elige el kaomoji según el contexto:</strong>
              <span className="opacity-80">Un kaomoji sonrojado (⁠〃⁠.⁠ ⁠.⁠ ⁠〃⁠) encaja muy bien en mensajes personales, mientras que un Lenny Face ( ͡° ͜ʖ ͡°) es ideal para bromas.</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-1 sm:col-span-2">
              <strong className="text-[var(--foreground)]">Combina kaomojis con tipografías bonitas:</strong>
              <span className="opacity-80">Puedes acompañar tus emoticones de texto con nuestras letras cursivas o aesthetic para destacar aún más en redes sociales.</span>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FaqSection title="Preguntas Frecuentes sobre Kaomojis" faqs={faqs} />

        {/* CONCLUSION */}
        <section className="p-6 rounded-2xl bg-[#ede7df]/50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/60 flex flex-col gap-2 text-xs sm:text-sm">
          <h3 className="font-extrabold text-base text-[var(--foreground)]">Conclusión</h3>
          <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
            Los kaomojis representan una de las expresiones de creatividad digital más versátiles y entrañables de internet. Con nuestro catálogo interactivo puedes explorar cientos de emoticones japoneses originales, filtrarlos por emoción y copiarlos en un solo segundo para darle personalidad única a todos tus contenidos.
          </p>
        </section>
      </main>
    </div>
  );
}
