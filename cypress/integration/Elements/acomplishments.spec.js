/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('accomplishments', () => {
  beforeEach(() => {
    cy.visit('/accomplishments');
  });

  it('Should display message when Submit button has been clicked and fields are empty', () => {
    cy.contains('button', 'Submit Accomplishment').click();
    cy.contains('Complete the items above to continue').should('be.visible');
  });

  it.only('Should fill Accomplishments form and click Submit button', () => {
    const title = 'Learn Cypress';
    const accomplishment = 'To have better knowledge on testing';
    cy.get("input[placeholder='Title']").type(title);
    cy.get("[class='Accomplishment-textarea']").type(accomplishment);
    cy.get("[data-cy='accomplishment-checkbox']").check();
    cy.contains('button', 'Submit Accomplishment').click();
    cy.wait(3000);
    cy.contains('h1', 'This Accomplisment was Successfully Submitted').should('be.visible');
    cy.contains('button', 'Go Back').click();
    cy.contains('Accomplishment').should('be.visible');
  });
});
