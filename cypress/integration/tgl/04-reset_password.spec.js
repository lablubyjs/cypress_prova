describe('TGL', () => {

   context('Reset Password', () => {
      it('request link to reset password and change password', () => {

         cy.visit('/reset-password')

         cy.get('input').type('cris@email.com')

         cy.get('.sc-idiyUo > .sc-eCYdqJ').click()

         cy.intercept('POST', '**/reset**').as('waitEventRoute')

         cy.wait('@waitEventRoute').then((interception) => {
            window.localStorage.setItem('token', interception.response.body.token)
         })

         cy.visit('/change-password')

         cy.get(':nth-child(1) > input').type('1234567')
         cy.get(':nth-child(2) > input').type('1234567')

         cy.get('.sc-idiyUo > .sc-eCYdqJ').click()

      });
   })
})