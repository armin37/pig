describe('new pig tests', () => {
  before(() => {
    cy.visit('pig/new')
    insertNewLocationName('Tehran')
  })

  it('should insert new pig with correct data', () => {
    cy.get('#pid').type('14');
    cy.get('#name').type('Armin');
    cy.get('#Phone').type('1234567890');

    cy.get('#breed').click();
    cy.get('p-overlay[ng-reflect-visible=true] ul p-dropdownitem').eq(1).click();

    cy.get('#time').click();
    cy.get('.p-datepicker tbody tr:nth-child(2) td:nth-child(3)').click();

    cy.get('#locationName').click();
    cy.get('p-overlay[ng-reflect-visible=true] ul p-dropdownitem').eq(1).click();

    cy.get('.mapboxgl-ctrl-zoom-in').click();

    cy.get('.mapboxgl-canvas')
      .trigger("mouseover", {force: true})
      .trigger('mousedown', 'center', {which: 1, force: true})
      .trigger('mousemove',
        {
          clientX: 500, clientY: 500, screenX: 500, screenY: 500, pageX: 500, pageY: 500, force: true
        })
      .trigger('mouseup', {which: 1, force: true});

    cy.getPrimeButton("Submit").click();
    cy.url().should('equal', Cypress.config().baseUrl + '/pigs-list');
    // cy.get('.p-datatable-table tbody tr:nth-child(1) td .edit').click();
    // cy.get('#password').type('OINK!!');
    // cy.getPrimeButton("Submit").click();
  })


  const insertNewLocationName = (text) => {
    cy.get('.add-address').click();
    cy.get('#Address').type(text);
    cy.get('#add-address-button').click();
  }
})
