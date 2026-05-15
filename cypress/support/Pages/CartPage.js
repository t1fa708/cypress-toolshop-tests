class UpdateCRT {
  visit() {
    cy.visit("https://practicesoftwaretesting.com/");
  }

  goToCart() {
    cy.get('[data-test="nav-cart"]').click();
    cy.url().should("include", "/checkout");
    cy.get('[data-test="product-quantity"]').should("exist");
  }

  update() {
    cy.get('[data-test="product-quantity"]')
      .should("be.visible")
      .clear()
      .type("3");
  }
}

export default UpdateCRT;