"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavPill {
  label: string;
  href: string;
  icon: string;
}

const navPills: NavPill[] = [
  { label: "Inicio", href: "/", icon: "🏠" },
  { label: "Letras Cursivas", href: "/letras-bonitas/letras-cursivas", icon: "✍️" },
  { label: "Letras Graffiti", href: "/letras-bonitas/letras-graffiti", icon: "🎨" },
  { label: "Caligrafía", href: "/letras-bonitas/caligrafia", icon: "✒️" },
  { label: "Letras Firma", href: "/letras-bonitas/letras-firma", icon: "🖊️" },
  { label: "Letras Tatuajes", href: "/letras-bonitas/letras-tatuajes", icon: "🗡️" },
  { label: "Aesthetic", href: "/letras-bonitas/letras-aesthetic", icon: "✨" },
  { label: "Japonesas", href: "/letras-bonitas/letras-japonesas", icon: "⛩️" },
  { label: "Nick Free Fire", href: "/nicks-para-juegos/nick-free-fire", icon: "🎮" },
  { label: "Nombres Roblox", href: "/nicks-para-juegos/nombres-para-roblox", icon: "🧱" },
  { label: "Bio Instagram", href: "/fuentes-para-instagram/bio-para-instagram", icon: "📸" },
  { label: "Fuentes Facebook", href: "/fuentes-para-instagram/fuentes-para-facebook", icon: "📘" },
  { label: "Fuentes WhatsApp", href: "/fuentes-para-instagram/fuentes-para-whatsapp", icon: "💬" },
  { label: "Fuentes Discord", href: "/fuentes-para-instagram/fuentes-para-discord", icon: "👾" },
  { label: "Símbolos Nick", href: "/simbolos-aesthetic/simbolos-para-nick", icon: "⚔️" },
  { label: "Emojis", href: "/simbolos-aesthetic/emojis-para-copiar", icon: "🌸" },
  { label: "Coquette", href: "/simbolos-aesthetic/simbolos-coquette", icon: "🎀" },
  { label: "Negrita", href: "/letras-personalizadas/texto-en-negrita", icon: "💪" },
  { label: "Itálico", href: "/letras-personalizadas/texto-italico", icon: "✍️" },
  { label: "Invertir Texto", href: "/letras-personalizadas/invertir-texto", icon: "🔄" },
  { label: "Nombres Personalizados", href: "/letras-personalizadas/nombres-personalizados", icon: "🏷️" },
];

const mainHeaderTools: NavPill[] = [
  { label: "Números en Letras", href: "/letras-personalizadas/numeros-en-letras", icon: "🔢" },
  { label: "Mayúsculas/Minúsculas", href: "/letras-personalizadas/mayusculas-minusculas", icon: "🔤" },
  { label: "Kaomojis", href: "/simbolos-aesthetic/kaomojis", icon: "😊" },
  { label: "Texto Invisible", href: "/letras-personalizadas/texto-invisible", icon: "👻" },
  { label: "Letras Góticas", href: "/letras-bonitas/letras-goticas", icon: "🏰" },
];

export function CategoryNav({ bare = false }: { bare?: boolean } = {}) {
  const pathname = usePathname();
  return (
    <div className={bare ? "w-full" : "w-full border-t border-[var(--border-color)]/60 bg-[var(--card-bg)]/40"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {navPills.map((pill) => {
          const isActive = pathname === pill.href;
          return (
            <Link
              key={pill.href}
              href={pill.href}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? "bg-teal-500/20 text-teal-700 dark:text-teal-400 border border-teal-500/50 font-bold shadow-sm"
                  : "bg-[var(--card-bg)] text-[var(--foreground)] opacity-85 border border-[var(--border-color)] hover:border-teal-500/40 hover:text-teal-700 dark:hover:text-teal-400 font-medium"
              }`}
            >
              <span>{pill.icon}</span>
              <span>{pill.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

interface NavBarProps {
  showCategoryNav?: boolean;
}

export default function NavBar({ showCategoryNav = true }: NavBarProps) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const currentTheme = (document.documentElement.getAttribute("data-theme") as "dark" | "light") || "dark";
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading theme from DOM/localStorage on mount is a required exception, cannot be known during SSR
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (e) {
      console.error("Could not save theme to localStorage", e);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/95 backdrop-blur-xl border-b border-[var(--border-color)] transition-colors">
      {/* Top Header: Brand Logo, Main Tools Links & Theme Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16 gap-3 sm:gap-4">
        <Link href="/" className="flex items-center gap-2.5 group cursor-pointer shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-600 via-emerald-600 to-indigo-600 dark:from-teal-400 dark:via-emerald-500 dark:to-indigo-600 flex items-center justify-center text-slate-950 font-black text-sm shadow-md group-hover:scale-105 transition-transform">
            LB
          </div>
          <span className="font-black text-lg sm:text-xl tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent">
            Letras Bonitas
          </span>
        </Link>

        {/* 5 Plain Text Header Links */}
        <nav className="flex items-center gap-3 sm:gap-4.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1">
          {mainHeaderTools.map((tool) => {
            const isActive = pathname === tool.href;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className={`whitespace-nowrap text-xs font-medium transition-colors flex items-center gap-1 shrink-0 ${
                  isActive
                    ? "text-teal-600 dark:text-teal-400 font-bold"
                    : "text-[var(--foreground)] opacity-80 hover:opacity-100 hover:text-teal-600 dark:hover:text-teal-400"
                }`}
              >
                <span>{tool.icon}</span>
                <span>{tool.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="px-3 py-1.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground)] hover:border-teal-500/40 transition-colors flex items-center gap-2 text-xs font-bold shadow-sm cursor-pointer shrink-0"
        >
          {theme === "dark" ? (
            <>
              <span className="text-amber-400 text-sm">☀️</span>
              <span className="hidden sm:inline">Modo Claro</span>
            </>
          ) : (
            <>
              <span className="text-indigo-400 text-sm">🌙</span>
              <span className="hidden sm:inline">Modo Oscuro</span>
            </>
          )}
        </button>
      </div>

      {/* Flat, Horizontal, Scrollable Pill Filter Bar */}
      {showCategoryNav && <CategoryNav />}
    </header>
  );
}
