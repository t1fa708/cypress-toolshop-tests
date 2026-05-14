describe("Search Test Cases", () => {
  beforeEach(function () {
    cy.fixture("product.json").as("productData");
    cy.visit("https://practicesoftwaretesting.com/");
    cy.get('[data-test="search-query"]').should("be.visible");
  });

  it("search for Hammer", function () {
    cy.searchProduct(this.productData.productName); // using the custom command

    // 3 assertions
    cy.get('[data-test="search-query"]').should("have.value", this.productData.productName);
    cy.contains("Hammer").should("be.visible");
    cy.get(".card").should("exist");
  });
});