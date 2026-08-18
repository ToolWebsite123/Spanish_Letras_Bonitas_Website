import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";

export const metadata: Metadata = {
  title: "Nombres Personalizados - Bonitos y Estéticos ✨",
  description:
    "Personaliza cualquier nombre propio con letras cursivas, góticas, pequeñas y decoradas para copiar y pegar en Instagram, TikTok y Free Fire.",
  alternates: {
    canonical: "/letras-personalizadas/nombres-personalizados",
  },
};

const nombresFaqs = [
  {
    q: "¿Cómo personalizar mi nombre propio con letras bonitas y símbolos?",
    a: "Escribe tu nombre de pila o apodo en el conversor dinámico superior. El sistema generará automáticamente más de 1300 variaciones estilizadas en letras cursivas, góticas, diminutas, encuadradas y adornadas con coronas y alas.",
  },
  {
    q: "¿Puedo usar un nombre personalizado en el Nombre de Usuario de Instagram?",
    a: "Para el campo 'Nombre de Usuario' (@handle) se deben utilizar letras normales sin acentos. Sin embargo, para la casilla 'Nombre Principal' (el título en negrita que aparece arriba de la biografía) puedes usar cualquier fuente estilizada de nuestro conversor.",
  },
  {
    q: "¿Cuál es el mejor estilo de letras bonitas para un nombre personal?",
    a: "Para un perfil elegante o profesional, recomendamos la variante Script Cursiva (𝓒𝓪𝓻𝓵𝓸𝓼) o Negrita Sans (𝗕𝗼𝗹𝗱). Para nicks de videojuegos o marcas eSports, las letras Góticas (𝕶𝖎𝖑𝖑𝖊𝖗) o encuadradas son las más demandadas.",
  },
  {
    q: "¿Preservan los nombres personalizados las tildes en español (Ángel, Sofía, Raúl, María)?",
    a: "¡Sí! Nuestro motor está programado para el idioma español y preserva automáticamente las vocales acentuadas en nombres como 'Sofía', 'Ángel', 'María' o 'Ramón'.",
  },
  {
    q: "¿Se pueden guardar los nombres personalizados creados?",
    a: "¡Sí! Cada tarjeta de nombre tiene un botón de corazón (❤️). Al pulsarlo, el nombre se guarda automáticamente en la pestaña 'Favoritos' de tu navegador sin necesidad de registrarte.",
  },
  {
    q: "¿Cómo copiar un nombre personalizado al portapapeles en 1 segundo?",
    a: "Simplemente toca la tarjeta con el diseño que más te guste y el texto se copiará inmediatamente para que lo pegues donde quieras.",
  },
];

export default function NombresPersonalizadosPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Generador de Nombres Personalizados ✨
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="bold-script" />

        {/* ARTÍCULO DETALLADO DEEP 1: Cómo Diseñar Nombres de Impacto */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ✨ Estrategia de Marca Personal
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Guía Definitiva: 4 Formas de Personalizar tu Nombre para Redes Sociales y Juegos
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Tu nombre es tu firma digital. A la hora de construir una presencia atractiva en Instagram, TikTok o servidores de juegos, existen 4 composiciones tipográficas recomendadas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Estilo Cursiva Elegante (Script)</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utiliza la fuente Script Cursiva (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">𝓢𝓸𝓯í𝓪 𝓜𝓪𝓻𝓽í𝓷𝓮𝔔</code>) para transmitir refinamiento, creatividad y caligrafía de firma personal en perfiles artísticos o de moda.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Estilo Minimalista (Small Caps)</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Transforma tu nombre a letras diminutas en mayúsculas (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">ᴅᴀɴɪᴇʟ ᴍᴏʀᴇɴᴏ</code>). Ocupa menos espacio horizontal y da una estética limpia y moderna.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">3. Estilo Guerrero eSports (Gótica)</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Combina fuentes góticas con coronas y alas (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">꧁👑𝕮𝖆𝖗𝖑𝖔𝖘👑꧂</code>) para infundir respeto en Free Fire, Roblox y Discord.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">4. Estilo Coquette & Cute</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Acompaña tu nombre de pila con moños y destellos (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">🎀 𝓛𝓾𝓬í𝓪 🌸</code>) para perfiles dulces y románticos.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Nombre Personalizado vs Nick de Juego: No Es lo Mismo */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🏷️ Clasificación de Nombres
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Nombre Personalizado vs Nick de Juego: No Es lo Mismo
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Comprende el propósito y la estética de cada tipo de apodo digital:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                1. Nombre Personalizado (Marca Personal & Bio)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utiliza tu nombre real o de pila en fuentes cursivas elegantes o letras diminutas (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">𝓢𝓸𝓯í𝓪 𝓜𝓪𝓻𝓽í𝓷𝓮𝔔</code>). Diseñado para bios de Instagram, WhatsApp y tarjetas de presentación.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                2. Nick Gamer (eSports & Clanes)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Combina seudónimos agresivos con letras góticas, espadas, alas y el espacio transparente U+3164 (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">꧁👑𝕶𝖎𝖑𝖑𝖊𝖗👑꧂</code>) bajo un límite estricto de 12 bytes en Free Fire.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION E — Combina tu Nombre con un Apellido o Apodo Corto */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💡 Combinaciones Recomendadas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Combina tu Nombre con un Apellido o Apodo Corto
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Maximiza el equilibrio visual de tu nombre aplicando 3 fórmulas compuestas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">✒️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Inicial de Apellido en Cursiva
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Combina tu primer nombre con la inicial estilizada de tu apellido (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">𝓒𝓪𝓻𝓵𝓸𝓼 𝓜.</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">✨</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Nombre Corto + Small Caps
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Usa diminutivos en letras pequeñas mayúsculas (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">ᴅᴀɴɪ ᴍᴏʀᴇɴᴏ</code>) para una estética minimalista.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">👑</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Título Profesional o Rol
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Añade tu profesión o especialidad junto a tu nombre de pila en negrita (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">𝗦𝗼𝗳í𝗮 | 𝗗𝗶𝘀𝗲ñ𝗼</code>).
              </p>
            </div>
          </div>
        </section>

        {/* Alphabet Reference Table */}
        <AlphabetReferenceTable highlightStyleId="bold-script" />

        {/* Examples */}

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Nombres Personalizados" faqs={nombresFaqs} />
      </main>
    </div>
  );
}
