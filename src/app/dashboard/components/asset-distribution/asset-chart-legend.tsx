export default function AssetChartLegend(props: any) {
	const { payload } = props;
	return (
		<div className="flex flex-wrap justify-center gap-4 mt-4">
			{payload?.map((entry: any) => (
				<div key={entry.value} className="flex items-center gap-2">
					<div
						className="w-3 h-3 rounded-full"
						style={{ backgroundColor: entry.color }}
					/>
					<span className="text-sm font-medium">{entry.value}</span>
				</div>
			))}
		</div>
	);
}
