"use client";

import { useState } from "react";

interface QuickFixItem {
  id: string;
  icon: string;
  question: string;
  shortText: string;
  detail: string;
  copyValue?: string;
  copyLabel?: string;
}

const TROUBLESHOOTING_ITEMS: QuickFixItem[] = [
  {
    id: "fix-1",
    icon: "🔲",
    question: "¿Por qué al pegar mi texto aparece un cuadrado 🔲 o signo [?]?",
    shortText: "Causa: Dispositivos o teclados antiguos sin soporte Unicode completo.",
    detail:
      "Esto ocurre cuando el dispositivo de la persona que lee tu perfil tiene una versión muy antigua de Android o iOS que no contiene la tabla de símbolos matemáticos de Unicode. Para evitar esto en un 100%, utiliza estilos de alta compatibilidad universal como 'Small Caps (Pequeñas)', 'Negrita Sans' o 'Itálica Sencilla'.",
  },
  {
    id: "fix-2",
    icon: "✂️",
    question: "¿Por qué Free Fire recorta o elimina el final de mi apodo?",
    shortText: "Causa: Límite estricto de 12 bytes en los servidores de Garena Free Fire.",
    detail:
      "Free Fire no cuenta letras, cuenta bytes de memoria. Muchas letras estilizadas u ornamentos ocupan 2 a 4 bytes cada uno en lugar de 1. Si tu nick mide 10 caracteres pero suma 14 bytes, el juego cortará los últimos caracteres. Te recomendamos usar nuestro contador en tiempo real en la herramienta de arriba.",
  },
  {
    id: "fix-3",
    icon: "👻",
    question: "¿Cómo agregar el espacio transparente o invisible en mi nick de Free Fire?",
    shortText: "Solución: Copia el carácter Unicode U+3164 especial para espacios en blanco.",
    detail:
      "El teclado normal no permite guardar espacios vacíos en nombres de Free Fire o WhatsApp. Debes usar el carácter transparente Unicode invisible (U+3164). Puedes copiarlo directamente pulsando el botón a continuación e insertarlo entre tu clan tag y tu nick.",
    copyValue: "ㅤ",
    copyLabel: "Copiar Espacio Invisible (U+3164)",
  },
  {
    id: "fix-4",
    icon: "📱",
    question: "¿Por qué el estilo se ve ligeramente distinto entre iPhone y Android?",
    shortText: "Causa: Los sistemas renderizan las familias de fuentes Unicode con su tipografía por defecto.",
    detail:
      "iOS utiliza San Francisco y Android utiliza Roboto. Aunque el símbolo Unicode es exactamente el mismo carácter en ambas plataformas, la forma exacta de los trazos depende del tipo de letra del sistema operativo. Ambas versiones son perfectamente legibles y elegantes.",
  },
];

export default function TroubleshootingSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (e) {
      console.error("Error copying text: ", e);
    }
  };

  return (
    <section className="w-full flex flex-col gap-6 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-400 font-bold text-xs border border-rose-500/30">
          <span>🛠️</span> Guía de Ayuda Rápida
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] flex items-center gap-2.5">
          Problemas Comunes y Soluciones Rápidas
        </h2>
        <p className="text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed font-medium">
          Resuelve en segundos cualquier duda sobre compatibilidad de símbolos, cuadrados vacíos o límites de caracteres en tus juegos y redes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        {TROUBLESHOOTING_ITEMS.map((item) => {
          const isCopied = copiedId === item.id;

          return (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--input-bg)] flex flex-col justify-between gap-4 hover:border-teal-400/60 transition-colors"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl p-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-teal-600 dark:text-teal-400 shrink-0">
                    {item.icon}
                  </span>
                  <h3 className="font-extrabold text-base text-[var(--foreground)] leading-snug">
                    {item.question}
                  </h3>
                </div>
                <p className="text-xs font-extrabold text-teal-600 dark:text-teal-400 pt-1">
                  {item.shortText}
                </p>
                <p className="text-xs text-[var(--foreground)] opacity-80 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {item.copyValue && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(item.id, item.copyValue!)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      isCopied
                        ? "bg-emerald-600 text-white"
                        : "bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white shadow-teal-500/20"
                    }`}
                  >
                    <span>{isCopied ? "✨ ¡Espacio Invisible Copiado!" : item.copyLabel}</span>
                    <span>📋</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
