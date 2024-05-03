// /** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", 
    // basePath: "/portfolio", // Comment this during local development. When uploading to Github make sure this is the repo name /<repo name>
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
