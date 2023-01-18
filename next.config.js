// next.config.js
module.exports = {
  images: {
    loader: "akamai",
    path: "",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
};
