// src/app/client-providers.tsx
"use client";

import { Toaster } from "@/components/ui/sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import LayoutProvider from "@/components/common/layout-provider";
import MSWBootstrap from "@/mock/mock-bootstrap";

export default function ClientProviders({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<MSWBootstrap>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<QueryProvider>
					<LayoutProvider>
						<Toaster position="top-right" />
						{children}
					</LayoutProvider>
				</QueryProvider>
			</ThemeProvider>
		</MSWBootstrap>
	);
}
