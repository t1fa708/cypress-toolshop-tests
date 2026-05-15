class RemoveCRT{
    visit(){
        cy.visit("https://practicesoftwaretesting.com/");
    }

    gotocart(){
        cy.get('[data-test="nav-cart"]').click();
        

    }

    removefromcart(){
        cy.get('a.btn.btn-danger').should("exist").click();
    }


}

export default RemoveCRT;