import { Hero } from './components/Hero';
import { AnalysisSection } from './components/AnalysisSection';
import { Footer } from './components/Footer';

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Hero />

			{/* Onboarding Analysis */}
			<AnalysisSection
				id="onboarding"
				title="Onboarding Experiences"
				subtitle="Analyzing how products introduce and guide new users through their first interactions"
				logos={[
					{ name: 'Venmo', src: '/venmo.png' },
					{ name: 'Instagram', src: '/instagram.png' },
					{ name: 'Notion', src: '/notion.png' }
				]}
				insights={[
					{
						title: "Progressive Disclosure",
						description: "Effective onboarding reveals features incrementally, preventing cognitive overload while building user confidence through early wins.",
						annotation: "Key Insight"
					},
					{
						title: "Contextual Guidance",
						description: "The best experiences provide help at the moment of need, embedding educational content within the natural user flow rather than separate tutorials.",
						annotation: "Best Practice"
					},
					{
						title: "Value Before Friction",
						description: "Leading products demonstrate core value before asking for user commitment, flipping the traditional sign-up first model.",
						annotation: "Pattern"
					}
				]}
			/>

			{/* Search & Browsing Analysis */}
			<AnalysisSection
				id="search-browsing"
				title="Search & Browsing Experiences"
				subtitle="Understanding how users discover and navigate content in modern digital products"
				logos={[
					{ name: 'Netflix', src: '/netflix.png' },
					{ name: 'YouTube', src: '/youtube.png' },
					{ name: 'Airbnb', src: '/airbnb.png' }
				]}
				insights={[
					{
						title: "Hybrid Discovery",
						description: "Modern interfaces blend structured navigation with intelligent search, recognizing that users don't always know what they're looking for.",
						annotation: "Trend"
					},
					{
						title: "Visual Scanning Patterns",
						description: "Successful designs optimize for F-pattern and Z-pattern reading behaviors, placing critical information where eyes naturally land.",
						annotation: "Research Finding"
					},
					{
						title: "Smart Defaults",
						description: "Great search experiences anticipate user intent with contextual suggestions, recent history, and popular queries before any input.",
						annotation: "UX Pattern"
					}
				]}
			/>

			<Footer />
		</div>
	);
}
