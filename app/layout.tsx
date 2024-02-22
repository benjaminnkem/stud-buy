import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CBuddy - Let's Activate your tastebuds",
  description: "some random description.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
