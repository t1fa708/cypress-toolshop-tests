class SortPage{
    visit(){
        cy.visit("https://practicesoftwaretesting.com/");
    }

    sortby(value){
        cy.get('[data-test="sort"]').select(value);
    }
}
export default SortPage;