import { themeEffect } from "@/components/ThemeEffect";
import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
          crossOrigin="anonymous"
        ></link>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})()`,
          }}
        ></script>
      </head>
      <body
        className={`
        ${true && sourceSerif.className}
        text-gray-900/90 dark:bg-gray-950 dark:text-gray-100 text-lg
        bg-zinc-100
        `}
      >
        {children}
      </body>
    </html>
  );
}
