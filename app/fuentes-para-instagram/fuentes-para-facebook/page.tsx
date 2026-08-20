import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Converter from "@/components/Converter";
import FaqSection from "@/components/FaqSection";
import RelatedCategoriesWidget from "@/components/RelatedCategoriesWidget";

export const metadata: Metadata = {
  title: "Fuentes para Facebook - Letras para Publicaciones 📘",
  description:
    "Convierte textos en letras negritas, cursivas y decoradas para destacar tus publicaciones de Facebook, nombres de grupos, anuncios y comentarios.",
  alternates: {
    canonical: "/fuentes-para-instagram/fuentes-para-facebook",
  },
};

const facebookFaqs = [
  {
    q: "¿Cómo poner texto en negrita o cursiva en publicaciones de Facebook?",
    a: "Facebook no incluye botones de formato para publicaciones estándar de perfil. Escribe tu texto en la herramienta superior, selecciona la variante Negrita Sans (𝗕𝗼𝗹𝗱) o Cursiva (𝘚𝘤𝘳𝘪𝘱𝘵) y pégala directamente en la casilla de publicación.",
  },
  {
    q: "¿Preservan los anuncios y ofertas comerciales de Facebook el formato de negrita?",
    a: "¡Sí! El texto en negrita Unicode permanece 100% visible tanto en publicaciones orgánicas como en Facebook Ads, marketplace y comentarios.",
  },
  {
    q: "¿Se pueden personalizar los nombres de los Grupos de Facebook?",
    a: "¡Sí! Los administradores de grupos utilizan fuentes negritas y marcos de corchetes para hacer resaltar el nombre del grupo en los resultados de búsqueda de Facebook.",
  },
  {
    q: "¿Es seguro usar estas letras en Facebook?",
    a: "Totalmente seguro. No viola ninguna regla de la plataforma al tratarse de caracteres estándar internacionales Unicode.",
  },
  {
    q: "¿Cómo copiar las fuentes de Facebook en celular Android o iPhone?",
    a: "Toca cualquier tarjeta estilizada y la letra se copiará instantáneamente al portapapeles de tu teléfono lista para pegar.",
  },
];

export default function FuentesParaFacebookPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors flex flex-col">
      <NavBar showCategoryNav={false} />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-8 w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Hero Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Conversor de Fuentes para Facebook 📘
          </h1>
        </header>

        <Converter showCategoryNav={true} highlightStyleId="sans-bold" highlightStyleIds={["sans-bold", "sans-regular", "bold", "serif-bold", "monospace", "double-struck"]} />

        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📘 Estrategia para Facebook
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cómo Aumentar el Alcance Orgánico en Facebook con Fuentes en Negrita
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              El algoritmo de Facebook premia las publicaciones que consiguen mayor tiempo de lectura y comentarios. Aplicar fuentes llamativas en los primeros 2 renglones de tu post genera 3 ventajas competitivas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Rompe la Monotonía del Muro</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                El feed de Facebook está lleno de texto plano idéntico. Un titular en negrita resaltado (<code className="text-teal-600 dark:text-teal-400 font-bold">📢 ATENCIÓN COMUNIDAD</code>) atrae inmediatamente la mirada.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-3">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Resalta Precios en Marketplace</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Formatea las especificaciones de tus productos e precios para transmitir seriedad comercial.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION D — Facebook Prioriza Texto Simple en el Algoritmo, ¿Afecta la Negrita? */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📘 Optimización de Algoritmo
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Facebook Prioriza Texto Simple en el Algoritmo, ¿Afecta la Negrita?
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              La negrita Unicode no reduce tu alcance orgánico (no es &quot;texto especial&quot; para el algoritmo, son solo caracteres normales), pero abusar de ella en publicaciones largas puede parecer spam visual — úsala solo en la primera línea o palabras clave.
            </p>
          </div>
        </section>

        {/* SECTION E — Diferencia entre tu Nombre de Perfil y el Nombre de tu Página */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              👤 Perfil vs Página
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Diferencia entre tu Nombre de Perfil y el Nombre de tu Página
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Facebook prohíbe usar caracteres decorativos en tu nombre de perfil personal (puede suspender la cuenta), pero sí permite estilizar el nombre de Páginas comerciales y Grupos sin restricción.
            </p>
          </div>
        </section>

        {/* SECTION H — Dónde Puedes Usar Letras Estilizadas en Facebook */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📍 Ubicaciones Estratégicas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Dónde Puedes Usar Letras Estilizadas en Facebook
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Tu texto decorado tiene 5 lugares específicos dentro de Facebook donde realmente genera impacto:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Nombre de Perfil</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Normal → &quot;Carlos Mendoza&quot; | Estilizado → <code className="text-teal-600 dark:text-teal-400 font-bold">𝓒𝒶𝓇𝓁𝑜𝓈 𝓜𝑒𝓃𝒹𝑜𝔃𝒶</code>. Un nombre distintivo se recuerda más fácilmente entre amigos en común.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Biografía</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Ideal para citas motivacionales, descripciones personales o presentar tu profesión con un toque visual que destaque frente a biografías planas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">3. Publicaciones</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Usa negrita en la primera línea para romper la monotonía del feed — Facebook muestra publicaciones idénticas en texto plano una tras otra, y un estilo distinto capta el ojo de inmediato.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">4. Comentarios</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                En discusiones con cientos de respuestas similares, un comentario con texto decorado se distingue visualmente y aumenta la probabilidad de recibir respuestas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5 md:col-span-2 lg:col-span-1">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">5. Títulos de Páginas y Grupos</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Normal → &quot;Gaming World&quot; | Estilizado → <code className="text-teal-600 dark:text-teal-400 font-bold">𝙂𝙖𝙢𝙞𝙣𝙜 𝙒𝙤𝙧𝙡𝙙</code>. Un título creativo capta más atención cuando alguien navega por categorías de páginas.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION I — Cómo Cambiar la Fuente en Facebook: Guía Paso a Paso */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📝 Paso a Paso
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Cómo Cambiar la Fuente en Facebook: Guía Paso a Paso
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Sigue estos 5 sencillos pasos para transformar tus publicaciones de Facebook en segundos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">1. Escribe tu Texto</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Escribe tu texto en el conversor de arriba (tu nombre, biografía, publicación o comentario).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">2. Explora Estilos</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Explora los estilos generados — negrita, cursiva, gótica y más aparecen instantáneamente.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">3. Elige tu Favorito</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Elige el estilo que combine con el tono de tu publicación o perfil.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">4. Copia al Portapapeles</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Toca &quot;Copiar&quot; para guardar el texto estilizado en tu portapapeles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)] flex flex-col gap-2.5 md:col-span-2">
              <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">5. Pega en Facebook</span>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed">
                Pega el texto directamente en el campo correspondiente de Facebook — funciona igual en la app móvil y en la versión de escritorio.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION J — Tabla Comparativa: Estilos Más Usados en Facebook */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              📊 Tabla Comparativa
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              Tabla Comparativa: Estilos Más Usados en Facebook
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              Consulta la guía rápida de aplicación según el tipo de publicación:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-color)] bg-[var(--input-bg)] text-teal-600 dark:text-teal-400 font-extrabold">
                  <th className="p-4 rounded-tl-xl">Estilo</th>
                  <th className="p-4">Ejemplo</th>
                  <th className="p-4 rounded-tr-xl">Mejor Uso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                <tr className="hover:bg-[var(--input-bg)]/50 transition-colors">
                  <td className="p-4 font-bold text-[var(--foreground)]">Negrita</td>
                  <td className="p-4 font-bold text-teal-600 dark:text-teal-400">𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤</td>
                  <td className="p-4 text-[var(--foreground)] opacity-80">Titulares, anuncios, primera línea de posts</td>
                </tr>
                <tr className="hover:bg-[var(--input-bg)]/50 transition-colors">
                  <td className="p-4 font-bold text-[var(--foreground)]">Cursiva</td>
                  <td className="p-4 font-bold text-teal-600 dark:text-teal-400">𝓕𝓪𝓬𝓮𝓫𝑜𝑜𝓴</td>
                  <td className="p-4 text-[var(--foreground)] opacity-80">Citas, biografías, captions personales</td>
                </tr>
                <tr className="hover:bg-[var(--input-bg)]/50 transition-colors">
                  <td className="p-4 font-bold text-[var(--foreground)]">Gótica</td>
                  <td className="p-4 font-bold text-teal-600 dark:text-teal-400">𝕱𝖆𝖈𝖊𝖇𝖔𝖔𝖐</td>
                  <td className="p-4 text-[var(--foreground)] opacity-80">Nombres de grupos temáticos, gaming</td>
                </tr>
                <tr className="hover:bg-[var(--input-bg)]/50 transition-colors">
                  <td className="p-4 font-bold text-[var(--foreground)]">Versalitas</td>
                  <td className="p-4 font-bold text-teal-600 dark:text-teal-400">ғᴀᴄᴇʙᴏᴏᴋ</td>
                  <td className="p-4 text-[var(--foreground)] opacity-80">Nombre de perfil elegante y discreto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION K — ¿Facebook Detecta el Texto Unicode Como Contenido Sospechoso? */}
        <section className="flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
          <div className="flex flex-col gap-3 border-b border-[var(--border-color)] pb-5">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 self-start border border-teal-500/30">
              🛡️ Políticas de Meta & Anuncios
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--foreground)]">
              ¿Facebook Detecta el Texto Unicode Como Contenido Sospechoso?
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
              No — el texto Unicode decorado es completamente legítimo y no viola ninguna política de Facebook por sí solo, ya que técnicamente sigue siendo texto normal, solo que usa caracteres visualmente distintos. Sin embargo, en anuncios pagados, el sistema automatizado de revisión de Meta a veces marca publicaciones con exceso de caracteres decorativos como posible intento de evasión de filtros de spam, lo que puede retrasar la aprobación de tu anuncio. La solución simple: usa el estilo decorativo solo en el titular de tu anuncio, y mantén el cuerpo del texto en formato normal para una aprobación más rápida.
            </p>
          </div>
        </section>

        <RelatedCategoriesWidget currentPath="/fuentes-para-instagram/fuentes-para-facebook" />


        <FaqSection title="Preguntas Frecuentes sobre Fuentes para Facebook" faqs={facebookFaqs} />
      </main>
    </div>
  );
}
