class CategoriesPage {
  visit() {
    cy.visit("https://practicesoftwaretesting.com/");
  }

  goToHandTools() {
    cy.get('[data-test="nav-categories"]').click();
    cy.get('[data-test="nav-hand-tools"]').click({ force: true });
  }
}

export default CategoriesPage;