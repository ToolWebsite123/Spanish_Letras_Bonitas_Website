/**
 * Maps each character of the input string through the provided styleMap.
 * Falls back to the original character if a mapping is not found.
 *
 * @param input - The text string to convert.
 * @param styleMap - A dictionary mapping original characters to styled characters.
 * @returns The converted text string.
 *
 * @example
 * ```ts
 * import { fontStyles } from './fontStyles';
 * import { convertText } from './convertText';
 *
 * const cursiveStyle = fontStyles.find((style) => style.id === 'cursive');
 * if (cursiveStyle) {
 *   const result = convertText('Hello World!', cursiveStyle.map);
 *   console.log(result); // ℋℯ𝓁𝓁ℴ 𝒲ℴ𝓇𝓁𝒹!
 * }
 * ```
 */
export function convertText(
  input: string,
  styleMap: Record<string, string>
): string {
  return Array.from(input)
    .map((char) => styleMap[char] ?? char)
    .join('');
}

export default convertText;
