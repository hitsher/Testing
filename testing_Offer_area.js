

/// <reference types="Cypress" />

describe('Checking Offer area', function() {

it('checks if Offer area exist', function() {
    cy.get('.ho-g-showcase-card-tab').should('exist').and('have.length', 1);
  //  cy.get('.ho-g-showcase-card-tab').prev('cm-g-text-block-container').find('text-block-container__headline').should('contain','Latest Deals');
})
 
it('checks tab title', function() {
  cy.get('.ho-g-showcase-card-tab').find('.tab__item').each(function(li){
    const text = li.find('.tab__item-title').text()
    expect(text).to.match(/\w/);    
    cy.get(li).find('button').dblclick().wait(500);
    cy.get(li).should('have.class', 'tab__item--active'); 
    })
})

it('checks content tab title', function() {
    cy.get('.ho-g-showcase-card-tab').find('.showcase-card-tab-card__product-name').each(function(span){
    const text = span.text()
    expect(text).to.match(/\w/);    
    
}) 
}) 

it('checks images', function() {
    const image = cy.get('.ho-g-showcase-card-tab').find('img')
            image.should('be.visible');
})
})