describe("Login Test Cases", () => {
  beforeEach(() => {
    cy.fixture("user").as("userData");
    cy.visit("https://practicesoftwaretesting.com/");
    cy.contains("Sign in").click();
  });

  it("valid login", function () {
    cy.get("#email").type(this.userData.email);
    cy.get("#password").type(this.userData.password);
    cy.get('input[type="submit"]').click();

    // 3 assertions
    cy.url().should("include", "account");
    cy.contains("My account").should("be.visible");
    cy.get("h1").should("contain", "My account");
  });

  it("invalid login", function () {
    cy.get("#email").type("[email protected]");
    cy.get("#password").type("wrongpassword");
    cy.get('input[type="submit"]').click();

    // 3 assertions
    cy.contains("Email format is invalid").should("be.visible");
    cy.url().should("include", "login");
    cy.get("form").should("exist");
  });
});