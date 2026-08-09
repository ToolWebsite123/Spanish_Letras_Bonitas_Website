import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Nombres para Roblox - Conversor de Display Name y Apodos 🧱",
  description:
    "Crea nombres para Roblox estéticos y divertidos para tu Display Name. Letras en burbujas, fuentes pequeñas y adornos que no son censurados por el filtro.",
};

const robloxFaqs = [
  {
    q: "¿Cuál es la diferencia entre el Username y el Display Name en Roblox?",
    a: "El Username es único e imutable (usado para iniciar sesión), mientras que el Display Name es el nombre visible que se muestra sobre tu personaje en los juegos y se puede cambiar gratis cada 7 días.",
  },
  {
    q: "¿Por qué Roblox censura (###) algunos nombres con letras raras?",
    a: "El filtro de chat y nombres de Roblox bloquea símbolos desconocidos o combinaciones sospechosas. Te sugerimos usar fuentes Unicode estándar como Burbujas (Circled) o Negritas simples que el filtro reconoce sin problemas.",
  },
];

export default function NombresParaRobloxPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Nicks para Juegos</span>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Nombres para Roblox</span>
        </nav>

        <header className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Generador de Nombres para Roblox 🧱
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Personaliza tu Display Name de Roblox con tipografías creativas. Destaca en tus experiencias de juego favoritas como Adopt Me, Brookhaven y Blox Fruits.
          </p>
        </header>

        <Converter highlightStyleId="bubble" />

        <section className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>🎮</span> Consejos para Evitar la Censura en Roblox
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Roblox tiene un filtro estricto de moderación. Elige fuentes limpias como 'Burbujas' o 'Pequeñas' y evita colocar demasiados símbolos matemáticos seguidos para prevenir que tu nombre se convierta en almohadillas (###).
          </p>
        </section>

        <FaqSection title="Preguntas Frecuentes sobre Nombres para Roblox" faqs={robloxFaqs} />
      </main>
    </div>
  );
}
