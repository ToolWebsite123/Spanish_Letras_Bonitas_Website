import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Letras para Firma - Estilos de Firma Personal 🖋️",
  description:
    "Crea estilos de firma elegante en letras manuscritas para nombres personales, emails y marcas de agua.",
};

const firmaFaqs = [
  {
    q: "¿Cómo crear una firma elegante con el conversor?",
    a: "Escribe tu nombre y apellido en el recuadro superior y selecciona cualquiera de las fuentes manuscritas o de trazo continuo para obtener una firma personal única.",
  },
  {
    q: "¿Se pueden usar firmas estilizadas al final de correos electrónicos?",
    a: "¡Sí! Copia tu firma desde el conversor y pégala directamente en el panel de firma de Gmail, Outlook o Apple Mail.",
  },
];

export default function LetrasFirmaPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[var(--foreground)] opacity-75 font-medium">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-600 dark:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)] opacity-75">Letras Bonitas</span>
          <span>/</span>
          <span className="text-teal-600 dark:text-teal-400 font-bold">Letras para Firma</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>🖋️</span> Identidad & Firma Personal
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras para Firma 🖋️
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground)] opacity-80 leading-relaxed max-w-4xl font-medium">
            Diseña una firma estilizada para tu <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">biografía de Instagram</Link>, firma de email o <Link href="/letras-bonitas/caligrafia" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">trazos de caligrafía</Link>. Combínalo con <Link href="/letras-personalizadas/nombres-personalizados" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">nombres personalizados</Link> y <Link href="/letras-bonitas/letras-cursivas" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">fuentes cursivas</Link>.
          </p>
        </header>

        <Converter highlightStyleId="elegant-script" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🖋️ Firma Digital
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Diseño de Firmas Personalizadas
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Consigue una presentación profesional en todas tus plataformas digitales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Firma en Email</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Pega tu firma al final de tus mails de trabajo para transmitir distinción.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider">2. Marcas de Agua</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Firma tus fotografías e infografías para redes sociales.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/letras-bonitas/letras-cursivas" />


        <FaqSection title="Preguntas Frecuentes sobre Letras para Firma" faqs={firmaFaqs} />
      </main>
    </div>
  );
}
