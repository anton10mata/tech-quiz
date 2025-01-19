const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001', // Update the port if your React app runs on a different port
    supportFile: 'cypress/support/e2e.js', // Updated to follow the standard E2E support file naming convention
    fixturesFolder: 'cypress/fixtures',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // Implement Node event listeners here if needed
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    supportFile: 'cypress/support/component.js', // Correct for component testing
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },
});
