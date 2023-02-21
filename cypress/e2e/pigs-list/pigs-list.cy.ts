describe('pigs list tests', () => {

  it('should redirect to pigs-list', function () {
    cy.visit('/pigs-list');
  });

  it('should have true elements', function () {
    cy.visit('/pigs-list');
    cy.title().should('equal', 'PigReporter');
    cy.get('h1').should('have.text', 'Reported Pigs');
    cy.get('p-button[icon*=pi-plus').should('exist');
    cy.get("p-button[label*='Show on map'").should('exist');
  });

  it('should redirect to new pig', function () {
    cy.visit('/pigs-list');
    cy.get('p-button[icon*=pi-plus').click();
    cy.url().should('equal', Cypress.config().baseUrl + '/pig/new');
  });

  it('should redirect to map', function () {
    cy.visit('/pigs-list');
    cy.get("p-button[label*='Show on map'").click();
    cy.url().should('equal', Cypress.config().baseUrl + '/map');
  });

  it('should delete pig report from table', function () {

  });
})
