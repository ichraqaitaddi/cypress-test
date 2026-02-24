/// <reference types="cypress" />

context('firstsenario', () => {
  beforeEach(() => {
    cy.visit('../../src/index.html')
  })



  it("it has a paragraph with text 'hello world'", () => {
    cy.get('p').should('have.text', 'hello world')
    
  })
})

it("Chiffre le texte avec la clé saisie (3 étapes)", () => {
    
    cy.dataCy("cypher-key").clear().type("1");
    cy.dataCy("cypher-message").clear().type("Hello World!");
    cy.dataCy("cypher-btn").click();
    cy.dataCy("cypher-result").should("have.text", "Ifmmp Xpsme!");   
});