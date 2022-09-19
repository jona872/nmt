/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_TEST=hello,
    NEXT_PUBLIC_MAPBOX_TOKEN=sk.eyJ1Ijoiam9uYXRhbmtpbiIsImEiOiJjbDg3bzA3MnkxYjdxM29waG4wMmZnMGJpIn0.tDwLJXdcQDhSh4oPgcqPnA,
  },
}

module.exports = nextConfig
