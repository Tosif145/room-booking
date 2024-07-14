describe('App component', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-testid="cypress-app"]').should("exist");
  })
})