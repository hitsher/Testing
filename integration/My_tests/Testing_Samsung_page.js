/// <reference types="Cypress" />
import OfferSection from '../../support/Offer_Section'
import COVID_Banner from '../../support/COVID_Banner'
import ExploreSection from '../../support/Explore_Section'
import GBMSection from '../../support/GBM_Section'
import SearchSection from '../../support/Search_Section'

describe('Check samsung page', function() {

    Cypress.config('baseUrl', 'http://www.samsung.com')


    context('Basics', () => {

        it('open browser and check status', function() {

            cy.visit('')
            cy.server().should((server) => {
            expect(server.delay).to.eq(0)
            expect(server.method).to.eq('GET')
            expect(server.status).to.eq(200)
            cy.visit('https://www.samsung.com/uk/')

            })
        })

        it('check if page have all elements', function() {
            cy.get('.gnb').should('exist');
            cy.get('.home-kv-carousel__container').should('exist');
            cy.get('.cm-g-text-block-container').should('exist');
            cy.get('.ho-g-showcase-card-tab').should('exist');
            cy.get('.ho-g-key-feature-tab').should('exist');
            cy.get('.ho-g-teaser-list').should('exist');
            cy.get('.ho-g-home-search').should('exist');
            cy.get('.footer').should('exist');
        })

        it('check images', function() {

            const image = cy.get('.image')
                image.should('be.visible');
              //  image.should('have.attr', 'data-mobile-src', /images.samsung/)
               // expect(image).to.have.attr('alt', /\w/);
        })
    })

    context.skip('Offer area', () => {

        const offerSection=new OfferSection();

        it('check if Offer area exist', function() {
            offerSection.getComponent().should('exist').and('have.length', 1);
                })
         
        it('check tab title', function() {
            offerSection.getTitle().each(function(li){

                const text = li.find('.tab__item-title').text()
                expect(text).to.match(/\w/);    
                cy.get(li).find('button').dblclick().wait(500);
                cy.get(li).should('have.class', 'tab__item--active'); 
            })
        })
        
        it('check content tab title', function() {
            offerSection.getProductsName().each(function(span){
                const text = span.text()
                expect(text).to.match(/\w/);          
            }) 
        }) 
        
        it('check images', function() {
            const image = cy.get('.ho-g-showcase-card-tab').find('img')
                    image.should('be.visible');
        })
    })

    context.skip('Banner area', () => {

        const covid_Banner=new COVID_Banner();

        it('check COVID banner', function() {
            covid_Banner.getComponent().should('exist');
            covid_Banner.getText().each(function(span){
                cy.get(span).should('have.text', 'LATEST COVID-19 UPDATE');
            })
        })

        it('check cta', function() {
            cy.get('.notice__cta').find('.cta')
                .should('have.attr', 'title', 'LEARN MORE')
                .and('have.attr', 'href', '/uk/covid-19-update/')
            })
            
            it('check COVID page status', function() {
            cy.request('https://www.samsung.com/uk/covid-19-update/')
            cy.server().should((server) => {
                expect(server.delay).to.eq(0)
                expect(server.method).to.eq('GET')
                expect(server.status).to.eq(200)
            })
        })

        it('check visibility', function() {
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

    context('GBM area', () => {

        const gbmSection =new GBMSection();

        it('check ctas in GBM area', function() {
            gbmSection.getCTA().each(function(element, index){
                cy.get(element).children().should('have.class','cta')
                .should('have.attr', 'href')
                .then((href) => {
                    cy.log(href)         
                    cy.request(href)
                    cy.server().should((server) => {
                        expect(server.delay).to.eq(0)
                        expect(server.method).to.eq('GET')
                        expect(server.status).to.eq(200)
                    })
                })
                cy.log(index);

            })
        })
        
       it('check content in GBM area', function() {
            cy.get('.ho-g-key-feature-tab').and('have.length', 3).each(function(element){

                cy.get(element).find('.key-feature-tab__title').invoke('text').should('match', /\w/);
                cy.get(element).find('.key-feature-tab__title').invoke('text').its('length').should('to.be.lessThan', 24);

                cy.get(element).find('.key-feature-tab__headline-inner').invoke('text').should('match', /\w/);
                cy.get(element).find('.key-feature-tab__headline-inner').invoke('text').its('length').should('to.be.lessThan', 100);

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

        const searchSection=new SearchSection();

        it('check if component exis', function() {
            searchSection.getComponent()
                .should('exist').prev('.cm-g-text-block-container')
                .should('contain','Looking for something else?') 
        })

        it('type and remove text', function() {
   
            searchSection.getInput()
                .type('Samsung')
                .should('have.value', 'Samsung') 
                .clear()
                .should('have.value', '')
        })

        // it('check search page', function() {
        //     searchSection.getInput()
        //         .type('Samsung{enter}')
        //     searchSection.getComponent().find('form').submit({force: true})
        //     cy.server().should((server) => {
        //         expect(server.delay).to.eq(0)
        //         expect(server.method).to.eq('GET')
        //         expect(server.status).to.eq(200)
        //     })
        //     cy.title().should('eq', 'Search | Samsung UK' )

        //     cy.go('back')
        // })
    })

    context('Explore area', () => {

        const exploreSection=new ExploreSection();

        it('check if section exist', function() {
            
            exploreSection.getComponent().should('exist');
        })

        it('check title and cta', function() {

            exploreSection.getTitle().should('contain', 'ExploreYourGalaxy.');

            cy.get('.teaser-list__title-button > a')
            .should('have.attr', 'href')
            .then((href) => {
                cy.log(href)         
                cy.request(href)
                cy.server().should((server) => {
                    expect(server.delay).to.eq(0)
                    expect(server.method).to.eq('GET')
                    expect(server.status).to.eq(200)
                })
            })
        })

        it('check tabs', function() {
            
            exploreSection.getComponent().find('.teaser-list__list-item').and('have.length', 3).each(function(tab){

                    // cy.get(tab).as('alias')
                    // cy.get('@alias').trigger('mouseover');
                    // cy.get('@alias').next().should('have.attr', 'aria-hidden', 'false')

                    cy.get(tab).then((element) => {
                    cy.get(element).trigger('mouseover');
                    cy.get(element).next().should('have.attr', 'aria-hidden', 'false').and('be.visible')
                    cy.get(element).find('.cta')
                    .should('have.attr', 'href')
                    .then((href) => {
                        cy.log(href)         
                        cy.request(href)
                        cy.server().should((server) => {
                            expect(server.delay).to.eq(0)
                            expect(server.method).to.eq('GET')
                            expect(server.status).to.eq(200)
                        })
                    })
                    })
                }) 
            }) 
    })
})