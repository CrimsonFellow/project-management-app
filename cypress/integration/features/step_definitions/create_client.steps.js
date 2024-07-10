import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

console.log('Step definitions file loaded');

Given('I am on the {string} page', (page) => {
  console.log(`Navigating to ${page}`);
  cy.visit(`/${page.toLowerCase().replace(/ /g, '-')}`);
});

When('I enter {string} into the {string} field', (value, field) => {
  console.log(`Entering ${value} into ${field}`);
  cy.get(`#${field.toLowerCase()}`).type(value);
});

When('I click the {string} button', (button) => {
  console.log(`Clicking ${button} button`);
  cy.contains('button', button).click();
});

Then('I should see {string}', (message) => {
  console.log(`Checking for message: ${message}`);
  cy.contains(message).should('be.visible');
});


