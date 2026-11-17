import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
