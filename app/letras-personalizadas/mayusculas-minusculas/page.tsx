import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import CaseConverter from "@/components/CaseConverter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Mayúsculas a Minúsculas - Convertidor de Texto en Línea 🔤",
  description:
    "Herramienta gratis para convertir texto de mayúsculas a minúsculas, formato oración, formato título o alternado de forma instantánea.",
  alternates: {
    canonical: "/letras-personalizadas/mayusculas-minusculas",
  },
};

const faqs = [
  {
    q: "¿Cómo convertir mayúsculas a minúsculas en línea?",
    a: "Pega tu texto en el recuadro del conversor y haz clic en el botón 'minúsculas'. La herramienta transformará automáticamente todas las letras mayúsculas a minúsculas sin alterar los signos de puntuación.",
  },
  {
    q: "¿Cómo convertir un texto completo a mayúsculas?",
    a: "Introduce el párrafo deseado y presiona el botón 'MAYÚSCULAS'. Todas las letras minúsculas se convertirán al instante a mayúsculas.",
  },
  {
    q: "¿Qué significa capitalizar texto?",
    a: "Capitalizar texto consiste en transformar la primera letra de cada palabra a mayúscula, dejando el resto de letras en minúsculas (ejemplo: 'Aprender A Escribir').",
  },
  {
    q: "¿Cómo cambiar el formato del texto de forma rápida?",
    a: "Solo debes pegar tu texto en la casilla principal y hacer clic en cualquiera de los botones de formato (Oración, minúsculas, MAYÚSCULAS, Capitalizar, Alternado o Invertido).",
  },
  {
    q: "¿Cuál es la diferencia entre formato oración y formato título?",
    a: "El formato oración solo pone en mayúscula la primera letra de cada frase tras un punto, mientras que el formato título pone en mayúscula la primera letra de absolutamente todas las palabras.",
  },
  {
    q: "¿Qué es el texto alternado (aLtErNaDo)?",
    a: "Es un estilo de escritura que alterna intercaladamente letras minúsculas y mayúsculas, popular en memes, redes sociales y nicks de videojuegos.",
  },
  {
    q: "¿Para qué sirve el texto invertido (iNvErSo)?",
    a: "Sirve para intercambiar el estado de las letras: si una letra era mayúscula pasa a minúscula y viceversa, lo que resulta útil para corregir textos escritos accidentalmente con el bloqueo de mayúsculas activado.",
  },
  {
    q: "¿La herramienta funciona con textos largos o documentos completos?",
    a: "Sí, el conversor soporta desde una sola palabra hasta párrafos extensos y documentos completos sin límite de caracteres.",
  },
  {
    q: "¿Puedo usar el convertidor de mayúsculas a minúsculas en mi teléfono móvil?",
    a: "Por supuesto. Es 100% compatible con navegadores de dispositivos móviles Android, iPhone, tabletas y ordenadores de escritorio.",
  },
  {
    q: "¿El uso del conversor es totalmente gratis y sin registro?",
    a: "Sí, la herramienta es totalmente gratuita, libre de anuncios invasivos y no requiere registro ni instalación de programas.",
  },
];

export default function MayusculasMinusculasPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 pt-3 sm:pt-4 pb-8 sm:pb-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* Compact Hero Header */}
        <header className="flex flex-col gap-1">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Mayúsculas a Minúsculas: Convertidor de Texto en Línea
          </h1>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed font-medium mt-1">
            El convertidor de mayúsculas a minúsculas en línea es una herramienta gratuita diseñada para cambiar el formato de cualquier texto de manera instantánea. Es perfecta para estudiantes, redactores, community managers, programadores y oficinistas que necesitan corregir títulos, mensajes de redes sociales o documentos sin tener que reescribir manualmente. Solo basta con ingresar el texto y seleccionar la transformación deseada con un solo clic.
          </p>
        </header>

        {/* Real Functional Case Converter Tool */}
        <CaseConverter />

        {/* SECTION 1: Convierte fácilmente mayúsculas a minúsculas */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Convierte fácilmente mayúsculas a minúsculas
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Si has escrito un texto entero con el bloqueo de mayúsculas activado por error, no necesitas volver a teclearlo desde cero. Nuestra herramienta transforma al instante todas las letras mayúsculas en minúsculas limpias y legibles, manteniendo intactos los signos de puntuación y espaciados originales.
          </p>
          <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 font-mono">
              <span className="font-bold text-rose-500 shrink-0">ANTES:</span>
              <span className="text-[var(--foreground)] opacity-90">&quot;HOLA, ESTE TEXTO ESTÁ EN MAYÚSCULAS Y NECESITO CAMBIARLO&quot;</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 font-mono pt-1 border-t border-[var(--border-color)]/60">
              <span className="font-bold text-emerald-500 shrink-0">DESPUÉS:</span>
              <span className="text-[var(--foreground)] font-semibold">&quot;hola, este texto está en minúsculas y necesito cambiarlo&quot;</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: Convierte minúsculas a mayúsculas */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Convierte minúsculas a mayúsculas
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Cuando necesitas resaltar un mensaje importante, crear encabezados impactantes o preparar avisos legales, la conversión a letras mayúsculas permite transformar cualquier párrafo en cuestión de segundos.
          </p>
          <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 font-mono">
              <span className="font-bold text-rose-500 shrink-0">ANTES:</span>
              <span className="text-[var(--foreground)] opacity-90">&quot;este mensaje necesita resaltar en letras mayúsculas&quot;</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 font-mono pt-1 border-t border-[var(--border-color)]/60">
              <span className="font-bold text-emerald-500 shrink-0">DESPUÉS:</span>
              <span className="text-[var(--foreground)] font-semibold">&quot;ESTE MENSAJE NECESITA RESALTAR EN LETRAS MAYÚSCULAS&quot;</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: Capitaliza el texto automáticamente */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Capitaliza el texto automáticamente
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            La opción de capitalizar asigna automáticamente una letra mayúscula al comienzo de cada palabra. Es la solución idónea para formatear listas de nombres propios, títulos de libros, artículos de blog o nombres de productos en tiendas en línea.
          </p>
          <div className="p-4 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 font-mono">
              <span className="font-bold text-rose-500 shrink-0">ANTES:</span>
              <span className="text-[var(--foreground)] opacity-90">&quot;aprender a escribir mejor en redes sociales&quot;</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 font-mono pt-1 border-t border-[var(--border-color)]/60">
              <span className="font-bold text-emerald-500 shrink-0">DESPUÉS:</span>
              <span className="text-[var(--foreground)] font-semibold">&quot;Aprender A Escribir Mejor En Redes Sociales&quot;</span>
            </div>
          </div>
        </section>

        {/* SECTION 4: Formatos avanzados de texto */}
        <section className="flex flex-col gap-6 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-2 border-b border-[var(--border-color)] pb-4">
            <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
              Formatos avanzados de texto
            </h2>
            <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80">
              Además de las conversiones tradicionales, nuestra herramienta incluye modos avanzados para adaptar cualquier texto a tus necesidades específicas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            {/* Sub-card 1: Formato Oración */}
            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>📝</span> Formato Oración (Sentence Case)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Coloca en mayúscula únicamente la primera letra de la primera palabra de cada oración (tras puntos o al inicio del texto), manteniendo el resto en minúsculas.
              </p>
              <div className="p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col gap-1 font-mono text-xs">
                <div><span className="text-rose-500 font-bold">ANTES:</span> &quot;ESTA ES LA PRIMERA ORACIÓN. Y ESTA ES LA SEGUNDA.&quot;</div>
                <div><span className="text-emerald-500 font-bold">DESPUÉS:</span> &quot;Esta es la primera oración. Y esta es la segunda.&quot;</div>
              </div>
            </div>

            {/* Sub-card 2: Formato Título */}
            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🏷️</span> Formato Título (Title Case)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Convierte la letra inicial de cada palabra en mayúscula, perfecto para titulares, portadas de proyectos o nombres comerciales.
              </p>
              <div className="p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col gap-1 font-mono text-xs">
                <div><span className="text-rose-500 font-bold">ANTES:</span> &quot;guía completa para formatear textos&quot;</div>
                <div><span className="text-emerald-500 font-bold">DESPUÉS:</span> &quot;Guía Completa Para Formatear Textos&quot;</div>
              </div>
            </div>

            {/* Sub-card 3: Texto Alternado */}
            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🔀</span> Texto Alternado (aLtErNaDo)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Alterna caracteres entre minúsculas y mayúsculas sucesivamente para dar un estilo divertido o irónico en redes sociales y nombres de usuarios.
              </p>
              <div className="p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col gap-1 font-mono text-xs">
                <div><span className="text-rose-500 font-bold">ANTES:</span> &quot;texto de ejemplo&quot;</div>
                <div><span className="text-emerald-500 font-bold">DESPUÉS:</span> &quot;tExTo De EjEmPlO&quot;</div>
              </div>
            </div>

            {/* Sub-card 4: Texto Invertido */}
            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🔄</span> Texto Invertido (iNvErSo)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Invierte el estado de cada letra: las mayúsculas pasan a minúsculas y las minúsculas se convierten en mayúsculas.
              </p>
              <div className="p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col gap-1 font-mono text-xs">
                <div><span className="text-rose-500 font-bold">ANTES:</span> &quot;Hola Mundo&quot;</div>
                <div><span className="text-emerald-500 font-bold">DESPUÉS:</span> &quot;hOLA mUNDO&quot;</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Casos de uso del conversor */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Casos de uso del conversor
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Nuestra herramienta es utilizada diariamente en diversos entornos profesionales y personales:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <li className="p-4 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-start gap-2.5">
              <span className="text-teal-600 dark:text-teal-400 font-black">✓</span>
              <div>
                <strong className="text-[var(--foreground)] block">Redactar publicaciones para redes sociales:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  Crea títulos llamativos y copys limpios para Instagram, TikTok, Facebook y Twitter.
                </span>
              </div>
            </li>
            <li className="p-4 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-start gap-2.5">
              <span className="text-teal-600 dark:text-teal-400 font-black">✓</span>
              <div>
                <strong className="text-[var(--foreground)] block">Corregir texto copiado de otras fuentes:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  Limpia párrafos procedentes de archivos PDF o correos que venían completamente en mayúsculas.
                </span>
              </div>
            </li>
            <li className="p-4 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-start gap-2.5">
              <span className="text-teal-600 dark:text-teal-400 font-black">✓</span>
              <div>
                <strong className="text-[var(--foreground)] block">Preparar títulos de artículos y blogs:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  Aplica formato título o formato oración de manera homogénea en tus publicaciones.
                </span>
              </div>
            </li>
            <li className="p-4 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-start gap-2.5">
              <span className="text-teal-600 dark:text-teal-400 font-black">✓</span>
              <div>
                <strong className="text-[var(--foreground)] block">Ahorrar tiempo al formatear documentos:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  Evita tener que reescribir manualmente oraciones o listas extensas de nombres.
                </span>
              </div>
            </li>
          </ul>
        </section>

        {/* SECTION 6: Cómo cambiar entre mayúsculas y minúsculas en Word */}
        <section className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--foreground)]">
            Cómo cambiar entre mayúsculas y minúsculas en Word
          </h2>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Si estás trabajando directamente en Microsoft Word, puedes utilizar el atajo de teclado <kbd className="px-2 py-0.5 rounded bg-[var(--input-bg)] border border-[var(--border-color)] font-mono font-bold text-xs">Shift + F3</kbd> (Mayús + F3) tras seleccionar el texto deseado. Este atajo alternará de forma cíclica entre mayúsculas, minúsculas y formato título.
          </p>
          <p className="text-xs sm:text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
            Sin embargo, si estás trabajando con contenidos copiados desde navegadores web, documentos PDF, mensajes de WhatsApp o desde un teléfono móvil donde no dispones de Microsoft Word, nuestro conversor web en línea es la alternativa más rápida, cómoda y accesible sin necesidad de abrir ningún programa pesado.
          </p>
        </section>

        {/* SECTION 7: Preguntas Frecuentes */}
        <FaqSection title="Preguntas Frecuentes sobre Mayúsculas y Minúsculas" faqs={faqs} />

        {/* SECTION 8: Conclusión */}
        <section className="p-6 rounded-2xl bg-[#ede7df]/50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/60 flex flex-col gap-2 text-xs sm:text-sm">
          <h3 className="font-extrabold text-base text-[var(--foreground)]">Conclusión</h3>
          <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
            El convertidor de mayúsculas a minúsculas es la solución ideal para optimizar tu tiempo de redacción y formateo de texto en el día a día. Ya sea que necesites corregir una nota rápida, preparar un título profesional o adaptar contenido para redes sociales, esta herramienta garantiza resultados precisos e instantáneos de forma totalmente gratuita.
          </p>
        </section>
      </main>
    </div>
  );
}
