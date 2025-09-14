import { Badge } from "@/components/ui/badge";
import { AssetTransfersCategory } from "alchemy-sdk";
import {
	Coins,
	ArrowRightLeft,
	Image,
	Repeat,
	Layers,
	Star,
} from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Category({
	category,
}: {
	category: AssetTransfersCategory;
}) {
	const categoryConfig: Record<
		AssetTransfersCategory,
		{
			label: string;
			icon: React.ReactNode;
			variant: "default" | "secondary" | "destructive" | "outline";
			description: string;
		}
	> = {
		[AssetTransfersCategory.EXTERNAL]: {
			label: "External",
			icon: <ArrowRightLeft className="h-3 w-3" />,
			variant: "outline",
			description: "Transfer from external address",
		},
		[AssetTransfersCategory.INTERNAL]: {
			label: "Internal",
			icon: <Repeat className="h-3 w-3" />,
			variant: "secondary",
			description: "Transfer from internal address",
		},
		[AssetTransfersCategory.ERC20]: {
			label: "ERC20",
			icon: <Coins className="h-3 w-3" />,
			variant: "default",
			description: "Transfer of ERC20 token",
		},
		[AssetTransfersCategory.ERC721]: {
			label: "NFT",
			icon: <Image className="h-3 w-3" />,
			variant: "destructive",
			description: "Transfer of ERC721 token",
		},
		[AssetTransfersCategory.ERC1155]: {
			label: "ERC1155",
			icon: <Layers className="h-3 w-3" />,
			variant: "secondary",
			description: "Transfer of ERC1155 token",
		},
		[AssetTransfersCategory.SPECIALNFT]: {
			label: "Special NFT",
			icon: <Star className="h-3 w-3" />,
			variant: "destructive",
			description: "Transfer of special NFT",
		},
	};

	const config = categoryConfig[category];

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Badge variant={config.variant} className="flex items-center gap-1.5">
					{config.icon}
					{config.label}
				</Badge>
			</TooltipTrigger>
			<TooltipContent>
				<p>{config.description}</p>
			</TooltipContent>
		</Tooltip>
	);
}
