'use client';

// Navigation component with smooth scrolling functionality
export function Navigation() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200">
			<div className="max-w-5xl mx-auto px-6 lg:px-12 py-6">
				<div className="flex items-center justify-between">
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className="tracking-tight transition-opacity hover:opacity-60 p-0"
					>
						Product Sense
					</button>

					<div className="flex items-center gap-8">
						<button
							onClick={() => scrollToSection('onboarding')}
							className="text-neutral-600 hover:text-neutral-900 transition-colors"
						>
							Onboarding
						</button>
						<button
							onClick={() => scrollToSection('search-browsing')}
							className="text-neutral-600 hover:text-neutral-900 transition-colors"
						>
							Search & Browsing
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
