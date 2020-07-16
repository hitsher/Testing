/// <reference types="Cypress" />
describe('Check samsung page', function() {
    it('open browser and check status', function() {
    cy.visit('https://www.samsung.com/uk/')
    cy.server().should((server) => {
       expect(server.delay).to.eq(0)
       expect(server.method).to.eq('GET')
       expect(server.status).to.eq(200)
   })
    })
    it('should have all elements', function() {
        cy.get('.gnb').should('exist');
        cy.get('.home-kv-carousel__container').should('exist');
        cy.get('.cm-g-text-block-container').should('exist');
        cy.get('.ho-g-showcase-card-tab').should('exist');
        cy.get('.ho-g-key-feature-tab').should('exist');
        cy.get('.ho-g-teaser-list').should('exist');
        cy.get('.ho-g-home-search').should('exist');
        cy.get('.footer').should('exist');
    })
        // it('check broken links', function() {
    //     cy.get( '[an-la ="product marketing:im:galaxy z flip:galaxy z flip:learn more"]').click()
    //     cy.server().should((server) => {
    //         expect(server.delay).to.eq(0)
    //         expect(server.method).to.eq('GET')
    //         expect(server.status).to.eq(200)
    //     })
    //     cy.visit('https://www.samsung.com/uk')
    // })

    it('check images', function() {
        cy.get('.image').should('be.visible');
    })
    it('check Galaxy Book text in mobile tab', function() {
        cy.get('[an-la ="product marketing:im:galaxy book"]').should('contain','Galaxy Book');
        cy.get('.key-feature-tab__inner-wrap').eq(3).should('contain','The new Galaxy Book range');
    })
    it('check tabs LOOP', function() {
        cy.get('.key-feature-tab__cta-wrap').each(function(element, index){
            //console.log(element, index)
            //expect(element).to.have.children.class('cta');
            cy.get(element).children().should('have.class','cta');
            cy.log(index);
          })
    })
    //    it('check all content in all tabs', function() {
    //     cy.get('.key-feature-tab__title').each(function(element){
    //         //expect(element).to.contain.string("[A-Z]{1}");
    //         cy.get(element).should('contain','Mobile');
    //       })
    // })

    it('check search bar', function() {
        cy.get('.ho-g-home-search')
            .should('exist')
            .prev('.cm-g-text-block-container').should('contain','Looking for something else?') 

    })
})