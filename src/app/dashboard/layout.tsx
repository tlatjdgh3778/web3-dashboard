"use client";

import { useAccount } from "wagmi";

import AddressInfo from "@/components/common/AddressInfo";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { address } = useAccount();

	return (
		<div className="flex flex-col flex-1 gap-4 py-4 px-16">
			<h1 className="text-2xl font-bold">Dashboard</h1>
			<AddressInfo address={address} />
			{children}
		</div>
	);
}
