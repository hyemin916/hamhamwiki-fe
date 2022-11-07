import "./globals.css";
import type { ReactNode } from "react";
import localFont from "@next/font/local";

const suitFont = localFont({ src: "./my-font.woff2" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={suitFont.className}>
      <head>
        <title>햄햄위키</title>
        <meta name="description" content="Ham's dev wiki" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
