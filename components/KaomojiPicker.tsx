"use client";

import { useState, useMemo } from "react";

export interface KaomojiItem {
  symbol: string;
  name: string;
  category: string;
  tags: string[];
}

export const KAOMOJI_LIST: KaomojiItem[] = [
  // 1. Kaomoji Lindos (Cute)
  { symbol: "(｡◕‿◕｡)", name: "Ojos tiernos", category: "Lindos", tags: ["cute", "lindo", "tierno", "ojo"] },
  { symbol: "(๑•ᴗ•๑)", name: "Sonrisa tierna", category: "Lindos", tags: ["cute", "lindo", "sonrisa"] },
  { symbol: "(˶ᵔ ᵕ ᵔ˶)", name: "Carita feliz tierna", category: "Lindos", tags: ["cute", "lindo", "feliz"] },
  { symbol: "(🌸^◡^)", name: "Flor alegre", category: "Lindos", tags: ["cute", "flor", "lindo"] },
  { symbol: "(´｡• ᵕ •｡`)", name: "Sonrojo tierno", category: "Lindos", tags: ["cute", "lindo", "sonrojo"] },
  { symbol: "ฅ(≈>⠂<≈)ฅ", name: "Gatito lindo", category: "Lindos", tags: ["cute", "gato", "lindo"] },
  { symbol: "(✿◠‿◠)", name: "Flor sonriente", category: "Lindos", tags: ["cute", "flor", "lindo"] },
  { symbol: "( •̀ ω •́ )✧", name: "Brillo tierno", category: "Lindos", tags: ["cute", "brillo", "lindo"] },
  { symbol: "(◕‿◕✿)", name: "Florita dulce", category: "Lindos", tags: ["cute", "flor", "lindo"] },
  { symbol: "(◠‿◠✿)", name: "Ojos cerrados flor", category: "Lindos", tags: ["cute", "flor", "lindo"] },

  // 2. Kaomoji Felices (Happy)
  { symbol: "(⁠^⁠^⁠)", name: "Felicidad simple", category: "Felices", tags: ["feliz", "happy", "sonrisa"] },
  { symbol: "(⁠≧⁠▽⁠≦⁠)", name: "Gran risa", category: "Felices", tags: ["feliz", "risa", "happy"] },
  { symbol: "(⁠✿⁠^⁠‿⁠^⁠)", name: "Felicidad floral", category: "Felices", tags: ["feliz", "flor", "happy"] },
  { symbol: "(⁠*⁠´⁠ω⁠｀⁠*⁠)", name: "Satisfacción feliz", category: "Felices", tags: ["feliz", "happy", "dulce"] },
  { symbol: "(⁠ﾉ⁠◕⁠ヮ⁠◕⁠)⁠ﾉ⁠*⁠`⁠:⁠*⁠.⁠✧", name: "Magia y alegría", category: "Felices", tags: ["feliz", "magia", "happy"] },
  { symbol: "＼(≧▽≦)／", name: "Brazos arriba feliz", category: "Felices", tags: ["feliz", "victoria", "happy"] },
  { symbol: "(b ﾟ◡ﾟ)b", name: "Pulgares arriba feliz", category: "Felices", tags: ["feliz", "like", "ok"] },
  { symbol: "(⁠°⁠v⁠°⁠)", name: "Pajarito feliz", category: "Felices", tags: ["feliz", "ave", "happy"] },
  { symbol: "(⁠￣⁠︶⁠￣⁠)", name: "Paz y felicidad", category: "Felices", tags: ["feliz", "paz", "happy"] },
  { symbol: "(⁠~⁠￣⁠▽⁠￣⁠)⁠~", name: "Flotando de alegría", category: "Felices", tags: ["feliz", "baile", "happy"] },

  // 3. Kaomoji de Amor y Corazones (Love & Heart)
  { symbol: "(⁠♡⁠ω⁠♡⁠)", name: "Ojos de corazón", category: "Amor", tags: ["amor", "corazon", "love"] },
  { symbol: "(⁠づ⁠￣⁠ ⁠³⁠￣⁠)⁠づ", name: "Beso volador", category: "Amor", tags: ["amor", "beso", "love"] },
  { symbol: "(⁠ ⁠˘⁠ ⁠³⁠˘⁠)⁠♥", name: "Beso con corazón", category: "Amor", tags: ["amor", "beso", "corazon"] },
  { symbol: "(⁠♥⁠_⁠♥⁠)", name: "Enamorado", category: "Amor", tags: ["amor", "corazon", "love"] },
  { symbol: "ヽ(♡‿♡)ノ", name: "Brazos abiertos amor", category: "Amor", tags: ["amor", "corazon", "love"] },
  { symbol: "(⁠✿⁠ ♡⁠‿⁠♡⁠)", name: "Flor de amor", category: "Amor", tags: ["amor", "corazon", "flor"] },
  { symbol: "(⁠๑⁠˙⁠❥⁠˙⁠๑⁠)", name: "Pico de beso", category: "Amor", tags: ["amor", "beso", "love"] },
  { symbol: "(⁠•⁠ө⁠•⁠)⁠♡", name: "Pollito amoroso", category: "Amor", tags: ["amor", "corazon", "love"] },
  { symbol: "(⁠〃⁠ﾟ⁠3⁠ﾟ⁠〃⁠)", name: "Sonrojo y beso", category: "Amor", tags: ["amor", "beso", "love"] },
  { symbol: "(⁠ʃ⁠ƪ⁠＾⁠3⁠＾⁠）", name: "Enviando cariño", category: "Amor", tags: ["amor", "beso", "love"] },

  // 4. Kaomoji de Gatos (Cat)
  { symbol: "ฅ(•ㅅ•❀)ฅ", name: "Gatito con flor", category: "Gatos", tags: ["gato", "cat", "neko"] },
  { symbol: "(⁠=⁠^⁠･⁠ｪ⁠･⁠^⁠=⁠)", name: "Gato clásico", category: "Gatos", tags: ["gato", "cat", "neko"] },
  { symbol: "ฅ(^•ﻌ•^)ฅ", name: "Gatito feliz", category: "Gatos", tags: ["gato", "cat", "neko"] },
  { symbol: "(⁠=⁠^⁠･⁠ω⁠･⁠^⁠=⁠)", name: "Gato bigotes", category: "Gatos", tags: ["gato", "cat", "neko"] },
  { symbol: "ฅ(• ֊ •)ฅ", name: "Gatito saludando", category: "Gatos", tags: ["gato", "cat", "neko"] },
  { symbol: "(⁠-⁠ω⁠-⁠-⁠`⁠.⁠.⁠.⁠)ฅ", name: "Gato durmiendo", category: "Gatos", tags: ["gato", "cat", "neko"] },
  { symbol: "ฅ( ̳• ·̫ • ̳ฅ)", name: "Gato pata tierna", category: "Gatos", tags: ["gato", "cat", "neko"] },
  { symbol: "(⁠^⁠O⁠^⁠=⁠)", name: "Gato maullando", category: "Gatos", tags: ["gato", "cat", "neko"] },
  { symbol: "ฅ( •ω• ฅ)", name: "Gato garritas", category: "Gatos", tags: ["gato", "cat", "neko"] },
  { symbol: "(⁠=⁠~⁠ω⁠~⁠=⁠)", name: "Gato satisfecho", category: "Gatos", tags: ["gato", "cat", "neko"] },

  // 5. Kaomoji Llorando (Crying)
  { symbol: "(⁠╥⁠﹏⁠╥⁠)", name: "Lloro intenso", category: "Llorando", tags: ["llorar", "cry", "triste"] },
  { symbol: "(⁠;⁠_⁠;⁠)", name: "Lágrima simple", category: "Llorando", tags: ["llorar", "cry", "triste"] },
  { symbol: "(⁠θ⁠‿⁠θ⁠)⁠.⁠.⁠.⁠💧", name: "Gota de tristeza", category: "Llorando", tags: ["llorar", "cry", "gota"] },
  { symbol: "(⁠ ⁠qq⁠ ⁠)", name: "Ojos llorosos QQ", category: "Llorando", tags: ["llorar", "cry", "qq"] },
  { symbol: "(⁠T⁠_⁠T⁠)", name: "Lloro T_T", category: "Llorando", tags: ["llorar", "cry", "triste"] },
  { symbol: "(⁠༎ຶ⁠⌑⁠༎ຶ⁠)", name: "Lloro dramático", category: "Llorando", tags: ["llorar", "cry", "drama"] },
  { symbol: "(⁠╥⁠_⁠╥⁠)", name: "Ojos cerrados lloro", category: "Llorando", tags: ["llorar", "cry", "triste"] },
  { symbol: "(⁠path⁠﹏⁠path⁠)", name: "Lágrimas desconsoladas", category: "Llorando", tags: ["llorar", "cry", "triste"] },
  { symbol: "(⁠;⁠ª⁠;⁠)", name: "Sollozo", category: "Llorando", tags: ["llorar", "cry", "triste"] },
  { symbol: "(⁠Q⁠_⁠Q⁠)", name: "Ojos grandes lloro", category: "Llorando", tags: ["llorar", "cry", "triste"] },

  // 6. Kaomoji Tristes (Sad)
  { symbol: "(⁠´⁠.⁠ ⁠.⁠ ⁠`⁠)", name: "Tristeza silenciosa", category: "Tristes", tags: ["triste", "sad", "pena"] },
  { symbol: "(⁠ ⁠•⁠︵⁠•⁠ ⁠)", name: "Boca abajo triste", category: "Tristes", tags: ["triste", "sad", "boca"] },
  { symbol: "(⁠.⁠_⁠.⁠)", name: "Mirada hacia abajo", category: "Tristes", tags: ["triste", "sad", "deprimido"] },
  { symbol: "(⁠ ⁠•⁠ ⁠c⁠_⁠ ⁠•⁠ ⁠)", name: "Desanimado", category: "Tristes", tags: ["triste", "sad", "desanimo"] },
  { symbol: "(⁠/⁠･⁠_⁠･⁠/⁠)", name: "Apenado", category: "Tristes", tags: ["triste", "sad", "pena"] },
  { symbol: "(⁠ ⁠•⁠⩊⁠•⁠ ⁠)", name: "Melancólico", category: "Tristes", tags: ["triste", "sad", "melancolia"] },
  { symbol: "(⁠ ⁠•⁠́⁠ ⁠A⁠ ⁠•⁠̀⁠ ⁠)", name: "Preocupado triste", category: "Tristes", tags: ["triste", "sad", "preocupado"] },
  { symbol: "(⁠´⁠-⁠﹏⁠-⁠`⁠)", name: "Afligido", category: "Tristes", tags: ["triste", "sad", "afligido"] },
  { symbol: "(⁠-⁠_⁠-⁠;⁠)", name: "Suspiro triste", category: "Tristes", tags: ["triste", "sad", "suspiro"] },
  { symbol: "(⁠•⁠‸⁠•⁠)", name: "Cabizbajo", category: "Tristes", tags: ["triste", "sad", "cabizbajo"] },

  // 7. Kaomoji de Abrazo (Hug)
  { symbol: "(⁠っ⁠.⁠❛⁠ ⁠ᴗ⁠ ⁠❛⁠.⁠)⁠っ", name: "Abrazo dulce", category: "Abrazo", tags: ["abrazo", "hug", "cariño"] },
  { symbol: "(⁠つ⁠✧⁠ω⁠✧⁠)⁠つ", name: "Abrazo brillante", category: "Abrazo", tags: ["abrazo", "hug", "brillo"] },
  { symbol: "(⁠⊃⁠｡⁠•́⁠‿⁠•̀⁠｡⁠)⁠⊃", name: "Abrazo reconfortante", category: "Abrazo", tags: ["abrazo", "hug", "amor"] },
  { symbol: "(⁠っ⁠O⁠v⁠O⁠)⁠っ", name: "Abrazo de búho", category: "Abrazo", tags: ["abrazo", "hug", "lindo"] },
  { symbol: "(⁠つ⁠≧⁠▽⁠≦⁠)⁠つ", name: "Abrazo eufórico", category: "Abrazo", tags: ["abrazo", "hug", "alegria"] },
  { symbol: "(⁠⊃⁠•⁠ ⁠v⁠ ⁠•⁠⊃⁠)", name: "Abrazo cálido", category: "Abrazo", tags: ["abrazo", "hug", "calido"] },
  { symbol: "(⁠づ⁠｡⁠◕⁠‿⁠‿⁠◕⁠｡⁠)⁠づ", name: "Abrazo gigante", category: "Abrazo", tags: ["abrazo", "hug", "gigante"] },
  { symbol: "(⁠つ⁠.⁠ ⁠•́⁠ ⁠_⁠ ⁠•̀⁠.⁠)⁠つ", name: "Abrazo de apoyo", category: "Abrazo", tags: ["abrazo", "hug", "apoyo"] },
  { symbol: "(⁠⊃⁠ª⁠‿⁠ª⁠)⁠⊃", name: "Abrazo sonriente", category: "Abrazo", tags: ["abrazo", "hug", "sonrisa"] },
  { symbol: "(⁠っ⁠´⁠ω⁠｀⁠っ⁠)", name: "Abrazo de oso", category: "Abrazo", tags: ["abrazo", "hug", "oso"] },

  // 8. Kaomoji Enojados (Angry)
  { symbol: "(⁠ ⁠｀⁠—⁠´⁠ ⁠)", name: "Enojado serio", category: "Enojados", tags: ["enojado", "angry", "furia"] },
  { symbol: "(⁠ノ⁠ಠ⁠益⁠ಠ⁠)⁠ノ", name: "Furia total", category: "Enojados", tags: ["enojado", "angry", "furia"] },
  { symbol: "(⁠ಠ⁠_⁠ಠ⁠)", name: "Mirada juzgadora", category: "Enojados", tags: ["enojado", "angry", "disgusto"] },
  { symbol: "(⁠/⁠¯⁠◡⁠f⁠)⁠/ ", name: "Molesto", category: "Enojados", tags: ["enojado", "angry", "molesto"] },
  { symbol: "(⁠`⁠^⁠´⁠)", name: "Berrinche", category: "Enojados", tags: ["enojado", "angry", "berrinche"] },
  { symbol: "(⁠╬⁠ಠ⁠益⁠ಠ⁠)", name: "Vena hinchada ira", category: "Enojados", tags: ["enojado", "angry", "ira"] },
  { symbol: "(⁠ ⁠｀⁠A⁠´⁠ ⁠)", name: "Grito de rabia", category: "Enojados", tags: ["enojado", "angry", "rabia"] },
  { symbol: "(⁠凸⁠ಠ⁠益⁠ಠ⁠凸⁠)", name: "Indignación", category: "Enojados", tags: ["enojado", "angry", "furia"] },
  { symbol: "(⁠ ⁠`⁠o⁠´⁠ ⁠)", name: "Enojado gritando", category: "Enojados", tags: ["enojado", "angry", "grito"] },
  { symbol: "(⁠ノ⁠A⁠´⁠)⁠ノ", name: "Lanzando mesa ira", category: "Enojados", tags: ["enojado", "angry", "mesa"] },

  // 9. Kaomoji Sonrojados (Shy/Blush)
  { symbol: "(⁠〃⁠ﾟ⁠3⁠ﾟ⁠〃⁠)", name: "Sonrojo pena", category: "Sonrojados", tags: ["sonrojo", "shy", "timido"] },
  { symbol: "(⁠ ⁠•⁠ ⁠(//⁠∇⁠//⁠)⁠ ⁠•⁠ ⁠)", name: "Mega sonrojo", category: "Sonrojados", tags: ["sonrojo", "shy", "timido"] },
  { symbol: "(⁠ ⁠///⁠ ⁠•⁠ ⁠a⁠ ⁠•⁠ ⁠///⁠ ⁠)", name: "Pena tímida", category: "Sonrojados", tags: ["sonrojo", "shy", "timido"] },
  { symbol: "(⁠ ⁠〃⁠.⁠ ⁠.⁠ ⁠〃⁠)", name: "Mirada baja sonrojo", category: "Sonrojados", tags: ["sonrojo", "shy", "timido"] },
  { symbol: "(⁠*⁠ﾉ⁠▽⁠ﾉ⁠*⁠)", name: "Tapándose la cara", category: "Sonrojados", tags: ["sonrojo", "shy", "cara"] },
  { symbol: "(⁠ ⁠•⁠ ⁠.⁠ ⁠•⁠ ⁠〃⁠)", name: "Sonrojo sutil", category: "Sonrojados", tags: ["sonrojo", "shy", "sutil"] },
  { symbol: "(⁠ ⁠/⁠/⁠/⁠.⁠/⁠.⁠/⁠/⁠/⁠)", name: "Líneas de sonrojo", category: "Sonrojados", tags: ["sonrojo", "shy", "lineas"] },
  { symbol: "(⁠ ⁠•⁠ ⁠.⁠ ⁠•⁠ ⁠)⁠?⁠///", name: "Confuso y timido", category: "Sonrojados", tags: ["sonrojo", "shy", "confuso"] },
  { symbol: "(⁠ ⁠〃⁠∀⁠〃⁠)", name: "Sonrisa avergonzada", category: "Sonrojados", tags: ["sonrojo", "shy", "sonrisa"] },
  { symbol: "(⁠ ⁠///⁠￣⁠3⁠￣⁠///⁠)", name: "Beso apenado", category: "Sonrojados", tags: ["sonrojo", "shy", "beso"] },

  // 10. Kaomoji Confundidos/Pensando (Thinking/Confused)
  { symbol: "(⁠・⁠_⁠・⁠?⁠)", name: "Duda simple", category: "Pensando", tags: ["pensando", "duda", "confuso"] },
  { symbol: "(⁠ ⁠•⁠_⁠•⁠ ⁠)⁠?", name: "Interrogante", category: "Pensando", tags: ["pensando", "duda", "pregunta"] },
  { symbol: "(⁠;⁠_⁠;⁠?⁠)", name: "Duda con sudor", category: "Pensando", tags: ["pensando", "sudor", "confuso"] },
  { symbol: "(⁠ ⁠-⁠_⁠-⁠;⁠?⁠)", name: "Incredulidad", category: "Pensando", tags: ["pensando", "duda", "increible"] },
  { symbol: "(⁠•⁠ ⁠A⁠ ⁠•⁠?⁠)", name: "Sorprendido confuso", category: "Pensando", tags: ["pensando", "duda", "que"] },
  { symbol: "(⁠⊙⁠_⁠⊙⁠?⁠)", name: "Ojos desorbitados", category: "Pensando", tags: ["pensando", "duda", "ojos"] },
  { symbol: "(⁠ ⁠-⁠ ⁠-⁠;⁠?⁠)", name: "Pensativo", category: "Pensando", tags: ["pensando", "duda", "pensando"] },
  { symbol: "(⁠ ⁠•⁠⩊⁠•⁠?⁠)", name: "Cuestionamiento", category: "Pensando", tags: ["pensando", "duda", "pregunta"] },
  { symbol: "(⁠・⁠o⁠・⁠?⁠)", name: "Boca abierta duda", category: "Pensando", tags: ["pensando", "duda", "boca"] },
  { symbol: "(⁠?⁠_⁠?⁠)", name: "Confusión total", category: "Pensando", tags: ["pensando", "duda", "confuso"] },

  // 11. Kaomoji Bailando (Dancing)
  { symbol: "ヽ(º▽º)ノ", name: "Bailando alegre", category: "Bailando", tags: ["baile", "dance", "fiesta"] },
  { symbol: "(⁠♪⁠┌⁠|⁠`⁠ー⁠`⁠|⁠┘⁠♪⁠)", name: "Ritmo con música", category: "Bailando", tags: ["baile", "musica", "dance"] },
  { symbol: "ヾ(⌐■_■)ノ♪", name: "DJ con gafas", category: "Bailando", tags: ["baile", "dj", "gafas"] },
  { symbol: "└( ＾ω＾ )┐", name: "Paso de baile 1", category: "Bailando", tags: ["baile", "dance", "paso"] },
  { symbol: "└(^_^)┐", name: "Paso de baile 2", category: "Bailando", tags: ["baile", "dance", "paso"] },
  { symbol: "(⁠/⁠^⁠o⁠^⁠)⁠/ ", name: "Brazos de baile", category: "Bailando", tags: ["baile", "dance", "fiesta"] },
  { symbol: "ƪ(˘⌣˘)ʃ", name: "Disfrutando la música", category: "Bailando", tags: ["baile", "dance", "relax"] },
  { symbol: "┌(★o★)┘", name: "Baile de estrellas", category: "Bailando", tags: ["baile", "dance", "estrella"] },
  { symbol: "＼(ﾟｰﾟ＼)", name: "Onda de baile", category: "Bailando", tags: ["baile", "dance", "onda"] },
  { symbol: "└(oﾟ▽ﾟ)o", name: "Salto de baile", category: "Bailando", tags: ["baile", "dance", "salto"] },

  // 12. Kaomoji Graciosos y Locos (Funny/Crazy)
  { symbol: "( ͡° ͜ʖ ͡°)", name: "Lenny Face guiño", category: "Graciosos", tags: ["gracioso", "lenny", "meme"] },
  { symbol: "(⁠ ⁠o⁠ ⁠o⁠ ⁠)", name: "Carita loca", category: "Graciosos", tags: ["gracioso", "loco", "meme"] },
  { symbol: "¯\\_(ツ)_/¯", name: "Shrug (qué se le va a hacer)", category: "Graciosos", tags: ["gracioso", "shrug", "meme"] },
  { symbol: "(⁠°⁠o⁠°⁠)", name: "Sorpresa graciosa", category: "Graciosos", tags: ["gracioso", "sorpresa", "meme"] },
  { symbol: "(⁠ ⁠⊙⁠ ⁠o⁠ ⁠⊙⁠ ⁠)", name: "Asombro loco", category: "Graciosos", tags: ["gracioso", "loco", "meme"] },
  { symbol: "(⁠ﾉ⁠°⁠o⁠°⁠)⁠ﾉ", name: "Susto cómico", category: "Graciosos", tags: ["gracioso", "susto", "meme"] },
  { symbol: "(⁠ ⁠ﾟ⁠д⁠ﾟ⁠)", name: "Cara descompuesta", category: "Graciosos", tags: ["gracioso", "loco", "meme"] },
  { symbol: "(⁠ಠ⁠v⁠ಠ⁠)", name: "Búho gracioso", category: "Graciosos", tags: ["gracioso", "buho", "meme"] },
  { symbol: "┌( ಠ_ಠ)┘", name: "Caminata rara", category: "Graciosos", tags: ["gracioso", "caminata", "meme"] },
  { symbol: "(⊙_☉)", name: "Ojos cruzados", category: "Graciosos", tags: ["gracioso", "loco", "meme"] },
];

const CATEGORIES = [
  "Todos",
  "Lindos",
  "Felices",
  "Amor",
  "Gatos",
  "Llorando",
  "Tristes",
  "Abrazo",
  "Enojados",
  "Sonrojados",
  "Pensando",
  "Bailando",
  "Graciosos",
];

export default function KaomojiPicker() {
  const [selectedCat, setSelectedCat] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(48);

  const filteredKaomojis = useMemo(() => {
    return KAOMOJI_LIST.filter((k) => {
      const matchCat = selectedCat === "Todos" || k.category === selectedCat;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchName = k.name.toLowerCase().includes(q);
      const matchSymbol = k.symbol.toLowerCase().includes(q);
      const matchCategory = k.category.toLowerCase().includes(q);
      const matchTags = k.tags.some((t) => t.toLowerCase().includes(q));

      return matchName || matchSymbol || matchCategory || matchTags;
    });
  }, [selectedCat, searchQuery]);

  const displayedKaomojis = useMemo(() => {
    return filteredKaomojis.slice(0, visibleCount);
  }, [filteredKaomojis, visibleCount]);

  const handleCopy = async (symbol: string) => {
    try {
      await navigator.clipboard.writeText(symbol);
      setCopiedSymbol(symbol);
      setTimeout(() => {
        setCopiedSymbol((prev) => (prev === symbol ? null : prev));
      }, 1800);
    } catch (e) {
      console.error("Failed to copy kaomoji: ", e);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 p-4 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-[#faf8f5] dark:bg-zinc-900 shadow-xs">
      {/* Search Input Bar */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-600 dark:text-amber-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setVisibleCount(48);
          }}
          placeholder="Buscar kaomoji (ej. gato, feliz, amor, lindo, ( ͡° ͜ʖ ͡°))..."
          className="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all shadow-xs"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category Pills Tabs Bar */}
      <div className="bg-[#ede7df]/80 dark:bg-zinc-800/80 p-1.5 rounded-xl flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCat === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCat(cat);
                setVisibleCount(48);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                isActive
                  ? "bg-white dark:bg-zinc-700 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 hover:bg-white/40 dark:hover:bg-zinc-700/40"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Counter Row */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-500 dark:text-zinc-400 font-semibold">
        <span>Mostrando {displayedKaomojis.length} de {filteredKaomojis.length} kaomojis</span>
        <span className="text-[11px] opacity-75">Toca cualquier tarjeta para copiar</span>
      </div>

      {/* Empty Search State */}
      {filteredKaomojis.length === 0 && (
        <div className="text-center py-12 px-4 rounded-xl border border-dashed border-slate-300 dark:border-zinc-700 flex flex-col items-center gap-2">
          <span className="text-3xl">(⁠・⁠_⁠・⁠?⁠)</span>
          <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
            No se encontraron kaomojis con ese criterio
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCat("Todos");
            }}
            className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
          >
            Ver todos los kaomojis
          </button>
        </div>
      )}

      {/* Kaomojis Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {displayedKaomojis.map((item, idx) => {
          const isCopied = copiedSymbol === item.symbol;
          return (
            <div
              key={`${item.symbol}-${idx}`}
              onClick={() => handleCopy(item.symbol)}
              className="group relative flex flex-col justify-between p-3 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 hover:border-amber-500/60 hover:shadow-md transition-all duration-200 cursor-pointer min-h-[90px]"
            >
              <div className="flex items-center justify-between gap-1 text-[10px] font-bold text-slate-400">
                <span className="truncate">{item.name}</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 shrink-0">
                  {item.category}
                </span>
              </div>

              {/* Kaomoji Display Symbol */}
              <div className="my-auto py-1.5 text-center overflow-hidden">
                <span className="text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-slate-100 select-all group-hover:scale-105 transition-transform inline-block">
                  {item.symbol}
                </span>
              </div>

              {/* Action Hint */}
              <div className="flex items-center justify-end text-[10px] pt-1">
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold border border-amber-500/20 group-hover:bg-amber-600 group-hover:text-white transition-all flex items-center gap-1">
                  <span>Copiar</span>
                  <span>📋</span>
                </span>
              </div>

              {/* Copied Toast Overlay */}
              <div
                className={`absolute inset-0 bg-amber-600 text-white rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-200 z-20 ${
                  isCopied ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <span>¡COPIADO! (⁠≧⁠▽⁠≦⁠)</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredKaomojis.length && (
        <div className="flex flex-col items-center gap-1.5 pt-3">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 48)}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white shadow-xs hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Cargar más kaomojis</span>
            <span className="px-2 py-0.5 rounded-md bg-white/20 text-[11px]">
              ({displayedKaomojis.length} de {filteredKaomojis.length})
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
