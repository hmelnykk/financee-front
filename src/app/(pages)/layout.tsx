import type { Metadata } from "next";
import "./../globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Financee",
  description: "Track your finances on-line!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-slate-50`}
      >
        <Header />
        <main className="p-8">
          <div className="p-8" />
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
