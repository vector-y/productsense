'use client';

import { useEffect, useState, type ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';

// Hero section component with CTA modal
export function Hero() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const renderLayout = (cta: ReactNode) => (
		<section className="pt-32 pb-24 lg:pt-48 lg:pb-32">
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<div className="space-y-8">
					<h1 className="tracking-tight text-neutral-900">
						Building Your<br />Product Sense
					</h1>

					<p className="text-neutral-600 max-w-2xl">
						A deep dive into the patterns and principles that make digital experiences intuitive,
						delightful, and effective. Exploring two critical areas where product sense makes
						the difference between good and exceptional.
					</p>

					{cta}
				</div>
			</div>
		</section>
	);

	if (!isMounted) {
		return renderLayout(
			<button type="button" className="bg-neutral-900 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
				Get Started
			</button>
		);
	}

	return renderLayout(
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button type="button" className="bg-neutral-900 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
					Get Started
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="modal-overlay" />
				<Dialog.Content className="modal-content">
					<Dialog.Close asChild>
						<button
							className="absolute top-6 left-6 w-11 h-11 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
							aria-label="Close dialog"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</Dialog.Close>

					<Dialog.Title className="text-2xl font-medium text-neutral-900 mt-12 mb-6">
						Choose Your Path
					</Dialog.Title>

					<div className="space-y-4">
						<Link
							href="/onboarding"
							className="block w-full bg-neutral-900 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
						>
							Onboarding Analysis
						</Link>

						<Link
							href="/search"
							className="block w-full bg-neutral-900 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
						>
							Search & Browsing Analysis
						</Link>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
