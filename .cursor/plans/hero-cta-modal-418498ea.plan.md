<!-- 418498ea-31a4-49ac-843a-0f7bdec98ae6 35e218dd-5d87-4361-9517-f0cb75df89b6 -->
# Implement Hero CTA Button with Modal

## Overview

Add a visually consistent "Get Started" CTA button (white text, black background) to the Hero section that triggers a modal. The modal will present two navigation options: "Onboarding" and "Search" buttons that link to dedicated analysis pages.

## Implementation Steps

### 1. Update Hero Component

**File:** `app/components/Hero.tsx`

Add a "Get Started" button below the existing paragraph text with:

- Black background (`bg-neutral-900`)
- White text (`text-white`)
- Consistent padding and rounded corners
- Hover effect (subtle opacity change)
- Click handler to open modal

### 2. Install Radix UI Dialog

**Package:** `@radix-ui/react-dialog`

Install Radix UI Dialog component to provide:

- Accessible modal/dialog behavior
- Focus management and keyboard interactions
- Built-in backdrop overlay
- State management and animations

### 3. Create CTA Modal Component

**File:** `app/components/CTAModal.tsx` (new file)

Build modal using Radix UI Dialog primitives:

- Use `Dialog.Root`, `Dialog.Trigger`, `Dialog.Portal`, `Dialog.Overlay`, `Dialog.Content`
- Trigger: "Get Started" button (black bg, white text, `px-6 py-3`)
- Modal content with heading "Choose Your Path"
- Two navigation buttons stacked vertically:
- "Onboarding" → `/onboarding`
- "Search" → `/search`
- Close button (X icon) using `Dialog.Close`
- Style overlay with semi-transparent backdrop blur
- Center content with white background, rounded corners

### 4. Create Analysis Pages

**Files:**

- `app/onboarding/page.tsx` (new file)
- `app/search/page.tsx` (new file)

Create placeholder pages with:

- Basic layout structure
- Page title and description
- Link back to home page
- Consistent styling with main site

### 5. Add Global Modal Styles

**File:** `app/globals.css`

Add CSS for:

- Modal fade-in animation
- Backdrop blur effect
- Focus trap styling
- Smooth transitions

## Key Design Decisions

- Button styling: `bg-neutral-900 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity`
- Modal uses backdrop blur for modern glassmorphic effect
- Buttons in modal match hero CTA style for consistency
- URLs: `/onboarding` and `/search` for clean routing
- Mobile-responsive: modal adapts to smaller screens

### To-dos

- [ ] Add 'Get Started' CTA button to Hero component with modal trigger
- [ ] Create reusable Modal component with backdrop and animations
- [ ] Create CTAModal component with Onboarding and Search buttons
- [ ] Create /onboarding and /search page routes with basic content
- [ ] Add modal animations and transitions to globals.css