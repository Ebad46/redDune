const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ebadprince49.workers.dev',
      },
    ],
  },
  turbopack: {},
  webpack(config) {
    config.module.rules.push({
      test: /\.jfif$/,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;