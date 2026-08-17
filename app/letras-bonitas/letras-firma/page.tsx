import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Letras para Firma - Estilos de Firma Personal 🖋️",
  description:
    "Crea estilos de firma elegante en letras manuscritas para nombres personales, emails y marcas de agua.",
  alternates: {
    canonical: "/letras-bonitas/letras-firma",
  },
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
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras para Firma 🖋️
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="elegant-script" />

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

        {/* SECTION D — Firma Digital vs Firma Manuscrita Escaneada */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🖋️ Comparativa de Métodos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Firma Digital vs Firma Manuscrita Escaneada
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Conoce las diferencias y ventajas de usar caracteres de firma Unicode frente a imagenes escaneadas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                1. Firma Digital Unicode (Texto Plano)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Copia y pega directamente en campos de texto, bios de Instagram y pies de correo electrónico sin cargar archivos de imagen. Carga al instante en cualquier pantalla.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400">
                2. Firma Manuscrita Escaneada (Imagen PNG/JPG)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Ideal para documentos legales o PDFs adjuntos, pero inviable para cajas de texto estándar de redes sociales donde solo se permite texto.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION E — Dónde Usar tu Firma Estilizada */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📍 Aplicaciones Recomendadas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Dónde Usar tu Firma Estilizada
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Aporta un toque distintivo a tu huella digital en 3 ubicaciones clave:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">✉️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Firma de Correo Profesional
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Destaca tu nombre en el cierre de tus correos en Gmail, Outlook o Apple Mail con una caligrafía impecable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">📸</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Marcas de Agua en Fotografía
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Añade tu nombre estilizado como sello en el pie de tus imágenes publicadas en redes sociales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">💼</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                Perfil de Instagram & LinkedIn
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Formatea la casilla de nombre principal para transmitir una imagen de marca personal exclusiva.
              </p>
            </div>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/letras-bonitas/letras-firma" />


        <FaqSection title="Preguntas Frecuentes sobre Letras para Firma" faqs={firmaFaqs} />
      </main>
    </div>
  );
}
