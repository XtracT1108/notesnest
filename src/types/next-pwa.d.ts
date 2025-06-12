declare module 'next-pwa' {
  import { NextConfig } from 'next';
  
  function withPWA(config: {
    dest?: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
    scope?: string;
    sw?: string;
  }): (nextConfig: NextConfig) => NextConfig;

  export default withPWA;
} 