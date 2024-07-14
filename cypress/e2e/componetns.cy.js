
// Gallery component

describe('Gallery test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should render the Gallery component when Gallery is clicked in navbar or view button in Gallery card', () => {

    cy.get('[data-testid="cypress-nav"]').contains('p', 'Gallery').click();


    cy.get('[data-testid="cypress-gallery"]').should('be.visible');

    cy.get('[data-testid="cypress-cards"]').contains('div', 'Location').within(() => {
        cy.contains('.read','View').click();
    });

    cy.url().should('include', '#map-container');

    cy.get('#map-container').should('be.visible');

  });

  it('Should render image collection', () => {
 
    cy.visit('http://localhost:5173/');
  
  
    cy.get('[data-testid="cypress-nav"]').contains('p', 'Gallery').click();
  

    cy.get('[data-testid="cypress-gallery"]')
    .within(() => {
        cy.get('[data-testid="cypress-collections"]')
    }).should('be.visible');
  });

  it('Should render the Item componet for every image in the gallery', () => {
   
  
   cy.get('[data-testid="cypress-nav"]').contains('p', 'Gallery').click();
    

   cy.get('[data-testid="cypress-gallery"]').should('be.visible');
   

   cy.get('[data-testid="cypress-collections"]').should('be.visible');


   const expectedNumberOfImages = 10; // Replace with the actual number of images in photo_collections
   cy.get('[data-testid="cypress-collections"] .item').should('have.length', expectedNumberOfImages);


   cy.get('[data-testid="cypress-collections"] .item img').each(($img) => {
     cy.wrap($img).should('be.visible');
   });

    
  })

});


// Services component
describe('Service test', () => {
    beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Should render ther Services componet with all text and image', () => {
    cy.get('[data-testid="cypress-nav"]').contains('p', 'Services').click();

    cy.get('[data-testid="cypress-services"]').should('be.visible');

    cy.get('[data-testid="cypress-services"]').within(() => {
        cy.get('.info-title').should('be.visible');
        cy.get('.info-content').should('be.visible');

        const outImage = '/src/assets/out.jpg'
        cy.get(`img[src="${outImage}"]`).should('be.visible');
    });
  })
})


// Rooms component

describe('Rooms test', () => {
    beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Should render the Rooms component with description and images', () =>{
    cy.get('[data-testid="cypress-nav"]').contains('p', 'Rooms').click();

    cy.get('[data-testid="cypress-rooms"]').should('be.visible');

    cy.get('[data-testid="cypress-rooms"]').within(() => {
        cy.get('.room-card').should('be.visible');
        cy.get('.room-card-details').should('be.visible');

        const room1 = '/src/assets/small.jpg'
        cy.get(`img[src="${room1}"]`).should('be.visible');

        const room2 = '/src/assets/large.jpg'
        cy.get(`img[src="${room2}"]`).should('be.visible');
    });

    
  })

  it('should navigate away from the current page when the Book Now button is clicked', () => {

    cy.get('.btn-tag').click();

    cy.url().should('not.eq', 'http://localhost:5173/');
  });


})


// Footer Component
describe('Footer test', () => {
    beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });


  it('Should navigate to the footer when the footer is clicked or rendered intially with the all components', () => {

    cy.get('[data-testid="cypress-nav"]').contains('p', 'Rooms').click();

    cy.get('[data-testid="cypress-footer"]').should('be.visible');

    cy.get('[data-testid="cypress-footer"] h3').contains('Kingsukh guest house').should('exist');

    cy.get('[data-testid="cypress-footer"] h3').contains('Quick Links').should('exist');

    cy.get('[data-testid="cypress-footer"] h3').contains('OUR SERVICES').should('exist');

    cy.get('[data-testid="cypress-footer"] h3').contains('CONTACT US').should('exist');

    cy.get('[data-testid="cypress-footer"] h3').contains('CONTACT US').parent('.footer-item')
    .within(() => {
        cy.get('.icons').should('exist');

        // Verify each image inside the icons div
        cy.get('.icons img').each(($img) => {
          cy.wrap($img).should('be.visible');
        });
    })
  })
})