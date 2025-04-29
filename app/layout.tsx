import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import { TicketProvider } from "./contexts/TicketContext";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conference Ticket Generator",
  description: "Frontend Mentor Junior Level Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} antialiased`}
      >
        <TicketProvider>{children}</TicketProvider>
      </body>
    </html>
  );
}
