import type { Metadata } from "next";
import { Inter, Archivo_Black, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo_Black({
  variable: "--font-archivo",
  weight: "400",
  subsets: ["latin"],
});

const serif = DM_Serif_Display({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hacompany.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HA — Estudio digital · Montemorelos, NL",
    template: "%s · HA",
  },
  description:
    "Hacemos software a tu medida. Estudio independiente de dos personas: páginas web, aplicaciones y productos a la medida.",
  keywords: [
    "estudio digital",
    "desarrollo web",
    "aplicaciones a la medida",
    "Montemorelos",
    "Nuevo León",
    "Next.js",
    "agencia de software",
  ],
  authors: [{ name: "HA" }],
  creator: "HA",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "HA",
    title: "HA — Estudio digital",
    description:
      "Hacemos software a tu medida. Páginas web, aplicaciones y productos custom. Hablas directo con quienes lo construyen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HA — Estudio digital",
    description:
      "Hacemos software a tu medida. Páginas web, aplicaciones y productos custom.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${archivo.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
