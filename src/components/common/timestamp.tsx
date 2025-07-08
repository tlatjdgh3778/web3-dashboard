import { format, formatDistanceToNow, parseISO } from "date-fns";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function Timestamp({ timestamp }: { timestamp?: string }) {
	if (!timestamp) return "N/A";

	const date = parseISO(timestamp);

	const relativeTime = formatDistanceToNow(date, {
		addSuffix: true,
	});

	const absoluteTime = format(date, "yyyy.MM.dd HH:mm");

	return (
		<Tooltip>
			<TooltipTrigger>
				<p className="font-mono text-xs">{relativeTime}</p>
			</TooltipTrigger>
			<TooltipContent>{absoluteTime}</TooltipContent>
		</Tooltip>
	);
}
