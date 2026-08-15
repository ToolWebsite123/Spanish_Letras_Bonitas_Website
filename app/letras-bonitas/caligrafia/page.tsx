import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import AlphabetReferenceTable from "@/components/AlphabetReferenceTable";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Caligrafía - Letras Caligráficas y Trazo Elegante ✍️",
  description:
    "Convierte texto en hermosa caligrafía clásica, trazos artísticos y letras elegantes para tarjetas, firmas e Instagram.",
};

const caligrafiaFaqs = [
  {
    q: "¿Qué diferencia a la caligrafía de las letras cursivas estándar?",
    a: "La caligrafía imita el trazo artesanal de pluma de estilográfica o pincel japonés, ofreciendo variaciones de grosor y remates floridos.",
  },
  {
    q: "¿Puedo usar fuentes caligráficas para invitaciones digitales?",
    a: "¡Sí! Es la mejor opción para personalizar nombres de invitados en tarjetas digitales de boda, graduación o aniversarios.",
  },
  {
    q: "¿Cómo copiar un texto en caligrafía?",
    a: "Ingresa tu frase en el recuadro superior y toca la tarjeta de caligrafía deseada para copiarla directamente.",
  },
];

export default function CaligrafiaPage() {
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
          <span className="text-teal-600 dark:text-teal-400 font-bold">Caligrafía</span>
        </nav>

        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>✍️</span> Arte Tipográfico Tradicional
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Letras de Caligrafía ✍️
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground)] opacity-80 leading-relaxed max-w-4xl font-medium">
            Genera textos caligráficos elegantes para <Link href="/letras-bonitas/letras-firma" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">firmas de correo</Link>, <Link href="/fuentes-para-instagram/bio-para-instagram" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">biografías de Instagram</Link> y <Link href="/letras-bonitas/letras-cursivas" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">fuentes cursivas finas</Link>.
          </p>
        </header>

        <Converter highlightStyleId="bold-script" />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ✍️ Elegancia Tipográfica
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Usos Recomendados de la Caligrafía Digital
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Aporta un toque artesanal y distinguido a tus creaciones digitales. Combina con nuestro <Link href="/letras-bonitas/letras-cursivas" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">abecedario cursivo A-Z</Link> y <Link href="/letras-personalizadas/nombres-personalizados" className="text-teal-600 dark:text-teal-400 underline font-bold hover:text-teal-700 dark:hover:text-teal-700 dark:text-teal-300">nombres personalizados</Link>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Invitaciones & Eventos</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Ideal para personalizar nombres en tarjetas digitales de boda o graduación.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Marcas Personales</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Añade prestigio al encabezado de tu sitio web o pie de fotos de Instagram.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Caligrafía Digital vs Caligrafía a Mano */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              ✒️ Comparativa Tipográfica
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Caligrafía Digital vs Caligrafía a Mano
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Conoce las diferencias y ventajas de utilizar caracteres caligráficos Unicode en tus publicaciones digitales frente a la caligrafía pluma tradicional:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400 flex items-center gap-2">
                <span>✒️</span> Caligrafía Digital (Unicode Script)
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Generación instantánea al instante sin necesidad de escaneo o software de diseño. Copia y pega directamente en campos de texto de Instagram, TikTok, WhatsApp y correos electrónicos con perfecta fidelidad visual en cualquier dispositivo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400 flex items-center gap-2">
                <span>🖊️</span> Caligrafía Pluma Tradicional
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Elaborada artesanalmente sobre papel con tintas y pinceles. Aunque ofrece variación física única, requiere digitalización previa e imágenes pesadas que no se pueden pegar como texto plano en redes sociales.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION E — Ideas de Uso: Invitaciones, Certificados y Menús Digitales */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📜 Inspiración Creativa
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Ideas de Uso: Invitaciones, Certificados y Menús Digitales
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Descubre 3 aplicaciones prácticas para elevar la presentación de tus documentos y piezas digitales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">💌</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                1. Invitaciones Digitales de Boda y Aniversario
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Añade prestancia a los nombres de los anfitriones e invitados en tarjetas electrónicas enviadas por WhatsApp o PDF.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🎓</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                2. Certificados & Reconocimientos
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Formatea los títulos de diplomas virtuales, talleres online y premios de participación con caligrafía ceremonial.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-2xl">🍽️</span>
              <h3 className="font-extrabold text-base text-[var(--foreground)]">
                3. Menús y Cartas de Gastronomía
              </h3>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Estiliza los encabezados de platillos de autor, cartas de cócteles y listas de precios de repostería en redes sociales.
              </p>
            </div>
          </div>
        </section>

        <AlphabetReferenceTable highlightStyleId="bold-script" />

        <RelatedCategoriesWidget currentPath="/letras-bonitas/caligrafia" />


        <FaqSection title="Preguntas Frecuentes sobre Caligrafía" faqs={caligrafiaFaqs} />
      </main>
    </div>
  );
}
