"use client";

import { User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import CopyButton from "@/components/common/copy-button";
import ViewEtherscan from "@/components/common/view-etherscan";

interface FromAddressProps {
	from_address: string;
	from_address_label?: string;
	isCurrentWallet?: boolean;
}

export default function FromAddress({
	from_address,
	from_address_label,
	isCurrentWallet = false,
}: FromAddressProps) {
	const displayAddress =
		from_address_label ||
		(from_address
			? `${from_address.slice(0, 6)}...${from_address.slice(-4)}`
			: "N/A");

	return (
		<TooltipProvider>
			<div className="flex items-center gap-2">
				{/* 주소 표시 */}
				<Tooltip>
					<TooltipTrigger asChild>
						<Badge
							variant={isCurrentWallet ? "secondary" : "outline"}
							className="font-mono text-xs cursor-default hover:bg-muted/50 transition-colors group"
						>
							<User className="h-3 w-3 mr-1 opacity-50 group-hover:opacity-100 transition-opacity" />
							{displayAddress}
						</Badge>
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-mono text-xs">{from_address}</p>
					</TooltipContent>
				</Tooltip>

				<div className="flex items-center gap-1">
					<CopyButton text={from_address} />
					<ViewEtherscan hash={from_address} />
				</div>
			</div>
		</TooltipProvider>
	);
}
