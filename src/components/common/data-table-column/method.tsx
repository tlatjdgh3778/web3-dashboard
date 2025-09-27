import { Badge } from "@/components/ui/badge";
import { useGetTransactionMethod } from "@/hooks/useGetMethod";

export default function Method({ hash }: { hash: string }) {
	const { data: method } = useGetTransactionMethod({ hash });

	return <Badge variant="outline">{method ?? "N/A"}</Badge>;
}
