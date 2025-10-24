import { DimensionAccordion } from '../components/DimensionAccordion';
import { apps, dimensions, analysisContent } from './data';

/**
 * Onboarding analysis page comparing Instagram, Notion, and Venmo
 * Analyzes how each app approaches five key dimensions of onboarding
 */
export default function OnboardingPage() {
	return (
		<div className="min-h-screen bg-neutral-50">
			{/* Hero Section */}
			<div className="bg-white border-b border-neutral-200">
				<div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-12 lg:pb-16">
					<h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
						Onboarding Analysis
					</h1>
					<p className="text-xl text-neutral-600 max-w-3xl leading-relaxed">
						Comparing onboarding experiences across Instagram, Notion, and Venmo.
						How does each app balance information gathering with immediate value delivery?
						What do their onboarding flows reveal about their business priorities?
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
				{/* View Description */}
				<div className="mb-8">
					<p className="text-neutral-600 text-base">
						Compare how all three apps approach each aspect of onboarding.
						Click on a dimension below to expand the analysis and switch between apps.
					</p>
				</div>

				{/* Dimension Accordion View */}
				<DimensionAccordion
					dimensions={dimensions}
					apps={apps}
					analysisContent={analysisContent}
					defaultValue="first-moments"
				/>
			</div>
		</div>
	);
}
