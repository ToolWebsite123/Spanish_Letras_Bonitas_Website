import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Bio para Instagram - Conversor de Tipografías y Fuentes para Perfil 📸",
  description:
    "Crea la biografía perfecta para Instagram con fuentes estéticas, letras cursivas y letras pequeñas. Optimiza tus 150 caracteres y destaca tu perfil fácilmente.",
};

const instaBioFaqs = [
  {
    q: "¿Cuál es el límite máximo de caracteres en la biografía de Instagram?",
    a: "Instagram permite exactamente 150 caracteres en el campo de la Bio. Ten en cuenta que las fuentes Unicode estilizadas pueden ocupar más bytes, por lo que te recomendamos usar nuestro contador en vivo antes de guardar los cambios.",
  },
  {
    q: "¿Cómo hacer saltos de línea limpios en la Bio de Instagram sin que se junten las palabras?",
    a: "Escribe tu texto línea por línea en el conversor, transforma las fuentes y cópialo de una sola vez. Al pegarlo dentro de la app de Instagram, los saltos de renglón se conservarán perfectamente.",
  },
  {
    q: "¿Afectan las letras bonitas en la búsqueda de mi usuario en Instagram?",
    a: "Las letras bonitas en la sección 'Presentación' (Bio) no afectan tu búsqueda. No obstante, te sugerimos mantener tu 'Nombre de Usuario' (@handle) en letras normales para que tus amigos te encuentren sin problema.",
  },
  {
    q: "¿Cómo agregar enlaces con fuentes estilizadas en la Bio?",
    a: "Puedes personalizar el texto del llamado a la acción (Call To Action) que señala hacia tu enlace en bio (ej: 👇 𝓒𝓵𝓲𝓬𝓴 𝓪𝓺𝓾í 𝓹𝓪𝓻𝓪 𝓿𝓮𝓻 𝓶á𝓼).",
  },
  {
    q: "¿Se pueden usar emojis bonitos junto con las fuentes de Instagram?",
    a: "¡Sí! La mejor práctica es utilizar 1 emoji al inicio de cada renglón como viñeta decorativa para mantener el orden visual.",
  },
];

export default function BioParaInstagramPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Fuentes para Instagram</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Bio para Instagram</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
            Fuentes y Tipografías para Bio de Instagram 📸
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
            Haz que tu presentación en Instagram sea memorable. Transforma tu biografía en letras pequeñas aesthetic, cursivas refinadas y listas ordenadas con un toque único que convierta visitantes en seguidores.
          </p>
        </header>

        <Converter highlightStyleId="small" />

        {/* ARTÍCULO DETALLADO 1: Estrategia de Optimización de Bio de Instagram */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>✨</span> Guía Profesional para Optimizar tus 150 Caracteres en Instagram
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Tu biografía de Instagram es la puerta de entrada a tu perfil personal o comercial. Tienes menos de 3 segundos para captar la atención de un visitante y convencerlo de tocar el botón 'Seguir'.
          </p>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Para lograr la mejor estructura, te recomendamos dividir tus 150 caracteres en 4 elementos fundamentales:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
            <div className="p-5 rounded-xl border border-purple-100 dark:border-purple-900/50 bg-purple-50/40 dark:bg-purple-950/20 flex flex-col gap-2">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">1. Renglón de Identidad</span>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Usa <strong className="text-neutral-800 dark:text-neutral-200">Letras Cursivas Elegantes</strong> para destacar tu profesión o pasión principal (ej: 𝓒𝓻𝓮𝓪𝓭𝓸𝓻𝓪 𝓭𝓮 𝓒𝓸𝓷𝓽𝓮𝓷𝓲𝓭𝓸).
              </p>
            </div>
            <div className="p-5 rounded-xl border border-pink-100 dark:border-pink-900/50 bg-pink-50/40 dark:bg-pink-950/20 flex flex-col gap-2">
              <span className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider">2. Renglón de Ubicación o Frase</span>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Usa <strong className="text-neutral-800 dark:text-neutral-200">Letras Pequeñas (Small Caps)</strong> para ahorrar espacio en detalles (ej: 📍 ᴍᴀᴅʀɪᴅ | ☕ ᶜᵒᶠᶠᵉᵉ ˡᵒᵛᵉʳ).
              </p>
            </div>
            <div className="p-5 rounded-xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/40 dark:bg-indigo-950/20 flex flex-col gap-2">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">3. Logro o Temática Principal</span>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Añade viñetas de emojis (✨, 🌿, 🎥) para listar tus temas o proyectos activos.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-emerald-100 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20 flex flex-col gap-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">4. Llamado a la Acción (CTA)</span>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Usa <strong className="text-neutral-800 dark:text-neutral-200">Texto en Negrita Sans</strong> señalando hacia tu enlace (ej: 👇 𝕄𝕚 𝕟𝕦𝕖𝕧𝕠 𝕧í𝕕𝕖𝕠 𝕒𝕢𝕦í).
              </p>
            </div>
          </div>
        </section>

        {/* ARTÍCULO DETALLADO 2: Plantillas de Bio Listas para Copiar */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>📋</span> Plantillas de Biografías de Instagram Listas para Copiar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Perfil Moda & Lifestyle</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">
                𝓕𝓪𝓼𝓱𝓲𝓸𝓷 & 𝓛𝓲𝓯𝓮𝓼𝓽𝔂𝓵𝓮 🌿<br />
                📍 ᴍᴀᴅʀɪᴅ / ʙᴀʀᴄᴇʟᴏɴᴀ<br />
                ✨ ˢᵒᶠᵗ ᵈʳᵉᵃᵐˢ & ᶜᵒᶠᶠᵉᵉ<br />
                👇 𝕄𝕚𝕤 𝕝𝕠𝕠𝕜𝕤 𝕗𝕒𝕧𝕠𝕣𝕚𝕥𝕠𝕤 𝕒𝕢𝕦í
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/50 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Perfil Gamer / Streamer</span>
              <p className="font-mono text-neutral-900 dark:text-neutral-100 text-sm">
                🎮 𝒮𝓉𝓇𝑒𝒶𝓂𝑒𝓇 & 𝒢𝒶𝓂𝑒𝓇<br />
                ⚡ 𝔖𝔥𝔞𝔡𝔬𝔮𝔎𝔦𝔫𝔤 𝔉𝔉<br />
                🔴 Directos diarios a las 8PM<br />
                👇 ℂ𝕒𝕟𝕒𝕝 𝕕𝕖 𝕋𝕨𝕚𝕥𝕔𝕙
              </p>
            </div>
          </div>
        </section>

        {/* Unique FAQ */}
        <FaqSection title="Preguntas Frecuentes sobre Bio para Instagram" faqs={instaBioFaqs} />
      </main>
    </div>
  );
}
