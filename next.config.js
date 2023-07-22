const withNextIntl = require("next-intl/plugin")("./src/i18n/i18n.tsx");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);
