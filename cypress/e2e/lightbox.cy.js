describe('Lightbox', () => {

  it('ouvre la lightbox au clic sur l’image', () => {

    cy.visit('lightbox.html')

    cy.get('[data-testid="lightbox-trigger"]').click()

    cy.get('[data-testid="lightbox-modal"]').should('be.visible')

  })

})