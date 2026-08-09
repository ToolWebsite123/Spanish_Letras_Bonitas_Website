import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Fuentes para Facebook - Conversor de Letras Negritas para Posts y Grupos 📘",
  description:
    "Convierte tu texto en letras negritas, resaltadas y decoradas para tus publicaciones de Facebook. Llama la atención en grupos y estados sin pagar nada.",
};

const fbFaqs = [
  {
    q: "¿Por qué Facebook no incluye un botón nativo para poner negrita en publicaciones normales?",
    a: "Facebook solo habilita herramientas de formato en notas o grupos específicos. Nuestro conversor soluciona esto generando caracteres Unicode en negrita sans (𝐁𝐨𝐥𝐝) que funcionan en cualquier post público o privado.",
  },
];

export default function FuentesParaFacebookPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Fuentes para Redes</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Fuentes para Facebook</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Fuentes y Letras Negritas para Facebook 📘
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Destaca tus publicaciones, anuncios y comentarios entre miles de post. Usa tipografías resaltadas en negrita para llamar la atención en el feed de tus amigos.
          </p>
        </header>

        <Converter highlightStyleId="bold" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>📢</span> Cómo Aumentar el Alcance de tus Publicaciones en Facebook
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Las primeras 3 palabras de una publicación determinan si un usuario se detiene a leer o continúa deslizando. Al convertir los primeros términos en negrita o encerrarlos entre símbolos, incrementas la visibilidad visual de tu mensaje.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Fuentes para Facebook" faqs={fbFaqs} />
      </main>
    </div>
  );
}
