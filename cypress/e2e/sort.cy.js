import SortPage from "../support/Pages/SortPage";

describe("Sort Products", () => {
  const sortPage = new SortPage();

  beforeEach(() => {
    sortPage.visit();
  });

  it("Sort products A-Z", () => {
    sortPage.sortby("name,asc");
    cy.wait(1000);
    cy.get('.card').should("exist");
    cy.get('.card').its('length').should('be.greaterThan', 0);
    cy.get('.card').first().should("be.visible");
  });

  it("Sort products Z-A", () => {
    sortPage.sortby("name,desc");
    cy.wait(1000);
    cy.get('.card').should("exist");
    cy.get('.card').its('length').should('be.greaterThan', 0);
    cy.get('.card').first().should("be.visible");
  });

  it("Sort products High to Low", () => {
    sortPage.sortby("price,desc");
    cy.wait(1000);
    cy.get('.card').should("exist");
    cy.get('.card').its('length').should('be.greaterThan', 0);
    cy.get('.card').first().should("be.visible");
  });
});