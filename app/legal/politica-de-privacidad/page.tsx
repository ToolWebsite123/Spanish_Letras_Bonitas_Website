import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Política de Privacidad - Letras Bonitas",
  description: "Información sobre cómo recopilamos, usamos y protegemos sus datos personales.",
  alternates: {
    canonical: "/legal/politica-de-privacidad",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />
      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-8 w-full max-w-4xl mx-auto flex flex-col gap-8">
        <header className="border-b border-[var(--border-color)] pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[var(--foreground)]">
            Política de Privacidad
          </h1>
          <p className="text-xs text-[var(--foreground)] opacity-60 mt-2">Última actualización: 2026</p>
        </header>

        <article className="flex flex-col gap-6 text-sm opacity-90 leading-relaxed font-medium">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-teal-600 dark:text-teal-400">1. Información que recopilamos</h2>
            <p>
              Letras Bonitas no requiere el registro de usuarios ni solicita datos de identificación personal para el uso de nuestras herramientas de conversión de texto.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-teal-600 dark:text-teal-400">2. Uso de Cookies y Publicidad</h2>
            <p>
              Utilizamos cookies técnicas necesarias para mantener sus preferencias (como el modo oscuro y estilos favoritos almacenados localmente en su navegador). Adicionalmente, proveedores externos como Google AdSense pueden utilizar cookies para mostrar anuncios relevantes basados en sus visitas previas a este u otros sitios web.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-teal-600 dark:text-teal-400">3. Enlaces a terceros</h2>
            <p>
              Nuestro sitio puede contener enlaces a sitios externos. No nos hacemos responsables de las prácticas de privacidad o contenidos de dichos sitios.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-teal-600 dark:text-teal-400">4. Contacto</h2>
            <p>
              Si tiene dudas sobre nuestra política de privacidad, puede ponerse en contacto con nosotros a través de la página correspondiente.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
