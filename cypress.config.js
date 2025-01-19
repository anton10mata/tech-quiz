const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // The base URL for the React app
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    supportFile: false, // Disable the support file if not needed
  },
});