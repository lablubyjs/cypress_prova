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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', () => {

   cy.token().then(response => {
      const token = response.body.token.token

      window.localStorage.setItem('token', token)

   })
})

Cypress.Commands.add('token', () => {
   cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/login`,
      body: JSON.stringify({
         email: 'cris@email.com',
         password: '1234567'
      }),
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json'
      }
   })
})