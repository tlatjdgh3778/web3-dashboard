"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";

import WalletNotConnected from "@/components/common/wallet-not-connected";

export default function Page() {
	const { isConnected } = useAccount();
	const router = useRouter();

	useEffect(() => {
		if (isConnected) {
			router.replace("/dashboard");
		}
	}, [isConnected, router]);

	return <WalletNotConnected />;
}
