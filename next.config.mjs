/** @type {import("next").NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const config = {
  output: 'export',
  images: {   
    unoptimized: true,
  },  
  reactStrictMode: true,
};
export default config;
