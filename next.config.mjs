/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            new URL(process.env.NEXT_PUBLIC_POSTGRES_URL+"/**")
        ],
    },
};

export default nextConfig;
