class SearchPage{
    visit(){
     cy.visit("https://practicesoftwaretesting.com/")
    }
    searchProduct(productname){
        cy.searchProduct(productname)
    }


}
export default SearchPage