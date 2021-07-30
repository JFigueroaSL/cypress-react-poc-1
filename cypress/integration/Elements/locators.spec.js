/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('locators', () => {
  beforeEach(() => {
    cy.visit('/elements');
  });

  it('Locating elements with GET', () => {
    cy.get('button');

    cy.get('.btn-with-class');

    cy.get('#btn-with-id');

    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

    //All elements by specific attrib
    cy.get("[type='submit']");

    //All elements by tag name & class
    cy.get('button.Elements-btn');

    //All elements by tag name, class and ID
    cy.get('button.Elements-btn#btn-with-id');

    //All elements by tag name, class and type
    cy.get("button.Elements-btn[type='submit']");

    //All elements with data id
    cy.get("[data-cy='btn-id-1']");

    //Using custom commands
    cy.getByTestid('btn-id-1');
  });

  it('Locating elements with CONTAINS', () => {
    //Get elements by text
    cy.contains('Unique Text');

    //Get elements by not unique text
    cy.contains("[type='submit']", 'Not Unique Text');

    //Get elements by not unique text
    cy.contains('form', 'Not Unique Text');
  });

  it('locating elements with FIND', () => {
    //Get child elements finding by class
    cy.get('#form-1').find('.btn-1');
  });
});
