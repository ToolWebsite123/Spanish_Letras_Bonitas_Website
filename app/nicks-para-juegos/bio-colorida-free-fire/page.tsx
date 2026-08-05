import Link from "next/link";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";

export default function BioColoridaFreeFirePage() {
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
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">Bio Colorida Free Fire</span>
          </nav>

          {/* Header */}
          <header className="flex flex-col gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Generador de Bio Colorida para Free Fire
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Crea firmas y biografías con colores deslumbrantes en tu perfil de Free Fire. Utiliza los códigos de color HEX entre corchetes combinados con letras estilizadas para personalizar tu firma del juego.
            </p>
          </header>

          {/* Interactive Converter Tool */}
          <Converter highlightStyleId="elegant-script" />

          {/* Section: Códigos de Color Populares */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              🎨 Códigos de Color HEX para la Bio de Free Fire
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-red-300 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20 flex flex-col gap-1">
                <span className="text-xs text-red-600 dark:text-red-400 font-bold">Rojo Intenso</span>
                <p className="text-base font-mono font-bold text-red-600">[FF0000] Mi Firma</p>
              </div>
              <div className="p-4 rounded-xl border border-yellow-300 dark:border-yellow-900/40 bg-yellow-50/40 dark:bg-yellow-950/20 flex flex-col gap-1">
                <span className="text-xs text-yellow-600 dark:text-yellow-400 font-bold">Amarillo Dorado</span>
                <p className="text-base font-mono font-bold text-yellow-500">[FFFF00] Pro Player</p>
              </div>
              <div className="p-4 rounded-xl border border-green-300 dark:border-green-900/40 bg-green-50/40 dark:bg-green-950/20 flex flex-col gap-1">
                <span className="text-xs text-green-600 dark:text-green-400 font-bold">Verde Neón</span>
                <p className="text-base font-mono font-bold text-green-500">[00FF00] Clan Leader</p>
              </div>
              <div className="p-4 rounded-xl border border-cyan-300 dark:border-cyan-900/40 bg-cyan-50/40 dark:bg-cyan-950/20 flex flex-col gap-1">
                <span className="text-xs text-cyan-600 dark:text-cyan-400 font-bold">Azul Celeste</span>
                <p className="text-base font-mono font-bold text-cyan-500">[00FFFF] Only Rush</p>
              </div>
              <div className="p-4 rounded-xl border border-purple-300 dark:border-purple-900/40 bg-purple-50/40 dark:bg-purple-950/20 flex flex-col gap-1">
                <span className="text-xs text-purple-600 dark:text-purple-400 font-bold">Púrpura VIP</span>
                <p className="text-base font-mono font-bold text-purple-500">[FF00FF] Full Capa</p>
              </div>
              <div className="p-4 rounded-xl border border-orange-300 dark:border-orange-900/40 bg-orange-50/40 dark:bg-orange-950/20 flex flex-col gap-1">
                <span className="text-xs text-orange-600 dark:text-orange-400 font-bold">Naranja Fuego</span>
                <p className="text-base font-mono font-bold text-orange-500">[FF9900] Dominador</p>
              </div>
            </div>
          </section>

          {/* Reference Table */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              📋 Tabla de Códigos de Formato Especial en FF
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-700 dark:text-neutral-300 border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-800/40">
                    <th className="py-3 px-4 font-semibold">Código</th>
                    <th className="py-3 px-4 font-semibold">Efecto Visual</th>
                    <th className="py-3 px-4 font-semibold">Ejemplo de Uso</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-mono font-bold text-purple-600 dark:text-purple-400">[b]</td>
                    <td className="py-3 px-4 font-bold">Texto en Negrita</td>
                    <td className="py-3 px-4 font-mono text-xs">[b]Texto Grueso</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-mono font-bold text-purple-600 dark:text-purple-400">[i]</td>
                    <td className="py-3 px-4 italic">Texto en Itálica</td>
                    <td className="py-3 px-4 font-mono text-xs">[i]Texto Inclinado</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-mono font-bold text-purple-600 dark:text-purple-400">[u]</td>
                    <td className="py-3 px-4 underline">Texto Subrayado</td>
                    <td className="py-3 px-4 font-mono text-xs">[u]Texto Con Linea</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-mono font-bold text-purple-600 dark:text-purple-400">[s]</td>
                    <td className="py-3 px-4 line-through">Texto Tachado</td>
                    <td className="py-3 px-4 font-mono text-xs">[s]Texto Tachado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQs */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              ❓ Preguntas Frecuentes sobre la Bio Colorida de Free Fire
            </h2>
            <div className="flex flex-col gap-4">
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Cómo se ponen los colores en la bio de Free Fire?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Escribe el código HEX de 6 dígitos encerrado entre corchetes como [FF0000] justo antes del texto que quieres colorear.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Se pueden combinar varios colores en una sola bio?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, coloca un nuevo código entre corchetes cada vez que desees cambiar el color de una sección de la frase.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Sirven estos códigos para el nick de jugador?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  No, los códigos de color únicamente funcionan en el campo Firma / Bio del perfil de Free Fire.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es gratis modificar la bio en Free Fire?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, cambiar la bio o firma no cuesta diamantes y se puede hacer cuantas veces quieras.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Por qué mis amigos no ven los códigos entre corchetes?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Porque Free Fire interpreta el código e invisibiliza los corchetes para mostrar únicamente el color resultante.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Puedo añadir letras cursivas y decoraciones a la bio colorida?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  ¡Sí! Genera el texto con estilos de nuestro conversor y colócalo después del código de color.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Hay límite de letras en la firma?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  El límite aproximado es de 50 caracteres contando códigos y letras.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es 100% seguro usar códigos de color?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, es una función nativa del motor del juego respaldada por Garena.
                </p>
              </details>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
