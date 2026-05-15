import ProductPage from "../support/Pages/ProductPage";

describe("Product Detail Page", () => {
  const productPage = new ProductPage();

  beforeEach(() => {
    productPage.visit();
  });

  it("verify product detail page loads correctly", () => {
    productPage.clickFirstProduct();

    // 3 assertions
    cy.url().should("include", "/product");
    cy.get('[data-test="add-to-cart"]').should("be.visible");
    cy.get('[data-test="unit-price"]').should("be.visible");
  });
});