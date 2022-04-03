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

   context('Authentication', () => {
      it('authenticate user', () => {

         cy.visit('/auth')

         cy.get(':nth-child(1) > input').type('cris@email.com')
         cy.get(':nth-child(2) > input').type(123456)

         cy.get('.sc-idiyUo > .sc-eCYdqJ').click()

      });
   })

   context('Logout', () => {
      it('logout user', () => {

         cy.login()

         cy.visit('/home')

         cy.get('.sc-llJcti > :nth-child(2)').click()
      });
   })

   context('Reset Password', () => {
      it('request link to reset password', () => {

         cy.visit('/reset-password')

         cy.get('input').type('cris@email.com')

         cy.get('.sc-idiyUo > .sc-eCYdqJ').click()
      });

      it('change password', () => {

         cy.visit('/change-password')

         cy.get(':nth-child(1) > input').type('1234567')
         cy.get(':nth-child(2) > input').type('1234567')

         cy.get('.sc-idiyUo > .sc-eCYdqJ').click()
      })
   })

   context('Create Random Bets', () => {
      it('create game with complete game, save and validate min-cart-value', () => {

         cy.login()

         cy.visit('/games')

         cy.get('.beykUU').click()


      });
   })

})