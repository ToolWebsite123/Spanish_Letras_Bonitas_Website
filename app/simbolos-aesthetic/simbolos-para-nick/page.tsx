import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Símbolos para Nick - Armas, Coronas, Alas y Corchetes Gamer ⚔️",
  description:
    "Copia símbolos para nicks de Free Fire, Roblox y PUBG: espadas, coronas, alas, cruces y corchetes decorativos con 1 clic.",
};

const nickSimbolosFaqs = [
  {
    q: "¿Cuáles son los símbolos más usados en apodos de juegos?",
    a: "Las coronas de rey (👑), alas (꧁꧂), espadas cruzadas (⚔️) y diamantes (♦) son los elementos ornamentales más populares en nombres de clan.",
  },
];

export default function SimbolosParaNickPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Símbolos Aesthetic</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Símbolos para Nick</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Símbolos Gamer para Nicks y Nombres ⚔️
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Encierra y decora tu apodo de jugador con alas, espadas y coronas compatibles con Free Fire y Roblox.
          </p>
        </header>

        <Converter highlightStyleId="gothic" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>🛡️</span> Decoración de Nicks de Alta Competencia
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Colocar corchetes especiales (ej: ꧁༺TEXTO༻꧂) enmarcan tu apodo y lo vuelven inconfundible en las tablas de matar.
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Símbolos para Nick" faqs={nickSimbolosFaqs} />
      </main>
    </div>
  );
}
