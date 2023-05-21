/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com', "media-cdn.tripadvisor.com",
      "video-images.vice.com", "www.livingfla.com", "c8.alamy.com", "es.nycgo.com", "www.wazwu.com", "resizer.otstatic.com", "i.pinimg.com"]
  },
}

module.exports = nextConfig
