import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: update this to the real purchased domain before deploying to Vercel
  metadataBase: new URL("https://letrasbonitas.com"),
  title: "Letras Bonitas - 1300+ Conversor de Fuentes para Copiar y Pegar 🌸",
  description:
    "Generador de letras bonitas y fuentes gratis. Convierte texto normal a cursiva, gótica, aesthetic, negrita y símbolos para Instagram, TikTok, WhatsApp y Free Fire.",
  keywords: [
    "letras bonitas",
    "conversor de letras",
    "fuentes para instagram",
    "letras aesthetic",
    "letras cursivas",
    "letras góticas",
    "nick free fire",
    "letras diferentes",
  ],
  authors: [{ name: "Letras Bonitas" }],
  icons: "/favicon.ico",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Letras Bonitas - Conversor de Fuentes para Copiar y Pegar 🌸",
    description:
      "Transforma texto en 1300+ letras bonitas, cursivas, góticas y aesthetic gratis. Funciona en Instagram, TikTok, WhatsApp y juegos.",
    type: "website",
    locale: "es_ES",
    siteName: "Letras Bonitas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Letras Bonitas - Conversor de Fuentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letras Bonitas - 1300+ Fuentes para Copiar y Pegar",
    description:
      "Genera fuentes de letras bonitas gratis para Instagram, WhatsApp, Free Fire y TikTok.",
    images: ["/og-image.png"],
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Letras Bonitas",
  alternateName: "Conversor de Letras Bonitas y Fuentes Aesthetic",
  url: "https://letrasbonitas.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://letrasbonitas.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Generador de Letras Bonitas",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Generador y conversor de letras bonitas en línea con más de 1300 estilos Unicode para Instagram, WhatsApp, TikTok y juegos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var theme = savedTheme || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative">
        {/* Background Ambient Radial Glow Blobs (Deep Rose, Orchid & Indigo) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 ambient-glow transition-opacity">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[130px]" />
          <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-rose-500/15 rounded-full blur-[130px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px]" />
          <div className="absolute -bottom-40 right-1/4 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[130px]" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
