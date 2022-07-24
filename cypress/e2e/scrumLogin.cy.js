/// <reference types="Cypress" />

import { scrumLogin } from '../page_objects/scrumLogin';


describe('login scrum', () => {

  const validEmail = 'asdf@gmail.com'
  const validPassword = 'asdf1234'
  
  beforeEach('visit login page', () => {
    cy.visit('/login')
    cy.url().should('contains', '/login')
  })

  it('login with valid credentials', () => {
    scrumLogin.login(validEmail, validPassword)
    cy.url().should('not.contains', '/login')
  })

})