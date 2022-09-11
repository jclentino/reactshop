/** @type {import('next').NextConfig} */

const withPwa = require('next-pwa')({
  dest: 'public',
  register: true, 
  mode: 'production',
  disable: false,
  
})

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPwa(nextConfig);
