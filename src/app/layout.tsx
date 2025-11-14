import type { Metadata } from "next";

import Header from "@/components/common/header";
import WalletGuard from "@/components/common/wallet-guard";
import { Toaster } from "@/components/ui/sonner";
import { geistMono, geistSans } from "./ui/fonts";
import ClientProviders from "./client-providers";
import { generateIOSStartupImages } from "./_pwa/ios-startup-images";

import "./globals.css";

export const metadata: Metadata = {
    title: "Web3 Dashboard",
    description: "A minimal Web3 portfolio tracker built with Next.js, wagmi, and RainbowKit.",
    manifest: "/manifest.json",

    icons: {
        icon: [
            { url: "/dashboard_icon_x192.png", sizes: "192x192", type: "image/png" },
            { url: "/dashboard_icon_x384.png", sizes: "384x384", type: "image/png" },
            { url: "/dashboard_icon_x512.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [{ url: "/dashboard_icon_x192.png", sizes: "192x192", type: "image/png" }],
    },

    appleWebApp: {
        capable: true,
        title: "Web3 Dashboard",
        statusBarStyle: "black-translucent",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const iosStartupImages = generateIOSStartupImages();

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="description" content="Web3 Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                {Object.entries(iosStartupImages).map(([key, value]) => {
                    const { media, href } = JSON.parse(value);
                    return <link key={key} rel="apple-touch-startup-image" media={media} href={href} />;
                })}
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
                <ClientProviders>
                    <div className="min-h-screen flex flex-col">
                        <Header />
                        <main className="flex flex-1">
                            <Toaster position="top-right" />
                            <WalletGuard>{children}</WalletGuard>
                        </main>
                    </div>
                </ClientProviders>
            </body>
        </html>
    );
}
