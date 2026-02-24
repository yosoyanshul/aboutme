import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Anshul Pandey - Platform Engineer | Kubernetes & AWS Expert",
  description: "Anshul Pandey: Sr. Platform Engineer specializing in Kubernetes, AWS, and GitOps at Volkswagen. Employee of the Year 2024 & 2025. Building multi-tenant platforms and teaching cloud engineering at Free Cloud Camp.",
  keywords: "Anshul Pandey, Platform Engineer, Kubernetes, AWS, DevOps, GitOps, Terraform, ArgoCD, Pune, Volkswagen, Free Cloud Camp",
  authors: [{ name: "Anshul Pandey" }],
  creator: "Anshul Pandey",
  publisher: "Anshul Pandey",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.anshulpandey.in",
    siteName: "Anshul Pandey - Platform Engineer",
    title: "Anshul Pandey - Platform Engineer | Kubernetes & AWS Expert",
    description: "Building scalable cloud platforms | Employee of the Year | AWS & Kubernetes Specialist",
    images: [
      {
        url: "https://www.anshulpandey.in/assets/img/award_presentation_photo.png",
        width: 1200,
        height: 630,
        alt: "Anshul Pandey - Platform Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshul Pandey - Platform Engineer",
    description: "Kubernetes, AWS & Platform Engineering | Employee of the Year",
    images: ["https://www.anshulpandey.in/assets/img/award_presentation_photo.png"],
    creator: "@yosoyanshul",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://www.anshulpandey.in" />
        <StructuredData />
      </head>
      <body className="font-sans font-outfit bg-neutral-950 text-white antialiased selection:bg-white/20">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
