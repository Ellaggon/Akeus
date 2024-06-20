/** @type {import("next").NextConfig} */

const { hostname } = require("os")
const path = require("path")

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.shopify.com",
        protocol: "https",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https"
      }
    ]
  }
}

module.exports = nextConfig
