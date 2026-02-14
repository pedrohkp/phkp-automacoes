import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/Header"

import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/sonner"
import { LanguageProvider } from "@/components/language-provider"
import { ExitIntentPopup } from "@/components/ExitIntentPopup"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PHKP Automações | Automação Inteligente com n8n",
  description: "Reduza até 15 horas semanais automatizando processos repetitivos. Especialistas em n8n para empresas que querem escalar sem contratar.",
  keywords: ["automação", "n8n", "processos", "produtividade", "no-code", "workflow automation"],
  authors: [{ name: "Pedro Pavão - PHKP Automações" }],
  openGraph: {
    title: "PHKP Automações | Automação Inteligente com n8n",
    description: "Reduza até 15 horas semanais automatizando processos repetitivos",
    url: "https://phkp-automacoes.vercel.app",
    siteName: "PHKP Automações",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PHKP Automações | Automação Inteligente com n8n",
    description: "Reduza até 15 horas semanais automatizando processos repetitivos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <ExitIntentPopup />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
