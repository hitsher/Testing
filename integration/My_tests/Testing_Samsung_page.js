/// <reference types="Cypress" />
import OfferSection from '../../support/Offer_Section'
import COVID_Banner from '../../support/COVID_Banner'

describe('Check samsung page', function() {

    it('opens browser and check status', function() {

        cy.visit('https://www.samsung.com/uk/')
        cy.server().should((server) => {
        expect(server.delay).to.eq(0)
        expect(server.method).to.eq('GET')
        expect(server.status).to.eq(200)
        })
    })

    context('Offer area', () => {

        const offerSection=new OfferSection();

        it('checks if Offer area exist', function() {
            offerSection.getComponent().should('exist').and('have.length', 1);
          //  cy.get('.ho-g-showcase-card-tab').prev('cm-g-text-block-container').find('text-block-container__headline').should('contain','Latest Deals');
        })
         
        it('checks tab title', function() {
            offerSection.getTitle().each(function(li){
                const text = li.find('.tab__item-title').text()
                expect(text).to.match(/\w/);    
                cy.get(li).find('button').dblclick().wait(500);
                cy.get(li).should('have.class', 'tab__item--active'); 
            })
        })
        
        it('checks content tab title', function() {
            offerSection.getProductsName().each(function(span){
                const text = span.text()
                expect(text).to.match(/\w/);          
            }) 
        }) 
        
        it('checks images', function() {
            const image = cy.get('.ho-g-showcase-card-tab').find('img')
                    image.should('be.visible');
        })
    })

    it('checks if page have all elements', function() {
        cy.get('.gnb').should('exist');
        cy.get('.home-kv-carousel__container').should('exist');
        cy.get('.cm-g-text-block-container').should('exist');
        cy.get('.ho-g-showcase-card-tab').should('exist');
        cy.get('.ho-g-key-feature-tab').should('exist');
        cy.get('.ho-g-teaser-list').should('exist');
        cy.get('.ho-g-home-search').should('exist');
        cy.get('.footer').should('exist');
    })

    context('Banner area', () => {

        const covid_Banner=new COVID_Banner();

        it('checks COVID banner', function() {
            covid_Banner.getComponent().should('exist');
            covid_Banner.getText().each(function(span){
                cy.get(span).should('have.text', 'LATEST COVID-19 UPDATE');
            })
        })

        it('checks cta', function() {
            cy.get('.notice__cta').find('.cta')
                .should('have.attr', 'title', 'LEARN MORE')
                .and('have.attr', 'href', '/uk/covid-19-update/')
                .click();

            cy.server().should((server) => {
                expect(server.delay).to.eq(0)
                expect(server.method).to.eq('GET')
                expect(server.status).to.eq(200)
            })
            cy.go('back')
        })

        it('checks visibility', function() {
            cy.get('.notice').should('be.visible').find('.notice__close').click()
            cy.get('.notice').should('not.be.visible')
            
        })
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

    it('checks images', function() {
        const image = cy.get('.image')
            image.should('be.visible');
          //  image.should('have.attr', 'data-mobile-src', /images.samsung/)
           // expect(image).to.have.attr('alt', /\w/);
    })

    context('GBM area', () => {

        it('checks ctas in GBM area', function() {
            cy.get('.key-feature-tab__cta-wrap').each(function(element, index){
                cy.get(element).children().should('have.class','cta');
                cy.log(index);
              })
        })
        
       it('checks content in GBM area', function() {
            cy.get('.ho-g-key-feature-tab').and('have.length', 3).each(function(element){
                cy.get(element).find('.key-feature-tab__title').invoke('text').should('match', /\w/);
                cy.get(element).find('.key-feature-tab__headline-inner').invoke('text').should('match', /\w/);
                const image = cy.get(element).find('.image')
                image.should('be.visible');
        
                cy.get(element).find('.tab__item').each(function(li){
                    const text = li.find('.tab__item-title').text()
                    cy.log(text);
                    expect(text).to.match(/\w/);    
                    cy.get(li).find('button').dblclick().wait(500);
                    cy.get(li).should('have.class', 'tab__item--active'); 
                })
            })
        })
    })

    context('Search area', () => {
        it('check search bar', function() {
            cy.get('.ho-g-home-search')
                .should('exist')
                .prev('.cm-g-text-block-container').should('contain','Looking for something else?') 
            cy.get('#home-page-search')
                .type('Samsung')
                .should('have.value', 'Samsung') 
                .clear()
                .should('have.value', '')
        })
    })
})