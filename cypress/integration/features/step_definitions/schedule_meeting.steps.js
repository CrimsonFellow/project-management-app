import { Given, When, Then } from'cypress-cucumber-preprocessor/steps';

Given('I am on the {string} page', (page) => {
  cy.visit(`/${page.toLowerCase().replace(/ /g, '-')}`);
});

When('I select {string} from the {string} dropdown', (value, field) => {
  cy.get(`select#${field.toLowerCase()}`).select(value);
});

When('I enter {string} into the {string} field', (value, field) => {
  cy.get(`#${field.toLowerCase()}`).type(value);
});

When('I click the {string} button', (button) => {
  cy.contains('button', button).click();
});

Then('I should see {string}', (message) => {
  cy.contains(message).should('be.visible');
});
