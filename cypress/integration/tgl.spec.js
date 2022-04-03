import '../support/commands'

describe('TGL', () => {

   context('Registration', () => {
      it('create user', () => {

         cy.visit('/registration')

         cy.get(':nth-child(1) > input').type('Cris')
         cy.get(':nth-child(2) > input').type('cris@email.com')
         cy.get(':nth-child(3) > input').type(123456)

         cy.get('.sc-idiyUo > .sc-eCYdqJ').click()

      });
   })

})