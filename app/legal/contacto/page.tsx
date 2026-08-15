import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Contacto - Letras Bonitas",
  description: "Ponte en contacto con el equipo de Letras Bonitas para sugerencias o dudas.",
  alternates: {
    canonical: "/legal/contacto",
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />
      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-8 w-full max-w-4xl mx-auto flex flex-col gap-8">
        <header className="border-b border-[var(--border-color)] pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[var(--foreground)]">
            Contacto
          </h1>
        </header>

        <article className="flex flex-col gap-6 text-sm opacity-90 leading-relaxed font-medium">
          <p>
            ¿Tienes alguna sugerencia, consulta o reporte técnico? Puedes ponerte en contacto con nosotros escribiéndonos un correo electrónico:
          </p>
          <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Correo Electrónico:</span>
            <span className="font-mono text-base font-bold text-[var(--foreground)]">contacto@letrasbonitas.com</span>
          </div>
          <p className="text-xs text-[var(--foreground)] opacity-70">
            Respondemos habitualmente en un plazo de 24 a 48 horas laborables.
          </p>
        </article>
      </main>
    </div>
  );
}
