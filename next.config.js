// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
/** @type {import('next').NextConfig} */

// eslint-disable-next-line import/extensions
const { i18n } = require('./next-i18next.config.js');

module.exports = withBundleAnalyzer({
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['cdn.sanity.io', 'placeimg.com', 'www.fillmurray.com', 'source.unsplash.com', 'artimg.gympik.com', 'www.frontsigns.com', 'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com', 'static.dezeen.com', 'www.hoteljurmala.com', 'www.cuddlynest.com'],
        quality: 80,
    },
    i18n,
    async redirects(){
        return[
            {
                source: '/partner',
                destination: '/partner/overview',
                permanent: true
            },
            {
                source: '/partner/manage',
                destination: '/partner/manage/facilities',
                permanent: true
            }
        ]
    }
});