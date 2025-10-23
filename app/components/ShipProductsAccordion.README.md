# ShipProductsAccordion Component

Interactive accordion component built with Radix UI and Next.js, converted from Figma's HTML structure.

## Features

- ✅ Fully typed TypeScript interfaces
- ✅ Accessible via Radix UI primitives
- ✅ Smooth expand/collapse animations
- ✅ Responsive images with Next.js Image optimization
- ✅ Configurable via props for reusability
- ✅ Mobile-responsive design

## Usage

### Basic Example

```tsx
import { ShipProductsAccordion, FigmaIcon } from './components/ShipProductsAccordion';

const items = [
	{
		id: 'item-1',
		icon: <FigmaIcon />,
		title: 'Your feature title',
		description: 'Description of your feature',
		ctaText: 'Learn More',
		ctaLink: '/learn-more',
		image: {
			src: '/path/to/image.png',
			alt: 'Image description',
			width: 908,
			height: 726
		}
	}
];

<ShipProductsAccordion items={items} />
```

### Full Example with Figma Data

See `ShipProductsAccordion.example.tsx` for complete example with all Figma product data.

## Props

### ShipProductsAccordionProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `"Ship products, any way you want"` | Main section heading |
| `items` | `AccordionItemData[]` | Required | Array of accordion items |
| `defaultValue` | `string` | First item ID | ID of initially expanded item |

### AccordionItemData

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier for the accordion item |
| `icon` | `React.ReactNode` | Icon component to display |
| `title` | `string` | Accordion item title |
| `description` | `string` | Content description text |
| `ctaText` | `string` | Call-to-action button text |
| `ctaLink` | `string` | URL for the CTA button |
| `image` | `ImageData` | Image configuration object |

### ImageData

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `src` | `string` | ✅ | Image source URL |
| `alt` | `string` | ✅ | Alt text for accessibility |
| `width` | `number` | ✅ | Image width |
| `height` | `number` | ✅ | Image height |
| `sizes` | `string` | ❌ | Responsive sizes attribute |
| `srcSet` | `string` | ❌ | Responsive srcset attribute |

## Included Icon Components

Three pre-built icon components are exported:
- `FigmaIcon` - Figma logo
- `SitesIcon` - Figma Sites icon
- `MakeIcon` - Figma Make icon

You can also pass any custom React node as an icon.

## Animations

Accordion animations are defined in `app/globals.css`:
- `accordion-down` - Smooth expand animation (300ms)
- `accordion-up` - Smooth collapse animation (200ms)

## Accessibility

Built on Radix UI Accordion primitive, which provides:
- Keyboard navigation (Arrow keys, Home, End)
- Screen reader support
- ARIA attributes automatically managed
- Focus management

## Integration

To use in your page:

```tsx
import { ShipProductsExample } from './components/ShipProductsAccordion.example';

export default function Page() {
	return (
		<main>
			<ShipProductsExample />
		</main>
	);
}
```
