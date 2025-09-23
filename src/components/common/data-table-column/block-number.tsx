import Link from "next/link";
import { hexToNumber } from "viem";

export default function BlockNumber({
	block_number,
}: {
	block_number: string;
}) {
	const blockNumber = hexToNumber(block_number as `0x${string}`);
	return (
		<Link
			href={`https://etherscan.io/block/${blockNumber}`}
			target="_blank"
			className="hover:underline text-blue-600"
		>
			{blockNumber}
		</Link>
	);
}
