class OfferSection {
  getComponent(){
    return cy.get('.ho-g-showcase-card-tab');
  }

  getTitle(){
  return cy.get('.ho-g-showcase-card-tab').find('.tab__item');
  }

  getProductsName(){
    return cy.get('.ho-g-showcase-card-tab').find('.showcase-card-tab-card__product-name');
    }
}
export default OfferSection