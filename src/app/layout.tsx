import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://tanvi19.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tanvi Shetty — AI/ML Engineer & Data Scientist",
    template: "%s | Tanvi Shetty",
  },
  description:
    "Portfolio of Tanvi Shetty — AI/ML Engineer & Data Scientist building intelligent software with machine learning, OCR/document AI, NLP, and GenAI/LLM/RAG. Explore projects, skills, and experience.",
  keywords: [
    "Tanvi Shetty",
    "AI/ML Engineer",
    "Data Scientist",
    "GenAI",
    "LLM",
    "RAG",
    "NLP",
    "Machine Learning",
    "Portfolio",
    "Mangaluru",
  ],
  authors: [{ name: "Tanvi Shetty" }],
  creator: "Tanvi Shetty",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Tanvi Shetty — AI/ML Engineer & Data Scientist",
    description:
      "AI/ML Engineer & Data Scientist building intelligent systems with ML, OCR/document AI, NLP, and GenAI/LLM/RAG.",
    siteName: "Tanvi Shetty Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanvi Shetty — AI/ML Engineer & Data Scientist",
    description:
      "AI/ML Engineer & Data Scientist building intelligent systems with ML, OCR/document AI, NLP, and GenAI/LLM/RAG.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
