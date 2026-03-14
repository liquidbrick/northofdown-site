import type { Metadata } from "next";
import { Cinzel, Raleway } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "North of Down | Official Website",
  description: "North of Down — psychedelic, spirit-centered music. Listen, tour dates, and more.",
  openGraph: {
    title: "North of Down",
    description: "Spirit-centered music. Official site.",
    url: "https://northofdown.com",
    siteName: "North of Down",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
