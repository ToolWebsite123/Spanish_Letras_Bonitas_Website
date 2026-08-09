import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Nicks para Free Fire - Generador de Nombres Heroicos y Espacioso 🎮",
  description:
    "Crea nicks intimidantes y estéticos para Free Fire con símbolos de armas, coronas y espacio invisible. Optimizado para el límite estricto de 12 caracteres.",
};

const ffFaqs = [
  {
    q: "¿Cuál es el límite estricto de caracteres para el nick de Free Fire?",
    a: "Free Fire establece un límite máximo de 12 caracteres (incluyendo espacios e íconos). Dado que los símbolos Unicode especiales ocupan más bytes, te recomendamos verificar el contador de la herramienta para asegurar que entre sin cortes.",
  },
  {
    q: "¿Cómo agregar el espacio invisible en el nick de Free Fire?",
    a: "El espacio invisible (U+3164) se utiliza para separar la etiqueta del clan del apodo personal. En nuestro conversor puedes incluirlo o usar símbolos pequeños que mantengan la separación limpia.",
  },
  {
    q: "¿Por qué algunos símbolos de armas se ven recortados en la pantalla del juego?",
    a: "Garena Free Fire utiliza un motor de renderizado de texto personalizado en dispositivos móviles. Los símbolos Unicode universales como espadas (⚔️), coronas (👑) y rayos (⚡) tienen compatibilidad garantizada en todas las actualizaciones.",
  },
  {
    q: "¿Cuántas veces se puede cambiar el nombre en Free Fire?",
    a: "Puedes cambiar tu nombre las veces que desees, siempre que tengas una 'Tarjeta de Cambio de Apodo' o cuentes con 800 diamantes en tu cuenta.",
  },
  {
    q: "¿Cómo poner la inicial de mi clan al principio del apodo?",
    a: "Escribe la etiqueta de tu clan en letras pequeñas (ej: ᵀᴳ) seguida de tu apodo en letras góticas. Nuestro contador de caracteres te dirá si se mantiene dentro del límite de 12 caracteres.",
  },
];

export default function NickFreeFirePage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Nicks para Juegos</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Nick Free Fire</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
            Generador de Nicks para Free Fire 🎮
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
            Diseña el nombre de jugador perfecto para infundir respeto en el campo de batalla. Combina etiquetas de clan, letras góticas, espacio invisible y símbolos guerreros adaptados a las reglas oficiales de Garena Free Fire.
          </p>
        </header>

        <Converter highlightStyleId="gothic" />

        {/* ARTÍCULO DETALLADO 1: Las Reglas de Oro del Nick Gamer en Free Fire */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>🔥</span> Reglas Clave para Crear un Nick Imparable en Free Fire
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            En la isla de Bermuda o en las clasificatorias de Duelo de Escuadras, tu nombre de jugador es la primera impresión que tienen tus rivales y compañeros. Un nick legendario debe cumplir 3 requisitos esenciales:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
            <div className="p-5 rounded-xl border border-amber-100 dark:border-amber-900/50 bg-amber-50/40 dark:bg-amber-950/20 flex flex-col gap-2">
              <span className="text-2xl">⚡</span>
              <h3 className="font-bold text-base text-amber-700 dark:text-amber-300">1. Brevedad y Legibilidad</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Tus compañeros deben poder nombrarte rápido durante el chat de voz. Mantén las letras centrales legibles y evita recargar el centro de la palabra.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-red-100 dark:border-red-900/50 bg-red-50/40 dark:bg-red-950/20 flex flex-col gap-2">
              <span className="text-2xl">⚔️</span>
              <h3 className="font-bold text-base text-red-700 dark:text-red-300">2. Enmarcado de Batalla</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Coloca los símbolos de mayor volumen (alas, coronas, espadas) en los extremos izquierdo y derecho para dar un efecto simétrico de escudo.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-emerald-100 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20 flex flex-col gap-2">
              <span className="text-2xl">🛡️</span>
              <h3 className="font-bold text-base text-emerald-700 dark:text-emerald-300">3. Control del Límite de 12 Chars</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Si superas los 12 caracteres, el juego cortará las últimas letras. Usa nuestro contador dinámico para asegurar compatibilidad 100%.
              </p>
            </div>
          </div>
        </section>

        {/* ARTÍCULO DETALLADO 2: Colección de Nicks Listos para Usar */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>🎮</span> Ejemplos de Nicks para Free Fire Listos para Copiar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Estilo Francotirador / Rush</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">꧁⚔️𝕾𝖍𝖆𝖉𝖔𝖜⚔️꧂ | ⚡ ᵀᴳ 𝕶𝖎𝖑𝖑𝖊𝖗 ⚡ | ꧁👑𝓚𝓲𝓷𝓰👑꧂</p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Estilo Femenino / Heroico</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">🌸 𝒬𝓊𝑒𝑒𝓃 🌸 | ꧁🌸𝓠𝓾𝓮𝓮𝓷🌸꧂ | 💫 ᵃⁿᵍᵉˡ ᵉⁿᵉʳᵍʸ</p>
            </div>
          </div>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Nicks para Free Fire" faqs={ffFaqs} />
      </main>
    </div>
  );
}
