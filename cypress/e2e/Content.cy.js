describe("Content componet", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    })


    // checking for every content


    it("Should render content componet at home page", () => {

        cy.get('[data-testid="cypress-content"]').should('exist');

        cy.get('[data-testid="cypress-content"]').contains('Make Yourself At Home');

        cy.get('[data-testid="cypress-content"]').contains('The Best Holidays Start Here!');

        cy.get('[data-testid="cypress-cards"]').contains('div','Gallery').should('exist');

        cy.get('[data-testid="cypress-cards"]').contains('div','Rooms').should('exist');

        cy.get('[data-testid="cypress-cards"]').contains('div','Location').should('exist');
    })


    // carts exist and working properly

    it('Should render Gallery component when view button is clicked', () => {

        cy.get('[data-testid="cypress-cards"]').contains('div', 'Gallery').within(() => {
            cy.contains('.read','View').click();
        });

        cy.get('[data-testid="cypress-gallery"]').should('be.visible');
  
    })

    it('Should render Rooms component when view button is clicked', () => {

        cy.get('[data-testid="cypress-cards"]').contains('div', 'Rooms').within(() => {
            cy.contains('.read','View').click();
        });

        cy.get('[data-testid="cypress-rooms"]').should('be.visible');
  
    })

    it('Should Navigate Loaction component when view button is clicked', () => {

        cy.get('[data-testid="cypress-cards"]').contains('div', 'Location').within(() => {
            cy.contains('.read','View').click();
        });

        cy.url().should('include', '#map-container');

        cy.get('#map-container').should('be.visible');
  
    })
})


