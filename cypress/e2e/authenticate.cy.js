describe('user authentication', () => {
    it('fills out well and submits the form', () => {
        // Visit website
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        cy.url().should('include', '/register')
        // Handle cookies modal
        cy.get('span').contains('Refuser les cookies').click();
        // Fill out form
        cy.get('input[id="signin-email"]').type('william.brunelle.98@gmail.com').should('have.value', 'william.brunelle.98@gmail.com');
        cy.get('input[id="signin-password"]').type('Password123').should('have.value', 'Password123');
        cy.get('button[data-qa="signin-submit-button"]').click();
        // Redirect
        cy.url().should('include', '/dashboard')
    })
})
