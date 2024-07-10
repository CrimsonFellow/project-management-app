import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I open the {string} page', (page) => {
  console.log(`Opening the ${page} page`);
  cy.visit(`/${page}`);
});

