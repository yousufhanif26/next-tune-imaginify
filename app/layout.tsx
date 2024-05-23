import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Variable, Weight } from "lucide-react";
import { cn } from "@/lib/utils";

const IBMPLEX = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-imb-ples",
});

export const metadata: Metadata = {
  title: "Imaginify | NextTune",
  description: "AI-powered image generator by NextTune",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body className={cn("font-IBMPLEX antialiased", IBMPLEX.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
