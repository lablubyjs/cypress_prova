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
      it('request link to reset password and change-password', () => {

         cy.visit('/reset-password')

         cy.get('input').type('cris@email.com')

         cy.get('.sc-idiyUo > .sc-eCYdqJ').click()

         cy.get(':nth-child(1) > input').type('1234567')
         cy.get(':nth-child(2) > input').type('1234567')

         cy.get('.sc-idiyUo > .sc-eCYdqJ').click()

      });


   })

   context('Create Random Bets', () => {
      it('create game with complete game, save and validate min-cart-value', () => {

         cy.login()

         cy.visit('/games')

         cy.intercept('GET', '**/cart_games**').as('waitEventRoute')

         cy.wait('@waitEventRoute').then((xhr) => {
            expect(xhr.response.statusCode).be.eq(200)
         })

         // Complete Game
         cy.get('.beykUU').click()

         // Add to Cart
         cy.get('.ggQUDW').click()

         // Mega-Sena Button
         cy.get('.kgwfls').click()

         // Complete Game
         cy.get('.beykUU').click()

         // Add to Cart
         cy.get('.ggQUDW').click()

         // Complete Game
         cy.get('.beykUU').click()

         // Add to Cart
         cy.get('.ggQUDW').click()

         // Complete Game
         cy.get('.beykUU').click()

         // Add to Cart
         cy.get('.ggQUDW').click()

         // Button Save
         cy.get('.sc-gKXOVf > .sc-eCYdqJ').click()

         // Validation of the min-cart-value stream
         cy.get('.sc-iqcoie > p').invoke('text').then(value => {
            return value
         }).should('contain', 'Minimum value of')


         cy.get('.sc-crXcEl').click()
      });
   })

})