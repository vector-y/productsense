'use client';

import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { App, Dimension, AnalysisContent, Screenshot } from '../onboarding/types';
import { ScreenshotLightbox } from './ScreenshotLightbox';

interface DimensionAccordionProps {
	dimensions: Dimension[];
	apps: App[];
	analysisContent: AnalysisContent[];
	defaultValue?: string;
}

/**
 * Accordion component for displaying onboarding analysis by dimension
 * Each dimension has tabs to switch between apps for focused reading
 */
export function DimensionAccordion({
	dimensions,
	apps,
	analysisContent,
	defaultValue
}: DimensionAccordionProps) {
	// Tab state per dimension (dimensionId -> appId)
	const [selectedTabs, setSelectedTabs] = useState<Record<string, string>>(
		dimensions.reduce((acc, dim) => ({ ...acc, [dim.id]: apps[0]?.id || '' }), {})
	);

	// Lightbox state
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxScreenshots, setLightboxScreenshots] = useState<Screenshot[]>([]);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	// Helper to get analysis content for a specific app and dimension
	const getContent = (appId: string, dimensionId: string) => {
		return analysisContent.find(
			(content) => content.appId === appId && content.dimensionId === dimensionId
		);
	};

	// Open lightbox with screenshots
	const handleScreenshotClick = (index: number, screenshots: Screenshot[]) => {
		setLightboxScreenshots(screenshots);
		setLightboxIndex(index);
		setLightboxOpen(true);
	};

	return (
		<>
			<Accordion.Root
				type="single"
				collapsible
				defaultValue={defaultValue}
				className="space-y-6"
			>
				{dimensions.map((dimension) => (
					<Accordion.Item
						key={dimension.id}
						value={dimension.id}
						className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden"
					>
						{/* Accordion Trigger */}
						<Accordion.Header>
							<Accordion.Trigger className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 hover:bg-neutral-50 transition-colors group">
								<div className="flex items-center justify-between w-full text-left gap-2 sm:gap-4">
									<div className="flex-1 min-w-0">
										{/* Badge + Title - Stack on mobile, inline on desktop */}
										<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
											{/* Numbered Badge - Smaller on mobile */}
											<span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-900 text-white text-sm font-semibold flex-shrink-0">
												{dimension.number}
											</span>
											{/* Title - Smaller on mobile, full width */}
											<h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
												{dimension.title}
											</h2>
										</div>
									</div>
									{/* Chevron Icon - Smaller on mobile */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="none"
										viewBox="0 0 24 24"
										className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-600 transition-transform group-data-[state=open]:rotate-180 flex-shrink-0 ml-2 sm:ml-4"
										aria-hidden="true"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</Accordion.Trigger>
						</Accordion.Header>

						{/* Accordion Content */}
						<Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
							<motion.div
								className="border-t border-neutral-200"
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
							>
								{/* Tabs for App Selection */}
								<Tabs.Root
									value={selectedTabs[dimension.id]}
									onValueChange={(value) =>
										setSelectedTabs((prev) => ({ ...prev, [dimension.id]: value }))
									}
								>
									{/* Tab List */}
									<Tabs.List className="flex border-b border-neutral-200 px-8 pt-6">
										{apps.map((app) => (
											<Tabs.Trigger
												key={app.id}
												value={app.id}
												className="flex items-center gap-2 px-6 py-3 border-b-2 -mb-px transition-all data-[state=active]:border-neutral-900 data-[state=inactive]:border-transparent data-[state=inactive]:text-neutral-600 data-[state=active]:text-neutral-900 hover:text-neutral-900 focus:outline-none"
											>
												<div className="w-5 h-5 flex-shrink-0">
													<Image
														src={app.icon}
														alt=""
														width={60}
														height={60}
														className="w-5 h-5 object-contain"
													/>
												</div>
												<span className="font-medium text-base">{app.name}</span>
											</Tabs.Trigger>
										))}
									</Tabs.List>

									{/* Tab Content */}
									{apps.map((app) => {
										const content = getContent(app.id, dimension.id);
										if (!content) return null;

										return (
											<Tabs.Content
												key={app.id}
												value={app.id}
												className="focus:outline-none"
											>
												<div className="px-8 lg:px-12 py-8 lg:py-12">
													{/* App Header */}
													<div className="flex items-center gap-4 mb-8">
														<div className="w-14 h-14 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center shadow-sm flex-shrink-0">
															<Image
																src={app.icon}
																alt=""
																width={96}
																height={96}
																className="w-8 h-8 object-contain"
															/>
														</div>
														<h3 className="text-2xl font-bold text-neutral-900">
															{app.name}
														</h3>
													</div>

													{/* Key Insight Badge */}
													{content.keyInsight && (
														<div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-full mb-6">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="none"
																viewBox="0 0 24 24"
																aria-hidden="true"
															>
																<path
																	fill="currentColor"
																	d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
																/>
															</svg>
															<span>{content.keyInsight}</span>
														</div>
													)}

													{/* Analysis Content */}
													<div className="prose prose-lg prose-neutral max-w-none mb-8">
														{content.analysis.split('\n\n').map((paragraph, index) => (
															<p
																key={index}
																className="text-neutral-700 leading-relaxed mb-6 last:mb-0 text-lg"
															>
																{paragraph}
															</p>
														))}
													</div>

													{/* Screenshots */}
													{content.screenshots.length > 0 && (
														<div className="pt-8 border-t border-neutral-200">
															<h4 className="text-base font-semibold text-neutral-900 mb-6">
																Evidence
															</h4>
															<div className="flex flex-col lg:flex-row gap-8">
															{/* Left: Screenshot Grid */}
															<div className={content.screenshots.some(s => s.annotation) ? "w-full lg:w-3/5" : "w-full"}>
																<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
																{content.screenshots.map((screenshot, idx) => (
																	<button
																		key={idx}
																		onClick={() =>
																			handleScreenshotClick(idx, content.screenshots)
																		}
																		className="relative aspect-[9/16] rounded-lg overflow-hidden border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all group focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
																		aria-label={`View screenshot ${idx + 1}`}
																	>
																		<Image
																			src={screenshot.thumbnail}
																			alt={screenshot.alt}
																			fill
																			className="object-cover object-top"
																			sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
																		/>
																		{/* Screenshot number badge */}
																		<div className="absolute top-2 left-2 w-7 h-7 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-semibold shadow-md">
																			{idx + 1}
																		</div>
																		<div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors" />
																		{/* Magnifying glass icon */}
																		<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
																			<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					width="24"
																					height="24"
																					fill="none"
																					viewBox="0 0 24 24"
																					aria-hidden="true"
																				>
																					<path
																						stroke="currentColor"
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						strokeWidth="2"
																						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
																					/>
																				</svg>
																			</div>
																		</div>
																	</button>
																))}
																</div>
															</div>

															{/* Right: Annotations */}
															{content.screenshots.some(s => s.annotation) && (
																<div className="lg:w-2/5 flex-shrink-0">
																	<div className="space-y-4">
																		{content.screenshots.map((screenshot, idx) =>
																			screenshot.annotation ? (
																				<div
																					key={idx}
																					className="flex gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-200"
																				>
																					<div className="flex-shrink-0 w-7 h-7 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
																						{idx + 1}
																					</div>
																					<p className="text-sm text-neutral-700 leading-relaxed">
																						{screenshot.annotation}
																					</p>
																				</div>
																			) : null
																		)}
																	</div>
																</div>
															)}
														</div>
													</div>
												)}
												</div>
											</Tabs.Content>
										);
									})}
								</Tabs.Root>
							</motion.div>
						</Accordion.Content>
					</Accordion.Item>
				))}
			</Accordion.Root>

			{/* Screenshot Lightbox */}
			<ScreenshotLightbox
				screenshots={lightboxScreenshots}
				currentIndex={lightboxIndex}
				isOpen={lightboxOpen}
				onClose={() => setLightboxOpen(false)}
				onNext={() => setLightboxIndex((prev) => prev + 1)}
				onPrevious={() => setLightboxIndex((prev) => prev - 1)}
			/>
		</>
	);
}
