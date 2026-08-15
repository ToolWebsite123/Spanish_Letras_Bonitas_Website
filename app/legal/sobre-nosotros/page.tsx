import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Letras Bonitas",
  description: "Conoce más sobre el proyecto Letras Bonitas y nuestro generador de fuentes.",
  alternates: {
    canonical: "/legal/sobre-nosotros",
  },
};

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />
      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-8 w-full max-w-4xl mx-auto flex flex-col gap-8">
        <header className="border-b border-[var(--border-color)] pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[var(--foreground)]">
            Sobre Nosotros
          </h1>
        </header>

        <article className="flex flex-col gap-6 text-sm opacity-90 leading-relaxed font-medium">
          <p>
            <strong>Letras Bonitas</strong> es una plataforma web independiente creada para ofrecer la mejor herramienta gratuita de conversión de tipografías y caracteres especiales Unicode en idioma español.
          </p>
          <p>
            Nuestra misión es ayudar a creadores de contenido, gamers y usuarios en general a personalizar su presencia digital en redes sociales como Instagram, TikTok, WhatsApp, Facebook y plataformas de juegos como Free Fire y Roblox de forma rápida, segura y 100% gratuita.
          </p>
        </article>
      </main>
    </div>
  );
}
