import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given("I'm at the sign in page", () => {
  cy.visit('/ui/components/authenticator/sign-in-with-username');
});

When('I type the valid username {string}', (username: string) => {
  cy.findByRole('textbox', { name: /username/i }).type(Cypress.env(username));
});

And('I type the valid password {string}', (password: string) => {
  cy.findByPlaceholderText(/password/i).type(Cypress.env(password));
});
