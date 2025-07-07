import { mockWalletHistory } from "@/mock/data/mockWalletHistory";

import { DataTable } from "@/components/common/data-table/data-table";

import { columns } from "./columns";

export default function RecentTransactions() {
	const data = mockWalletHistory.result ?? [];

	return (
		<div className="mx-auto">
			<DataTable columns={columns} data={data} />
		</div>
	);
}
