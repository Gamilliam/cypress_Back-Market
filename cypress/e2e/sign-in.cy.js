describe('new user signing in', () => {
  it('fills out well and submits the form', () => {
    // Visit website
    cy.visit('https://preprod.backmarket.fr/fr-fr/register');
    cy.url().should('include', '/register')
    // Handle cookies modal
    cy.get('span').contains('Refuser les cookies').click();
    // Fill out form
    cy.get('input[id="firstName"]').type('Thomas').should('have.value', 'Thomas');
    cy.get('input[id="lastName"]').type('Ward').should('have.value', 'Ward');
    cy.get('input[id="signup-email"]').type('william.brunelle.98@gmail.com').should('have.value', 'william.brunelle.98@gmail.com');
    cy.get('input[id="signup-password"]').type('Password123').should('have.value', 'Password123');
    cy.get('button[data-qa="signup-submit-button"]').click();
  })


  it('fills out badly and submits the form', () => {
    // Visit website
    cy.visit('https://preprod.backmarket.fr/fr-fr/register');
    cy.url().should('include', '/register')
    // Handle cookies modal
    cy.get('span').contains('Refuser les cookies').click();
    // Fill out form
    cy.get('input[id="firstName"]').type('Thomas').should('have.value', 'Thomas');
    cy.get('input[id="lastName"]').type('Ward').should('have.value', 'Ward');
    cy.get('input[id="signup-email"]').should('be.empty');
    cy.get('input[id="signup-password"]').type('Password123').should('have.value', 'Password123');
    cy.get('button[data-qa="signup-submit-button"]').click();
    cy.get('p').contains('est obligatoire').should("be.visible");
  })
})
