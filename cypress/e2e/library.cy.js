describe("A user should see the list of Movies", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {fixture: "library.json"})
  });

  it("Should connect to localhost site", () => {
    cy.visit("http://localhost:3000");
  });

  it("Should display a title", () => {
    cy.get('section[class="movie-title-library"]').should("be.visible");
  });

  it("Should display all movies", () => {
    cy.get(".movie-container").find(".poster-image").should("have.length", "5");
  });

  it('Should redirect to movie page after clicking on movie poster', () => {
    cy.visit('http://localhost:3000')
    cy.get('.poster-image').first().click(); 
    cy.url('http://localhost:3000/movies/').should('include','/436270');
  });
});
