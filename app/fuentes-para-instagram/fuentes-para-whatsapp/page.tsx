import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Fuentes para WhatsApp - Letras para Info y Estados 💬",
  description:
    "Genera letras bonitas, cursivas, fuentes diminutas y textos en negrita para personalizar tu Estado, Info y mensajes de WhatsApp.",
  alternates: {
    canonical: "/fuentes-para-instagram/fuentes-para-whatsapp",
  },
};

const whatsappFaqs = [
  {
    q: "¿Cómo cambiar la letra en el Estado y la Info de WhatsApp?",
    a: "Escribe tu texto en la herramienta superior, copia el diseño en letras cursivas o negritas y pégalo directamente en la casilla 'Info' o en las publicaciones de tus Estados de WhatsApp.",
  },
  {
    q: "¿Cuál es la diferencia entre los códigos nativos de WhatsApp (*texto*) y estas letras Unicode?",
    a: "Los códigos nativos de WhatsApp (`*negrita*`, `_cursiva_`) solo funcionan dentro del cuerpo del chat y no se pueden usar en la casilla de Info o Nombre. Nuestras fuentes Unicode estilizadas funcionan en TODAS partes (Info, Estados, Nombre y Chats).",
  },
  {
    q: "¿Se ven las letras bonitas en WhatsApp Web y WhatsApp Business?",
    a: "¡Sí! Se visualizan perfectamente tanto en celulares (Android e iOS) como en la versión web y aplicaciones de escritorio de WhatsApp Business.",
  },
  {
    q: "¿Preservan los acentos en español (á, é, í, ó, ú, ñ) en las conversaciones de WhatsApp?",
    a: "¡Sí! Nuestro conversor adapta todos los glifos con tildes para garantizar una lectura impecable en español.",
  },
  {
    q: "¿Cómo copiar las fuentes de WhatsApp en 1 solo paso?",
    a: "Toca la tarjeta con tu diseño preferido arriba y el texto estilizado se copiará automáticamente al portapapeles de tu teléfono.",
  },
];

export default function FuentesParaWhatsAppPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Fuentes para WhatsApp 💬
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="bold-script" highlightStyleIds={["bold-script", "cursive", "elegant-script", "sans-bold", "italic-serif", "bold"]} />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💬 Guía de Uso en WhatsApp
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cómo Destacar en WhatsApp: Info, Estados y Nombres de Grupos
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              WhatsApp es la plataforma de mensajería más utilizada. Puedes destacar en 3 secciones clave:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Casilla de Info Personal</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Sustituye la aburrida frase predeterminada (&apos;Disponible&apos;) por una frase motivacional en letras cursivas finas (ej: <code className="text-teal-600 dark:text-teal-400 font-bold">✨ 𝒱𝒾𝓋ℯ ℯ𝓁 𝓅𝓇ℯ𝓈ℯ𝓃𝓉ℯ ✨</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Nombres de Grupos de Familia o Trabajo</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Utiliza letras en negrita o recuadros negros para que el nombre del grupo destaque en la lista de chats.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Nombre de Grupo vs Estado: Diferentes Límites de Caracteres */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💬 Límites de Mensajería
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Nombre de Grupo vs Estado: Diferentes Límites de Caracteres
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              El nombre de un grupo de WhatsApp permite hasta 25 caracteres, mientras que un Estado permite hasta 700. Ajusta la longitud de tu texto decorado según dónde lo vayas a pegar.
            </p>
          </div>
        </section>

        {/* SECTION E — Dónde Puedes Usar Fuentes Estilizadas en WhatsApp */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💬 Ubicaciones en WhatsApp
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Dónde Puedes Usar Fuentes Estilizadas en WhatsApp
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Aprovecha las tipografías Unicode en 4 secciones clave de la aplicación para personalizar tu comunicación diaria:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Casilla de Info Personal</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Remplaza el texto plano por frases motivacionales en cursiva o negrita elegante que definan tu estado de ánimo o profesión.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Nombres de Grupos</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Aplica letras en negrita o recuadros negros para que tus grupos familiares, de trabajo o amigos destaquen en la lista de chats.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">3. Publicaciones de Estados</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Decora pensamientos, canciones o avisos en tus Estados con fuentes tipográficas únicas que atraigan mayor atención.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">4. Mensajes Directos y Encabezados</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Resalta la primera línea o títulos importantes de tus mensajes para estructurar mejor la información enviada a tus contactos.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION F — WhatsApp Business vs WhatsApp Normal: ¿Se Ve Igual el Texto Decorado? */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💼 WhatsApp Business
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              WhatsApp Business vs WhatsApp Normal: ¿Se Ve Igual el Texto Decorado?
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              ¡Sí! Las fuentes Unicode se renderizan de manera 100% idéntica en WhatsApp Business y en la aplicación estándar. En perfiles comerciales, aplicar negritas en catálogos de productos, listas de precios y respuestas automáticas transmite un perfil empresarial estructurado y profesional frente a tus clientes.
            </p>
          </div>
        </section>

        {/* SECTION G — Consejos para Usar Fuentes sin Perder Legibilidad en Chats Largos */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              💡 Consejos de Legibilidad
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Consejos para Usar Fuentes sin Perder Legibilidad en Chats Largos
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Al comunicarte en chats grupales o extensos, usa fuentes decoradas principalmente en palabras clave o titulares. Evita transformar párrafos enteros a tipografías excesivamente cursivas o complejas para que la lectura fluya con rapidez sin cansar la vista de tus interlocutores.
            </p>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/fuentes-para-instagram/fuentes-para-whatsapp" />

        <FaqSection title="Preguntas Frecuentes sobre Fuentes para WhatsApp" faqs={whatsappFaqs} />
      </main>
    </div>
  );
}
