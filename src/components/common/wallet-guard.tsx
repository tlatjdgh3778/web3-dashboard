"use client";

import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function WalletGuard({
	children,
	fallback, // 로그인되지 않았을 때 표시할 컴포넌트
}: {
	children: React.ReactNode;
	fallback?: React.ReactNode; // 선택적 fallback 컴포넌트
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

	// 로그인되었거나 홈페이지인 경우 자식 컴포넌트 렌더링
	if (isConnected || pathname === "/") {
		return <>{children}</>;
	}

	// fallback이 제공된 경우 fallback 렌더링, 아니면 null
	return <>{fallback || null}</>;
}
