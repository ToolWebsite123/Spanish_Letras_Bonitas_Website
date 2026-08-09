"use client";

import { useState } from "react";

export interface ExampleCategory {
  id: string;
  categoryTitle: string;
  categoryIcon: string;
  items: {
    persona: string;
    text: string;
  }[];
}

const DEFAULT_CATEGORIES: ExampleCategory[] = [
  {
    id: "insta-bios",
    categoryTitle: "Bios para Instagram por Profesión",
    categoryIcon: "📸",
    items: [
      { persona: "Fotógrafa / Creadora de Contenido", text: "🌸 𝓐𝓷𝓪 | 𝓕𝓸𝓽ó𝓰𝓻𝓪𝓯𝓪 📷\n✨ ᴍᴀᴅʀɪᴅ | ☕ ᶜᵒᶠᶠᵉᵉ ᵃᵈᵈⁱᶜᵗ\n💕 𝓥𝓲𝓿𝓲𝓮𝓷𝓭𝓸 𝓶𝓲𝓼 𝓼𝓾𝓮ñ𝓸𝓼\n👇 Link abajo" },
      { persona: "Personal Trainer / Fitness", text: "💪 𝓟𝓮𝓭𝓻𝓸 | 𝓟𝓮𝓻𝓼𝓸𝓷𝓪𝓵 𝓣𝓻𝓪𝓲𝓷𝓮𝓻\n🏋️ 𝓕𝓲𝓽𝓷𝓮𝓼𝓼 & 𝓦𝓮𝓵𝓵𝓷𝓮𝓼𝓼\n📍 𝔹𝕒𝕣𝕔𝕖𝕝𝕠𝕟𝕒 🇪🇸\n📧 ℂ𝕠𝕟𝕥𝕒𝕔𝕥𝕠 𝕡𝕠𝕣 𝔻𝕄" },
      { persona: "Estudiante Universitario", text: "📚 𝓜𝓪𝓻í𝓪 | 21 | 🎓\n🏛️ 𝓔𝓼𝓽𝓾𝓭𝓲𝓪𝓷𝓽𝓮 𝓭𝓮 𝓜𝓮𝓭𝓲𝓬𝓲𝓷𝓪\n☕ ᶜᵒᶠᶠᵉᵉ ᵃᵈᵈⁱᶜᵗ | 📖 𝓛𝓮𝓬𝓽𝓸𝓻𝓪\n💭 𝕊𝕠ñ𝕒𝕟𝕕𝕠 𝕒𝕝𝕥𝕠" },
      { persona: "Maquillaje & Beauty", text: "💄 𝓛𝓾𝓬í𝓪 | 𝓜𝓪𝓺𝓾𝓲𝓵𝓵𝓪𝓳𝓮 🌸\n✨ ᴛɪᴘs, ᴛᴜᴛᴏʀɪᴀʟᴇs & ʟᴏᴏᴋs\n💌 𝓒𝓸𝓵𝓪𝓫𝓸𝓻𝓪𝓬𝓲𝓸𝓷𝓮𝓼 𝓹𝓸𝓻 𝓓𝓜" },
    ],
  },
  {
    id: "ff-nicks",
    categoryTitle: "Nicks para Free Fire (12 Caracteres Max)",
    categoryIcon: "🎮",
    items: [
      { persona: "Estilo Guerrero / Clan Leader", text: "꧁★𝓟𝓻𝓸★꧂" },
      { persona: "Estilo Sombra / Asesino", text: "༺S𝖍𝖆𝖉𝖔𝖜༻" },
      { persona: "Estilo Femenino / Queen", text: "꧁♡𝓟𝓻𝓲𝓷𝓬𝓮𝓼𝓼♡꧂" },
      { persona: "Estilo Bandera México", text: "『🇲🇽』★𝓟𝓻𝓸★" },
      { persona: "Estilo Bandera España", text: "⦃🇪🇸⦄ᴋɪɴɢ" },
      { persona: "Estilo Bandera Argentina", text: "꧁🇦🇷༒𝓔𝓵𝓲𝓽𝓮꧂" },
    ],
  },
  {
    id: "wa-status",
    categoryTitle: "Status para WhatsApp & Frases",
    categoryIcon: "💬",
    items: [
      { persona: "Frase Motivacional", text: "✨ 𝓔𝓵 ú𝓷𝓲𝓬𝓸 𝓵í𝓶𝓲𝓽𝓮 𝓮𝓼 𝓽𝓾 𝓶𝓮𝓷𝓽𝓮 💭" },
      { persona: "Modo Disponible / Enfocado", text: "⚡ 𝓔𝓷𝓯𝓸𝓬𝓪𝓭𝓸 𝓮𝓷 𝓶𝓲𝓼 𝓶𝓮𝓽𝓪𝓼 🚀" },
      { persona: "Frase Aesthetic Corta", text: "🌙 𝕧𝕚𝕧𝕚𝕖𝕟𝕕𝕠 𝕖𝕟 𝕞𝕚 𝕡𝕣𝕠𝕡𝕚𝕠 𝕣𝕚𝕥𝕞𝕠 ✨" },
      { persona: "Frase Gótica", text: "𝔈𝔩 𝔰𝔦𝔩𝔢𝔫𝔠𝔦𝔬 𝔢𝔰 𝔩𝔞 𝔪𝔢𝔧𝔬𝔯 𝔯𝔢𝔰𝔟𝔲𝔢𝔰𝔱𝔞" },
    ],
  },
  {
    id: "tiktok-bios",
    categoryTitle: "Bios para TikTok (80 Caracteres)",
    categoryIcon: "🎵",
    items: [
      { persona: "Creador Gamer", text: "🎮 ɢᴀᴍɪɴɢ, ᴄʟɪᴘs & ʀɪsᴀs 😂 | ꜱɪɢᴜᴇᴍᴇ 📲" },
      { persona: "Moda & Lifestyle", text: "✨ ᴍᴏᴅᴀ, ᴏᴜᴛғɪᴛs & ᴠɪʙᴇs 🌸 | 𝕃𝕚𝕟𝕜 𝕒𝕓𝕒𝕛𝕠 👇" },
      { persona: "Humor & Trends", text: "🔥 ᴠɪᴅᴇᴏs ᴅɪᴀʀɪᴏs | ꜱɪ ᴛᴇ ʀɪᴇs, ᴘɪᴇʀᴅᴇs 🤪" },
    ],
  },
];

export default function ExamplesSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy example text: ", err);
    }
  };

  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-bold text-xs border border-teal-500/30">
          <span>🎁</span> Plantillas Listas en 1-Clic
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-2.5">
          50+ Ejemplos Listos para Copiar y Pegar por Categoría
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
          Ahorra tiempo copiando cualquiera de estos diseños probados y optimizados para el límite de caracteres de cada red social.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {DEFAULT_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="p-6 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-4"
          >
            <h3 className="font-extrabold text-base text-teal-400 flex items-center gap-2 pb-2.5 border-b border-purple-900/40">
              <span className="text-xl">{cat.categoryIcon}</span> {cat.categoryTitle}
            </h3>

            <div className="space-y-3.5">
              {cat.items.map((item, idx) => {
                const itemKey = `${cat.id}-${idx}`;
                const isCopied = copiedKey === itemKey;

                return (
                  <div
                    key={itemKey}
                    className="p-4 rounded-xl bg-[#1b1530] border border-purple-900/40 flex flex-col gap-2.5 relative overflow-hidden group hover:border-teal-400/60 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-extrabold text-teal-400">
                        {item.persona}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(itemKey, item.text)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1 shrink-0 ${
                          isCopied
                            ? "bg-emerald-600 text-white"
                            : "bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white shadow-md shadow-teal-500/20"
                        }`}
                      >
                        <span>{isCopied ? "¡Copiado!" : "Copiar"}</span>
                        <span>📋</span>
                      </button>
                    </div>

                    <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed bg-[#0f0c1b]/80 p-3 rounded-lg border border-purple-900/40">
                      {item.text}
                    </pre>

                    {/* Copied Overlay */}
                    <div
                      className={`absolute inset-0 bg-emerald-600/95 flex items-center justify-center text-white font-black text-xs tracking-wide transition-all duration-200 z-10 ${
                        isCopied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
                      }`}
                    >
                      <span>✨ ¡PLANTILLA COPIADA AL PORTAPAPELES!</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
