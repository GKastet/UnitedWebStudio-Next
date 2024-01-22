import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
// import { useState } from "react";

export const metadata: Metadata = {
  title: {
    default: "United Web Studio",
    template: "United | %s",
  },
  description: "United Web Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [lang, setLang] = useState('en')  
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
