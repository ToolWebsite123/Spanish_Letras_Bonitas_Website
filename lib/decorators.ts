export interface Decorator {
  id: string;
  name: string;
  wrap: (text: string) => string;
}

export const decorators: Decorator[] = [
  // Classic & Basic
  {
    id: "estrellas",
    name: "Estrellas",
    wrap: (text) => `⋆ ${text} ⋆`,
  },
  {
    id: "corazones",
    name: "Corazones",
    wrap: (text) => `♡ ${text} ♡`,
  },
  {
    id: "coronas",
    name: "Coronas",
    wrap: (text) => `👑 ${text} 👑`,
  },
  {
    id: "fuego",
    name: "Fuego",
    wrap: (text) => `🔥 ${text} 🔥`,
  },
  {
    id: "mariposas",
    name: "Mariposas",
    wrap: (text) => `🦋 ${text} 🦋`,
  },
  {
    id: "rayos",
    name: "Rayos",
    wrap: (text) => `⚡ ${text} ⚡`,
  },
  {
    id: "puntos",
    name: "Puntos",
    wrap: (text) => `•° ${text} °•`,
  },
  {
    id: "flores",
    name: "Flores",
    wrap: (text) => `✿ ${text} ✿`,
  },
  {
    id: "brillos",
    name: "Brillos",
    wrap: (text) => `✧ ${text} ✧`,
  },
  {
    id: "alas",
    name: "Alas",
    wrap: (text) => `ᨏ ${text} ᨏ`,
  },
  {
    id: "diamantes",
    name: "Diamantes",
    wrap: (text) => `◈ ${text} ◈`,
  },
  {
    id: "olas",
    name: "Olas",
    wrap: (text) => `🌊 ${text} 🌊`,
  },
  {
    id: "monos",
    name: "Moños",
    wrap: (text) => `🎀 ${text} 🎀`,
  },
  {
    id: "espadas",
    name: "Espadas",
    wrap: (text) => `⚔ ${text} ⚔`,
  },
  {
    id: "destellos",
    name: "Destellos",
    wrap: (text) => `彡 ${text} ミ`,
  },

  // Seasonal & Occasion
  {
    id: "navidad",
    name: "Navidad",
    wrap: (text) => `🎄 ${text} 🎄`,
  },
  {
    id: "cumpleanos",
    name: "Cumpleaños",
    wrap: (text) => `🎂 ${text} 🎂`,
  },
  {
    id: "halloween",
    name: "Halloween",
    wrap: (text) => `🎃 ${text} 🎃`,
  },
  {
    id: "san-valentin",
    name: "San Valentín",
    wrap: (text) => `💕 ${text} 💕`,
  },
  {
    id: "ano-nuevo",
    name: "Año Nuevo",
    wrap: (text) => `🎆 ${text} 🎆`,
  },

  // Gaming
  {
    id: "gamer",
    name: "Gamer",
    wrap: (text) => `🎮 ${text} 🎮`,
  },
  {
    id: "fuego-gamer",
    name: "Fuego Gamer",
    wrap: (text) => `🔥⚡ ${text} ⚡🔥`,
  },
  {
    id: "corona-real",
    name: "Corona Real",
    wrap: (text) => `👑✨ ${text} ✨👑`,
  },
  {
    id: "guerrero",
    name: "Guerrero",
    wrap: (text) => `⚔️ ${text} ⚔️`,
  },

  // Nature
  {
    id: "flores-sakura",
    name: "Cerezo",
    wrap: (text) => `🌸 ${text} 🌸`,
  },
  {
    id: "hojas",
    name: "Hojas",
    wrap: (text) => `🍃 ${text} 🍃`,
  },
  {
    id: "luna",
    name: "Luna",
    wrap: (text) => `🌙 ${text} 🌙`,
  },
  {
    id: "estrellas-fugaces",
    name: "Estrellas Fugaces",
    wrap: (text) => `💫 ${text} 💫`,
  },
  {
    id: "arcoiris",
    name: "Arcoíris",
    wrap: (text) => `🌈 ${text} 🌈`,
  },

  // Minimal / Aesthetic
  {
    id: "puntos-simples",
    name: "Puntos Simples",
    wrap: (text) => `· ${text} ·`,
  },
  {
    id: "guiones",
    name: "Guiones",
    wrap: (text) => `— ${text} —`,
  },
  {
    id: "barras",
    name: "Barras",
    wrap: (text) => `/ ${text} /`,
  },
  {
    id: "comillas",
    name: "Comillas",
    wrap: (text) => `"${text}"`,
  },
  {
    id: "corchetes",
    name: "Corchetes",
    wrap: (text) => `[ ${text} ]`,
  },

  // Cute / Kawaii
  {
    id: "osito",
    name: "Osito",
    wrap: (text) => `🐻 ${text} 🐻`,
  },
  {
    id: "gatito",
    name: "Gatito",
    wrap: (text) => `🐱 ${text} 🐱`,
  },
  {
    id: "burbuja",
    name: "Burbuja",
    wrap: (text) => `🫧 ${text} 🫧`,
  },
  {
    id: "nube",
    name: "Nube",
    wrap: (text) => `☁️ ${text} ☁️`,
  },
  {
    id: "dulce",
    name: "Dulce",
    wrap: (text) => `🍬 ${text} 🍬`,
  },

  // Bold Statement
  {
    id: "fuego-doble",
    name: "Fuego Doble",
    wrap: (text) => `🔥🔥 ${text} 🔥🔥`,
  },
];

export default decorators;
