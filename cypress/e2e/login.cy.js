import LoginPage from "../support/Pages/LoginPage";

describe("Login Test Cases", () => {
  const loginPage = new LoginPage();

  beforeEach(function () {
    cy.fixture("login.json").as("loginData");
    loginPage.visit();
  });

  it("login with valid credentials", function () {
    loginPage.login(this.loginData.email, this.loginData.password);

    // 3 assertions
    cy.url().should("include", "/account");
    cy.get('[data-test="nav-menu"]').should("be.visible");
    cy.contains("My account").should("exist");
  });
});