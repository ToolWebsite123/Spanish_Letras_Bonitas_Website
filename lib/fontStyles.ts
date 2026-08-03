export interface FontStyle {
  id: string;
  name: string;
  category: string;
  map: Record<string, string>;
}

/**
 * Helper function to create a character mapping for uppercase A-Z and lowercase a-z.
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

export const fontStyles: FontStyle[] = [
  {
    id: "cursive",
    name: "Cursive",
    category: "Script",
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
        e: 0x212f,
        g: 0x210a,
        l: 0x2113,
        o: 0x2134,
      }
    ),
  },
  {
    id: "bold",
    name: "Bold",
    category: "Mathematical",
    map: createCharMap(0x1d400, 0x1d41a),
  },
  {
    id: "bubble",
    name: "Bubble",
    category: "Circled",
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
];

export default fontStyles;
