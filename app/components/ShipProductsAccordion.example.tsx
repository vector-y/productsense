/**
 * Example usage of ShipProductsAccordion component
 * This file demonstrates how to use the accordion with Figma's product data
 */

import { ShipProductsAccordion, FigmaIcon, SitesIcon, MakeIcon } from './ShipProductsAccordion';

export function ShipProductsExample() {
	// Example data structure matching the original HTML
	const accordionItems = [
		{
			id: 'figma-mcp',
			icon: <FigmaIcon />,
			title: 'Turn Figma context into code',
			description: "Our Figma MCP server lets you bring Figma context directly into your agentic coding tools.",
			ctaText: 'Explore Figma MCP',
			ctaLink: 'https://www.figma.com/dev-mode/',
			image: {
				src: 'https://cdn.sanity.io/images/599r6htc/regionalized/24e122cd8a5089bd145f3fd46a35554bae2780b4-1560x1248.png',
				alt: 'colab profile with design system updates and prompt',
				width: 908,
				height: 726,
				sizes: 'calc(100vw - 24px), (min-width: 560px) 736px, (min-width: 960px) 720px, (min-width: 1920px) 908px'
			}
		},
		{
			id: 'figma-sites',
			icon: <SitesIcon />,
			title: 'Publish custom websites—with or without code',
			description: 'Design responsive websites in Figma Sites, then tweak with code or AI until everything is just right.',
			ctaText: 'Explore Figma Sites',
			ctaLink: 'https://www.figma.com/sites/',
			image: {
				src: 'https://cdn.sanity.io/images/599r6htc/regionalized/969d0fb681b2dfa08c6028611ded150d6df5595e-1560x1248.png',
				alt: 'library of prototypes',
				width: 908,
				height: 726,
				sizes: 'calc(100vw - 24px), (min-width: 560px) 736px, (min-width: 960px) 720px, (min-width: 1920px) 908px'
			}
		},
		{
			id: 'figma-make',
			icon: <MakeIcon />,
			title: 'Ship products faster with AI',
			description: 'Drop a design file into Figma Make and chat with AI to quickly create a live, functional app.',
			ctaText: 'Explore Figma Make',
			ctaLink: 'https://www.figma.com/make/',
			image: {
				src: 'https://cdn.sanity.io/images/599r6htc/regionalized/d067ab6e66615f0d82b1878ccf20126024ff48f7-1560x1249.png',
				alt: 'slides preview with iphone',
				width: 908,
				height: 727,
				sizes: 'calc(100vw - 24px), (min-width: 560px) 736px, (min-width: 960px) 720px, (min-width: 1920px) 908px'
			}
		}
	];

	return (
		<ShipProductsAccordion
			heading="Ship products, any way you want"
			items={accordionItems}
			defaultValue="figma-mcp" // First item expanded by default
		/>
	);
}
