// Onboarding analysis page
export default function OnboardingPage() {
	return (
		<div className="min-h-screen bg-background">
			<div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
				<div className="space-y-8">
					{/* Page header */}
					<div className="space-y-4 pt-20">
						<h1 className="tracking-tight text-neutral-900">
							Onboarding Analysis
						</h1>
						<p className="text-neutral-600 text-lg max-w-3xl">
							Analyzing how products introduce and guide new users through their first interactions.
							Understanding the patterns that make onboarding experiences intuitive and effective.
						</p>
					</div>

					{/* Placeholder content */}
					<div className="mt-12 p-8 bg-neutral-50 rounded-lg border border-neutral-200">
						<h2 className="text-neutral-900 mb-4">Coming Soon</h2>
						<p className="text-neutral-600">
							Deep dive analysis of onboarding experiences from Venmo, Instagram, and Notion.
							Stay tuned for detailed breakdowns of user flows, design patterns, and product decisions.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
