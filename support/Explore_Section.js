class ExploreSection {
    getComponent(){
        return cy.get('.ho-g-teaser-list');
    }
  
    getTitle(){
        return cy.get('.ho-g-teaser-list').find('.teaser-list__desktop-title');
    }

    getCTA(){
        return cy.get('.key-feature-tab__cta-wrap');
    }
  }
  export default ExploreSection