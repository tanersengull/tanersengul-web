import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/tanersengull"),
  title: "Taner Şengül | Mobile AI Application Developer | iOS Android",
  description:
    "Taner Şengül — Mobile AI Application Developer. Haliç Üniversitesi Elektronik Teknolojisi mezunu. iOS ve Android için yapay zeka destekli mobil uygulamalar ve projeler geliştiren bir yazılımcı.",
  keywords: [
    "Taner Şengül",
    "Mobile AI Application Developer",
    "iOS Developer",
    "Android Developer",
    "Mobile AI",
    "Haliç Üniversitesi",
    "App Store Connect",
    "Google Play Console",
  ],
  authors: [{ name: "Taner Şengül", url: "https://github.com/tanersengull" }],
  creator: "Taner Şengül",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Taner Şengül | Mobile AI Application Developer",
    description:
      "iOS ve Android ekosistemlerinde yapay zeka destekli mobil uygulamalar ve yenilikçi dijital deneyimler.",
    siteName: "Taner Şengül",
    images: [
      {
        url: "/images/taner-sengul.jpg",
        width: 1200,
        height: 630,
        alt: "Taner Şengül",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taner Şengül | Mobile AI Application Developer",
    description: "Mobile AI Application Developer | iOS & Android",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} font-sans antialiased dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (typeof window !== 'undefined') { if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } window.scrollTo(0, 0); }`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-[#09090b] dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
