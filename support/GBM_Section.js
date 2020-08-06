class GBMSection {
    getComponent(){
      return cy.get('.ho-g-key-feature-tab');
    }
  
    getTitle(){
    return cy.get('.ho-g-showcase-card-tab').find('.tab__item');
    }

    getCTA(){
        return cy.get('.key-feature-tab__cta-wrap');
    }
  }
  export default GBMSection