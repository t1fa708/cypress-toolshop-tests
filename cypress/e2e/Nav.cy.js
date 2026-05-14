describe("Navigate to Contact Page", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/");
  });

  it("navigate to contact page", () => {
    cy.get('[data-test="nav-contact"]').click();

    // 3 assertions
    cy.url().should("include", "/contact");
    cy.contains("Contact").should("be.visible");
    cy.get('[data-test="first-name"]').should("be.visible");
  });
});