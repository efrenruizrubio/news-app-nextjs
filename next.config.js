/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: 'techcrunch.com',
			},
		],
	},
};

module.exports = nextConfig;
