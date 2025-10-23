import { Hero } from './components/Hero';
import { AnalysisSection } from './components/AnalysisSection';
import { Footer } from './components/Footer';
import { ShipProductsExample } from './components/ShipProductsAccordion.example';

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
			/>

			{/* Ship Products Accordion */}
			<ShipProductsExample />

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
			/>

			<Footer />
		</div>
	);
}
