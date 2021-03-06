const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPWA = require("next-pwa");

const path = require("path");

module.exports = withCSS(
  withSass(
    withPWA({
      pwa: {
        dest: "public",
        register: true,
        scope: "/"
      },
      experimental: {
        publicDirectory: true
      },
      webpack: config => {
        config.resolve.alias["@components"] = path.join(
          __dirname,
          `src/components`
        );
        config.resolve.alias["@pages"] = path.join(__dirname, `src/pages`);
        config.resolve.alias["@styles"] = path.join(__dirname, `src/styles`);
        config.resolve.alias["@utils"] = path.join(__dirname, `src/utils`);
        return config;
      }
    })
  )
);
