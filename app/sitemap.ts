import type { MetadataRoute } from "next";

// TODO: update this to the real purchased domain before deploying to Vercel
const BASE_URL = "https://letrasbonitas.com";

const routes: string[] = [
  "",
  "/letras-bonitas/letras-cursivas",
  "/letras-bonitas/letras-graffiti",
  "/letras-bonitas/caligrafia",
  "/letras-bonitas/letras-firma",
  "/letras-bonitas/letras-tatuajes",
  "/letras-bonitas/letras-aesthetic",
  "/letras-bonitas/letras-japonesas",
  "/letras-bonitas/letras-goticas",
  "/nicks-para-juegos/nick-free-fire",
  "/nicks-para-juegos/nombres-para-roblox",
  "/fuentes-para-instagram/bio-para-instagram",
  "/fuentes-para-instagram/fuentes-para-facebook",
  "/fuentes-para-instagram/fuentes-para-whatsapp",
  "/fuentes-para-instagram/fuentes-para-discord",
  "/simbolos-aesthetic/simbolos-para-nick",
  "/simbolos-aesthetic/emojis-para-copiar",
  "/simbolos-aesthetic/simbolos-coquette",
  "/simbolos-aesthetic/kaomojis",
  "/letras-personalizadas/texto-en-negrita",
  "/letras-personalizadas/texto-italico",
  "/letras-personalizadas/invertir-texto",
  "/letras-personalizadas/nombres-personalizados",
  "/letras-personalizadas/numeros-en-letras",
  "/letras-personalizadas/mayusculas-minusculas",
  "/letras-personalizadas/texto-invisible",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
