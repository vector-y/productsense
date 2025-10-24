/**
 * Example usage of ShipProductsAccordion component
 * This file demonstrates how to use the accordion with onboarding and search/browsing experiences
 */

import Image from 'next/image';
import { ShipProductsAccordion } from './ShipProductsAccordion';

export function ShipProductsExample() {
	// Example data structure for onboarding experiences
	const accordionItems = [
		{
			id: 'venmo',
			icon: (
				<Image
					src="/venmo.png"
					alt="Venmo logo"
					width={152}
					height={152}
					sizes="128px"
					className="w-6 h-6 object-contain"
					quality={100}
				/>
			),
			title: 'Venmo',
			description: "Streamline your payment onboarding with intuitive social payment features. Connect with friends, split bills, and send money seamlessly from day one.",
			image: {
				src: '/Onboarding/Venmo/Venmo (iOS).png',
				alt: 'Venmo onboarding experience',
				width: 2340,
				height: 5064,
				sizes: 'calc(100vw - 24px), (min-width: 560px) 736px, (min-width: 960px) 720px, (min-width: 1920px) 908px'
			}
		},
		{
			id: 'instagram',
			icon: (
				<Image
					src="/instagram.png"
					alt="Instagram logo"
					width={304}
					height={304}
					sizes="128px"
					className="w-6 h-6 object-contain"
					quality={100}
				/>
			),
			title: 'Instagram',
			description: 'Create engaging onboarding flows that help users discover, share, and connect. Build your community with personalized recommendations and an intuitive profile setup.',
			image: {
				src: '/Onboarding/Instagram/Instagram (iOS).png',
				alt: 'Instagram onboarding experience',
				width: 2358,
				height: 5112,
				sizes: 'calc(100vw - 24px), (min-width: 560px) 736px, (min-width: 960px) 720px, (min-width: 1920px) 908px'
			}
		},
		{
			id: 'notion',
			icon: (
				<Image
					src="/notion.png"
					alt="Notion logo"
					width={304}
					height={304}
					sizes="128px"
					className="w-6 h-6 object-contain"
					quality={100}
				/>
			),
			title: 'Notion',
			description: 'Guide users through a powerful workspace setup with templates, collaborative features, and organizational tools. Make productivity accessible from the first login.',
			image: {
				src: '/Onboarding/Notion/Notion (iOS).png',
				alt: 'Notion onboarding experience',
				width: 2358,
				height: 5112,
				sizes: 'calc(100vw - 24px), (min-width: 560px) 736px, (min-width: 960px) 720px, (min-width: 1920px) 908px'
			}
		}
	];

	return (
		<ShipProductsAccordion
			heading="Onboarding Experiences"
			description="Explore how leading apps create seamless first-time user experiences that convert and engage from day one."
			ctaText="Explore Onboarding"
			ctaLink="/onboarding"
			items={accordionItems}
			defaultValue="venmo" // First item expanded by default
		/>
	);
}

export function SearchBrowsingExample() {
	// Example data structure for search & browsing experiences
	const accordionItems = [
		{
			id: 'netflix',
			icon: (
				<Image
					src="/netflix.png"
					alt="Netflix logo"
					width={152}
					height={152}
					sizes="128px"
					className="w-6 h-6 object-contain"
					quality={100}
				/>
			),
			title: 'Netflix',
			description: 'Discover how Netflix creates personalized browsing experiences with algorithmic recommendations, intuitive categories, and seamless content discovery that keeps users engaged.',
			image: {
				src: '/Search/Netflix/Netflix (iOS).png',
				alt: 'Netflix search and browsing experience',
				width: 2358,
				height: 5112,
				sizes: 'calc(100vw - 24px), (min-width: 560px) 736px, (min-width: 960px) 720px, (min-width: 1920px) 908px'
			}
		},
		{
			id: 'youtube',
			icon: (
				<Image
					src="/youtube.png"
					alt="YouTube logo"
					width={152}
					height={152}
					sizes="128px"
					className="w-6 h-6 object-contain"
					quality={100}
				/>
			),
			title: 'YouTube',
			description: 'Explore YouTube\'s powerful search capabilities combined with personalized recommendations, trending content, and an endless feed that adapts to user preferences.',
			image: {
				src: '/Search/YouTube/YouTube (iOS).png',
				alt: 'YouTube search and browsing experience',
				width: 2358,
				height: 5112,
				sizes: 'calc(100vw - 24px), (min-width: 560px) 736px, (min-width: 960px) 720px, (min-width: 1920px) 908px'
			}
		},
		{
			id: 'airbnb',
			icon: (
				<Image
					src="/airbnb.png"
					alt="Airbnb logo"
					width={152}
					height={152}
					sizes="128px"
					className="w-6 h-6 object-contain"
					quality={100}
				/>
			),
			title: 'Airbnb',
			description: 'Experience Airbnb\'s location-based search with rich filters, map integration, and detailed property browsing that helps users find their perfect stay.',
			image: {
				src: '/Search/Airbnb/Airbnb (iOS).png',
				alt: 'Airbnb search and browsing experience',
				width: 2360,
				height: 5112,
				sizes: 'calc(100vw - 24px), (min-width: 560px) 736px, (min-width: 960px) 720px, (min-width: 1920px) 908px'
			}
		}
	];

	return (
		<ShipProductsAccordion
			heading="Search & Browsing Experiences"
			description="Discover how top platforms help users find and explore content through intuitive search and personalized browsing."
			ctaText="Explore Search"
			ctaLink="/search"
			items={accordionItems}
			defaultValue="netflix" // First item expanded by default
		/>
	);
}
