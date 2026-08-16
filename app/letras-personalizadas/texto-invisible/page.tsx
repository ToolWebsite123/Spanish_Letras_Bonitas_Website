import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import InvisibleTextGenerator from "@/components/InvisibleTextGenerator";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Texto Invisible - Espacio en Blanco para Copiar 👻",
  description:
    "Generador y copiador de texto invisible y caracteres transparentes en blanco (U+3164, U+200B) para WhatsApp, Instagram, Free Fire y Roblox.",
  alternates: {
    canonical: "/letras-personalizadas/texto-invisible",
  },
};

const faqs = [
  {
    q: "¿Cómo envío un mensaje en blanco?",
    a: "Copia el texto invisible desde el generador con el botón de Copiar y pégalo directamente en la casilla de chat de WhatsApp, Instagram o Discord para enviarlo como mensaje en blanco.",
  },
  {
    q: "¿Qué carácter invisible funciona mejor?",
    a: "El carácter Hangul Filler (U+3164) es el más compatible y efectivo para nombres de usuario invisibles en juegos como Free Fire, PUBG y Roblox.",
  },
  {
    q: "¿El texto invisible funciona en todas las plataformas?",
    a: "Funciona en la inmensa mayoría de aplicaciones (WhatsApp, Instagram, TikTok, Discord, juegos), aunque algunas plataformas con filtros específicos pueden requerir caracteres alternativos como el patrón Braille (U+2800).",
  },
  {
    q: "¿Puedo usar texto invisible en nombres de usuario?",
    a: "Sí, es el método preferido para crear apodos vacíos o invisibles en videojuegos y nombres sin texto en redes sociales.",
  },
  {
    q: "¿Por qué a veces no se copia el texto invisible?",
    a: "Al no ser visible a simple vista, algunos navegadores o editores pueden parecer no seleccionar nada. Al presionar el botón 'Copiar' de nuestra herramienta te aseguras de guardarlo en tu portapapeles.",
  },
  {
    q: "¿Cuál es la diferencia entre texto invisible y un espacio normal?",
    a: "El espacio común de la barra espaciadora (U+0020) es detectado y recortado (trimmed) por los sistemas web, mientras que los caracteres invisibles Unicode se reconocen como caracteres de texto reales que no se eliminan.",
  },
  {
    q: "¿El texto invisible es seguro de usar?",
    a: "Sí, es 100% seguro y limpio. No contiene códigos maliciosos ni altera el funcionamiento de tus aplicaciones.",
  },
  {
    q: "¿Funciona en formularios web y casillas de registro?",
    a: "Sí, permite rellenar campos obligatorios que exigen caracteres sin mostrar texto visible.",
  },
  {
    q: "¿Puedo usarlo para crear apodos vacíos en juegos?",
    a: "Por supuesto, es la técnica estándar para lucir un nombre transparente en Free Fire, PUBG, Roblox, Fortnite y Clash Royale.",
  },
  {
    q: "¿Hay un límite de caracteres invisibles que puedo generar?",
    a: "No, en la herramienta puedes seleccionar desde 1 hasta 100 caracteres invisibles según lo requiera tu aplicación.",
  },
];

export default function TextoInvisiblePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 pt-3 sm:pt-4 pb-8 sm:pb-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* Compact Hero Header */}
        <header className="flex flex-col gap-1">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Texto Invisible: Generador de Espacio en Blanco para Copiar
          </h1>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed font-medium mt-1">
            El texto invisible (o espacio en blanco transparente) es una herramienta digital que permite generar caracteres Unicode invisibles. Sirve para enviar mensajes vacíos en WhatsApp, crear nombres de usuario transparentes en videojuegos como Free Fire o Roblox, y colocar saltos de línea o espacios en publicaciones de Instagram donde los espacios normales son eliminados automáticamente.
          </p>
        </header>

        {/* Real Working Invisible Text Generator Tool */}
        <InvisibleTextGenerator />

        {/* SECTION 1: ¿Qué es el texto invisible? */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            ¿Qué es el texto invisible?
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            A nivel técnico, el texto invisible no es una ausencia de caracteres ni un truco de formato visual. Se trata de caracteres legítimos codificados bajo el estándar internacional **Unicode** que han sido diseñados específicamente para ocupar un espacio tipográfico sin representar ningún símbolo gráfico visible.
          </p>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Cuando copias un texto invisible, la computadora o teléfono móvil interpreta ese bloque como texto real existente. Por esta razón, los servidores de videojuegos y redes sociales lo procesan correctamente como una cadena de caracteres válida sin rechazar el campo por estar vacío.
          </p>
        </section>

        {/* SECTION 2: Cómo utilizar el Generador de Espacio en Blanco */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Cómo utilizar el Generador de Espacio en Blanco
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <strong className="text-[var(--foreground)] font-bold">Mediante Copia Rápida (Método 1):</strong>
              <p className="opacity-80 leading-relaxed">
                Presiona cualquiera de los 3 botones predefinidos (Pequeño, Mediano o Grande). El texto transparente se copiará inmediatamente a tu portapapeles listo para usar.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <strong className="text-[var(--foreground)] font-bold">Mediante Generación Personalizada (Método 2):</strong>
              <p className="opacity-80 leading-relaxed">
                Usa los botones + / − para seleccionar la cantidad exacta de espacios que necesitas (por ejemplo, 15 caracteres) y haz clic en el botón de copiar.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: ¿Dónde se puede utilizar el texto invisible? */}
        <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            ¿Dónde se puede utilizar el texto invisible?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            {/* Sub-block 1: Redes Sociales */}
            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>📱</span> En Redes Sociales y Mensajería
              </h3>
              <ul className="flex flex-col gap-2 text-[var(--foreground)] opacity-80 leading-relaxed">
                <li>• <strong>WhatsApp:</strong> Envía mensajes totalmente en blanco a tus contactos o grupos.</li>
                <li>• <strong>Instagram:</strong> Inserta saltos de línea limpios en descripciones de publicaciones y biografías.</li>
                <li>• <strong>Discord:</strong> Crea nombres de canal vacíos o nombres de servidor con formato especial.</li>
                <li>• <strong>TikTok y Twitter/X:</strong> Deja comentarios vacíos o limpia la biografía de perfil.</li>
              </ul>
            </div>

            {/* Sub-block 2: Videojuegos */}
            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🎮</span> En Videojuegos (Apodos y Nicks)
              </h3>
              <ul className="flex flex-col gap-2 text-[var(--foreground)] opacity-80 leading-relaxed">
                <li>• <strong>Free Fire:</strong> Crea un nick invisible o con espacios intermedios que el juego normalmente bloquea.</li>
                <li>• <strong>PUBG Mobile:</strong> Oculta tu nombre en las partidas para un estilo único.</li>
                <li>• <strong>Roblox:</strong> Diseña nombres de visualización (Display Names) invisibles o separados.</li>
                <li>• <strong>Fortnite &amp; Clash Royale:</strong> Personaliza tu nombre de usuario y clanes sin caracteres normales.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: Tabla Comparativa de Caracteres Unicode Invisibles */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50 overflow-x-auto">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Comparativa de Caracteres Unicode Invisibles
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            No todos los espacios invisibles son iguales. A continuación te presentamos una tabla comparativa de los principales caracteres transparentes Unicode y su nivel de compatibilidad:
          </p>

          <table className="w-full text-left text-xs sm:text-sm border-collapse mt-2">
            <thead>
              <tr className="border-b border-[var(--border-color)] text-teal-600 dark:text-teal-400 font-extrabold">
                <th className="py-2.5 px-3">Carácter</th>
                <th className="py-2.5 px-3">Unicode</th>
                <th className="py-2.5 px-3">Nombre Oficial</th>
                <th className="py-2.5 px-3">Mejor Uso Recomendado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]/60 text-[var(--foreground)] opacity-90">
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold">[ &#8203; ]</td>
                <td className="py-2.5 px-3 font-mono">U+200B</td>
                <td className="py-2.5 px-3">Zero Width Space</td>
                <td className="py-2.5 px-3">Ocultar texto o saltar filtros sin ocupar espacio físico.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold">[ &#12544; ]</td>
                <td className="py-2.5 px-3 font-mono">U+3164</td>
                <td className="py-2.5 px-3">Hangul Filler</td>
                <td className="py-2.5 px-3">La opción #1 para apodos invisibles en Free Fire, PUBG y Roblox.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold">[ &nbsp; ]</td>
                <td className="py-2.5 px-3 font-mono">U+00A0</td>
                <td className="py-2.5 px-3">Non-Breaking Space</td>
                <td className="py-2.5 px-3">Prevenir saltos de línea automáticos en maquetación web.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold">[ &#12288; ]</td>
                <td className="py-2.5 px-3 font-mono">U+3000</td>
                <td className="py-2.5 px-3">Ideographic Space</td>
                <td className="py-2.5 px-3">Formularios asiáticos y campos que exigen ancho completo.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold">[ &#10240; ]</td>
                <td className="py-2.5 px-3 font-mono">U+2800</td>
                <td className="py-2.5 px-3">Braille Pattern Blank</td>
                <td className="py-2.5 px-3">Superar filtros de recorte estrictos (trimming) en apps modernas.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* SECTION 5: Por qué el espacio invisible no funciona a veces */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Por qué el espacio invisible no funciona a veces
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-bold text-slate-800 dark:text-slate-100">Restricciones de la plataforma:</h3>
              <p className="opacity-80 leading-relaxed">
                Algunas redes sociales implementan filtros de seguridad que analizan y bloquean ciertos rangos de caracteres Unicode.
              </p>
              <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 mt-auto">💡 Consejo: Prueba cambiar del método estándar al carácter Braille (U+2800).</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-bold text-slate-800 dark:text-slate-100">Carácter Unicode incorrecto:</h3>
              <p className="opacity-80 leading-relaxed">
                Usar un espacio común de teclado (U+0020) provocará que el sistema lo elimine automáticamente.
              </p>
              <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 mt-auto">💡 Consejo: Utiliza siempre el botón de copiar de nuestra herramienta.</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-bold text-slate-800 dark:text-slate-100">Problemas al copiar:</h3>
              <p className="opacity-80 leading-relaxed">
                Al seleccionar manualmente con el ratón es fácil no abarcar el rango invisible.
              </p>
              <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 mt-auto">💡 Consejo: Usa los botones de copiar automático o prueba en el área de prueba.</span>
            </div>
          </div>
        </section>

        {/* SECTION 6: Beneficios de usar texto invisible */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Beneficios de usar texto invisible
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span> Permite enviar mensajes vacíos en plataformas que lo prohíben.
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span> Oculta o separa tu nick en juegos competitivos.
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span> Mejora el diseño y espaciado de perfiles en Instagram y TikTok.
            </li>
            <li className="p-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-center gap-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span> Es 100% compatible con teclados de teléfonos móviles y PC.
            </li>
          </ul>
        </section>

        {/* SECTION 7: Texto invisible vs. espacio normal */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Texto invisible vs. espacio normal: ¿cuál es la diferencia?
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            La diferencia fundamental radica en cómo el código de programación interpreta cada carácter. El espacio normal (producido por la barra espaciadora, código U+0020) está clasificado en la informática como un separador de palabras estándar. Cuando un formulario de registro o casilla de chat recibe únicamente espacios normales, ejecuta una función llamada <em>trimming</em> que elimina los espacios iniciales y finales, detectando la casilla como vacía.
          </p>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            En cambio, los caracteres del **Texto Invisible** (como U+3164 o U+2800) están categorizados en Unicode como símbolos o letras completas (por ejemplo, rellenos tipográficos del alfabeto coreano). Por ello, los servidores los procesan como contenido de texto real y no aplican el filtro de recorte, permitiendo guardar nombres de usuario o enviar mensajes en blanco.
          </p>
        </section>

        {/* SECTION 8: FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Texto Invisible" faqs={faqs} />

        {/* SECTION 9: Conclusión */}
        <section className="p-6 rounded-2xl bg-[#ede7df]/50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/60 flex flex-col gap-2 text-xs sm:text-sm">
          <h3 className="font-extrabold text-base text-[var(--foreground)]">Conclusión</h3>
          <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
            El texto invisible es una solución versátil y práctica para personalizar tus perfiles sociales, mensajes de chat y apodos en videojuegos sin limitaciones. Con nuestro generador gratuito puedes copiar al instante el espacio transparente que mejor se adapte a tus necesidades.
          </p>
        </section>
      </main>
    </div>
  );
}
