import React from "react";
import "./globals.css";
import Header from "./components/Header";
import { Poppins } from "next/font/google";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Traversy Media",
  description: "Web dev tutorials and courses",
  keywords: "web development, web design, javascript, react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
