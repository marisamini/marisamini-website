import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { metadataConfig, viewportConfig } from "@/lib/metadata";
import RecordVisit from "@/components/RecordVisit";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = metadataConfig;
export const viewport = viewportConfig;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <RecordVisit />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
