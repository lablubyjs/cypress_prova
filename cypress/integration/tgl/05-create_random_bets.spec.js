describe('TGL', () => {

   context('Create Random Bets', () => {
      it('create game with complete game, save and validate min-cart-value', () => {

         cy.login()

         cy.visit('/games')

         cy.intercept('GET', '**/cart_games**').as('waitEventRoute')

         cy.wait('@waitEventRoute').then((interception) => {
            expect(interception.response.statusCode).be.eq(200)
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

         // Complete Game
         cy.get('.beykUU').click()

         // Add to Cart
         cy.get('.ggQUDW').click()

         // Button Save
         cy.get('.sc-gKXOVf > .sc-eCYdqJ').click()


         // Confirm Save Games
         cy.get('.sc-iqcoie > div > :nth-child(1)').click()
      });
   })
})