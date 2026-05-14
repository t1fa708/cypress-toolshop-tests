describe("Sort A-Z", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/");
  });

  it("Sort products A-Z", () => {
    cy.get('[data-test="sort"]').select("name,asc");

    cy.wait(1000);

    // 3 assertions
    cy.get('.card').should("exist");
    cy.get('.card').its('length').should('be.greaterThan', 0);
    cy.get('.card').first().should("be.visible");
  });


  it("Sort products Z-A" , () =>{
    cy.get('[data-test="sort"]').select("name,asc");

    cy.wait(1000);


    cy.get('.card').should("exist");
    cy.get('.card').its('length').should('be.greaterThan', 0);
    cy.get('.card').first().should("be.visible");


  });

  it("Sort products Hight - Low" , () =>{
    cy.get('[data-test="sort"]').select("price,desc");

    cy.wait(1000);


    cy.get('.card').should("exist");
    cy.get('.card').its('length').should('be.greaterThan', 0);
    cy.get('.card').first().should("be.visible");

  });
});