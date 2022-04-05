describe('TGL', () => {

   context('Logout', () => {
      it('logout user', () => {

         cy.login()

         cy.visit('/home')

         cy.get('.sc-llJcti > :nth-child(2)').click()
      });
   })

})