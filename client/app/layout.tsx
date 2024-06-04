"use client";
import "./globals.css";

import { Inter } from "next/font/google";

import { Provider } from "react-redux";
import { store } from "@/store/store";

import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <Header />
          <main className="main">{children}</main>
        </body>
      </Provider>
    </html>
  );
}
