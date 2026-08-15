"use client";

import { useState } from "react";
import { fontStyles } from "@/lib/fontStyles";
import { convertText } from "@/lib/convertText";

export interface ExampleItem {
  persona: string;
  text: string;
  plainText: string;
  styleId: string;
}

export interface ExampleCategory {
  id: string;
  categoryTitle: string;
  categoryIcon: string;
  items: ExampleItem[];
}

const styleMapById: Record<string, Record<string, string>> = {};
fontStyles.forEach((style) => {
  styleMapById[style.id] = style.map;
});

const DEFAULT_CATEGORIES: ExampleCategory[] = [
  {
    id: "insta-bios",
    categoryTitle: "Bios para Instagram por Profesión",
    categoryIcon: "📸",
    items: [
      {
        persona: "Fotógrafa / Creadora de Contenido",
        text: "🌸 𝓐𝓷𝓪 | 𝓕𝓸𝓽ó𝓰𝓻𝓪𝓯𝓪 📷\n✨ ᴍᴀᴅʀɪᴅ | ☕ ᶜᵒᶠᶠᵉᵉ ᵃᵈᵈⁱᶜᵗ\n💕 𝓥𝓲𝓿𝓲𝓮𝓷𝓭𝓸 𝓶𝓲𝓼 𝓼𝓾𝓮ñ𝓸𝓼\n👇 Link abajo",
        plainText: "🌸 Ana | Fotógrafa 📷\n✨ MADRID | ☕ coffee addict\n💕 Viviendo mis sueños\n👇 Link abajo",
        styleId: "cursive",
      },
      {
        persona: "Personal Trainer / Fitness",
        text: "💪 𝓟𝓮𝓭𝓻𝓸 | 𝓟𝓮𝓻𝓼𝓸𝓷𝓪𝓵 𝓣𝓻𝓪𝓲𝓷𝓮𝓻\n🏋️ 𝓕𝓲𝓽𝓷𝓮𝓼𝓼 & 𝓦𝓮𝓵𝓵𝓷𝓮𝓼𝓼\n📍 𝔹𝕒𝕣𝕔𝕖𝕝𝕠𝕟𝕒 🇪🇸\n📧 ℂ𝕠𝕟𝕥𝕒𝕔𝕥𝕠 𝕡𝕠𝕣 𝔻𝕄",
        plainText: "💪 Pedro | Personal Trainer\n🏋️ Fitness & Wellness\n📍 Barcelona 🇪🇸\n📧 Contacto por DM",
        styleId: "cursive",
      },
      {
        persona: "Estudiante Universitario",
        text: "📚 𝓜𝓪𝓻í𝓪 | 21 | 🎓\n🏛️ 𝓔𝓼𝓽𝓾𝓭𝓲𝓪𝓷𝓽𝓮 𝓭𝓮 𝓜𝓮𝓭𝓲𝓬𝓲𝓷𝓪\n☕ ᶜᵒᶠᶠᵉᵉ ᵃᵈᵈⁱᶜᵗ | 📖 𝓛𝓮𝓬𝓽𝓸𝓻𝓪\n💭 𝕊𝕠ñ𝕒𝕟𝕕𝕠 𝕒𝕝𝕥𝕠",
        plainText: "📚 María | 21 | 🎓\n🏛️ Estudiante de Medicina\n☕ coffee addict | 📖 Lectora\n💭 Soñando alto",
        styleId: "cursive",
      },
      {
        persona: "Maquillaje & Beauty",
        text: "💄 𝓛𝓾𝓬í𝓪 | 𝓜𝓪𝓺𝓾𝓲𝓵𝓵𝓪𝓳𝓮 🌸\n✨ ᴛɪᴘs, ᴛᴜᴛᴏʀɪᴀʟᴇs & ʟᴏᴏᴋs\n💌 𝓒𝓸𝓵𝓪𝓫𝓸𝓻𝓪𝓬𝓲𝓸𝓷𝓮𝓼 𝓹𝓸𝓻 𝓓𝓜",
        plainText: "💄 Lucía | Maquillaje 🌸\n✨ tips, tutoriales & looks\n💌 Colaboraciones por DM",
        styleId: "cursive",
      },
    ],
  },
  {
    id: "ff-nicks",
    categoryTitle: "Nicks para Free Fire (12 Caracteres Max)",
    categoryIcon: "🎮",
    items: [
      {
        persona: "Estilo Guerrero / Clan Leader",
        text: "꧁★𝓟𝓻𝓸★꧂",
        plainText: "꧁★Pro★꧂",
        styleId: "cursive",
      },
      {
        persona: "Estilo Sombra / Asesino",
        text: "༺S𝖍𝖆𝖉𝖔𝖜༻",
        plainText: "༺Shadow༻",
        styleId: "gothic",
      },
      {
        persona: "Estilo Femenino / Queen",
        text: "꧁♡𝓟𝓻𝓲𝓷𝓬𝓮𝓼𝓼♡꧂",
        plainText: "꧁♡Princess♡꧂",
        styleId: "cursive",
      },
      {
        persona: "Estilo Bandera México",
        text: "『🇲🇽』★𝓟𝓻𝓸★",
        plainText: "『🇲🇽』★Pro★",
        styleId: "cursive",
      },
      {
        persona: "Estilo Bandera España",
        text: "⦃🇪🇸⦄ᴋɪɴɢ",
        plainText: "⦃🇪🇸⦄KING",
        styleId: "small",
      },
      {
        persona: "Estilo Bandera Argentina",
        text: "꧁🇦🇷༒𝓔𝓵𝓲𝓽𝓮꧂",
        plainText: "꧁🇦🇷༒Elite꧂",
        styleId: "cursive",
      },
    ],
  },
  {
    id: "wa-status",
    categoryTitle: "Status para WhatsApp & Frases",
    categoryIcon: "💬",
    items: [
      {
        persona: "Frase Motivacional",
        text: "✨ 𝓔𝓵 ú𝓷𝓲𝓬𝓸 𝓵í𝓶𝓲𝓽𝓮 𝓮𝓼 𝓽𝓾 𝓶𝓮𝓷𝓽𝓮 💭",
        plainText: "✨ El único límite es tu mente 💭",
        styleId: "cursive",
      },
      {
        persona: "Modo Disponible / Enfocado",
        text: "⚡ 𝓔𝓷𝓯𝓸𝓬𝓪𝓭𝓸 𝓮𝓷 𝓶𝓲𝓼 𝓶𝓮𝓽𝓪𝓼 🚀",
        plainText: "⚡ Enfocado en mis metas 🚀",
        styleId: "cursive",
      },
      {
        persona: "Frase Aesthetic Corta",
        text: "🌙 𝕧𝕚𝕧𝕚𝕖𝕟𝕕𝕠 𝕖𝕟 𝕞𝕚 𝕡𝕣𝕠𝕡𝕚𝕠 𝕣𝕚𝕥𝕞𝕠 ✨",
        plainText: "🌙 viviendo en mi propio ritmo ✨",
        styleId: "double-struck",
      },
      {
        persona: "Frase Gótica",
        text: "𝔈𝔩 𝔰𝔦𝔩𝔢𝔫𝔠𝔦𝔬 𝔢𝔰 𝔩𝔞 𝔪𝔢𝔧𝔬𝔯 𝔯𝔢𝔰𝔟𝔲𝔢𝔰𝔱𝔞",
        plainText: "El silencio es la mejor respuesta",
        styleId: "gothic",
      },
    ],
  },
  {
    id: "tiktok-bios",
    categoryTitle: "Bios para TikTok (80 Caracteres)",
    categoryIcon: "🎵",
    items: [
      {
        persona: "Creador Gamer",
        text: "🎮 ɢᴀᴍɪɴɢ, ᴄʟɪᴘs & ʀɪsᴀs 😂 | ꜱɪɢᴜᴇᴍᴇ 📲",
        plainText: "🎮 gaming, clips & risas 😂 | sigueme 📲",
        styleId: "small",
      },
      {
        persona: "Moda & Lifestyle",
        text: "✨ ᴍᴏᴅᴀ, ᴏᴜᴛғɪᴛs & ᴠɪʙᴇs 🌸 | 𝕃𝕚𝕟𝕜 𝕒𝕓𝕒𝕛𝕠 👇",
        plainText: "✨ moda, outfits & vibes 🌸 | Link abajo 👇",
        styleId: "small",
      },
      {
        persona: "Humor & Trends",
        text: "🔥 ᴠɪᴅᴇᴏs ᴅɪᴀʀɪᴏs | ꜱɪ ᴛᴇ ʀɪᴇs, ᴘɪᴇʀᴅᴇs 🤪",
        plainText: "🔥 videos diarios | si te ries, pierdes 🤪",
        styleId: "small",
      },
    ],
  },
];

export default function ExamplesSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [editingKeys, setEditingKeys] = useState<Record<string, boolean>>({});
  const [customTexts, setCustomTexts] = useState<Record<string, string>>({});

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

  const toggleEdit = (itemKey: string, defaultPlainText: string) => {
    setEditingKeys((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));

    if (customTexts[itemKey] === undefined) {
      setCustomTexts((prev) => ({ ...prev, [itemKey]: defaultPlainText }));
    }
  };

  const handleReset = (itemKey: string) => {
    setCustomTexts((prev) => {
      const next = { ...prev };
      delete next[itemKey];
      return next;
    });
  };

  const getStyledText = (itemKey: string, item: ExampleItem) => {
    const customText = customTexts[itemKey];
    if (customText !== undefined) {
      const map = styleMapById[item.styleId] || {};
      return convertText(customText, map, item.styleId);
    }
    return item.text;
  };

  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-xs border border-teal-500/30">
          <span>🎁</span> Plantillas Listas en 1-Clic
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] flex items-center gap-2.5">
          50+ Ejemplos Listos para Copiar y Pegar por Categoría
        </h2>
        <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
          Ahorra tiempo copiando cualquiera de estos diseños probados y optimizados para el límite de caracteres de cada red social. Haz clic en ✏️ Personalizar para adaptar cualquier plantilla a tu propio texto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {DEFAULT_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--input-bg)] flex flex-col gap-4"
          >
            <h3 className="font-extrabold text-base text-teal-600 dark:text-teal-400 flex items-center gap-2 pb-2.5 border-b border-[var(--border-color)]">
              <span className="text-xl">{cat.categoryIcon}</span> {cat.categoryTitle}
            </h3>

            <div className="space-y-3.5">
              {cat.items.map((item, idx) => {
                const itemKey = `${cat.id}-${idx}`;
                const isCopied = copiedKey === itemKey;
                const isEditing = !!editingKeys[itemKey];
                const isCustomized = customTexts[itemKey] !== undefined;
                const styledText = getStyledText(itemKey, item);

                return (
                  <div
                    key={itemKey}
                    className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col gap-3 relative overflow-hidden group hover:border-teal-400/60 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                      <span className="text-[11px] font-extrabold text-teal-600 dark:text-teal-400">
                        {item.persona}
                      </span>

                      <div className="flex items-center gap-1.5 shrink-0 ml-auto">
                        {/* Reset button if customized */}
                        {isCustomized && (
                          <button
                            type="button"
                            onClick={() => handleReset(itemKey)}
                            title="Restablecer plantilla original"
                            className="px-2 py-1 rounded-lg text-xs font-bold border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 transition-all cursor-pointer flex items-center gap-1"
                          >
                            <span>↺</span>
                            <span className="hidden sm:inline">Restablecer</span>
                          </button>
                        )}

                        {/* Personalize / Edit button */}
                        <button
                          type="button"
                          onClick={() => toggleEdit(itemKey, item.plainText)}
                          title="Personalizar texto"
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                            isEditing
                              ? "border border-amber-500/50 bg-amber-500/20 text-amber-600 dark:text-amber-300"
                              : "border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400 hover:bg-teal-500/20"
                          }`}
                        >
                          <span>✏️</span>
                          <span>{isEditing ? "Editar" : "Personalizar"}</span>
                        </button>

                        {/* Copy button */}
                        <button
                          type="button"
                          onClick={() => handleCopy(itemKey, styledText)}
                          className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1 shrink-0 ${
                            isCopied
                              ? "bg-emerald-600 text-white"
                              : "bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white shadow-md shadow-teal-500/20"
                          }`}
                        >
                          <span>{isCopied ? "¡Copiado!" : "Copiar"}</span>
                          <span>📋</span>
                        </button>
                      </div>
                    </div>

                    {/* Editable textarea if in edit mode */}
                    {isEditing && (
                      <div className="flex flex-col gap-1.5 pt-1">
                        <label className="text-[11px] font-bold text-[var(--foreground)] opacity-75 flex items-center gap-1">
                          <span>✏️</span> Escribe tu texto personalizado:
                        </label>
                        <textarea
                          rows={Math.max(2, (customTexts[itemKey] ?? item.plainText).split("\n").length)}
                          value={customTexts[itemKey] ?? item.plainText}
                          onChange={(e) => {
                            const val = e.target.value;
                            setCustomTexts((prev) => ({ ...prev, [itemKey]: val }));
                          }}
                          placeholder="Escribe aquí tu texto..."
                          className="w-full p-2.5 rounded-lg text-xs font-mono bg-[var(--input-bg)] text-[var(--foreground)] border border-teal-500/40 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none resize-y transition-all"
                        />
                        <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1 mt-0.5">
                          <span>✨</span> Vista previa en vivo:
                        </span>
                      </div>
                    )}

                    {/* Preview box */}
                    <pre className="text-xs font-mono text-[var(--foreground)] opacity-90 whitespace-pre-wrap leading-relaxed bg-[var(--background)]/80 p-3 rounded-lg border border-[var(--border-color)]">
                      {styledText || "(Escribe un texto arriba)"}
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
