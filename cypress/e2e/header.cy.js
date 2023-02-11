import { getByTitle } from "@testing-library/react";

describe("A user should see a Logo, Title, and SearchBar in the Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should connect to localhost site", () => {
    cy.visit("http://localhost:3000");
  });

  it("Should display a title", () => {
    cy.get(".title-logo").contains("TINSELTOWN TRIBUNE");
  });

  it("Should display a logo", () => {
    cy.get('[src="filmLogo.png"]').should("be.visible");
  });

  it("Should display a search bar", () => {
    cy.get('input').should("be.visible");
  });

  it('should be able to search for movies', () => {
    cy.get('input')
      .type('the woman king')
      .get('.movie-container')
      .should('have.text', 'The Woman King')
});

  // it("Should display no movies found, if no movies are found", () => {
  //   cy.get('').should("");
  // });


});
