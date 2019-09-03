/// <reference types="Cypress" />


describe('Actions', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    it('should type in an iframe', function () {

        cy.get('#luke')
            .iframeLoaded()
            .its('document')
            .as("myIframe")

        cy.get("@myIframe")
            .getInDocument('#username')
            .type('potato')

        cy.get("@myIframe")
            .getInDocument('#password')
            .type('squirrel')
    });
})
