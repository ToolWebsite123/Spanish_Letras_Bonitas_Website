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
      { label: "Aesthetic", href: "#" },
      { label: "Japonesas", href: "#" },
    ],
  },
  {
    title: "Nicks para Juegos",
    items: [
      { label: "Free Fire", href: "/nicks-para-juegos/nick-free-fire" },
      { label: "Roblox", href: "/nicks-para-juegos/nombres-para-roblox" },
      { label: "Símbolos FF", href: "#" },
      { label: "FF Femenino", href: "#" },
      { label: "FF Masculino", href: "#" },
      { label: "Bio FF", href: "#" },
      { label: "Cambiar Nick FF", href: "#" },
    ],
  },
  {
    title: "Fuentes para Instagram",
    items: [
      { label: "Bio Instagram", href: "/fuentes-para-instagram/bio-para-instagram" },
      { label: "Facebook", href: "/fuentes-para-instagram/fuentes-para-facebook" },
      { label: "Telegram", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Steam", href: "#" },
    ],
  },
  {
    title: "Símbolos Aesthetic",
    items: [
      { label: "Símbolos Nick", href: "/simbolos-aesthetic/simbolos-para-nick" },
      { label: "Coquette", href: "#" },
      { label: "Emojis", href: "/simbolos-aesthetic/emojis-para-copiar" },
    ],
  },
  {
    title: "Letras Personalizadas",
    items: [
      { label: "Negrita", href: "/letras-personalizadas/texto-en-negrita" },
      { label: "Itálico", href: "#" },
      { label: "Invertir Texto", href: "/letras-personalizadas/invertir-texto" },
      { label: "Nombres Personalizados", href: "#" },
    ],
  },
  {
    title: "Alfabeto Completo",
    items: [
      { label: "Lettering", href: "#" },
      { label: "Graffiti", href: "#" },
      { label: "Cursivo", href: "/alfabeto-completo/alfabeto-cursivo" },
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
    <header className="sticky top-0 z-50 w-full bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Brand / Home Link */}
        <a
          href="#"
          className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          Letras Bonitas
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navCategories.map((category) => (
            <div key={category.title} className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all cursor-pointer"
              >
                <span>{category.title}</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="p-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg flex flex-col gap-0.5">
                  {category.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-3 py-2 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navCategories.map((category) => {
              const isExpanded = mobileExpanded === category.title;
              return (
                <div key={category.title} className="flex flex-col border-b border-neutral-100 dark:border-neutral-900 pb-2">
                  <button
                    type="button"
                    onClick={() => toggleMobileCategory(category.title)}
                    className="flex items-center justify-between w-full py-2 px-1 text-base font-semibold text-neutral-800 dark:text-neutral-200 cursor-pointer"
                  >
                    <span>{category.title}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 text-neutral-500 ${
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
                    <div className="flex flex-col gap-1 pl-3 py-1">
                      {category.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-1.5 px-2 rounded-md text-sm text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
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
