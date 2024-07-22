// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
