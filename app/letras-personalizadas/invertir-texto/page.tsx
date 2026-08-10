import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import ExamplesSection from "@/components/ExamplesSection";

export const metadata: Metadata = {
  title: "Invertir Texto - Letras al Revés y De Cabeza 🔄",
  description:
    "Gira y voltea tu texto de cabeza (Upside Down) o invierte el orden de las letras para crear mensajes secretos y estados divertidos.",
};

const invertirFaqs = [
  {
    q: "¿Cómo funciona el conversor de texto al revés (Upside Down)?",
    a: "El conversor mapea cada letra del alfabeto con su carácter equivalente rotado 180 grados en la tabla estándar Unicode (por ejemplo, la 'a' se transforma en 'ɐ', la 'e' en 'ǝ' y la 'm' en 'ɯ') e invierte el orden de lectura de la frase.",
  },
  {
    q: "¿Dónde se pueden utilizar las letras invertidas de cabeza?",
    a: "Puedes copiarlas y pegarlas en estados de WhatsApp, comentarios de TikTok, publicaciones de Facebook, biografías de Instagram y mensajes privados de Discord.",
  },
  {
    q: "¿Existen dos tipos de inversión de texto (rotación vs inversión de orden)?",
    a: "¡Sí! Nuestra herramienta permite tanto voltear las letras de cabeza (ǝʇuǝɯɐʇɔǝɟɹǝd) como invertir el orden estricto de las letras de derecha a izquierda (texto espejo o anacíclico).",
  },
  {
    q: "¿Preserva el texto invertido los acentos en español (á, é, í, ó, ú, ñ)?",
    a: "¡Sí! El conversor asigna los glifos rotados correspondientes para vocales acentuadas y para la letra Ñ.",
  },
  {
    q: "¿Es compatible el texto invertido con celulares Android e iPhone?",
    a: "100% compatible. Todos los caracteres rotados son estándar público internacional y se visualizan en cualquier aplicación o navegador.",
  },
  {
    q: "¿Cómo copiar el texto invertido en 1 solo clic?",
    a: "Escribe tu frase en la casilla de entrada superior, selecciona la variante 'De Cabeza (Upside Down)' y toca la tarjeta resultante para copiar automáticamente al portapapeles.",
  },
];

export default function InvertirTextoPage() {
  return (
    <div className="min-h-screen bg-[#0f0c1b] text-slate-100 transition-colors flex flex-col">
      <NavBar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-teal-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-slate-400">Letras Personalizadas</span>
          <span>/</span>
          <span className="text-teal-400 font-bold">Invertir Texto</span>
        </nav>

        {/* Hero Header */}
        <header className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
            <span>🔄</span> Generador de Texto de Cabeza (Upside Down Text)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Texto Invertido al Revés 🔄
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-medium">
            Sorprende a tus amigos enviando frases rotadas 180 grados de cabeza (<code className="text-teal-400 font-bold">ǝʇuǝɯɐʇɔǝɟɹǝd</code>) o texto en espejo. Copia con 1 solo toque y comparte en WhatsApp, TikTok e Instagram.
          </p>
        </header>

        {/* Converter Tool */}
        <Converter highlightStyleId="upside-down" />

        {/* ARTÍCULO DETALLADO DEEP 1: La Física de los Caracteres Invertidos */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              🔄 Mecánica de la Inversión Unicode
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Guía de Uso: Cuándo y Cómo Utilizar Texto de Cabeza en Redes Sociales
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Escribir de cabeza o al revés genera un misterio visual instantáneo. En redes sociales y chats grupales se utiliza para 4 propósitos creativos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">1. Respuestas a Adivinanzas</span>
              <p className="text-slate-300 leading-relaxed">
                Publica preguntas en tus historias de Instagram o publicaciones de Facebook y pon la respuesta al final volteada de cabeza para que el usuario tenga que girar su teléfono para leerla.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">2. Cifrado Divertido en Grupos</span>
              <p className="text-slate-300 leading-relaxed">
                Envía comentarios o secretos en grupos de WhatsApp y Discord en formato rotado (ej: <code className="text-teal-400 font-bold">ʇǝɹɔǝs ǝssǝɯ</code>) para captar la atención de tus amigos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">3. Estados Originales y Bios</span>
              <p className="text-slate-300 leading-relaxed">
                Combina 1 renglón de texto normal con 1 renglón de cabeza en la presentación de tu perfil para dar un toque artístico o alternativo (Vaporwave / Alt aesthetic).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#231c3d] border border-purple-900/40 flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wider">4. Evitar Spoilers en Comentarios</span>
              <p className="text-slate-300 leading-relaxed">
                Escribe comentarios con spoilers de series, juegos o películas invertidos para que solo quienes deseen leerlo hagan el esfuerzo de voltear la pantalla.
              </p>
            </div>
          </div>
        </section>

        {/* TABLA DE MAPEO DE CARACTERES ROTADOS */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-purple-900/40 pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 self-start border border-teal-500/30">
              🔤 Mapeo de Caracteres
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
              Tabla de Equivalencias de Letras de Cabeza (A-Z)
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-mono">
              a→ɐ | b→q | c→ɔ | d→p | e→ǝ | f→ɟ | g→ƃ | h→ɥ | i→ᴉ | j→ɾ | k→ʞ | l→l | m→ɯ | n→u | o→o | p→d | q→b | r→ɹ | s→s | t→ʇ | u→n | v→ʌ | w→ʍ | x→x | y→ʎ | z→z
            </p>
          </div>
        </section>

        {/* Examples */}
        <ExamplesSection />

        {/* Comprehensive FAQ Section */}
        <FaqSection title="Preguntas Frecuentes sobre Invertir Texto" faqs={invertirFaqs} />
      </main>
    </div>
  );
}
