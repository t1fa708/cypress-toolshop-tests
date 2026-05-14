describe("Filter by Category", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/");
    cy.get('[data-test="search-query"]').should("be.visible");
  });

  it("filter products by Hand Tools category", () => {
    // click the label instead of the input
    cy.get('[data-test="filters"]')
      .contains("Hand Tools")
      .click({ force: true });

    cy.wait(1500);

    // 3 assertions
    cy.get('.card').should("exist");
    cy.get('.card').its('length').should('be.greaterThan', 0);
    cy.get('.card').first().should("be.visible");
  });
});