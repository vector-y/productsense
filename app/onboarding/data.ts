/**
 * Data structure for onboarding analysis content
 */

import { App, Dimension, AnalysisContent } from './types';

export const apps: App[] = [
	{
		id: 'instagram',
		name: 'Instagram',
		icon: '/instagram.png'
	},
	{
		id: 'notion',
		name: 'Notion',
		icon: '/notion.png'
	},
	{
		id: 'venmo',
		name: 'Venmo',
		icon: '/venmo.png'
	}
];

export const dimensions: Dimension[] = [
	{
		id: 'first-moments',
		number: 1,
		title: 'First moments of value',
		description: 'How quickly does each app deliver something meaningful to a new user? What counts as "value" in each context?'
	},
	{
		id: 'information-gathering',
		number: 2,
		title: 'Information gathering',
		description: 'What data does each app ask for early? How much effort does this require from users, and how is it justified?'
	},
	{
		id: 'tone-trust',
		number: 3,
		title: 'Tone and trust',
		description: 'How do visual design, copy, and interaction style create a first impression of trust, ease, or excitement?'
	},
	{
		id: 'business-model',
		number: 4,
		title: 'Business model priorities',
		description: 'How do onboarding choices directly reflect each product\'s business priorities and growth strategy?'
	},
	{
		id: 'friction-flow',
		number: 5,
		title: 'Friction vs. flow',
		description: 'Where is friction deliberately introduced or minimized? How does each app balance accuracy, setup, and getting users into the experience quickly?'
	}
];

export const analysisContent: AnalysisContent[] = [
	// Instagram analyses
	{
		appId: 'instagram',
		dimensionId: 'first-moments',
		keyInsight: 'Immediate social value',
		analysis: 'Instagram prioritizes rapid engagement by delivering immediate social value through its onboarding flow. New users are quickly guided to follow suggested accounts based on their interests, creating an instant personalized feed. The app emphasizes visual discovery from the very first screen, showcasing compelling content that demonstrates the platform\'s value proposition.\n\nThe onboarding experience is designed to get users consuming and creating content within minutes. By surfacing popular accounts and trending content early, Instagram ensures that even before users post their first photo, they\'re already experiencing the core value of the platform: connection through visual storytelling. This approach minimizes the "empty state" problem common in social networks by filling the feed immediately with relevant, engaging content.',
		screenshots: [
			{
				src: '/Onboarding/Instagram/Instagram (iOS).png',
				alt: 'Instagram onboarding flow',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS).png',
				annotation: 'The home screen immediately shows a curated feed of visual content from suggested accounts, ensuring users see engaging posts before following anyone or creating content themselves.'
			}
		]
	},
	{
		appId: 'instagram',
		dimensionId: 'information-gathering',
		analysis: 'Instagram takes a progressive approach to information gathering, requesting only essential details upfront: email/phone, name, and password. The app defers more detailed profile setup until after users have experienced the core product. This strategic choice reduces initial friction while collecting data that serves dual purposes.\n\nThe follow suggestions that appear early in onboarding serve both the user (building their feed) and Instagram (understanding interests for algorithmic recommendations). Contact permissions are requested at natural moments when the value is clear: "Find friends you know" rather than a cold permission request. This just-in-time approach to data collection feels less invasive and more purposeful, with each request clearly tied to immediate user benefit.',
		screenshots: [
			{
				src: '/Onboarding/Instagram/Instagram (iOS).png',
				alt: 'Instagram information gathering',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS).png',
				annotation: 'Sign up requires just email/phone, name, and password. Profile photo and bio setup are deferred to after experiencing the core product.'
			}
		]
	},
	{
		appId: 'instagram',
		dimensionId: 'tone-trust',
		analysis: 'Instagram\'s onboarding strikes a casual, welcoming tone that emphasizes creativity and self-expression. The interface uses friendly, conversational copy like "Welcome to Instagram" with minimal jargon. Visual design is clean and uncluttered, using whitespace effectively to avoid overwhelming new users.\n\nThe app builds trust through social proof, prominently displaying the number of users already following suggested accounts and showing real, engaging content. Privacy controls are accessible but not alarmist, treating data permissions as optional conveniences rather than requirements. The overall impression is one of an established, safe community that\'s excited to have new members join, with guardrails in place without being heavy-handed about safety messaging.',
		screenshots: [
			{
				src: '/Onboarding/Instagram/Instagram (iOS).png',
				alt: 'Instagram tone and trust elements',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS).png',
				annotation: 'Clean, uncluttered interface with friendly copy like "Welcome to Instagram." Social proof is prominent through follower counts and real content, building trust without alarmist privacy messaging.'
			}
		]
	},
	{
		appId: 'instagram',
		dimensionId: 'business-model',
		keyInsight: 'Network growth engine',
		analysis: 'Instagram\'s business model depends on network effects and engagement for advertising revenue, which is clearly reflected in its onboarding priorities. The flow is optimized to get users following accounts and consuming content as quickly as possible, directly feeding the engagement metrics that drive ad impressions.\n\nContact access and follow suggestions aren\'t just features—they\'re growth mechanisms. By encouraging new users to follow multiple accounts immediately, Instagram increases the likelihood of retention (more content to see) and reciprocal follows (network expansion). The emphasis on visual content consumption over creation in early onboarding aligns with a viewer-first strategy that maximizes time spent in-app, creating inventory for ad placement while building the habit before asking users to contribute content.',
		screenshots: [
			{
				src: '/Onboarding/Instagram/Instagram (iOS).png',
				alt: 'Instagram business model priorities',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS).png',
				annotation: 'Follow suggestions appear prominently early in onboarding, driving network effects and ensuring users have content to consume—the foundation of Instagram\'s ad-supported revenue model.'
			}
		]
	},
	{
		appId: 'instagram',
		dimensionId: 'friction-flow',
		analysis: 'Instagram minimizes friction at almost every turn, optimizing for speed to value. Account creation requires just three fields and can be bypassed entirely with Facebook or Google sign-in. Profile setup is optional and can be completed later, removing a traditional onboarding bottleneck.\n\nThe few points of deliberate friction serve important purposes: username uniqueness validation prevents confusion, and age verification addresses legal requirements. Email confirmation is handled asynchronously—users can start using the app immediately while verification happens in the background. Even content creation friction is reduced through simple, guided camera interfaces and easy-to-apply filters. The result is a remarkably smooth path from download to active usage, with sophisticated features revealed gradually rather than overwhelming users upfront.',
		screenshots: [
			{
				src: '/Onboarding/Instagram/Instagram (iOS).png',
				alt: 'Instagram friction points',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS).png',
				annotation: 'Account creation requires just three fields: email/phone, name, and password. Profile setup is optional and deferred, removing traditional onboarding bottlenecks. Facebook/Google sign-in options further reduce friction.'
			}
		]
	},

	// Notion analyses
	{
		appId: 'notion',
		dimensionId: 'first-moments',
		keyInsight: 'Template-driven value',
		analysis: 'Notion faces a unique onboarding challenge: delivering immediate productivity value when users start with an empty workspace. The app addresses this through a template-first approach, offering pre-built structures for common use cases like task management, note-taking, and team wikis. This allows users to experience Notion\'s capabilities before understanding all its features.\n\nThe onboarding emphasizes "getting started" over "setup," with quick-start guides and sample content that users can modify rather than creating from scratch. This scaffolding approach demonstrates Notion\'s flexibility while preventing the paralysis of a blank canvas. New users can experience the satisfaction of organizing information and checking off tasks within their first session, providing tangible value even before they fully grasp the platform\'s power.',
		screenshots: [
			{
				src: '/Onboarding/Notion/Notion (iOS).png',
				alt: 'Notion first moments',
				thumbnail: '/Onboarding/Notion/Notion (iOS).png',
				annotation: 'Template gallery is featured prominently, offering pre-built structures for task lists, notes, and wikis. This prevents the "blank canvas" problem by giving users working examples to modify.'
			}
		]
	},
	{
		appId: 'notion',
		dimensionId: 'information-gathering',
		analysis: 'Notion\'s information gathering is purposeful and setup-focused, reflecting the product\'s nature as a workspace tool. During onboarding, the app asks about intended use (personal, team, or student), which immediately personalizes the experience by surfacing relevant templates and features. This context-gathering serves both the user (appropriate defaults) and Notion (product development insights).\n\nUnlike social apps, Notion doesn\'t request contact access or push for connections early. Instead, it focuses on workspace preferences: light vs. dark mode, organizational structure, and content types. For team accounts, there\'s more extensive setup around workspace names and member invitations, acknowledging that productivity tools require more upfront configuration than consumer apps. The data collected is transparently used to customize the experience rather than for opaque algorithmic purposes.',
		screenshots: [
			{
				src: '/Onboarding/Notion/Notion (iOS).png',
				alt: 'Notion information gathering',
				thumbnail: '/Onboarding/Notion/Notion (iOS).png',
				annotation: 'Notion asks about intended use (personal, team, or student) upfront to personalize templates and features. This purposeful data collection serves both user experience and product insights, without requesting invasive permissions.'
			}
		]
	},
	{
		appId: 'notion',
		dimensionId: 'tone-trust',
		analysis: 'Notion\'s onboarding tone is professional yet approachable, positioning the tool as a capable but not intimidating productivity partner. The copy is educational without being condescending, using clear explanations of concepts like "workspaces," "pages," and "databases" without assuming prior knowledge or drowning users in documentation.\n\nTrust is built through transparency about capabilities and limitations. Notion clearly explains what data is stored, how collaboration works, and what privacy controls exist. The interface design is clean and uncluttered, using subtle animations that feel polished rather than gimmicky. Unlike some enterprise tools, Notion doesn\'t oversell or create artificial urgency. The onboarding acknowledges that there\'s a learning curve and offers multiple pathways for different learning styles: guided tours, template exploration, or jumping straight into creation.',
		screenshots: [
			{
				src: '/Onboarding/Notion/Notion (iOS).png',
				alt: 'Notion tone and trust',
				thumbnail: '/Onboarding/Notion/Notion (iOS).png',
				annotation: 'Professional yet approachable interface with clear explanations of concepts like workspaces and pages. The clean design and subtle animations feel polished, while transparent privacy controls build trust without overselling.'
			}
		]
	},
	{
		appId: 'notion',
		dimensionId: 'business-model',
		analysis: 'Notion\'s freemium SaaS model shapes onboarding around demonstrating long-term value and workspace investment. Unlike ad-supported apps that need immediate engagement, Notion focuses on helping users build content and structure that makes switching away costly—a form of positive lock-in through investment.\n\nThe onboarding encourages workspace setup and team invitations, driving toward paid team plans where revenue scales with seats. Features are introduced progressively, with power user capabilities (databases, advanced permissions) revealed as users engage more deeply, creating natural upgrade moments. The focus on templates and imported content helps users quickly build substantial workspaces, increasing the switching cost. Notion prioritizes retention and expansion within teams over rapid user acquisition, reflected in an onboarding that accepts short-term friction (setup time) for long-term value (workspace dependence).',
		screenshots: [
			{
				src: '/Onboarding/Notion/Notion (iOS).png',
				alt: 'Notion business priorities',
				thumbnail: '/Onboarding/Notion/Notion (iOS).png',
				annotation: 'Template gallery and workspace setup encourage users to build substantial content quickly, creating switching costs. Team invitation prompts drive toward paid plans where revenue scales with seats.'
			}
		]
	},
	{
		appId: 'notion',
		dimensionId: 'friction-flow',
		keyInsight: 'Deliberate setup friction',
		analysis: 'Notion embraces necessary friction in its onboarding, recognizing that productivity tools require investment upfront to deliver value over time. The initial setup is more extensive than consumer apps: choosing use case, selecting templates, understanding workspace structure, and configuring preferences. This friction is justified as essential setup rather than unnecessary barriers.\n\nHowever, Notion is strategic about where it introduces friction. Account creation is streamlined (email/Google sign-in), but workspace customization is detailed. The app uses progressive disclosure to prevent overwhelming users: core features first, advanced capabilities revealed contextually. Interactive tutorials guide users through their first page creation, adding friction that educates rather than frustrates. The balance acknowledges that users investing in a new productivity system expect and accept more onboarding time than they would for a social app, as long as that time feels productive and necessary.',
		screenshots: [
			{
				src: '/Onboarding/Notion/Notion (iOS).png',
				alt: 'Notion friction and flow',
				thumbnail: '/Onboarding/Notion/Notion (iOS).png',
				annotation: 'Users are asked about intended use (personal/team/student) upfront—deliberate friction that personalizes templates and defaults. This setup time is positioned as productive investment rather than a barrier.'
			}
		]
	},

	// Venmo analyses
	{
		appId: 'venmo',
		dimensionId: 'first-moments',
		analysis: 'Venmo faces a critical onboarding challenge: users can\'t experience the core value (sending/receiving money) until they\'ve completed identity verification and bank linking—processes that require significant time and trust. The app addresses this by emphasizing the social feed early, allowing users to see friends\' transactions and understand the product\'s social dynamics while verification processes complete in the background.\n\nThe onboarding prioritizes building trust in financial security while showcasing Venmo\'s unique social angle. Users see real transaction activity (with dollar amounts hidden) immediately, demonstrating that Venmo is both a payment tool and a social network. This social proof—seeing friends\' transactions—provides psychological value even before financial value is accessible. The app manages expectations clearly, explaining that full functionality requires verification, but doesn\'t block exploration of the social features and interface while that happens.',
		screenshots: [
			{
				src: '/Onboarding/Venmo/Venmo (iOS).png',
				alt: 'Venmo first moments',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS).png',
				annotation: 'Social feed shows friends\' transactions immediately (with dollar amounts hidden), providing psychological value and social proof while bank verification completes. Users understand the product\'s social dynamics before they can send money.'
			}
		]
	},
	{
		appId: 'venmo',
		dimensionId: 'information-gathering',
		keyInsight: 'Required financial verification',
		analysis: 'Venmo\'s information gathering is the most extensive of the three apps, driven by legal requirements for financial services. The app requests personal details (full name, date of birth, SSN last 4 digits), bank account information, and identity verification—far beyond typical app onboarding. This friction is unavoidable but carefully managed.\n\nThe app justifies each request with clear explanations linking data to security and legal compliance. Information gathering is staged: basic profile first, then bank linking presented as a separate step, then full identity verification positioned as enabling higher limits. Contact access for finding friends is optional and separated from required financial data. Venmo uses progressive disclosure to avoid overwhelming users with forms, presenting each data request in context when it\'s needed. The app also offers multiple verification methods (bank login, micro-deposits, debit card) to accommodate different user situations, reducing the likelihood that verification barriers will cause abandonment.',
		screenshots: [
			{
				src: '/Onboarding/Venmo/Venmo (iOS).png',
				alt: 'Venmo information gathering',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS).png',
				annotation: 'Bank linking screen with instant verification via login credentials. Each data request includes clear security and compliance justifications. Multiple verification methods reduce abandonment risk.'
			}
		]
	},
	{
		appId: 'venmo',
		dimensionId: 'tone-trust',
		keyInsight: 'Balancing casual and secure',
		analysis: 'Venmo must perform a delicate balancing act: appearing casual and social enough to differentiate from traditional banking apps, while establishing sufficient trust for users to link their bank accounts. The visual design uses friendly blues and clean interfaces that feel approachable but professional, avoiding both the stuffiness of banking apps and the excessive playfulness that might undermine trust.\n\nCopy strikes a conversational tone while being precise about security. Phrases like "Pay anyone" and "Split bills seamlessly" emphasize ease, while security explanations use clear, non-technical language. The app leverages social proof aggressively: "12 million+ users," friend connections, and transaction activity all signal that Venmo is established and trustworthy. Privacy controls are prominent, allowing users to make transactions private, addressing concerns about financial information sharing without hiding the social features that differentiate Venmo.',
		screenshots: [
			{
				src: '/Onboarding/Venmo/Venmo (iOS).png',
				alt: 'Venmo tone and trust',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS).png',
				annotation: 'Friendly blue interface with "12 million+ users" social proof. Copy is conversational ("Pay anyone") while security messaging uses clear, non-technical language. Privacy controls are accessible without being alarmist.'
			}
		]
	},
	{
		appId: 'venmo',
		dimensionId: 'business-model',
		analysis: 'Venmo\'s business model (transaction fees for business payments and instant transfers) influences onboarding toward high-frequency, social transaction patterns. The emphasis on friend connections and the social feed encourages casual, frequent payments rather than viewing Venmo as a one-off tool. This habitual usage pattern drives volume even if individual transaction fees are small.\n\nThe onboarding downplays merchant payments and instant transfer fees, instead highlighting free peer-to-peer transfers to reduce initial friction. Revenue-generating features (instant transfer, business payments) are introduced later, after users are committed to the platform. The focus on linking debit cards alongside bank accounts supports the instant transfer business, while social features encourage network effects that increase platform value. Venmo\'s parent company (PayPal) also benefits from data on spending patterns, making user acquisition valuable beyond direct transaction fees.',
		screenshots: [
			{
				src: '/Onboarding/Venmo/Venmo (iOS).png',
				alt: 'Venmo business model',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS).png',
				annotation: 'Friend connections and social feed encourage frequent, casual payments rather than one-off transactions. Free peer-to-peer transfers are highlighted upfront, while revenue-generating features (instant transfer, business payments) are introduced later.'
			}
		]
	},
	{
		appId: 'venmo',
		dimensionId: 'friction-flow',
		analysis: 'Venmo faces unavoidable regulatory friction (identity verification, bank linking) that would sink most consumer apps. The app manages this by breaking the onboarding into clear stages with different friction profiles. Account creation is quick (email, password, phone verification), bank linking is presented as a straightforward next step, and full identity verification is framed as "unlocking higher limits" rather than a requirement.\n\nFlow is optimized within regulatory constraints: instant bank account linking via credentials is positioned before the slower micro-deposit method, and debit card additions are streamlined. The app uses waiting periods productively—while bank verification completes, users can explore the social feed and understand the product. Venmo also reduces perceived friction through clear progress indicators and time expectations: "This usually takes 2-3 business days" rather than vague waiting. The result is an onboarding that acknowledges and works with necessary friction rather than fighting against it or hiding it.',
		screenshots: [
			{
				src: '/Onboarding/Venmo/Venmo (iOS).png',
				alt: 'Venmo friction management',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS).png',
				annotation: 'Onboarding is broken into clear stages: quick account creation, bank linking, then full verification. Instant bank linking via credentials is prioritized over slower micro-deposit methods. Clear progress indicators and time expectations reduce perceived friction.'
			}
		]
	}
];
