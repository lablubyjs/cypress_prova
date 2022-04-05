describe('TGL', () => {

   context('Validation', () => {
      context('Authentication', () => {

         it('validate empty field validation on authentication page', () => {

            cy.visit('/auth')

            cy.get('.sc-idiyUo > .sc-eCYdqJ').click()

            cy.get('.sc-idiyUo > :nth-child(2)').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Please provide a email')

            cy.get('.sc-idiyUo > :nth-child(4)').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Enter a password')

         });

         it('validate invalid email validation on authentication page', () => {

            cy.visit('/auth')

            cy.get('.sc-idiyUo > .sc-eCYdqJ').click()

            cy.get(':nth-child(1) > input').type('invalid email')

            cy.get('.sc-idiyUo > :nth-child(2)').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Invalid email')

            cy.get('.sc-idiyUo > :nth-child(4)').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Enter a password')

         });
      })

      context('Registration', () => {

         it('validate empty field validation on registration page', () => {

            cy.visit('/registration')

            cy.get('.sc-idiyUo > .sc-eCYdqJ').click()

            cy.get('.sc-idiyUo > :nth-child(2)').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Enter a name')

            cy.get('.sc-idiyUo > :nth-child(4)').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Please provide a valid email')

            cy.get('.sc-idiyUo > :nth-child(6)').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Enter the password')

         });

         it('validate invalid email validation on registration page', () => {
            cy.visit('/registration')

            cy.get(':nth-child(2) > input').type('invalid email')

            cy.get('.sc-idiyUo > .sc-eCYdqJ').click()

            cy.get('.sc-idiyUo > :nth-child(4)').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Invalid email')
         });
      })

      context('Reset Password', () => {

         it('validate empty field validation on reset password page', () => {
      
            cy.visit('/reset-password')
      
            cy.get('.sc-idiyUo > .sc-eCYdqJ').click()
      
            cy.get('.sc-gicCDI').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Please provide a valid email')
      
         });
      
         it('validate invalid email validation on reset password page', () => {

            cy.visit('/reset-password')
      
            cy.get('input').type('invalid email')
      
            cy.get('.sc-idiyUo > .sc-eCYdqJ').click()
      
            cy.get('.sc-gicCDI').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Invalid email')
            
         });

      })

      context('Change Password', () => {
         it('validate empty field validation on change change password page', () => {
      
            cy.visit('/change-password')
      
            cy.get('.sc-idiyUo > .sc-eCYdqJ').click()
      
            cy.get('.sc-idiyUo > :nth-child(2)').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Enter a password')
      
            cy.get('.sc-idiyUo > :nth-child(4)').should('be.visible').invoke('text').then(value => {
               return value
            }).should('contain', 'Enter a password')
      
         });
      
         
      })

   })
})