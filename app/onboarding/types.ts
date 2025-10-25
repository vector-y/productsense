/**
 * Type definitions for onboarding analysis page
 */

export interface App {
	id: string;
	name: string;
	icon: string;
}

export interface Dimension {
	id: string;
	number: number;
	title: string;
	description: string;
}

export interface Screenshot {
	src: string;
	alt: string;
	thumbnail: string;
	annotation?: string; // Optional annotation text for each screenshot
	label?: string; // Optional label for the badge (e.g., "1 - Instagram")
}

export interface AnalysisContent {
	appId: string;
	dimensionId: string;
	analysis: string;
	keyInsight?: string;
	screenshots: Screenshot[];
}
