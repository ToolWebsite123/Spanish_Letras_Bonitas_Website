export interface FontStyle {
  id: string;
  name: string;
  category: string;
  map: Record<string, string>;
}

/**
 * Helper function to create a character mapping for uppercase A-Z and lowercase a-z.
 */
/**
 * Helper function to create a character mapping for uppercase A-Z, lowercase a-z,
 * and accented variants (á, é, í, ó, ú, ñ, etc.).
 */
function createCharMap(
  upperStart: number,
  lowerStart: number,
  upperExceptions: Record<string, number> = {},
  lowerExceptions: Record<string, number> = {}
): Record<string, string> {
  const map: Record<string, string> = {};

  // Uppercase A-Z (ASCII 65 to 90)
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(65 + i);
    const codePoint = upperExceptions[char] ?? upperStart + i;
    map[char] = String.fromCodePoint(codePoint);
  }

  // Lowercase a-z (ASCII 97 to 122)
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(97 + i);
    const codePoint = lowerExceptions[char] ?? lowerStart + i;
    map[char] = String.fromCodePoint(codePoint);
  }

  // Map accented characters to their base letter counterpart in the style
  const accentMap: Record<string, string> = {
    á: "a", à: "a", ä: "a", â: "a", ã: "a",
    é: "e", è: "e", ë: "e", ê: "e",
    í: "i", ì: "i", ï: "i", î: "i",
    ó: "o", ò: "o", ö: "o", ô: "o", õ: "o",
    ú: "u", ù: "u", ü: "u", û: "u",
    ñ: "n", ç: "c",
    Á: "A", À: "A", Ä: "A", Â: "A", Ã: "A",
    É: "E", È: "E", Ë: "E", Ê: "E",
    Í: "I", Ì: "I", Ï: "I", Î: "I",
    Ó: "O", Ò: "O", Ö: "O", Ô: "O", Õ: "O",
    Ú: "U", Ù: "U", Ü: "U", Û: "U",
    Ñ: "N", Ç: "C",
  };

  for (const [accented, base] of Object.entries(accentMap)) {
    if (map[base]) {
      map[accented] = map[base];
    }
  }

  return map;
}

// Generate U+3164 (Hangul Filler) map for all A-Z and a-z
const invisibleExceptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  .split("")
  .reduce<Record<string, number>>((acc, char) => {
    acc[char] = 0x3164;
    return acc;
  }, {});

// Small caps Unicode character code points (ᴀ-ᴢ block around U+1D00) for full a-z and A-Z coverage
const smallCapsExceptions: Record<string, number> = {
  A: 0x1d00, a: 0x1d00,
  B: 0x0299, b: 0x0299,
  C: 0x1d04, c: 0x1d04,
  D: 0x1d05, d: 0x1d05,
  E: 0x1d07, e: 0x1d07,
  F: 0x0493, f: 0x0493,
  G: 0x0262, g: 0x0262,
  H: 0x029c, h: 0x029c,
  I: 0x026a, i: 0x026a,
  J: 0x1d0a, j: 0x1d0a,
  K: 0x1d0b, k: 0x1d0b,
  L: 0x029f, l: 0x029f,
  M: 0x1d0d, m: 0x1d0d,
  N: 0x0274, n: 0x0274,
  O: 0x1d0f, o: 0x1d0f,
  P: 0x1d18, p: 0x1d18,
  Q: 0x01eb, q: 0x01eb,
  R: 0x0280, r: 0x0280,
  S: 0xa731, s: 0xa731,
  T: 0x1d1b, t: 0x1d1b,
  U: 0x1d1c, u: 0x1d1c,
  V: 0x1d20, v: 0x1d20,
  W: 0x1d21, w: 0x1d21,
  X: 0x0078, x: 0x0078,
  Y: 0x028f, y: 0x028f,
  Z: 0x1d22, z: 0x1d22,
};

function createCombiningCharMap(combiningChar: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    const upper = String.fromCharCode(65 + i);
    const lower = String.fromCharCode(97 + i);
    map[upper] = upper + combiningChar;
    map[lower] = lower + combiningChar;
  }
  const accentMap: Record<string, string> = {
    á: "a", é: "e", í: "i", ó: "o", ú: "u", ñ: "n",
    Á: "A", É: "E", Í: "I", Ó: "O", Ú: "U", Ñ: "N",
  };
  for (const [accented, base] of Object.entries(accentMap)) {
    if (map[base]) {
      map[accented] = map[base];
    }
  }
  return map;
}

function createSingleCaseMap(startPoint: number): Record<string, string> {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    const char = String.fromCodePoint(startPoint + i);
    const upper = String.fromCharCode(65 + i);
    const lower = String.fromCharCode(97 + i);
    map[upper] = char;
    map[lower] = char;
  }
  const accentMap: Record<string, string> = {
    á: "a", é: "e", í: "i", ó: "o", ú: "u", ñ: "n",
    Á: "A", É: "E", Í: "I", Ó: "O", Ú: "U", Ñ: "N",
  };
  for (const [accented, base] of Object.entries(accentMap)) {
    if (map[base]) {
      map[accented] = map[base];
    }
  }
  return map;
}

const greekLookalikeMap: Record<string, string> = {
  a: "α", b: "β", c: "c", d: "δ", e: "ε", f: "ƒ", g: "γ", h: "η",
  i: "ι", j: "ϳ", k: "κ", l: "λ", m: "μ", n: "ν", o: "ο", p: "ρ",
  q: "φ", r: "r", s: "σ", t: "τ", u: "υ", v: "ν", w: "ω", x: "χ",
  y: "ψ", z: "ζ",
  A: "Α", B: "Β", C: "C", D: "Δ", E: "Ε", F: "F", G: "Γ", H: "Η",
  I: "Ι", J: "J", K: "Κ", L: "Λ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ",
  Q: "Φ", R: "R", S: "Σ", T: "Τ", U: "Υ", V: "V", W: "Ω", X: "Χ",
  Y: "Ψ", Z: "Ζ",
  á: "α", é: "ε", í: "ι", ó: "ο", ú: "υ", ñ: "ν",
  Á: "Α", É: "Ε", Í: "Ι", Ó: "Ο", Ú: "Υ", Ñ: "Ν",
};

const cyrillicLookalikeMap: Record<string, string> = {
  a: "а", b: "ь", c: "с", d: "ԁ", e: "е", f: "ƒ", g: "д", h: "н",
  i: "і", j: "ϳ", k: "к", l: "л", m: "м", n: "п", o: "о", p: "р",
  q: "ԛ", r: "г", s: "ѕ", t: "т", u: "υ", v: "ѵ", w: "ш", x: "х",
  y: "у", z: "з",
  A: "А", B: "В", C: "С", D: "D", E: "Е", F: "F", G: "G", H: "Н",
  I: "І", J: "Ј", K: "К", L: "Л", M: "М", N: "N", O: "О", P: "Р",
  Q: "Q", R: "Я", S: "Ѕ", T: "Т", U: "U", V: "Ѵ", W: "Ш", X: "Х",
  Y: "Ү", Z: "З",
  á: "а", é: "е", í: "і", ó: "о", ú: "υ", ñ: "п",
  Á: "А", É: "Е", Í: "І", Ó: "О", Ú: "U", Ñ: "N",
};

const superscriptMap: Record<string, string> = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ",
  i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ",
  q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ",
  y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᴶ", G: "ᴳ", H: "ᴴ",
  I: "ᴵ", J: "ᴶ", K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ",
  Q: "ᑫ", R: "ᴿ", S: "ˢ", T: "ᵀ", U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ",
  Y: "ʸ", Z: "ᶻ",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵",
  "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  á: "ᵃ", é: "ᵉ", í: "ⁱ", ó: "ᵒ", ú: "ᵘ", ñ: "ⁿ",
  Á: "ᴬ", É: "ᴱ", Í: "ᴵ", Ó: "ᴼ", Ú: "ᵁ", Ñ: "ᴺ",
};

const upsideDownMap: Record<string, string> = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ",
  i: "ı", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d",
  q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x",
  y: "ʎ", z: "z",
  A: "Ɐ", B: "𐐒", C: "Ɔ", D: "◖", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H",
  I: "I", J: "ſ", K: "⋊", L: "⅂", M: "W", N: "N", O: "O", P: "Ԁ",
  Q: "Ò", R: "ᴚ", S: "S", T: "⟘", U: "∩", V: "Λ", W: "M", X: "X",
  Y: "⅄", Z: "Z",
  "0": "0", "1": "⇂", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ",
  "6": "9", "7": "ㄥ", "8": "8", "9": "6",
  ".": "˙", ",": "'", "'": ",", '"': "‚‚", "!": "¡", "?": "¿",
  "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{",
  "<": ">", ">": "<", "_": "‾",
  á: "ɐ", é: "ǝ", í: "ı", ó: "o", ú: "n", ñ: "u",
  Á: "Ɐ", É: "Ǝ", Í: "I", Ó: "O", Ú: "∩", Ñ: "N",
};

export const fontStyles: FontStyle[] = [
  {
    id: "cursive",
    name: "Cursiva",
    category: "Cursivas",
    map: createCharMap(
      0x1d49c,
      0x1d4b6,
      {
        B: 0x212c,
        E: 0x2130,
        F: 0x2131,
        H: 0x210b,
        I: 0x2110,
        L: 0x2112,
        M: 0x2133,
        R: 0x211b,
      },
      {
        a: 0x1d4b6,
        e: 0x212f,
        g: 0x210a,
        l: 0x2113,
        o: 0x2134,
      }
    ),
  },
  {
    id: "bold",
    name: "Negrita",
    category: "Aesthetic",
    map: createCharMap(0x1d400, 0x1d41a),
  },
  {
    id: "bubble",
    name: "Burbuja",
    category: "Decoradas",
    map: createCharMap(0x24b6, 0x24d0),
  },
  {
    id: "gothic",
    name: "Góticas",
    category: "Fraktur",
    map: createCharMap(
      0x1d504,
      0x1d51e,
      {
        C: 0x212d,
        H: 0x210c,
        I: 0x2111,
        R: 0x211c,
        Z: 0x2128,
      }
    ),
  },
  {
    id: "small",
    name: "Pequeña",
    category: "Small Caps",
    map: createCharMap(0, 0, smallCapsExceptions, smallCapsExceptions),
  },
  {
    id: "invisible",
    name: "Texto Invisible",
    category: "Utilidad",
    map: createCharMap(0, 0, invisibleExceptions, invisibleExceptions),
  },
  {
    id: "elegant-script",
    name: "Elegante",
    category: "Firma",
    map: createCharMap(
      0x1d538,
      0x1d552,
      {
        C: 0x2102,
        H: 0x210d,
        N: 0x2115,
        P: 0x2119,
        Q: 0x211a,
        R: 0x211d,
        Z: 0x2124,
      }
    ),
  },
  {
    id: "serif-bold-italic",
    name: "Tatuaje",
    category: "Tatuajes",
    map: createCharMap(0x1d468, 0x1d482),
  },
  {
    id: "reverse",
    name: "Invertido",
    category: "Especial",
    map: {},
  },
  {
    id: "double-struck",
    name: "Doble Rayado",
    category: "Matemático",
    map: createCharMap(
      0x1d538,
      0x1d552,
      {
        C: 0x2102,
        H: 0x210d,
        N: 0x2115,
        P: 0x2119,
        Q: 0x211a,
        R: 0x211d,
        Z: 0x2124,
      }
    ),
  },
  {
    id: "sans-bold",
    name: "Negrita Sans",
    category: "Sans Serif",
    map: createCharMap(0x1d5d4, 0x1d5ee),
  },
  {
    id: "sans-italic",
    name: "Sans Itálica",
    category: "Sans Serif",
    map: createCharMap(0x1d608, 0x1d622),
  },
  {
    id: "monospace",
    name: "Monoespaciada",
    category: "Técnico",
    map: createCharMap(0x1d670, 0x1d68a),
  },
  {
    id: "fullwidth",
    name: "Ancho Completo",
    category: "Asiático",
    map: createCharMap(0xff21, 0xff41),
  },
  {
    id: "strikethrough",
    name: "Tachado",
    category: "Especial",
    map: createCombiningCharMap("\u0336"),
  },
  {
    id: "underline",
    name: "Subrayado",
    category: "Especial",
    map: createCombiningCharMap("\u0332"),
  },
  {
    id: "upside-down",
    name: "Al Revés (Volteado)",
    category: "Especial",
    map: upsideDownMap,
  },
  {
    id: "sans-regular",
    name: "Sans Serif",
    category: "Sans Serif",
    map: createCharMap(0x1d5a0, 0x1d5ba),
  },
  {
    id: "serif-bold",
    name: "Negrita Serif",
    category: "Serif",
    map: createCharMap(0x1d56c, 0x1d586),
  },
  {
    id: "italic-serif",
    name: "Itálica Serif",
    category: "Serif",
    map: createCharMap(0x1d434, 0x1d44e, {}, { h: 0x210e }),
  },
  {
    id: "bold-italic-sans",
    name: "Negrita Itálica Sans",
    category: "Sans Serif",
    map: createCharMap(0x1d63c, 0x1d656),
  },
  {
    id: "greek-lookalike",
    name: "Estilo Griego",
    category: "Especial",
    map: greekLookalikeMap,
  },
  {
    id: "cyrillic-lookalike",
    name: "Estilo Cirílico",
    category: "Especial",
    map: cyrillicLookalikeMap,
  },
  {
    id: "circled-negative",
    name: "Círculo Negro",
    category: "Circled",
    map: createSingleCaseMap(0x1f150),
  },
  {
    id: "squared",
    name: "Cuadrada",
    category: "Squared",
    map: createSingleCaseMap(0x1f130),
  },
  {
    id: "squared-negative",
    name: "Cuadrada Negra",
    category: "Squared",
    map: createSingleCaseMap(0x1f170),
  },
  {
    id: "parenthesized",
    name: "Entre Paréntesis",
    category: "Circled",
    map: createSingleCaseMap(0x249c),
  },
  {
    id: "bold-script",
    name: "Script Negrita",
    category: "Script",
    map: createCharMap(0x1d4d0, 0x1d4ea),
  },
  {
    id: "superscript",
    name: "Superíndice",
    category: "Especial",
    map: superscriptMap,
  },
];

export default fontStyles;
