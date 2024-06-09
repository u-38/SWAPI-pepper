describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('should display 2 players when the game starts', () => {
    cy.get('[data-id="feature-player"]').should('have.length', 2);
  });

  it('should display the play game button and start the game', () => {
    cy.get('[data-id="play-button"]').should('be.visible').click();
    cy.get('[data-id="countdown"]').contains('Game starts in').should('be.visible');
    cy.wait(4000);
    cy.get('[data-id="winner-card"]').should('be.visible');
  });

  it('should reset the game when the Play Again button is clicked', () => {
    cy.get('[data-id="play-button"]').should('be.visible').click();
    cy.wait(4000);
    cy.get('[data-id="reset-button"]').should('be.visible').click();
    cy.get('[data-id="play-button"]').should('be.visible');
  });

})
