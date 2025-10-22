import { InsightCard } from './InsightCard';

interface Insight {
	title: string;
	description: string;
	annotation: string;
}

interface Logo {
	name: string;
	src: string;
}

interface AnalysisSectionProps {
	id: string;
	title: string;
	subtitle: string;
	insights: Insight[];
	logos?: Logo[];
}

// Analysis section component displaying insights in a grid layout
export function AnalysisSection({ id, title, subtitle, insights, logos }: AnalysisSectionProps) {
	return (
		<section id={id} className="py-24 lg:py-32 border-t border-neutral-200">
			<div className="max-w-5xl mx-auto px-6 lg:px-12">
				{/* Section Header */}
				<div className="mb-12 lg:mb-16">
					<h2 className="mb-6 tracking-tight text-neutral-900">
						{title}
					</h2>
					<p className="text-neutral-600">
						{subtitle}
					</p>
				</div>

				{/* Featured Products */}
				{logos && logos.length > 0 && (
					<div className="flex items-center gap-4 lg:gap-6 my-12 lg:my-16">
						{logos.map((logo) => (
							<div
								className="group cursor-default"
								key={logo.name}
								role="img"
								aria-label={`${logo.name} product case study`}
							>
								<img
									src={logo.src}
									alt={`${logo.name} logo`}
									className="h-12 lg:h-16 w-auto hover:scale-105 transition-transform duration-300"
								/>
							</div>
						))}
					</div>
				)}

				{/* Insights Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					{insights.map((insight, index) => (
						<InsightCard
							key={index}
							title={insight.title}
							description={insight.description}
							annotation={insight.annotation}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
