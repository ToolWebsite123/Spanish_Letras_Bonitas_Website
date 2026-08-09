"use client";

import { useState } from "react";

interface PlatformLimit {
  name: string;
  field: string;
  limit: number;
  icon: string;
  tip: string;
}

const PLATFORMS: PlatformLimit[] = [
  {
    name: "Free Fire",
    field: "Nick de Jugador",
    limit: 12,
    icon: "🎮",
    tip: "⚠️ Los caracteres especiales ocupan más espacio. Recomendamos letras pequeñas o góticas simples.",
  },
  {
    name: "Instagram",
    field: "Biografía (Bio)",
    limit: 150,
    icon: "📸",
    tip: "✅ Las fuentes cursivas y decoradas funcionan de maravilla. Combina 1-2 estilos.",
  },
  {
    name: "TikTok",
    field: "Descripción de Perfil",
    limit: 80,
    icon: "🎵",
    tip: "✨ El espacio es limitado. Usa letras aesthetic minimalistas para un look impecable.",
  },
  {
    name: "WhatsApp",
    field: "Info / Estado",
    limit: 139,
    icon: "💬",
    tip: "✅ Totalmente compatible con fuentes cursivas, negritas sans y símbolos decorativos.",
  },
  {
    name: "Discord",
    field: "Apodo de Servidor",
    limit: 32,
    icon: "👾",
    tip: "🔥 Admite marcos decorativos complejos como coronas, espadas y diamantes.",
  },
  {
    name: "Roblox",
    field: "Nombre en Pantalla",
    limit: 20,
    icon: "🧱",
    tip: "⚠️ Evita caracteres muy extraños que el filtro de Roblox pueda censurar.",
  },
  {
    name: "PUBG Mobile",
    field: "Nick de Combate",
    limit: 16,
    icon: "⚔️",
    tip: "⚠️ Usa fuentes pequeñas y símbolos limpios para evitar que el nick se corte.",
  },
  {
    name: "Twitter / X",
    field: "Biografía de Usuario",
    limit: 160,
    icon: "🐦",
    tip: "✅ Excelente soporte para tipografías manuscritas y negritas matemáticas.",
  },
];

export default function PlatformLimitsWidget() {
  const [testText, setTestText] = useState("");

  const testLength = testText.length;

  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-9 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
          <span className="text-2xl">⚠️</span> Verificador Interactivo de Límites por Plataforma
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
          Los caracteres Unicode ocupan más bytes que el texto común. Prueba tu texto aquí para comprobar si se ajusta a los límites de cada red social o juego:
        </p>
      </div>

      {/* Test Input Box */}
      <div className="flex flex-col sm:flex-row items-center gap-3 p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/70 dark:border-purple-800/50">
        <span className="text-xs font-extrabold text-purple-900 dark:text-purple-200 shrink-0">
          Probar longitud de texto:
        </span>
        <input
          type="text"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="Escribe tu apodo o frase aquí para probar..."
          className="w-full px-4 py-2.5 rounded-xl text-sm border border-purple-200 dark:border-purple-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50 shadow-2xs font-medium"
        />
        {testText && (
          <span className="text-xs font-mono font-extrabold text-purple-700 dark:text-purple-300 shrink-0 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60">
            {testLength} caracteres
          </span>
        )}
      </div>

      {/* Platforms Grid (4 cols x 2 rows on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PLATFORMS.map((platform) => {
          const isExceeded = testText ? testLength > platform.limit : false;
          const percentage = testText
            ? Math.min(100, Math.round((testLength / platform.limit) * 100))
            : 0;

          return (
            <div
              key={platform.name}
              className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between gap-3 ${
                isExceeded
                  ? "border-red-300 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20"
                  : testText && percentage >= 80
                  ? "border-amber-300 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20"
                  : "border-neutral-200/90 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50"
              }`}
            >
              {/* Header: Icon + Name + Limit Badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="font-extrabold text-sm text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                  <span>{platform.icon}</span>
                  <span>{platform.name}</span>
                </span>
                <span
                  className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${
                    isExceeded
                      ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                      : testText
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                      : "bg-neutral-200/80 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {isExceeded ? "Excede" : testText ? "Encaja" : `${platform.limit} max`}
                </span>
              </div>

              {/* Field Label */}
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                <span>Campo: </span>
                <strong className="text-neutral-800 dark:text-neutral-200 font-bold">{platform.field}</strong>
              </div>

              {/* Dynamic Progress Bar vs Tip */}
              {testText ? (
                <div className="flex flex-col gap-1 pt-1">
                  <div className="flex justify-between text-[10px] font-bold text-neutral-500">
                    <span>Usado: {testLength}/{platform.limit}</span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        isExceeded ? "bg-red-500" : percentage >= 80 ? "bg-amber-500" : "bg-purple-600"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              ) : (
                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                  {platform.tip}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
