class ProductPage {
  visit() {
    cy.visit("https://practicesoftwaretesting.com/");
    cy.get('[data-test="search-query"]').should("be.visible");
  }

  clickFirstProduct() {
    cy.get('[data-test="product-name"]').first().click();
  }
}

export default ProductPage;