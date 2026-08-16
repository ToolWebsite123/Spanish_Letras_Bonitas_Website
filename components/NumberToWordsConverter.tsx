"use client";

import { useState } from "react";

type Mode = "cardinal" | "ordinal" | "romano" | "batch";
type Currency = "none" | "pesos" | "dolares" | "euros";
type CaseType = "lowercase" | "uppercase" | "titlecase";

// --- SPANISH NUMBER TO WORDS LOGIC ---

const UNITS_MASC = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
const UNITS_FEM = ["", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];

const TEENS = [
  "diez",
  "once",
  "doce",
  "trece",
  "catorce",
  "quince",
  "dieciséis",
  "diecisiete",
  "dieciocho",
  "diecinueve",
];

const TENS = [
  "",
  "diez",
  "veinte",
  "treinta",
  "cuarenta",
  "cincuenta",
  "sesenta",
  "setenta",
  "ochenta",
  "noventa",
];

const HUNDREDS_MASC = [
  "",
  "ciento",
  "doscientos",
  "trescientos",
  "cuatrocientos",
  "quinientos",
  "seiscientos",
  "setecientos",
  "ochocientos",
  "novecientos",
];

const HUNDREDS_FEM = [
  "",
  "ciento",
  "doscientas",
  "trescientas",
  "cuatrocientas",
  "quinientas",
  "seiscientas",
  "setecientas",
  "ochocientas",
  "novecientas",
];

function numberToCardinalUnderThousand(n: number, isFeminine: boolean): string {
  if (n === 0) return "";
  if (n === 100) return "cien";

  const unitsArr = isFeminine ? UNITS_FEM : UNITS_MASC;
  const hundredsArr = isFeminine ? HUNDREDS_FEM : HUNDREDS_MASC;

  let result = "";

  const h = Math.floor(n / 100);
  const remainder = n % 100;

  if (h > 0) {
    result += hundredsArr[h];
  }

  if (remainder > 0) {
    if (result.length > 0) result += " ";

    if (remainder < 10) {
      result += unitsArr[remainder];
    } else if (remainder >= 10 && remainder < 20) {
      result += TEENS[remainder - 10];
    } else if (remainder === 20) {
      result += "veinte";
    } else if (remainder > 20 && remainder < 30) {
      const u = remainder - 20;
      if (u === 1) result += isFeminine ? "veintiuna" : "veintiuno";
      else if (u === 2) result += "veintidós";
      else if (u === 3) result += "veintitrés";
      else if (u === 6) result += "veintiséis";
      else result += `veinti${unitsArr[u]}`;
    } else {
      const t = Math.floor(remainder / 10);
      const u = remainder % 10;
      result += TENS[t];
      if (u > 0) {
        result += ` y ${unitsArr[u]}`;
      }
    }
  }

  return result;
}

function numberToCardinalInteger(n: number, isFeminine: boolean): string {
  if (n === 0) return "cero";
  if (n < 0) return `menos ${numberToCardinalInteger(Math.abs(n), isFeminine)}`;

  let result = "";

  // Millions
  const millions = Math.floor(n / 1000000);
  let remainder = n % 1000000;

  if (millions > 0) {
    if (millions === 1) {
      result += "un millón";
    } else {
      result += `${numberToCardinalInteger(millions, false)} millones`;
    }
  }

  // Thousands
  const thousands = Math.floor(remainder / 1000);
  remainder = remainder % 1000;

  if (thousands > 0) {
    if (result.length > 0) result += " ";
    if (thousands === 1) {
      result += "mil";
    } else {
      result += `${numberToCardinalUnderThousand(thousands, false)} mil`;
    }
  }

  // Hundreds & units
  if (remainder > 0) {
    if (result.length > 0) result += " ";
    result += numberToCardinalUnderThousand(remainder, isFeminine);
  }

  return result;
}

function convertToCardinal(numStr: string, isFeminine: boolean, currency: Currency): string {
  const cleanStr = numStr.trim().replace(",", ".");
  if (!cleanStr || isNaN(Number(cleanStr))) return "Ingresa un número válido";

  const parts = cleanStr.split(".");
  const intPart = Math.floor(Math.abs(Number(parts[0])));
  const hasDecimals = parts.length > 1 && parts[1].length > 0;
  const decVal = hasDecimals ? Number(parts[1].slice(0, 2)) : 0;

  let words = numberToCardinalInteger(intPart, isFeminine);

  if (currency === "none") {
    if (hasDecimals && decVal > 0) {
      words += ` con ${numberToCardinalInteger(decVal, isFeminine)}`;
    }
  } else if (currency === "pesos") {
    words += intPart === 1 ? " peso" : " pesos";
    if (hasDecimals && decVal > 0) {
      words += ` con ${numberToCardinalInteger(decVal, false)} centavos`;
    }
  } else if (currency === "dolares") {
    words += intPart === 1 ? " dólar" : " dólares";
    if (hasDecimals && decVal > 0) {
      words += ` con ${numberToCardinalInteger(decVal, false)} centavos`;
    }
  } else if (currency === "euros") {
    words += intPart === 1 ? " euro" : " euros";
    if (hasDecimals && decVal > 0) {
      words += ` con ${numberToCardinalInteger(decVal, false)} céntimos`;
    }
  }

  return words;
}

// --- ORDINALS LOGIC ---

const ORDINALS_UNITS_MASC = [
  "",
  "primero",
  "segundo",
  "tercero",
  "cuarto",
  "quinto",
  "sexto",
  "séptimo",
  "octavo",
  "noveno",
];
const ORDINALS_UNITS_FEM = [
  "",
  "primera",
  "segunda",
  "tercera",
  "cuarta",
  "quinta",
  "sexta",
  "séptima",
  "octava",
  "novena",
];

const ORDINALS_TENS_MASC = [
  "",
  "décimo",
  "vigésimo",
  "trigésimo",
  "cuadragésimo",
  "quincuagésimo",
  "sexagésimo",
  "septuagésimo",
  "octogésimo",
  "nonagésimo",
];

const ORDINALS_TENS_FEM = [
  "",
  "décima",
  "vigésima",
  "trigésima",
  "cuadragésima",
  "quincuagésima",
  "sexagésima",
  "septuagésima",
  "octogésima",
  "nonagésima",
];

function convertToOrdinal(numStr: string, isFeminine: boolean): string {
  const n = parseInt(numStr.trim(), 10);
  if (isNaN(n) || n < 1 || n > 999) return "Ingresa un número entero entre 1 y 999";

  const uArr = isFeminine ? ORDINALS_UNITS_FEM : ORDINALS_UNITS_MASC;
  const tArr = isFeminine ? ORDINALS_TENS_FEM : ORDINALS_TENS_MASC;

  if (n === 100) return isFeminine ? "centésima" : "centésimo";
  if (n === 11) return isFeminine ? "undécima" : "undécimo";
  if (n === 12) return isFeminine ? "duodécima" : "duodécimo";

  const t = Math.floor((n % 100) / 10);
  const u = n % 10;
  const h = Math.floor(n / 100);

  let res = "";
  if (h > 0) {
    if (h === 1) res += isFeminine ? "centésima" : "centésimo";
    else if (h === 2) res += isFeminine ? "ducentésima" : "ducentésimo";
    else if (h === 3) res += isFeminine ? "tricentésima" : "tricentésimo";
    else res += `${uArr[h]} centésimo`;
  }

  if (t > 0) {
    if (res.length > 0) res += " ";
    res += tArr[t];
  }

  if (u > 0) {
    if (res.length > 0) res += " ";
    res += uArr[u];
  }

  return res;
}

// --- ROMAN LOGIC ---

function convertToRoman(numStr: string): string {
  let num = parseInt(numStr.trim(), 10);
  if (isNaN(num) || num < 1 || num > 3999) return "Ingresa un número entero entre 1 y 3999";

  const romanMap: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";
  for (const [val, sym] of romanMap) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }

  return result;
}

// --- BATCH CONVERSION ---

function convertBatch(input: string, isFeminine: boolean, currency: Currency): string {
  const lines = input
    .split(/[\n,;]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (lines.length === 0) return "Ingresa una lista de números separados por coma o salto de línea";

  return lines
    .map((numStr) => {
      const converted = convertToCardinal(numStr, isFeminine, currency);
      return `${numStr} → ${converted}`;
    })
    .join("\n");
}

// --- MAIN COMPONENT ---

export default function NumberToWordsConverter() {
  const [inputVal, setInputVal] = useState("25");
  const [mode, setMode] = useState<Mode>("cardinal");
  const [isFeminine, setIsFeminine] = useState(false);
  const [currency, setCurrency] = useState<Currency>("none");
  const [caseType, setCaseType] = useState<CaseType>("lowercase");
  const [copied, setCopied] = useState(false);

  // Compute conversion output
  let rawOutput = "";
  if (mode === "cardinal") {
    rawOutput = convertToCardinal(inputVal, isFeminine, currency);
  } else if (mode === "ordinal") {
    rawOutput = convertToOrdinal(inputVal, isFeminine);
  } else if (mode === "romano") {
    rawOutput = convertToRoman(inputVal);
  } else if (mode === "batch") {
    rawOutput = convertBatch(inputVal, isFeminine, currency);
  }

  // Format case
  let finalOutput = rawOutput;
  if (caseType === "uppercase") {
    finalOutput = rawOutput.toUpperCase();
  } else if (caseType === "titlecase") {
    finalOutput = rawOutput
      .split("\n")
      .map((line) =>
        line
          .split(" ")
          .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : ""))
          .join(" ")
      )
      .join("\n");
  }

  const handleCopy = () => {
    if (!finalOutput) return;
    navigator.clipboard.writeText(finalOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-6 p-5 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
      {/* Mode Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 border-b border-[var(--border-color)]">
        <button
          onClick={() => {
            setMode("cardinal");
            if (inputVal.includes("\n")) setInputVal("25");
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            mode === "cardinal"
              ? "bg-teal-500/20 text-teal-700 dark:text-teal-400 border border-teal-500/50 shadow-sm"
              : "bg-[var(--input-bg)] text-[var(--foreground)] opacity-80 border border-[var(--border-color)] hover:border-teal-500/30"
          }`}
        >
          🔢 Cardinal (1, 2, 3...)
        </button>
        <button
          onClick={() => {
            setMode("ordinal");
            if (inputVal.includes("\n")) setInputVal("25");
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            mode === "ordinal"
              ? "bg-teal-500/20 text-teal-700 dark:text-teal-400 border border-teal-500/50 shadow-sm"
              : "bg-[var(--input-bg)] text-[var(--foreground)] opacity-80 border border-[var(--border-color)] hover:border-teal-500/30"
          }`}
        >
          🥇 Ordinal (1º, 2º, 3º...)
        </button>
        <button
          onClick={() => {
            setMode("romano");
            if (inputVal.includes("\n")) setInputVal("25");
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            mode === "romano"
              ? "bg-teal-500/20 text-teal-700 dark:text-teal-400 border border-teal-500/50 shadow-sm"
              : "bg-[var(--input-bg)] text-[var(--foreground)] opacity-80 border border-[var(--border-color)] hover:border-teal-500/30"
          }`}
        >
          🏛️ Números Romanos
        </button>
        <button
          onClick={() => {
            setMode("batch");
            setInputVal("25, 150, 2500, 1000000");
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            mode === "batch"
              ? "bg-teal-500/20 text-teal-700 dark:text-teal-400 border border-teal-500/50 shadow-sm"
              : "bg-[var(--input-bg)] text-[var(--foreground)] opacity-80 border border-[var(--border-color)] hover:border-teal-500/30"
          }`}
        >
          📋 Conversión por Lote
        </button>
      </div>

      {/* Inputs & Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Box */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[var(--foreground)] opacity-90 flex items-center justify-between">
            <span>{mode === "batch" ? "Ingresa lista de números:" : "Ingresa el número a convertir:"}</span>
            <span className="text-[11px] opacity-60 font-normal">Soporta decimales (.)</span>
          </label>
          {mode === "batch" ? (
            <textarea
              rows={4}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ej. 25, 100, 2500, 15000"
              className="w-full p-3.5 rounded-2xl text-sm font-semibold border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 shadow-inner resize-none transition-all"
            />
          ) : (
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ej. 1250000 o 25.50"
              className="w-full p-3.5 rounded-2xl text-sm font-semibold border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 shadow-inner transition-all"
            />
          )}
        </div>

        {/* Customization Controls */}
        <div className="flex flex-col gap-3 justify-between">
          <div className="grid grid-cols-2 gap-3">
            {/* Formato Dropdown */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[var(--foreground)] opacity-90">Formato:</label>
              <select
                value={caseType}
                onChange={(e) => setCaseType(e.target.value as CaseType)}
                className="w-full p-2.5 rounded-xl text-xs font-bold border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-teal-500/40 cursor-pointer"
              >
                <option value="lowercase">Minúsculas (veinticinco)</option>
                <option value="uppercase">MAYÚSCULAS (VEINTICINCO)</option>
                <option value="titlecase">Formato Título (Veinticinco)</option>
              </select>
            </div>

            {/* Moneda Dropdown */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[var(--foreground)] opacity-90">Moneda:</label>
              <select
                value={currency}
                disabled={mode === "romano" || mode === "ordinal"}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="w-full p-2.5 rounded-xl text-xs font-bold border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-teal-500/40 cursor-pointer disabled:opacity-50"
              >
                <option value="none">Sin Moneda</option>
                <option value="pesos">Pesos (MXN/ARS)</option>
                <option value="dolares">Dólares (USD)</option>
                <option value="euros">Euros (EUR)</option>
              </select>
            </div>
          </div>

          {/* Gender Toggle */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[var(--input-bg)] border border-[var(--border-color)]">
            <span className="text-xs font-bold text-[var(--foreground)] opacity-90">
              Género Femenino (una, doscientas):
            </span>
            <button
              type="button"
              onClick={() => setIsFeminine(!isFeminine)}
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer ${
                isFeminine ? "bg-teal-500" : "bg-[var(--border-color)]"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
                  isFeminine ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Output Result Card */}
      <div className="flex flex-col gap-2 pt-2 border-t border-[var(--border-color)]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
            <span>✨</span> Resultado Convertido:
          </span>
          <span className="text-xs font-mono text-[var(--foreground)] opacity-60">
            {finalOutput.length} caracteres
          </span>
        </div>

        <div className="relative w-full">
          {mode === "batch" ? (
            <textarea
              readOnly
              rows={5}
              value={finalOutput}
              className="w-full p-4 pr-24 rounded-2xl text-xs font-mono border border-teal-500/30 bg-[var(--input-bg)] text-[var(--foreground)] focus:outline-none shadow-inner resize-none font-semibold leading-relaxed"
            />
          ) : (
            <div className="w-full p-4 pr-24 rounded-2xl text-sm sm:text-base font-extrabold border border-teal-500/30 bg-[var(--input-bg)] text-teal-600 dark:text-teal-300 min-h-[56px] flex items-center shadow-inner break-words">
              {finalOutput}
            </div>
          )}

          <button
            onClick={handleCopy}
            className={`absolute right-3 top-3 px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-md cursor-pointer ${
              copied
                ? "bg-emerald-500 text-slate-950 scale-105"
                : "bg-teal-500 hover:bg-teal-400 text-slate-950 hover:scale-105"
            }`}
          >
            {copied ? (
              <>
                <span>✓</span> ¡Copiado!
              </>
            ) : (
              <>
                <span>📋</span> Copiar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
