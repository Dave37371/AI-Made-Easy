import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Made Easy Summit — Presented by Voice to Influence™",
  description:
    "Learn AI for content, marketing and business with Austin Armstrong, Melissa Mitchell, Kanji Low and more. Gold Coast, 18 June 2027. Tickets US$497.",
  openGraph: {
    title: "AI Made Easy Summit",
    description:
      "Austin Armstrong, Melissa Mitchell, Kanji Low and more. Practical AI for your business. Gold Coast, 18 June 2027. Tickets US$497.",
    type: "website",
    images: [
      "https://assets.cdn.filesafe.space/OtOPsRWlrRPyLs03ZSTG/media/6ab5de1c974a9da6eeaf739c.jpeg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Made Easy Summit | Gold Coast, 18 June 2027",
    description: "Learn AI with Austin Armstrong, Melissa Mitchell, Kanji Low and more. Tickets US$497.",
    images: ["https://assets.cdn.filesafe.space/OtOPsRWlrRPyLs03ZSTG/media/6ab5de1c974a9da6eeaf739c.jpeg"],
  },
  icons: {
    icon: "https://assets.cdn.filesafe.space/OtOPsRWlrRPyLs03ZSTG/media/6aa1dc7d8d82674005011470.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,500;1,700;1,900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-ink text-brand-cream">
        {children}
      </body>
    </html>
  );
}
