import SearchPage from "../support/Pages/SearchPage";

describe("Search Test Cases", () => {
  const searchPage = new SearchPage();

  beforeEach(function () {
    cy.fixture("product.json").as("productData");
    searchPage.visit();
    cy.get('[data-test="search-query"]').should("be.visible");
  });

  it("search for Hammer", function () {
    searchPage.searchProduct(this.productData.productName);

    // 3 assertions
    cy.contains("Hammer").should("be.visible");
    cy.contains("Hammer").should("be.visible");
    cy.get(".card").should("exist");
  });
});