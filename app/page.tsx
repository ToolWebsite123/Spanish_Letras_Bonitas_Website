import Link from "next/link";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import ExamplesSection from "@/components/ExamplesSection";
import TroubleshootingSection from "@/components/TroubleshootingSection";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";
import fontStyles from "@/lib/fontStyles";
import convertText from "@/lib/convertText";
import decorators from "@/lib/decorators";

export default function Home() {
  const totalStyles = fontStyles.length;
  const totalDecorators = decorators.length;

  const cursiveStyle = fontStyles.find((f) => f.id === "cursive") || fontStyles[0];
  const occasionTemplates = [
    { category: "🎂 Cumpleaños", phrase: "¡Feliz Cumpleaños!" },
    { category: "🏡 Bienvenida", phrase: "Bienvenidos a Nuestra Casa" },
    { category: "🙏 Agradecimiento", phrase: "Muchas Gracias por Tu Apoyo" },
    { category: "💍 Boda", phrase: "Nuestra Boda Especial" },
    { category: "🎄 Navidad", phrase: "Feliz Navidad y Próspero Año Nuevo" },
  ];

  const faqsList = [
    {
      q: "¿El conversor de letras bonitas es 100% gratuito?",
      a: "Sí, es totalmente gratuito para siempre. Todos los estilos, marcos decorativos, contadores de caracteres y funciones de copia están disponibles sin costo, sin anuncios invasivos y sin necesidad de crear cuenta ni descargar aplicaciones.",
    },
    {
      q: "¿Por qué este conversor es el único que preserva los acentos en español (á, é, í, ó, ú, ñ)?",
      a: "La gran mayoría de conversores en internet fueron desarrollados para el mercado anglosajón (alfabeto ASCII simple), por lo que palabras en español como 'Corazón', 'Información' o 'Niño' pierden sus tildes o se convierten en símbolos rotos [?]. Nuestro conversor integra un motor adaptado exclusivamente para el idioma español que preserva y estiliza automáticamente todas las vocales acentuadas (á, é, í, ó, ú) y la letra Ñ.",
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col w-full overflow-x-hidden">
      {/* Top Navigation Bar */}
      <NavBar />

      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Sleek Hero Header */}
        <header className="text-center flex flex-col gap-4 w-full max-w-3xl mx-auto pt-2">
          <div className="inline-flex items-center justify-center gap-2 self-center px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-extrabold text-xs border border-teal-500/30 shadow-lg shadow-teal-500/10">
            <span>✨</span> Conversor Oficial con {totalStyles}+ Tipografías & {totalDecorators} Marcos Decorativos
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Letras Bonitas: Conversor de Fuentes para Copiar y Pegar 🌸
          </h1>

          <p className="text-base sm:text-lg text-[var(--foreground)] opacity-80 max-w-3xl mx-auto leading-relaxed font-medium">
            Eleva tu presencia digital y dale una personalidad única a tus publicaciones. Transforma cualquier texto plano en hermosas <Link href="/letras-bonitas/letras-cursivas" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">letras cursivas elegantes</Link>, tipografías aesthetic y trazos de impacto. Copia en 1 toque y destaca con los mejores <Link href="/nicks-para-juegos/nick-free-fire" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">nicks para Free Fire</Link>, biografías de Instagram, WhatsApp y TikTok de forma 100% gratuita.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-extrabold text-[var(--foreground)]">
            <span className="px-4 py-2 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-md">
              ⚡ {totalStyles}+ Estilos Unicode
            </span>
            <span className="px-4 py-2 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-md">
              🌐 Acentos (á, é, í, ó, ú, ñ) OK
            </span>
            <span className="px-4 py-2 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-md">
              📱 Copia en 1 Tocado
            </span>
            <span className="px-4 py-2 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-md">
              🔒 100% Gratuito & Seguro
            </span>
          </div>
        </header>

        {/* Master Interactive Converter Tool */}
        <Converter />

        {/* SECTION A — Cómo Usar el Conversor de Letras Bonitas en 3 Pasos */}
        <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-400 self-start border border-teal-500/30">
              ⚡ Paso a Paso
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cómo Usar el Conversor de Letras Bonitas en 3 Pasos
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Generar fuentes tipográficas elegantes y símbolos únicos es súper sencillo y no requiere instalar ninguna aplicación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/30 flex items-center justify-center font-black text-base">
                1
              </div>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                1. Escribe tu texto
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Introduce tu palabra, frase, nombre o biografía en el cuadro de texto principal. El conversor procesa los caracteres en tiempo real.
              </p>
              <div className="mt-auto pt-2 text-xs text-teal-700 dark:text-teal-400 font-medium bg-teal-500/5 p-2.5 rounded-xl border border-teal-500/20">
                💡 <strong>Tip:</strong> Puedes incluir letras con tildes (á, é, í, ó, ú) y la letra Ñ sin problemas.
              </div>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/30 flex items-center justify-center font-black text-base">
                2
              </div>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                2. Elige tu estilo favorito
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Explora la vista previa instantánea con más de 29 tipografías Unicode (cursivas, negritas, aesthetic, japonesas, de bloque, etc.).
              </p>
              <div className="mt-auto pt-2 text-xs text-teal-700 dark:text-teal-400 font-medium bg-teal-500/5 p-2.5 rounded-xl border border-teal-500/20">
                💡 <strong>Tip:</strong> Utiliza los filtros rápidos por categoría o los marcos decorativos para personalizar aún más tu texto.
              </div>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/30 flex items-center justify-center font-black text-base">
                3
              </div>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                3. Copia y pega donde quieras
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Haz clic o toca el botón "Copiar" al lado de la fuente que más te guste. ¡Listo! Pégalo directamente en Instagram, WhatsApp, Free Fire, TikTok, Discord o Facebook.
              </p>
              <div className="mt-auto pt-2 text-xs text-teal-700 dark:text-teal-400 font-medium bg-teal-500/5 p-2.5 rounded-xl border border-teal-500/20">
                💡 <strong>Tip:</strong> Si una red social corta el texto, consulta nuestra guía de límites de caracteres y bytes.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION B — ¿Dónde Puedes Usar tus Letras Bonitas? */}
        <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-400 self-start border border-teal-500/30">
              🎯 Usos & Aplicaciones
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              ¿Dónde Puedes Usar tus Letras Bonitas?
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Nuestras fuentes y alfabetos Unicode son 100% compatibles con las principales aplicaciones web, móviles y videojuegos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">📸</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Redes Sociales (Instagram, TikTok, Facebook, Twitter/X)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Destaca en biografías, pies de foto, historias, comentarios y nombres de perfil. Ideal para creadores de contenido y marcas personales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🎮</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Videojuegos (Free Fire, Roblox, PUBG, Minecraft, LoL)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Diseña nicks imponentes con coronas, alas, armas y caracteres especiales para que tu apodo sea único en la tabla de clasificación.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🎨</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Arte y Diseño Gráfico
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utiliza las tipografías para bocetos de caligrafía, diseños de logotipos, vectores ornamentales y publicaciones estéticas en Pinterest o Canva.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">📚</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Trabajos y Presentaciones
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Aporta un toque elegante a títulos de documentos, portadas de proyectos escolares, firmas digitales y encabezados de correo electrónico.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3 md:col-span-2 lg:col-span-2">
              <span className="text-2xl">💬</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Mensajes Personales (WhatsApp, Telegram, Discord)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Sorprende a tus amigos y familiares enviando mensajes con letras bonitas, felicitaciones decoradas y estados originales.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION C — Frases y Letras Bonitas para Cada Ocasión */}
        <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-400 self-start border border-teal-500/30">
              🎉 Inspiración & Plantillas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Frases y Letras Bonitas para Cada Ocasión
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Encuentra la frase perfecta estilizada para celebrar momentos especiales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs sm:text-sm">
            {occasionTemplates.map((item, idx) => {
              const converted = convertText(item.phrase, cursiveStyle.map, cursiveStyle.id);
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-400 self-start border border-teal-500/30">
                    {item.category}
                  </span>
                  <p className="text-[var(--foreground)] font-semibold text-xs opacity-75">
                    "{item.phrase}"
                  </p>
                  <div className="p-3.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] font-mono text-sm sm:text-base text-teal-700 dark:text-teal-300 break-words flex items-center justify-between gap-2 shadow-inner">
                    <span className="select-all">{converted}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* GUÍA 1: El Motor Unicode y el Soporte de Acentos en Español */}
        <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🌐 Tecnología Tipográfica & Compatibilidad
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Guía Definitiva: El Motor Unicode y el Soporte Real para Acentos en Español (á, é, í, ó, ú, ñ)
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Muchos usuarios se preguntan por qué al intentar transformar su nombre en conversores convencionales de la web, palabras tan comunes como <strong className="text-teal-600 dark:text-teal-400">"Corazón"</strong>, <strong className="text-teal-600 dark:text-teal-400">"Información"</strong>, <strong className="text-teal-600 dark:text-teal-400">"España"</strong> o <strong className="text-teal-600 dark:text-teal-400">"Niño"</strong> pierden sus tildes o se convierten en extraños símbolos rotos como <code className="text-rose-700 dark:text-rose-400 bg-rose-950/80 border border-rose-800/80 px-2 py-0.5 rounded font-mono font-bold">[?]</code>. Prueba nuestro <Link href="/letras-bonitas/caligrafia" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">conversor de caligrafía</Link> o consulta el <Link href="/letras-bonitas/letras-cursivas" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">abecedario cursivo completo</Link> para verificar la ortografía.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[var(--foreground)] opacity-85 leading-relaxed">
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400 flex items-center gap-2">
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
              <h3 className="font-extrabold text-base text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                <span>✅</span> La Solución de Letras Bonitas: Mapeo Nativo en Español
              </h3>
              <p>
                Nuestro conversor fue construido desde cero pensando en los hablantes del idioma español. Posee un motor de traducción diferencial que detecta automáticamente vocales con tildes (á, é, í, ó, ú), diéresis (ü) y la letra Ñ (mayúscula y minúscula).
              </p>
              <p>
                En lugar de ignorar el acento, nuestro sistema busca en el mapa estándar internacional Unicode el glifo estilizado correspondiente o aplica un diacrítico combinatorio perfecto, asegurando que tu texto mantenga una ortografía impecable sin importar el estilo elegido.
              </p>
            </div>
          </div>
        </section>

        {/* GUÍA 2: Manual Completo de Límites de Caracteres y Bytes por Plataforma */}
        <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📱 Guía Técnica por Plataforma
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Manual Completo de Límites de Caracteres y Bytes en Redes Sociales y Juegos
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Cada aplicación y videojuego gestiona el espacio de nombres de usuario y biografías mediante reglas y límites distintos. A continuación detallamos las restricciones de las principales plataformas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            {/* Free Fire */}
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                  <span>🎮</span> Garena Free Fire
                </h3>
                <span className="px-3 py-1 rounded-full bg-rose-950/80 text-rose-700 dark:text-rose-400 text-xs font-bold border border-rose-800">
                  Límite: 12 Bytes
                </span>
              </div>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Free Fire no mide la longitud en caracteres simples, sino en <strong>bytes de memoria UTF-8</strong>. Revisa nuestras colecciones dedicadas de <Link href="/nicks-para-juegos/nick-free-fire-masculino" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">nicks masculinos</Link>, <Link href="/nicks-para-juegos/nick-free-fire-femenino" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">nicks femeninos</Link>, la guía para <Link href="/nicks-para-juegos/cambiar-nick-free-fire" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">cambiar tu apodo en Free Fire</Link> y los códigos para <Link href="/nicks-para-juegos/bio-colorida-free-fire" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">firmas de colores</Link>.
              </p>
            </div>

            {/* Instagram */}
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                  <span>📸</span> Instagram (Bio & Nombre)
                </h3>
                <span className="px-3 py-1 rounded-full bg-purple-950/80 text-purple-600 dark:text-purple-400 text-xs font-bold border border-purple-800">
                  Límite: 150 Caracteres
                </span>
              </div>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                El campo de la <strong>Presentación (Bio)</strong> admite 150 caracteres. Complementa tu perfil con nuestra guía de <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">fuentes para la Bio de Instagram</Link>, <Link href="/simbolos-aesthetic/emojis-para-copiar" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">emojis para copiar</Link> y <Link href="/simbolos-aesthetic/simbolos-coquette" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">símbolos coquette</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Related Categories internal linking widget for Homepage */}
        <RelatedCategoriesWidget currentPath="/" />

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
