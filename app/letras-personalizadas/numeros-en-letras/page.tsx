import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import NumberToWordsConverter from "@/components/NumberToWordsConverter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Números en Letras - Convierte Números a Texto en Español 🔢",
  description:
    "Herramienta gratis para convertir números en letras cardinales, ordinales, romanos y cantidades en cheques o documentos.",
  alternates: {
    canonical: "/letras-personalizadas/numeros-en-letras",
  },
};

const faqs = [
  {
    q: "¿Cómo convertir números a letras en español de forma automática?",
    a: "Ingresa cualquier cifra entera o decimal en la casilla del conversor, selecciona el tipo de conversión (cardinal, ordinal, romano o lote) y obtén la transcripción exacta en texto lista para copiar.",
  },
  {
    q: "¿Cómo se escriben las cantidades de dinero para cheques o facturas?",
    a: "Selecciona la opción de moneda (pesos, dólares o euros) en el conversor. La herramienta agregará automáticamente la moneda y los centavos en palabras (ej. 'veinticinco pesos con cincuenta centavos').",
  },
  {
    q: "¿Cuál es la diferencia entre números cardinales y ordinales?",
    a: "Los números cardinales expresan una cantidad exacta (uno, dos, cien), mientras que los ordinales indican un orden o posición (primero, segundo, décimo).",
  },
  {
    q: "¿Cómo se escribe 100 en letras correctamente?",
    a: "Se escribe 'cien' cuando el número es exactamente 100. Si la cifra continúa (ej. 101 o 125), se utiliza 'ciento' ('ciento uno', 'ciento veinticinco').",
  },
];

export default function NumerosEnLetrasPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Números en Letras: Convierte Números a Texto 🔢
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
                Introduce cualquier cifra, desde unidades hasta millones, con soporte para decimales.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <span className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 flex items-center justify-center font-black text-sm">
                2
              </span>
              <h3 className="font-extrabold text-sm text-[var(--foreground)]">2. Elige el tipo</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Selecciona cardinal para cantidades normales, ordinal para posiciones, romano o lote.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <span className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 flex items-center justify-center font-black text-sm">
                3
              </span>
              <h3 className="font-extrabold text-sm text-[var(--foreground)]">3. Ajusta el formato</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Personaliza género femenino, mayúsculas o minúsculas y la moneda (pesos, dólares, euros).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <span className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 flex items-center justify-center font-black text-sm">
                4
              </span>
              <h3 className="font-extrabold text-sm text-[var(--foreground)]">4. Copia el resultado</h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Pulsa el botón de copiar con un clic y pégalo al instante en tus documentos o contratos.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Tipos de Conversión Disponibles */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📊 Modos de Conversión
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Tipos de Conversión Disponibles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🔢</span> Números Cardinales
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Expresan cantidad exacta (uno, dos, cien) — los más usados en facturas, formularios, recibos de pago y textos generales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🥇</span> Números Ordinales
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Indican posición o orden (primero, segundo, décimo) — útiles en clasificaciones deportivas, capítulos de libros o instrucciones paso a paso.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>🏛️</span> Números Romanos
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Notación clásica (I, V, X, L, C, D, M) — comunes en títulos de reyes, siglos, aniversarios o numeración de capítulos formales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <h3 className="font-extrabold text-base text-[var(--foreground)] flex items-center gap-2">
                <span>📋</span> Conversión por Lote
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Convierte una lista completa de números de una sola vez, ideal para trabajar con columnas de datos o reportes extensos.
              </p>
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
                <strong className="text-[var(--foreground)] block">Cheques bancarios:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  La ley exige la cantidad en palabras para evitar alteraciones o fraudes.
                </span>
              </div>
            </li>

            <li className="p-4 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-start gap-3">
              <span className="text-teal-600 dark:text-teal-400 font-black">✓</span>
              <div>
                <strong className="text-[var(--foreground)] block">Contratos y documentos legales:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  Para otorgar plena validez jurídica a montos, fechas y cláusulas.
                </span>
              </div>
            </li>

            <li className="p-4 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-start gap-3">
              <span className="text-teal-600 dark:text-teal-400 font-black">✓</span>
              <div>
                <strong className="text-[var(--foreground)] block">Formularios oficiales:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  Trámites gubernamentales, escrituras públicas y declaraciones juradas.
                </span>
              </div>
            </li>

            <li className="p-4 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] flex items-start gap-3">
              <span className="text-teal-600 dark:text-teal-400 font-black">✓</span>
              <div>
                <strong className="text-[var(--foreground)] block">Tareas escolares y académicas:</strong>
                <span className="text-[var(--foreground)] opacity-80">
                  Ejercicios de matemáticas, lengua española o redacción formal.
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
              Reglas Básicas para Escribir Números en Español
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Cuándo usar &quot;cien&quot; y cuándo &quot;ciento&quot;
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                &quot;Cien&quot; se usa cuando el número es exactamente 100. &quot;Ciento&quot; se usa cuando el número continúa (101 = &quot;ciento uno&quot;).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Estructura de números grandes
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Se organizan en bloques de miles, millones y billones — el conversor estructura esto automáticamente según las reglas de la RAE.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Concordancia de género
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Algunas cantidades cambian según el sustantivo que acompañan (doscientos libros vs. doscientas personas).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2">
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Manejo de decimales
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Se escriben separando la parte entera de la decimal, generalmente unidas con &quot;con&quot; (25.50 = &quot;veinticinco con cincuenta&quot;).
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
