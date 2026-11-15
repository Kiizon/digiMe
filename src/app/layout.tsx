import type { Metadata } from "next";
import localFont from "next/font/local";
import Jellyfish from "@/components/Jellyfish";
import "./globals.css";

const pixelFont = localFont({
  src: "./fonts/BlockCraft.otf",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "kish dizon",
  description: "developer and problem solver",
  icons: {
    icon: "/assets/icons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pixelFont.variable}>
      <body>
        <div className="stage">
          <div className="frame">{children}</div>
          <Jellyfish />
        </div>
      </body>
    </html>
  );
}
