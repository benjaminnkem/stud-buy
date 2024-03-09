import type { Metadata } from "next";
import "../public/globals.css";
import { mulish, openSans } from "@/lib/utils/fonts";
import Providers from "@/lib/providers/providers";

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
      <body className={mulish.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
