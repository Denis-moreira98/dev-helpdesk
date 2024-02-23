import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Dev HelpDesk - Seu sistema de gerenciamento.",
   description: "Seu sistema de gerenciamento.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="br">
         <body className={inter.className}>{children}</body>
      </html>
   );
}
