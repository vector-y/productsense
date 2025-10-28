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
	},
	{
		id: 'comparative',
		name: 'Comparative Analysis',
		icon: '/comparative.png'
	}
];

export const dimensions: Dimension[] = [
	{
		id: 'first-moments',
		number: 1,
		title: 'First moments of value',
		description: 'What counts as "value" in each context?'
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
		description: `How do onboarding choices directly reflect each product's business priorities and growth strategy?`
	},
	{
		id: 'friction-flow',
		number: 5,
		title: 'Friction vs. flow',
		description: 'Where is friction deliberately introduced or minimized? How does each app balance accuracy, setup, and getting users into the experience quickly?'
	}
];

export const analysisContent: AnalysisContent[] = [
	// Comparative analysis
	{
		appId: 'comparative',
		dimensionId: 'first-moments',
		keyInsight: 'Comparative speed to value',
		analysis: `<strong>How quickly does each app deliver something meaningful to a new user?</strong>\n\n<em>Notion</em> is the quickest to deliver meaningful tips on the core functionality of the app, with the most concise but information rich onboarding experience. The app even introduces a new initiative the company is pushing for with their AI assistant which shows a lot of immediate value to help users set up their workspace(s).\n\nCompared to <em>Notion</em>, both <em>Instagram</em> and <em>Venmo</em> take a while to get into the meaningful functionality. This is because of the higher risks associated with their respective platforms. For Instagram, this means legal liability around content moderation and user safety, particularly for younger users. For Venmo, it's financial risk and regulatory compliance around money transmission. <em>Venmo</em> has legal obligations to make sure users know about their fee policies. On the other hand, <em>Instagram</em> has to make sure the user agrees to their terms and policies because of the potentially turbulent nature of social media platforms.\n\n<strong>What counts as "value" in each context?</strong>\n\n"Value" for <em>Instagram</em> looks like being able to connect with friends or following accounts that interest you to develop a deeply personal algorithm on your preferences. <em>Venmo</em> is an interesting case because it usually doesn't have much upfront value. Creating an account on <em>Venmo</em> usually is in preparation for payments later, not in the exact moment (ideally). This delayed value realization means Venmo must work harder to retain users during the setup phase before they experience their first transaction. That being said, once the payments do need to be exchanged, <em>Venmo</em>'s value skyrockets since there aren't payment methods as widespread with their platform's reach. <em>Notion</em>'s value is simple and quick with a short and meaningful onboarding that transports users straight to an assistant to aid users with their productivity.`,
		screenshots: [
			{
				src: '/Onboarding/Venmo/Venmo (iOS).png',
				alt: 'Venmo first moments',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS).png',
				label: '1 - Venmo',
				annotation: 'Social feed shows friends\' transactions immediately (with dollar amounts hidden), providing psychological value and social proof while bank verification completes. Users understand the product\'s social dynamics before they can send money.'
			},
			{
				src: '/Onboarding/Instagram/Instagram (iOS) friend.png',
				alt: 'Instagram onboarding flow',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS) friend.png',
				label: '2 - Instagram',
				annotation: 'Contact permission request appears early in onboarding, framed as making it easier to find friends. Instagram emphasizes user control with clear explanations about syncing and the ability to turn it off in Settings.'
			},
			{
				src: '/Onboarding/Notion/Notion (iOS).png',
				alt: 'Notion first moments',
				thumbnail: '/Onboarding/Notion/Notion (iOS).png',
				label: '3 - Notion',
				annotation: 'Template gallery is featured prominently, offering pre-built structures for task lists, notes, and wikis. This prevents the "blank canvas" problem by giving users working examples to modify.'
			},
			{
				src: '/Onboarding/Venmo/Venmo (iOS) connect.png',
				alt: 'Venmo friend connections',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS) connect.png',
				label: '4 - Venmo',
				annotation: 'Contact sync screen framed around both convenience ("make it easier to find and pay your friends") and security ("helps to protect your Venmo account"). Playful illustration of friends on roller skates reinforces the social nature. Clear permission management explanation with "Skip for now" option makes it entirely optional.'
			},
			{
				src: '/Onboarding/Instagram/Instagram (iOS) follow.png',
				alt: 'Instagram follow suggestions',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS) follow.png',
				label: '5 - Instagram',
				annotation: 'Follow suggestions with "Select all" option and visual checkmarks showing progress. The header "Try following 5+ people" sets a clear goal, while subtext notes "Following isn\'t required, but it\'s recommended for a personalized experience"—optional but encouraged for building a personalized feed.'
			},
			{
				src: '/Onboarding/Notion/Notion (iOS) tipOrder.png',
				alt: 'Notion interaction tip',
				thumbnail: '/Onboarding/Notion/Notion (iOS) tipOrder.png',
				label: '6 - Notion',
				annotation: 'Essential interaction tip teaching "Touch and hold to reorder any content" with visual demonstration. Notion proactively educates users about core gestures rather than assuming organic discovery, reducing future friction with fundamental features that unlock the product\'s flexibility.'
			}
		]
	},

	// Comparative analysis - Information Gathering
	{
		appId: 'comparative',
		dimensionId: 'information-gathering',
		keyInsight: 'Data collection strategies',
		analysis: `<strong>What data does each app ask for early (identity, preferences, contacts, payment info)?</strong>\n\n<em>Venmo</em> asks for: how you'll use the app, your phone number (oriented itself as mobile first), and key identity information to establish trust between you and the platform.\n\n<em>Instagram</em> asks for: either your number or email, a confirmation on that form of identification, and then establishing user context like birthday, name, and username.\n\n<em>Notion</em> asks for: your email address verification, how you want to use the app, and your areas of interest to establish how to accommodate for your personal context and needs.\n\n<strong>How much effort does this require from users, and how is it justified?</strong>\n\nBoth <em>Instagram</em> and <em>Venmo</em> have about the same amount of screens that help to contextualize who the user is. <em>Notion</em>, unlike the other two platforms, has more flexibility with sign up options like "Continue with Google" which helps to get started much more quickly. Comparatively, <em>Instagram</em> and <em>Venmo</em> don't rely on third party vendors to learn about their users because they want to build a deeper relationship with their users. This direct relationship gives them full control over user identity data, enables more precise targeting for ads or financial services, and avoids sharing valuable user information with Google or Apple's ecosystems. <em>Notion</em> cares more about quickly setting up an environment and isn't held back by setting up logistics like payment information or following other accounts. This speed-to-productivity approach helps Notion convert trial users into active workspace builders before they lose momentum or forget why they signed up.`,
		screenshots: [
			{
				src: '/Onboarding/Venmo/Venmo (iOS) aConfirm.png',
				alt: 'Venmo information gathering',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS) aConfirm.png',
				label: '1 - Venmo',
				annotation: 'Venmo requires extensive identity verification, requesting legal name, username, email, and password. Clear security requirements are stated (8-20 characters, must include number/symbol), and legal agreements are presented with clickable links before users can proceed.'
			},
			{
				src: '/Onboarding/Instagram/Instagram (iOS) birthday.png',
				alt: 'Instagram information gathering',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS) birthday.png',
				label: '2 - Instagram',
				annotation: 'Instagram collects birthday information early in onboarding, with clear disclosure about privacy ("Use your own birthday... No one will see this unless you choose to share it") and a prominent link explaining why this data is required.'
			},
			{
				src: '/Onboarding/Notion/Notion (iOS) google.png',
				alt: 'Notion information gathering',
				thumbnail: '/Onboarding/Notion/Notion (iOS) google.png',
				label: '3 - Notion',
				annotation: 'Notion offers flexible sign-up through "Sign in with Google," streamlining the onboarding process. The screen clearly explains what data will be shared (name, email, language preference, profile picture) and provides links to Privacy Policy and Terms of Service.'
			}
		]
	},

	// Comparative analysis - Tone and Trust
	{
		appId: 'comparative',
		dimensionId: 'tone-trust',
		keyInsight: 'Visual language and emotional resonance',
		analysis: `<strong>How do visual design, copy, and interaction style create a first impression of trust, ease, or excitement?</strong>\n\n<em>Venmo</em>'s crayon illustration style makes the platform feel very approachable, fun, and friendly. The texture on each stroke of the image creates a handcrafted feel, while the mix of illustrations ranges from casual (pizza night) to emerging trends (crypto), showing versatility. The visual language for <em>Venmo</em> itself has rounded edges throughout, with no hard or sharp edges in the visual components—reinforcing an accessible, non-threatening aesthetic. This softness is particularly important for a financial app, where harsh angles or stark designs might trigger anxiety about money and security.\n\n<em>Instagram</em> creates a more subtle visual design with the soft purple and cotton candy gradient that creates an almost iridescent sheen for the background of most initial screens. <em>Instagram</em> uses more straight-edge outline illustrations that help establish trust and a sense of elegance with using the app itself. The polished, minimal aesthetic signals maturity and sophistication.\n\n<em>Notion</em> has a very elegant and eye-catching illustration style that makes use of primary colors (red, yellow, blue) to nail home the fact that they work within the constraints of using "building blocks." The illustration showcases a high level of trust required to invest time into their product. It depicts two characters in the foreground studying on their laptops, collaborating through their mind's self-expression—positioning <em>Notion</em> as a requirement when students and workers alike are looking to manage how they spend their time building ideas. This high-trust positioning sets user expectations that Notion requires commitment and investment, which can deter casual browsers but attracts users ready to reorganize how they work.\n\n<strong>Where do you see cues that lower anxiety or uncertainty?</strong>\n\nAnxiety-reducing cues appear throughout the onboarding experiences. Within <em>Notion</em>'s app, phrases like "Select as many as you want" help give agency back to the user rather than creating pressure to make the "right" choice. Visual language helps communicate optionality and flexibility, making users feel empowered rather than constrained during the setup process.`,
		screenshots: [
			{
				src: '/Onboarding/Venmo/Venmo (iOS) splash.png',
				alt: 'Venmo splash screen',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS) splash.png',
				label: '1 - Venmo',
				annotation: 'Venmo\'s splash screen features a playful crayon-style illustration with textured strokes depicting money, pizza, QR codes, and crypto—showing the app\'s versatility. The hand holding the phone with rounded edges creates an approachable, friendly first impression that lowers barriers to entry.'
			},
			{
				src: '/Onboarding/Instagram/Instagram (iOS) login.png',
				alt: 'Instagram login screen',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS) login.png',
				label: '2 - Instagram',
				annotation: 'Instagram\'s login screen features the iconic gradient logo on a soft iridescent background, with clean, rounded input fields for username/email and password. The prominent blue "Log in" button and "Create new account" option at the bottom create a welcoming, trustworthy first impression with the polished, minimal aesthetic that signals Instagram\'s established presence.'
			},
			{
				src: '/Onboarding/Notion/Notion (iOS) splash.png',
				alt: 'Notion splash screen',
				thumbnail: '/Onboarding/Notion/Notion (iOS) splash.png',
				label: '3 - Notion',
				annotation: 'Notion\'s splash screen features an elegant illustration using primary colors showing two people working on laptops with a shared thought bubble containing productivity icons. The tagline "Think it. Make it." and login prompt establish high trust requirements while showcasing collaboration and creative expression.'
			},
			{
				src: '/Onboarding/Venmo/Venmo (iOS) celebrate.png',
				alt: 'Venmo celebration screen',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS) celebrate.png',
				label: '4 - Venmo',
				annotation: 'Venmo\'s celebration screen uses cheerful visuals and positive messaging to create an emotional high point in the onboarding journey, reducing anxiety about the technical setup process and building excitement about using the platform.'
			},
			{
				src: '/Onboarding/Instagram/Instagram (iOS) remember.png',
				alt: 'Instagram login info security',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS) remember.png',
				label: '5 - Instagram',
				annotation: 'Instagram\'s "Remember login info?" screen builds trust through transparency and user control. The lock icon with colorful rays transforms security messaging into friendly, approachable design. Clear explanation of what will be remembered and where (iCloud devices) reduces anxiety, while the "Not now" option removes pressure—users feel empowered to decline without consequence.'
			},
			{
				src: '/Onboarding/Notion/Notion (iOS) tipSave.png',
				alt: 'Notion web clipper tip',
				thumbnail: '/Onboarding/Notion/Notion (iOS) tipSave.png',
				label: '6 - Notion',
				annotation: 'Notion\'s essential tips screen demonstrates practical value through real-world use cases. The heading hierarchy ("Some essential tips" + bold feature description) creates scannable content that respects user attention. The device mockup showing actual functionality builds confidence—users see exactly what they\'ll be able to do, reducing uncertainty about the product\'s capabilities.'
			}
		]
	},

	// Comparative analysis - Business Model
	{
		appId: 'comparative',
		dimensionId: 'business-model',
		keyInsight: 'Business priorities shape onboarding flow',
		analysis: `<strong>Business model priorities</strong>\n\n<ul>\n<li><em>Instagram</em>: needs rapid engagement and network growth</li>\n<li><em>Notion</em>: needs effective setup for retention</li>\n<li><em>Venmo</em>: needs verified identity and trust for transactions</li>\n</ul>\n\n<strong>How do onboarding choices directly reflect these priorities?</strong>\n\n<em>Instagram</em> prioritizes network building by prompting new users to follow 5 people immediately. Each person they follow has a more established profile, providing data points about the user's interests. This initial follow action serves dual purposes: it populates the user's feed with content to engage with right away, while giving Instagram's algorithm early signals to personalize future recommendations. Better personalization leads to more accurate ad targeting, which drives higher CPMs and ultimately more ad revenue per user.\n\n<em>Venmo</em> balances customization with compliance by opening with "How will you use Venmo?" to gather usage intent, then immediately presenting legal information and verification requirements. This sequence reflects their need to establish trust and meet regulatory requirements before any transactions occur.\n\n<em>Notion</em> moves with remarkable efficiency through just three quick steps: asking how the user will use the app, capturing their interests, and sharing starter tips. The user then lands directly on the home screen—by far the fastest onboarding among the three apps. This approach reflects Notion's priority of getting users actively building in their workspace as quickly as possible, knowing that hands-on experience drives retention better than lengthy tutorials. Retained users who build substantial workspaces are far more likely to convert to paid plans or expand to team accounts where Notion's revenue scales.`,
		screenshots: [
			{
				src: '/Onboarding/Instagram/Instagram (iOS) follow.png',
				alt: 'Instagram follow suggestions',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS) follow.png',
				label: '1 - Instagram',
				annotation: 'Instagram prompts users to "Try following 5+ people" immediately, directly supporting their business model of rapid network growth and engagement. This feeds both the user\'s personalized content and Instagram\'s algorithmic data collection.'
			},
			{
				src: '/Onboarding/Notion/Notion (iOS) notionAI.png',
				alt: 'Notion AI feature',
				thumbnail: '/Onboarding/Notion/Notion (iOS) notionAI.png',
				label: '2 - Notion',
				annotation: 'Notion introduces their AI assistant during onboarding, showcasing premium features that drive their freemium business model. Early exposure to powerful capabilities creates upgrade motivation while demonstrating long-term value.'
			},
			{
				src: '/Onboarding/Venmo/Venmo (iOS) answers.png',
				alt: 'Venmo usage questions',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS) answers.png',
				label: '3 - Venmo',
				annotation: 'Venmo asks "How will you use Venmo?" upfront to understand user intent and gather usage data. This helps them optimize for transaction patterns while meeting compliance requirements for their payment business model.'
			}
		]
	},

	// Comparative analysis - Friction vs. Flow
	{
		appId: 'comparative',
		dimensionId: 'friction-flow',
		keyInsight: 'Strategic friction placement',
		analysis: `<strong>Where is friction deliberately introduced (e.g., to ensure accuracy, encourage setup, verify identity)?</strong>\n\nThere is always an upfront friction of obtaining either an existing email or phone number at the start of an onboarding process across the 3 apps. There are clear questions that companies invest time and effort into asking the user why they downloaded the company's app, but it's not always entirely clear if the user experience changes drastically from answering those questions during the onboarding. In some cases, these questions genuinely personalize the experience (like Notion's template suggestions). In others, they may serve primarily as data collection for product analytics rather than immediate UX changes, raising questions about whether the friction is justified.\n\n<strong>Where is friction minimized to get users into the app quickly?</strong>\n\nThe common use case of obtaining email addresses has led to widespread adoption of sign in tools from major providers such as Google and Apple. This usually helps to save on time and kills the most boring parts of the onboarding process. I also noticed "Skip" or "Not now" buttons being incorporated into key parts of the onboarding process like remembering login information or getting recommendations. These skip options represent a strategic trade-off: they improve short-term conversion by reducing abandonment, but risk lower long-term activation if users skip steps that would have made the product more valuable (like following accounts or enabling notifications).`,
		screenshots: [
			{
				src: '/Onboarding/Instagram/Instagram (iOS) agree.png',
				alt: 'Instagram terms agreement',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS) agree.png',
				label: '1 - Instagram',
				annotation: 'Instagram introduces deliberate friction with terms and policies agreement, requiring users to acknowledge rules before proceeding. This friction serves both legal compliance and sets expectations for platform behavior.'
			},
			{
				src: '/Onboarding/Notion/Notion (iOS) interest.png',
				alt: 'Notion interest selection',
				thumbnail: '/Onboarding/Notion/Notion (iOS) interest.png',
				label: '2 - Notion',
				annotation: 'Notion asks users about their interests to personalize the experience, but minimizes friction by allowing multiple selections and making the process feel optional rather than mandatory.'
			},
			{
				src: '/Onboarding/Venmo/Venmo (iOS) legal.png',
				alt: 'Venmo legal information',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS) legal.png',
				label: '3 - Venmo',
				annotation: 'Venmo introduces necessary friction with legal disclosures and fee information, meeting regulatory requirements while transparently communicating financial terms before users can transact.'
			},
			{
				src: '/Onboarding/Instagram/Instagram (iOS) fbSuggest.png',
				alt: 'Instagram Facebook suggestions',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS) fbSuggest.png',
				label: '4 - Instagram',
				annotation: 'Instagram minimizes friction by offering Facebook connection for instant friend suggestions, making it easy to build a network quickly. The "Skip" option ensures users never feel forced into linking accounts.'
			},
			{
				src: '/Onboarding/Notion/Notion (iOS) home.png',
				alt: 'Notion home screen',
				thumbnail: '/Onboarding/Notion/Notion (iOS) home.png',
				label: '5 - Notion',
				annotation: 'Notion gets users to the home screen quickly, minimizing onboarding friction to let users start building immediately. The clean workspace with templates and guidance balances speed with helpful structure.'
			},
			{
				src: '/Onboarding/Venmo/Venmo (iOS) allow noti.png',
				alt: 'Venmo notification permission',
				thumbnail: '/Onboarding/Venmo/Venmo (iOS) allow noti.png',
				label: '6 - Venmo',
				annotation: 'Venmo minimizes friction on notification permissions by making it optional and clearly explaining the value ("Get notified when you receive money"). Users can decline without feeling like they\'re missing core functionality.'
			}
		]
	},

	// Instagram analyses
	{
		appId: 'instagram',
		dimensionId: 'information-gathering',
		analysis: `<em>Instagram</em> takes a progressive approach to information gathering, requesting only essential details upfront: email/phone, name, and password. The app defers more detailed profile setup until after users have experienced the core product. This strategic choice reduces initial friction while collecting data that serves dual purposes.\n\nThe follow suggestions that appear early in onboarding serve both the user (building their feed) and <em>Instagram</em> (understanding interests for algorithmic recommendations). Contact permissions are requested at natural moments when the value is clear: "Find friends you know" rather than a cold permission request. This just-in-time approach to data collection feels less invasive and more purposeful, with each request clearly tied to immediate user benefit.`,
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
		analysis: `<em>Instagram</em>'s onboarding strikes a casual, welcoming tone that emphasizes creativity and self-expression. The interface uses friendly, conversational copy like "Welcome to Instagram" with minimal jargon. Visual design is clean and uncluttered, using whitespace effectively to avoid overwhelming new users.\n\nThe app builds trust through social proof, prominently displaying the number of users already following suggested accounts and showing real, engaging content. Privacy controls are accessible but not alarmist, treating data permissions as optional conveniences rather than requirements. The overall impression is one of an established, safe community that's excited to have new members join, with guardrails in place without being heavy-handed about safety messaging. Instagram strikes a delicate balance: communicating enough safety information to build trust without creating anxiety that might deter new users from posting or engaging.`,
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
		analysis: `<em>Instagram</em>'s business model depends on network effects and engagement for advertising revenue, which is clearly reflected in its onboarding priorities. The flow is optimized to get users following accounts and consuming content as quickly as possible, directly feeding the engagement metrics that drive ad impressions.\n\nContact access and follow suggestions aren't just features—they're growth mechanisms. By encouraging new users to follow multiple accounts immediately, <em>Instagram</em> increases the likelihood of retention (more content to see) and reciprocal follows (network expansion). The emphasis on visual content consumption over creation in early onboarding aligns with a viewer-first strategy that maximizes time spent in-app, creating inventory for ad placement while building the habit before asking users to contribute content. Once users are hooked on consuming, Instagram gradually introduces creation tools through stories, reels, and posts, transitioning passive viewers into active creators who drive even more engagement.`,
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
		analysis: `<em>Instagram</em> minimizes friction at almost every turn, optimizing for speed to value. Account creation requires just three fields and can be bypassed entirely with Facebook or Google sign-in. Profile setup is optional and can be completed later, removing a traditional onboarding bottleneck.\n\nThe few points of deliberate friction serve important purposes: username uniqueness validation prevents confusion, and age verification addresses legal requirements. Email confirmation is handled asynchronously—users can start using the app immediately while verification happens in the background. Even content creation friction is reduced through simple, guided camera interfaces and easy-to-apply filters. The result is a remarkably smooth path from download to active usage, with sophisticated features revealed gradually rather than overwhelming users upfront.`,
		screenshots: [
			{
				src: '/Onboarding/Instagram/Instagram (iOS).png',
				alt: 'Instagram friction points',
				thumbnail: '/Onboarding/Instagram/Instagram (iOS).png',
				annotation: 'Account creation requires just three fields: email/phone, name, and password. Profile setup is optional and deferred, removing traditional onboarding bottlenecks. Facebook/Google sign-in options further reduce friction.'
			}
		]
	},

	{
		appId: 'notion',
		dimensionId: 'information-gathering',
		analysis: `<em>Notion</em>'s information gathering is purposeful and setup-focused, reflecting the product's nature as a workspace tool. During onboarding, the app asks about intended use (personal, team, or student), which immediately personalizes the experience by surfacing relevant templates and features. This context-gathering serves both the user (appropriate defaults) and <em>Notion</em> (product development insights).\n\nUnlike social apps, <em>Notion</em> doesn't request contact access or push for connections early. Instead, it focuses on workspace preferences: light vs. dark mode, organizational structure, and content types. For team accounts, there's more extensive setup around workspace names and member invitations, acknowledging that productivity tools require more upfront configuration than consumer apps. The data collected is transparently used to customize the experience rather than for opaque algorithmic purposes. Unlike social platforms that collect data for ad targeting and behavioral prediction, Notion's data collection directly serves the user's immediate productivity needs without hidden monetization motives.`,
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
		analysis: `<em>Notion</em>'s onboarding tone is professional yet approachable, positioning the tool as a capable but not intimidating productivity partner. The copy is educational without being condescending, using clear explanations of concepts like "workspaces," "pages," and "databases" without assuming prior knowledge or drowning users in documentation.\n\nTrust is built through transparency about capabilities and limitations. <em>Notion</em> clearly explains what data is stored, how collaboration works, and what privacy controls exist. The interface design is clean and uncluttered, using subtle animations that feel polished rather than gimmicky. Unlike some enterprise tools, <em>Notion</em> doesn't oversell or create artificial urgency. The onboarding acknowledges that there's a learning curve and offers multiple pathways for different learning styles: guided tours, template exploration, or jumping straight into creation.`,
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
		analysis: `<em>Notion</em>'s freemium SaaS model shapes onboarding around demonstrating long-term value and workspace investment. Unlike ad-supported apps that need immediate engagement, <em>Notion</em> focuses on helping users build content and structure that makes switching away costly—a form of positive lock-in through investment.\n\nThe onboarding encourages workspace setup and team invitations, driving toward paid team plans where revenue scales with seats. Features are introduced progressively, with power user capabilities (databases, advanced permissions) revealed as users engage more deeply, creating natural upgrade moments. The focus on templates and imported content helps users quickly build substantial workspaces, increasing the switching cost. This creates a competitive moat against other productivity tools, as users become less likely to migrate their extensive notes, databases, and team processes to competitors once they're deeply invested in Notion's ecosystem. <em>Notion</em> prioritizes retention and expansion within teams over rapid user acquisition, reflected in an onboarding that accepts short-term friction (setup time) for long-term value (workspace dependence).`,
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
		analysis: `<em>Notion</em> embraces necessary friction in its onboarding, recognizing that productivity tools require investment upfront to deliver value over time. The initial setup is more extensive than consumer apps: choosing use case, selecting templates, understanding workspace structure, and configuring preferences. This friction is justified as essential setup rather than unnecessary barriers.\n\nHowever, <em>Notion</em> is strategic about where it introduces friction. Account creation is streamlined (email/Google sign-in), but workspace customization is detailed. The app uses progressive disclosure to prevent overwhelming users: core features first, advanced capabilities revealed contextually. Interactive tutorials guide users through their first page creation, adding friction that educates rather than frustrates. The balance acknowledges that users investing in a new productivity system expect and accept more onboarding time than they would for a social app, as long as that time feels productive and necessary.`,
		screenshots: [
			{
				src: '/Onboarding/Notion/Notion (iOS).png',
				alt: 'Notion friction and flow',
				thumbnail: '/Onboarding/Notion/Notion (iOS).png',
				annotation: 'Users are asked about intended use (personal/team/student) upfront—deliberate friction that personalizes templates and defaults. This setup time is positioned as productive investment rather than a barrier.'
			}
		]
	},

	{
		appId: 'venmo',
		dimensionId: 'information-gathering',
		keyInsight: 'Required financial verification',
		analysis: `<em>Venmo</em>'s information gathering is the most extensive of the three apps, driven by legal requirements for financial services. The app requests personal details (full name, date of birth, SSN last 4 digits), bank account information, and identity verification—far beyond typical app onboarding. This friction is unavoidable but carefully managed.\n\nThe app justifies each request with clear explanations linking data to security and legal compliance. Information gathering is staged: basic profile first, then bank linking presented as a separate step, then full identity verification positioned as enabling higher limits. Contact access for finding friends is optional and separated from required financial data. <em>Venmo</em> uses progressive disclosure to avoid overwhelming users with forms, presenting each data request in context when it's needed. The app also offers multiple verification methods (bank login, micro-deposits, debit card) to accommodate different user situations, reducing the likelihood that verification barriers will cause abandonment. Venmo must navigate the constant tension between regulatory compliance (which requires extensive verification) and conversion rates (which suffer when friction increases), making every onboarding choice a careful balancing act.`,
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
		analysis: `<em>Venmo</em> must perform a delicate balancing act: appearing casual and social enough to differentiate from traditional banking apps, while establishing sufficient trust for users to link their bank accounts. The visual design uses friendly blues and clean interfaces that feel approachable but professional, avoiding both the stuffiness of banking apps and the excessive playfulness that might undermine trust.\n\nCopy strikes a conversational tone while being precise about security. Phrases like "Pay anyone" and "Split bills seamlessly" emphasize ease, while security explanations use clear, non-technical language. The app leverages social proof aggressively: "12 million+ users," friend connections, and transaction activity all signal that <em>Venmo</em> is established and trustworthy. Privacy controls are prominent, allowing users to make transactions private, addressing concerns about financial information sharing without hiding the social features that differentiate <em>Venmo</em>. These granular privacy controls differentiate Venmo from traditional banking apps (which lack social features entirely) and from social apps (which don't handle sensitive financial transactions), positioning Venmo uniquely as both social and secure.`,
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
		analysis: `<em>Venmo</em>'s business model (transaction fees for business payments and instant transfers) influences onboarding toward high-frequency, social transaction patterns. The emphasis on friend connections and the social feed encourages casual, frequent payments rather than viewing <em>Venmo</em> as a one-off tool. This habitual usage pattern drives volume even if individual transaction fees are small.\n\nThe onboarding downplays merchant payments and instant transfer fees, instead highlighting free peer-to-peer transfers to reduce initial friction. Revenue-generating features (instant transfer, business payments) are introduced later, after users are committed to the platform. The focus on linking debit cards alongside bank accounts supports the instant transfer business, while social features encourage network effects that increase platform value. <em>Venmo</em>'s parent company (PayPal) also benefits from data on spending patterns, making user acquisition valuable beyond direct transaction fees. This transaction data provides insights into consumer behavior, merchant relationships, and payment trends that inform PayPal's broader financial services strategy and can be monetized through analytics products for businesses.`,
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
		analysis: `<em>Venmo</em> faces unavoidable regulatory friction (identity verification, bank linking) that would sink most consumer apps. The app manages this by breaking the onboarding into clear stages with different friction profiles. Account creation is quick (email, password, phone verification), bank linking is presented as a straightforward next step, and full identity verification is framed as "unlocking higher limits" rather than a requirement.\n\nFlow is optimized within regulatory constraints: instant bank account linking via credentials is positioned before the slower micro-deposit method, and debit card additions are streamlined. The app uses waiting periods productively—while bank verification completes, users can explore the social feed and understand the product. <em>Venmo</em> also reduces perceived friction through clear progress indicators and time expectations: "This usually takes 2-3 business days" rather than vague waiting. The result is an onboarding that acknowledges and works with necessary friction rather than fighting against it or hiding it.`,
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
