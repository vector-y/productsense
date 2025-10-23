'use client';

import Link from 'next/link';

// Navigation component with route navigation
export function Navigation() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neutral-200">
			<div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="tracking-tight transition-opacity hover:opacity-60 p-0"
					>
						Product Sense
					</Link>

					<div className="flex items-center gap-8">
						<Link
							href="/onboarding"
							className="text-neutral-600 hover:text-neutral-900 transition-colors"
						>
							Onboarding
						</Link>
						<Link
							href="/search"
							className="text-neutral-600 hover:text-neutral-900 transition-colors"
						>
							Search
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
