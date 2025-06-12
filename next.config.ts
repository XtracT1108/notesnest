import type { NextConfig } from "next";
import withPWA from 'next-pwa';

const config = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})({
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add any other Next.js config options here
});

export default config;
