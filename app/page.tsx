import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import TroubleshootingSection from "@/components/TroubleshootingSection";
import FaqSection from "@/components/FaqSection";
import fontStyles from "@/lib/fontStyles";
import decorators from "@/lib/decorators";

export default function Home() {
  const totalStyles = fontStyles.length;
  const totalDecorators = decorators.length;

  const faqsList = [
    {
      q: "¿El conversor de letras bonitas es 100% gratuito?",
      a: "Sí, es totalmente gratuito para siempre. Todos los estilos, marcos decorativos, contadores de caracteres y funciones de copia están disponibles sin costo, sin anuncios invasivos y sin necesidad de crear cuenta ni descargar aplicaciones.",
    },
    {
      q: "¿Por qué este conversor es el único que preserva los acentos en español (á, é, í, ó, ú, ñ, ç)?",
      a: "La gran mayoría de conversores en internet fueron desarrollados para el mercado anglosajón (alfabeto ASCII simple), por lo que palabras en español como 'Corazón', 'Información' o 'Niño' pierden sus tildes o se convierten en símbolos rotos [?]. Nuestro conversor integra un motor adaptado para el idioma español que preserva y estiliza automáticamente todas las vocales acentuadas, la Ñ y la Ç.",
    },
    {
      q: "¿Por qué las fuentes generadas funcionan en cualquier red social o juego sin instalar nada?",
      a: "Nuestra herramienta no instala archivos de fuentes (.ttf/.otf) en el sistema operativo. En su lugar, transforma cada letra ingresada en un carácter especial del estándar internacional Unicode. Dado que las plataformas sociales aceptan Unicode de forma nativa (igual que aceptan los emojis), el texto estilizado se visualiza sin problemas en cualquier celular Android, iPhone u ordenador.",
    },
    {
      q: "¿Por qué Free Fire recorta mi apodo cuando uso letras decoradas?",
      a: "Free Fire establece un límite estricto de 12 bytes por apodo. Los caracteres Unicode complejos ocupan de 2 a 4 bytes de memoria por letra. Si tu nick sobrepasa los 12 bytes reales, el servidor del juego recortará el texto. Te recomendamos seleccionar fuentes como 'Pequeñas (Small Caps)' o utilizar nuestro contador en tiempo real dentro del conversor.",
    },
    {
      q: "¿Cómo agregar el espacio transparente o invisible en mi nick de Free Fire?",
      a: "El espacio invisible (carácter Unicode U+3164) te permite separar el tag de tu clan del nombre personal o crear nicks completamente transparentes. Puedes copiar el espacio transparente directamente desde nuestra sección de soluciones rápidas a continuación.",
    },
    {
      q: "¿Cómo guardar mis fuentes favoritas?",
      a: "Cada tarjeta de estilo cuenta con un ícono de corazón (❤️). Al presionarlo, la fuente se guarda automáticamente en la memoria de tu navegador (localStorage) sin necesidad de iniciar sesión. Al volver al sitio o pulsar la pestaña 'Favoritos', tendrás todos tus estilos guardados.",
    },
    {
      q: "¿Usar letras bonitas afecta la búsqueda de mi cuenta en Instagram o TikTok?",
      a: "Las letras bonitas en el campo 'Presentación' (Bio) no perjudican la búsqueda. Sin embargo, para la casilla del 'Nombre de Usuario' (@handle) te sugerimos mantener caracteres normales para que tus seguidores puedan buscarte y etiquetarte sin dificultad.",
    },
    {
      q: "¿Por qué en algunos teléfonos antiguos aparecen cuadrados 🔲 al pegar el texto?",
      a: "Ocurre en dispositivos con versiones antiguas de Android o iOS que no cuentan con la tabla Unicode actualizada. Para garantizar 100% de visibilidad en cualquier dispositivo, utiliza fuentes universales como 'Small Caps (Pequeñas)', 'Negrita Sans' o 'Itálica'.",
    },
    {
      q: "¿Se pueden utilizar estas letras para uso comercial o marcas?",
      a: "Sí, todos los caracteres Unicode son estándar público internacional y su uso es 100% libre para marcas personales, logotipos sociales, campañas promocionales y publicaciones en redes.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 flex flex-col w-full overflow-x-hidden">
      {/* Top Navigation Bar */}
      <NavBar />

      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Sleek Hero Header */}
        <header className="text-center flex flex-col gap-4 w-full max-w-3xl mx-auto pt-2">
          <div className="inline-flex items-center justify-center gap-2 self-center px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 font-extrabold text-xs border border-pink-500/30 shadow-lg shadow-pink-500/10">
            <span>✨</span> Conversor Oficial con {totalStyles}+ Tipografías & {totalDecorators} Marcos Decorativos
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            Letras Bonitas: Conversor de Fuentes para Copiar y Pegar 🌸
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Transforma cualquier texto convencional en <strong className="text-pink-400 font-extrabold">letras cursivas elegantes, góticas de batalla, tipografías aesthetic, letras pequeñas y símbolos decorados</strong> al instante. Copia con un solo toque y personaliza tus perfiles de Instagram, TikTok, WhatsApp, Free Fire, Discord y Roblox de forma 100% gratuita y sin instalar aplicaciones.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-extrabold text-slate-200">
            <span className="px-4 py-2 rounded-2xl bg-[#1b1530] border border-purple-900/40 shadow-md">
              ⚡ {totalStyles}+ Estilos Unicode
            </span>
            <span className="px-4 py-2 rounded-2xl bg-[#1b1530] border border-purple-900/40 shadow-md">
              🌐 Acentos (á, é, í, ó, ú, ñ) OK
            </span>
            <span className="px-4 py-2 rounded-2xl bg-[#1b1530] border border-purple-900/40 shadow-md">
              📱 Copia en 1 Tocado
            </span>
            <span className="px-4 py-2 rounded-2xl bg-[#1b1530] border border-purple-900/40 shadow-md">
              🔒 100% Gratuito & Seguro
            </span>
          </div>
        </header>

        {/* Master Interactive Converter Tool */}
        <Converter />

        {/* GUÍA 1: El Motor Unicode y el Soporte de Acentos en Español */}
        <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 self-start border border-purple-500/30">
              🌐 Tecnología Tipográfica & Compatibilidad
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Guía Definitiva: El Motor Unicode y el Soporte Real para Acentos en Español (á, é, í, ó, ú, ñ, ç)
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Muchos usuarios se preguntan por qué al intentar transformar su nombre en conversores convencionales de la web, palabras tan comunes como <strong className="text-pink-400">"Corazón"</strong>, <strong className="text-pink-400">"Información"</strong>, <strong className="text-pink-400">"España"</strong> o <strong className="text-pink-400">"Niño"</strong> pierden sus tildes o se convierten en extraños símbolos rotos como <code className="text-rose-400 bg-rose-950/80 border border-rose-800/80 px-2 py-0.5 rounded font-mono font-bold">[?]</code>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40">
              <h3 className="font-extrabold text-base text-purple-400 flex items-center gap-2">
                <span>❌</span> El Problema de los Conversores en Inglés (ASCII Simple)
              </h3>
              <p>
                La inmensa mayoría de las herramientas generadoras creadas en internet fueron programadas originalmente para el idioma inglés, utilizando únicamente la tabla alfanumérica básica ASCII (letras de la A a la Z sin diacríticos).
              </p>
              <p>
                Cuando un usuario escribe una palabra con acento en español, esos algoritmos genéricos no encuentran una correspondencia equivalente en el alfabeto matemático Unicode en inglés, provocando que la letra acentuada sea eliminada por completo o sustituida por un carácter no reconocido.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-emerald-950/30 border border-emerald-800/50">
              <h3 className="font-extrabold text-base text-emerald-400 flex items-center gap-2">
                <span>✅</span> La Solución de Letras Bonitas: Mapeo Nativo en Español
              </h3>
              <p>
                Nuestro conversor fue construido desde cero pensando en los hablantes del idioma español y portugués. Posee un motor de traducción diferencial que detecta automáticamente vocales con tildes (á, é, í, ó, ú), diéresis (ü), la letra Ñ (mayúscula y minúscula) y la Ç.
              </p>
              <p>
                En lugar de ignorar el acento, nuestro sistema busca en el mapa estándar internacional Unicode el glifo estilizado correspondiente o aplica un diacrítico combinatorio perfecto, asegurando que tu texto mantenga una ortografía impecable sin importar el estilo elegido.
              </p>
            </div>
          </div>
        </section>

        {/* GUÍA 2: Manual Completo de Límites de Caracteres y Bytes por Plataforma */}
        <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 self-start border border-pink-500/30">
              📱 Guía Técnica por Plataforma
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Manual Completo de Límites de Caracteres y Bytes en Redes Sociales y Juegos
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Cada aplicación y videojuego gestiona el espacio de nombres de usuario y biografías mediante reglas y límites distintos. A continuación detallamos las restricciones de las principales plataformas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            {/* Free Fire */}
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
                <h3 className="font-extrabold text-base text-slate-100 flex items-center gap-2">
                  <span>🎮</span> Garena Free Fire
                </h3>
                <span className="px-3 py-1 rounded-full bg-rose-950/80 text-rose-400 text-xs font-bold border border-rose-800">
                  Límite: 12 Bytes
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Free Fire no mide la longitud en caracteres simples, sino en <strong>bytes de memoria UTF-8</strong>. Una letra normal ocupa 1 byte, pero un carácter Unicode ornamentado o símbolo matemático puede ocupar entre 2 y 4 bytes.
              </p>
              <p className="text-pink-400 leading-relaxed font-semibold">
                💡 <em>Recomendación:</em> Si deseas incluir símbolos o espacios invisibles, mantén la palabra base entre 4 y 6 letras, o utiliza nuestro estilo <strong>"Pequeñas (Small Caps)"</strong> que optimiza el consumo de memoria.
              </p>
            </div>

            {/* Instagram */}
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
                <h3 className="font-extrabold text-base text-slate-100 flex items-center gap-2">
                  <span>📸</span> Instagram (Bio & Nombre)
                </h3>
                <span className="px-3 py-1 rounded-full bg-purple-950/80 text-purple-400 text-xs font-bold border border-purple-800">
                  Límite: 150 Caracteres
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                El campo de la <strong>Presentación (Bio)</strong> admite 150 caracteres y permite el uso completo de tipografías cursivas, góticas y marcos decorados. Sin embargo, para el <strong>Nombre de Usuario (@handle)</strong> te sugerimos usar letras estándar para facilitar que tus amigos te etiqueten.
              </p>
              <p className="text-pink-400 leading-relaxed font-semibold">
                💡 <em>Recomendación:</em> Combina 1 fuente llamativa para el nombre principal y fuentes pequeñas para la línea de ocupación o llamados a la acción.
              </p>
            </div>

            {/* TikTok */}
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
                <h3 className="font-extrabold text-base text-slate-100 flex items-center gap-2">
                  <span>🎵</span> TikTok
                </h3>
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-400 text-xs font-bold border border-cyan-800">
                  Límite: 80 Caracteres
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                En TikTok la descripción de perfil es concisa (máximo 80 caracteres). Los diseños minimalistas y fuentes de trazo delgado (como <em>Outline Double-Struck</em> o <em>Small Caps</em>) funcionan excepcionalmente bien para proyectar un perfil aesthetic y profesional.
              </p>
            </div>

            {/* WhatsApp & Discord */}
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
                <h3 className="font-extrabold text-base text-slate-100 flex items-center gap-2">
                  <span>💬</span> WhatsApp & Discord
                </h3>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 text-xs font-bold border border-emerald-800">
                  139 y 32 Caracteres
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                En WhatsApp, el área de <strong>Info / Estado</strong> soporta 139 caracteres con compatibilidad total para fuentes cursivas, negritas y símbolos. En Discord, el apodo de servidor (32 caracteres) permite insertar coronas, alas y marcos góticos de forma vistosa.
              </p>
            </div>
          </div>
        </section>

        {/* GUÍA 3: El Arte de la Tipografía Digital - 6 Principios */}
        <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 self-start border border-purple-500/30">
              🎨 Diseño & Estética Digital
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              El Arte de la Tipografía Digital: 6 Principios para Crear Perfiles Aesthetic
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Un perfil atractivo en redes sociales o un nick imponente en videojuegos no depende únicamente de cambiar la letra, sino de aplicar principios fundamentales de diseño gráfico y legibilidad:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2">
              <span className="text-pink-400 font-extrabold text-sm">1. Principio de Jerarquía Visual</span>
              <p className="text-slate-300 leading-relaxed">
                Combina un máximo de 2 estilos tipográficos distintos. Usa 𝓒𝓾𝓻𝓼𝓲𝓿𝓪 para tu nombre principal y Small Caps para tus pasatiempos o enlaces.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2">
              <span className="text-pink-400 font-extrabold text-sm">2. La Regla de Oro con los Emojis</span>
              <p className="text-slate-300 leading-relaxed">
                Utiliza 1 único emoji por renglón como viñeta ordenadora. Evita saturar el texto con cadenas de emojis consecutivos que distraigan la lectura.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2">
              <span className="text-pink-400 font-extrabold text-sm">3. Pre-verificación en Bloc de Notas</span>
              <p className="text-slate-300 leading-relaxed">
                Antes de gastar diamantes en Free Fire o modificar tu bio de Instagram, pega el texto en la aplicación de notas de tu celular para comprobar la alineación.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2">
              <span className="text-pink-400 font-extrabold text-sm">4. Ahorro de Espacio con Small Caps</span>
              <p className="text-slate-300 leading-relaxed">
                Las letras pequeñas en formato ᴘᴇǫᴜᴇñᴀs ocuparás un 30% menos de ancho visual, permitiéndote escribir frases más extensas sin cortar la línea.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2">
              <span className="text-pink-400 font-extrabold text-sm">5. Espacio Invisible (U+3164) en Clanes</span>
              <p className="text-slate-300 leading-relaxed">
                Inserta el carácter transparente Unicode (U+3164) para separar la sigla de tu clan del apodo personal en eSports, creando un estilo pro y ordenado.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-2">
              <span className="text-pink-400 font-extrabold text-sm">6. Adaptación según el Contexto</span>
              <p className="text-slate-300 leading-relaxed">
                Utiliza tipografías sobrias para perfiles profesionales y reserva estilos góticos o con símbolos llamativos para comunidades de videojuegos y entretenimiento.
              </p>
            </div>
          </div>
        </section>

        {/* GUÍA 4: Solución de Problemas Frecuentes (Troubleshooting) */}
        <TroubleshootingSection />

        {/* GUÍA 5: 50+ Ejemplos y Plantillas de Texto Listos por Categoría */}
        <ExamplesSection />

        {/* GUÍA 6: Preguntas Frecuentes Expandidas (FAQ) */}
        <FaqSection title="Preguntas Frecuentes sobre el Conversor de Letras" faqs={faqsList} />
      </main>
    </div>
  );
}
