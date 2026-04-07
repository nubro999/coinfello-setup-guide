import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoinFello Setup Guide",
  description: "OpenClaw + CoinFello 설치 가이드",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
