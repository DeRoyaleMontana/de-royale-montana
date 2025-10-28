import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "De Royale Montana - Luxury Hotel Experience",
  description: "Experience luxury and comfort at De Royale Montana, your premier destination for unforgettable stays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
