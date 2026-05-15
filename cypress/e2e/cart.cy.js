import CartPage from "../support/Pages/CartPage";

describe("Cart Test Cases", () => {
  const cartPage = new CartPage();

  beforeEach(function () {
    cy.fixture("cart.json").as("cartData");
    cartPage.visit();
    cy.get('[data-test="search-query"]').should("be.visible");
  });

  it("search Leather toolbelt and add it to cart", function () {
    cartPage.searchProduct(this.cartData.productName);
    cartPage.clickProduct("Leather toolbelt");
    cy.url().should("include", "/product");
    cartPage.addToCart();

    // 3 assertions
    cy.contains("Product added to shopping cart").should("be.visible");
    cy.get('[data-test="cart-quantity"]').should("be.visible");
    cy.get('[data-test="cart-quantity"]').should("not.have.text", "0");
  });
});