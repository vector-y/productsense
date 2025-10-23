import Link from 'next/link';

// Search & browsing analysis page
export default function SearchPage() {
	return (
		<div className="min-h-screen bg-background">
			<div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
				<div className="space-y-8">
					{/* Back link */}
					<Link
						href="/"
						className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
					>
						← Back to Home
					</Link>

					{/* Page header */}
					<div className="space-y-4">
						<h1 className="tracking-tight text-neutral-900">
							Search & Browsing Analysis
						</h1>
						<p className="text-neutral-600 text-lg max-w-3xl">
							Understanding how users discover and navigate content in modern digital products.
							Exploring the design patterns that make search and browsing experiences seamless.
						</p>
					</div>

					{/* Placeholder content */}
					<div className="mt-12 p-8 bg-neutral-50 rounded-lg border border-neutral-200">
						<h2 className="text-neutral-900 mb-4">Coming Soon</h2>
						<p className="text-neutral-600">
							Deep dive analysis of search and browsing experiences from Netflix, YouTube, and Airbnb.
							Stay tuned for detailed breakdowns of discovery flows, filtering patterns, and personalization strategies.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
