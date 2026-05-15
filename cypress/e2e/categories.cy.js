import CategoriesPage from "../support/Pages/CategoriesPage";

describe("Navigate to Categories", () => {
  const categoriesPage = new CategoriesPage();

  beforeEach(() => {
    categoriesPage.visit();
  });

  it("navigate to hand tools category", () => {
    categoriesPage.goToHandTools();

    // 3 assertions
    cy.url().should("include", "/category/hand-tools");
    cy.get('.card').should("exist");
    cy.get('.card').its('length').should('be.greaterThan', 0);
  });
});