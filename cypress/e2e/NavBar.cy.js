describe('Navbar component', () => {
  it('should have all navigation options and the book button', () => {
    cy.visit('http://localhost:5173/');
   

    cy.get('.nav-inner').contains('p', 'Kingsukh').should('exist');
 
    cy.get('.navbar').contains('p', 'About').should('exist');
 
    cy.get('.navbar').contains('p', 'Gallery').should('exist');

    cy.get('.navbar').contains('p', 'Services').should('exist');

    cy.get('.navbar').contains('p', 'Rooms').should('exist');

    cy.get('.navbar').contains('p', 'Contact').should('exist');

    cy.get('.navbar').contains('p', 'Location').should('exist');

    cy.get('.navbar').contains('div', 'Book Now').should('exist');
  });
});


// Test for Navigation to different section 

// steps to follow
  // Click on the "option" link inside the navbar
  // Assert that the URL contains "#id" or check for visibility of the respective section
  // Alternatively, verify that the section with id  becomes visible

  describe('Home test', () => {
    beforeEach(() => {
      // Visit the application URL before each test
      cy.visit('http://localhost:5173/');
    });
  
    it('should render the Home component when Kingsukh is clicked', () => {

      cy.get('[data-testid="cypress-nav"]').contains('p', 'Kingsukh').click();
  
 
      cy.url().should('eq', 'http://localhost:5173/');

      cy.get('[data-testid="cypress-home"]').should('be.visible');
    });
  
    it('should render the Home component when logo is clicked', () => {

      cy.get('[data-testid="cypress-nav"]').find('.option-home').click();
  

      cy.url().should('eq', 'http://localhost:5173/');

       cy.get('[data-testid="cypress-home"]').should('be.visible');
    });
  });
  

describe('About test', () => {
  it('should navigate to the content section when About is clicked', () => {
    cy.visit('http://localhost:5173/');

 
   cy.get('[data-testid="cypress-nav"]').contains('p', 'About').click();


   cy.url().should('include', '#content');


   cy.get('#content').should('be.visible');
  });
});


describe('Location test', () => {
  it('should navigate to the location section when About is clicked', () => {
    cy.visit('http://localhost:5173/');


   cy.get('[data-testid="cypress-nav"]').contains('p', 'Location').click();


   cy.url().should('include', '#map-container');


   cy.get('#map-container').should('be.visible');
  });
});


describe('Contact test', () => {
  it('should navigate to the contact section when About is clicked', () => {
    cy.visit('http://localhost:5173/');


   cy.get('[data-testid="cypress-nav"]').contains('p', 'Contact').click();


   cy.url().should('include', '#contact');


   cy.get('#contact').should('be.visible');
  });
});


describe('Gallery test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should render the Gallery component when Kingsukh is clicked', () => {

    cy.get('[data-testid="cypress-nav"]').contains('p', 'Gallery').click();


    cy.get('[data-testid="cypress-gallery"]').should('be.visible');
  });

});


describe('Services test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should render the Services component when Kingsukh is clicked', () => {

    cy.get('[data-testid="cypress-nav"]').contains('p', 'Services').click();


    cy.get('[data-testid="cypress-services"]').should('be.visible');
  });

});


describe('Rooms test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should render the Rooms component when Kingsukh is clicked', () => {

    cy.get('[data-testid="cypress-nav"]').contains('p', 'Rooms').click();


    cy.get('[data-testid="cypress-rooms"]').should('be.visible');
  });

});




describe('Book Now Button test', () => {
  beforeEach(() => {

    cy.visit('http://localhost:5173/');
  });

  it('should navigate away from the current page when the Book Now button is clicked', () => {

    cy.get('.btn-tag').click();

    cy.url().should('not.eq', 'http://localhost:5173/');
  });
});

