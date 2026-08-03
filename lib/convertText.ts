/**
 * Maps each character of the input string through the provided styleMap.
 * If styleId is 'reverse', reverses the character order of the input.
 * Falls back to the original character if a mapping is not found.
 *
 * @param input - The text string to convert.
 * @param styleMap - A dictionary mapping original characters to styled characters.
 * @param styleId - Optional style identifier for special conversion logic (e.g. 'reverse').
 * @returns The converted text string.
 */
export function convertText(
  input: string,
  styleMap: Record<string, string>,
  styleId?: string
): string {
  if (styleId === "reverse") {
    return Array.from(input).reverse().join("");
  }
  return Array.from(input)
    .map((char) => styleMap[char] ?? char)
    .join("");
}

export default convertText;
