import type { Metadata } from "next";
import { PortfolioLayout } from "./components/PortfolioLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PortfolioLayout>{children}</PortfolioLayout>
      </body>
    </html>
  );
}
