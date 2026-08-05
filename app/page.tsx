import Link from "next/link";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import HowItWorksSection from "@/components/HowItWorksSection";
import fontStyles from "@/lib/fontStyles";
import decorators from "@/lib/decorators";

export default function Home() {
  const totalStyles = fontStyles.length;
  const totalDecorators = decorators.length;
  const totalCombinations = totalStyles * totalDecorators;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      {/* Top Site Navigation Bar */}
      <NavBar />

      <main className="flex-1 py-10 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {/* Header & Intro Section */}
          <header className="text-center flex flex-col gap-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Letras Bonitas
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Genera letras bonitas, tipografías elegantes y textos personalizados al instante para tus publicaciones de Instagram, historias de WhatsApp, nicks de Free Fire y servidores de Discord. Elige entre más de {totalStyles} estilos únicos y combínalos con decoradores especiales para crear más de {totalCombinations} variantes totalmente gratis, sin registros ni descargas.
            </p>
          </header>

          {/* Interactive Converter Tool */}
          <Converter />

          {/* Section: Por Qué Elegir Letras Bonitas */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <span>✨</span> Por Qué Elegir Letras Bonitas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
                <span className="text-2xl">🎨</span>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">Más de {totalStyles} Estilos Únicos</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Desde letras cursivas y góticas hasta tipografías monoespaciadas, dobles rayadas y punteadas para destacar en cualquier plataforma.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
                <span className="text-2xl">🔮</span>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">Sistema de Decoradores</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Combina cualquier estilo tipográfico con símbolos de estrellas, corazones, coronas y fuego para generar más de {totalCombinations} combinaciones.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
                <span className="text-2xl">⚡</span>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">100% Gratis y Sin Registro</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Usa la herramienta de forma ilimitada sin necesidad de crear cuenta, proporcionar datos personales ni instalar aplicaciones.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
                <span className="text-2xl">📱</span>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">Compatibilidad Universal</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Los textos generados son símbolos Unicode compatibles con Instagram, TikTok, WhatsApp, Facebook, Free Fire, Roblox y Discord.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2 col-span-1 sm:col-span-2 lg:col-span-1">
                <span className="text-2xl">🚀</span>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">Copiado Instantáneo</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Un solo clic en el botón de copiar y el texto decorado estará listo en tu portapapeles para pegarlo de inmediato.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Cómo Usar el Generador */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              🚀 Cómo Usar el Generador de Letras en 3 Pasos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3 p-5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-purple-600 text-white font-bold text-sm shadow-xs">1</span>
                <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">Escribe o Pega tu Texto</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Introduce cualquier frase, palabra o nombre de usuario en el recuadro superior del conversor.
                </p>
              </div>
              <div className="flex flex-col gap-3 p-5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-purple-600 text-white font-bold text-sm shadow-xs">2</span>
                <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">Elige Estilo o Decoración</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Explora la cuadrícula de fuentes Unicode y añade opcionalmente un marco decorativo con símbolos.
                </p>
              </div>
              <div className="flex flex-col gap-3 p-5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-purple-600 text-white font-bold text-sm shadow-xs">3</span>
                <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">Copia y Pega donde Quieras</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Haz clic en &quot;Copiar&quot; y pégalo directamente en la biografía de Instagram, chat de WhatsApp o nick de juego.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Explora Nuestras Categorías */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              📂 Explora Nuestras Categorías
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/letras-bonitas/letras-cursivas"
                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:border-purple-400 dark:hover:border-purple-700 transition-all flex flex-col gap-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">✍️</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium group-hover:translate-x-1 transition-transform">Ver más →</span>
                </div>
                <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-base">Letras Bonitas</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Fuentes cursivas, caligráficas y diseños elegantes para firmas y títulos destacados.
                </p>
              </Link>
              <Link
                href="/nicks-para-juegos/nick-free-fire"
                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:border-purple-400 dark:hover:border-purple-700 transition-all flex flex-col gap-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🎮</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium group-hover:translate-x-1 transition-transform">Ver más →</span>
                </div>
                <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-base">Nicks para Juegos</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Nombres heroicos con letras góticas y símbolos guerreros para Free Fire y Roblox.
                </p>
              </Link>
              <Link
                href="/fuentes-para-instagram/bio-para-instagram"
                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:border-purple-400 dark:hover:border-purple-700 transition-all flex flex-col gap-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">📸</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium group-hover:translate-x-1 transition-transform">Ver más →</span>
                </div>
                <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-base">Fuentes para Redes</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Tipografías atractivas optimizadas para biografías de Instagram, Facebook y WhatsApp.
                </p>
              </Link>
              <Link
                href="/simbolos-aesthetic/emojis-para-copiar"
                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:border-purple-400 dark:hover:border-purple-700 transition-all flex flex-col gap-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🎀</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium group-hover:translate-x-1 transition-transform">Ver más →</span>
                </div>
                <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-base">Símbolos Aesthetic</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Colección de emojis, mariposas, moños coquette y bordes decorativos para copiar.
                </p>
              </Link>
              <Link
                href="/letras-personalizadas/texto-en-negrita"
                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:border-purple-400 dark:hover:border-purple-700 transition-all flex flex-col gap-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">⚙️</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium group-hover:translate-x-1 transition-transform">Ver más →</span>
                </div>
                <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-base">Letras Personalizadas</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Herramientas específicas para texto en negrita, itálica y texto invertido al revés.
                </p>
              </Link>
              <Link
                href="/alfabeto-completo/alfabeto-cursivo"
                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:border-purple-400 dark:hover:border-purple-700 transition-all flex flex-col gap-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🔤</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium group-hover:translate-x-1 transition-transform">Ver más →</span>
                </div>
                <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-base">Alfabeto Completo</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Tablas de referencia A-Z con equivalencias Unicode de todas las letras del abecedario.
                </p>
              </Link>
            </div>
          </section>

          {/* Section: Cómo Funciona el Generador de Letras */}
          <HowItWorksSection />

          {/* Section: Tabla de Límites de Caracteres */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                📊 Límites de Caracteres en Plataformas Populares
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Revisa la cantidad máxima de caracteres Unicode recomendados para cada red social o juego antes de pegar tu texto convertido:
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-700 dark:text-neutral-300 border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-800/40">
                    <th className="py-3 px-4 font-semibold">Plataforma / Aplicación</th>
                    <th className="py-3 px-4 font-semibold">Campo / Usos</th>
                    <th className="py-3 px-4 font-semibold">Límite Máximo</th>
                    <th className="py-3 px-4 font-semibold">Recomendación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Instagram</td>
                    <td className="py-3 px-4">Biografía (Bio)</td>
                    <td className="py-3 px-4 font-mono">150 caracteres</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Usar 1-2 líneas con fuentes cursivas</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Free Fire</td>
                    <td className="py-3 px-4">Nick de Jugador</td>
                    <td className="py-3 px-4 font-mono">12 caracteres</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Mejor con estilo gótico y símbolos ⚔👑</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">TikTok</td>
                    <td className="py-3 px-4">Descripción del Perfil</td>
                    <td className="py-3 px-4 font-mono">80 caracteres</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Combinar con emojis aesthetic</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">WhatsApp</td>
                    <td className="py-3 px-4">Info / Nombre de Usuario</td>
                    <td className="py-3 px-4 font-mono">139 / 25 caract.</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Fuentes cursivas o negritas sans</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Discord</td>
                    <td className="py-3 px-4">Apodo de Servidor</td>
                    <td className="py-3 px-4 font-mono">32 caracteres</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Ideal con tipografía monoespaciada</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-100">Roblox</td>
                    <td className="py-3 px-4">Nombre en Pantalla</td>
                    <td className="py-3 px-4 font-mono">20 caracteres</td>
                    <td className="py-3 px-4 text-xs text-neutral-500">Formato en burbujas o negritas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Preguntas Frecuentes */}
          <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              ❓ Preguntas Frecuentes sobre el Generador de Letras
            </h2>
            <div className="flex flex-col gap-4">
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Qué es Letras Bonitas y para qué sirve?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Letras Bonitas es una herramienta gratuita en línea que convierte texto normal en más de {totalStyles} estilos de letras estilizadas y símbolos Unicode. Sirve para personalizar nombres de usuario, biografías, estados y publicaciones en redes sociales y juegos.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es 100% gratuito utilizar este generador de texto?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, la herramienta es totalmente gratuita e ilimitada. No requiere suscripción, instalación de extensiones ni registro de datos personales.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Cuántos estilos de fuentes y letras están disponibles?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Contamos con {totalStyles} estilos base (cursivas, góticas, negritas, monoespaciadas, burbujas, circulares, etc.) que se pueden combinar con {totalDecorators} tipos de decoraciones para generar más de {totalCombinations} combinaciones únicas.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Cómo funciona el sistema de decoradores de texto?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  El selector de decoraciones te permite envolver tu texto en marcas estéticas como estrellas, coronas, fuego o flores de forma automática, aplicando el marco a todos los estilos simultáneamente.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Los textos convertidos se ven bien en celulares Android e iPhone?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, los caracteres Unicode son compatibles con la inmensa mayoría de dispositivos modernos Android, iOS, Windows y macOS sin instalar fuentes adicionales.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Necesito descargar alguna aplicación para usar Letras Bonitas?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  No, el generador funciona al 100% desde cualquier navegador web moderno tanto en computadoras de escritorio como en smartphones.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Por qué en algunos dispositivos antiguos aparecen cuadros vacíos (□)?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Esto ocurre únicamente si el sistema operativo del dispositivo receptor es obsoleto y carece del soporte para los bloques matemáticos más recientes del estándar Unicode.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Puedo usar estos nombres para Free Fire, Roblox y PUBG?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  ¡Absolutamente! Todos los nombres y letras decoradas se pueden copiar y pegar en los campos de apodo y nick de tus videojuegos preferidos.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Es seguro copiar y pegar este texto en redes sociales?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sí, es 100% seguro. Los caracteres que se copian son texto plano con codificación estándar Unicode y no contienen scripts dañinos ni código ejecutable.
                </p>
              </details>
              <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all">
                <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                  <span>¿Con qué frecuencia se agregan nuevos estilos y fuentes?</span>
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Actualizamos regularmente nuestro catálogo e incorporamos nuevos bloques tipográficos y marcos decorativos según el feedback de nuestros usuarios.
                </p>
              </details>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
