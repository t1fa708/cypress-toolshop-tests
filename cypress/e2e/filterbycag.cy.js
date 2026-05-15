import FilterPage from "../support/Pages/FilterPage";

describe("Filter by Category", () => {
  const filterpage = new FilterPage;
  beforeEach(() => {
   filterpage.visit();
   cy.get('[data-test="search-query"]')
  });

  it("filter products by Hand Tools category", () => {
    filterpage.filter();

    cy.wait(1000);

    // 3 assertions
    cy.get('.card').should("exist");
    cy.get('.card').its('length').should('be.greaterThan', 0);
    cy.get('.card').first().should("be.visible");
  });
});
