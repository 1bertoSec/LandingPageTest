import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Quicksand, Nunito, Space_Grotesk } from "next/font/google";
import "./globals.css";

/**
 * As três versões usam famílias tipográficas diferentes. Carregamos todas aqui
 * como CSS variables; cada escopo de tema (.theme-v1/v2/v3 em globals.css)
 * escolhe quais usar, então nenhuma página baixa fonte que não vai renderizar.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Espaço DuoVitta — Estética avançada em São Caetano do Sul",
    template: "%s · Espaço DuoVitta",
  },
  description:
    "Resgatando autoestima com tecnologia e ciência. Responsabilidade técnica da Dra. Graciele Siboldi, fisioterapeuta dermatofuncional.",
};

export const viewport: Viewport = {
  themeColor: "#12312f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} ${quicksand.variable} ${nunito.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
