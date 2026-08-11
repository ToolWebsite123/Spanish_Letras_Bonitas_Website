import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Nicks Free Fire - Generador de Apodos y Símbolos 🎮",
  description:
    "Copia los mejores nicks pro para Free Fire. Genera apodos masculinos, femeninos, espacio transparente (U+3164) y letras góticas en 12 bytes.",
};

const freeFireFaqs = [
  {
    q: "¿Cómo poner espacio invisible o transparente en el nick de Free Fire?",
    a: "El teclado normal no permite poner espacios en Free Fire. Debes copiar el carácter Unicode transparente (U+3164) desde nuestra sección de herramientas y pegarlo directamente en el juego para separar la tag de tu clan de tu nombre personal.",
  },
  {
    q: "¿Cuál es el límite máximo de memoria al crear un nick en Free Fire?",
    a: "Garena Free Fire establece un límite estricto de 12 bytes en memoria UTF-8. Los caracteres normales ocupan 1 byte, mientras que los símbolos de armas, alas y coronas ocupan entre 3 y 4 bytes.",
  },
  {
    q: "¿Por qué el juego dice 'Nombre demasiado largo' o 'Inválido'?",
    a: "Ocurre cuando el nick supera los 12 bytes de memoria. Nuestro conversor dinámico en vivo te indica exactamente cuántos bytes ocupa tu nombre antes de que lo copies.",
  },
  {
    q: "¿Se pueden crear nicks femeninos con moños y coronas?",
    a: "¡Sí! Explora nuestra sección de nicks femeninos con fuentes cursivas, corazones suaves y coronas de reina.",
  },
  {
    q: "¿Es seguro usar estos apodos sin riesgo de baneos?",
    a: "100% seguro. Todos los símbolos provienen de la tabla estándar Unicode aceptada oficialmente por los servidores de Garena.",
  },
];

export default function NickFreeFirePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[var(--foreground)] opacity-75 font-medium">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)] opacity-75">Nicks para Juegos</span>
          <span>/</span>
          <span className="text-teal-600 dark:text-teal-400 font-bold">Nick Free Fire</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>🎮</span> Generador Pro para Garena Free Fire
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Nicks para Free Fire Pro 🎮
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground)] opacity-80 leading-relaxed max-w-4xl font-medium">
            Genera apodos pro con espadas, coronas, alas de ángel, espacio invisible y letras góticas. Explora nuestras guías de nicks masculinos, nicks femeninos, firmas de colores y el tutorial paso a paso para cambiar tu apodo en Free Fire.
          </p>
        </header>

        {/* Converter Tool */}
        <Converter highlightStyleId="gothic" />

        {/* ARTÍCULO DEEP 1 */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🎮 Anatomía de un Nick Pro
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Guía de Estructura de Clan y Espacio Transparente
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Para armar un nick imponente en eSports, combina <Link href="/simbolos-aesthetic/simbolos-para-nick" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">símbolos para nick de armas</Link> con códigos de colores para tu firma de Free Fire y <Link href="/nicks-para-juegos/nombres-para-roblox" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">apodos de Roblox</Link>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Tag de Clan Volada</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utiliza letras pequeñas voladas (ej: ᵀᴳ) para ahorrar bytes y dejar espacio al nombre central.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Espacio Invisible U+3164</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Intercala el espacio transparente para separar limpiamente tu sigla del resto del apodo.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Errores Comunes al Crear tu Nick de Free Fire */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ⚠️ Prevención de Errores
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Errores Comunes al Crear tu Nick de Free Fire
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Evita estos 3 fallos habituales que provocan el rechazo del cambio de apodo en el juego:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">📏</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                1. Exceder el Límite de 12 Bytes
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Superar los 12 bytes reales UTF-8 hace que Garena recorte el nombre o devuelva el error "Nombre demasiado largo".
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🚫</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                2. Usar Símbolos No Compatibles
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utilizar caracteres fuera de la norma Unicode aceptada por el servidor provocará que se muestren signos de interrogación [?] o cuadros vacíos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">⌨️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                3. Usar Espacios Normales del Teclado
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                La barra espaciadora predeterminada es bloqueada por el juego. Debes usar obligatoriamente el carácter transparente U+3164.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION E — Cómo Elegir un Nick que No Esté Ya Ocupado */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💡 Estrategia de Nombre
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cómo Elegir un Nick que No Esté Ya Ocupado
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Si tu nombre favorito ya fue registrado por otro jugador, aplica estas 3 técnicas para volverlo único manteniendo su esencia:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">👑</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                1. Añadir Marcos de Clan o Realeza
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Rodea tu apodo con alas o coronas simétricas (ej: ꧁༺ ༻꧂) para diferenciarlo instantáneamente en la base de datos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🔤</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                2. Combinar Fuentes Small Caps o Góticas
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Transforma las letras normales a Small Caps (ᴘᴇǫᴜᴇñᴀs) o Góticas. Para el servidor son caracteres Unicode distintos y estará disponible.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">⚡</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                3. Intercalar Espacios Invisibles
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Coloca un espacio transparente U+3164 en medio o al final de tu nick para crear una versión única sin alterar cómo se lee.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION F — Nicks Femeninos: Estilo y Elegancia */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🌸 Nicks Femeninos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Nicks Femeninos: Estilo y Elegancia
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Diseña apodos estéticos y respetados para liderar tu escuadra femenina en Free Fire combinando caligrafía suave y símbolos delicados:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">👑</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Estilo Reina & Coronas
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Combina coronas simétricas y fuentes Script (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">꧁👑𝓠𝓾𝓮𝓮𝓷👑꧂</code>) para destacar autoridad e imponencia.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🌸</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Estilo Soft & Coquette
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Incorpora flores de cerezo, lunas y moños (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">🎀 𝒮𝑜𝒻𝒾𝒶 🌸</code>) para una apariencia dulce y minimalista.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">⚡</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Estilo Rusher Femenina
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Mezcla letras diminutas en mayúsculas con destellos y dagas para infundir agilidad competitiva en torneos.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION G — Nicks Masculinos: Estilo Guerrero */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ⚔️ Nicks Masculinos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Nicks Masculinos: Estilo Guerrero
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Proyecta contundencia y jerarquía de capitán con tipografías agresivas y marcos bélicos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">⚔️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Marcos de Armas y Katanas
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Encuadra tu apodo con espadas cruzadas y rayos (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">⚔️𝕶𝖎𝖑𝖑𝖊𝖗⚔️</code>) para mostrar perfil agresivo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🔤</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Letras Góticas & Dark
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Aplica la tipografía Fraktur (Gótica) para infundir respeto en salas privadas y ligas competitivas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🛡️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Tags de Clan eSports
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Combina siglas voladas en la parte superior con el espacio transparente U+3164 para mantener orden institucional.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION H — Bio Colorida: Cómo Agregar Colores y Banderas a tu Firma */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🌈 Firma de Colores
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Bio Colorida: Cómo Agregar Colores y Banderas a tu Firma
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Free Fire permite personalizar la casilla de firma de tu perfil con códigos hexadecimales entre corchetes <code className="text-teal-600 dark:text-teal-400 font-bold">[HEX]</code> para activar colores brillantes y banderas de países:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                1. Códigos Hexadecimales Principales
              </h3>
              <ul className="text-[var(--foreground)] opacity-80 leading-relaxed font-mono flex flex-col gap-1">
                <li><code className="text-teal-600 dark:text-teal-400">[FF0000]</code> Texto Rojo Neón</li>
                <li><code className="text-teal-600 dark:text-teal-400">[00FF00]</code> Verde Esmeralda</li>
                <li><code className="text-teal-600 dark:text-teal-400">[00FFFF]</code> Azul Neón Cyan</li>
                <li><code className="text-teal-600 dark:text-teal-400">[FF00FF]</code> Magenta / Rosa Bolder</li>
                <li><code className="text-teal-600 dark:text-teal-400">[FFFF00]</code> Amarillo Neón</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                2. Formato de Banderas Latinoamericanas
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Combina varios bloques de corchetes de colores consecutivos para simular la bandera de tu país en tu perfil (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">[FF0000]█[FFFFFF]█[FF0000]█</code> para Perú).
              </p>
            </div>
          </div>
        </section>

        {/* SECTION I — Cómo Cambiar tu Nick sin Perder Diamantes */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💎 Guía de Economía
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cómo Cambiar tu Nick sin Perder Diamantes
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Cambiar tu apodo en Free Fire cuesta normalmente 390 diamantes. Aplica estas 3 alternativas gratuitas o económicas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🎟️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                1. Tarjeta de Cambio de Nick en Gremio
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Canjea la tarjeta Name Change Card en la tienda del gremio por solo 39 diamantes + 200 tokens de gremio.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🎁</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                2. Eventos de Pase de Nivel & Pase Élite
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Obtén cupones de cambio de nombre gratuitos al completar misiones temporales o subir de nivel de cuenta.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">📋</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                3. Probar Antes de Pegar
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Copia y verifica siempre los bytes con nuestra herramienta antes de confirmar para no desperdiciar tu tarjeta por un error de longitud.
              </p>
            </div>
          </div>
        </section>

        {/* Related Categories internal linking widget */}
        <RelatedCategoriesWidget currentPath="/nicks-para-juegos/nick-free-fire" />


        <FaqSection title="Preguntas Frecuentes sobre Nicks Free Fire" faqs={freeFireFaqs} />
      </main>
    </div>
  );
}
