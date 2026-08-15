import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Aviso Legal - Letras Bonitas",
  description: "Términos y condiciones legales de uso del sitio web Letras Bonitas.",
  alternates: {
    canonical: "/legal/aviso-legal",
  },
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />
      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-8 w-full max-w-4xl mx-auto flex flex-col gap-8">
        <header className="border-b border-[var(--border-color)] pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[var(--foreground)]">
            Aviso Legal
          </h1>
          <p className="text-xs text-[var(--foreground)] opacity-60 mt-2">Última actualización: 2026</p>
        </header>

        <article className="flex flex-col gap-6 text-sm opacity-90 leading-relaxed font-medium">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-teal-600 dark:text-teal-400">1. Condiciones de uso</h2>
            <p>
              El acceso y uso del sitio web Letras Bonitas atribuye la condición de usuario e implica la aceptación de todas las condiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-teal-600 dark:text-teal-400">2. Propiedad Intelectual</h2>
            <p>
              Los contenidos, logotipos, diseño gráfico y código fuente de esta web pertenecen a Letras Bonitas. Los caracteres tipográficos mostrados forman parte del estándar público internacional Unicode.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-teal-600 dark:text-teal-400">3. Exención de Responsabilidad</h2>
            <p>
              Letras Bonitas no se hace responsable de la compatibilidad total de los caracteres Unicode en dispositivos antiguos o aplicaciones de terceros.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
