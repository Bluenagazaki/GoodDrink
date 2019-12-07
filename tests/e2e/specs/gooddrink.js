beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

describe('Home Page', () => {

  it('Should display the home page', () => {
    cy.visit('/');
    cy.get('h2').contains('Why limit happy to an hour?');
    cy.get('p').contains('Become THE bartender');
  });

  it('Should display the home page when logo is clicked', () => {
    cy.get('.logo').click();
    cy.get('h2').contains('Why limit happy to an hour?');
    cy.get('p').contains('Become THE bartender');
  });

});

describe('Random Page', () => {

  it('Should display the random page', () => {
    cy.visit('/random');
  });

  it('Should get random cocktails', () => {
    cy.get('.card').should('have.length', 16);
  });

  it('Should refresh the random cocktails', () => {
    cy.get('#refreshRandom').click();
    cy.get('.card').should('have.length', 16);
  });

  it('Should open the cocktail page', () => {
    cy.get('.card').first().click();
  });

});

describe('Favorite Page', () => {

  it('Should display the favorites page', () => {
    cy.visit('/list');
  });

  it('Should add Mojito to favs', () => {
    cy.visit('/drink/11000');
    cy.get('.drinkName').contains('Mojito');
    cy.get('.favBtn').click();
  });

  it('Should add Caipirinha to favs', () => {
    cy.visit('/drink/11202');
    cy.get('.drinkName').contains('Caipirinha');
    cy.get('.favBtn').click();
  });

  it('Should add Pina Colada to favs', () => {
    cy.visit('/drink/17207');
    cy.get('.drinkName').contains('Pina Colada');
    cy.get('.favBtn').click();
  });

  it('Should get back to the favorites page', () => {
    cy.visit('/list');
    cy.get('.card').should('have.length', 3);
  });

  it('Should remove Mojito from favs', () => {
    cy.visit('/drink/11000');
    cy.get('.drinkName').contains('Mojito');
    cy.get('.favBtn').click();
  });

  it('Should get back to the favorites page', () => {
    cy.visit('/list');
    cy.get('.card').should('have.length', 2);
  });

});

describe('Search Page', () => {

  it('Should display the search page', () => {
    cy.visit('/search');
  });

  it('Should search for an item', () => {
    cy.get('#searchbar-input').type("Pina Colada");
  });

  it('Should have at least one result', () => {
    cy.get('.card').should('have.length.gt', 0).first().click();
  });

  it('Should display the Pina Colada page', () => {
    cy.get('.drinkName').contains('Pina Colada');
  });
});
