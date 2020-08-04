class COVID_Banner {
    getComponent(){
      return cy.get('.notice__inner');
    }
  
    getText(){
    return cy.get('.notice__text').find('span');
    }
  
    getProductsName(){
      return cy.get('.ho-g-showcase-card-tab').find('.showcase-card-tab-card__product-name');
      }
  }
  export default COVID_Banner