class FilterPage{
    visit(){
        cy.visit("https://practicesoftwaretesting.com/")
    }

    filter(){
        cy.get('[data-test="filters"]')
        .contains("Hand Tools")
        .click({force: true});

    }
}

export default FilterPage;