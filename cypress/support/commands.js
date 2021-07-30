/* eslint-disable no-undef */
Cypress.Commands.add('getByTestid', (testId) => {
  cy.get(`[data-cy='${testId}']`);
});
