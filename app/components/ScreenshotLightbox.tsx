'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Screenshot } from '../onboarding/types';
import { motion, AnimatePresence } from 'framer-motion';

interface ScreenshotLightboxProps {
	screenshots: Screenshot[];
	currentIndex: number;
	isOpen: boolean;
	onClose: () => void;
	onNext: () => void;
	onPrevious: () => void;
}

/**
 * Modal lightbox for viewing screenshots in full size
 * Supports keyboard navigation (ESC, arrows) and click outside to close
 */
export function ScreenshotLightbox({
	screenshots,
	currentIndex,
	isOpen,
	onClose,
	onNext,
	onPrevious
}: ScreenshotLightboxProps) {
	// Keyboard navigation
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			} else if (e.key === 'ArrowRight' && currentIndex < screenshots.length - 1) {
				onNext();
			} else if (e.key === 'ArrowLeft' && currentIndex > 0) {
				onPrevious();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, currentIndex, screenshots.length, onClose, onNext, onPrevious]);

	// Prevent body scroll when lightbox is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	if (!isOpen || !screenshots[currentIndex]) return null;

	const currentScreenshot = screenshots[currentIndex];

	return (
		<AnimatePresence>
			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center"
					role="dialog"
					aria-modal="true"
					aria-labelledby="lightbox-title"
				>
					{/* Backdrop */}
					<motion.div
						className="absolute inset-0 bg-neutral-900/95"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={onClose}
						aria-hidden="true"
					/>

					{/* Content Container */}
					<div
						className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
						onClick={onClose}
					>
						{/* Close Button */}
						<button
							onClick={(e) => {
								e.stopPropagation();
								onClose();
							}}
							className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
							aria-label="Close lightbox"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								viewBox="0 0 24 24"
								className="text-white"
								aria-hidden="true"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						{/* Image Container */}
						<motion.div
							key={currentIndex}
							className="relative max-w-4xl max-h-full"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.2 }}
							onClick={(e) => e.stopPropagation()}
						>
							<div className="relative rounded-lg overflow-hidden shadow-2xl bg-white">
								<Image
									src={currentScreenshot.src}
									alt={currentScreenshot.alt}
									width={800}
									height={1600}
									className="max-h-[80vh] w-auto object-contain"
									priority
								/>
							</div>

							{/* Caption */}
							<p
								id="lightbox-title"
								className="mt-4 text-center text-white text-sm"
							>
								{currentScreenshot.alt}
							</p>

							{/* Navigation Counter */}
							{screenshots.length > 1 && (
								<div className="mt-2 text-center text-white/70 text-sm">
									{currentIndex + 1} / {screenshots.length}
								</div>
							)}
						</motion.div>

						{/* Previous Button */}
						{screenshots.length > 1 && currentIndex > 0 && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									onPrevious();
								}}
								className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
								aria-label="Previous screenshot"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
									className="text-white"
									aria-hidden="true"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 18l-6-6 6-6"
									/>
								</svg>
							</button>
						)}

						{/* Next Button */}
						{screenshots.length > 1 && currentIndex < screenshots.length - 1 && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									onNext();
								}}
								className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
								aria-label="Next screenshot"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
									className="text-white"
									aria-hidden="true"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 18l6-6-6-6"
									/>
								</svg>
							</button>
						)}
					</div>
				</div>
			)}
		</AnimatePresence>
	);
}
