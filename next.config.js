/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['gsap']);

const nextConfig = withTM({
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'images.unsplash.com',
            'cdn.sanity.io'
        ],
    },

})

module.exports = nextConfig

