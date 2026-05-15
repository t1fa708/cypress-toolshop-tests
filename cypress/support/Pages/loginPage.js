class LoginPage {
  // selectors
  emailInput() {
    return cy.get('[data-test="email"]');
  }

  passwordInput() {
    return cy.get('[data-test="password"]');
  }

  loginButton() {
    return cy.get('[data-test="login-submit"]');
  }

  // actions
  login(email, password) {
    this.emailInput().type(email);
    this.passwordInput().type(password);
    this.loginButton().click();
  }

  visit() {
    cy.visit("https://practicesoftwaretesting.com/auth/login");
  }
}

export default LoginPage 