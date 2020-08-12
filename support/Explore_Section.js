class ExploreSection {
    getComponent(){
        return cy.get('.ho-g-teaser-list');
    }
  
    getTitle(){
        return cy.get('.ho-g-teaser-list').find('h2').invoke('text');
    }

    getButton(){
        return cy.get('.teaser-list__title-button').find('.cta');
    }

    getCTA(){
        return cy.get('.key-feature-tab__cta-wrap');
    }
  }
  export default ExploreSection