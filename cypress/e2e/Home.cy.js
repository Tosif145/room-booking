describe('Home component', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-testid="cypress-home"]').should("exist")
    .contains( 'Make Yourself At Home');

    cy.get('[data-testid="cypress-nav"]').should("exist");

    cy.get('[data-testid="cypress-content"]').should("exist");

    cy.get('[data-testid="cypress-location"]').should("exist");
    
    cy.get('[data-testid="cypress-footer"]').should("exist");
  })
})



