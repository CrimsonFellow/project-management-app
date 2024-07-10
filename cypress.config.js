const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return config;
    },
    specPattern: 'cypress/integration/features/**/*.feature',
    baseUrl: 'http://localhost:4200',
    supportFile: 'cypress/support/index.js',
  },
});



