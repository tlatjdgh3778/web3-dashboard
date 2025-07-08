"use client";

import { Hash } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import CopyButton from "@/components/common/copy-button";
import ViewEtherscan from "@/components/common/view-etherscan";

interface TransactionHashProps {
	hash: string;
	className?: string;
	showFullHash?: boolean;
}

export function TransactionHash({
	hash,
	className,
	showFullHash = false,
}: TransactionHashProps) {
	// display hash in short form (0x1234...abcd)
	const shortHash = `${hash.slice(0, 6)}...${hash.slice(-4)}`;
	const displayHash = showFullHash ? hash : shortHash;

	return (
		<TooltipProvider>
			<div className={`flex items-center gap-2 ${className}`}>
				{/* display hash */}
				<Tooltip>
					<TooltipTrigger asChild>
						<Badge
							variant="outline"
							className="font-mono text-xs cursor-default hover:bg-muted/50 transition-colors group"
						>
							<Hash className="h-3 w-3 mr-1 opacity-50 group-hover:opacity-100 transition-opacity" />
							{displayHash}
						</Badge>
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-mono text-xs">{hash}</p>
					</TooltipContent>
				</Tooltip>

				{/* action buttons */}
				<div className="flex items-center gap-1">
					<CopyButton text={hash} />
					<ViewEtherscan hash={hash} />
				</div>
			</div>
		</TooltipProvider>
	);
}
