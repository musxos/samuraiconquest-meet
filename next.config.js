/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    ADDRESS: '0xc9C10e4635937228A554754BD727304905B2259FS',
    marketplaceAddress: '0x58AA1E788EE0E8cC8ad3D51D9ABb6aA1c79f9f0e',
    gameAddress: '0xdb7614e07ee5f46463D152f1E45442e012F6a7d9'
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
