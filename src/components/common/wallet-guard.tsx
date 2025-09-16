"use client";

import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import WalletNotConnected from "./wallet-not-connected";
import { useRouter, usePathname } from "next/navigation";

export default function WalletGuard({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isConnected } = useAccount();
	const [mounted, setMounted] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		if (mounted && !isConnected && pathname !== "/") {
			router.replace("/");
		}
	}, [mounted, isConnected, pathname, router]);

	if (!mounted) {
		return null;
	}

	return <>{isConnected ? children : <WalletNotConnected />}</>;
}
