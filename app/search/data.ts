/**
 * Data structure for search & browsing analysis content
 */

import { App, Dimension, AnalysisContent } from './types';

export const apps: App[] = [
	{
		id: 'netflix',
		name: 'Netflix',
		icon: '/netflix.png'
	},
	{
		id: 'youtube',
		name: 'YouTube',
		icon: '/youtube.png'
	},
	{
		id: 'airbnb',
		name: 'Airbnb',
		icon: '/airbnb.png'
	}
];

export const dimensions: Dimension[] = [
	{
		id: 'discovery-patterns',
		number: 1,
		title: 'Discovery patterns & user control',
		description: 'Where does the platform guide the user (recommendations, rankings) versus where does the user control discovery (search, filters)? How does this balance affect the feeling of agency?'
	},
	{
		id: 'choice-architecture',
		number: 2,
		title: 'Choice architecture',
		description: 'How do UI patterns like infinite scroll, filter trees, and "because you watched…" influence decision quality? What does the interface reveal about how the platform wants users to make choices?'
	},
	{
		id: 'business-alignment',
		number: 3,
		title: 'Business model alignment',
		description: 'How do discovery patterns serve business goals? Netflix needs engagement time, YouTube needs ad inventory, Airbnb needs booking conversion—how does each platform\'s discovery design reflect these priorities?'
	},
	{
		id: 'user-psychology',
		number: 4,
		title: 'User psychology',
		description: 'Where do you see design for serendipity versus design for goal-directed search? How do discovery patterns impact trust, satisfaction, or frustration?'
	},
	{
		id: 'agency-nudging',
		number: 5,
		title: 'Agency vs. nudging',
		description: 'How does the discovery pattern make users feel? Empowered to find what they want, overwhelmed by options, or subtly guided toward platform-preferred choices?'
	}
];

export const analysisContent: AnalysisContent[] = [
	// Netflix analyses
	{
		appId: 'netflix',
		dimensionId: 'discovery-patterns',
		keyInsight: 'Algorithm-first discovery',
		analysis: 'Netflix employs a heavily platform-controlled discovery model where algorithmic recommendations dominate the entire browsing experience. The home screen presents personalized rows like "Top Picks for You," "Trending Now," and "Because You Watched," with virtually no neutral browsing options. Search functionality exists but is deliberately de-emphasized—tucked away in the navigation and offering limited filtering beyond basic genre categories.\n\nThis discovery pattern reflects a fundamental design philosophy: Netflix believes it knows what you want to watch better than you do. User control is minimal by design. There are no browse-by-release-date options, no comprehensive genre trees, and no ability to see "all movies" or "all shows." Every content surface is algorithmically curated based on viewing history, ratings, and behavior patterns across millions of users. The platform guides users through personalized corridors rather than offering open exploration.\n\nThe effect on user agency is subtle but significant. Users aren\'t making choices from an objective catalog—they\'re selecting from a pre-filtered set of recommendations. This feels convenient when it works ("Netflix just gets me") but can feel limiting when you want to browse outside your established patterns or discover something genuinely unexpected.',
		screenshots: [
			{
				src: '/Search/Netflix/Netflix (iOS).png',
				alt: 'Netflix discovery interface',
				thumbnail: '/Search/Netflix/Netflix (iOS).png',
				annotation: 'Home screen dominated by algorithmic rows like "Top Picks for You" and "Because You Watched." Search is tucked away in the navigation. No neutral browsing options or comprehensive catalog access—every surface is personalized.'
			}
		]
	},
	{
		appId: 'netflix',
		dimensionId: 'choice-architecture',
		analysis: 'Netflix\'s choice architecture is meticulously designed to minimize decision paralysis while maximizing engagement. The infinite scroll of personalized rows creates a "lean back" browsing experience where users can passively explore without the cognitive burden of active filtering. Each row is thematically organized but algorithmically populated—"Critically Acclaimed Dramas" sounds like a category, but it\'s actually a personalized selection.\n\nThe interface employs several persuasive patterns: auto-playing trailers grab attention as you browse, large preview cards with minimal text prioritize visual appeal over information density, and the "Top 10" lists leverage social proof to guide choices. The lack of release dates, ratings, or detailed metadata in browse views keeps users focused on Netflix\'s recommendations rather than objective criteria.\n\nThis architecture reveals Netflix\'s preferred user behavior: they want you browsing within their curated selections, not searching with intent. Decision-making feels effortless because options are pre-filtered, but this also means you\'re only seeing what Netflix chooses to show. The endless scroll can trigger "choice overload"—so many options yet nothing feels quite right—precisely because every option is algorithmically similar to your past behavior, creating a paradox of constrained variety.',
		screenshots: [
			{
				src: '/Search/Netflix/Netflix (iOS).png',
				alt: 'Netflix choice architecture',
				thumbnail: '/Search/Netflix/Netflix (iOS).png',
				annotation: 'Infinite scroll of personalized rows creates "lean back" browsing. Auto-playing trailers grab attention, large preview cards prioritize visuals over metadata. No release dates or ratings in browse view—keeps focus on Netflix\'s recommendations.'
			}
		]
	},
	{
		appId: 'netflix',
		dimensionId: 'business-alignment',
		keyInsight: 'Optimized for watch time',
		analysis: 'Netflix\'s business model is subscription-based with one clear goal: minimize churn by maximizing engagement. Every aspect of its discovery design serves this objective. Algorithmic recommendations aren\'t just convenience features—they\'re retention mechanisms. By showing users content they\'re statistically likely to watch and finish, Netflix increases the perceived value of the subscription and reduces cancellation likelihood.\n\nThe platform\'s refusal to offer comprehensive browsing or sorting options is strategic. If users could easily see everything available and realize they\'ve exhausted interesting content in their genres, they might cancel. Instead, the algorithmic feed creates the impression of endless relevant content by continuously resurfacing catalog items in new contexts ("Because You Watched," "Trending," "New Releases for You"). The same shows appear in multiple rows with different framing.\n\nAuto-play features—trailers while browsing, next episode countdowns—are aggressive retention tactics. Netflix profits from every additional minute watched because it strengthens habit formation and reduces the likelihood of subscription cancellation. Unlike ad-supported platforms, Netflix doesn\'t need diverse browsing patterns; it needs deep engagement with content that keeps users subscribed. The discovery design reflects this: it\'s optimized not for helping users find specific content, but for keeping them watching anything.',
		screenshots: [
			{
				src: '/Search/Netflix/Netflix (iOS).png',
				alt: 'Netflix business alignment',
				thumbnail: '/Search/Netflix/Netflix (iOS).png',
				annotation: 'Subscription model requires retention through engagement. Algorithmic recommendations maximize watch time to reduce churn. Same shows appear in multiple rows ("Trending," "Because You Watched") creating impression of endless content.'
			}
		]
	},
	{
		appId: 'netflix',
		dimensionId: 'user-psychology',
		analysis: 'Netflix\'s discovery design leans heavily into serendipity over goal-directed search, but it\'s a curated serendipity that prioritizes comfort over surprise. The algorithmic feed is designed to deliver "unexpected but familiar" recommendations—content that feels like a pleasant discovery but stays within your established preferences. This creates a psychological comfort zone that\'s engaging but rarely challenging.\n\nThe absence of detailed metadata, sorting options, or comprehensive catalogs discourages intentional exploration. When users arrive at Netflix, they\'re typically in a "browse" mindset rather than a "search" mindset—the interface reinforces this by making passive scrolling the primary interaction. The auto-playing trailers and preview content create a "TV channel" experience where content comes to you rather than requiring active seeking.\n\nThis psychology has tradeoffs. Users who trust Netflix\'s recommendations experience low-friction satisfaction—open the app, scroll briefly, start watching. But users seeking specific types of content or wanting to explore outside their comfort zones can feel frustrated by the lack of control. The "filter bubble" effect is real: Netflix\'s algorithms tend to reinforce existing preferences rather than broadening tastes, creating long-term satisfaction concerns even as short-term engagement remains high.',
		screenshots: [
			{
				src: '/Search/Netflix/Netflix (iOS).png',
				alt: 'Netflix user psychology',
				thumbnail: '/Search/Netflix/Netflix (iOS).png',
				annotation: 'Auto-playing trailers and preview content create "TV channel" experience. Curated serendipity delivers "unexpected but familiar" recommendations. Absence of detailed metadata discourages intentional exploration, reinforcing "browse" mindset.'
			}
		]
	},
	{
		appId: 'netflix',
		dimensionId: 'agency-nudging',
		keyInsight: 'Subtle guidance, limited agency',
		analysis: 'Netflix\'s approach to user agency is sophisticated and subtle. Users rarely feel explicitly manipulated—there are no obvious "sponsored" placements or heavy-handed recommendations. Instead, agency is constrained through omission: you can\'t see what you don\'t see. The platform doesn\'t tell you what to watch; it simply limits your options to pre-selected recommendations, making the choice feel free even as it\'s heavily constrained.\n\nThe interface creates an illusion of abundant choice through visual density—rows upon rows of content—while actually narrowing selection through algorithmic filtering. Users feel empowered ("I\'m browsing all these options") without realizing they\'re seeing perhaps 5% of Netflix\'s catalog, selected specifically for them. The search function exists as a pressure valve for users who know exactly what they want, but it\'s deliberately secondary to the recommendation feed.\n\nThis creates a complex emotional experience. Users who align with Netflix\'s algorithmic profile feel served—the app "understands" their taste and makes discovery effortless. But users who don\'t fit neat algorithmic categories, or who want to explore beyond their established patterns, can feel constrained and frustrated. The platform nudges heavily toward engagement-optimized choices (shows you\'re likely to binge) over user-preferred choices (what you actually came to find), and this misalignment can erode trust over time even as it maximizes short-term watch time.',
		screenshots: [
			{
				src: '/Search/Netflix/Netflix (iOS).png',
				alt: 'Netflix agency and nudging',
				thumbnail: '/Search/Netflix/Netflix (iOS).png',
				annotation: 'Rows upon rows create illusion of abundant choice while showing only 5% of catalog. Algorithmic filtering constrains options subtly—users don\'t realize they\'re viewing pre-selected recommendations. Search exists as secondary pressure valve.'
			}
		]
	},

	// YouTube analyses
	{
		appId: 'youtube',
		dimensionId: 'discovery-patterns',
		keyInsight: 'Hybrid search-algorithm model',
		analysis: 'YouTube strikes a deliberate balance between user-controlled search and platform-guided recommendations, creating a hybrid discovery model that serves multiple use cases. The home feed is algorithmically driven with personalized recommendations, but search is equally prominent—accessible from every screen with robust filtering, sorting, and refinement options. This dual approach accommodates both "lean back" passive browsing and "lean forward" active seeking.\n\nThe platform\'s recommendation algorithm is sophisticated and visible. The home feed presents "Recommended," the sidebar during video playback suggests related content, and the "Up next" autoplay queue creates continuous viewing paths. Unlike Netflix, YouTube shows algorithmic reasoning: "Because you watched," "From channels you follow," "Previously watched." This transparency creates a sense of partnership—the algorithm is helping, not controlling.\n\nUser control is substantial. You can search with intent, filter by upload date, sort by relevance or view count, browse channel pages chronologically, and maintain subscriptions that bypass the algorithm entirely. The discovery pattern reflects YouTube\'s dual nature as both entertainment platform and search engine. Users feel empowered to find specific content while still benefiting from algorithmic discovery for exploratory browsing.',
		screenshots: [
			{
				src: '/Search/YouTube/YouTube (iOS).png',
				alt: 'YouTube discovery patterns',
				thumbnail: '/Search/YouTube/YouTube (iOS).png',
				annotation: 'Home feed shows algorithmic recommendations with visible reasoning ("Because you watched"). Search is equally prominent with robust filtering. Dual approach supports both passive browsing and active seeking. Transparency creates partnership feeling.'
			}
		]
	},
	{
		appId: 'youtube',
		dimensionId: 'choice-architecture',
		analysis: 'YouTube\'s choice architecture reveals a sophisticated understanding of different user modes and intentions. The home feed uses infinite scroll with large thumbnails and algorithmic recommendations, optimized for casual browsing. But crucially, YouTube offers escape routes from the algorithmic feed: prominent search, channel subscriptions with chronological ordering, and playlist functionality all provide structured alternatives to passive scrolling.\n\nThe interface makes algorithmic influence visible through labels and explanations, allowing users to understand and adjust their discovery experience. "Not interested" and "Don\'t recommend channel" options give users control over the algorithm\'s evolution. Video preview cards include substantial metadata—view counts, upload dates, channel verification—allowing users to make informed decisions using both algorithmic and objective criteria.\n\nThis architecture supports diverse decision-making patterns. Users seeking specific content can search and filter precisely. Users exploring a topic can start with search and follow algorithmic suggestions. Users wanting creator-driven content can rely on subscriptions. The platform accommodates goal-directed search, algorithmic discovery, and creator-follower relationships simultaneously. However, the autoplay defaults and persuasive "up next" queue can still override user intention, pulling browsers into extended viewing sessions they didn\'t initially plan.',
		screenshots: [
			{
				src: '/Search/YouTube/YouTube (iOS).png',
				alt: 'YouTube choice architecture',
				thumbnail: '/Search/YouTube/YouTube (iOS).png',
				annotation: 'Video cards include substantial metadata: view counts, upload dates, channel verification. "Not interested" and "Don\'t recommend channel" options give users algorithm control. Multiple escape routes from algorithmic feed: search, subscriptions, playlists.'
			}
		]
	},
	{
		appId: 'youtube',
		dimensionId: 'business-alignment',
		analysis: 'YouTube\'s business model depends on ad impressions, which requires maximizing both watch time and content diversity. This creates different incentives than subscription services: YouTube benefits from varied browsing patterns that expose users to different ad categories and creator niches. The hybrid discovery model directly serves this goal by supporting multiple content consumption patterns.\n\nAlgorithmic recommendations drive engagement and watch time—the more videos you watch, the more ads YouTube serves. But robust search and channel subscriptions keep creators invested in the platform by providing direct audience access, which sustains content supply. YouTube needs both algorithmic and organic discovery to maintain its content ecosystem. The platform can\'t over-optimize for algorithmic control without alienating creators who rely on subscriber bases.\n\nThe "up next" autoplay feature is a pure monetization mechanism, designed to keep users watching video after video, generating continuous ad inventory. However, YouTube also supports features that seemingly reduce watch time—like quality search, chronological subscriptions, and detailed filtering—because they sustain long-term platform health by maintaining creator incentives and user trust. The business model requires a delicate balance: enough algorithmic guidance to maximize watch time, enough user control to maintain creator and viewer satisfaction.',
		screenshots: [
			{
				src: '/Search/YouTube/YouTube (iOS).png',
				alt: 'YouTube business model alignment',
				thumbnail: '/Search/YouTube/YouTube (iOS).png',
				annotation: 'Ad-supported model benefits from varied browsing exposing users to different ad categories. "Up next" autoplay maximizes continuous viewing and ad inventory. Robust search and subscriptions keep creators invested, sustaining content supply.'
			}
		]
	},
	{
		appId: 'youtube',
		dimensionId: 'user-psychology',
		keyInsight: 'Supporting multiple browsing mindsets',
		analysis: 'YouTube\'s discovery design accommodates a remarkable range of user psychological states and intentions. Users arrive at YouTube with diverse goals: learning something specific (goal-directed), finding entertainment (serendipitous), following creators (relationship-driven), or researching topics (exploratory). The platform\'s hybrid architecture supports all these modes rather than forcing users into a single discovery pattern.\n\nFor goal-directed users, YouTube functions as a search engine with powerful filtering and sorting. For serendipity-seekers, the algorithmic home feed provides an endless stream of recommendations. For relationship-focused users, subscriptions create direct creator connections. This flexibility builds trust because users feel the platform adapts to their needs rather than imposing a single interaction model.\n\nHowever, this flexibility has psychological costs. The abundance of choice—searchable content, algorithmic recommendations, subscription feeds, trending videos—can create decision fatigue. The infinite nature of YouTube combined with personalized recommendations creates a "rabbit hole" effect where users lose track of time and watch far more than intended. The psychological satisfaction of completing a chosen activity (finding a specific video) is often undermined by algorithmic nudges toward extended viewing sessions.',
		screenshots: [
			{
				src: '/Search/YouTube/YouTube (iOS).png',
				alt: 'YouTube user psychology',
				thumbnail: '/Search/YouTube/YouTube (iOS).png',
				annotation: 'Platform accommodates diverse user intentions: learning (goal-directed), entertainment (serendipitous), following creators (relationship-driven), researching topics (exploratory). Flexibility builds trust but abundance of choice can create decision fatigue.'
			}
		]
	},
	{
		appId: 'youtube',
		dimensionId: 'agency-nudging',
		analysis: 'YouTube\'s approach to agency is more transparent than most platforms. Users can understand how the algorithm works, adjust their subscriptions, use search extensively, and even train the algorithm through explicit feedback ("not interested," "don\'t recommend"). This creates a genuine sense of partnership—the platform provides powerful discovery tools while still respecting user intention when clearly expressed.\n\nHowever, the platform still nudges heavily through autoplay, "up next" recommendations, and the visually prominent algorithmic feed. The default settings favor continuous watching over intentional viewing. Users must actively resist these nudges by disabling autoplay, manually returning to search, or strictly using subscriptions. The path of least resistance always leads to algorithm-guided extended viewing.\n\nThis creates an experience where users feel empowered in the moment (I can search for exactly what I want) but may later realize they spent far more time than intended following algorithmic suggestions. The agency is real but requires active assertion against default behaviors. Users who passively browse will find themselves guided into extended viewing sessions optimized for platform metrics rather than personal goals. YouTube provides the tools for user control but structures the default experience around platform-guided discovery.',
		screenshots: [
			{
				src: '/Search/YouTube/YouTube (iOS).png',
				alt: 'YouTube agency vs nudging',
				thumbnail: '/Search/YouTube/YouTube (iOS).png',
				annotation: 'Transparent algorithm with explicit feedback options ("not interested"). Users can search extensively, use subscriptions, train the algorithm. But autoplay and "up next" still nudge toward extended viewing. Agency requires active assertion against defaults.'
			}
		]
	},

	// Airbnb analyses
	{
		appId: 'airbnb',
		dimensionId: 'discovery-patterns',
		keyInsight: 'User-driven filter-heavy search',
		analysis: 'Airbnb employs a fundamentally different discovery model from entertainment platforms: user-controlled, filter-heavy search designed for goal-directed browsing. Users arrive with specific intentions (location, dates, budget, guest count) and the platform provides extensive filtering tools to narrow results. There are no algorithmic "Top Picks" without user input—discovery begins with user parameters, not platform recommendations.\n\nThe search and filtering interface is extraordinarily detailed: price range, property type, amenities (pool, wifi, kitchen), house rules (pet-friendly, smoking allowed), accessibility features, and more. Users can layer multiple filters to create highly specific queries. Map-based browsing provides geographical control, allowing users to explore by neighborhood rather than accepting algorithmic suggestions. Sorting options (price, rating, distance) give users multiple lenses for evaluating results.\n\nPlatform guidance exists but is secondary and contextual. "Guest favorite" badges, Superhost indicators, and review scores provide algorithmic signals, but they enhance user-driven search rather than replacing it. Airbnb\'s recently viewed and saved listings help users track their own discovery process, but there\'s no imposed recommendation feed. This pattern reflects Airbnb\'s transactional nature: users know what they need (a place to stay), and the platform facilitates finding it rather than suggesting what to search for.',
		screenshots: [
			{
				src: '/Search/Airbnb/Airbnb (iOS).png',
				alt: 'Airbnb discovery patterns',
				thumbnail: '/Search/Airbnb/Airbnb (iOS).png',
				annotation: 'Discovery begins with user parameters: location, dates, budget, guest count. Extensive filtering tools (amenities, property type, house rules) allow highly specific queries. Map-based browsing provides geographical control. No algorithmic "Top Picks" without input.'
			}
		]
	},
	{
		appId: 'airbnb',
		dimensionId: 'choice-architecture',
		keyInsight: 'Filters for confident booking',
		analysis: 'Airbnb\'s choice architecture is designed to support confident, high-stakes decision-making. Unlike entertainment platforms where choosing wrong means wasting 20 minutes, choosing the wrong accommodation affects an entire trip. The interface reflects this by providing dense information and extensive filtering to reduce uncertainty and support rational evaluation.\n\nProperty cards display critical decision-making information upfront: total price (not just per-night), location on map, rating with review count, and high-quality photos. Detail pages provide exhaustive information: amenities, house rules, cancellation policy, host profile, detailed reviews, and calendar availability. This information density serves decisive browsing—users can eliminate options confidently based on objective criteria.\n\nThe filtering interface uses a progressive disclosure pattern. Basic filters (price, dates, guests) appear first, with advanced filters (amenities, property type, house rules) available through expandable menus. This architecture recognizes that some users need simple filtering while others require precise control. The map view and list view offer different mental models for browsing—geographical context versus comparative evaluation—acknowledging that users approach spatial decisions differently. The architecture prioritizes enabling confident choices over minimizing cognitive effort.',
		screenshots: [
			{
				src: '/Search/Airbnb/Airbnb (iOS).png',
				alt: 'Airbnb choice architecture',
				thumbnail: '/Search/Airbnb/Airbnb (iOS).png',
				annotation: 'Property cards show critical info upfront: total price, location on map, rating with review count. Detail pages provide exhaustive information: amenities, house rules, cancellation policy, host profile, reviews. Information density supports confident high-stakes decisions.'
			}
		]
	},
	{
		appId: 'airbnb',
		dimensionId: 'business-alignment',
		analysis: 'Airbnb\'s business model depends on booking conversion: the platform takes a percentage of each transaction, so its discovery design must optimize for both browsing engagement and confident booking decisions. This creates different incentives than pure engagement platforms—Airbnb benefits from users making decisions quickly and confidently rather than browsing indefinitely.\n\nExtensive filtering serves conversion by helping users find appropriate matches quickly, reducing the frustration that leads to abandonment. Detailed property information and reviews build trust, addressing the unique risks of peer-to-peer accommodation booking. Transparent pricing (total cost shown upfront, fees clearly itemized) reduces booking friction by eliminating surprises at checkout. These features may slow initial browsing but increase conversion rates by building confidence.\n\nHowever, Airbnb also employs subtle conversion optimization: "Limited availability" messages create urgency, "Guest favorite" badges leverage social proof, and the platform highlights high-quality listings that are more likely to convert. Search result rankings balance user preferences with conversion likelihood—a purely user-optimized algorithm might show the cheapest options first, but Airbnb weights quality and host responsiveness to reduce booking failures and negative experiences that could reduce future bookings. The discovery design serves conversion while maintaining enough user control to preserve trust.',
		screenshots: [
			{
				src: '/Search/Airbnb/Airbnb (iOS).png',
				alt: 'Airbnb business model alignment',
				thumbnail: '/Search/Airbnb/Airbnb (iOS).png',
				annotation: 'Booking conversion model requires confident decisions. Extensive filtering reduces frustration and abandonment. Transparent pricing (total cost upfront, fees itemized) eliminates checkout surprises. "Limited availability" and "Guest favorite" badges create urgency and social proof.'
			}
		]
	},
	{
		appId: 'airbnb',
		dimensionId: 'user-psychology',
		analysis: 'Airbnb\'s discovery design operates in a psychological space dominated by goal-directed search with high stakes—users are making accommodation decisions that significantly impact their trips and involve substantial money. The platform must address trust concerns (Is this place as described?), uncertainty (Will it meet my needs?), and risk aversion (What if something goes wrong?) while facilitating confident decision-making.\n\nThe extensive filtering and detailed information serve psychological needs for control and certainty. Users can specify requirements precisely, reducing anxiety about booking something unsuitable. Reviews and ratings provide social proof, essential for trust in peer-to-peer transactions. Host profiles and response rates address concerns about communication and reliability. Photos and detailed descriptions reduce surprises. This transparency creates psychological safety that enables transactions between strangers.\n\nHowever, the abundance of choice and detailed information can create decision paralysis. With hundreds of options meeting their criteria, users may struggle to commit, constantly wondering if a better option exists. The map view, while useful, can make the search feel overwhelming by visualizing just how many choices exist. Airbnb balances this with trust signals (Superhost, Guest Favorite) and sorting options that help narrow choices. The platform designs for serendipity less than goal achievement—users rarely stumble upon a booking; they methodically search and evaluate until confident.',
		screenshots: [
			{
				src: '/Search/Airbnb/Airbnb (iOS).png',
				alt: 'Airbnb user psychology',
				thumbnail: '/Search/Airbnb/Airbnb (iOS).png',
				annotation: 'High-stakes decisions require control and certainty. Extensive filtering addresses anxiety about booking something unsuitable. Reviews and host profiles provide trust in peer-to-peer transactions. Photos and descriptions reduce surprises. Abundance of choice can create paralysis.'
			}
		]
	},
	{
		appId: 'airbnb',
		dimensionId: 'agency-nudging',
		keyInsight: 'User agency with conversion nudges',
		analysis: 'Airbnb provides substantial user agency—perhaps more than any mainstream consumer platform. Users control nearly every aspect of discovery: search criteria, filters, sorting, map browsing, and saved searches. The platform rarely imposes recommendations without user initiation. This agency is necessary for the high-stakes nature of accommodation booking; users need to feel in control when making expensive, consequential decisions.\n\nHowever, Airbnb employs sophisticated nudging within this user-controlled framework. Search rankings aren\'t purely objective—they weight factors like booking likelihood, host quality, and platform priorities. "Limited availability" messages and "booking soon" indicators create artificial urgency. "Guest favorite" and "Superhost" badges guide choices toward platform-preferred listings. Dynamic pricing highlights like "25% off" frame decisions around perceived deals. These nudges operate within user-defined parameters but influence which options rise to attention.\n\nThe result is a browsing experience that feels empowering—users believe they\'re making independent, well-informed decisions—while still being subtly guided toward outcomes favorable to Airbnb. The platform doesn\'t override user intention but shapes the choice environment to favor certain decisions. Users rarely feel manipulated because the agency is genuine in most respects, but the platform still structures discovery to optimize conversions. This sophisticated balance maintains trust while serving business goals, recognizing that in high-stakes decisions, too much overt nudging undermines confidence and reduces conversions.',
		screenshots: [
			{
				src: '/Search/Airbnb/Airbnb (iOS).png',
				alt: 'Airbnb agency and nudging',
				thumbnail: '/Search/Airbnb/Airbnb (iOS).png',
				annotation: 'Substantial user control over search, filters, sorting, map browsing. Platform rarely imposes recommendations without user initiation. But rankings weight booking likelihood, "booking soon" creates urgency, badges guide toward platform-preferred listings. Nudges within user-controlled framework.'
			}
		]
	}
];
