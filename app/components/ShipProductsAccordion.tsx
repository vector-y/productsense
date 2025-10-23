'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as Accordion from '@radix-ui/react-accordion';
import { motion, AnimatePresence } from 'framer-motion';

// TypeScript interface for accordion item data
interface AccordionItemData {
	id: string;
	icon: React.ReactNode;
	title: string;
	description: string;
	ctaText: string;
	ctaLink: string;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
		srcSet?: string;
		sizes?: string;
	};
}

// TypeScript interface for component props
interface ShipProductsAccordionProps {
	heading?: string;
	items: AccordionItemData[];
	defaultValue?: string;
}

/**
 * Interactive accordion component for showcasing product features
 * Uses Radix UI for accessibility and Next.js Image for optimization
 * Desktop: Split layout with persistent image on right that updates on accordion change
 * Mobile/Tablet: Image displays within expanded accordion content
 */
export function ShipProductsAccordion({
	heading = "Ship products, any way you want",
	items,
	defaultValue
}: ShipProductsAccordionProps) {
	// Track active accordion item for image display
	const [activeValue, setActiveValue] = useState<string>(
		defaultValue || items[0]?.id
	);

	// Track hovered item for icon animations
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	// Derive active item for persistent image display
	const activeItem = items.find(item => item.id === activeValue) || items[0];

	return (
		<section className="w-full pt-16 lg:pt-16 pb-24 lg:pb-32">
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				{/* Main heading */}
				<div className="mb-6">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
						{heading}
					</h2>
				</div>

				{/* Split Layout Container */}
				<div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">

					{/* LEFT COLUMN: Accordion */}
					<div className="lg:pr-4">
						<Accordion.Root
							type="single"
							collapsible
							value={activeValue}
							onValueChange={(value) => {
								// Keep last active image visible even when accordion fully collapsed
								if (value) setActiveValue(value);
							}}
							className="space-y-4"
						>
							{items.map((item, index) => {
								// Determine if icon should be visible (hovered or active)
								const isVisible = hoveredItem === item.id || activeValue === item.id;
								const isHovered = hoveredItem === item.id;

								return (
									<Accordion.Item
										key={item.id}
										value={item.id}
										className="border-b border-neutral-200 pb-4"
									>
										{/* Accordion Trigger (Button) */}
										<Accordion.Header>
											<Accordion.Trigger
												className="group flex w-full items-center gap-3 text-left transition-all overflow-hidden relative"
												onMouseEnter={() => setHoveredItem(item.id)}
												onMouseLeave={() => setHoveredItem(null)}
											>
												{/* Icon - spins in place, persists when active */}
												<motion.div
													className="flex-shrink-0 w-6 h-6 text-neutral-900"
													animate={isVisible ? {
														scale: 1,
														rotate: (isHovered && activeValue !== item.id) ? (index % 2 === 0 ? 360 : -360) : 0
													} : {
														scale: 0,
														rotate: 0
													}}
													transition={{
														duration: (isHovered && activeValue !== item.id) ? 0.6 : 0,
														ease: [0.22, 1, 0.36, 1]
													}}
												>
													{item.icon}
												</motion.div>

												{/* Title - shifts right when icon is visible, rises when active */}
												<motion.span
													className="text-xl md:text-2xl font-semibold text-neutral-900 flex-1"
													animate={
														activeValue === item.id
															? { x: 0, y: -4 }
															: isVisible
															? { x: 0, y: 0 }
															: { x: -32, y: 0 }
													}
													transition={{
														duration: 0.4,
														ease: [0.22, 1, 0.36, 1]
													}}
												>
													{item.title}
												</motion.span>
											</Accordion.Trigger>
										</Accordion.Header>

									{/* Accordion Content */}
									<Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
										<motion.div
											className="pt-6 pl-9 space-y-6"
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.4,
												ease: [0.22, 1, 0.36, 1]
											}}
										>
											{/* Description */}
											<p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
												{item.description}
											</p>

											{/* CTA Button */}
											<a
												href={item.ctaLink}
												className="group inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg transition-all"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													fill="none"
													viewBox="0 0 24 24"
													aria-hidden="true"
													className="flex-shrink-0 transition-transform group-hover:translate-x-1"
												>
													<path
														fill="currentColor"
														fillRule="evenodd"
														d="M12.522 4.25 20 12l-7.478 7.75-.733-.709 6.302-6.531H4v-1.02h14.09L11.79 4.959z"
														clipRule="evenodd"
													/>
												</svg>
												<span>{item.ctaText}</span>
											</a>

											{/* Image: Mobile/Tablet Only */}
											<div className="lg:hidden rounded-lg overflow-hidden bg-neutral-100">
												<Image
													src={item.image.src}
													alt={item.image.alt}
													width={item.image.width}
													height={item.image.height}
													sizes="(max-width: 1023px) 100vw, 50vw"
													className="w-full h-auto"
													loading={items.indexOf(item) === 0 ? "eager" : "lazy"}
												/>
											</div>
										</motion.div>
									</Accordion.Content>
								</Accordion.Item>
							);
							})}
						</Accordion.Root>
					</div>

					{/* RIGHT COLUMN: Persistent Image (Desktop Only) */}
					<div className="hidden lg:flex lg:flex-col">
						<div className="lg:sticky lg:top-8 lg:h-fit">
							{/* Screen Reader Announcement */}
							<div className="sr-only" role="status" aria-live="polite">
							Now showing: {activeItem.image.alt}
							</div>

							{/* Image Container with Animation */}
							<div className="rounded-lg overflow-hidden bg-neutral-100 max-w-sm max-h-[700px] mx-auto">
								<AnimatePresence mode="wait">
									<motion.div
										key={activeItem.id}
										initial={{ opacity: 0, scale: 0.98 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.98 }}
										transition={{
											duration: 0.3,
											ease: [0.22, 1, 0.36, 1]
										}}
										className="w-full h-full"
									>
										<Image
											src={activeItem.image.src}
											alt={activeItem.image.alt}
											width={908}
											height={726}
											sizes="(min-width: 1024px) 50vw, 100vw"
											className="w-full h-full object-contain object-top"
											priority
										/>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// Icon components for reuse
export const FigmaIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		aria-hidden="true"
	>
		<g clipPath="url(#figma-icon-a)">
			<path
				fill="currentColor"
				d="M15.2 20.8v-1.075l.76.76a3.2 3.2 0 1 0 4.525-4.525l-.76-.76H20.8a3.2 3.2 0 0 0 0-6.4h-1.075l.76-.76a3.2 3.2 0 1 0-4.525-4.525l-.76.76V3.2a3.2 3.2 0 0 0-6.4 0v1.075l-.76-.76A3.2 3.2 0 1 0 3.515 8.04l.76.76H3.2a3.2 3.2 0 0 0 0 6.4h1.075l-.76.76a3.2 3.2 0 0 0 4.525 4.525l.76-.76V20.8a3.2 3.2 0 0 0 6.4 0"
			/>
		</g>
		<defs>
			<clipPath id="figma-icon-a">
				<path fill="#fff" d="M0 24h24V0H0z"/>
			</clipPath>
		</defs>
	</svg>
);

export const SitesIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		aria-hidden="true"
	>
		<path
			fill="currentColor"
			d="M22.4 24H1.6V8.8H6A.4.4 0 0 0 6 8h-.4a4 4 0 1 1 0-8h12.8a4 4 0 0 1 0 8H18a.4.4 0 0 0 0 .8h4.4z"
		/>
	</svg>
);

export const MakeIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		aria-hidden="true"
	>
		<g clipPath="url(#make-icon-a)">
			<path
				fill="currentColor"
				d="M11.937 20.21 9.749 24H4.44a4.44 4.44 0 0 1-2.312-8.231A4.4 4.4 0 0 1 0 12c0-1.599.853-2.998 2.128-3.769A4.44 4.44 0 0 1 4.44 0h5.164l2.333 4.04L14.27 0h5.29a4.44 4.44 0 0 1 2.312 8.231A4.4 4.4 0 0 1 24 12a4.4 4.4 0 0 1-2.128 3.769A4.44 4.44 0 0 1 19.56 24h-5.435z"
			/>
		</g>
		<defs>
			<clipPath id="make-icon-a">
				<path fill="#fff" d="M0 24h24V0H0z"/>
			</clipPath>
		</defs>
	</svg>
);
