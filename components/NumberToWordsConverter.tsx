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

const QUICK_NUMBERS = [
  { label: "1", val: "1" },
  { label: "21", val: "21" },
  { label: "100", val: "100" },
  { label: "500", val: "500" },
  { label: "1,000", val: "1000" },
  { label: "1,000,000", val: "1000000" },
  { label: "1,500.50", val: "1500.50" },
  { label: "999,999,999", val: "999999999" },
];

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
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 p-4 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-[#faf8f5] dark:bg-zinc-900 shadow-xs">
      {/* Title Header */}
      <h2 className="text-lg sm:text-xl font-bold text-center text-slate-800 dark:text-slate-100">
        Números en Letras
      </h2>

      {/* Mode Selector Tabs */}
      <div className="bg-[#ede7df]/80 dark:bg-zinc-800/80 p-1 rounded-xl flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={() => {
            setMode("cardinal");
            if (inputVal.includes("\n")) setInputVal("25");
          }}
          className={`flex-1 min-w-[80px] py-2 px-2.5 rounded-lg text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer text-center ${
            mode === "cardinal"
              ? "bg-white dark:bg-zinc-700 text-slate-900 dark:text-white font-bold shadow-xs"
              : "text-slate-600 dark:text-zinc-400 font-medium hover:text-slate-900 hover:bg-white/40 dark:hover:bg-zinc-700/40"
          }`}
        >
          Cardinal
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("ordinal");
            if (inputVal.includes("\n")) setInputVal("25");
          }}
          className={`flex-1 min-w-[80px] py-2 px-2.5 rounded-lg text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer text-center ${
            mode === "ordinal"
              ? "bg-white dark:bg-zinc-700 text-slate-900 dark:text-white font-bold shadow-xs"
              : "text-slate-600 dark:text-zinc-400 font-medium hover:text-slate-900 hover:bg-white/40 dark:hover:bg-zinc-700/40"
          }`}
        >
          Ordinal
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("romano");
            if (inputVal.includes("\n")) setInputVal("25");
          }}
          className={`flex-1 min-w-[80px] py-2 px-2.5 rounded-lg text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer text-center ${
            mode === "romano"
              ? "bg-white dark:bg-zinc-700 text-slate-900 dark:text-white font-bold shadow-xs"
              : "text-slate-600 dark:text-zinc-400 font-medium hover:text-slate-900 hover:bg-white/40 dark:hover:bg-zinc-700/40"
          }`}
        >
          Romano
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("batch");
            setInputVal("25, 150, 2500, 1000000");
          }}
          className={`flex-1 min-w-[80px] py-2 px-2.5 rounded-lg text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer text-center ${
            mode === "batch"
              ? "bg-white dark:bg-zinc-700 text-slate-900 dark:text-white font-bold shadow-xs"
              : "text-slate-600 dark:text-zinc-400 font-medium hover:text-slate-900 hover:bg-white/40 dark:hover:bg-zinc-700/40"
          }`}
        >
          Lote
        </button>
      </div>

      {/* Input Box & Quick Select */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-500 dark:text-zinc-400 uppercase">
          NÚMERO
        </label>
        {mode === "batch" ? (
          <textarea
            rows={3}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Escribe números..."
            className="w-full p-2.5 sm:p-3 rounded-lg text-sm font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none shadow-xs"
          />
        ) : (
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Escribe un número..."
            className="w-full p-2.5 sm:p-3 rounded-lg text-sm sm:text-base font-medium border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all shadow-xs"
          />
        )}

        {/* Quick Select Numbers */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 px-0.5">
          {QUICK_NUMBERS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setInputVal(item.val)}
              className="text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Controls Row (Femenino, Formato, Moneda) */}
      <div className="bg-[#ede7df]/50 dark:bg-zinc-800/50 p-2.5 sm:p-3 rounded-xl border border-slate-200/60 dark:border-zinc-700/60 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        {/* Femenino Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-500 dark:text-zinc-400 uppercase">
            FEMENINO
          </span>
          <button
            type="button"
            onClick={() => setIsFeminine(!isFeminine)}
            className={`w-10 h-5.5 rounded-full p-0.5 transition-colors duration-200 ease-in-out cursor-pointer ${
              isFeminine ? "bg-amber-600" : "bg-slate-300 dark:bg-zinc-600"
            }`}
          >
            <div
              className={`w-4.5 h-4.5 rounded-full bg-white shadow-xs transition-transform duration-200 ease-in-out ${
                isFeminine ? "translate-x-4.5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Formato Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-500 dark:text-zinc-400 uppercase">
            FORMATO
          </span>
          <div className="flex items-center bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-lg p-0.5 gap-0.5">
            <button
              type="button"
              onClick={() => setCaseType("titlecase")}
              className={`px-2.5 py-0.5 text-[11px] sm:text-xs font-bold rounded transition-all cursor-pointer ${
                caseType === "titlecase"
                  ? "bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-slate-100 shadow-xs"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              Aa
            </button>
            <button
              type="button"
              onClick={() => setCaseType("uppercase")}
              className={`px-2.5 py-0.5 text-[11px] sm:text-xs font-bold rounded transition-all cursor-pointer ${
                caseType === "uppercase"
                  ? "bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-slate-100 shadow-xs"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              AA
            </button>
            <button
              type="button"
              onClick={() => setCaseType("lowercase")}
              className={`px-2.5 py-0.5 text-[11px] sm:text-xs font-bold rounded transition-all cursor-pointer ${
                caseType === "lowercase"
                  ? "bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-slate-100 shadow-xs"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              aa
            </button>
          </div>
        </div>

        {/* Moneda Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-500 dark:text-zinc-400 uppercase">
            MONEDA
          </span>
          <select
            value={currency}
            disabled={mode === "romano" || mode === "ordinal"}
            onChange={(e) => setCurrency(e.target.value as Currency)}
            className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-50 cursor-pointer shadow-xs"
          >
            <option value="none">Sin moneda</option>
            <option value="pesos">Pesos (MXN/ARS)</option>
            <option value="dolares">Dólares (USD)</option>
            <option value="euros">Euros (EUR)</option>
          </select>
        </div>
      </div>

      {/* Output / Result Box */}
      <div className="rounded-xl border-l-[4px] border-l-amber-600 bg-[#ede7df]/60 dark:bg-zinc-800/60 p-3.5 sm:p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
            RESULTADO
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012-2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z"
              />
            </svg>
            <span>{copied ? "¡Copiado!" : "Copiar"}</span>
          </button>
        </div>

        {mode === "batch" ? (
          <textarea
            readOnly
            rows={4}
            value={finalOutput}
            placeholder="Tu resultado aparecerá aquí..."
            className="w-full bg-transparent text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 focus:outline-none resize-none leading-relaxed"
          />
        ) : (
          <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 break-words min-h-[28px] flex items-center">
            {finalOutput || (
              <span className="text-slate-400 font-normal text-xs sm:text-sm">
                Tu resultado aparecerá aquí...
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
