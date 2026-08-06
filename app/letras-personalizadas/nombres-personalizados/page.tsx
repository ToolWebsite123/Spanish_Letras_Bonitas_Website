import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";

export const metadata: Metadata = {
  title: "Nombres Personalizados | Generador de Letras Elegantes",
  description:
    "Personaliza tu nombre o apellido con letras elegantes, cursivas y decoraciones visuales. Crea firmas digitales únicas y nicks para tus redes sociales.",
};

export default function NombresPersonalizadosPage() {
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
            <Link href="/letras-personalizadas/texto-en-negrita" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Letras Personalizadas
            </Link>
            <span>/</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">Nombres Personalizados</span>
          </nav>

          {/* Header */}
          <header className="flex flex-col gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Generador de Nombres Personalizados
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Personaliza tu nombre o apellido con tipografías elegantes, cursivas, góticas y marcos decorativos. Ideal para firmas digitales, nicks de usuario, redes sociales y tarjetas de presentación.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              El servicio de nombres personalizados destaca por adaptar cualquier apelativo o nombre propio a estilos artísticos deslumbrantes. A menudo es muy popular entre personas que buscan firmar correos con clase o diferenciarse en comunidades en línea. Se usa comúnmente en encabezados de perfil y firmas electrónicas, y si quieres explorar alternativas de diseño te sugerimos visitar la sección de <Link href="/letras-bonitas/letras-firma" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras para firma</Link> o la colección de <Link href="/letras-bonitas/caligrafia" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">caligrafía</Link>.
            </p>
          </header>

          {/* Interactive Converter Tool */}
          <Converter highlightStyleId="cursive" />

          {/* Section: Ejemplos de Nombres Personalizados */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              💎 Ejemplos de Nombres Personalizados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Sofia</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">⋆ 𝒮𝑜𝒻𝒾𝒶 ⋆</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Mateo</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">👑 𝕸𝖆𝖙𝖊𝖔 👑</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Valentina</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">♡ 𝒱𝒶𝓁𝑒𝓃𝓉𝒾𝓃𝒶 ♡</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Lucas</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">⚡ 𝙇𝙪𝙘𝙖𝙨 ⚡</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Isabella</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">🦋 ɪꜱᴀʙᴇʟʟᴀ 🦋</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Sebastian</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">⚔️ 𝔖𝔢𝔟𝔞𝔰𝔱𝔦𝔞𝔫 ⚔️</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Camila</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">🎀 𝒞𝒶𝓂𝒾𝓁𝒶 🎀</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Alejandro</span>
                <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">◈ 𝙰𝚕𝚎𝚓𝚊𝚗𝚍𝚛𝚘 ◈</p>
              </div>
            </div>
          </section>

          {/* Reference Table */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              📋 Usos Recomendados según la Plataforma
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-700 dark:text-neutral-300 border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-800/40">
                    <th className="py-3 px-4 font-semibold">Uso</th>
                    <th className="py-3 px-4 font-semibold">Estilo Recomendado</th>
                    <th className="py-3 px-4 font-semibold">Ejemplo Visual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Firma de Correo Electrónico</td>
                    <td className="py-3 px-4">Elegante / Cursiva</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">𝒮𝑜𝒻𝒾𝒶 ℳ𝒶𝓇𝓉𝒾𝓃𝑒𝓏</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Nombre de Usuario de Juego</td>
                    <td className="py-3 px-4">Góticas / Negritas</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">👑 𝕸𝖆𝖙𝖊𝖔 👑</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Biografía de Instagram</td>
                    <td className="py-3 px-4">Small Caps / Superíndice</td>
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">ᴠᴀʟᴇɴᴛɪɴᴀ 🌸</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
              Elige el estilo perfecto según el uso deseado, ya sea empresarial o gamer. También puedes engalanar tu nombre con <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">símbolos coquette</Link> o descubrir nuestro convertidor de <Link href="/letras-personalizadas/texto-en-negrita" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">texto en negrita</Link>.
            </p>
          </section>

          {/* Pre-FAQ Related Links */}
          <section className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-purple-50/40 dark:bg-purple-950/20 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Si estás buscando nombres optimizados para gaming, no olvides revisar nuestra guía para <Link href="/nicks-para-juegos/nick-free-fire" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">nick Free Fire</Link> o la categoría de <Link href="/letras-bonitas/letras-aesthetic" className="text-purple-600 dark:text-purple-400 font-medium underline hover:opacity-80">letras aesthetic</Link>.
          </section>

          {/* FAQs */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              ❓ Preguntas Frecuentes sobre Nombres Personalizados
            </h2>
            <div className="flex flex-col gap-4">
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Puedo personalizar cualquier nombre o apellido?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, simplemente ingresa cualquier texto en el recuadro y se adaptará instantáneamente a los 29 estilos disponibles.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es posible añadir símbolos a mi nombre?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, usa el panel de decoradores para añadir coronas, estrellas o alas alrededor de tu nombre.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Funcionan en WhatsApp e Instagram?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, son caracteres Unicode 100% compatibles con perfiles de WhatsApp, Instagram y TikTok.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Se pueden guardar mis nombres favoritos?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Copia el resultado con un solo clic y guárdalo en las notas de tu celular.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es totalmente gratis?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, sin restricciones ni necesidad de registros.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Qué estilos de nombre son mejores para juegos?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Los estilos Gótica (Fraktur), Negrita Sans y Doble Rayado son muy populares en Free Fire y Roblox.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Hay soporte para acentos en nombres en español?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, el conversor procesa automáticamente vocales acentuadas (á, é, í, ó, ú) y la letra ñ.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Cómo lo comparto con mis amigos?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Solo copia el resultado y pégalo directamente en cualquier conversación de chat.
                </p>
              </details>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
