class SearchSection {
    getComponent(){
      return cy.get('.ho-g-home-search');
    }
  
    getInput(){
    return cy.get('#home-page-search');
    }
  }
  export default SearchSection