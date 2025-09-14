import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

import Transactions from "./transactions/transactions";
import InternalTransactions from "./internal-transactions/internal-transactions";
import Erc20 from "./erc-20/erc-20";

export default function TransactionsPage() {
	return (
		<Card className="lg:col-span-1">
			<CardContent className="pt-0">
				<Tabs defaultValue="transactions">
					<TabsList>
						<TabsTrigger className="cursor-pointer" value="transactions">
							Transactions
						</TabsTrigger>
						<TabsTrigger
							className="cursor-pointer"
							value="internal_transactions"
						>
							Internal Transactions
						</TabsTrigger>
						<TabsTrigger className="cursor-pointer" value="erc_20_transactions">
							ERC-20
						</TabsTrigger>
					</TabsList>
					<TabsContent value="transactions">
						<Transactions />
					</TabsContent>
					<TabsContent value="internal_transactions">
						<InternalTransactions />
					</TabsContent>
					<TabsContent value="erc_20_transactions">
						<Erc20 />
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}
