/** @type {import('next').NextConfig} */
const nextConfig = {
    future: {
        webpack5: true,
      },
      webpackDevMiddleware: (config) => {
        config.watchOptions = {
          poll: 1000, // Adjust the polling interval as needed
          aggregateTimeout: 300,
        };
        return config;
      }
}

module.exports = nextConfig
