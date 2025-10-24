import { DimensionAccordion } from '../components/DimensionAccordion';
import { Footer } from '../components/Footer';
import { apps, dimensions, analysisContent } from './data';

/**
 * Search & browsing analysis page comparing Netflix, YouTube, and Airbnb
 * Analyzes how each app approaches discovery, choice architecture, and user control
 */
export default function SearchPage() {
	return (
		<div className="min-h-screen bg-neutral-50">
			{/* Hero Section */}
			<div className="bg-white border-b border-neutral-200">
				<div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-12 lg:pb-16">
					<h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
						Search & Browsing Analysis
					</h1>
					<p className="text-xl text-neutral-600 max-w-3xl leading-relaxed">
						Compare how Netflix (recommendation-heavy), YouTube (search + algorithm), and Airbnb (filter-heavy browsing) help users find content.
						Each approach serves different business models—Netflix needs engagement time, YouTube needs ad inventory, Airbnb needs booking conversion.
						How do these discovery patterns shape user choice and agency?
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
				{/* View Description */}
				<div className="mb-8">
					<p className="text-neutral-600 text-base">
						Compare how all three platforms approach each aspect of search and discovery.
						Click on a dimension below to expand the analysis and switch between apps.
					</p>
				</div>

				{/* Dimension Accordion View */}
				<DimensionAccordion
					dimensions={dimensions}
					apps={apps}
					analysisContent={analysisContent}
					defaultValue="discovery-patterns"
				/>
			</div>

			<Footer />
		</div>
	);
}
