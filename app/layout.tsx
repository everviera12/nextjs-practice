"use client";

import "./globals.css";

import { Alan_Sans } from "next/font/google";
import { Provider } from "react-redux";

import { store } from "@/components/redux/store";

const alanSans = Alan_Sans({
    variable: "--font-alan-sans",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${alanSans.variable} antialiased`}>
                <Provider store={store}>{children}</Provider>
            </body>
        </html>
    );
}
