describe("A user should see the list of Movies", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {fixture: "library.json"})
  });

  it("Should connect to localhost site", () => {
    cy.visit("http://localhost:3000");
  });

  it("Should display a title", () => {
    cy.get('section[class="movie-title"]').should("be.visible");
  });

  it("Should display all movies", () => {
    cy.get(".movie-container").find(".poster-image").should("have.length", "5");
  });

  it("Should display star image", () => {
    cy.get(".star-image").should("be.visible");
  });

  it("Should display search bar", () => {
    cy.get(".star-image").should("be.visible");
  });

  // it("should be able to click on a movie and redirec to movie page", () => { 
  //   cy.get('section[class="movie-poster-container"]').click() 
  //   cy.url().should('eq', 'http://localhost:3000/436270') 
  // })

  it('Should redirect to movie page after clicking on movie poster', () => {
    cy.visit('http://localhost:3000')
    cy.get('.poster-image').first().click(); 
    cy.location('http://localhost:3000/movies/').should('include', '/436270');
});
//should check url against expexted rules using
});
