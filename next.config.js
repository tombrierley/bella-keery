// next.config.js
module.exports = {
  output: "export",
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
