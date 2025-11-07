import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vishal Khandelwal | AI & Product Innovation Professional",
  description:
    "AI and product innovation professional skilled in bridging technology, design, and business to deliver impactful digital solutions.",
  keywords: [
    "AI",
    "Product Innovation",
    "UX Design",
    "Machine Learning",
    "Full Stack Development",
    "Product Analytics",
  ],
  authors: [{ name: "Vishal Khandelwal" }],
  creator: "Vishal Khandelwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishalkhandelwal.dev",
    title: "Vishal Khandelwal | AI & Product Innovation Professional",
    description:
      "AI and product innovation professional skilled in bridging technology, design, and business to deliver impactful digital solutions.",
    siteName: "Vishal Khandelwal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Khandelwal | AI & Product Innovation Professional",
    description:
      "AI and product innovation professional skilled in bridging technology, design, and business to deliver impactful digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

