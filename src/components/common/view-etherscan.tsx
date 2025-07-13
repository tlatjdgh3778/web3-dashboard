import { toast } from "sonner";
import { ExternalLink } from "lucide-react";

import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ViewEtherscanProps {
	hash?: string;
	type?: "tx" | "address" | "block";
}

export default function ViewEtherscan({
	hash,
	type = "tx",
}: ViewEtherscanProps) {
	const handleViewOnEtherscan = () => {
		if (!hash) return;
		window.open(`https://etherscan.io/${type}/${hash}`, "_blank");
		toast.info("Opening transaction on Etherscan...");
	};

	return (
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
	);
}
