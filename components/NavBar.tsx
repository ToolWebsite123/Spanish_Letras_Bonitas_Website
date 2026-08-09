"use client";

import { useState } from "react";

interface NavCategory {
  title: string;
  items: { label: string; href: string }[];
}

const navCategories: NavCategory[] = [
  {
    title: "Letras Bonitas",
    items: [
      { label: "Cursivas", href: "/letras-bonitas/letras-cursivas" },
      { label: "Graffiti", href: "/letras-bonitas/letras-graffiti" },
      { label: "Caligrafía", href: "/letras-bonitas/caligrafia" },
      { label: "Letras para Firma", href: "/letras-bonitas/letras-firma" },
      { label: "Letras para Tatuajes", href: "/letras-bonitas/letras-tatuajes" },
      { label: "Aesthetic", href: "/letras-bonitas/letras-aesthetic" },
      { label: "Japonesas", href: "/letras-bonitas/letras-japonesas" },
    ],
  },
  {
    title: "Nicks para Juegos",
    items: [
      { label: "Free Fire", href: "/nicks-para-juegos/nick-free-fire" },
      { label: "Roblox", href: "/nicks-para-juegos/nombres-para-roblox" },
      { label: "FF Femenino", href: "/nicks-para-juegos/nick-free-fire-femenino" },
      { label: "FF Masculino", href: "/nicks-para-juegos/nick-free-fire-masculino" },
      { label: "Cambiar Nick FF", href: "/nicks-para-juegos/cambiar-nick-free-fire" },
      { label: "Bio Colorida FF", href: "/nicks-para-juegos/bio-colorida-free-fire" },
    ],
  },
  {
    title: "Fuentes para Instagram",
    items: [
      { label: "Bio Instagram", href: "/fuentes-para-instagram/bio-para-instagram" },
      { label: "Facebook", href: "/fuentes-para-instagram/fuentes-para-facebook" },
      { label: "WhatsApp", href: "/fuentes-para-instagram/fuentes-para-whatsapp" },
      { label: "Discord", href: "/fuentes-para-instagram/fuentes-para-discord" },
    ],
  },
  {
    title: "Símbolos Aesthetic",
    items: [
      { label: "Símbolos Nick", href: "/simbolos-aesthetic/simbolos-para-nick" },
      { label: "Emojis", href: "/simbolos-aesthetic/emojis-para-copiar" },
      { label: "Coquette", href: "/simbolos-aesthetic/simbolos-coquette" },
    ],
  },
  {
    title: "Letras Personalizadas",
    items: [
      { label: "Negrita", href: "/letras-personalizadas/texto-en-negrita" },
      { label: "Itálico", href: "/letras-personalizadas/texto-italico" },
      { label: "Invertir Texto", href: "/letras-personalizadas/invertir-texto" },
      { label: "Nombres Personalizados", href: "/letras-personalizadas/nombres-personalizados" },
    ],
  },
  {
    title: "Alfabeto Completo",
    items: [
      { label: "Cursivo", href: "/alfabeto-completo/alfabeto-cursivo" },
      { label: "Graffiti", href: "/alfabeto-completo/alfabeto-graffiti" },
    ],
  },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileCategory = (title: string) => {
    setMobileExpanded((prev) => (prev === title ? null : title));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f0c1b]/90 backdrop-blur-xl border-b border-purple-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        {/* Brand Logo Link with Sunset Pink Emblem */}
        <a
          href="/"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
            🌸
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent tracking-tight">
              Letras Bonitas
            </span>
            <span className="text-[10px] font-bold text-pink-400/80 tracking-widest uppercase">
              Conversor Oficial 300+
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navCategories.map((category) => (
            <div key={category.title} className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-pink-400 hover:bg-[#1b1530] transition-all cursor-pointer border border-transparent hover:border-purple-900/40"
              >
                <span>{category.title}</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu Box */}
              <div className="absolute left-0 top-full pt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                <div className="p-2.5 rounded-2xl bg-[#1b1530]/95 backdrop-blur-xl border border-purple-900/50 shadow-2xl flex flex-col gap-1">
                  {category.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-pink-400 hover:bg-[#231c3d] transition-colors flex items-center justify-between group/item"
                    >
                      <span>{item.label}</span>
                      <span className="opacity-0 group-hover/item:opacity-100 text-pink-400 transition-opacity">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2.5 rounded-xl text-slate-200 hover:bg-[#1b1530] transition-colors cursor-pointer border border-purple-900/40"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-purple-900/40 bg-[#0f0c1b]/95 backdrop-blur-xl px-4 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navCategories.map((category) => {
              const isExpanded = mobileExpanded === category.title;
              return (
                <div key={category.title} className="flex flex-col border-b border-purple-900/30 pb-2">
                  <button
                    type="button"
                    onClick={() => toggleMobileCategory(category.title)}
                    className="flex items-center justify-between w-full py-2.5 px-2 text-sm font-bold text-slate-200 cursor-pointer"
                  >
                    <span>{category.title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 text-pink-400 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="flex flex-col gap-1 pl-4 py-1">
                      {category.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-2 px-3 rounded-lg text-xs font-medium text-slate-400 hover:text-pink-400 hover:bg-[#1b1530] transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
