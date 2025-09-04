import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Цитаты Джейсона Стетхема",
  description: "Получи свою ежедневную дозу мотивации от Джейсона Стетхема!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <Analytics />
        <SpeedInsights />
        <div className="h-screen flex flex-col justify-center items-center gap-5">
          {children}
        </div>
      </body>
    </html>
  );
}
