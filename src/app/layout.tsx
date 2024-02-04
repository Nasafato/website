import { themeEffect } from "@/components/ThemeEffect";
import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Serif, Noto_Serif } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const notoSerif = Noto_Serif({ subsets: ["latin"] });

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
        ${ibmPlexSerif.className}
        text-gray-900/90 dark:bg-gray-950 dark:text-gray-100 text-lg
        `}
      >
        {children}
      </body>
    </html>
  );
}
