// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// ***********************************************
// ... all the existing comments stay as they are
// ***********************************************

// Custom command to search for a product
Cypress.Commands.add("searchProduct", (productName) => {
  cy.get('[data-test="search-query"]')
    .should("be.visible")
    .clear()
    .type(productName, { delay: 100 })
    .should("have.value", productName);

  cy.get('[data-test="search-submit"]').click();
});