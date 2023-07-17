import { themeEffect } from "@/app/ThemeEffect";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alan Gou",
  description: "That's that.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})()`,
          }}
        ></script>
      </head>
      <body className={`${inter.className} dark:bg-gray-950 dark:text-gray-50`}>
        {children}
      </body>
    </html>
  );
}
