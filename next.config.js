/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
    webpack: (config, options) =>
    {
        config.module.rules.push({
          test: /\.pdf$/i,
          loader: 'file-loader',
        })

        return config
    },
}

module.exports = nextConfig
