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

const siteUrl = "https://TanviShetty19.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tanvi Shetty — AI/ML Engineer & Tech Enthusiast",
    template: "%s | Tanvi Shetty",
  },
  description:
    "Portfolio of Tanvi Shetty — AI/ML Engineer & Tech Enthusiast building intelligent systems, GenAI tools.",
  keywords: [
    "Tanvi Shetty",
    "AI/ML Engineer",
    "Tech Enthusiast",
    "Data Scientist",
    "GenAI",
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
    title: "Tanvi Shetty — AI/ML Engineer & Tech Enthusiast",
    description:
      "AI/ML Engineer & Tech Enthusiast building intelligent systems, GenAI tools.",
    siteName: "Tanvi Shetty Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanvi Shetty — AI/ML Engineer & Tech Enthusiast",
    description:
      "AI/ML Engineer & Tech Enthusiast building intelligent systems, GenAI tools.",
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
