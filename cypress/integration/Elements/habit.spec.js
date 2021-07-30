/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('habit', () => {
  beforeEach(() => {
    cy.visit('/habits');
  });

  it('Should display modal when add button is clicked', () => {
    cy.contains('button', 'Add').click();
    cy.contains('Add a new habit').should('be.visible');
  });

  it('Should display habit card when new habit is added', () => {
    const habit = 'Drink a cup of coffee';
    cy.get('#habit-add-btn').click();
    cy.get("input[placeholder='Habit']").type(habit);
    cy.contains('button', 'Save Changes').click();
    cy.contains(habit).should('be.visible').and('have.class', 'HabitCard__habit-container');
  });

  it('Should toggle icon when habit is clicked', () => {
    const habit = 'Drink a cup of coffee';
    cy.get('#habit-add-btn').click();
    cy.get("input[placeholder='Habit']").type(habit);
    cy.contains('button', 'Save Changes').click();
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should('be.visible');
    cy.contains(habit).click();
    cy.get("[src='/static/media/check.9e8832df.svg']").should('be.visible');
  });
});
