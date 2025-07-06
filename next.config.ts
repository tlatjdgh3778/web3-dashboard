import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.moralis.io',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'logo.moralis.io',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
