import CartPage from "../support/Pages/cartPage";
import UpdateCRT from "../support/Pages/UpdateCRT";

describe("Cart - Update Product Quantity", () => {
  const Update = new UpdateCRT();
  const add = new CartPage();

  beforeEach(function () {
    cy.fixture("cart.json").as("cartData");
    Update.visit();
  });

  it("add product to cart and update quantity", function () {
    // add to cart
    add.searchProduct(this.cartData.productName);
    add.clickProduct("Leather toolbelt");
    cy.url().should("include", "/product");
    add.addToCart();

    // go to cart
    Update.gotocart();
    cy.url().should("include", "/checkout");

    // update quantity
    Update.update();
    cy.wait(1000);

    // 3 assertions
    cy.get('[data-test="product-quantity"]').should("have.value", "3");
    cy.get('[data-test="cart-quantity"]').should("have.text", "1");
    cy.contains("Leather toolbelt").should("be.visible");
  });
});