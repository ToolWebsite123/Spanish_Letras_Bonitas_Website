import Link from "next/link";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import fontStyles from "@/lib/fontStyles";
import { convertText } from "@/lib/convertText";

const gothicStyle = fontStyles.find((s) => s.id === "gothic")!;

const upperGothicAlphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((char) => ({
  char,
  styled: convertText(char, gothicStyle.map, gothicStyle.id),
}));

const lowerGothicAlphabet = Array.from("abcdefghijklmnopqrstuvwxyz").map((char) => ({
  char,
  styled: convertText(char, gothicStyle.map, gothicStyle.id),
}));

export default function AlfabetoGraffitiPage() {
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
            <Link href="/alfabeto-completo/alfabeto-cursivo" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Alfabeto Completo
            </Link>
            <span>/</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">Alfabeto Graffiti</span>
          </nav>

          {/* Header */}
          <header className="flex flex-col gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Alfabeto Graffiti y Gótico de la A a la Z
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Explora la tabla de letras de alfabeto estilo graffiti y gótico (Fraktur Unicode). Consulta todas las letras mayúsculas y minúsculas de la A a la Z para diseñar nicks urbanos y firmas con personalidad.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              El abecedario de alfabeto graffiti destaca por ofrecer una colección completa de caracteres con estética urbana, alternativa y gótica. A menudo es muy buscado por diseñadores y gamers que quieren armar nombres con presencia imponente. Se usa comúnmente en nicks de combate y tags de clan, y si deseas ver palabras completas formadas en este estilo puedes visitar la página de <Link href="/letras-bonitas/letras-graffiti" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras graffiti</Link> o revisar el <Link href="/alfabeto-completo/alfabeto-cursivo" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">alfabeto cursivo</Link>.
            </p>
          </header>

          {/* Section: Mayúsculas Góticas / Graffiti */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <span>🅰️</span> Abecedario Graffiti Mayúsculas (A - Z)
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-3">
              {upperGothicAlphabet.map((item) => (
                <div
                  key={item.char}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:border-purple-400 dark:hover:border-purple-600 transition-all"
                >
                  <span className="text-xs text-neutral-400 font-mono mb-1">{item.char}</span>
                  <span className="text-2xl font-semibold text-purple-600 dark:text-purple-400 select-all">
                    {item.styled}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Minúsculas Góticas / Graffiti */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <span>ⓐ</span> Abecedario Graffiti Minúsculas (a - z)
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-3">
              {lowerGothicAlphabet.map((item) => (
                <div
                  key={item.char}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:border-purple-400 dark:hover:border-purple-600 transition-all"
                >
                  <span className="text-xs text-neutral-400 font-mono mb-1">{item.char}</span>
                  <span className="text-2xl font-semibold text-purple-600 dark:text-purple-400 select-all">
                    {item.styled}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Converter Tool */}
          <Converter highlightStyleId="gothic" />

          {/* Reference Table */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              📋 Tabla de Equivalencias del Alfabeto Graffiti
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-700 dark:text-neutral-300 border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-800/40">
                    <th className="py-3 px-4 font-semibold">Normal</th>
                    <th className="py-3 px-4 font-semibold">Graffiti / Gótico</th>
                    <th className="py-3 px-4 font-semibold">Bloque Unicode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-mono font-medium">A / a</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400 text-lg">𝔄 / 𝖆</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Mathematical Fraktur / Bold Fraktur</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-mono font-medium">B / b</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400 text-lg">𝔅 / 𝖇</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Mathematical Fraktur / Bold Fraktur</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-mono font-medium">C / c</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400 text-lg">ℭ / 𝖈</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Letterlike Symbols / Bold Fraktur</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-mono font-medium">G / g</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400 text-lg">𝔊 / 𝖌</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Mathematical Fraktur / Bold Fraktur</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
              Consulta las equivalencias de bloques alfanuméricos en la tabla de referencia. Si buscas aplicar este abecedario a tus juegos preferidos, no te pierdas nuestra guía de <Link href="/nicks-para-juegos/nick-free-fire-masculino" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nick Free Fire masculino</Link> o adorna tus frases con <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">símbolos para nick</Link>.
            </p>
          </section>

          {/* Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Para explorar más posibilidades de personalización en comunidades digitales, descubre nuestras <Link href="/fuentes-para-instagram/fuentes-para-discord" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">fuentes para Discord</Link> o dale un estilo único a tus publicaciones con <Link href="/letras-bonitas/letras-japonesas" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras japonesas</Link>.
          </section>

          {/* FAQs */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              ❓ Preguntas Frecuentes sobre el Alfabeto Graffiti
            </h2>
            <div className="flex flex-col gap-4">
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Qué es el alfabeto graffiti Unicode?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Es un conjunto de símbolos pertenecientes al bloque Fraktur de Unicode que imitan la estética de los trazos urbanos y letras de graffiti.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Se pueden copiar individualmente las letras del abecedario?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, solo debes seleccionar cualquier letra de la tabla superior o usar la caja de conversión para escribir palabras completas.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Sirve para nicks de Free Fire?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Es uno de los estilos más demandados para crear nicks agresivos en juegos como Free Fire, PUBG y Call of Duty Mobile.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Funciona en biografías de Instagram?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, puedes pegar las letras de graffiti directamente en cualquier perfil social.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Hay alguna diferencia entre la A mayúscula y la a minúscula?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, la mayúscula tiene trazos clásicos de caligrafía Fraktur (𝔄) y la minúscula utiliza trazos gruesos en negrita (𝖆).
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es 100% gratuito?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Totalmente gratis y sin límites de uso.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Se pueden añadir decoradores con fuego o espadas?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, activa los decoradores para añadir fuego 🔥 o espadas ⚔️ automáticamente.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Por qué algunas letras tienen formas históricas?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Porque derivan de los manuscritos góticos medievales europeos que inspiraron la tipografía urbana contemporánea.
                </p>
              </details>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
