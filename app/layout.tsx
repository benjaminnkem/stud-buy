import type { Metadata } from "next";
import "../public/globals.css";
import { forum, mulish } from "@/lib/utils/fonts";

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
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
