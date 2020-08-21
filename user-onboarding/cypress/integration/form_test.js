describe('Inputs and buttons', () => {
  it('can navigate to the site', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', 'localhost')
  })

  it('can select and type within the name field', () => {
      cy.get('input[name="name"]')
        .type('Bruh')
        .should('have.value', 'Bruh')
  })

  it('can select and type within the email field', () => {
      cy.get('input[name="email"]')
        .type('bruh@bruh.com')
        .should('have.value', 'bruh@bruh.com')
  })

  it('can select and type within the password field', () => {
      cy.get('input[name="password"]')
        .type('N0t@str0ngP@$$')
        .should('have.value', 'N0t@str0ngP@$$')
  })

  it('can select the ToS input', () => {
    cy.get(':nth-child(6) > input')
      .click()
  })

  it('can see if the user can submit form data', () => {
      cy.get('button')
        .should('not.be.disabled')
  })

  it('can check to see if any of the form fields are blank', () => {
      cy.get('input[name="name"]')
        .should('not.have.value', "")

      cy.get('input[name="email"]')
        .should('not.have.value', "")
    
      cy.get('input[name="password"]')
        .should('not.have.value', "")

      cy.get(':nth-child(6) > input')
        .should('not.have.value', '')
  })

  it('can submit form data', () => {
      cy.get('button')
        .click()
  })
})

// Form works