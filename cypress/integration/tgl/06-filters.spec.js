describe('TGL', () => {

   context('Filters', () => {
      it('validation filter bets', () => {

         cy.login()

         cy.visit('/')

         cy.intercept('GET', '**/cart_games**').as('waitEventRoute')

         cy.wait('@waitEventRoute').then((interception) => {
            expect(interception.response.statusCode).be.eq(200)
         })

         cy.intercept('GET', '**/bet/all-bets?type**').as('waitEventRoute')

         cy.wait('@waitEventRoute').then((interception) => {
            expect(interception.response.statusCode).be.eq(200)
         })

         cy.get('.sc-hKMtZM').each(element => {

            element.each((key) => {

               element[key].childNodes.forEach(item => {
                  cy.get(item).click()
               })

            })

         })
         
      });
   })
})