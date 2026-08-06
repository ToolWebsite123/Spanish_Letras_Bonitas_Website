import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";

export const metadata: Metadata = {
  title: "Cambiar Nick Free Fire | Guía Paso a Paso y Consejos",
  description:
    "Aprende cómo cambiar tu nick en Free Fire paso a paso. Descubre los costos en diamantes, uso de tarjetas de cambio y crea nombres geniales con letras.",
};

export default function CambiarNickFreeFirePage() {
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
            <Link href="/nicks-para-juegos/nick-free-fire" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Nicks para Juegos
            </Link>
            <span>/</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">Cambiar Nick Free Fire</span>
          </nav>

          {/* Header */}
          <header className="flex flex-col gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Cómo Cambiar tu Nick en Free Fire Paso a Paso
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Aprende el procedimiento exacto para modificar tu nombre de jugador en Garena Free Fire utilizando una Tarjeta de Cambio de Nombre o Diamantes. Genera tu nuevo nick estilizado con letras góticas y símbolos guerreros para destacar en el campo de batalla.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              El proceso de cambiar nick en Free Fire destaca por permitir una renovación completa de tu identidad de jugador en la plataforma de Garena. A menudo es muy buscado cuando quieres ingresar a un nuevo clan o dar un salto de nivel competitivo. Se usa comúnmente en la gestión de cuentas, y para obtener mejores ideas te aconsejamos visitar la sección de <Link href="/nicks-para-juegos/nick-free-fire-masculino" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nick Free Fire masculino</Link> o revisar opciones de <Link href="/nicks-para-juegos/nick-free-fire-femenino" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nick Free Fire femenino</Link>.
            </p>
          </header>

          {/* Interactive Converter Tool */}
          <Converter highlightStyleId="gothic" />

          {/* Section: Guía Paso a Paso */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              📋 Guía Paso a Paso para Cambiar tu Nombre en Free Fire
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs">1</span>
                <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">Copia tu Nuevo Nick</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Genera tu nombre decorado arriba y presiona &quot;Copiar&quot;.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs">2</span>
                <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">Abre tu Perfil en FF</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Inicia Free Fire y toca tu avatar de perfil en la esquina superior izquierda.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs">3</span>
                <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">Presiona el Icono Lápiz</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Toca el icono amarillo de edición junto a tu nombre actual.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs">4</span>
                <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">Pega y Confirma</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Pega tu nuevo nick y confirma el pago con 390 diamantes o tu tarjeta de cambio.
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
              Asegúrate de copiar tu nombre personalizado sin pasarte de los 12 caracteres. También puedes utilizar nuestros <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">símbolos para nick</Link> o explorar tipografías de <Link href="/letras-bonitas/letras-graffiti" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras graffiti</Link>.
            </p>
          </section>

          {/* Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Si también buscas decorar tu perfil interno, te sugerimos consultar nuestro tutorial de <Link href="/nicks-para-juegos/bio-colorida-free-fire" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">bio colorida Free Fire</Link> o descubrir nuestro creador de <Link href="/letras-personalizadas/texto-en-negrita" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">texto en negrita</Link>.
          </section>

          {/* Section: Ejemplos de Nicks Únicos */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              🔥 Ejemplos de NicksListos para Usar en Free Fire
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">King Slayer</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">👑 𝕶 𝕴 𝕹 𝕲 👑</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Fire General</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">🔥 𝖁 𝕴 𝕻 𝕰 𝕽 🔥</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Dark Knight</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">⚔️ 𝕾 𝕳 𝕬 𝕯 𝕺 𝖂 ⚔️</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Master Chief</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">⚡ 𝕬 𝕷 𝖄 𝕬 𝕹 ⚡</p>
              </div>
            </div>
          </section>

          {/* Reference Table */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              📊 Costos y Métodos de Cambio de Nombre
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-700 dark:text-neutral-300 border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-800/40">
                    <th className="py-3 px-4 font-semibold">Método</th>
                    <th className="py-3 px-4 font-semibold">Costo Requerido</th>
                    <th className="py-3 px-4 font-semibold">¿Dónde Conseguirlo?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Tarjeta Cambio de Nick</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">79 Diamantes + 200 Tokens Clan</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Tienda del Clan o Eventos del Pase Élite</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Cambio Directo con Diamantes</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">390 Diamantes</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Recarga directa en el juego o Pagostore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQs */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              ❓ Preguntas Frecuentes sobre Cambiar Nombre en Free Fire
            </h2>
            <div className="flex flex-col gap-4">
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Cuántos caracteres máximo permite el nick de Free Fire?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  El límite estricto en Free Fire es de 12 caracteres (incluyendo espacios y símbolos Unicode).
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Puedo cambiar mi nick gratis sin pagar diamantes?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, la primera vez al crear la cuenta es gratis, o canjeando Tarjetas de Cambio de Nick en la Tienda del Clan.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Por qué me dice &quot;Nombre ya existente&quot;?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Significa que otro jugador ya registró exactamente esa combinación. Añade un símbolo especial como 👑 o ⚡ para hacerlo único.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Afecta el cambio de nick mis estadísticas o rango?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  No, el cambio de nick es puramente estético y no modifica tus puntos de rango, nivel ni colecciones.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Se pueden usar espacios invisibles en el nick?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, utiliza nuestra opción de &quot;Texto Invisible&quot; para separar caracteres en tu nick de Free Fire.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Cada cuánto tiempo puedo cambiarme el nick?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Puedes cambiarlo en cualquier momento siempre que tengas los diamantes o la tarjeta requerida.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Son seguros estos textos para no sufrir baneos?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, son símbolos estándar Unicode permitidos por Garena.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Funciona igual en Free Fire MAX?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, el procedimiento y la compatibilidad de nicks es idéntica en Free Fire y Free Fire MAX.
                </p>
              </details>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
