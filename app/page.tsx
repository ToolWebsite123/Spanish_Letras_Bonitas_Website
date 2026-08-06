import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import HowItWorksSection from "@/components/HowItWorksSection";
import fontStyles from "@/lib/fontStyles";
import decorators from "@/lib/decorators";

export default function Home() {
  const totalStyles = fontStyles.length;
  const totalDecorators = decorators.length;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 flex flex-col w-full overflow-x-hidden">
      {/* Top Site Navigation Bar */}
      <NavBar />

      <main className="flex-1 py-8 sm:py-10 px-4 sm:px-8 w-full max-w-4xl mx-auto flex flex-col gap-8 sm:gap-12">
        {/* Header & Intro Section */}
        <header className="text-center flex flex-col gap-3 w-full">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
            Letras Bonitas
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Genera letras bonitas, tipografías elegantes y textos personalizados al instante para tus publicaciones de Instagram, historias de WhatsApp, nicks de Free Fire y servidores de Discord. Elige entre más de {totalStyles} estilos únicos y combínalos con decoradores especiales para crear cientos de variantes totalmente gratis, sin registros ni descargas.
          </p>
        </header>

        {/* Interactive Converter Tool */}
        <Converter />

        {/* Section: Por Qué Elegir Letras Bonitas */}
        <section className="w-full flex flex-col gap-6 p-5 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>✨</span> Por Qué Elegir Letras Bonitas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
              <span className="text-2xl">🎨</span>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">Más de {totalStyles} Estilos Únicos</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Amplia variedad de familias tipográficas Unicode, incluyendo letras cursivas, góticas, monoespaciadas, rayadas y punteadas.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
              <span className="text-2xl">🔮</span>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">Sistema de Decoradores</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Envoltorios estéticos que añaden marcos decorativos, símbolos y figuras al inicio y final de cualquier texto.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
              <span className="text-2xl">⚡</span>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">100% Gratis y Sin Registro</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Acceso ilimitado y directo desde el navegador sin crear cuenta, ingresar datos personales ni descargar software.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2">
              <span className="text-2xl">📱</span>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">Compatibilidad Universal</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Generación basada en el estándar alfanumérico Unicode, garantizando correcta visualización en cualquier dispositivo o sistema.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col gap-2 col-span-1 sm:col-span-2 lg:col-span-1">
              <span className="text-2xl">🚀</span>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">Copiado Instantáneo</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Botón dedicado de un solo clic que transfiere el texto convertido al portapapeles del dispositivo de inmediato.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Ideas y Usos Populares */}
        <section className="w-full flex flex-col gap-6 p-5 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <span>💡</span> Ideas y Usos Populares para Letras Bonitas
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Nuestra herramienta de conversión de texto es ideal para darle un toque creativo a múltiples proyectos y plataformas digitales. Descubre algunas de las aplicaciones más populares entre nuestros usuarios:
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800/60">
              <span className="text-purple-600 dark:text-purple-400 shrink-0 text-base">✦</span>
              <span><strong className="font-semibold text-neutral-900 dark:text-neutral-100">Biografías y perfiles estéticos:</strong> Destaca en Instagram, TikTok y Twitter con letras cursivas o fuentes coquette que transmitan tu personalidad.</span>
            </li>
            <li className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800/60">
              <span className="text-purple-600 dark:text-purple-400 shrink-0 text-base">✦</span>
              <span><strong className="font-semibold text-neutral-900 dark:text-neutral-100">Nicks y nombres para videojuegos:</strong> Crea apodos impactantes para Free Fire, Roblox, PUBG y League of Legends combinando letras góticas y símbolos de espadas o coronas.</span>
            </li>
            <li className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800/60">
              <span className="text-purple-600 dark:text-purple-400 shrink-0 text-base">✦</span>
              <span><strong className="font-semibold text-neutral-900 dark:text-neutral-100">Marcas y nombres de clanes:</strong> Diseña tags de equipo y nombres de clan profesionales con corchetes decorativos y marcos especiales.</span>
            </li>
            <li className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800/60">
              <span className="text-purple-600 dark:text-purple-400 shrink-0 text-base">✦</span>
              <span><strong className="font-semibold text-neutral-900 dark:text-neutral-100">Mensajes de bienvenida e info de servidor:</strong> Embellece los canales de texto, reglas y roles en tu servidor de Discord.</span>
            </li>
            <li className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800/60">
              <span className="text-purple-600 dark:text-purple-400 shrink-0 text-base">✦</span>
              <span><strong className="font-semibold text-neutral-900 dark:text-neutral-100">Estados y chats de WhatsApp:</strong> Sorprende a tus contactos en tus estados diarios o mensajes destacados utilizando texto en negrita, itálica o fuentes con estrellas.</span>
            </li>
            <li className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800/60">
              <span className="text-purple-600 dark:text-purple-400 shrink-0 text-base">✦</span>
              <span><strong className="font-semibold text-neutral-900 dark:text-neutral-100">Títulos de publicaciones y pies de foto:</strong> Captura la atención de tu audiencia en posts de Facebook e Instagram con encabezados llamativos.</span>
            </li>
            <li className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800/60">
              <span className="text-purple-600 dark:text-purple-400 shrink-0 text-base">✦</span>
              <span><strong className="font-semibold text-neutral-900 dark:text-neutral-100">Firmas digitales y correos creativos:</strong> Personaliza tus despedidas y firmas de correo electrónico con un toque caligráfico o manuscrito elegante.</span>
            </li>
            <li className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800/60">
              <span className="text-purple-600 dark:text-purple-400 shrink-0 text-base">✦</span>
              <span><strong className="font-semibold text-neutral-900 dark:text-neutral-100">Tarjetas de felicitación y dedicatorias:</strong> Genera frases románticas, saludos de cumpleaños y tarjetas digitales con fuentes de amor y flores.</span>
            </li>
            <li className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800/60">
              <span className="text-purple-600 dark:text-purple-400 shrink-0 text-base">✦</span>
              <span><strong className="font-semibold text-neutral-900 dark:text-neutral-100">Nicks para plataformas de streaming:</strong> Resalta tu canal en Twitch y YouTube con títulos de transmisión y nombres de usuario memorables.</span>
            </li>
            <li className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/60 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800/60">
              <span className="text-purple-600 dark:text-purple-400 shrink-0 text-base">✦</span>
              <span><strong className="font-semibold text-neutral-900 dark:text-neutral-100">Comentarios destacados:</strong> Haz que tus aportes en videos de TikTok y YouTube resalten sobre los demás comentarios convencionales.</span>
            </li>
          </ul>
        </section>

        {/* Section: Cómo Usar el Generador */}
        <section className="w-full flex flex-col gap-6 p-5 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
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
                Haz clic en &quot;Copiar&quot; y pégalo directamente en tu perfil, chat o biografía.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Cómo Funciona el Generador de Letras */}
        <HowItWorksSection />

        {/* Section: Tabla de Límites de Caracteres */}
        <section className="w-full flex flex-col gap-6 p-5 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              📊 Límites de Caracteres en Plataformas Populares
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Revisa la cantidad máxima de caracteres Unicode recomendados para cada red social o juego antes de pegar tu texto convertido:
            </p>
          </div>
          <div className="w-full min-w-0 overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-700 dark:text-neutral-300 border-collapse min-w-[500px]">
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
        <section className="w-full flex flex-col gap-6 p-5 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            ❓ Preguntas Frecuentes sobre el Generador de Letras
          </h2>
          <div className="flex flex-col gap-4">
            <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4">
              <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                <span>¿Qué es Letras Bonitas y para qué sirve?</span>
                <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform duration-200">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Letras Bonitas es una herramienta gratuita en línea que convierte texto normal en más de {totalStyles} estilos de letras estilizadas y símbolos Unicode. Sirve para personalizar nombres de usuario, biografías, estados y publicaciones en redes sociales y juegos.
              </p>
            </details>
            <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4">
              <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                <span>¿Es 100% gratuito utilizar este generador de texto?</span>
                <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform duration-200">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Sí, la herramienta es totalmente gratuita e ilimitada. No requiere suscripción, instalación de extensiones ni registro de datos personales.
              </p>
            </details>
            <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4">
              <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                <span>¿Cuántos estilos de fuentes y letras están disponibles?</span>
                <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform duration-200">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Contamos con {totalStyles} estilos base que se pueden combinar con {totalDecorators} tipos de decoraciones para generar cientos de variantes únicas al instante.
              </p>
            </details>
            <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4">
              <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                <span>¿Funciona en dispositivos móviles y todas las plataformas?</span>
                <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform duration-200">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Sí, los caracteres alfanuméricos Unicode son compatibles con la inmensa mayoría de dispositivos modernos Android, iOS, Windows y macOS sin necesidad de instalar fuentes adicionales.
              </p>
            </details>
            <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4">
              <summary className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm cursor-pointer list-none flex items-center justify-between">
                <span>¿Puedo usar estos nombres para Free Fire, Roblox y PUBG?</span>
                <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform duration-200">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                ¡Absolutamente! Todos los nombres y letras decoradas se pueden copiar y pegar directamente en los campos de apodo y nick de tus videojuegos preferidos.
              </p>
            </details>
          </div>
        </section>
      </main>
    </div>
  );
}
