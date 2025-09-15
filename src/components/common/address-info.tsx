"use client";

import { Copy } from "lucide-react";
import { useAccount, useEnsName } from "wagmi";
import { toast } from "sonner";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function AddressInfo() {
	const { address } = useAccount();

	const ensName = useEnsName({ address });

	// copy address to clipboard
	const handleCopyAddress = (address: string) => {
		navigator.clipboard.writeText(address);
		toast.success("Address copied to clipboard");
	};
	return (
		<div className="flex items-center gap-2">
			<p>{ensName.data || "UNNAMED"} </p>
			<Badge variant="outline">
				{address?.slice(0, 6)}...{address?.slice(-4)}
			</Badge>
			<Tooltip>
				<TooltipTrigger>
					<Button
						variant="ghost"
						className="text-muted-foreground cursor-pointer"
						size="icon"
						onClick={() => handleCopyAddress(address ?? "")}
						asChild
					>
						<Copy className="w-4 h-4" />
					</Button>
				</TooltipTrigger>

				<TooltipContent>
					<p>Copy address</p>
				</TooltipContent>
			</Tooltip>
		</div>
	);
}
