class NavPage{
    visit(){
        cy.visit("https://practicesoftwaretesting.com/")
    }
    gotocontact(){
        cy.get('[data-test="nav-contact"]').click();
    }
}
export default NavPage;