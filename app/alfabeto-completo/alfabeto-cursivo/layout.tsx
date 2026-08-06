import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alfabeto Cursivo | Guía Completa de Letras A a la Z",
  description:
    "Consulta la lista completa del alfabeto cursivo en mayúsculas y minúsculas. Copia cada letra manuscrita individualmente para armar nombres bonitos.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
