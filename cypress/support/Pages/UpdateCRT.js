class UpdateCRT{
    visit(){
        cy.visit("https://practicesoftwaretesting.com/");
    }


     gotocart(){
        cy.get('[data-test="nav-cart"]').click();
     }


     update(){
    cy.get('[data-test="product-quantity"]')
      .should("be.visible")
      .clear()
      .type("3");
     }
}

export default UpdateCRT;