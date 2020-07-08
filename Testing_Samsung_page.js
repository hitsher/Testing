describe('Check samsung page', function() {
    it('open browser and check status', function() {
    cy.visit('https://www.samsung.com/uk')
    cy.server().should((server) => {
        expect(server.delay).to.eq(0)
        expect(server.method).to.eq('GET')
        expect(server.status).to.eq(200)
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

    // it('check images', function() {
    //     cy.get('.image').should('be.visible');
       
    // })

    it('check Galaxy Book text in mobile tab', function() {
        cy.get('[an-la ="product marketing:im:galaxy book"]').click().should('contain','Galaxy Book');
        cy.get('.key-feature-tab__inner-wrap').eq(4).should('contain','The new Galaxy Book range');
       
    })

    it('check tabs LOOP', function() {
        cy.get('[an-la ="product marketing:im:galaxy book"]').click().should('contain','Galaxy Book');
        cy.get('.key-feature-tab__inner-wrap').eq(4).should('contain','The new Galaxy Book range');
       
    })

})