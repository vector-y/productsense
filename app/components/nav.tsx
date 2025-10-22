"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

// Navigation items configuration
const navItems = {
	"/onboarding": { name: "Onboarding" },
	"/search": { name: "Search/Browse" },
};

// Spring animation configuration for smooth motion
const SPRING = {
	type: "spring",
	damping: 10,
	mass: 0.75,
	stiffness: 100,
};

const NAVBAR_SPRING = { ...SPRING };

/**
 * Navbar component with auto-hide/show on scroll behavior
 * Features frosted glass effect and smooth animations
 */
export function Navbar() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [windowWidth, setWindowWidth] = useState(1024);
	const pathname = usePathname();

	// Control navbar visibility based on scroll direction
	useEffect(() => {
		const controlNavbar = () => {
			const currentScrollY = window.scrollY;
			const difference = Math.abs(currentScrollY - lastScrollY);

			// Prevent micro-movement glitches
			if (difference < 3) return;

			// Always show when near the top
			if (currentScrollY < 10) {
				setIsVisible(true);
			}
			// Hide when scrolling down past threshold
			else if (currentScrollY > lastScrollY && currentScrollY > 80 && difference > 5) {
				setIsVisible(false);
			}
			// Show when scrolling up with intent
			else if (currentScrollY < lastScrollY && difference > 8) {
				setIsVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		// Use requestAnimationFrame to prevent glitches but keep responsiveness
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					controlNavbar();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	// Track window width for responsive design
	useEffect(() => {
		// Set initial window width on client
		setWindowWidth(window.innerWidth);

		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<nav className="sticky top-0 z-40 w-full mb-4">
			<div className="pt-7 pb-5">
				<div className="max-w-5xl w-full mx-auto px-3 sm:px-8 lg:px-16">
					<div className="flex justify-center">
						<motion.div
							initial={{
								opacity: 0,
								y: -60,
								width: windowWidth < 640 ? "100%" : windowWidth < 1024 ? 420 : "65%"
							}}
							animate={{
								opacity: isVisible ? 1 : 0,
								y: isVisible ? 0 : -100,
								width: windowWidth < 640 ? "100%" : windowWidth < 1024 ? 420 : "65%"
							}}
							transition={{
								opacity: NAVBAR_SPRING,
								y: NAVBAR_SPRING,
								width: {
									type: "spring",
									stiffness: 700,
									damping: 50,
									mass: 0.4,
									restDelta: 0.001,
									restSpeed: 0.001
								}
							}}
							className="flex flex-row items-center justify-between min-w-fit px-4 sm:px-5 py-3 sm:py-3 rounded-2xl gap-4 sm:gap-8 lg:gap-12 frosted-glass overflow-hidden"
							aria-hidden={!isVisible}
							style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
						>
							{/* Brand logo/text */}
							<Link href="/" className="flex items-center focus-ring rounded-lg transition-transform hover:scale-98">
								<span className="text-[#1B1B1B] font-bold text-base sm:text-lg font-serif select-none">
									product sense
								</span>
							</Link>

							{/* Navigation links */}
							<div className="flex flex-row gap-2 sm:gap-4">
								{Object.entries(navItems).map(([path, { name }]) => {
									const isActive = pathname === path;
									return (
										<Link
											key={path}
											href={path}
											className={`hover:bg-black/5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-xs whitespace-nowrap hover:scale-98 active:scale-95 flex items-center justify-center select-none transition-all ${
												isActive
													? 'text-[#1B1B1B] font-bold'
													: 'text-[#8C877D] font-medium'
											}`}
										>
											{name}
										</Link>
									);
								})}
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</nav>
	);
}
