describe("A user should see the list of Movies", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should connect to localhost site", () => {
    cy.visit("http://localhost:3000");
  });

  it("Should display a title", () => {
    cy.get(".movie-container").should("be.visible");
  });

  it("Should display all movies", () => {
    cy.get(".movie-container").find(".poster-image").should("have.length", "40");
  });
});
