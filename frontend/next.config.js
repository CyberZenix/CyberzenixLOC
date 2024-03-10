/** @type {import('next').NextConfig} */
const nextConfig = {
    serverMiddleware: [{ path: '/api/socket', handler: '~/pages/api/socket.js' }],
}

module.exports = nextConfig
