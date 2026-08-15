import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Política de Cookies - Letras Bonitas",
  description: "Detalles sobre las cookies utilizadas en Letras Bonitas y cómo gestionarlas.",
  alternates: {
    canonical: "/legal/politica-de-cookies",
  },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />
      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-8 w-full max-w-4xl mx-auto flex flex-col gap-8">
        <header className="border-b border-[var(--border-color)] pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[var(--foreground)]">
            Política de Cookies
          </h1>
          <p className="text-xs text-[var(--foreground)] opacity-60 mt-2">Última actualización: 2026</p>
        </header>

        <article className="flex flex-col gap-6 text-sm opacity-90 leading-relaxed font-medium">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-teal-600 dark:text-teal-400">¿Qué son las cookies?</h2>
            <p>
              Una cookie es un pequeño archivo de texto que un sitio web guarda en su ordenador o dispositivo móvil cuando usted lo visita.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-teal-600 dark:text-teal-400">Tipos de cookies que utilizamos</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong>Cookies técnicas:</strong> Garantizan el correcto funcionamiento del conversor y el almacenamiento de preferencias de diseño.</li>
              <li><strong>Cookies analíticas:</strong> Permiten medir de forma anónima el tráfico web para mejorar la experiencia de usuario.</li>
              <li><strong>Cookies publicitarias:</strong> Gestionadas por terceros como Google para ofrecer anuncios personalizados.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-teal-600 dark:text-teal-400">Cómo gestionar las cookies</h2>
            <p>
              Puede deshabilitar o rechazar el uso de cookies en cualquier momento desde la configuración de su navegador web.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
