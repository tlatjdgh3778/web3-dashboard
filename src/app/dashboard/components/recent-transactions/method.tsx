import { Badge } from "@/components/ui/badge";

export default function Method({ method }: { method: string }) {
	return <Badge variant="outline">{method}</Badge>;
}
