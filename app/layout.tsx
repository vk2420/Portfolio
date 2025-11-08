import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vishal Khandelwal | AI + Product Innovator",
  description:
    "Portfolio of Vishal Khandelwal — AI Engineering Certified Product Builder creating scalable tech solutions for logistics, supply chain, and digital innovation.",
  keywords: [
    "AI",
    "Product Management",
    "Associate Product Manager",
    "Machine Learning",
    "React",
    "Firebase",
    "Supply Chain Technology",
    "Product Innovation",
  ],
  authors: [{ name: "Vishal Khandelwal" }],
  creator: "Vishal Khandelwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishalkhandelwal.dev",
    title: "Vishal Khandelwal | AI + Product Innovator",
    description:
      "Portfolio of Vishal Khandelwal — AI Engineering Certified Product Builder creating scalable tech solutions for logistics, supply chain, and digital innovation.",
    siteName: "Vishal Khandelwal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Khandelwal | AI + Product Innovator",
    description:
      "Portfolio of Vishal Khandelwal — AI Engineering Certified Product Builder creating scalable tech solutions for logistics, supply chain, and digital innovation.",
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

