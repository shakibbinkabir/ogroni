import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ogroni — Learn with Nazrul Sir",
  description: "Master in-demand skills with expert-led courses and free live classes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
