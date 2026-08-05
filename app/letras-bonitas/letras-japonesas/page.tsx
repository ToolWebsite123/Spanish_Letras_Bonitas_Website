import Link from "next/link";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";

export default function LetrasJaponesasPage() {
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
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">Letras Japonesas</span>
          </nav>

          {/* Header */}
          <header className="flex flex-col gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Letras Estilo Japonés para Copiar y Pegar
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Genera letras estilo japonés, fuentes tipo anime y caracteres de ancho completo (Fullwidth Latin) para tus nombres de usuario en juegos, perfiles de Discord, Instagram y redes sociales. Nota: Estas tipografías son variaciones del alfabeto latino estilo aesthetic oriental y no escritura en idioma japonés real (Kanji/Hiragana).
            </p>
          </header>

          {/* Interactive Converter Tool */}
          <Converter highlightStyleId="fullwidth" />

          {/* Section: Ejemplos de Nombres Anime / Japoneses */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              🎌 Ejemplos de Nombres y Nicks Estilo Japonés
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Fullwidth Classic</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Ｋ Ａ Ｉ Ｚ Ｏ Ｋ Ｕ</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Otaku Vibe</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">🌸 Ｓ Ａ Ｋ Ｕ Ｒ Ａ 🌸</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Samurai Warrior</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">⚔️ Ｋ Ａ Ｔ Ａ Ｎ Ａ ⚔️</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Tokyo Night</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">🌙 Ｔ Ｏ Ｋ Ｙ Ｏ 🌙</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Dragon Soul</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">🔥 Ｒ Ｙ Ｕ 🔥</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Kawaii Style</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">🎀 Ｎ Ｅ Ｋ Ｏ 🎀</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Shinobi Power</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">⚡ Ｓ Ｈ Ｉ Ｎ Ｏ Ｂ Ｉ ⚡</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Anime Protagonist</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">👑 Ｈ Ｉ Ｋ Ａ Ｒ Ｉ 👑</p>
              </div>
            </div>
          </section>

          {/* Reference Table */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              📋 Diferencias entre Alfabeto Fullwidth y Escritura Japonesa Real
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-700 dark:text-neutral-300 border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-800/40">
                    <th className="py-3 px-4 font-semibold">Tipo de Texto</th>
                    <th className="py-3 px-4 font-semibold">Ejemplo Visual</th>
                    <th className="py-3 px-4 font-semibold">Descripción Tecnica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Fullwidth Latin (Ancho Completo)</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">Ｓ Ａ Ｋ Ｕ Ｒ Ａ</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Caracteres latinos diseñados para alinearse con glifos asiáticos</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Katakana (Fonético)</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">サクラ</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Silabario utilizado en Japón para palabras prestadas del extranjero</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Kanji (Ideogramas)</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">桜</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Caracteres ideográficos tradicionales japoneses de origen chino</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQs */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              ❓ Preguntas Frecuentes sobre Letras Japonesas y Fullwidth
            </h2>
            <div className="flex flex-col gap-4">
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es esto idoma japonés verdadero?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  No, es una transformación del alfabeto latino (Fullwidth Unicode) que otorga una estética inspirada en el diseño tipográfico japonés sin cambiar el idioma original.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Funcionan estas letras en Roblox y Discord?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  ¡Sí! El formato de ancho completo (Fullwidth) es ampliamente aceptado en los apodos de Discord y nombres de pantalla en Roblox.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Puedo añadir emojis de cerezo o katana al texto?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, utiliza nuestro selector de decoraciones para añadir flores 🌸, espadas ⚔️ o coronas 👑 de forma automática.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Por qué las letras se ven más separadas?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Porque ocupan el doble de ancho estándar (ancho completo), lo que imita la cuadrícula espacial de los caracteres asiáticos.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es compatible con Free Fire?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, los caracteres Fullwidth son aceptados dentro de los 12 caracteres máximos de Free Fire.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es gratuito el generador?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, es 100% gratuito sin necesidad de instalar apps ni crear cuentas.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Se pueden convertir números a letras japonesas?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Los números también se convierten al bloque de dígitos de ancho completo (０１２３...).
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es apto para biografías de Instagram?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Es uno de los estilos más usados en biografías de temática anime y otaku en Instagram.
                </p>
              </details>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
