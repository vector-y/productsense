import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		qualities: [75, 100],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: '/images/**',
			},
		],
	},
};

export default nextConfig;
