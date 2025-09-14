import { Skeleton } from "@/components/ui/skeleton";

export default function TableLoadingSkeleton() {
	return (
		<div className="space-y-4">
			<div className="flex items-center py-4">
				<Skeleton className="h-10 w-24 ml-auto" />
			</div>
			<div className="rounded-md border">
				<div className="h-10 border-b bg-muted/50">
					<div className="grid grid-cols-9 h-full">
						{Array.from({ length: 9 }).map((_, i) => (
							<Skeleton
								key={i as number}
								className="h-6 w-[80%] m-auto rounded"
							/>
						))}
					</div>
				</div>
				{Array.from({ length: 5 }).map((_, i) => (
					<div key={i as number} className="grid grid-cols-9 h-16 items-center">
						{Array.from({ length: 9 }).map((_, j) => (
							<Skeleton
								key={j as number}
								className="h-6 w-[80%] m-auto rounded"
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
