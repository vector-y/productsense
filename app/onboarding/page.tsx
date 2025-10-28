import { DimensionAccordion } from '../components/DimensionAccordion';
import { Footer } from '../components/Footer';
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
				{/* Comparative Summary */}
				<div className="mb-12 bg-white rounded-lg border border-neutral-200 p-8">
					<h2 className="text-2xl font-semibold text-neutral-900 mb-4">
						Summary
					</h2>
					<div className="space-y-4 text-neutral-600 leading-relaxed">
						<p>
							These three apps reveal fundamentally different approaches to welcoming new users.
							<strong> Instagram minimizes friction everywhere</strong>, optimizing for rapid network growth by getting users to follow 5+ people immediately and consume content within seconds.
							<strong> Notion embraces productive setup friction</strong>, asking about use cases and interests to deliver personalized templates that get users building in their workspace as quickly as possible.
							<strong> Venmo manages unavoidable regulatory friction</strong> by breaking identity verification into clear stages while using playful design to maintain a casual, social tone despite asking for sensitive financial information.
						</p>
						<p>
							The fundamental tension: balancing <em>speed to value</em> versus <em>necessary setup</em>.
							Instagram assumes users want immediate content consumption and defers all customization.
							Notion assumes users need structured workspace setup to unlock long-term productivity value.
							Venmo assumes users will tolerate extensive verification because they need what only Venmo provides: widespread, social peer-to-peer payments.
							Each reflects its business model: engagement time, retention through investment, and transaction trust.
						</p>
					</div>
				</div>

				{/* Dimension Accordion View */}
				<DimensionAccordion
					dimensions={dimensions}
					apps={apps}
					analysisContent={analysisContent}
					defaultValue="first-moments"
				/>
			</div>

			<Footer />
		</div>
	);
}
