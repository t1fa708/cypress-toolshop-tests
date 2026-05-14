describe("Cart - Add and Remove Item", () => {
  beforeEach(function () {
    cy.fixture("cart.json").as("cartData");
    cy.visit("https://practicesoftwaretesting.com/");
    cy.get('[data-test="search-query"]').should("be.visible");
  });

  it("add Leather toolbelt to cart and remove it", function () {
    // add to cart
    cy.searchProduct(this.cartData.productName);
    cy.get('[data-test="product-name"]').contains("Leather toolbelt").click();
    cy.url().should("include", "/product");
    cy.get('[data-test="add-to-cart"]').should("be.visible").click();
    cy.contains("toasts.product-added-to-cart").should("be.visible");

    // go to cart
    cy.get('[data-test="nav-cart"]').click();
    cy.url().should("include", "/checkout");

    // remove item using the red X button
    cy.get('a.btn.btn-danger').should("be.visible").click();

    // 3 assertions
    cy.get('[data-test="cart-quantity"]').should("have.text", "0");
    cy.contains("Leather toolbelt").should("not.exist");
    cy.contains("Your cart is empty").should("be.visible");
  });
});