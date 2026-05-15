import NavPage from "../support/Pages/NavPage";
describe("Navigate to Contact Page", () => {
  const navPage = new NavPage();
  beforeEach(() => {
    navPage.visit();
  });

  it("navigate to contact page", () => {
    navPage.gotocontact();

    // 3 assertions
    cy.url().should("include", "/contact");
    cy.contains("Contact").should("be.visible");
    cy.get('[data-test="first-name"]').should("be.visible");
  });
});