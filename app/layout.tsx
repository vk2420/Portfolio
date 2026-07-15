import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vishal Khandelwal | Supply Chain Ops → Product Manager",
  description:
    "Portfolio of Vishal Khandelwal — supply chain operator moving into product management. Shipped AI tools saving 1M SAR annually at Landmark Group, presented directly to the CEO. Targeting APM, Product Analyst, and AI PM roles in GCC and India.",
  keywords: [
    "Product Management",
    "Associate Product Manager",
    "AI Product Manager",
    "Career Transition",
    "Supply Chain to Product",
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
    title: "Vishal Khandelwal | Supply Chain Ops → Product Manager",
    description:
      "Portfolio of Vishal Khandelwal — supply chain operator moving into product management. Shipped AI tools saving 1M SAR annually at Landmark Group, presented directly to the CEO. Targeting APM, Product Analyst, and AI PM roles in GCC and India.",
    siteName: "Vishal Khandelwal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Khandelwal | Supply Chain Ops → Product Manager",
    description:
      "Portfolio of Vishal Khandelwal — supply chain operator moving into product management. Shipped AI tools saving 1M SAR annually at Landmark Group, presented directly to the CEO.",
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

