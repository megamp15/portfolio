// /** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", 
    // basePath: "/nextjs14-github-pages-starter", // Comment this during local development. When uploading to Github make sure this is the repo name /<repo name>
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
