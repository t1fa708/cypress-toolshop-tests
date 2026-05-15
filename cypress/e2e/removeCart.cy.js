import CartPage from "../support/Pages/CartPage";
import RemoveCRT from "../support/Pages/RemoveCRT";

describe("Cart - Add and Remove Item", () => {
  const addcart = new CartPage();
  const removecart = new RemoveCRT();

  beforeEach(function () {
    cy.fixture("cart.json").as("cartData");
    removecart.visit();
  });

  it("add Leather toolbelt to cart and remove it", function () {
    addcart.searchProduct(this.cartData.productName);
    addcart.clickProduct("Leather toolbelt");
    cy.url().should("include", "/product");
    addcart.addToCart();

    removecart.gotocart();
    cy.url().should("include", "/checkout");
    removecart.removefromcart();

    // 3 assertions
    cy.contains("Product deleted.").should("exist");
    cy.contains("Leather toolbelt").should("not.exist");
    cy.contains("The cart is empty. Nothing to display.").should("be.visible");
  });
});