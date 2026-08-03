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
];

export default fontStyles;
