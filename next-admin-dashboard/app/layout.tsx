import type {Metadata} from "next";
import {Geist} from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

const geist = Geist({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "next-admin-dashboard",
    description: "Professional admin dashboard built with Next.js",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={geist.className}>
        <div className="flex h-screen overflow-hidden">
            <Sidebar/>
            <div className="flex flex-col flex-1 overflow-hidden">
                <Navbar/>
                <main className="flex-1 overflow-y-auto p-6 bg-[var(--background)]">
                    {children}
                </main>
            </div>
        </div>
        </body>
        </html>
    );
}