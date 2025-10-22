// Footer component
export function Footer() {
	return (
		<footer className="border-t border-neutral-200 py-12 mt-24">
			<div className="max-w-5xl mx-auto px-6 lg:px-12">
				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
					<div className="space-y-2">
						<div className="tracking-tight text-neutral-900">
							Building Your Product Sense
						</div>
						<p className="text-neutral-500">
							A framework for understanding exceptional digital experiences
						</p>
					</div>

					<div className="flex items-center gap-8 text-neutral-600">
						<button className="hover:text-neutral-900 transition-colors">
							About
						</button>
						<button className="hover:text-neutral-900 transition-colors">
							Resources
						</button>
						<button className="hover:text-neutral-900 transition-colors">
							Contact
						</button>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-neutral-200 text-neutral-400">
					© 2025 Product Sense. Crafted with attention to detail.
				</div>
			</div>
		</footer>
	);
}
