import type { Metadata, Viewport } from "next";

const siteUrl = process.env.BASE_URL || "https://www.marisamini.com";
const imageUrl =
  process.env.BASE_IMAGE_URL || "https://www.marisamini.com/opengraph.png";

export const metadataConfig: Metadata = {
  title: {
    default: "Marisa Mini",
    template: "%s | Marisa Mini",
  },
  description:
    "Microsoft Dynamics Consultant at RSM US LLP. Data Science background with expertise in CRM implementations, Power Platform, and data analysis.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Marisa Mini | Microsoft Dynamics Consultant",
    description:
      "Technology Consultant for Microsoft Dynamics 365. CRM implementations, Power Platform, Data Science.",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Marisa Mini Portfolio",
      },
    ],
    siteName: "Marisa Mini",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Marisa Mini",
    "Microsoft Dynamics",
    "Dynamics 365",
    "Power Platform",
    "CRM",
    "Power Pages",
    "Data Science",
    "RSM",
  ],
  authors: [{ name: "Marisa Mini" }],
  alternates: { canonical: siteUrl },
};

export const viewportConfig: Viewport = {
  themeColor: "#202020",
  width: "device-width",
  initialScale: 1,
};
