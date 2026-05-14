describe("Cart - Update Product Quantity", () => {
  beforeEach(function () {
    cy.fixture("cart.json").as("cartData");
    cy.visit("https://practicesoftwaretesting.com/");
    cy.get('[data-test="search-query"]').should("be.visible");
  });

  it("add product to cart and update quantity", function () {
    // add to cart
    cy.searchProduct(this.cartData.productName);
    cy.get('[data-test="product-name"]').contains("Leather toolbelt").click();
    cy.url().should("include", "/product");
    cy.get('[data-test="add-to-cart"]').should("be.visible").click();
    cy.contains("toasts.product-added-to-cart").should("be.visible");

    // go to cart
    cy.get('[data-test="nav-cart"]').click();
    cy.url().should("include", "/checkout");

    // update quantity
    cy.get('[data-test="product-quantity"]')
      .should("be.visible")
      .clear()
      .type("3");

    // wait for cart to update
    cy.wait(1000);

    // 3 assertions
    cy.get('[data-test="product-quantity"]').should("have.value", "3");
    cy.get('[data-test="cart-quantity"]').should("have.text", "3");
    cy.get('[data-test="cart-total"]').should("be.visible");
  });
});