import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // This should be inside the Next.js config, not the PWA config
};

export default withPWA({
  dest: 'public', // PWA output location
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
})(nextConfig);
