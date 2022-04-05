describe('TGL', () => {

   context('Authentication', () => {
      it('authenticate user', () => {

         cy.visit('/auth')

         cy.get(':nth-child(1) > input').type('cris@email.com')
         cy.get(':nth-child(2) > input').type(1234567)

         cy.get('.sc-idiyUo > .sc-eCYdqJ').click()

      });
   })

})