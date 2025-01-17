/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    reactStrictMode: true,
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en-US', 'zh-TW'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'zh-TW',
    },
};

module.exports = withBundleAnalyzer(nextConfig);
