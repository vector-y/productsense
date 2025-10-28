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
	},
	{
		id: 'comparative',
		name: 'Comparative Analysis',
		icon: '/comparative.png'
	}
];

export const dimensions: Dimension[] = [
	{
		id: 'user-control-platform-control',
		number: 1,
		title: 'User Control vs. Platform Control',
		description: 'Where does the platform guide the user (recommendations, rankings) versus where does the user control discovery (search, filters)? How does this balance affect the feeling of agency?'
	},
	{
		id: 'decision-making-experience',
		number: 2,
		title: 'Decision-Making Experience',
		description: 'How do UI patterns like infinite scroll, filter trees, and "because you watched…" influence decision quality? What does the interface reveal about how the platform wants users to make choices?'
	},
	{
		id: 'user-psychology',
		number: 3,
		title: 'User Psychology',
		description: 'Where do you see design for serendipity versus design for goal-directed search? How do discovery patterns impact trust, satisfaction, or frustration?'
	}
];

export const analysisContent: AnalysisContent[] = [
	// Comparative analysis
	{
		appId: 'comparative',
		dimensionId: 'user-control-platform-control',
		keyInsight: 'Platform guidance vs. user agency',
		analysis: '<strong>Where does the platform guide the user (recommendations, rankings) versus where does the user control discovery (search, filters)?</strong>\n\n<em>Netflix</em> generally tries to guide users to a primary recommendation, and a long list of suggestions below "For You" if you\'re not happy with the first option. Their app optimizes for a lot of variety by having a large volume of choices up front. Netflix uses top hits as one of their primary ways to help suggest ideas for what to watch next. User control is also pretty nuanced by even allowing users to search by the actor\'s name, not just key words in a show/movie. Filters based on genre are also prominently displayed and available for users to take advantage of.\n\nComparatively, <em>YouTube</em> has more focus on one media source at a time as opposed to Netflix. There\'s a push for YouTube shorts to be featured, with 4 shorts being highlighted at the top, community posts, and of course videos. There\'s a pattern of 4 shorts, a community post, and 3 videos for the first two full screen scrolls. From there, the content becomes a bit less relevant since a majority of interactions will happen within those first 2 major scroll areas. User control is clear with the search bar input and is one of the most important parts of the app. There is a native voice input in the app itself and a search history to quickly jump back to previous search results. Users can also filter on a wide range of ideas from Relevance, Upload date, View count, Rating, etc. that will cover most topics and general ideas people are looking for.\n\n<em>Airbnb</em> stands out because it isn\'t media they\'re helping people search, it\'s really about experiences and stays. The app covers the 3 big questions of "Where?" "When?" "Who?", and provides beautifully crafted components to help make the selection process fun. Everything from selecting the city, to picking out the date range from days, to months, or even "flexible". Airbnb helps suggest stays that range from the weekend, to the week, or even a month. Users have heavy agency over how they might want to filter results which empowers them to help convert initial interests to successfully booking a trip.\n\n<strong>How does this balance affect the feeling of agency?</strong>\n\nAlgorithms will always have a big influence over how layouts are presented to the user, but agency features are what helps convert user interest to action. Agency seems a bit removed when math is being used to determine what you want to see next, but most people are happy with getting recommendations. The problematic aspect would be some of the biases that go into those algorithms, and making sure they\'re objective and not projecting ideas that the user otherwise would not want to see. These biases can include engagement optimization (promoting clickbait or inflammatory content because it drives views), echo chambers (reinforcing existing preferences rather than exposing diverse perspectives), and commercial interests (prioritizing content from partners or advertisers). I think being able to filter and fine tune the results will always be the key to having happy users stay on the platform longer to get what they were searching for, though platforms must balance this against maintaining control over what\'s filterable to protect their business interests.',
		screenshots: [
			{
				src: '/Search/YouTube/YouTube (iOS).png',
				alt: 'YouTube interface showing search-first design',
				thumbnail: '/Search/YouTube/YouTube (iOS).png',
				label: '1 - YouTube',
				annotation: 'YouTube features 4 shorts at top, followed by community posts and videos in first 2 scrolls. Search bar is prominent with native voice input and search history. Users can filter by Relevance, Upload date, View count, Rating, and more.'
			},
			{
				src: '/Search/Netflix/Netflix (iOS).png',
				alt: 'Netflix interface showing guided discovery',
				thumbnail: '/Search/Netflix/Netflix (iOS).png',
				label: '2 - Netflix',
				annotation: 'Netflix guides users to primary recommendations with a long list of "For You" suggestions. Top hits help suggest what to watch next. Genre filters are prominently displayed, and search allows queries by actor name, not just keywords.'
			},
			{
				src: '/Search/Airbnb/Airbnb (iOS) Where.png',
				alt: 'Airbnb interface showing Where selection',
				thumbnail: '/Search/Airbnb/Airbnb (iOS) Where.png',
				label: '3 - Airbnb',
				annotation: 'Airbnb focuses on experiences and stays, covering "Where?" "When?" "Who?" with beautifully crafted components. Users can select cities, date ranges (days, months, "flexible"), and filter extensively to convert interest into bookings.'
			}
		]
	},
	{
		appId: 'comparative',
		dimensionId: 'decision-making-experience',
		keyInsight: 'Choice architecture shapes user experience',
		analysis: '<strong>How does the discovery pattern make users feel? Empowered, overwhelmed, or nudged?</strong>\n\n<em>Netflix</em> is definitely overwhelming with its large volume because its infinite scroll and autoplay trailers create sensory overload without clear stopping points. <em>YouTube</em> is more empowering for the user since there is less being thrown at you at once, with a prominent search bar and clear video cards that give users control over what to engage with. <em>Airbnb</em>\'s suggestions feel more like nudges that lead to empowerment through the amazing filtering tools that are available, balancing initial recommendations with extensive user controls.\n\n<strong>How does choice architecture (e.g., infinite scroll, filter trees, "because you watched…") influence decision quality?</strong>\n\n<em>Netflix</em> has a heavy reliance on previously watched shows to help build a profile of what tastes and preferences you have for your media. It\'s presented in a way where ratings have a greater influence on what decision is made next by the user.\n\n<em>YouTube</em>\'s infinite scroll is there, but people usually don\'t utilize it past the first couple of scrolls because the most interesting content usually sits on top. This is by design: YouTube\'s algorithm front-loads the most relevant and engaging results to capture attention quickly, though it also reveals a strategic choice to prioritize immediate engagement over comprehensive exploration.\n\n<em>Airbnb</em> has a very well thought out filtering system that gets people exactly what they want. This ability to fine tune and present it beautifully is what helps them stand out against the competition of traditional hotel stays.',
		screenshots: [
			{
				src: '/Search/Airbnb/Airbnb (iOS).png',
				alt: 'Airbnb choice architecture',
				thumbnail: '/Search/Airbnb/Airbnb (iOS).png',
				label: '1 - Airbnb',
				annotation: 'Airbnb\'s interface presents curated property suggestions while offering extensive filter controls—creating initial nudges that quickly transform into user empowerment. The beautifully designed filtering system (price, amenities, property type, location) lets users fine-tune results with precision, converting browsing overwhelm into confident decision-making that outpaces traditional hotel search experiences.'
			},
			{
				src: '/Search/Netflix/Netflix (iOS) contextual.png',
				alt: 'Netflix contextual recommendations',
				thumbnail: '/Search/Netflix/Netflix (iOS) contextual.png',
				label: '2 - Netflix',
				annotation: 'Netflix\'s contextual recommendation rows ("Because you watched...") make algorithmic personalization visible, building user profiles from viewing history. Prominent rating displays (thumbs up/down, match percentages) shift decision-making power toward Netflix\'s algorithmic judgments rather than objective metadata, creating a choice architecture where past behavior heavily influences future decisions.'
			},
			{
				src: '/Search/YouTube/YouTube (iOS) result.png',
				alt: 'YouTube search interface',
				thumbnail: '/Search/YouTube/YouTube (iOS) result.png',
				label: '3 - YouTube',
				annotation: 'YouTube\'s search results concentrate value at the top through algorithmic relevance ranking combined with engagement metrics (view counts, upload dates, verified badges). This front-loaded design means users rarely scroll beyond the first few results—the most interesting content sits prominently above the fold, reducing decision fatigue but also limiting serendipitous discovery deeper in results.'
			}
		]
	},
	{
		appId: 'comparative',
		dimensionId: 'user-psychology',
		keyInsight: 'Balancing serendipity and goal-directed search',
		analysis: '<strong>Where do you see design for serendipity vs. design for goal-directed search?</strong>\n\nI see serendipity in the frosted glass background from <em>Netflix\'s</em> genre list people browse from, the large wheel selection component in <em>Airbnb\'s</em> month filter, and the fun illustrations included in the boring results like "No results found" from <em>YouTube</em>. With more goal directed searching, I found the search bar to be essential across all 3 apps. Goal directed searches are usually pretty straightforward with a query and then the ability to fine tune with filters before or after the fact (mostly after, but Airbnb is proactive).\n\n<strong>How do discovery patterns impact trust, satisfaction, or frustration?</strong>\n\nDiscovery patterns might turn people away if the algorithm comes up with bad suggestions, and to have it even happen once is very impactful on user trust. Platforms recover from broken trust through mechanisms like explicit feedback (thumbs down, "not interested"), algorithm resets, or diversification of recommendations, though these recovery paths aren\'t always obvious to users. There starts to be an association between perceived value and reality when user expectations are subverted to make their lives more difficult. I find that a solid discovery pattern changes as their user base changes over time, and to bring in new features and ideas there must always be a way to develop and test out these patterns effectively. For instance, Netflix constantly A/B tests thumbnail artwork and row ordering, YouTube experiments with Shorts placement and home feed algorithms, and Airbnb tests filter prominence and default sorting to optimize for bookings without overwhelming users.',
		screenshots: [
			{
				src: '/Search/Netflix/Netflix (iOS) cList.png',
				alt: 'Netflix genre list with frosted glass background',
				thumbnail: '/Search/Netflix/Netflix (iOS) cList.png',
				label: '1 - Netflix',
				annotation: 'Netflix\'s genre category list features a frosted glass background effect that creates visual depth while users browse. This serendipitous browsing experience encourages exploration across different content categories, making the discovery process feel more engaging and less utilitarian.'
			},
			{
				src: '/Search/Airbnb/Airbnb (iOS) MonthM.png',
				alt: 'Airbnb month wheel selector',
				thumbnail: '/Search/Airbnb/Airbnb (iOS) MonthM.png',
				label: '2 - Airbnb',
				annotation: 'Airbnb\'s large wheel selection component for choosing trip duration (showing "3 months") turns a functional filter into a delightful interaction. The tactile, visual design makes selecting dates feel playful rather than purely transactional, balancing goal-directed search with serendipitous discovery.'
			},
			{
				src: '/Search/YouTube/YouTube (iOS) not found.png',
				alt: 'YouTube no results found with fun illustration',
				thumbnail: '/Search/YouTube/YouTube (iOS) not found.png',
				label: '3 - YouTube',
				annotation: 'YouTube\'s "No results found" page includes a colorful, whimsical illustration of a person with a camera and telescope. This design choice transforms a potentially frustrating dead-end into a lighter moment, maintaining user engagement even when search fails and encouraging users to try different keywords.'
			}
		]
	},

	// Netflix analyses
	{
		appId: 'netflix',
		dimensionId: 'user-control-platform-control',
		keyInsight: 'Guided discovery with nuanced control',
		analysis: 'Netflix generally tries to guide users to a primary recommendation, and a long list of suggestions below "For You" if you\'re not happy with the first option. Their app optimizes for a lot of variety by having a large volume of choices up front. Netflix uses top hits as one of their primary ways to help suggest ideas for what to watch next.\n\nUser control is also pretty nuanced by even allowing users to search by the actor\'s name, not just key words in a show/movie. Filters based on genre are also prominently displayed and available for users to take advantage of.\n\n<strong>How does this balance affect the feeling of agency?</strong>\n\nAlgorithms will always have a big influence over how layouts are presented to the user, but agency features are what helps convert user interest to action. Agency seems a bit removed when math is being used to determine what you want to see next, but most people are happy with getting recommendations. The problematic aspect would be some of the biases that go into those algorithms, and making sure they\'re objective and not projecting ideas that the user otherwise would not want to see. These biases can include engagement optimization (promoting clickbait or inflammatory content because it drives views), echo chambers (reinforcing existing preferences rather than exposing diverse perspectives), and commercial interests (prioritizing content from partners or advertisers). I think being able to filter and fine tune the results will always be the key to having happy users stay on the platform longer to get what they were searching for, though platforms must balance this against maintaining control over what\'s filterable to protect their business interests.',
		screenshots: [
			{
				src: '/Search/Netflix/Netflix (iOS).png',
				alt: 'Netflix interface showing guided discovery',
				thumbnail: '/Search/Netflix/Netflix (iOS).png',
				annotation: 'Netflix guides users to primary recommendations with a long list of "For You" suggestions. Top hits help suggest what to watch next. Genre filters are prominently displayed, and search allows queries by actor name, not just keywords.'
			}
		]
	},
	{
		appId: 'netflix',
		dimensionId: 'decision-making-experience',
		analysis: 'Netflix\'s choice architecture is meticulously designed to minimize decision paralysis while maximizing engagement. The infinite scroll of personalized rows creates a "lean back" browsing experience where users can passively explore without the cognitive burden of active filtering. Each row is thematically organized but algorithmically populated—"Critically Acclaimed Dramas" sounds like a category, but it\'s actually a personalized selection.\n\nThe interface employs several persuasive patterns: auto-playing trailers grab attention as you browse, large preview cards with minimal text prioritize visual appeal over information density, and the "Top 10" lists leverage social proof to guide choices. The lack of release dates, ratings, or detailed metadata in browse views keeps users focused on Netflix\'s recommendations rather than objective criteria. When users want objective information, they often resort to workarounds like searching externally on IMDb or Rotten Tomatoes, creating friction that Netflix accepts to maintain control over the browsing experience.\n\nThis architecture reveals Netflix\'s preferred user behavior: they want you browsing within their curated selections, not searching with intent. Decision-making feels effortless because options are pre-filtered, but this also means you\'re only seeing what Netflix chooses to show. The endless scroll can trigger "choice overload"—so many options yet nothing feels quite right—precisely because every option is algorithmically similar to your past behavior, creating a paradox of constrained variety. This serves Netflix\'s goal of maximizing watch time but risks churn if users repeatedly fail to find satisfying content, a tension Netflix addresses through constant algorithmic refinement and content library expansion.',
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
		dimensionId: 'user-psychology',
		analysis: 'Netflix\'s discovery design leans heavily into serendipity over goal-directed search, but it\'s a curated serendipity that prioritizes comfort over surprise. The algorithmic feed is designed to deliver "unexpected but familiar" recommendations—content that feels like a pleasant discovery but stays within your established preferences. This creates a psychological comfort zone that\'s engaging but rarely challenging. When users want to be challenged or explore outside their bubble, they must actively work against the interface by using search or manually browsing underrepresented genres.\n\nThe absence of detailed metadata, sorting options, or comprehensive catalogs discourages intentional exploration. When users arrive at Netflix, they\'re typically in a "browse" mindset rather than a "search" mindset—the interface reinforces this by making passive scrolling the primary interaction. The auto-playing trailers and preview content create a "TV channel" experience where content comes to you rather than requiring active seeking.\n\nThis psychology has tradeoffs. Users who trust Netflix\'s recommendations experience low-friction satisfaction—open the app, scroll briefly, start watching. But users seeking specific types of content or wanting to explore outside their comfort zones can feel frustrated by the lack of control. The "filter bubble" effect is real: Netflix\'s algorithms tend to reinforce existing preferences rather than broadening tastes, creating long-term satisfaction concerns even as short-term engagement remains high. Netflix addresses this through occasional "diversity injections" in recommendations and genre-spanning categories, though these efforts remain secondary to the primary engagement-focused algorithm.',
		screenshots: [
			{
				src: '/Search/Netflix/Netflix (iOS).png',
				alt: 'Netflix user psychology',
				thumbnail: '/Search/Netflix/Netflix (iOS).png',
				annotation: 'Auto-playing trailers and preview content create "TV channel" experience. Curated serendipity delivers "unexpected but familiar" recommendations. Absence of detailed metadata discourages intentional exploration, reinforcing "browse" mindset.'
			}
		]
	},

	// YouTube analyses
	{
		appId: 'youtube',
		dimensionId: 'user-control-platform-control',
		keyInsight: 'Search-first with curated content streams',
		analysis: 'YouTube has more focus on one media source at a time as opposed to Netflix. There\'s a push for YouTube shorts to be featured, with 4 shorts being highlighted at the top, community posts, and of course videos. There\'s a pattern of 4 shorts, a community post, and 3 videos for the first two full screen scrolls. From there, the content becomes a bit less relevant since a majority of interactions will happen within those first 2 major scroll areas.\n\nUser control is clear with the search bar input and is one of the most important parts of the app. There is a native voice input in the app itself and a search history to quickly jump back to previous search results. Users can also filter on a wide range of ideas from Relevance, Upload date, View count, Rating, etc. that will cover most topics and general ideas people are looking for.\n\n<strong>How does this balance affect the feeling of agency?</strong>\n\nYouTube\'s control balance is uniquely shaped by its creator economy: users often follow specific channels and creators, giving them agency through subscription feeds that bypass algorithmic control. This creator-viewer relationship adds a third dimension beyond platform control and user control. Algorithms will always have a big influence over how layouts are presented to the user, but agency features are what helps convert user interest to action. Agency seems a bit removed when math is being used to determine what you want to see next, but most people are happy with getting recommendations. The problematic aspect would be some of the biases that go into those algorithms, and making sure they\'re objective and not projecting ideas that the user otherwise would not want to see. These biases can include engagement optimization (promoting clickbait or inflammatory content because it drives views), echo chambers (reinforcing existing preferences rather than exposing diverse perspectives), and commercial interests (prioritizing content from partners or advertisers). I think being able to filter and fine tune the results will always be the key to having happy users stay on the platform longer to get what they were searching for, though platforms must balance this against maintaining control over what\'s filterable to protect their business interests.',
		screenshots: [
			{
				src: '/Search/YouTube/YouTube (iOS).png',
				alt: 'YouTube interface showing search-first design',
				thumbnail: '/Search/YouTube/YouTube (iOS).png',
				annotation: 'YouTube features 4 shorts at top, followed by community posts and videos in first 2 scrolls. Search bar is prominent with native voice input and search history. Users can filter by Relevance, Upload date, View count, Rating, and more.'
			}
		]
	},
	{
		appId: 'youtube',
		dimensionId: 'decision-making-experience',
		analysis: 'YouTube\'s choice architecture reveals a sophisticated understanding of different user modes and intentions. The home feed uses infinite scroll with large thumbnails and algorithmic recommendations, optimized for casual browsing. But crucially, YouTube offers escape routes from the algorithmic feed: prominent search, channel subscriptions with chronological ordering, and playlist functionality all provide structured alternatives to passive scrolling.\n\nThe interface makes algorithmic influence visible through labels and explanations, allowing users to understand and adjust their discovery experience. "Not interested" and "Don\'t recommend channel" options give users control over the algorithm\'s evolution. Video preview cards include substantial metadata—view counts, upload dates, channel verification—allowing users to make informed decisions using both algorithmic and objective criteria. This hybrid approach tends to improve decision quality compared to purely algorithmic systems like Netflix, as users can cross-reference recommendations against objective signals and their own judgment.\n\nThis architecture supports diverse decision-making patterns. Users seeking specific content can search and filter precisely. Users exploring a topic can start with search and follow algorithmic suggestions. Users wanting creator-driven content can rely on subscriptions. The platform accommodates goal-directed search, algorithmic discovery, and creator-follower relationships simultaneously. However, the autoplay defaults and persuasive "up next" queue can still override user intention, pulling browsers into extended viewing sessions they didn\'t initially plan.',
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
		dimensionId: 'user-psychology',
		keyInsight: 'Supporting multiple browsing mindsets',
		analysis: 'YouTube\'s discovery design accommodates a remarkable range of user psychological states and intentions. Users arrive at YouTube with diverse goals: learning something specific (goal-directed), finding entertainment (serendipitous), following creators (relationship-driven), or researching topics (exploratory). The platform\'s hybrid architecture supports all these modes rather than forcing users into a single discovery pattern.\n\nFor goal-directed users, YouTube functions as a search engine with powerful filtering and sorting. For serendipity-seekers, the algorithmic home feed provides an endless stream of recommendations. For relationship-focused users, subscriptions create direct creator connections. This flexibility builds trust because users feel the platform adapts to their needs rather than imposing a single interaction model. Specific trust signals reinforce this: verified channel badges, view count transparency, visible upload dates, and community-driven features like comments and likes all create accountability that pure algorithmic systems lack.\n\nHowever, this flexibility has psychological costs. The abundance of choice—searchable content, algorithmic recommendations, subscription feeds, trending videos—can create decision fatigue. The infinite nature of YouTube combined with personalized recommendations creates a "rabbit hole" effect where users lose track of time and watch far more than intended. The psychological satisfaction of completing a chosen activity (finding a specific video) is often undermined by algorithmic nudges toward extended viewing sessions. Users develop strategies to resist this (disabling autoplay, using watch later lists), though the platform\'s responsibility to balance engagement goals with user wellbeing remains an ongoing ethical question.',
		screenshots: [
			{
				src: '/Search/YouTube/YouTube (iOS).png',
				alt: 'YouTube user psychology',
				thumbnail: '/Search/YouTube/YouTube (iOS).png',
				annotation: 'Platform accommodates diverse user intentions: learning (goal-directed), entertainment (serendipitous), following creators (relationship-driven), researching topics (exploratory). Flexibility builds trust but abundance of choice can create decision fatigue.'
			}
		]
	},

	// Airbnb analyses
	{
		appId: 'airbnb',
		dimensionId: 'user-control-platform-control',
		keyInsight: 'Experience-first with heavy user agency',
		analysis: 'Airbnb stands out because it isn\'t media they\'re helping people search, it\'s really about experiences and stays. The high-stakes nature of booking decisions (spending hundreds to thousands of dollars, affecting entire trips) demands fundamentally different control patterns than entertainment platforms. The app covers the 3 big questions of "Where?" "When?" "Who?", and provides beautifully crafted components to help make the selection process fun. Everything from selecting the city, to picking out the date range from days, to months, or even "flexible". Airbnb helps suggest stays that range from the weekend, to the week, or even a month. Users have heavy agency over how they might want to filter results which empowers them to help convert initial interests to successfully booking a trip.\n\n<strong>How does this balance affect the feeling of agency?</strong>\n\nFor high-stakes decisions like accommodations, agency is not just preferred but required. Users need to feel confident they\'ve thoroughly evaluated options before committing significant money and travel plans. Algorithms will always have a big influence over how layouts are presented to the user, but agency features are what helps convert user interest to action. Agency seems a bit removed when math is being used to determine what you want to see next, but most people are happy with getting recommendations. The problematic aspect would be some of the biases that go into those algorithms, and making sure they\'re objective and not projecting ideas that the user otherwise would not want to see. These biases can include engagement optimization (promoting clickbait or inflammatory content because it drives views), echo chambers (reinforcing existing preferences rather than exposing diverse perspectives), and commercial interests (prioritizing content from partners or advertisers). I think being able to filter and fine tune the results will always be the key to having happy users stay on the platform longer to get what they were searching for, though platforms must balance this against maintaining control over what\'s filterable to protect their business interests.',
		screenshots: [
			{
				src: '/Search/Airbnb/Airbnb (iOS) Where.png',
				alt: 'Airbnb interface showing Where selection',
				thumbnail: '/Search/Airbnb/Airbnb (iOS) Where.png',
				annotation: 'Airbnb focuses on experiences and stays, covering "Where?" "When?" "Who?" with beautifully crafted components. Users can select cities, date ranges (days, months, "flexible"), and filter extensively to convert interest into bookings.'
			}
		]
	},
	{
		appId: 'airbnb',
		dimensionId: 'decision-making-experience',
		keyInsight: 'Filters for confident booking',
		analysis: 'Airbnb\'s choice architecture is designed to support confident, high-stakes decision-making. Unlike entertainment platforms where choosing wrong means wasting 20 minutes, choosing the wrong accommodation affects an entire trip. The interface reflects this by providing dense information and extensive filtering to reduce uncertainty and support rational evaluation.\n\nProperty cards display critical decision-making information upfront: total price (not just per-night), location on map, rating with review count, and high-quality photos. Detail pages provide exhaustive information: amenities, house rules, cancellation policy, host profile, detailed reviews, and calendar availability. This information density serves decisive browsing—users can eliminate options confidently based on objective criteria.\n\nThe filtering interface uses a progressive disclosure pattern. Basic filters (price, dates, guests) appear first, with advanced filters (amenities, property type, house rules) available through expandable menus. This architecture recognizes that some users need simple filtering while others require precise control. The map view and list view offer different mental models for browsing—geographical context versus comparative evaluation—acknowledging that users approach spatial decisions differently. The architecture prioritizes enabling confident choices over minimizing cognitive effort, contrasting sharply with Netflix and YouTube which minimize friction to maximize consumption speed.',
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
		dimensionId: 'user-psychology',
		analysis: 'Airbnb\'s discovery design operates in a psychological space dominated by goal-directed search with high stakes—users are making accommodation decisions that significantly impact their trips and involve substantial money. The platform must address trust concerns (Is this place as described?), uncertainty (Will it meet my needs?), and risk aversion (What if something goes wrong?) while facilitating confident decision-making.\n\nThe extensive filtering and detailed information serve psychological needs for control and certainty. Users can specify requirements precisely, reducing anxiety about booking something unsuitable. Reviews and ratings provide social proof, essential for trust in peer-to-peer transactions. Host profiles and response rates address concerns about communication and reliability. Photos and detailed descriptions reduce surprises. This transparency creates psychological safety that enables transactions between strangers.\n\nHowever, the abundance of choice and detailed information can create decision paralysis. With hundreds of options meeting their criteria, users may struggle to commit, constantly wondering if a better option exists. The map view, while useful, can make the search feel overwhelming by visualizing just how many choices exist. Airbnb balances this with trust signals (Superhost, Guest Favorite) and sorting options that help narrow choices. The platform designs for serendipity less than goal achievement—users rarely stumble upon a booking; they methodically search and evaluate until confident. While Airbnb occasionally introduces "flexible dates" and "I\'m flexible" search options to enable serendipitous discovery of new destinations, this remains secondary to their primary conversion-focused model where precision and confidence drive bookings.',
		screenshots: [
			{
				src: '/Search/Airbnb/Airbnb (iOS).png',
				alt: 'Airbnb user psychology',
				thumbnail: '/Search/Airbnb/Airbnb (iOS).png',
				annotation: 'High-stakes decisions require control and certainty. Extensive filtering addresses anxiety about booking something unsuitable. Reviews and host profiles provide trust in peer-to-peer transactions. Photos and descriptions reduce surprises. Abundance of choice can create paralysis.'
			}
		]
	}
];
