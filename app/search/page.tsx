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
				{/* Comparative Summary */}
				<div className="mb-12 bg-white rounded-lg border border-neutral-200 p-8">
					<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
						Summary
					</h2>
					<div className="space-y-4 text-neutral-600 leading-relaxed">
						<p>
							These three platforms reveal distinct philosophies for helping users find what they want.
							<strong> Netflix guides users toward recommended content</strong> through algorithmic curation and visual discovery patterns,
							optimizing for engagement time through personalized "For You" feeds and category browsing.
							<strong> YouTube prioritizes user control</strong> with a prominent search-first interface, voice input, and substantial filtering options,
							while still surfacing algorithmic suggestions on the home feed where most engagement happens.
							<strong> Airbnb flips the model</strong> by putting structured user agency first, with beautifully designed filters for Where/When/Who
							that empower users to convert interest directly into bookings.
						</p>
						<p>
							The fundamental tension across all three: how much to <em>guide</em> versus how much to <em>empower</em>?
							Netflix assumes users want recommendations and fine-tunes their suggestions.
							YouTube supports users who may search, browse, or follow creators across all three modes.
							Airbnb assumes users have clear needs and need tools to express them confidently.
							Each reflects its business model: engagement time, ad inventory, and conversion confidence.
						</p>
					</div>
				</div>

				{/* Dimension Accordion View */}
				<DimensionAccordion
					dimensions={dimensions}
					apps={apps}
					analysisContent={analysisContent}
					defaultValue="user-control-platform-control"
				/>
			</div>

			<Footer />
		</div>
	);
}
