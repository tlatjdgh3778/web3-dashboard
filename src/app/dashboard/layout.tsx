"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";
import { useAccount } from "wagmi";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { address } = useAccount();

	// copy address to clipboard
	const handleCopyAddress = (address: string) => {
		navigator.clipboard.writeText(address);
		toast.success("Address copied to clipboard");
	};

	return (
		<div className="flex flex-col flex-1 gap-4 py-4 px-16">
			<h1 className="text-2xl font-bold">Portfolio Dashboard</h1>
			<div className="flex items-center gap-2">
				<p>shim.eth </p>
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
						>
							<Copy className="w-4 h-4" />
						</Button>
					</TooltipTrigger>

					<TooltipContent>
						<p>Copy address</p>
					</TooltipContent>
				</Tooltip>
			</div>
			{children}
		</div>
	);
}
