import { useState } from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { toast } from "sonner";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
	text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
	const [copied, setCopied] = useState(false);
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			toast.success(`${text} copied to clipboard!`);

			setTimeout(() => setCopied(false), 2000);
		} catch (error) {
			console.error(error);
			toast.error("Failed to copy hash");
		}
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					variant="ghost"
					size="sm"
					className="h-6 w-6 p-0 hover:bg-muted cursor-pointer"
					onClick={handleCopy}
				>
					{copied ? (
						<Check className="h-3 w-3 text-green-500" />
					) : (
						<Copy className="h-3 w-3" />
					)}
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>{copied ? "Copied!" : "Copy hash"}</p>
			</TooltipContent>
		</Tooltip>
	);
}
