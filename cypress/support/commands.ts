// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare namespace Cypress {
  interface Chainable {
    getPrimeButton: (item: string) => Chainable<JQuery>;
    dragMapFromCenter: (item: any, {xMoveFactor, yMoveFactor}) => Chainable<JQuery>;
  }
}

Cypress.Commands.add('getPrimeButton', (item) => {
  return cy.get(`p-button[label*='${item}'`);
});

Cypress.Commands.add(
  'dragMapFromCenter',
  {prevSubject: 'element'},
  (element, {xMoveFactor, yMoveFactor}) => {
    // Get the raw HTML element from jQuery wrapper

    // element.trigger('mousedown', 'center')
    //   .wait(1000)
    //   .trigger('mousemove', {
    //     clientX: 370,
    //     clientY: 730,
    //     which: 1,
    //     pageX: 600,
    //     pageY: 100
    //   })
    //   .trigger('mouseup', {force: true});
  }
);
