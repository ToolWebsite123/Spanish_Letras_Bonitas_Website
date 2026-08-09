"use client";

import { useState } from "react";

interface PlatformRule {
  id: string;
  name: string;
  icon: string;
  limit: number;
  type: "bytes" | "chars";
  notes: string;
  recommendedStyles: string[];
}

const PLATFORM_RULES: PlatformRule[] = [
  {
    id: "ff",
    name: "Free Fire (Garena)",
    icon: "🎮",
    limit: 12,
    type: "bytes",
    notes:
      "Límite estricto de 12 BYTES en los servidores del juego. Caracteres Unicode complejos ocupan de 2 a 4 bytes.",
    recommendedStyles: ["Small Caps (Pequeñas)", "Negrita Sans", "Espacio Invisible U+3164"],
  },
  {
    id: "instagram",
    name: "Instagram (Bio)",
    icon: "📸",
    limit: 150,
    type: "chars",
    notes:
      "Admite 150 caracteres con soporte total para fuentes cursivas, góticas y emojis en listas.",
    recommendedStyles: ["Cursiva Script", "Small Caps", "Marco Decorativo"],
  },
  {
    id: "tiktok",
    name: "TikTok (Descripción)",
    icon: "🎵",
    limit: 80,
    type: "chars",
    notes:
      "Límite de 80 caracteres. Diseños delgados y limpios garantizan legibilidad perfecta.",
    recommendedStyles: ["Doble Trazado (Outline)", "Small Caps"],
  },
  {
    id: "whatsapp",
    name: "WhatsApp (Info / Estado)",
    icon: "💬",
    limit: 139,
    type: "chars",
    notes:
      "Admite 139 caracteres con soporte completo en celulares Android e iPhone.",
    recommendedStyles: ["Cursiva Caligráfica", "Negrita Sans"],
  },
  {
    id: "facebook",
    name: "Facebook (Post / Grupo)",
    icon: "📘",
    limit: 500,
    type: "chars",
    notes:
      "Admite texto formateado en publicaciones, anuncios y nombres de grupos.",
    recommendedStyles: ["Negrita Sans", "Bold Serif"],
  },
  {
    id: "discord",
    name: "Discord (Nick / Canales)",
    icon: "👾",
    limit: 32,
    type: "chars",
    notes:
      "Admite 32 caracteres con compatibilidad para espadas, alas y marcas de rol.",
    recommendedStyles: ["Gótica Fraktur", "Símbolos de Armas"],
  },
];

interface PlatformLimitsWidgetProps {
  currentPlatform?: string;
}

export default function PlatformLimitsWidget({ currentPlatform }: PlatformLimitsWidgetProps) {
  const defaultId = currentPlatform && PLATFORM_RULES.some((p) => p.id === currentPlatform) ? currentPlatform : "ff";
  const [selectedPlatform, setSelectedPlatform] = useState<string>(defaultId);
  const [testText, setTestText] = useState<string>("Letras Bonitas");

  const currentRule = PLATFORM_RULES.find((p) => p.id === selectedPlatform) || PLATFORM_RULES[0];

  const getByteLength = (str: string) => new TextEncoder().encode(str).length;
  const currentCount = currentRule.type === "bytes" ? getByteLength(testText) : testText.length;

  const isExceeded = currentCount > currentRule.limit;

  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-purple-900/40 bg-[#1b1530]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/50">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
          <span>📏</span> Simulador de Límites en Vivo
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-2.5">
          Calculadora de Límites por Red Social y Juego
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
          Selecciona una plataforma y comprueba en tiempo real si tu nombre o frase cumple los límites oficiales de memoria o caracteres.
        </p>
      </div>

      <div className="flex flex-col gap-5 pt-2">
        {/* Platform Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {PLATFORM_RULES.map((rule) => {
            const isActive = rule.id === selectedPlatform;
            return (
              <button
                key={rule.id}
                type="button"
                onClick={() => setSelectedPlatform(rule.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white shadow-lg shadow-pink-500/25 scale-105"
                    : "bg-[#231c3d] hover:bg-[#2c234a] text-slate-300 border border-purple-900/40"
                }`}
              >
                <span>{rule.icon}</span>
                <span>{rule.name}</span>
              </button>
            );
          })}
        </div>

        {/* Live Calculation Panel */}
        <div className="p-6 rounded-2xl border border-purple-900/40 bg-[#231c3d] flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <input
              type="text"
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              placeholder="Prueba tu texto..."
              className="w-full sm:flex-1 px-4 py-2.5 rounded-xl text-sm border border-purple-900/50 bg-[#1b1530] text-slate-100 placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-pink-500/30"
            />
            <div className="flex items-center gap-2 shrink-0">
              <span
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black border ${
                  isExceeded
                    ? "bg-rose-950/80 text-rose-300 border-rose-800"
                    : "bg-emerald-950/80 text-emerald-300 border-emerald-800"
                }`}
              >
                {currentCount} / {currentRule.limit} {currentRule.type === "bytes" ? "Bytes" : "Chars"}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {currentRule.notes}
          </p>
        </div>
      </div>
    </section>
  );
}
