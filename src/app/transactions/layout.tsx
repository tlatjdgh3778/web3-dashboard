import AddressInfo from "@/components/common/address-info";

export default function TransactionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col flex-1 gap-4 py-4 px-16">
			<h1 className="text-2xl font-bold">Transactions</h1>
			<AddressInfo />
			{children}
		</div>
	);
}
