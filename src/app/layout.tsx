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

const siteUrl = "https://aanya-sharma.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aanya Sharma — AI/ML Engineer & Tech Enthusiast",
    template: "%s | Aanya Sharma",
  },
  description:
    "Portfolio of Aanya Sharma — AI/ML Engineer & Tech Enthusiast building intelligent systems, GenAI tools, and open-source projects, and advocating for women in tech. Explore projects, skills, and experience.",
  keywords: [
    "Aanya Sharma",
    "AI/ML Engineer",
    "Tech Enthusiast",
    "Data Scientist",
    "GenAI",
    "Women in Tech",
    "Machine Learning",
    "Portfolio",
    "Mangaluru",
  ],
  authors: [{ name: "Aanya Sharma" }],
  creator: "Aanya Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Aanya Sharma — AI/ML Engineer & Tech Enthusiast",
    description:
      "AI/ML Engineer & Tech Enthusiast building intelligent systems, GenAI tools, and open-source projects — passionate about women in tech.",
    siteName: "Aanya Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aanya Sharma — AI/ML Engineer & Tech Enthusiast",
    description:
      "AI/ML Engineer & Tech Enthusiast building intelligent systems, GenAI tools, and open-source projects — passionate about women in tech.",
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
