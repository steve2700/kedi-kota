/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: false },
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
}
export default nextConfig
