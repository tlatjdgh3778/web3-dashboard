import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";

import Transactions from "./transactions/transactions";
import NativeTransactions from "./native-transactions/native-transactions";
import Erc20 from "./erc-20/erc-20";
import NftTransfers from "./nft-transfers/nft-transfers";

export default function TransactionsPage() {
	return (
		<div>
			<Tabs defaultValue="transactions" className="w-[400px]">
				<TabsList>
					<TabsTrigger className="cursor-pointer" value="transactions">
						Transactions
					</TabsTrigger>
					<TabsTrigger className="cursor-pointer" value="native_transactions">
						Native Transactions
					</TabsTrigger>
					<TabsTrigger className="cursor-pointer" value="erc_20_transactions">
						ERC-20
					</TabsTrigger>
					<TabsTrigger className="cursor-pointer" value="erc_721_transactions">
						NFT Transfers
					</TabsTrigger>
				</TabsList>
				<TabsContent value="transactions">
					<Transactions />
				</TabsContent>
				<TabsContent value="native_transactions">
					<NativeTransactions />
				</TabsContent>
				<TabsContent value="erc_20_transactions">
					<Erc20 />
				</TabsContent>
				<TabsContent value="erc_721_transactions">
					<NftTransfers />
				</TabsContent>
			</Tabs>
		</div>
	);
}
