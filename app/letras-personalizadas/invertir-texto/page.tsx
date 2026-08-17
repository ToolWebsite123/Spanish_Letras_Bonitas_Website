import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Invertir Texto - Letras al Revés y De Cabeza 🔄",
  description:
    "Gira y voltea tu texto de cabeza (Upside Down) o invierte el orden de las letras para crear mensajes secretos y estados divertidos.",
  alternates: {
    canonical: "/letras-personalizadas/invertir-texto",
  },
};

const invertirFaqs = [
  {
    q: "¿Cómo funciona el conversor de texto al revés (Upside Down)?",
    a: "El conversor mapea cada letra del alfabeto con su carácter equivalente rotado 180 grados en la tabla estándar Unicode (por ejemplo, la 'a' se transforma en 'ɐ', la 'e' en 'ǝ' y la 'm' en 'ɯ') e invierte el orden de lectura de la frase.",
  },
  {
    q: "¿Dónde se pueden utilizar las letras invertidas de cabeza?",
    a: "Puedes copiarlas y pegarlas en estados de WhatsApp, comentarios de TikTok, publicaciones de Facebook, biografías de Instagram y mensajes privados de Discord.",
  },
  {
    q: "¿Existen dos tipos de inversión de texto (rotación vs inversión de orden)?",
    a: "¡Sí! Nuestra herramienta permite tanto voltear las letras de cabeza (ǝʇuǝɯɐʇɔǝɟɹǝd) como invertir el orden estricto de las letras de derecha a izquierda (texto espejo o anacíclico).",
  },
  {
    q: "¿Preserva el texto invertido los acentos en español (á, é, í, ó, ú, ñ)?",
    a: "¡Sí! El conversor asigna los glifos rotados correspondientes para vocales acentuadas y para la letra Ñ.",
  },
  {
    q: "¿Es compatible el texto invertido con celulares Android e iPhone?",
    a: "100% compatible. Todos los caracteres rotados son estándar público internacional y se visualizan en cualquier aplicación o navegador.",
  },
  {
    q: "¿Cómo copiar el texto invertido en 1 solo clic?",
    a: "Escribe tu frase en la casilla de entrada superior, selecciona la variante 'De Cabeza (Upside Down)' y toca la tarjeta resultante para copiar automáticamente al portapapeles.",
  },
];

export default function InvertirTextoPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Texto Invertido al Revés 🔄
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="upside-down" />

        {/* ARTÍCULO DETALLADO DEEP 1: La Física de los Caracteres Invertidos */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🔄 Mecánica de la Inversión Unicode
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Guía de Uso: Cuándo y Cómo Utilizar Texto de Cabeza en Redes Sociales
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Escribir de cabeza o al revés genera un misterio visual instantáneo. En redes sociales y chats grupales se utiliza para 4 propósitos creativos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Respuestas a Adivinanzas</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Publica preguntas en tus historias de Instagram o publicaciones de Facebook y pon la respuesta al final volteada de cabeza para que el usuario tenga que girar su teléfono para leerla.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Cifrado Divertido en Grupos</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Envía comentarios o secretos en grupos de WhatsApp y Discord en formato rotado (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">ʇǝɹɔǝs ǝssǝɯ</code>) para captar la atención de tus amigos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">3. Estados Originales y Bios</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Combina 1 renglón de texto normal con 1 renglón de cabeza en la presentación de tu perfil para dar un toque artístico o alternativo (Vaporwave / Alt aesthetic).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">4. Evitar Spoilers en Comentarios</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Escribe comentarios con spoilers de series, juegos o películas invertidos para que solo quienes deseen leerlo hagan el esfuerzo de voltear la pantalla.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Usos Divertidos del Texto Invertido */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🎉 Creatividad & Entretenimiento
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Usos Divertidos del Texto Invertido
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Escribir de cabeza es una excelente estrategia visual para dinamizar tus interacciones digitales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🧩</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Acertijos e Historias Interactivas
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Coloca la pista final o la solución a un reto de cabeza para forzar a tus seguidores a interactuar y voltear su pantalla.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🙃</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Bios con Estética Alt/Vaporwave
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Dale un estilo enigmático o rebelde a tu perfil de Instagram intercalando líneas de texto invertido y caracteres normales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">💬</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Mensajes Cifrados en Chats
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Sorprende en grupos de WhatsApp o canales de Discord enviando saludos y chistes volteados 180 grados.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION E — Texto Invertido vs Texto Espejo: No Son lo Mismo */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🔍 Diferencias Técnicas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Texto Invertido vs Texto Espejo: No Son lo Mismo
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Comprende la diferencia entre las dos formas de transformación tipográfica:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                1. Texto de Cabeza / Upside Down (Rotación 180°)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Cada letra individual es sustituida por su glifo equivalente girado 180° verticalmente (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">ǝʇuǝɯɐʇɔǝɟɹǝd</code>). La lectura se realiza rotando el dispositivo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                2. Texto Espejo / Inversión de Orden (Reverse String)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Conserva la orientación vertical de las letras pero invierte el orden estricto de los caracteres de derecha a izquierda (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">otxet ed olpmejE</code>). La lectura se realiza de derecha a izquierda.
              </p>
            </div>
          </div>
        </section>

        {/* TABLA DE MAPEO DE CARACTERES ROTADOS */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🔤 Mapeo de Caracteres
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Tabla de Equivalencias de Letras de Cabeza (A-Z)
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-mono">
              a→ɐ | b→q | c→ɔ | d→p | e→ǝ | f→ɟ | g→ƃ | h→ɥ | i→ᴉ | j→ɾ | k→ʞ | l→l | m→ɯ | n→u | o→o | p→d | q→b | r→ɹ | s→s | t→ʇ | u→n | v→ʌ | w→ʍ | x→x | y→ʎ | z→z
            </p>
          </div>
        </section>

        {/* Examples */}

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Invertir Texto" faqs={invertirFaqs} />
      </main>
    </div>
  );
}
