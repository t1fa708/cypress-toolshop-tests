describe("Cart Test Cases", () => {
  beforeEach(function () {
    cy.fixture("cart.json").as("cartData");
    cy.visit("https://practicesoftwaretesting.com/");
    cy.get('[data-test="search-query"]').should("be.visible");
  });

  it("search Leather toolbelt and add it to cart", function () {
    cy.searchProduct(this.cartData.productName);

    cy.get('[data-test="product-name"]').contains("Leather toolbelt").click();
    cy.url().should("include", "/product");
    cy.get('[data-test="add-to-cart"]').should("be.visible").click();

    // 3 assertions
    cy.contains("Product added to shopping cart").should("be.visible");
    cy.get('[data-test="cart-quantity"]').should("be.visible");
    cy.get('[data-test="cart-quantity"]').should("not.have.text", "0");
  });
});