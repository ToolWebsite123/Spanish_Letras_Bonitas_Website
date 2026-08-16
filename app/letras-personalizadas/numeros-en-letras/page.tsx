import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import NumberToWordsConverter from "@/components/NumberToWordsConverter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Números en Letras - Conversor de Números a Texto en Español 🔢",
  description:
    "Herramienta gratis para convertir números en letras cardinales, ordinales, romanos y cantidades en cheques o documentos oficiales en español.",
  alternates: {
    canonical: "/letras-personalizadas/numeros-en-letras",
  },
};

const faqs = [
  {
    q: "¿Cómo escribir un número en letras en español de forma automática?",
    a: "Ingresa la cifra numérica en la casilla de la herramienta, selecciona el formato deseado (cardinal, ordinal, romano o lote) y obtendrás la conversión inmediata en texto correcto según la RAE.",
  },
  {
    q: "¿Cómo escribir una cantidad en letras para un cheque o pagaré?",
    a: "Elige la opción de moneda (pesos, dólares o euros) en el conversor. La herramienta añadirá automáticamente la unidad monetaria y los centavos en letras para garantizar la validez legal del documento.",
  },
  {
    q: "¿Cómo se escribe 1000 en letras en español?",
    a: "Se escribe 'mil'. Para cifras superiores se antecede el cardinal correspondiente (ejemplo: 'dos mil', 'diez mil', 'cien mil').",
  },
  {
    q: "¿Cuál es la diferencia entre números cardinales y ordinales?",
    a: "Los números cardinales indican cantidad exacta (uno, dos, cien), mientras que los ordinales expresan orden o sucesión jerárquica (primero, segundo, décimo).",
  },
  {
    q: "¿La herramienta funciona con números grandes de varios millones?",
    a: "Sí, nuestro conversor procesa números desde la unidad hasta cifras de cientos de millones con estructura gramatical perfecta.",
  },
  {
    q: "¿Se pueden convertir varios números a la vez en lote?",
    a: "Sí, activando la pestaña 'Lote' puedes pegar una lista de múltiples números separados por comas o saltos de línea y obtener la transcripción completa de cada uno al instante.",
  },
  {
    q: "¿El conversor convierte monedas como pesos, dólares o euros?",
    a: "Sí, dispone de un menú desplegable para añadir automáticamente denominaciones en Pesos (MXN/ARS), Dólares (USD) y Euros (EUR) junto a sus centavos.",
  },
  {
    q: "¿Cómo se escriben los números en género femenino?",
    a: "Al activar la casilla 'Femenino', el conversor ajusta las centenas y unidades correspondientes (por ejemplo, cambia 'uno' por 'una', y 'doscientos' por 'doscientas').",
  },
  {
    q: "¿Puedo copiar el resultado para pegarlo en Word, Excel o un documento PDF?",
    a: "Sí, basta con hacer clic en el botón 'Copiar' para guardar el texto transcrito directamente en tu portapapeles y utilizarlo en cualquier programa.",
  },
  {
    q: "¿Cómo se escribe 100 correctamente en letras?",
    a: "Se escribe 'cien' de forma aislada. Si el número contiene decenas o unidades adicionales (como 105 o 120), se escribe utilizando la forma 'ciento' ('ciento cinco', 'ciento veinte').",
  },
];

export default function NumerosEnLetrasPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 pt-3 sm:pt-4 pb-8 sm:pb-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-5 sm:gap-6">
        {/* Compact Hero Header */}
        <header className="flex flex-col gap-1">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Números en Letras: Convierte Números a Texto
          </h1>
        </header>

        {/* Real Functional Tool */}
        <NumberToWordsConverter />

        {/* SECTION 1: ¿Cómo Funciona el Conversor de Números a Letras? */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ⚡ Paso a Paso
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              ¿Cómo Funciona el Conversor de Números a Letras?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <span className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 flex items-center justify-center font-black text-sm">
                1
              </span>
              <h3 className="font-extrabold text-sm text-[var(--foreground)]">1. Escribe tu número</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Introduce cualquier cifra numérica (entera o con decimales) en la casilla principal del conversor.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <span className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 flex items-center justify-center font-black text-sm">
                2
              </span>
              <h3 className="font-extrabold text-sm text-[var(--foreground)]">2. Elige el tipo de conversión</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Selecciona el modo cardinal, ordinal, romano o conversión por lote según la necesidad de tu texto.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <span className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 flex items-center justify-center font-black text-sm">
                3
              </span>
              <h3 className="font-extrabold text-sm text-[var(--foreground)]">3. Ajusta el formato si lo necesitas</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Personaliza la concordancia de género (femenino), la tipografía (Aa, AA, aa) o agrega unidades monetarias.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <span className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 flex items-center justify-center font-black text-sm">
                4
              </span>
              <h3 className="font-extrabold text-sm text-[var(--foreground)]">4. Copia el resultado con un clic</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Haz clic en el botón de copiar para pegar el texto transcrito directamente en tus documentos, cheques o plantillas.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Tipos de Conversión Disponibles y Ejemplos Reales */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📊 Modos de Conversión y Ejemplos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Tipos de Conversión Disponibles y Ejemplos Reales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🔢</span> Números Cardinales
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Expresan una cantidad numérica exacta en palabras. Son esenciales en facturas, recibos y textos de redacción general.
              </p>
              <div className="mt-2 p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col gap-1 text-xs">
                <span className="font-bold text-teal-600 dark:text-teal-400">Ejemplo pequeño:</span>
                <span>El número <strong>25</strong> se escribe <em>&quot;veinticinco&quot;</em>.</span>
                <span className="font-bold text-teal-600 dark:text-teal-400 mt-1">Ejemplo grande:</span>
                <span>La cifra <strong>1,250,000</strong> se convierte en <em>&quot;un millón doscientos cincuenta mil&quot;</em>.</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🥇</span> Números Ordinales
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Indican posición, orden o jerarquía de un elemento en una serie (primero, segundo, décimo).
              </p>
              <div className="mt-2 p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col gap-1 text-xs">
                <span className="font-bold text-teal-600 dark:text-teal-400">Ejemplo:</span>
                <span>El número <strong>12</strong> en ordinal se escribe <em>&quot;duodécimo&quot;</em> (o <em>&quot;duodécima&quot;</em> en femenino).</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🏛️</span> Números Romanos
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Notación clásica tradicional (I, V, X, L, C, D, M) utilizada en siglos, nombres de reyes, aniversarios y capítulos formales.
              </p>
              <div className="mt-2 p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col gap-1 text-xs">
                <span className="font-bold text-teal-600 dark:text-teal-400">Ejemplo:</span>
                <span>El año <strong>2026</strong> se representa en romano como <em>&quot;MMXXVI&quot;</em>.</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>📋</span> Conversión Monetaria y Decimales
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Transcribe montos financieros con centavos o céntimos para documentos bancarios, contables o legales.
              </p>
              <div className="mt-2 p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col gap-1 text-xs">
                <span className="font-bold text-teal-600 dark:text-teal-400">Ejemplo decimal:</span>
                <span>La cifra <strong>1500.75</strong> se convierte en <em>&quot;mil quinientos con setenta y cinco&quot;</em>.</span>
                <span className="font-bold text-teal-600 dark:text-teal-400 mt-1">Ejemplo moneda:</span>
                <span>Un valor de <strong>2500 pesos</strong> se expresa como <em>&quot;dos mil quinientos pesos&quot;</em>.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ¿Cuándo Necesitas Escribir Números en Letras? */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💼 Casos de Uso
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              ¿Cuándo Necesitas Escribir Números en Letras?
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <li className="p-4 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-start gap-3">
              <span className="text-teal-600 dark:text-teal-400 font-black">✓</span>
              <div>
                <strong className="text-[var(--foreground)] block">Cheques bancarios y giros:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  La normativa bancaria exige escribir la cifra exacta en palabras para certificar el importe final e impedir adulteraciones.
                </span>
              </div>
            </li>

            <li className="p-4 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-start gap-3">
              <span className="text-teal-600 dark:text-teal-400 font-black">✓</span>
              <div>
                <strong className="text-[var(--foreground)] block">Contratos y documentos legales:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  En escrituras públicas, pagarés, contratos de arrendamiento y finiquitos es indispensable expresar importes y plazos en letras.
                </span>
              </div>
            </li>

            <li className="p-4 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-start gap-3">
              <span className="text-teal-600 dark:text-teal-400 font-black">✓</span>
              <div>
                <strong className="text-[var(--foreground)] block">Formularios oficiales y trámites:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  Declaraciones de impuestos, trámites gubernamentales y formularios notariales requieren transcripción literal.
                </span>
              </div>
            </li>

            <li className="p-4 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-start gap-3">
              <span className="text-teal-600 dark:text-teal-400 font-black">✓</span>
              <div>
                <strong className="text-[var(--foreground)] block">Trabajos escolares y textos profesionales:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  Informes académicos, tesis y artículos periodísticos requieren ortotipografía correcta según las normas de la Real Academia Española (RAE).
                </span>
              </div>
            </li>
          </ul>
        </section>

        {/* SECTION 4: Reglas Básicas para Escribir Números en Español */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📚 Ortografía Tipográfica
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Reglas Gramaticales para Escribir Números en Español
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Cuándo usar &quot;cien&quot; y cuándo &quot;ciento&quot;
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Se utiliza &quot;cien&quot; cuando la cifra es exactamente 100 o precede sustantivos (ej. &quot;cien personas&quot;). Se usa &quot;ciento&quot; cuando el número continúa (ej. &quot;ciento uno&quot;, &quot;ciento cincuenta&quot;).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Cómo se escriben los números grandes (miles, millones)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Los miles se forman con la palabra &quot;mil&quot; (&quot;dos mil&quot;). Los millones varían entre singular y plural (&quot;un millón&quot;, &quot;dos millones&quot;) y requieren la preposición &quot;de&quot; si van seguidos de un sustantivo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Cómo se escriben los valores con moneda
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Al formalizar dinero, la cifra entera se une a la moneda (&quot;pesos&quot;, &quot;dólares&quot;, &quot;euros&quot;) y la parte decimal se añade mediante &quot;con&quot; seguida de los centavos o céntimos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Cuándo cambia el género de la palabra (femenino)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Las centenas y la unidad &quot;uno&quot; adaptan su terminación al género del sustantivo que acompañan (ej. &quot;doscientos libros&quot; frente a &quot;doscientas personas&quot;, &quot;veintiún días&quot; vs &quot;veintiuna horas&quot;).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2 md:col-span-2">
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Cómo escribir decimales correctamente
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                La parte entera se escribe en palabras cardinales, seguida de la conjunción &quot;con&quot; o &quot;punto&quot; y la transcripción de las décimas o centésimas correspondientes (ej. 25.50 = &quot;veinticinco con cincuenta&quot;).
              </p>
            </div>
          </div>
        </section>

        {/* Faq Section */}
        <FaqSection title="Preguntas Frecuentes sobre Conversión de Números" faqs={faqs} />
      </main>
    </div>
  );
}
