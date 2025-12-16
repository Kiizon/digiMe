import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pixelFont = localFont({
  src: "./fonts/BlockCraft.otf",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "kish dizon",
  description: "developer.",
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
        {children}
      </body>
    </html>
  );
}
