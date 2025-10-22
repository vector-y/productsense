interface InsightCardProps {
	title: string;
	description: string;
	annotation: string;
	index: number;
}

// Individual insight card component with hover effects
export function InsightCard({ title, description, annotation, index }: InsightCardProps) {
	return (
		<div className="group relative pl-8">
			{/* Hover Effect Line */}
			<div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

			{/* Annotation Badge */}
			<div className="inline-flex items-center gap-2 mb-6">
				<span className="text-neutral-400 tabular-nums">
					{String(index + 1).padStart(2, '0')}
				</span>
				<span className="px-3 py-1 bg-neutral-900 text-neutral-50 rounded-full inline-block">
					{annotation}
				</span>
			</div>

			{/* Content */}
			<div className="space-y-4">
				<h3 className="tracking-tight text-neutral-900">
					{title}
				</h3>

				<p className="text-neutral-600 leading-relaxed">
					{description}
				</p>
			</div>
		</div>
	);
}
