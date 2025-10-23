import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { ShipProductsExample, SearchBrowsingExample } from './components/ShipProductsAccordion.example';

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Hero />

			{/* Onboarding Experiences Accordion */}
			<ShipProductsExample />

			{/* Search & Browsing Experiences Accordion */}
			<SearchBrowsingExample />

			<Footer />
		</div>
	);
}
