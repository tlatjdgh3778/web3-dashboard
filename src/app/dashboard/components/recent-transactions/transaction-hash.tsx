"use client";

import { ExternalLink, Hash } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import CopyButton from "@/components/common/copy-button";

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

	const handleViewOnEtherscan = () => {
		window.open(`https://etherscan.io/tx/${hash}`, "_blank");
		toast.info("Opening transaction on Etherscan...");
	};

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
						<p className="text-xs text-muted-foreground mt-1">Click to copy</p>
					</TooltipContent>
				</Tooltip>

				{/* action buttons */}
				<div className="flex items-center gap-1">
					<CopyButton text={hash} />
					{/* etherscan link */}
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="sm"
								className="h-6 w-6 p-0 hover:bg-muted cursor-pointer"
								onClick={handleViewOnEtherscan}
							>
								<ExternalLink className="h-3 w-3" />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>View on Etherscan</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</TooltipProvider>
	);
}
