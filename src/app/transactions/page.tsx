import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

import Transactions from "./transactions/transactions";
import NativeTransactions from "./native-transactions/native-transactions";
import Erc20 from "./erc-20/erc-20";
import NftTransfers from "./nft-transfers/nft-transfers";

export default function TransactionsPage() {
	return (
		<Card className="lg:col-span-1">
			<CardContent className="pt-0">
				<Tabs defaultValue="transactions">
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
						<TabsTrigger
							className="cursor-pointer"
							value="erc_721_transactions"
						>
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
			</CardContent>
		</Card>
	);
}
